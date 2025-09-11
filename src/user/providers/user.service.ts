import { Injectable } from '@nestjs/common';

import { UserService } from 'src/shared/user/user.service';

@Injectable()
export class MemberCurdService {
  constructor(private readonly memberService: UserService) {}

  async save() {
    return await this.memberService.save();
  }
}
