import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlightReturningPage } from './flight-returning';

@NgModule({
  declarations: [
    FlightReturningPage
  ],
  imports: [
    IonicPageModule.forChild(FlightReturningPage)
  ],
  exports: [
    FlightReturningPage
  ]
})

export class FlightReturningModule { }
