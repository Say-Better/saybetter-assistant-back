import { IsArray, IsNumber, IsString } from 'class-validator';

import { Speaker } from '../statement';

export class ConversationRequest {
  @IsNumber()
  memberNum!: number;

  @IsArray()
  contents!: StatementRequest[];
}

export class StatementRequest {
  @IsString()
  content!: string;

  speaker!: Speaker;
}

export class ConversationInfo {
  @IsNumber()
  conversationNum!: number;

  @IsNumber()
  memberNum!: number;

  constructor(data?: Partial<ConversationInfo>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
