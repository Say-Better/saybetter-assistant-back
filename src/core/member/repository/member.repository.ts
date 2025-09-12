import { Injectable } from "@nestjs/common";
import { Member } from "../entity/member.entity";
import { BaseRepository } from "src/common/db/type-orm.base.repository";
import { DataSource } from "typeorm";

@Injectable()
export class MemberRepository extends BaseRepository<Member> {
  constructor(ds: DataSource) {
    super(Member, ds);
  }
}
