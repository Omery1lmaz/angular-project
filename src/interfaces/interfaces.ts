export interface Todo {
  _id: string;
  title: string;
  is_complated: boolean;
  user?: string;
  created_at_time?: Date;
}
