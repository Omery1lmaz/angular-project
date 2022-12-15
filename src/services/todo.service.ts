import { Injectable } from '@angular/core';
import * as Bucket from '@spica-devkit/bucket';
import { Status, Todo } from 'src/interfaces/interfaces';
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
    Bucket.initialize({
      publicUrl: environment.Public_Url,
      apikey: this.apikey,
    });
  }

  getTodos(): Promise<Todo[]> {
    return Bucket.data.getAll(environment.Bucket_Id, {
      queryParams: { relation: true },
    });
  }

  getTodo(id: string): Promise<Todo> {
    return Bucket.data.get(environment.Bucket_Id, id);
  }
  getStatuses(): Promise<Status[]> {
    return Bucket.data.getAll(environment.Status_Bucket_Id);
  }

  addTodo(todo: any): Promise<Todo> {
    return Bucket.data.insert(environment.Bucket_Id, {
      title: todo.title,
      status: todo.status as Status,
      created_at_time: new Date(Date.now()),
      end_date: new Date(Date.now() + 86400000 * 3),
    });
  }
  editTodo(options: { id: string; todo: any }): Promise<Todo> {
    return Bucket.data.patch(environment.Bucket_Id, options.id, {
      title: options.todo.title,
      status: options.todo.status as string,
    });
  }
  deleteTodo(id: string) {
    return Bucket.data.remove(environment.Bucket_Id, id);
  }
}
