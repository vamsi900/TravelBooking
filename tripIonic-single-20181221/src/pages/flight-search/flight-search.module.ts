import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlightSearchPage } from './flight-search';

@NgModule({
  declarations: [
    FlightSearchPage
  ],
  imports: [
    IonicPageModule.forChild(FlightSearchPage)
  ],
  exports: [
    FlightSearchPage
  ]
})

export class FlightSearchPageModule { }
