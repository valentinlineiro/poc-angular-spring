import { CustomerEditComponent } from './customer/customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer/customer/customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  {
    path: 'list',
    component: CustomerListComponent
  },
  {
    path: 'add',
    component: CustomerEditComponent
  },
  {
    path: 'edit/:id',
    component: CustomerEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
