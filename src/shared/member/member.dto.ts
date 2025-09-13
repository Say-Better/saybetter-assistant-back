import { IsNumber, IsOptional, IsString } from 'class-validator';

import { Member } from './member.interface';

export class SignUp {
  @IsString()
  memberId!: string;

  @IsString()
  password!: string;

  @IsString()
  name!: string;

  @IsString()
  age!: string;

  @IsNumber()
  gender!: number;

  @IsString()
  preferSubject!: string;
}

export class Preferences {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  age?: string;

  @IsOptional()
  @IsNumber()
  gender?: number;

  @IsOptional()
  @IsString()
  preferSubject?: string;
}

export class SignIn {
  @IsString()
  memberId!: string;

  @IsString()
  password!: string;
}

export class MemberInfo {
  memberNum!: number;
  id!: string;
  name!: string;
  age!: string;
  gender!: number;
  preferSubject!: string;

  constructor(data?: Partial<Member>) {
    if (data) {
      const { password, ...dataWithoutPassword } = data;
      Object.assign(this, dataWithoutPassword);
    }
  }
}
