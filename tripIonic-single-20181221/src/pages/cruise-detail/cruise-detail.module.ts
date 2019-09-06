import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CruiseDetailPage } from './cruise-detail';

@NgModule({
  declarations: [
    CruiseDetailPage
  ],
  imports: [
    IonicPageModule.forChild(CruiseDetailPage)
  ],
  exports: [
    CruiseDetailPage
  ]
})

export class CruiseDetailModule { }
