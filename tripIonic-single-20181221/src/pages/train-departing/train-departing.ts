import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
import {TrainService} from "../../providers/train-service";

@IonicPage({
  name: 'page-train-departing',
  segment: 'train-departing'
})

@Component({
  selector: 'page-train-departing',
  templateUrl: 'train-departing.html'
})

export class TrainDepartingPage {
  public trains: any;
  public outOpts: any = [];
  public returnOpts: any = [];

  constructor(public nav: NavController, public trainService: TrainService) {
    // set sample data
    this.trains = this.trainService.getAll();
  }

  chooseTrain(train) {
    this.trainService.setTrain(train);
    this.nav.push('page-train-detail');
  }
}
