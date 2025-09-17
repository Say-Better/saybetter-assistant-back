import { Controller, Param, Patch, Get, Query } from '@nestjs/common';

import { Statement } from '#entity/mysql';
import { StatementInfo } from './statement.dto';
import { StatementService } from './statement.service';

@Controller('statements')
export class StatementController {
  constructor(private readonly statementService: StatementService) {}

  @Get()
  async getStatements(
    @Query('memberNum') memberNum: number,
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ): Promise<StatementInfo[]> {
    return await this.statementService.getStatements(memberNum, page, pageSize);
  }

  @Get('/conversation')
  async getStatementsByConversation(@Query('conversationNum') conversationNum: number): Promise<StatementInfo[]> {
    return await this.statementService.getStatementsByConversation(conversationNum);
  }

  @Patch('/:statementNum/bookmark')
  async toggleBookmark(@Param('statementNum') statementNum: number): Promise<Statement> {
    return await this.statementService.toggleBookmark(statementNum);
  }

  @Get('/:memberNum/bookmark')
  async getBookmarkedStatements(@Param('memberNum') memberNum: number): Promise<Statement[]> {
    return await this.statementService.getBookmarkedStatementsByMember(memberNum);
  }
}
