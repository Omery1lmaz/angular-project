import { Component } from '@angular/core';
import { Status, Todo } from 'src/interfaces/interfaces';
import { TodoService } from 'src/services/todo.service';

@Component({
  selector: 'movies',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos!: Todo[];

  constructor(private todoService: TodoService) {}

  getExpired(todo: Todo) {
    return new Date(todo.end_date) <= new Date();
  }
  ngOnInit() {
    this.todoService
      .getTodos()
      .then((res) => {
        this.todos = res;
        this.sortTodos();
      })
      .catch((err) => alert(err.message));
  }
  parseProcces(item: Todo | Todo[]) {
    return JSON.parse(JSON.stringify(item));
  }
  sortTodos(): Todo[] {
    return this.todos.sort(
      (a, b) => <any>new Date(b.end_date) - <any>new Date(a.end_date)
    );
  }
  deleteTodo(id: string) {
    this.todoService
      .deleteTodo(id)
      .then(() => {
        this.todos = this.parseProcces(
          this.todos.filter((todo) => todo._id != id)
        );
        this.sortTodos();
      })
      .catch((err) => alert(err.message));
  }
}
