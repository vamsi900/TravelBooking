import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
import {FlightService} from "../../providers/flight-service";

@IonicPage({
  name: 'page-flight-departing',
  segment: 'flight-departing'
})

@Component({
  selector: 'page-flight-departing',
  templateUrl: 'flight-departing.html'
})
export class FlightDepartingPage {
  public flights: any;

  constructor(public nav: NavController, public flightService: FlightService) {
    // set sample data
    this.flights = this.flightService.getAll();
  }

  chooseFlight(flight) {
    this.flightService.setDeparting(flight);
    this.nav.push('page-flight-returning');
  }
}
