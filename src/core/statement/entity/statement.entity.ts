import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

export enum Speaker {
  MEMBER = "M", // 유저 자신
  OTHER = "O", // 타인
}

@Entity("Statement")
export class Statement {
  @PrimaryGeneratedColumn({
    name: "statementNum",
    type: "bigint",
    unsigned: true,
  })
  statementNum: number;

  @Column({
    type: "bigint",
    unsigned: true,
    nullable: false,
  })
  memberNum: number;

  @Column({
    type: "bigint",
    unsigned: true,
    nullable: false,
  })
  conversationNum: number;

  @Column({
    type: "tinyint",
    nullable: false,
    default: 0,
    comment: "즐겨찾기 True (1)/ False (0)",
  })
  bookmark: number;

  @Column({
    type: "enum",
    enum: Speaker,
    nullable: false,
    comment: "화자가 누구인지 여부 M(유저 자신), O(타인)",
  })
  speaker: Speaker;

  @CreateDateColumn({
    type: "timestamp",
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
  })
  updatedAt: Date;
}
