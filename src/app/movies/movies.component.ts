import { Component } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  todos: any;
  title: string = '';
  updated: boolean = false;
  todoService: TodoService;
  constructor() {
    this.todoService = new TodoService();
  }
  async ngOnInit() {
    this.todos = await this.getTodos();
  }
  ngAfterViewChecked() {
    console.log('todo 1', this.todos);
  }
  private async getTodos() {
    return await this.todoService.getTodos();
  }
  async addTodo(title: string) {
    console.log('titlee', title);
    console.log('titlee');
    await this.todoService.addTodo(title);
    this.getTodos().then((res) => (this.todos = res as string[]));
    this.title = '';
  }
  public async deleteTodo(id: string) {
    await this.todoService.deleteTodo(id);
    // this.todos = JSON.parse(JSON.stringify(this.getTodos()));
    this.getTodos().then((res) => (this.todos = res as string[]));
    console.log(this.todos, 'deleteeeee');
  }
  public async updateStatusTodo(id: string, is_complated: boolean) {
    console.log(id, !is_complated);
    await this.todoService.updateTodo(id, !is_complated);
    // this.todos = JSON.parse(JSON.stringify(this.getTodos()));
    this.getTodos().then((res) => (this.todos = res as string[]));
  }
}
