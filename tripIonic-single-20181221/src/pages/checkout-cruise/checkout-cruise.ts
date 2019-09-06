import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, LoadingController, ToastController} from "ionic-angular";
import {CruiseService} from "../../providers/cruise-service";

@IonicPage({
  name: 'page-checkout-cruise',
  segment: 'checkout-cruise/:id'
})

@Component({
  selector: 'page-checkout-cruise',
  templateUrl: 'checkout-cruise.html'
})
export class CheckoutCruisePage {
  param: number;
  // cruise data
  public cruise: any;
  // number of adults
  public adults = 2;
  // date
  public date = new Date();
  public bookId: number = Math.floor(Math.random() * Math.floor(9999));

  public paymethods = 'creditcard';

  constructor(public nav: NavController, public navParams: NavParams, public cruiseService: CruiseService, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    // set sample data
    this.param = this.navParams.get('id');
    this.cruise = this.cruiseService.getItem(this.param) ? this.cruiseService.getItem(this.param) : this.cruiseService.getAll()[0];
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
      message: 'Book Activity Success!',
      duration: 3000,
      position: 'bottom'
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
      toast.present();
      this.cruiseService.booking(this.cruise, this.bookId);
      // back to home page
      this.nav.setRoot('page-home');
    }, 3000)
  }
}
