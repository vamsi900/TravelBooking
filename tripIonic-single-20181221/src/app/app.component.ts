import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';


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

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard
  ) {
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
      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      this.keyboard.hide();
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
