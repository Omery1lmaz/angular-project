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

  @Output() TodoDelete = new EventEmitter();
  @Output() TodoUpdateStatus: EventEmitter<{
    _id: string;
    is_complated: boolean;
  }> = new EventEmitter();
  constructor() {}


  updateStatus(_id: string, is_complated: boolean) {
    this.TodoUpdateStatus.emit({_id, is_complated});
  }
}
