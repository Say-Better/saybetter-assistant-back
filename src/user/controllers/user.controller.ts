import { Controller, Get } from '@nestjs/common';

import { MemberCurdService } from 'src/user/providers/user.service';

@Controller('/member')
export class MemberController {
  constructor(private readonly memberService: MemberCurdService) {}

  @Get()
  async test() {
    return await this.memberService.save();
  }
}
