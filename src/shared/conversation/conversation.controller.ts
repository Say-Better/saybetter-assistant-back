import { Body, Controller, Post } from '@nestjs/common';

import { ConversationInfo, ConversationRequest } from './conversation.dto';
import { ConversationService } from './conversation.service';

@Controller('conversation')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Post('/save')
  async saveConversation(@Body() body: ConversationRequest): Promise<ConversationInfo> {
    return await this.conversationService.saveConversation(body);
  }
}
