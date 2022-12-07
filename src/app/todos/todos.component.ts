import { Component } from '@angular/core';
import { Todo } from 'src/interfaces/interfaces';
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
  async ngOnInit() {
    this.todoService
      .getTodos()
      .then((res) => {
        this.todos = res;
        this.sortTodos();
      })
      .catch((err) => alert(err.message0));
  }
  ngOnChanges(): void {
    console.log('title', this.title);
  }
  sortTodos(): void {
    this.todos.sort((a, b) => Number(b.is_complated) - Number(a.is_complated));
  }
  addTodo() {
    console.log('titlee', this.title);
    console.log('titlee');
    this.todoService
      .addTodo(this.title)
      .then((res) => {
        this.todos.push(res);
        this.sortTodos();
      })
      .catch((err) => alert(err.message0));
    this.title = '';
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
  updateStatusTodo(id: string, is_complated: boolean) {
    console.log(id, !is_complated);
    this.todoService
      .updateTodo(id, !is_complated)
      .then(() => {
        JSON.parse(
          JSON.stringify(
            this.todos.map((todo) => {
              if (todo._id == id) {
                todo.is_complated = !is_complated;
              }
              return todo;
            })
          )
        );
        this.sortTodos();
      })
      .catch((err) => alert(err.message0));
  }
}
