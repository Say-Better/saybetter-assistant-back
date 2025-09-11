import { Injectable } from '@nestjs/common';

import { Member as User } from '../../entity/mysql/user.entity';
import { UserRepository } from '../../shared/user/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async save() {
    return await this.userRepository.save(User.getInstance('testid', 'testpw'));
  }
}
