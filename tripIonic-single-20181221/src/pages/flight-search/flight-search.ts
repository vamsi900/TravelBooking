import {Component} from "@angular/core";
import { IonicPage, NavController, ModalController} from "ionic-angular";
import { CalendarModal, CalendarModalOptions, CalendarResult } from "ion2-calendar";

import {Storage} from '@ionic/storage';

import {SearchLocationPage} from "../search-location/search-location";

@IonicPage({
  name: 'page-flight-search',
  segment: 'flight-search',
  priority: 'high'
})

@Component({
  selector: 'page-flight-search',
  templateUrl: 'flight-search.html'
})

export class FlightSearchPage {
  dDate: Date = new Date();
  public preclass: any;
  public oneway: any = false;
  // number of adult
  public adults = 1;
  // number of children
  public children = 0;
  // number of infants
  public infants = 0;

  public search: any = {
    pickup: "Hyderabad",
    dropOff: "Same as pickup",
    from: new Date().toISOString(),
    to: new Date().toISOString()
  };
  // search conditions
  public checkin = {
    name: "Departing",
    date: new Date().toLocaleString().split(',')[0]
  }

  public checkout = {
    name: "Returning",
    date: new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleString().split(',')[0]
  }

  constructor(private storage: Storage, public nav: NavController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad')
  }

  ionViewWillEnter() {
    this.storage.get('pickup').then((val) => {
      if (val === null) {
        this.search.pickup = "Hyderabad"
      } else {
        this.search.pickup = val;
      }
    }).catch((err) => {
      console.log(err)
    });

    this.storage.get('dropOff').then((val) => {
      if (val === null) {
        this.search.dropOff = "Same as pickup"
      } else {
        this.search.dropOff = val;
      }
      // this.search.dropOff = val;
    }).catch((err) => {
      console.log(err)
    });
  }

  openCalendar() {
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: 'Range Date'
    };

    let myCalendar = this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();

    myCalendar.onDidDismiss((date: { from: CalendarResult; to: CalendarResult }, type: string) => {
      if (date !== null) {
        this.checkin.date = new Date(new Date(date.from.time)).toLocaleString().split(',')[0]
        this.checkout.date = new Date(new Date(date.to.time)).toLocaleString().split(',')[0]
      }
    });
  }

  // choose place
  choosePlace(from) {
    this.nav.push(SearchLocationPage, from);
  }

  // go to result page
  doSearch() {
    this.nav.push('page-flight-departing');
  }

}

//
