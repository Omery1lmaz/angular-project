import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent {
  id: string = '';
  todo!: Todo;
  constructor(
    private route: ActivatedRoute,
    private todoservice: TodoService,
    private _router: Router
  ) {}

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.todo = (await this.todoservice.getTodo(this.id)) as Todo;
  }
  async editTodo() {
    await this.todoservice
      .editTodo(this.todo._id, this.todo.title)
      .then(() => this._router.navigate(['/'], { relativeTo: this.route }));
  }
}
