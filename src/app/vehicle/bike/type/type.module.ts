import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsComponent } from './sports/sports.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SportsComponent],
  exports:[SportsComponent]
})
export class TypeModule { }
