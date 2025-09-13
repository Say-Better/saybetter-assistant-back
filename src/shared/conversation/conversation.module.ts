import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Conversation } from '#entity/mysql';

@Module({
  imports: [TypeOrmModule.forFeature([Conversation])],
  controllers: [],
  providers: [],
  exports: [],
})
export class ConversationModule {}
