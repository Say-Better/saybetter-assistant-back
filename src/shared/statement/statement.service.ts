import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Statement } from '#entity/mysql';
import { Speaker } from './statement.interface';

@Injectable()
export class StatementService {
  constructor(
    @InjectRepository(Statement)
    private readonly statementRepository: Repository<Statement>,
  ) {}

  async toggleBookmark(statementNum: number): Promise<Statement> {
    const statement = await this.statementRepository.findOneBy({ statementNum });

    if (!statement) {
      throw new NotFoundException('Statement not found');
    }

    statement.bookmark = statement.bookmark === 1 ? 0 : 1;
    return await this.statementRepository.save(statement);
  }

  async getBookmarkedStatementsByMember(memberNum: number): Promise<Statement[]> {
    return await this.statementRepository.find({
      where: { memberNum, bookmark: 1 },
    });
  }

  async saveStatement(memberNum: number, conversationNum: number, content: string, speaker: Speaker): Promise<Statement> {
    const newStatement: Statement = new Statement();
    newStatement.memberNum = memberNum;
    newStatement.conversationNum = conversationNum;
    newStatement.content = content;
    newStatement.speaker = speaker;
    newStatement.bookmark = 0;

    return await this.statementRepository.save(newStatement);
  }
}
