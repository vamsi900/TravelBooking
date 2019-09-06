import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { FlightService } from "../../providers/flight-service";

@IonicPage({
  name: 'page-flight-detail',
  segment: 'flight-detail'
})

@Component({
    selector: 'page-flight-detail',
    templateUrl: 'flight-detail.html'
})
export class FlightDetailPage {
  public departing: any;
  public returning: any;

  constructor(public nav: NavController, public flightService: FlightService) {
    // set sample data
    this.departing = this.flightService.getDeparting() || this.flightService.getAll()[0];
    this.returning = this.flightService.getReturning() || this.flightService.getAll()[1];
  }

  checkout() {
    this.nav.push('page-checkout-flight')
  }
}
