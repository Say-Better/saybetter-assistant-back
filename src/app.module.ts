import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';

import { BaseModule } from './base';
import { CommonModule } from './common';
import { ExceptionFilter } from './common/filters';
import { configuration, loggerOptions } from './config';
import { ConversationModule } from './shared/conversation/conversation.module';
import { MemberModule } from './shared/member/member.module';
import { StatementModule } from './shared/statement/statement.module';

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
    MemberModule,
    ConversationModule,
    StatementModule,
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
