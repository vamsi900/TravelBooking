import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import { FlightService } from "../../providers/flight-service";
import { TrainService } from "../../providers/train-service";
import { CruiseService } from "../../providers/cruise-service";

@IonicPage({
  name: 'page-booking-list',
  segment: 'booking-list'
})

@Component({
    selector: 'page-booking-list',
    templateUrl: 'booking-list.html'
})
export class BookingListPage {

  flightBookings: Array<any> = [];
  cruiseBookings: Array<any> = [];
  trainBookings: Array<any> = [];

  constructor(public navCtrl: NavController, public flightService: FlightService, public trainService: TrainService, public cruiseService: CruiseService) {
    this.getFlightBookings();
    this.getTrainBookings();
    this.getCruiseBookings();
  }


    getTrainBookings() {
      this.trainService.getBookings()
        .then(data => { this.trainBookings = data; });
    }

    getCruiseBookings() {
      this.cruiseService.getBookings()
        .then(data => { this.cruiseBookings = data; });
    }

    getFlightBookings() {
      this.flightService.getBookings()
        .then(data => { this.flightBookings = data; });
    }

}
