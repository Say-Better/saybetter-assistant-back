import { Module } from "@nestjs/common";
import GlobalConfigModule from "../config/config.module";
import { LoggerModule } from "../logger/logger.module";
import { MysqlConfigService } from "./mysql.service.config";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
      TypeOrmModule.forRootAsync({
        imports: [GlobalConfigModule, LoggerModule],
        useClass: MysqlConfigService,
      }),
    ],
  })
  export class MysqlModule {}
  