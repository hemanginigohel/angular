import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LowComponent } from './low/low.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LowComponent],
  exports:[LowComponent]
})
export class PriceModule { }
