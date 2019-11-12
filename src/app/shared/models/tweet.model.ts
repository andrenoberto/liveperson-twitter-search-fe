import { IUser } from './user.model';

export interface Tweet {
  id?: string;
  text?: string;
  user?: User
  createdAt?: string;
}