import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import GlobalConfigModule from './common/config/config.module';
import { LoggerModule } from './common/logger/logger.module';
import { MemberController } from './module/user/user.controller';
import { MemberService } from './core/user/service/user.service';
import { MemberRepository } from './core/user/repository/user.repository';
import { DataSource } from 'typeorm';
import { MysqlModule } from './common/db/mysql.module';

@Module({
  imports: [
    GlobalConfigModule,
    MysqlModule,
    LoggerModule,
  ],
  controllers: [AppController, MemberController],
  providers: [AppService, MemberService, MemberRepository],
})
export class AppModule {}
