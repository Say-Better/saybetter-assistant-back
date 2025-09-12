import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

export enum TimeTag {
  MORNING = "아침",
  NOON = "점심",
  EVENING = "저녁",
  NIGHT = "밤",
}

@Entity("Conversation")
export class Conversation {
  @PrimaryGeneratedColumn({
    name: "conversationNum",
    type: "bigint",
    unsigned: true,
  })
  conversationNum: number;

  @Column({
    type: "bigint",
    unsigned: true,
    nullable: true,
  })
  memberNum: number;

  @Column({
    type: "varchar",
    length: 45,
    nullable: false,
    comment: "대화 당시 기상 상황 (기상청 API)",
  })
  climate: string;

  @Column({
    type: "enum",
    enum: TimeTag,
    nullable: false,
    comment:
      "시간대 (아침(일출 이후), 점심(정오 이후), 저녁(일몰 후), 밤 (자정 넘어서))",
  })
  timeTag: TimeTag;

  @CreateDateColumn({
    type: "timestamp",
    comment: "대화 시간",
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
  })
  updatedAt: Date;
}
