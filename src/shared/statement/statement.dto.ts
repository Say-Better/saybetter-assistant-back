import { Statement } from "#entity/mysql";

export class StatementInfo {
  statementNum!: number;
  content!: string;
  speaker!: string;
  bookmark!: boolean;
  createdAt!: Date;

  constructor(entity: Statement) {
    this.statementNum = entity.statementNum;
    this.content = entity.content;
    this.speaker = entity.speaker;
    this.bookmark = entity.bookmark === 1;
    this.createdAt = entity.createdAt;
  }
}
