import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

import GlobalConfigService from '../config/config.service';
import { AppLogger } from '../logger';
import MysqlLogger from './mysql.logger';
import { MysqlNamingStrategy } from './mysql.naming';

@Injectable()
export class MysqlConfigService implements TypeOrmOptionsFactory {
  constructor(
    private readonly logger: AppLogger,
    private configService: GlobalConfigService,
  ) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.configService.mysqlHost,
      port: this.configService.mysqlPort,
      username: this.configService.mysqlUser,
      password: this.configService.mysqlPw,
      database: this.configService.mysqlDb,
      logger: new MysqlLogger(this.logger),
      namingStrategy: new MysqlNamingStrategy(),
      dropSchema: false,
      entities: ['dist/**/*.entity.js'],
      synchronize: false,
      poolSize: this.configService.mySqlCPSize,
      connectTimeout: 20_000,
      extra: {
        keepAliveInitialDelay: 1000,
        idleTimeout: 60_000,
        enableKeepAlive: true,
      },
    };
  }
}
