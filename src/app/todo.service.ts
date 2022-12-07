import { Injectable } from '@angular/core';
import * as Bucket from '@spica-devkit/bucket';
import { Todo } from './todo';
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

  async getTodos() {
    return await Bucket.data.getAll(environment.Bucket_Id);
  }

  async getTodo(id: string) {
    return await Bucket.data.get(environment.Bucket_Id, id);
  }
  async addTodo(title: string) {
    await Bucket.data.insert(environment.Bucket_Id, {
      title: title,
      is_complated: false,
    });
  }

  async updateTodo(id: string, is_complated: boolean) {
    await Bucket.data.patch(environment.Bucket_Id, id, { is_complated });
  }
  async editTodo(id: string, title: string): Promise<Todo> {
    return await Bucket.data.patch(environment.Bucket_Id, id, { title });
  }
  async deleteTodo(id: string) {
    await Bucket.data.remove(environment.Bucket_Id, id);
  }
}
