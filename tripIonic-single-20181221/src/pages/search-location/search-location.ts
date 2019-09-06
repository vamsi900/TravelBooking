import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {Storage} from '@ionic/storage';

// import {SearchCarsPage} from "../search-cars/search-cars";

@IonicPage({
  name: 'page-search-location',
  segment: 'search-location'
})

@Component({
  selector: 'page-search-location',
  templateUrl: 'search-location.html'
})

export class SearchLocationPage {
  public fromto: any;
  // places
  public places = {
    nearby: [
      {
        id: 1,
        name: "Current Location"
      },
      {
        id: 2,
        name: "New Delhi"
      },
      {
        id: 3,
        name: "Mumbai"
      },
      {
        id: 4,
        name: "Hyderabad"
      },
      {
        id: 5,
        name: "Kolkata"
      },
      {
        id: 6,
        name: "Same as pickup"
      }
    ],
    recent: [
      {
        id: 1,
        name: "Hyderabad"
      }
    ]
  };

  constructor(private storage: Storage, public nav: NavController, public navParams: NavParams) {
    this.fromto = this.navParams.data;
  }

  // search by item
  searchBy(item) {
    if (this.fromto === 'from') {
      this.storage.set('pickup', item.name);
    }

    if (this.fromto === 'to') {
      this.storage.set('dropOff', item.name);
    }
    // this.nav.push(SearchCarsPage);
    this.nav.pop();
  }
}
