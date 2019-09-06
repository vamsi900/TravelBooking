import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController, ToastController} from "ionic-angular";
import {TrainService} from "../../providers/train-service";

@IonicPage({
  name: 'page-checkout-train',
  segment: 'checkout-train'
})

@Component({
  selector: 'page-checkout-train',
  templateUrl: 'checkout-train.html'
})

export class CheckoutTrainPage {
  public train: any;
  public bookId: number = Math.floor(Math.random() * Math.floor(9999));
  public paymethods = 'creditcard';

  constructor(public nav: NavController, public trainService: TrainService, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    this.train = this.trainService.getTrain() || this.trainService.getAll()[0];
  }

  // process send button
  send() {
    // send booking info
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    // show message
    let toast = this.toastCtrl.create({
      showCloseButton: true,
      cssClass: 'profile-bg',
      message: 'Train Book Success!',
      duration: 3000,
      position: 'bottom'
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
      toast.present();
      this.trainService.booking(this.train, this.bookId);
      // back to home page
      this.nav.setRoot('page-home');
    }, 3000)
  }
}
