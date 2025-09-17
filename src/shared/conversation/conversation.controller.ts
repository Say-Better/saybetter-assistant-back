import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { ConversationDetailInfo, ConversationInfo, ConversationRequest } from './conversation.dto';
import { ConversationService } from './conversation.service';

@Controller('conversation')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Get()
  async getConversations(@Query('memberNum') memberNum: number): Promise<ConversationDetailInfo[]> {
    return await this.conversationService.getConversations(memberNum);
  }

  @Post('/save')
  async saveConversation(@Body() body: ConversationRequest): Promise<ConversationInfo> {
    return await this.conversationService.saveConversation(body);
  }
}
