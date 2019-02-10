import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { BodyComponent } from './shell/body/body.component';
import { UiModule } from '../shared/ui/ui.module';

@NgModule({
  declarations: [ShellComponent, HeaderComponent, BodyComponent],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    ShellComponent
  ]
})
export class CoreModule { }
