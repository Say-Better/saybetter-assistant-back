import { Controller, Get } from '@nestjs/common';

import { MemberService } from 'src/core/user/service/user.service';

@Controller('/member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  async test() {
    return await this.memberService.test();
  }
}
