import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainSearchPage } from './train-search';

@NgModule({
  declarations: [
    TrainSearchPage
  ],
  imports: [
    IonicPageModule.forChild(TrainSearchPage)
  ],
  exports: [
    TrainSearchPage
  ]
})

export class TrainSearchModule { }
