import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { Member } from '../entity/user.entity';
import { BaseRepository } from 'src/common/db/type-orm.base.repository';

@Injectable()
export class MemberRepository extends BaseRepository<Member> {
  constructor(ds: DataSource) {
    super(Member, ds);
  }
}
