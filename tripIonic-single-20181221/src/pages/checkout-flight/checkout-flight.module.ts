import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckoutFlightPage } from './checkout-flight';

@NgModule({
  declarations: [
    CheckoutFlightPage
  ],
  imports: [
    IonicPageModule.forChild(CheckoutFlightPage)
  ],
  exports: [
    CheckoutFlightPage
  ]
})

export class CheckoutFlightModule { }
