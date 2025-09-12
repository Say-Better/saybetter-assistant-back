import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Member } from "./member.entity";
import { Conversation } from "./conversation.entity";
import { Bookmark, Speaker } from "src/shared/statement";

@Entity('STATEMENT')
export class Statement {
  @PrimaryGeneratedColumn({type:'int', unsigned:true, name: 'statement_num'})
  statementNum!: number;

  @Column('tinyint', { nullable: false, default: 0, name: 'bookmark'})
  bookmark!: number | Bookmark;

  @Column('tinyint', { nullable: false, default: 1, name: 'speaker'})
  speaker!: number | Speaker;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP', name: 'updated_at' })
  updatedAt!: Date;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  createdAt!: Date;

  /**
   * Relations
   */
  @ManyToOne(() => Member, (member) => member.statements)
  @JoinColumn({name: 'member', referencedColumnName: 'memberNum'})
  member!: Member;

  @ManyToOne(() => Conversation, (conversation) => conversation.statements)
  @JoinColumn({name: 'conversation', referencedColumnName: 'conversationNum'})
  conversation!: Conversation;
}