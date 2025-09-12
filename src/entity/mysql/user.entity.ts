import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('MEMBER')
export class Member {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true, name: 'id' })
  memberNum!: number;

  @Column('varchar', {nullable: false, length: 255, name: 'user_id'})
  id!: string;

  @Column('varchar', {nullable: false, length: 255, name: 'user_password'})
  password!: string;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP', name: 'updated_at' })
  updatedAt!: Date;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  createdAt!: Date;

  static getInstance(id: string, password: string) {
    const instance = new Member();

    instance.id = id;
    instance.password = password;
    instance.createdAt = new Date();
    instance.updatedAt = new Date();

    return instance;
  }
}
