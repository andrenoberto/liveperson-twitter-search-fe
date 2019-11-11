import { User } from './user.model';

export class Tweet {
  id?: Number;
  text?: String;
  truncated?: boolean;
  user?: User
}

