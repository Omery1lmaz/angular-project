import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Status, Todo } from 'src/interfaces/interfaces';
import { TodoService } from 'src/services/todo.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoandDetailComponent implements OnInit {
  id!: string;
  todo!: Todo;
  status!: Status[];
  todoForm = new FormGroup({
    title: new FormControl('', [Validators.minLength(4), Validators.required]),
    status: new FormControl('', [Validators.required]),
  });
  constructor(
    private route: ActivatedRoute,
    private todoservice: TodoService,
    private _router: Router
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.todoservice
      .getStatuses()
      .then((res) => {
        this.status = res;
      })
      .catch(() => alert('Statusler getirilemedi'));
    if (this.id) {
      this.todoservice
        .getTodo(this.id)
        .then((res) => {
          this.todoForm.patchValue({
            title: res.title,
          });
          this.todo = res as Todo;
        })
        .catch(() => {
          alert('yanlış id veya todo getirilemedi');
          this._router.navigateByUrl('/');
        });
    }
  }

  submitHandler() {
    if (!this.id) {
      this.addTodo();
    } else this.editTodo();
  }
  editTodo() {
    if (this.todoForm.valid) {
      this.todoservice
        .editTodo({ id: this.id, todo: this.todoForm.value })
        .then(() => this._router.navigate(['/']))
        .catch(() => alert('Todo Editlenemedi '));
    } else {
      alert('Düzgün bir değer giriniz edit');
    }
  }
  addTodo() {
    if (this.todoForm.valid) {
      this.todoservice
        .addTodo(this.todoForm.value)
        .then(() => this._router.navigate(['/']))
        .catch(() => alert('Todo eklenemedi '));
    } else {
      alert('Düzgün bir değer giriniz');
    }
  }
}
