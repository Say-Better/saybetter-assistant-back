import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MysqlConfigService } from './mysql.service.config';
import GlobalConfigModule from '../config/config.module';
import { LoggerModule } from '../logger/logger.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [GlobalConfigModule, LoggerModule],
      useClass: MysqlConfigService,
    }),
  ],
})
export class MysqlModule {}
