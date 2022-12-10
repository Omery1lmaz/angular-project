import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';

import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodosComponent } from './todos/todos.component';
import { ErrorComponent } from './error/error.component';
import { TodoStatusPipe } from 'src/pipes/todo_status.pipe';
import { ComplatedTodoComponent } from './complated-todo/complated-todo.component';
import { AddEditTodoComponent } from './add-edit-todo/add-edit-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDetailComponent,
    TodosComponent,
    ErrorComponent,
    TodoStatusPipe,
    ComplatedTodoComponent,
    AddEditTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
