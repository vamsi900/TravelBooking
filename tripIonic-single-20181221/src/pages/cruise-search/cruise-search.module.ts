import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CruiseSearchPage } from './cruise-search';

@NgModule({
  declarations: [
    CruiseSearchPage
  ],
  imports: [
    IonicPageModule.forChild(CruiseSearchPage)
  ],
  exports: [
    CruiseSearchPage
  ]
})

export class CruiseSearchModule { }
