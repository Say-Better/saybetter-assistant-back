import type { Request } from 'express';
import { nanoid } from 'nanoid';
import type { Params } from 'nestjs-pino';
import { multistream } from 'pino';
import type { ReqId } from 'pino-http';

const passUrl = new Set(['/health']);

export const loggerOptions: Params = {
  pinoHttp: [
    {
      quietResLogger: true,
      genReqId: (req): ReqId => (<Request>req).header('X-Request-Id') ?? nanoid(),
      ...(process.env.NODE_ENV === 'production'
        ? {}
        : {
            level: 'debug',
            transport: {
              target: 'pino-pretty',
              options: { sync: true, singleLine: true },
            },
          }),
      autoLogging: {
        ignore: (req) => passUrl.has((<Request>req).originalUrl),
      },
      // customProps: (req) => (<Request>req).customProps,
    },
    multistream(
      [
        { level: 'debug', stream: process.stdout },
        { level: 'error', stream: process.stderr },
        { level: 'fatal', stream: process.stderr },
      ],
      { dedupe: true },
    ),
  ],
};
