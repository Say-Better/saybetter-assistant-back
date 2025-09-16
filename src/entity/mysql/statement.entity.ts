import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Bookmark, Speaker } from 'src/shared/statement';

@Entity('STATEMENT')
export class Statement {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  statementNum!: number;

  @Column('int', { nullable: false })
  conversationNum!: number;

  @Column('tinyint', { nullable: false, default: 0 })
  bookmark!: number | Bookmark;

  @Column('tinyint', { nullable: false, default: 1 })
  speaker!: number | Speaker;

  @Column('text', { nullable: false })
  content!: string;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column('int', { nullable: false })
  memberNum!: number;

  public constructor(data?: Partial<Statement>) {
    if (data) {
      Object.assign(this, data);
    }
  }

  static getInstanceForSave(memberNum: number, conversationNum: number, content: string, speaker: Speaker): Statement {
    return new Statement({
      memberNum: memberNum,
      conversationNum: conversationNum,
      content: content,
      speaker: speaker,
      bookmark: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}
