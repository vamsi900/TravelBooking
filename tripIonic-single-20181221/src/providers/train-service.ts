import {Injectable} from "@angular/core";
import {TRAINS} from "./mock-trains";

@Injectable()
export class TrainService {
  trains: any;
  trainsBookingCounter: number = 0;
  trainBookings: Array<any> = [];
  train: any;

  constructor() {
    this.trains = TRAINS;
  }

  getAll() {
    return this.trains;
  }

  // Bookings
  setTrain(train) {
    this.train = train;
  }

  getTrain() {
    return this.train;
  }

  booking(train, bookId) {
    this.trainsBookingCounter = this.trainsBookingCounter + 1;
    this.trainBookings.push({
      id: this.trainsBookingCounter,
      bookId: bookId,
      train: train,
      totalValue: train.out[0].price + train.return[1].price
    });
    this.train = null;
    return Promise.resolve();
  }

  getBookings() {
    return Promise.resolve(this.trainBookings);
  }

}
