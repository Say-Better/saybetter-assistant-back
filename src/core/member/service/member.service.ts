import { Injectable } from "@nestjs/common";
import { MemberRepository } from "../repository/member.repository";
import { Member } from "../entity/member.entity";

@Injectable()
export class MemberService {
  constructor(private readonly memberRepository: MemberRepository) {}

  async test() {
    //return this.memberRepository.save(Member.getInstance('testid', 'testpw'))
  }
}