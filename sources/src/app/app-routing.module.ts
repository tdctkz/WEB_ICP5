import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';


const routes: Routes = [
  {path: '', redirectTo: 'countdown', pathMatch: 'full'},

  {
    path: 'countdown',
    component: TodosComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
