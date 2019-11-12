import { IUser } from './i-user.model';

export interface ITweet {
  id?: string;
  text?: string;
  user?: IUser
  createdAt?: string;
}