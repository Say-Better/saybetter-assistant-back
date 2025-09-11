import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export default class GlobalConfigService {
  constructor(private configService: ConfigService) {}

  get<T>(key: string): T | undefined {
    return this.configService.get<T>(key);
  }

  get port(): number | undefined {
    return this.configService.get<number>('API_PORT');
  }

  get serviceLink(): string | undefined {
    return this.configService.get<string>('SERVICE_LINK');
  }

  get mysqlHost(): string | undefined {
    return this.configService.get<string>('MYSQL_HOST');
  }

  get mysqlPort(): number | undefined {
    return this.configService.get<number>('MYSQL_PORT');
  }

  get mysqlDb(): string | undefined {
    return this.configService.get<string>('MYSQL_DB');
  }

  get mysqlUser(): string | undefined {
    return this.configService.get<string>('MYSQL_USER');
  }

  get mysqlPw(): string | undefined {
    return this.configService.get<string>('MYSQL_PW');
  }

  get mySqlCPSize(): number | undefined {
    return this.configService.get<number>('MYSQL_CP_SIZE');
  }
}
