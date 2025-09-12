import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Member } from "./member.entity";
import { Statement } from "./statement.entity";
import { TimeTag } from "src/shared/conversation";

@Entity('CONVERSATION')
export class Conversation {
  @PrimaryGeneratedColumn({type:'int', unsigned:true, name: 'conversation_num'})
  conversationNum!: number;

  @Column('varchar', {nullable: false, length: 45, name: 'climate'})
  climate!: string;

  @Column('varchar', {nullable: false, length: 10, name: 'timeTag'})
  timeTag!: string | TimeTag;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP', name: 'updated_at' })
  updatedAt!: Date;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  createdAt!: Date;

  /**
   * Relations
   */
  @ManyToOne(() => Member, (member) => member.conversations)
  @JoinColumn({name: 'member', referencedColumnName: 'memberNum'})
  member!: Member;

  @OneToMany(() => Statement, (statement) => statement.conversation)
  statements?: Statement[];
}