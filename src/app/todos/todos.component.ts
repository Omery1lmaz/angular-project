import { Component, ComponentFactoryResolver } from '@angular/core';
import { environment } from 'src/environments/environment';
import { durum, Todo } from 'src/interfaces/interfaces';
import { TodoStatusPipe } from 'src/pipes/todo_status.pipe';
import { TodoService } from 'src/services/todo.service';

@Component({
  selector: 'movies',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos!: Todo[];
  title: string = '';

  constructor(private todoService: TodoService) {}
  ngOnInit() {
    this.todoService
      .getTodos()
      .then((res) => {
        this.todos = res;
        this.sortTodos();
        console.log(this.todos);
      })
      .catch((err) => alert(err.message0));
  }

  sortTodos(): Todo[] {
    return this.todos.sort(
      (a, b) =>
        <any>new Date(b.created_at_time) - <any>new Date(a.created_at_time) &&
        <any>new Number((a.status?.status as string) == 'done' ? true : false) -
          <any>new Number((b.status?.status as string) == 'done' ? true : false)
    );
  }
  deleteTodo(id: string) {
    this.todoService
      .deleteTodo(id)
      .then(() => {
        this.todos = JSON.parse(
          JSON.stringify(this.todos.filter((todo) => todo._id != id))
        );
        this.sortTodos();
      })
      .catch((err) => alert(err.message0));
  }

  toString(id: string, status: string): JSON {
    console.log(status, 'status');
    return JSON.parse(
      JSON.stringify(
        this.todos.map((todo) => {
          if (todo._id == id) {
            if (status == environment.Done_Status_Id) {
              todo.status?.status ? (todo.status.status = 'pending') : '';
              todo.status?._id
                ? (todo.status._id = environment.Pending_Status_Id)
                : '';
            } else {
              console.log('done');
              if (todo.status?.status && todo.status?._id) {
                todo.status.status = 'done';
                todo.status._id = environment.Done_Status_Id;
              }
            }
          }
          return todo;
        })
      )
    );
  }
  updateStatusTodo(id: string, status: string) {
    this.todoService
      .updateTodo(id, status)
      .then(() => {
        this.toString(id, status);
        this.sortTodos();
      })
      .catch((err) => alert(err.message0));
  }
}
