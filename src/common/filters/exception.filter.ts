import { Catch, ArgumentsHost, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Request, Response } from 'express';

@Catch()
export class ExceptionFilter extends BaseExceptionFilter {
  private readonly logger = new Logger();

  public override catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const status = this.getHttpStatus(exception);

    if (exception instanceof Error) {
      if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          timestamp: new Date().toISOString(),
          path: request.url,
          message: 'Internal server error',
        });
      } else {
        response.status(status).json({
          statusCode: status,
          timestamp: new Date().toISOString(),
          path: request.url,
          message: exception.message,
        });
      }
      this.logger.error(`[${request.method}] ${request.originalUrl}\n${exception.message}\n${exception.stack}`);
    } else {
      this.logger.error('UnhandledException', exception);
    }
  }

  private getHttpStatus(exception: unknown): HttpStatus {
    return exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
  }
}
