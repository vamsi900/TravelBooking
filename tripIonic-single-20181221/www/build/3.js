webpackJsonp([3],{

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightSearchPageModule", function() { return FlightSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flight_search__ = __webpack_require__(599);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FlightSearchPageModule = /** @class */ (function () {
    function FlightSearchPageModule() {
    }
    FlightSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__flight_search__["a" /* FlightSearchPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__flight_search__["a" /* FlightSearchPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__flight_search__["a" /* FlightSearchPage */]
            ]
        })
    ], FlightSearchPageModule);
    return FlightSearchPageModule;
}());

//# sourceMappingURL=flight-search.module.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {SearchCarsPage} from "../search-cars/search-cars";
var SearchLocationPage = /** @class */ (function () {
    function SearchLocationPage(storage, nav, navParams) {
        this.storage = storage;
        this.nav = nav;
        this.navParams = navParams;
        // places
        this.places = {
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
        this.fromto = this.navParams.data;
    }
    // search by item
    SearchLocationPage.prototype.searchBy = function (item) {
        if (this.fromto === 'from') {
            this.storage.set('pickup', item.name);
        }
        if (this.fromto === 'to') {
            this.storage.set('dropOff', item.name);
        }
        // this.nav.push(SearchCarsPage);
        this.nav.pop();
    };
    SearchLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search-location',template:/*ion-inline-start:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\search-location\search-location.html"*/'<!-- # -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-input placeholder="Enter Destination" padding-left autofocus></ion-input>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="list-no-border">\n    <!--nearby places-->\n    <ion-item *ngFor="let item of places.nearby" tappable (click)="searchBy(item)">\n      <ion-icon name="md-locate" item-left color="primary"></ion-icon>\n      <span ion-text color="primary">{{ item.name }}</span>\n    </ion-item>\n    <!--recent places-->\n    <ion-item *ngFor="let item of places.recent" tappable (click)="searchBy(item)">\n      <ion-icon name="md-time" item-left color="primary"></ion-icon>\n      <span ion-text color="primary">{{ item.name }}</span>\n    </ion-item>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\search-location\search-location.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], SearchLocationPage);
    return SearchLocationPage;
}());

//# sourceMappingURL=search-location.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion2_calendar__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_location_search_location__ = __webpack_require__(582);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FlightSearchPage = /** @class */ (function () {
    function FlightSearchPage(storage, nav, modalCtrl) {
        this.storage = storage;
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.dDate = new Date();
        this.oneway = false;
        // number of adult
        this.adults = 1;
        // number of children
        this.children = 0;
        // number of infants
        this.infants = 0;
        this.search = {
            pickup: "Hyderabad",
            dropOff: "Same as pickup",
            from: new Date().toISOString(),
            to: new Date().toISOString()
        };
        // search conditions
        this.checkin = {
            name: "Departing",
            date: new Date().toLocaleString().split(',')[0]
        };
        this.checkout = {
            name: "Returning",
            date: new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleString().split(',')[0]
        };
    }
    FlightSearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
    };
    FlightSearchPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('pickup').then(function (val) {
            if (val === null) {
                _this.search.pickup = "Hyderabad";
            }
            else {
                _this.search.pickup = val;
            }
        }).catch(function (err) {
            console.log(err);
        });
        this.storage.get('dropOff').then(function (val) {
            if (val === null) {
                _this.search.dropOff = "Same as pickup";
            }
            else {
                _this.search.dropOff = val;
            }
            // this.search.dropOff = val;
        }).catch(function (err) {
            console.log(err);
        });
    };
    FlightSearchPage.prototype.openCalendar = function () {
        var _this = this;
        var options = {
            pickMode: 'range',
            title: 'Range Date'
        };
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2_ion2_calendar__["CalendarModal"], {
            options: options
        });
        myCalendar.present();
        myCalendar.onDidDismiss(function (date, type) {
            if (date !== null) {
                _this.checkin.date = new Date(new Date(date.from.time)).toLocaleString().split(',')[0];
                _this.checkout.date = new Date(new Date(date.to.time)).toLocaleString().split(',')[0];
            }
        });
    };
    // choose place
    FlightSearchPage.prototype.choosePlace = function (from) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__search_location_search_location__["a" /* SearchLocationPage */], from);
    };
    // go to result page
    FlightSearchPage.prototype.doSearch = function () {
        this.nav.push('page-flight-departing');
    };
    FlightSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-flight-search',template:/*ion-inline-start:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\flight-search\flight-search.html"*/'<!-- -->\n<ion-header class="no-shadow">\n\n  <ion-navbar class="no-border" color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="text-white">\n      Flights\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="common-bg">\n  <!--list menu on the top-->\n  <div class="trip-card-wrapper" no-margin>\n    <div class="booking-card" padding>\n      <ion-grid class="card" fixed>\n\n        <ion-row>\n          <ion-col col-12 no-padding>\n\n            <ion-card no-margin class="full-width">\n              <ion-item tappable (click)="choosePlace(\'from\')" class="border-bottom datetime-btn">\n                <ion-icon name="airplane" color="primary" item-left></ion-icon>\n                <p ion-text color="primary" class="text-sm">Flying from</p>\n                <span ion-text color="one" class="bold">{{ search.pickup }}</span>\n              </ion-item>\n\n              <ion-item tappable (click)="choosePlace(\'to\')" class="datetime-btn">\n                <ion-icon name="airplane" color="primary" class="deg180" item-left></ion-icon>\n                <p ion-text color="primary" class="text-sm">Flying to</p>\n                <span ion-text color="one" class="bold">{{ search.dropOff }}</span>\n              </ion-item>\n            </ion-card>\n\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12 no-padding padding-vertical>\n            <ion-item>\n              <ion-label>One Way?</ion-label>\n              <ion-checkbox [(ngModel)]="oneway"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class="bb no-paddingB">\n            <ion-label class="no-margin mb-half bold text-primary text-center">{{ checkin.name }}</ion-label>\n          </ion-col>\n          <ion-col class="bb no-paddingB" *ngIf="!oneway">\n            <ion-label class="no-margin mb-half bold text-primary text-center">{{ checkout.name }}</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class="br bb datetime-btn" padding tappable (click)="openCalendar()" text-center>\n            <ion-icon name="md-calendar" item-left></ion-icon>\n            <span ion-text color="primary">{{ checkin.date }}</span>\n          </ion-col>\n          <ion-col col-6 class="bb datetime-btn" *ngIf="!oneway" text-center padding tappable (click)="openCalendar()">\n            <ion-icon name="md-calendar" item></ion-icon>\n            <span ion-text color="primary">{{ checkout.date }}</span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row padding-horizontal>\n          <ion-col col-4 col-md-4>\n            <div class="guests bb">\n              <ion-item>\n                <ion-label>Adults</ion-label>\n                <ion-select [(ngModel)]="adults" cancelText="Cancel" okText="OK">\n                  <ion-option value="1" selected="true">1</ion-option>\n                  <ion-option value="2">2</ion-option>\n                  <ion-option value="3">3</ion-option>\n                  <ion-option value="4">4</ion-option>\n                  <ion-option value="5">5</ion-option>\n                  <ion-option value="6">6</ion-option>\n                  <ion-option value="7">7</ion-option>\n                  <ion-option value="8">8</ion-option>\n                  <ion-option value="9">9</ion-option>\n                  <ion-option value="10">10</ion-option>\n                </ion-select>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col col-4 col-md-4>\n            <div class="guests bb">\n              <ion-item>\n                <ion-label>Children</ion-label>\n                <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK">\n                  <ion-option value="0" selected="true">0</ion-option>\n                  <ion-option value="1">1</ion-option>\n                  <ion-option value="2">2</ion-option>\n                  <ion-option value="3">3</ion-option>\n                  <ion-option value="4">4</ion-option>\n                  <ion-option value="5">5</ion-option>\n                  <ion-option value="6">6</ion-option>\n                  <ion-option value="7">7</ion-option>\n                  <ion-option value="8">8</ion-option>\n                  <ion-option value="9">9</ion-option>\n                  <ion-option value="10">10</ion-option>\n                </ion-select>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col col-4 col-md-4>\n            <div class="guests bb">\n              <ion-item>\n                <ion-label>Infants</ion-label>\n                <ion-select [(ngModel)]="infants" cancelText="Cancel" okText="OK">\n                  <ion-option value="0" selected="true">0</ion-option>\n                  <ion-option value="1">1</ion-option>\n                  <ion-option value="2">2</ion-option>\n                  <ion-option value="3">3</ion-option>\n                  <ion-option value="4">4</ion-option>\n                  <ion-option value="5">5</ion-option>\n                  <ion-option value="6">6</ion-option>\n                  <ion-option value="7">7</ion-option>\n                  <ion-option value="8">8</ion-option>\n                  <ion-option value="9">9</ion-option>\n                  <ion-option value="10">10</ion-option>\n                </ion-select>\n              </ion-item>\n            </div>\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row padding-horizontal margin-bottom>\n          <ion-col>\n            <div class="guests bb">\n              <ion-item>\n                <ion-label>Preferred Class</ion-label>\n                <ion-select [(ngModel)]="preclass" cancelText="Cancel" okText="OK">\n                  <ion-option value="1" selected="true">Economy/Coach</ion-option>\n                  <ion-option value="2">Premium Economy</ion-option>\n                  <ion-option value="3">Business</ion-option>\n                  <ion-option value="4">First Class</ion-option>\n                </ion-select>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col no-padding>\n            <button ion-button block color="one" class="round" no-margin tappable (click)="doSearch()">\n              <ion-icon name="search"></ion-icon>\n              Show flights\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col no-padding>\n\n        <div class="trip-card-wrapper tdeal" no-margin>\n          <ion-card class="opt-card">\n            <ion-card-header>\n              <ion-card no-margin class="w100">\n                <ion-card-content class="light-bg">\n                  <h2 ion-text class="bold text-white" text-center>Top deal of the day!</h2>\n                </ion-card-content>\n              </ion-card>\n            </ion-card-header>\n            <ion-card-content class="card-background-page">\n              <ion-grid no-padding>\n                <ion-row>\n                  <ion-col col-12 no-padding>\n                    <ion-card no-margin>\n                      <img src="assets/img/flight/flight_cover.jpg" />\n                      <div class="card-title">30% OFF</div>\n                      <div class="card-subtitle">\n                        Mumbai to Kolkata\n                      </div>\n                      <span ion-text class="card-img-status promo fw300 text-white">\n                        discounts\n                      </span>\n                    </ion-card>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card-content>\n          </ion-card>\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\flight-search\flight-search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], FlightSearchPage);
    return FlightSearchPage;
}());

//
//# sourceMappingURL=flight-search.js.map

/***/ })

});
//# sourceMappingURL=3.js.map