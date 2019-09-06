import {Injectable} from "@angular/core";
import {FLIGHTS} from "./mock-flights";

@Injectable()
export class FlightService {
  flights: any;
  flightsBookingCounter: number = 0;
  flightBookings: Array<any> = [];
  departing: any;
  returning: any;

  constructor() {
    this.flights = FLIGHTS;
  }

  getAll() {
    return this.flights;
  }

  getItem(id) {
    for (var i = 0; i < this.flights.length; i++) {
      if (this.flights[i].id === parseInt(id)) {
        return this.flights[i];
      }
    }
    return null;
  }

  remove(item) {
    this.flights.splice(this.flights.indexOf(item), 1);
  }

  // Bookings
  setDeparting(departing) {
    this.departing = departing;
  }

  setReturning(returning) {
    this.returning = returning;
  }

  getDeparting() {
    return this.departing;
  }

  getReturning() {
    return this.returning;
  }

  booking(departing, returning, bookId) {
    this.flightsBookingCounter = this.flightsBookingCounter + 1;
    this.flightBookings.push({
      id: this.flightsBookingCounter,
      bookId: bookId,
      departing: departing,
      returning: returning,
      totalValue: departing.price + returning.price
    });
    this.departing = null;
    this.returning = null;
    return Promise.resolve();
  }


  getBookings() {
    return Promise.resolve(this.flightBookings);
  }


}
