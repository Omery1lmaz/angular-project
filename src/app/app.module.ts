import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { TodosComponent } from './todos/todos.component';
import { ErrorComponent } from './error/error.component';
import { TodoStatusPipe } from 'src/pipes/todo_status.pipe';
import { SpinnerComponent } from './spinner/spinner.component';
import { TodoandDetailComponent } from './todo-and-todo-detail/todo-and-todo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ErrorComponent,
    TodoStatusPipe,
    SpinnerComponent,
    TodoandDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
