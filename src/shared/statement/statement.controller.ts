import { Controller, Param, Patch, Get } from '@nestjs/common';

import { Statement } from '#entity/mysql';
import { StatementService } from './statement.service';

@Controller('statements')
export class StatementController {
  constructor(private readonly statementService: StatementService) {}

  @Patch('/:statementNum/bookmark')
  async toggleBookmark(@Param('statementNum') statementNum: number): Promise<Statement> {
    return await this.statementService.toggleBookmark(statementNum);
  }

  @Get('/:memberNum/bookmark')
  async getBookmarkedStatements(@Param('memberNum') memberNum: number): Promise<Statement[]> {
    return await this.statementService.getBookmarkedStatementsByMember(memberNum);
  }
}
