import { Controller, Get } from '@nestjs/common';

import { MemberService } from 'src/shared/user/service/user.service';

@Controller('/member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  async test() {
    return await this.memberService.test();
  }
}
