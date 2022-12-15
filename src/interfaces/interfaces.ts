export interface Todo {
  _id: string;
  title: string;
  user?: string;
  status?: Status;
  created_at_time: Date;
  end_date: Date;
}

export interface Status {
  _id?: string;
  status?: string;
}
