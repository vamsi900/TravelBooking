import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlightDepartingPage } from './flight-departing';

@NgModule({
  declarations: [
    FlightDepartingPage
  ],
  imports: [
    IonicPageModule.forChild(FlightDepartingPage)
  ],
  exports: [
    FlightDepartingPage
  ]
})

export class FlightDepartingModule { }
