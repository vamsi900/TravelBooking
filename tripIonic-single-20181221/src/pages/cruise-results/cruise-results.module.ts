import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CruiseResultsPage } from './cruise-results';

@NgModule({
  declarations: [
    CruiseResultsPage
  ],
  imports: [
    IonicPageModule.forChild(CruiseResultsPage)
  ],
  exports: [
    CruiseResultsPage
  ]
})

export class CruiseResultsModule { }
