import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

export enum AgeRange {
  TEENS = "10대",
  TWENTIES = "20대",
  THIRTIES = "30대",
  FORTIES = "40대",
  FIFTY_PLUS = "50대 이상",
}

export enum Gender {
  MALE = "M",
  FEMALE = "F",
}

@Entity("Member")
export class Member {
  @PrimaryGeneratedColumn({
    name: "memberNum",
    type: "bigint",
    unsigned: true,
    comment: "멤버 번호",
  })
  memberNum: number;

  @Column({
    type: "varchar",
    length: 50,
    nullable: false,
    comment: "id",
  })
  id: string;

  @Column({
    type: "text",
    nullable: false,
    comment: "비밀번호",
  })
  password: string;

  @Column({
    type: "text",
    nullable: false,
    comment: "선호하는 대화 주제 (자연어 서술식)",
  })
  preferSubject: string;

  @Column({
    type: "varchar",
    length: 45,
    nullable: false,
    comment: "이름",
  })
  name: string;

  @Column({
    type: "enum",
    enum: AgeRange,
    nullable: false,
    comment: "나이 Enum (10대, 20대, 30대, 40대, 50대 이상)",
  })
  age: AgeRange;

  @Column({
    type: "enum",
    enum: Gender,
    nullable: false,
    comment: "성별",
  })
  gender: Gender;

  @CreateDateColumn({
    type: "timestamp",
    comment: "current_timestamp",
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
    comment: "current_timestamp on update current_timestamp",
  })
  updatedAt: Date;
}
