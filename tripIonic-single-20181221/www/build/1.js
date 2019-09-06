webpackJsonp([1],{

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainSearchModule", function() { return TrainSearchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__train_search__ = __webpack_require__(606);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TrainSearchModule = /** @class */ (function () {
    function TrainSearchModule() {
    }
    TrainSearchModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__train_search__["a" /* TrainSearchPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__train_search__["a" /* TrainSearchPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__train_search__["a" /* TrainSearchPage */]
            ]
        })
    ], TrainSearchModule);
    return TrainSearchModule;
}());

//# sourceMappingURL=train-search.module.js.map

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

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainSearchPage; });
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





var TrainSearchPage = /** @class */ (function () {
    function TrainSearchPage(storage, nav, modalCtrl) {
        this.storage = storage;
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.dDate = new Date();
        this.oneway = false;
        // number of adult
        this.adults = 1;
        // number of children
        this.children = 0;
        this.search = {
            pickup: "Rio de Janeiro, Brazil",
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
    TrainSearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
    };
    TrainSearchPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('pickup').then(function (val) {
            if (val === null) {
                _this.search.pickup = "Rio de Janeiro, Brazil";
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
        }).catch(function (err) {
            console.log(err);
        });
    };
    TrainSearchPage.prototype.openCalendar = function () {
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
    TrainSearchPage.prototype.childrenArr = function (chil) {
        var child = Number(chil);
        this.childs = Array(child).fill(0).map(function (v, i) { return i; });
    };
    // choose place
    TrainSearchPage.prototype.choosePlace = function (from) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__search_location_search_location__["a" /* SearchLocationPage */], from);
    };
    // go to result page
    TrainSearchPage.prototype.doSearch = function () {
        this.nav.push('page-train-departing');
    };
    TrainSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-train-search',template:/*ion-inline-start:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\train-search\train-search.html"*/'<!-- -->\n<ion-header class="no-shadow">\n\n  <ion-navbar class="no-border" color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="text-white">\n      Trains\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="common-bg">\n  <!--list menu on the top-->\n  <div class="trip-card-wrapper" no-margin>\n    <div class="booking-card" padding>\n      <ion-grid class="card" fixed>\n\n        <ion-row>\n          <ion-col col-12 no-padding>\n\n            <ion-card no-margin class="full-width">\n              <ion-item tappable (click)="choosePlace(\'from\')" class="border-bottom datetime-btn">\n                <ion-icon name="train" color="primary" item-left></ion-icon>\n                <p ion-text color="light" class="text-sm">Origin station</p>\n                <span ion-text color="dark" class="bold">{{ search.pickup }}</span>\n              </ion-item>\n\n              <ion-item tappable (click)="choosePlace(\'to\')" class="datetime-btn">\n                <ion-icon name="train" color="primary" item-left></ion-icon>\n                <p ion-text color="light" class="text-sm">Destination station</p>\n                <span ion-text color="dark" class="bold">{{ search.dropOff }}</span>\n              </ion-item>\n            </ion-card>\n\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12 no-padding padding-vertical>\n            <ion-item>\n              <ion-label>One Way?</ion-label>\n              <ion-checkbox [(ngModel)]="oneway"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class="bb no-paddingB">\n            <ion-label class="no-margin mb-half bold text-primary text-center">{{ checkin.name }}</ion-label>\n          </ion-col>\n          <ion-col class="bb no-paddingB" *ngIf="!oneway">\n            <ion-label class="no-margin mb-half bold text-primary text-center">{{ checkout.name }}</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class="br bb datetime-btn" padding tappable (click)="openCalendar()" text-center>\n            <ion-icon name="md-calendar" item-left></ion-icon>\n            <span ion-text color="primary">{{ checkin.date }}</span>\n          </ion-col>\n          <ion-col col-6 class="bb datetime-btn" *ngIf="!oneway" text-center padding tappable (click)="openCalendar()">\n            <ion-icon name="md-calendar" item-left></ion-icon>\n            <span ion-text color="primary">{{ checkout.date }}</span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row padding-horizontal>\n          <ion-col col-6 col-md-6>\n            <div class="guests bb">\n              <ion-item>\n                <ion-label>Adults</ion-label>\n                <ion-select [(ngModel)]="adults" cancelText="Cancel" okText="OK">\n                  <ion-option value="1" selected="true">1</ion-option>\n                  <ion-option value="2">2</ion-option>\n                  <ion-option value="3">3</ion-option>\n                  <ion-option value="4">4</ion-option>\n                  <ion-option value="5">5</ion-option>\n                  <ion-option value="6">6</ion-option>\n                  <ion-option value="7">7</ion-option>\n                  <ion-option value="8">8</ion-option>\n                  <ion-option value="9">9</ion-option>\n                  <ion-option value="10">10</ion-option>\n                </ion-select>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col col-6 col-md-6>\n            <div class="guests bb">\n              <ion-item>\n                <ion-label>Children</ion-label>\n                <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                  <ion-option value="0" selected="true">0</ion-option>\n                  <ion-option value="1">1</ion-option>\n                  <ion-option value="2">2</ion-option>\n                  <ion-option value="3">3</ion-option>\n                  <ion-option value="4">4</ion-option>\n                  <ion-option value="5">5</ion-option>\n                  <ion-option value="6">6</ion-option>\n                  <ion-option value="7">7</ion-option>\n                  <ion-option value="8">8</ion-option>\n                  <ion-option value="9">9</ion-option>\n                  <ion-option value="10">10</ion-option>\n                </ion-select>\n              </ion-item>\n            </div>\n          </ion-col>\n          <!-- *ngFor="let child of childs; let i = index" -->\n        </ion-row>\n\n        <ion-row *ngIf="children > 0" padding-horizontal>\n          <ion-col col-12 class="no-paddingT no-paddingB">\n            <p ion-text color="primary" class="bold thirds-op" *ngIf="children == 1">Child\'s age</p>\n            <p ion-text color="primary" class="bold thirds-op" *ngIf="children > 1">Children\'s ages</p>\n          </ion-col>\n          <ion-col col-6 col-md-4 class="no-paddingT no-paddingB" *ngFor="let child of childs; let i = index">\n            <div class="guests bb">\n              <ion-item>\n                <ion-label>Child {{ i + 1 }}</ion-label>\n                <ion-select cancelText="Cancel" okText="OK">\n                  <ion-option value="0" selected="true">0</ion-option>\n                  <ion-option value="1">1</ion-option>\n                  <ion-option value="2">2</ion-option>\n                  <ion-option value="3">3</ion-option>\n                  <ion-option value="4">4</ion-option>\n                  <ion-option value="5">5</ion-option>\n                  <ion-option value="6">6</ion-option>\n                  <ion-option value="7">7</ion-option>\n                  <ion-option value="8">8</ion-option>\n                  <ion-option value="9">9</ion-option>\n                  <ion-option value="10">10</ion-option>\n                  <ion-option value="11">11</ion-option>\n                  <ion-option value="12">12</ion-option>\n                  <ion-option value="13">13</ion-option>\n                  <ion-option value="14">14</ion-option>\n                  <ion-option value="14">15</ion-option>\n                  <ion-option value="14">16</ion-option>\n                  <ion-option value="14">17</ion-option>\n                </ion-select>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row padding-horizontal>\n          <ion-col>\n            <div class="guests bb">\n              <ion-item>\n                <ion-label>Position</ion-label>\n                <ion-select [(ngModel)]="position" cancelText="Cancel" okText="OK">\n                  <ion-option value="1" selected="true">No preference</ion-option>\n                  <ion-option value="2">Window</ion-option>\n                  <ion-option value="3">Aisle</ion-option>\n                  <ion-option value="4">Individual (First class)</ion-option>\n                </ion-select>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row padding-horizontal>\n          <ion-col>\n            <div class="guests bb">\n              <ion-item>\n                <ion-label>Direction</ion-label>\n                <ion-select [(ngModel)]="direction" cancelText="Cancel" okText="OK">\n                  <ion-option value="1" selected="true">No preference</ion-option>\n                  <ion-option value="2">Backward facing</ion-option>\n                  <ion-option value="3">Forward facing</ion-option>\n                  <ion-option value="4">Airline style</ion-option>\n                </ion-select>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row padding-horizontal margin-bottom>\n          <ion-col>\n            <div class="guests bb">\n              <ion-item>\n                <ion-label>Coach type</ion-label>\n                <ion-select [(ngModel)]="coachtype" cancelText="Cancel" okText="OK">\n                  <ion-option value="1" selected="true">No preference</ion-option>\n                  <ion-option value="2">Quiet</ion-option>\n                </ion-select>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col no-padding>\n            <button ion-button block color="secondary" class="round" no-margin tappable (click)="doSearch()">\n              <ion-icon name="train"></ion-icon>\n              Get train lines\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col no-padding>\n\n        <div class="trip-card-wrapper tdeal" no-margin>\n          <ion-card class="opt-card">\n            <ion-card-header>\n              <ion-card no-margin class="w100">\n                <ion-card-content class="light-bg">\n                  <h2 ion-text class="bold text-white" text-center>Top deal of the day!</h2>\n                </ion-card-content>\n              </ion-card>\n            </ion-card-header>\n            <ion-card-content class="card-background-page">\n              <ion-grid no-padding>\n                <ion-row>\n                  <ion-col col-12 no-padding>\n                    <ion-card no-margin>\n                      <img src="assets/img/train/train_cover.jpg" />\n                      <div class="card-title">40% OFF</div>\n                      <div class="card-subtitle">\n                        London to York\n                      </div>\n                      <span ion-text class="card-img-status promo fw300 text-white">\n                        discounts\n                      </span>\n                    </ion-card>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card-content>\n          </ion-card>\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\train-search\train-search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], TrainSearchPage);
    return TrainSearchPage;
}());

//
//# sourceMappingURL=train-search.js.map

/***/ })

});
//# sourceMappingURL=1.js.map