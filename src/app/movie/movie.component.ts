import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  @Input() todo: any;
  params: string;
  @Output() TodoDelete = new EventEmitter();
  @Output() TodoUpdateStatus: EventEmitter<{
    _id: string;
    is_complated: boolean;
  }> = new EventEmitter();
  constructor() {
    this.params = `/todo/${this.todo._id}`;
  }
  ngAfterViewChecked() {
    console.log('todo 1', this.todo);
  }

  updateStatus(_id: string, is_complated: boolean) {
    this.TodoUpdateStatus.emit({ _id, is_complated });
  }
}
