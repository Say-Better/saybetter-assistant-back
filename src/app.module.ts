import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configuration, loggerOptions } from './config';
import { UserRepository } from './shared/user/user.repository';
import { MemberController } from './user/controllers/user.controller';
import { MemberCurdService } from './user/providers/user.service';

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
  ],
  controllers: [AppController, MemberController],
  providers: [AppService, MemberCurdService, UserRepository],
})
export class AppModule {}
