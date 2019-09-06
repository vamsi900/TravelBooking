import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckoutCruisePage } from './checkout-cruise';

@NgModule({
  declarations: [
    CheckoutCruisePage
  ],
  imports: [
    IonicPageModule.forChild(CheckoutCruisePage)
  ],
  exports: [
    CheckoutCruisePage
  ]
})

export class CheckoutCruiseModule { }
