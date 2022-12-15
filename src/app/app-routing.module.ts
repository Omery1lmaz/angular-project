import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { TodoandDetailComponent } from './todo-detail/todo-detail.component';
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
