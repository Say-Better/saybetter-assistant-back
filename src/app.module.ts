import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import GlobalConfigModule from './common/config/config.module';
import { MysqlModule } from './common/db/mysql.module';
import { LoggerModule } from './common/logger/logger.module';
import { UserRepository } from './shared/user/user.repository';
import { MemberController } from './user/controllers/user.controller';
import { MemberCurdService } from './user/providers/user.service';

@Module({
  imports: [GlobalConfigModule, MysqlModule, LoggerModule],
  controllers: [AppController, MemberController],
  providers: [AppService, MemberCurdService, UserRepository],
})
export class AppModule {}
