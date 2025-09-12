import { Gender } from 'src/shared/member';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('MEMBER')
export class Member {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true, name: 'id' })
  memberNum!: number;

  @Column('varchar', {nullable: false, length: 255, name: 'user_id'})
  id!: string;

  @Column('varchar', {nullable: false, length: 255, name: 'user_password'})
  password!: string;

  @Column('text', {nullable: false, name: 'prefer_subject'})
  preferSubject!: string;

  @Column('varchar', {nullable: false, length: 45, name: 'name'})
  name!: string;

  @Column('varchar', { nullable: false, length: 10, name: 'age' })
  age!: string;

  @Column('tinyint', { nullable: false, default: 0, name: 'gender' })
  gender!: Gender;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP', name: 'updated_at' })
  updatedAt!: Date;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  createdAt!: Date;

}
