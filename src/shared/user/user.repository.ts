import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { Member } from '../../entity/mysql/user.entity';
import { BaseRepository } from 'src/common/db/type-orm.base.repository';

@Injectable()
export class UserRepository extends BaseRepository<Member> {
  constructor(ds: DataSource) {
    super(Member, ds);
  }
}
