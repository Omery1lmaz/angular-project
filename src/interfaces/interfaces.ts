// export interface Todo {
//   _id: string;
//   title: string;
//   is_complated: boolean;
//   user: string;
//   status: durum ;
//   created_at_time: Date;
// }

// export interface durum {
//   _id?: string;
//   status?: string;
// }

export interface Todo {
  _id: string;
  title: string;
  is_complated: boolean;
  user?: string;
  status?: durum;
  created_at_time: Date;
}

export interface durum {
  _id?: string;
  status?: string;
}
