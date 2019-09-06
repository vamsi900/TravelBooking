import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlightDetailPage } from './flight-detail';

@NgModule({
  declarations: [
    FlightDetailPage
  ],
  imports: [
    IonicPageModule.forChild(FlightDetailPage)
  ],
  exports: [
    FlightDetailPage
  ]
})

export class FlightDetailModule { }
