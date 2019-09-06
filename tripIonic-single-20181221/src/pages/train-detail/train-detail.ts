import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { TrainService } from "../../providers/train-service";

@IonicPage({
  name: 'page-train-detail',
  segment: 'train-detail'
})

@Component({
    selector: 'page-train-detail',
    templateUrl: 'train-detail.html'
})
export class TrainDetailPage {
  public train: any;


  constructor(public nav: NavController, public trainService: TrainService) {
    // set sample data
    this.train = this.trainService.getTrain() || this.trainService.getAll()[0];
  }

  checkout() {
    this.nav.push('page-checkout-train')
  }
}
