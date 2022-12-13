import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { durum, Todo } from 'src/interfaces/interfaces';
import { TodoService } from 'src/services/todo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'todo-detail',
  templateUrl: './todo-and-todo-detail.component.html',
  styleUrls: ['./todo-and-todo-detail.component.css'],
})
export class TodoandDetailComponent implements OnInit, DoCheck {
  id!: string;
  todo!: Todo;
  myForm!: FormGroup;
  status!: durum[];
  title!: string;
  constructor(
    private _fb: FormBuilder,
    private route: ActivatedRoute,
    private todoservice: TodoService,
    private _router: Router
  ) {}
  ngDoCheck(): void {
    console.log(this.status, 'status');
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.myForm = this._fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      status: [this.status, [Validators.required]],
    });
    if (this.id) {
      this.todoservice
        .getTodo(this.id)
        .then((res) => {
          this.myForm.value.title = res.title;
          this.title = this.todo ? this.todo.title : this.myForm.value.title;
          this.todo = res as Todo;
        })
        .catch(() => {
          alert('yanlış id veya todo getirilemei');
          this._router.navigateByUrl('/');
        });
    }
    this.todoservice
      .getStatus()
      .then((res) => {
        this.status = res;
      })
      .catch(() => alert('Statusler getirilemedi'));
  }

  submitHandler() {
    if (!this.id) {
      this.addTodo();
    } else this.editTodo();
  }
  getTodoLength() {
    if (this.myForm.value.title.length > 5) {
      return true;
    }
    return false;
  }
  editTodo() {
    if (this.myForm.valid) {
      this.todoservice
        .editTodo(
          this.todo._id,
          this.myForm.value.title,
          this.myForm.value.status
        )
        .then(() => this._router.navigate(['/']))
        .catch(() => alert('Todo Editlenemedi '));
    } else {
      alert('Düzgün bir değer giriniz edit');
    }
  }
  addTodo() {
    if (this.myForm.valid) {
      this.todoservice
        .addTodo(this.myForm.value.title, this.myForm.value.status)
        .then(() => this._router.navigate(['/']))
        .catch(() => alert('Todo eklenemedi '));
    } else {
      // alert('Düzgün bir değer giriniz');
    }
  }
}
