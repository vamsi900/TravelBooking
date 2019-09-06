import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController } from 'ionic-angular';
import {HomePage} from "../home/home";

@IonicPage({
  name: 'page-edit-profile',
  segment: 'edit-profile'
})

@Component({
    selector: 'page-edit-profile',
    templateUrl: 'edit-profile.html'
})
export class EditProfilePage {

  profiledata: Boolean = true;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {

  }

  // process send button
  sendData() {
    // send booking info
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    // show message
    let toast = this.toastCtrl.create({
      showCloseButton: true,
      cssClass: 'profile-bg',
      message: 'Your Data was Edited!',
      duration: 3000,
      position: 'bottom'
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
      toast.present();
      // back to home page
      this.navCtrl.setRoot(HomePage);
    }, 3000)
  }

}
