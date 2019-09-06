import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainDetailPage } from './train-detail';

@NgModule({
  declarations: [
    TrainDetailPage
  ],
  imports: [
    IonicPageModule.forChild(TrainDetailPage)
  ],
  exports: [
    TrainDetailPage
  ]
})

export class TrainDetailModule { }
