import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  @Input() todo!: Todo;

  @Output() TodoDelete = new EventEmitter();
  @Output() TodoUpdateStatus: EventEmitter<{
    _id: string;
    is_complated: boolean;
  }> = new EventEmitter();
  constructor() {}
  ngOnChanges() {
    console.log('todo 1', this.todo);
  }

  updateStatus(_id: string, is_complated: boolean) {
    this.TodoUpdateStatus.emit({ _id, is_complated });
  }
}
