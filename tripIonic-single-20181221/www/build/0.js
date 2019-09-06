webpackJsonp([0],{

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(594);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditProfilePageModule = /** @class */ (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]
            ]
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());

//# sourceMappingURL=edit-profile.module.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    NotificationsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    NotificationsPage.prototype.messages = function () {
        this.navCtrl.push('page-message-list');
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notifications',template:/*ion-inline-start:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\notifications\notifications.html"*/'<ion-list class="no-margin">\n  <ion-list-header class="no-margin">\n    <ion-icon name="notifications" color="primary"></ion-icon>\n    <span ion-text color="primary" class="bold">Notifications</span>\n  </ion-list-header>\n  <button ion-item color="primary" class="text-11x" (click)="messages()">\n    <ion-icon name="mail"></ion-icon>\n    New Trip Offer 25% OFF\n  </button>\n  <button ion-item class="text-11x" (click)="messages()">\n    <ion-icon name="mail-open"></ion-icon>\n    New Offer 15% OFF by month!\n  </button>\n  <button ion-item class="text-11x" (click)="messages()">\n    <ion-icon name="mail-open"></ion-icon>\n    Visit America Airlines Offer!\n  </button>\n  <button ion-item color="primary" class="text-11x" (click)="messages()">\n    <ion-icon name="mail"></ion-icon>\n    Big Deal of the Week!\n  </button>\n</ion-list>\n'/*ion-inline-end:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\notifications\notifications.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications_notifications__ = __webpack_require__(583);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(nav, navParams, menuCtrl, modalCtrl, popoverCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        // set sample data
        this.menuCtrl.swipeEnable(true, 'authenticated');
        this.menuCtrl.enable(true);
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('Home loaded!');
    };
    // // to go account page
    HomePage.prototype.goToAccount = function () {
        this.nav.push('page-account');
    };
    HomePage.prototype.searchCruises = function () {
        this.nav.push('page-cruise-search');
    };
    HomePage.prototype.searchFlights = function () {
        this.nav.push('page-flight-search');
    };
    HomePage.prototype.searchTrains = function () {
        this.nav.push('page-train-search');
    };
    HomePage.prototype.presentNotifications = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__notifications_notifications__["a" /* NotificationsPage */]);
        popover.present({
            ev: myEvent
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\home\home.html"*/'<!-- -->\n<ion-header class="no-shadow">\n\n  <ion-navbar class="no-border" color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <div ion-text class="icon-title text-white"></div>\n      <span class="text-light">Cedar</span><strong>Trips</strong>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button tappable (click)="presentNotifications($event)">\n        <ion-icon name="notifications"></ion-icon>\n      </button>\n      <button ion-button tappable (click)="goToAccount()">\n        <ion-icon name="cog"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="common-bg">\n  <!--list menu on the top-->\n  <div class="trip-card-wrapper" no-margin>\n    <ion-card class="opt-card">\n      <ion-card-header>\n        <ion-card no-margin class="w100">\n          <ion-card-content class="primary-bg">\n            <h2 ion-text class="bold text-white" text-center>Choose your way</h2>\n          </ion-card-content>\n        </ion-card>\n      </ion-card-header>\n      <ion-card-content class="card-background-page">\n        <ion-card no-margin margin-bottom tapplable (click)="searchFlights()">\n          <img src="assets/img/flight/flight_cover.jpg" />\n          <div class="card-title">Flights</div>\n          <div class="card-subtitle">\n            <span ion-text color="red" class="bold">12</span> bookings today!\n          </div>\n          <span ion-text class="card-img-status sale fw300 text-white">\n            hot sales\n          </span>\n        </ion-card>\n\n        <ion-card no-margin margin-bottom tapplable (click)="searchCruises()">\n          <img src="assets/img/cruise/cruise_cover.jpg" />\n          <div class="card-title">Cruises</div>\n          <div class="card-subtitle">\n            <span ion-text color="secondary" class="bold">8</span> bookings today!\n          </div>\n          <span ion-text class="card-img-status promo fw300 text-white">\n            discounts\n          </span>\n        </ion-card>\n\n        <ion-card no-margin tapplable (click)="searchTrains()">\n          <img src="assets/img/train/train_cover.jpg" />\n          <div class="card-title">Trains</div>\n          <div class="card-subtitle">\n            <span ion-text color="red" class="bold">27</span> bookings today!\n          </div>\n          <span ion-text class="card-img-status deals fw300 text-white">\n            top deals\n          </span>\n        </ion-card>\n      </ion-card-content>\n    </ion-card>\n\n  </div>\n\n\n  <div class="trip-card-wrapper deals" no-margin>\n    <ion-card class="opt-card">\n      <ion-card-header>\n        <ion-card no-margin class="w100">\n          <ion-card-content class="primary-bg">\n            <h2 ion-text class="bold text-white" text-center>Today\'s Top Deals</h2>\n          </ion-card-content>\n        </ion-card>\n      </ion-card-header>\n\n      <ion-card-content class="card-background-page">\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col col-12 no-padding margin-bottom>\n              <ion-card no-margin>\n                <img src="assets/img/train/train_cover.jpg" />\n                <div class="card-title">40% OFF</div>\n                <div class="card-subtitle">\n                  Cheap train lines!\n                </div>\n              </ion-card>\n            </ion-col>\n\n            <ion-col col-12 no-padding>\n              <ion-card no-margin>\n                <img src="assets/img/flight/flight_cover.jpg" />\n                <div class="card-title">30% OFF</div>\n                <div class="card-subtitle">\n                  Goa to Delhi\n                </div>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"]])
    ], HomePage);
    return HomePage;
}());

//
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(584);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.profiledata = true;
    }
    // process send button
    EditProfilePage.prototype.sendData = function () {
        var _this = this;
        // send booking info
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        // show message
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            cssClass: 'profile-bg',
            message: 'Your Data was Edited!',
            duration: 3000,
            position: 'bottom'
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            toast.present();
            // back to home page
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }, 3000);
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\edit-profile\edit-profile.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <span ion-text>Edit Profile</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="profile common-bg">\n\n    <ion-card>\n      <ion-card-content class="profile-bg">\n          <img src="assets/img/0.jpg">\n          <h2 class="fw500">Pankaj Bhagat</h2>\n          <h3 ion-text color="light">Customer</h3>\n          <button ion-button icon-start margin-top color="one">\n            <ion-icon name="photos"></ion-icon>\n            Edit / Insert Avatar\n          </button>\n      </ion-card-content>\n\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col col-12 margin-bottom padding>\n\n  	        <ion-item>\n  	          <ion-label color="one" stacked>Full Name:</ion-label>\n  	          <ion-input type="text" placeholder="Ex..: Joe Doe" value="Pankaj Bhagat"></ion-input>\n  	        </ion-item>\n\n  	        <ion-item>\n  	          <ion-label color="one" stacked>Email:</ion-label>\n  	          <ion-input type="email" placeholder="Ex.: joe@doe.com" value="pankajbhagat@gmail.com"></ion-input>\n  	        </ion-item>\n\n  	        <ion-item>\n  	          <ion-label color="one" stacked>Address:</ion-label>\n  	          <ion-input type="text" placeholder="Ex.: Jubilee Hills"></ion-input>\n  	        </ion-item>\n\n  				  <ion-item>\n  				    <ion-label color="one">City</ion-label>\n  				    <ion-select>\n  				      <ion-option value="nes">New York</ion-option>\n  				      <ion-option value="n64">Los Angeles</ion-option>\n  				      <ion-option value="ps">London</ion-option>\n  				      <ion-option value="genesis">Paris</ion-option>\n  				      <ion-option value="saturn">São Paulo</ion-option>\n  				      <ion-option value="snes">Tokyo</ion-option>\n  				      <ion-option value="snes">New Delhi</ion-option>\n  				    </ion-select>\n  				  </ion-item>\n\n  				  <ion-item>\n  				    <ion-label color="one">State</ion-label>\n  				    <ion-select>\n  				      <ion-option value="nes">NY</ion-option>\n  				      <ion-option value="n64">CA</ion-option>\n  				      <ion-option value="ps">Greater London</ion-option>\n  				      <ion-option value="genesis">Paris</ion-option>\n  				      <ion-option value="saturn">SP</ion-option>\n  				      <ion-option value="snes">Kantō</ion-option>\n  				      <ion-option value="snes">Delhi</ion-option>\n  				    </ion-select>\n  				  </ion-item>\n\n  					<div radio-group margin-top margin-bottom>\n  					  <ion-list-header no-margin no-padding>\n  					    <span ion-text color="one" class="fw500">User Type</span>\n  					  </ion-list-header>\n\n  					  <ion-item>\n  					    <ion-label color="one">Customer</ion-label>\n  					    <ion-radio checked="true" value="customer"></ion-radio>\n  					  </ion-item>\n\n  					  <ion-item>\n  					    <ion-label color="one">Travel Agent</ion-label>\n  					    <ion-radio value="agent"></ion-radio>\n  					  </ion-item>\n  					</div>\n\n            <ion-item>\n            	<ion-label class="text-1x" color="one">Available to chat w/ Travel Agents?</ion-label>\n            	<ion-checkbox></ion-checkbox>\n          	</ion-item>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n			<button ion-button large full color="one" (click)="sendData()">Edit</button>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\edit-profile\edit-profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ })

});
//# sourceMappingURL=0.js.map