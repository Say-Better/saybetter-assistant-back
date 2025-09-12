/* eslint-disable @typescript-eslint/no-unsafe-call */
import type { INestApplication } from '@nestjs/common';
import compression from 'compression';
import session from 'express-session';
import passport from 'passport';

export function middleware(app: INestApplication): INestApplication {
  const isProduction = process.env.NODE_ENV === 'production';

  app.use(compression());
  app.use(
    session({
      // Requires 'store' setup for production
      secret: 'tEsTeD',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: isProduction },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  return app;
}
