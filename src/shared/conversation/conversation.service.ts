import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Conversation } from '#entity/mysql';
import { ConversationInfo, ConversationRequest } from './conversation.dto';
import { TimeTag } from './conversation.interface';
import { StatementService } from '../statement/statement.service';

export class ConversationService {
  constructor(
    @InjectRepository(Conversation)
    private readonly conversation: Repository<Conversation>,
    private readonly statementService: StatementService,
  ) {}

  async saveConversation(body: ConversationRequest): Promise<ConversationInfo> {
    const weather = 'Sunny';
    const now = new Date();
    const hour = now.getHours();
    const memberNum = body.memberNum;
    let timeTag: TimeTag;

    if (hour >= 5 && hour < 12) {
      timeTag = 'Morning';
    } else if (hour >= 12 && hour < 17) {
      timeTag = 'Afternoon';
    } else if (hour >= 17 && hour < 21) {
      timeTag = 'Evening';
    } else {
      timeTag = 'Night';
    }

    const newConversation = new Conversation();
    newConversation.memberNum = memberNum;
    newConversation.climate = weather;
    newConversation.timeTag = timeTag;

    await this.conversation.save(newConversation);

    for (const item of body.contents) {
      await this.statementService.saveStatement(body.memberNum, newConversation.conversationNum, item.content, item.speaker);
    }

    return new ConversationInfo(newConversation);
  }
}
