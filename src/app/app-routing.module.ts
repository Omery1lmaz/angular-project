import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { TodoandDetailComponent } from './todo-and-todo-detail/todo-and-todo-detail.component';
import { TodosComponent } from './todos/todos.component';
const routes: Routes = [
  { path: 'todo/add', component: TodoandDetailComponent },
  { path: 'todo/:id', component: TodoandDetailComponent },
  { path: '', component: TodosComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
