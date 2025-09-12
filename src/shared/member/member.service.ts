import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Member } from '#entity/mysql';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Member)
    private readonly member: Repository<Member>,
  ) {}

  async save(): Promise<void> {
    await this.member.save({
      id: 'test',
      // TODO: password encrypt
      password: 'test',
      preferSubject: 'test',
      name: 'test',
      age: 'test',
      gender: 0,
    });
  }
}
