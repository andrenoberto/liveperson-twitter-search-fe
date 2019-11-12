import { User } from './user.model';

export class Tweet {
  id?: string;
  text?: string;
  user?: User
  createdAt?: string;
}