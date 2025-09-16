/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Conversation } from '#entity/mysql';
import { ConversationInfo, ConversationRequest } from './conversation.dto';
import { TimeTag } from './conversation.interface';
import { StatementService } from '../statement/statement.service';

@Injectable()
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

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const newConversation = Conversation.getInstanceForSave(memberNum, weather, timeTag);

    await this.conversation.save(newConversation);

    for (const item of body.contents) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      await this.statementService.saveStatement(body.memberNum, newConversation.conversationNum, item.content, item.speaker);
    }

    return newConversation;
  }
}
