import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import GlobalConfigModule from './common/config/config.module';
import { MysqlModule } from './common/db/mysql.module';
import { LoggerModule } from './common/logger/logger.module';
import { MemberRepository } from './user/repository/user.repository';
import { MemberService } from './user/providers/user.service';
import { MemberController } from './user/controllers/user.controller';

@Module({
  imports: [GlobalConfigModule, MysqlModule, LoggerModule],
  controllers: [AppController, MemberController],
  providers: [AppService, MemberService, MemberRepository],
})
export class AppModule {}
