import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class tripIonicApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "page-walkthrough";
  showMenu: boolean = true;
  // rootNavCtrl: NavController;

  appMenuItems: Array<MenuItem>;

  constructor(public platform: Platform) {
    this.initializeApp();

    this.appMenuItems = [
      {title: 'Home', component: 'page-home', icon: 'home'},
      {title: 'Messages', component: 'page-message-list', icon: 'mail'},
      {title: 'Local Weather', component: 'page-local-weather', icon: 'sunny'},
      {title: 'Favorites', component: 'page-favorite-list', icon: 'heart'},
      {title: 'Booking List', component: 'page-booking-list', icon: 'briefcase'},
      {title: 'Support', component: 'page-support', icon: 'help-buoy'},
      {title: 'Walkthrough', component: 'page-walkthrough', icon: 'photos'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot('page-auth');
  }

  editProfile() {
    this.nav.setRoot('page-edit-profile');
  }

}
