import type { Logger } from 'typeorm';

import type { AppLogger } from '../logger';

export default class MysqlLogger implements Logger {
  constructor(private readonly logger: AppLogger) {}

  logQuery(query: string, parameters?: any[]) {
    this.logger.log(`Query: ${query} -- Parameters: ${JSON.stringify(parameters)}`);
  }

  logQueryError(error: string, query: string, parameters?: any[]) {
    this.logger.error(`Query Error: ${error} -- Query: ${query} -- Parameters: ${JSON.stringify(parameters)}`, '');
  }

  logQuerySlow(time: number, query: string, parameters?: any[]) {
    this.logger.warn(`Slow Query: ${query} -- Parameters: ${JSON.stringify(parameters)} -- Execution time: ${time}`);
  }

  logSchemaBuild(message: string) {
    this.logger.log(`Schema Build: ${message}`);
  }

  logMigration(message: string) {
    this.logger.log(`Migration: ${message}`);
  }

  log(level: 'log' | 'info' | 'warn', message: any) {
    switch (level) {
      case 'log': {
        this.logger.log(message);

        break;
      }
      case 'info': {
        this.logger.log(message);

        break;
      }
      case 'warn': {
        this.logger.warn(message);

        break;
      }
      // No default
    }
  }
}
