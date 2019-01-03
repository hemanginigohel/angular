import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VehicleModule } from './vehicle/vehicle.module';
import { FruitComponent } from './fruit/fruit.component';
import { GrapesComponent } from './fruit/grapes/grapes.component';
import { TypeModule } from './vehicle/bike/type/type.module';

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    GrapesComponent
  ],
  imports: [
    BrowserModule,
    VehicleModule,
    TypeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
