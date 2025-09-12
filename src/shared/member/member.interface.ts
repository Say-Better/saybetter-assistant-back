export interface Member {
  memberNum: number;
  id: string;
  name: string;
  password: string;
  age: string;
  gender: Gender;
  preferSubject: string;
}

export type Gender = 0 | 1;
