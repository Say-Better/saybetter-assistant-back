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
  timeTag!: string | TimeTag;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;
}
