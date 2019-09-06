import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

import { CruiseService } from "../../providers/cruise-service";

@IonicPage({
  name: 'page-favorite-list',
  segment: 'favorite-list'
})

@Component({
    selector: 'page-favorite-list',
    templateUrl: 'favorite-list.html'
})
export class FavoriteListPage {

  favorites: Array<any> = [];

  constructor(public navCtrl: NavController, public cruiseService: CruiseService) {
      this.getFavorites();
  }

  itemTapped(favorite) {
    this.navCtrl.push('page-flight-detail', {
      'id': favorite.flight.id
    });
  }

  deleteItem(favorite) {
    this.cruiseService.unfavorite(favorite)
      .then(() => {
        this.getFavorites();
      })
      .catch(error => alert(JSON.stringify(error)));
  }

  getFavorites() {
    this.cruiseService.getFavorites()
      .then(data => this.favorites = data);
  }

}
