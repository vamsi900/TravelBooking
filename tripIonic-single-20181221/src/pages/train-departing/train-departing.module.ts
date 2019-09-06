import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainDepartingPage } from './train-departing';

@NgModule({
  declarations: [
    TrainDepartingPage
  ],
  imports: [
    IonicPageModule.forChild(TrainDepartingPage)
  ],
  exports: [
    TrainDepartingPage
  ]
})

export class TrainDepartingModule { }
