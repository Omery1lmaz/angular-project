import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/interfaces/interfaces';
import { TodoService } from 'src/services/todo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent implements DoCheck, OnInit {
  id!: string;
  todo!: Todo;
  myForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private route: ActivatedRoute,
    private todoservice: TodoService,
    private _router: Router
  ) {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.myForm = this._fb.group({
      title: [
        this.todo ? this.todo.title : '',
        [Validators.required, Validators.minLength(3)],
      ],
      status: [, [Validators.required, Validators.min(3)]],
    });
  }

  ngDoCheck(): void {
    console.log(this.myForm.value.title, 'titleee');
    console.log(this.myForm.value.status, 'status');
  }
  ngOnInit() {
    // this.todo.title ? (this.myForm.value.title = this.todo.title) : '';
    if (this.id) {
      this.todoservice
        .getTodo(this.id)
        .then((res) => {
          this.todo = res as Todo;
          console.log(this.todo.title, 'todo');
          this.myForm.value.title = this.todo.title;
        })
        .catch(() => {
          alert('yanlış id veya todo getirilemei');
          this._router.navigateByUrl('/')
        });
    }
  }
  submitHandler() {
    if (!this.id) {
      console.log(this.id, 'id yok ');
      this.addTodo();
    }
    console.log(this.id, 'id var');
    this.editTodo();
  }
  getTodoLength() {
    if (this.myForm.value.title.length > 5) {
      console.log('trueeeee');
      console.log(this.myForm.value.title);
      return true;
    }
    console.log(this.myForm.value.title);
    console.log('falseeee');
    return false;
  }
  editTodo() {
    console.log('Edit Todo Çalıştı');
    if (this.myForm.valid) {
      this.todoservice
        .editTodo(this.todo._id, this.myForm.value.title)
        .then(() => this._router.navigate(['/']))
        .catch(() => alert('Todo Editlenemedi '));
    } else {
      alert('Düzgün bir değer giriniz');
    }
  }
  addTodo() {
    console.log('Add Todo Çalıştı');
    if (this.myForm.valid) {
      this.todoservice
        .addTodo(this.myForm.value.title)
        .then(() => this._router.navigate(['/']))
        .catch(() => alert('Todo eklenemedi '));
    } else {
      alert('Düzgün bir değer giriniz');
    }
  }
}
