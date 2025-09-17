/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Conversation } from '#entity/mysql';
import { ConversationDetailInfo, ConversationInfo, ConversationRequest } from './conversation.dto';
import { TimeTag } from './conversation.interface';
import { StatementService } from '../statement/statement.service';

@Injectable()
export class ConversationService {
  constructor(
    @InjectRepository(Conversation)
    private readonly conversation: Repository<Conversation>,
    private readonly statementService: StatementService,
  ) {}

  async getConversations(memberNum: number): Promise<ConversationDetailInfo[]> {
    const conversations = await this.conversation.find({
      where: { memberNum },
      order: { createdAt: 'DESC' },
    });

    return await Promise.all(
      conversations.map(async (conversation) => {
        const statementCount = await this.statementService.getStatementCountByConversationNum(conversation.conversationNum);
        const statement = await this.statementService.getLatestStatementByConversationNum(conversation.conversationNum);
        const detail = new ConversationDetailInfo();
        detail.conversationNum = conversation.conversationNum;
        detail.content = statement;
        detail.statementCount = statementCount;
        detail.createdAt = conversation.createdAt;
        return detail;
      }),
    );
  }

  async saveConversation(body: ConversationRequest): Promise<ConversationInfo> {
    const weather = 'Sunny';
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60 * 1000; // UTC 시간 밀리초
    const KST_DIFF = 9 * 60 * 60 * 1000; // 9시간을 밀리초로 환산
    const kstNow = new Date(utc + KST_DIFF); // KST 시간
    const hour = kstNow.getHours();

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

    const newConversation = Conversation.getInstanceForSave(memberNum, weather, timeTag);
    await this.conversation.save(newConversation);

    for (const item of body.contents) {
      await this.statementService.saveStatement(body.memberNum, newConversation.conversationNum, item.content, item.speaker);
    }

    return newConversation;
  }
}
