import { Injectable } from "@nestjs/common";
import { MemberRepository } from "../repository/user.repository";
import { Member } from "../entity/user.entity";

@Injectable()
export class MemberService {
  constructor(private readonly memberRepository: MemberRepository) {}

  async test() {
    return this.memberRepository.save(Member.getInstance('testid', 'testpw'))
  }
}