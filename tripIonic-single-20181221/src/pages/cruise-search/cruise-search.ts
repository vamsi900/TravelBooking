import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
import {Storage} from '@ionic/storage';

import {SearchLocationPage} from "../search-location/search-location";

@IonicPage({
  name: 'page-cruise-search',
  segment: 'cruise-search'
})

@Component({
  selector: 'page-cruise-search',
  templateUrl: 'cruise-search.html'
})
export class CruiseSearchPage {
  dDate: Date = new Date();
  preclass: any;
  // number of adult
  public adults = 1;
  // number of children
  public children: any;
  public childs: any;
  public cabin: any;

  // search conditions
  public checkin = {
    name: "Select Date",
    date: this.dDate.toISOString()
  }

  constructor(private storage: Storage, public nav: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad')
  }

  ionViewWillEnter() {
    this.storage.get('cruise-destination').then((val) => {
      if (val === null) {
        this.preclass = 0
      } else {
        this.preclass = val;
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  childrenArr(chil) {
    let child = Number(chil);
    this.childs = Array(child).fill(0).map((v,i) => i);
  }

  destSelect(val) {
    this.storage.set('cruise-destination', val);
  }

  // go to result page
  doSearch() {
    this.nav.push('page-cruise-results');
  }

  // choose place
  choosePlace(from) {
    this.nav.push(SearchLocationPage, from);
  }
}
