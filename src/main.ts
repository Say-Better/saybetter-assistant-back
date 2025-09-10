import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import GlobalConfigService from './common/config/config.service';
import { GlobalExceptionFilter } from './common/exception/exception.filter';
import { AppLogger } from './common/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const global_config = app.get(GlobalConfigService);

  const logger = new AppLogger(global_config);
  // 기본 로깅 모듈 변경
  app.useLogger(logger);

  // 전역 에러 처리
  app.useGlobalFilters(new GlobalExceptionFilter(logger));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // 객체를 클래스 인스턴스로 자동 변환
      // whitelist: true, // DTO에 없는 속성 자동 제거
      // forbidNonWhitelisted: true, // 허용되지 않은 속성 전달 시 에러 발생
    }),
  );

  // CORS 옵션 설정 (미들웨어 사용)
  app.enableCors({
    origin: global_config.serviceLink,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Accept', 'Authorization'],
    credentials: true,
  });

  await app.listen(global_config.port || 3010);
}

bootstrap();
