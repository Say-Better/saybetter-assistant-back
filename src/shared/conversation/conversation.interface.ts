export type TimeTag = 'Morning' | 'Afternoon' | 'Evening' | 'Night';

export interface Conversation {
  conversationNum: number;
  memberNum: number;
  climate: string;
  timeTag: TimeTag;
  updatedAt: Date;
  createdAt: Date;
}
