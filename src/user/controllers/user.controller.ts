import { Controller, Get } from '@nestjs/common';

import { MemberService } from 'src/user/providers/user.service';

@Controller('/member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  async test() {
    return await this.memberService.test();
  }
}
