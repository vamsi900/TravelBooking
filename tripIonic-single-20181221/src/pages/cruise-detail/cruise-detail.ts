import {Component} from "@angular/core";
import {IonicPage, NavParams, NavController, ToastController} from "ionic-angular";
import {CruiseService} from "../../providers/cruise-service";

@IonicPage({
  name: 'page-cruise-detail',
  segment: 'cruise-detail/:id'
})

@Component({
  selector: 'page-cruise-detail',
  templateUrl: 'cruise-detail.html'
})
export class CruiseDetailPage {
  param: number;
  // trip info
  public cruise: any;
  // number of adult
  public adults = 2;
  // number of children
  public children = 0;

  constructor(public nav: NavController, public navParams: NavParams, public cruiseService: CruiseService, public toastCtrl: ToastController) {
    // set sample data
    this.param = this.navParams.get('id');
    this.cruise = this.cruiseService.getItem(this.param) ? this.cruiseService.getItem(this.param) : this.cruiseService.getAll()[0];
  }

  // minus adult when click minus button
  minusAdult() {
    this.adults--;
  }

  // plus adult when click plus button
  plusAdult() {
    this.adults++;
  }

  // minus children when click minus button
  minusChildren() {
    this.children--;
  }

  // plus children when click plus button
  plusChildren() {
    this.children++;
  }

  favorite(cruise) {
    this.cruiseService.favorite(cruise)
      .then(cruise => {
        let toast = this.toastCtrl.create({
          message: 'Cruise added to your favorites',
          cssClass: 'cruiseToast',
          duration: 2000
        });
        toast.present(toast);
      });
  }

  // go to checkout page
  checkout(cruise) {
    this.nav.push('page-checkout-cruise', {
      'id': cruise.id
    });
  }
}
