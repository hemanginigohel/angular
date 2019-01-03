import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeComponent } from './bike/bike.component';
import { PriceModule } from './price/price.module';
import { SportsComponent } from './bike/type/sports/sports.component';
import { TypeModule } from './bike/type/type.module';

@NgModule({
  imports: [
    CommonModule,
    PriceModule,
    TypeModule
  ],
  declarations: [BikeComponent],
  exports: [BikeComponent,PriceModule, BikeComponent,SportsComponent]
  
})
export class VehicleModule { }
