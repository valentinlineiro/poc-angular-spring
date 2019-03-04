import { FormsModule } from '@angular/forms';
import { UiModule } from './../shared/ui/ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';

@NgModule({
  declarations: [CustomerComponent, CustomerListComponent, CustomerEditComponent],
  imports: [
    CommonModule,
    UiModule,
    FormsModule
  ],
  exports: [
    CustomerComponent,
    CustomerListComponent,
    CustomerEditComponent
  ]
})
export class CustomerModule { }
