import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import GlobalConfigModule from './common/config/config.module';
import { MysqlModule } from './common/db/mysql.module';
import { loggerOptions } from './config';
import { UserRepository } from './shared/user/user.repository';
import { MemberController } from './user/controllers/user.controller';
import { MemberCurdService } from './user/providers/user.service';

@Module({
  imports: [LoggerModule.forRoot(loggerOptions), GlobalConfigModule, MysqlModule],
  controllers: [AppController, MemberController],
  providers: [AppService, MemberCurdService, UserRepository],
})
export class AppModule {}
