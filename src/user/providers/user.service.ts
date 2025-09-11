import { Injectable } from '@nestjs/common';

import { Member } from '../../entity/user.entity';
import { MemberRepository } from '../repository/user.repository';

@Injectable()
export class MemberService {
  constructor(private readonly memberRepository: MemberRepository) {}

  async test() {
    return await this.memberRepository.save(Member.getInstance('testid', 'testpw'));
  }
}
