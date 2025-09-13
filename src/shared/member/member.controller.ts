/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, Param, Patch, Post } from '@nestjs/common';

import { MemberService } from '.';
import { SignUp, SignIn, MemberInfo, Preferences } from './member.dto';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post('/sign-up')
  async signUp(@Body() body: SignUp) {
    return await this.memberService.signUp(body);
  }

  @Post('/sign-in')
  async signIn(@Body() body: SignIn) {
    return await this.memberService.signIn(body.memberId, body.password);
  }

  @Patch('/:memberNum/preferences')
  async updatePreferences(@Param('memberNum') memberNum: number, @Body() body: Preferences): Promise<MemberInfo> {
    return await this.memberService.updatePreferences(memberNum, body);
  }
}
