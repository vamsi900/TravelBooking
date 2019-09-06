import {Component} from "@angular/core";
import {IonicPage, NavController, ToastController} from "ionic-angular";
import {CruiseService} from "../../providers/cruise-service";

@IonicPage({
  name: 'page-cruise-results',
  segment: 'cruise-results'
})

@Component({
  selector: 'page-cruise-results',
  templateUrl: 'cruise-results.html'
})
export class CruiseResultsPage {
  // list of trips
  public cruises: any;

  constructor(public nav: NavController, public cruiseService: CruiseService, public toastCtrl: ToastController) {
    // set sample data
    this.cruises = cruiseService.getAll();
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

  // view trip detail
  viewDetail(id) {
    this.nav.push('page-cruise-detail', {
      'id': id
    });
  }
}
