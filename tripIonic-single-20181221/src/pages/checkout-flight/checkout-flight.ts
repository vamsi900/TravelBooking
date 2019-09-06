import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController, ToastController} from "ionic-angular";
import {FlightService} from "../../providers/flight-service";

@IonicPage({
  name: 'page-checkout-flight',
  segment: 'checkout-flight'
})

@Component({
  selector: 'page-checkout-flight',
  templateUrl: 'checkout-flight.html'
})
export class CheckoutFlightPage {
  public departing: any;
  public returning: any;
  public bookId: number = Math.floor(Math.random() * Math.floor(9999));
  public paymethods = 'creditcard';

  constructor(public nav: NavController, public flightService: FlightService, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    this.departing = this.flightService.getDeparting() || this.flightService.getAll()[0];
    this.returning = this.flightService.getReturning() || this.flightService.getAll()[1];
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
      message: 'Flight Book Success!',
      duration: 3000,
      position: 'bottom'
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
      toast.present();
      this.flightService.booking(this.departing, this.returning, this.bookId);
      // back to home page
      this.nav.setRoot('page-home');
    }, 3000)
  }
}
