import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackMethodsRoutingModule } from './back-methods-routing.module';
import { ListMethodsComponent } from './list-methods/list-methods.component';


@NgModule({
  declarations: [
    ListMethodsComponent
  ],
  imports: [
    CommonModule,
    BackMethodsRoutingModule
  ]
})
export class BackMethodsModule { }
