import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
// import { MovieDetailComponent } from './todo-detail/todo-detail.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: 'todo/add', component: TodoDetailComponent },
  { path: 'todo/:id', component: TodoDetailComponent },
  { path: '', component: TodosComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
