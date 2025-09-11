import { Controller, Get } from "@nestjs/common";
import { MemberService } from "src/core/member/service/member.service";

@Controller('/member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  test() {
    return this.memberService.test();
  }
}