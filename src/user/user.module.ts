import { Module } from '@nestjs/common';

import { MemberController } from './controllers/user.controller';
import GlobalConfigModule from 'src/common/config/config.module';
import { LoggerModule } from 'src/common/logger/logger.module';
import { MemberRepository } from 'src/user/repository/user.repository';
import { MemberService } from 'src/user/providers/user.service';

@Module({
  imports: [GlobalConfigModule, LoggerModule],
  controllers: [MemberController],
  providers: [MemberService, MemberRepository],
})
export class MemberModule {}
