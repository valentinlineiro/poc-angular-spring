import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { UiModule } from '../shared/ui/ui.module';
import { HeaderComponent } from './shell/header/header.component';
import { BodyComponent } from './shell/body/body.component';
import { SidebarComponent } from './shell/sidebar/sidebar.component';
import { OutletComponent } from './shell/outlet/outlet.component';

@NgModule({
  declarations: [ShellComponent, HeaderComponent, BodyComponent, SidebarComponent, OutletComponent],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    ShellComponent
  ]
})
export class CoreModule { }
