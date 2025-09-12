import { Module } from "@nestjs/common";
import GlobalConfigModule from "src/common/config/config.module";
import { LoggerModule } from "src/common/logger/logger.module";
import { MemberRepository } from "src/core/member/repository/member.repository";
import { MemberService } from "src/core/member/service/member.service";
import { MemberController } from "./member.controller";

@Module({
  imports: [GlobalConfigModule, LoggerModule],
  controllers: [MemberController],
  providers: [MemberService, MemberRepository],
})
export class MemberModule {}
