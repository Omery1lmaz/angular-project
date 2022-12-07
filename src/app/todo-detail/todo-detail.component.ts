import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/interfaces/interfaces';
import { TodoService } from 'src/services/todo.service';
@Component({
  selector: 'todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent {
  id: string = '';
  todo!: Todo;
  constructor(
    private route: ActivatedRoute,
    private todoservice: TodoService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.todoservice.getTodo(this.id).then((res) => {
      this.todo = res as Todo;
    });
  }
  editTodo() {
    this.todoservice
      .editTodo(this.todo._id, this.todo.title)
      .then(() => this._router.navigate(['/']));
  }
}
