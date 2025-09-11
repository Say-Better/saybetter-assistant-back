import { Module } from '@nestjs/common';

import { AppLogger } from '.';
import GlobalConfigService from '../config/config.service';

@Module({
  providers: [AppLogger, GlobalConfigService],
  exports: [AppLogger],
})
export class LoggerModule {}
