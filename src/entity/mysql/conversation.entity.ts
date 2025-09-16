import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TimeTag } from 'src/shared/conversation';

@Entity('CONVERSATION')
export class Conversation {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  conversationNum!: number;

  @Column('int', { nullable: false })
  memberNum!: number;

  @Column('varchar', { nullable: false, length: 45, })
  climate!: string;

  @Column('varchar', { nullable: false, length: 10 })
  timeTag!: TimeTag;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  constructor(data?: Partial<Conversation>) {
    if (data) {
      Object.assign(this, data);
    }
  }

  static getInstanceForSave(memberNum: number, climate: string, timeTag: TimeTag): Conversation {
    return new Conversation({
      memberNum: memberNum,
      climate: climate,
      timeTag: timeTag,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}
