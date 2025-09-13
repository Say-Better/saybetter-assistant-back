import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { SignUp } from 'src/shared/member/member.dto';

@Entity('MEMBER')
export class Member {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  memberNum!: number;

  @Column('varchar', { nullable: false, length: 255 })
  id!: string;

  @Column('varchar', { nullable: false, length: 255 })
  password!: string;

  @Column('text', { nullable: false })
  preferSubject!: string;

  @Column('varchar', { nullable: false, length: 45 })
  name!: string;

  @Column('varchar', { nullable: false, length: 10 })
  age!: string;

  @Column('tinyint', { nullable: false, default: 0 })
  gender!: number;

  @Column('timestamp', { nullable: false, default: new Date() })
  updatedAt!: Date;

  @Column('timestamp', { nullable: false, default: new Date() })
  createdAt!: Date;

  constructor(data?: Partial<Member>) {
    if (data) {
      Object.assign(this, data);
    }
  }

  static getInstanceForJoin(dto: SignUp): Member {
    return new Member({
      id: dto.memberId,
      password: dto.password,
      preferSubject: dto.preferSubject,
      name: dto.name,
      age: dto.age,
      gender: dto.gender,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}
