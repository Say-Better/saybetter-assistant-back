import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

import { Member } from '#entity/mysql';
import { MemberInfo, Preferences, SignUp } from './member.dto';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private readonly member: Repository<Member>,
  ) {}

  async signUp(body: SignUp): Promise<MemberInfo> {
    const existingMember = await this.member.findOneBy({ id: body.memberId });
    if (existingMember) {
      throw new ConflictException('The provided user ID is already in use.');
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const newMember = Member.getInstanceForJoin({
      memberId: body.memberId,
      name: body.name,
      age: body.age,
      gender: body.gender,
      preferSubject: body.preferSubject,
      password: hashedPassword,
    });

    await this.member.save(newMember);

    return new MemberInfo(newMember);
  }

  async signIn(memberId: string, password: string): Promise<MemberInfo> {
    const member = await this.member.findOneBy({ id: memberId });
    if (!member) {
      throw new UnauthorizedException('Invalid user ID or password.');
    }

    const isPasswordValid = await bcrypt.compare(password, member.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid user ID or password.');
    }

    return new MemberInfo(member);
  }

  async updatePreferences(memberNum: number, preferSubject: Preferences): Promise<MemberInfo> {
    const member = await this.member.findOneBy({ memberNum });
    if (!member) {
      throw new NotFoundException('Member not found');
    }

    member.name = preferSubject.name ?? member.name;
    member.age = preferSubject.age ?? member.age;
    member.gender = preferSubject.gender ?? member.gender;
    member.preferSubject = preferSubject.preferSubject ?? member.preferSubject;

    member.updatedAt = new Date();

    const result = await this.member.save(member);
    return new MemberInfo(result);
  }
}
