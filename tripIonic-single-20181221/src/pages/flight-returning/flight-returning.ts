import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
import {FlightService} from "../../providers/flight-service";

@IonicPage({
  name: 'page-flight-returning',
  segment: 'flight-returning'
})

@Component({
    selector: 'page-flight-returning',
    templateUrl: 'flight-returning.html'
})
export class FlightReturningPage {
  public flights: any;

  constructor(public nav: NavController, public flightService: FlightService) {
    // set sample data
    this.flights = this.flightService.getAll();
  }

  chooseFlight(flight) {
    this.flightService.setReturning(flight);
    this.nav.push('page-flight-detail');
  }
}
