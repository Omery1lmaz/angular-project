import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import * as Bucket from '@spica-devkit/bucket';
import { durum, Todo } from 'src/interfaces/interfaces';
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
  getStatus(): Promise<durum[]> {
    return Bucket.data.getAll(environment.Status_Bucket_Id);
  }

  addTodo(title: string, status: string): Promise<Todo> {
    return Bucket.data.insert(environment.Bucket_Id, {
      title,
      status: status as durum,
      is_complated: false,
      created_at_time: new Date(Date.now()),
    });
  }

  updateTodo(id: string, is_complated: boolean): Promise<Todo> {
    return Bucket.data.patch(environment.Bucket_Id, id, { is_complated });
  }
  editTodo(id: string, title: string, status: string): Promise<Todo> {
    return Bucket.data.patch(environment.Bucket_Id, id, {
      title,
      status: status as durum,
    });
  }
  deleteTodo(id: string) {
    return Bucket.data.remove(environment.Bucket_Id, id);
  }
}
