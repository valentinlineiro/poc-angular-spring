import { CustomerModule } from './../customer/customer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { UiModule } from '../shared/ui/ui.module';
import { SidenavComponent } from './shell/sidenav/sidenav.component';
import { NavComponent } from './shell/nav/nav.component';

@NgModule({
  declarations: [ShellComponent, SidenavComponent, NavComponent],
  imports: [
    CommonModule,
    UiModule,
    CustomerModule
  ],
  exports: [
    ShellComponent
  ]
})
export class CoreModule { }
