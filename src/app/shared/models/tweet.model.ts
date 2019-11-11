import { User } from './user.model';

export class Tweet {
  id?: number;
  text?: string;
  truncated?: boolean;
  user?: User
  timestamp?: string;
}

