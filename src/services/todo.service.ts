import { Injectable } from '@angular/core';
import * as Bucket from '@spica-devkit/bucket';
import { Todo } from 'src/interfaces/interfaces';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  apikey = environment.Api_Key;
  constructor() {
    Bucket.initialize({
      publicUrl: environment.Public_Url,
      apikey: this.apikey,
    });
  }

  getTodos(): Promise<Todo[]> {
    return Bucket.data.getAll(environment.Bucket_Id);
  }

  getTodo(id: string): Promise<Todo> {
    return Bucket.data.get(environment.Bucket_Id, id);
  }
  addTodo(title: string): Promise<Todo> {
    return Bucket.data.insert(environment.Bucket_Id, {
      title: title,
      is_complated: false,
      user: 'Omer',
    });
  }

  updateTodo(id: string, is_complated: boolean): Promise<Todo> {
    return Bucket.data.patch(environment.Bucket_Id, id, { is_complated });
  }
  editTodo(id: string, title: string): Promise<Todo> {
    return Bucket.data.patch(environment.Bucket_Id, id, { title });
  }
  deleteTodo(id: string) {
    return Bucket.data.remove(environment.Bucket_Id, id);
  }
}
