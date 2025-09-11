import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MysqlModule } from './common/db/mysql.module';
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
    MysqlModule,
  ],
  controllers: [AppController, MemberController],
  providers: [AppService, MemberCurdService, UserRepository],
})
export class AppModule {}
