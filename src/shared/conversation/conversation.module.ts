import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Conversation } from '#entity/mysql';
import { ConversationController } from './conversation.controller';
import { ConversationService } from './conversation.service';
import { StatementModule } from '../statement/statement.module';

@Module({
  imports: [TypeOrmModule.forFeature([Conversation]), StatementModule],
  controllers: [ConversationController],
  providers: [ConversationService],
  exports: [ConversationService],
})
export class ConversationModule {}
