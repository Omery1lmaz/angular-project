import { Inject, Injectable } from '@angular/core';
import * as Bucket from '@spica-devkit/bucket';
import { Todo } from './todo';
import { environment } from '../environments/environment';
import { trigger } from '@angular/animations';
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
    console.log('getTodos');
    Bucket.initialize({
      publicUrl: environment.Public_Url,
      apikey: this.apikey,
    });
    // const res = Bucket.data.getAll(environment.Bucket_Id);
    // console.log(res);
    // return res;
    try {
      return await Bucket.data.getAll(environment.Bucket_Id);
    } catch (error) {
      throw new Error('error');
    }
  }

  getTodo(id: string) {
    return Bucket.data.get(environment.Bucket_Id, id);
  }
  addTodo(title: string): Promise<Todo> {
    console.log('Console');
    return Bucket.data.insert(environment.Bucket_Id, {
      title: title,
      is_complated: false,
    });
  }

  updateTodo(id: string, is_complated: boolean): Promise<Todo> {
    return Bucket.data.patch(environment.Bucket_Id, id, { is_complated });
  }
  async deleteTodo(id: string) {
    await Bucket.data.remove(environment.Bucket_Id, id);
  }
}
