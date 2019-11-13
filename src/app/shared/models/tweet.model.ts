import { User } from './user.model';

export interface Tweet {
  id?: string;
  text?: string;
  user?: User
  timestamp?: string;
}