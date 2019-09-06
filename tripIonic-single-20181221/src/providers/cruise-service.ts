import {Injectable} from "@angular/core";
import {CRUISES} from "./mock-cruises";

@Injectable()
export class CruiseService {
  private cruises: any;
  cruisesBookingCounter: number = 0;
  cruiseBookings: Array<any> = [];
  cruise: any;

  favoriteCounter: number = 0;
  favorites: Array<any> = [];

  constructor() {
    this.cruises = CRUISES;
  }

  getAll() {
    return this.cruises;
  }

  getItem(id) {
    for (var i = 0; i < this.cruises.length; i++) {
      if (this.cruises[i].id === parseInt(id)) {
        return this.cruises[i];
      }
    }
    return null;
  }

  remove(item) {
    this.cruises.splice(this.cruises.indexOf(item), 1);
  }

  // Favorites
  getFavorites() {
    return Promise.resolve(this.favorites);
  }

  favorite(cruise) {
    this.favoriteCounter = this.favoriteCounter + 1;
    this.favorites.push({ id: this.favoriteCounter, cruise: cruise });
    return Promise.resolve();
  }

  unfavorite(favorite) {
    let index = this.favorites.indexOf(favorite);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
    return Promise.resolve();
  }

  // Bookings
  setCruise(cruise) {
    this.cruise = cruise;
  }

  getCruise() {
    return this.cruise;
  }

  booking(cruise, bookId) {
    this.cruisesBookingCounter = this.cruisesBookingCounter + 1;
    this.cruiseBookings.push({
      id: this.cruisesBookingCounter,
      bookId: bookId,
      cruise: cruise,
      totalValue: cruise.price_adult + cruise.price_child
    });
    this.cruise = null;
    return Promise.resolve();
  }

  getBookings() {
    return Promise.resolve(this.cruiseBookings);
  }

}
