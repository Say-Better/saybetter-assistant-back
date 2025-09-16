import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Bookmark, Speaker } from 'src/shared/statement';

@Entity('STATEMENT')
export class Statement {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  statementNum!: number;

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
}
