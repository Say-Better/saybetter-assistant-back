import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER, APP_PIPE, RouterModule } from '@nestjs/core';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';

import { CommonModule } from './common';
import { ExceptionFilter } from './common/filters';
import { configuration, loggerOptions } from './config';
import { MemberModule } from './user/user.module';
import { BaseModule } from './base';

@Module({
  imports: [
    LoggerModule.forRoot(loggerOptions),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        ...config.get<TypeOrmModuleOptions>('db'),
      }),
      inject: [ConfigService],
    }),
    CommonModule,
    BaseModule,
    RouterModule.register([
      {
        path: 'member',
        module: MemberModule,
      },
    ]),
  ],
  providers: [
    { provide: APP_FILTER, useClass: ExceptionFilter },
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        transform: true,
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {}
