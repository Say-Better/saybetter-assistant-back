import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Member } from '#entity/mysql';
import * as controllers from './controllers';
import * as providers from './providers';
import { UserModule } from 'src/shared/member';

@Module({
  imports: [TypeOrmModule.forFeature([Member]), UserModule],
  controllers: Object.values(controllers),
  providers: Object.values(providers),
})
export class MemberModule {}
