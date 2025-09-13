import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Statement } from '#entity/mysql';
import { StatementController } from './statement.controller';
import { StatementService } from './statement.service';

@Module({
  imports: [TypeOrmModule.forFeature([Statement])],
  controllers: [StatementController],
  providers: [StatementService],
  exports: [StatementService],
})
export class StatementModule {}
