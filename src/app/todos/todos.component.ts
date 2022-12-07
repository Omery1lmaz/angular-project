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
      .then((res) => (this.todos = res))
      .catch((err) => alert(err.message0));
  }

  async addTodo(title: string) {
    console.log('titlee', title);
    console.log('titlee');
    this.todoService.addTodo(title).then((res) => this.todos.push(res));
    this.title = '';
  }
  deleteTodo(id: string) {
    this.todoService
      .deleteTodo(id)
      .then(
        () =>
          (this.todos = JSON.parse(
            JSON.stringify(this.todos.filter((todo) => todo._id != id))
          ))
      );
  }
  updateStatusTodo(id: string, is_complated: boolean) {
    console.log(id, !is_complated);
    this.todoService.updateTodo(id, !is_complated).then((res) =>
      JSON.parse(
        JSON.stringify(
          this.todos.map((todo) => {
            if (todo._id == id) {
              todo.is_complated = !is_complated;
            }
            return todo;
          })
        )
      )
    );
  }
}
