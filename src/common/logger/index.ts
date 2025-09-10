import { Injectable, LoggerService } from '@nestjs/common';
import GlobalConfigService from '../config/config.service';

@Injectable()
export class AppLogger implements LoggerService {
  constructor(private readonly config: GlobalConfigService) {}

  private logMessage(level: string, message: string, meta?: object) {
    switch (level) {
      case 'error':
        console.error(`[ERROR] ${message}`, meta);
        break;
      case 'warn':
        console.warn(`[WARN] ${message}`, meta);
        break;
      case 'debug':
        console.debug(`[DEBUG] ${message}`, meta);
        break;
      case 'verbose':
        console.info(`[VERBOSE] ${message}`, meta);
        break;
      default:
        console.log(`[INFO] ${message}`, meta);
    }
  }

  log(message: string, context?: string) {
    this.logMessage('info', message, { context });
  }

  error(message: string, trace?: string, context?: string) {
    this.logMessage('error', message, { trace, context });
  }

  warn(message: string, context?: string) {
    this.logMessage('warn', message, { context });
  }

  debug(message: string, context?: string) {
    this.logMessage('debug', message, { context });
  }

  verbose(message: string, context?: string) {
    this.logMessage('verbose', message, { context });
  }
}
