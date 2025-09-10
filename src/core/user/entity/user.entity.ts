import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('MEMBER')
export class Member {
  @PrimaryGeneratedColumn()
  memberNum: number;
  @Column()
  id: string;
  @Column()
  password: string;
  @CreateDateColumn()
  createdAt: Date;
  @CreateDateColumn()
  updatedAt: Date;

  static getInstance(id: string, password: string) {
    const instance = new Member();

    instance.id = id;
    instance.password = password;
    instance.createdAt = new Date();
    instance.updatedAt = new Date();

    return instance;
  }
}