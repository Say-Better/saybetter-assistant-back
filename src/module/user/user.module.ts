import { Module } from '@nestjs/common';

import { MemberController } from './user.controller';
import GlobalConfigModule from 'src/common/config/config.module';
import { LoggerModule } from 'src/common/logger/logger.module';
import { MemberRepository } from 'src/shared/user/repository/user.repository';
import { MemberService } from 'src/shared/user/service/user.service';

@Module({
  imports: [GlobalConfigModule, LoggerModule],
  controllers: [MemberController],
  providers: [MemberService, MemberRepository],
})
export class MemberModule {}
