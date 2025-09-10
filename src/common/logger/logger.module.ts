import { Module } from '@nestjs/common';

import GlobalConfigService from '../config/config.service';
import { AppLogger } from '.';

@Module({
  providers: [AppLogger, GlobalConfigService],
  exports: [AppLogger],
})
export class LoggerModule {}
