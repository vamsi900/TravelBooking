import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckoutTrainPage } from './checkout-train';

@NgModule({
  declarations: [
    CheckoutTrainPage
  ],
  imports: [
    IonicPageModule.forChild(CheckoutTrainPage)
  ],
  exports: [
    CheckoutTrainPage
  ]
})

export class CheckoutTrainModule { }
