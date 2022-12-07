import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
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
