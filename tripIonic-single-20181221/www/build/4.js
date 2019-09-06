webpackJsonp([4],{

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CruiseSearchModule", function() { return CruiseSearchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cruise_search__ = __webpack_require__(592);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CruiseSearchModule = /** @class */ (function () {
    function CruiseSearchModule() {
    }
    CruiseSearchModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cruise_search__["a" /* CruiseSearchPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__cruise_search__["a" /* CruiseSearchPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__cruise_search__["a" /* CruiseSearchPage */]
            ]
        })
    ], CruiseSearchModule);
    return CruiseSearchModule;
}());

//# sourceMappingURL=cruise-search.module.js.map

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

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CruiseSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_location_search_location__ = __webpack_require__(582);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CruiseSearchPage = /** @class */ (function () {
    function CruiseSearchPage(storage, nav) {
        this.storage = storage;
        this.nav = nav;
        this.dDate = new Date();
        // number of adult
        this.adults = 1;
        // search conditions
        this.checkin = {
            name: "Select Date",
            date: this.dDate.toISOString()
        };
    }
    CruiseSearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
    };
    CruiseSearchPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('cruise-destination').then(function (val) {
            if (val === null) {
                _this.preclass = 0;
            }
            else {
                _this.preclass = val;
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    CruiseSearchPage.prototype.childrenArr = function (chil) {
        var child = Number(chil);
        this.childs = Array(child).fill(0).map(function (v, i) { return i; });
    };
    CruiseSearchPage.prototype.destSelect = function (val) {
        this.storage.set('cruise-destination', val);
    };
    // go to result page
    CruiseSearchPage.prototype.doSearch = function () {
        this.nav.push('page-cruise-results');
    };
    // choose place
    CruiseSearchPage.prototype.choosePlace = function (from) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__search_location_search_location__["a" /* SearchLocationPage */], from);
    };
    CruiseSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cruise-search',template:/*ion-inline-start:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\cruise-search\cruise-search.html"*/'<!-- -->\n<ion-header class="no-shadow">\n\n  <ion-navbar class="no-border" color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Cruises\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="cruise-search common-bg">\n  <div class="trip-card-wrapper" no-margin>\n    <div class="booking-card">\n      <ion-grid class="card" fixed>\n\n        <ion-row margin-bottom>\n          <ion-col col-12 no-padding>\n            <ion-card no-margin class="full-width">\n              <ion-item class="datetime-btn" no-padding>\n                <ion-label>Select your destination</ion-label>\n                <ion-select [(ngModel)]="preclass" cancelText="Cancel" okText="OK" class="full" (ionChange)="destSelect(preclass)">\n                  <ion-option value="0" class="bold">-- Destination --</ion-option>\n                  <ion-option value="1">Caribbean</ion-option>\n                  <ion-option value="2">Bahamas</ion-option>\n                  <ion-option value="3">Cuba</ion-option>\n                  <ion-option value="4">Mexico</ion-option>\n                  <ion-option value="5">Europe</ion-option>\n                  <ion-option value="6">Hawaii</ion-option>\n                  <ion-option value="7">Central America</ion-option>\n                  <ion-option value="8">Pacific Coastal</ion-option>\n                  <ion-option value="9">Panama canal</ion-option>\n                  <ion-option value="10">Transatlantic</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n\n        <!-- <ion-row>\n          <ion-col col-12 no-padding padding-vertical>\n            <ion-item>\n              <ion-label>One Way?</ion-label>\n              <ion-checkbox [(ngModel)]="oneway"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row> -->\n\n        <ion-row>\n          <ion-col class="bb no-paddingB">\n            <ion-label ion-text color="light" text-center class="no-margin mb-half bold">{{ checkin.name }}</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class="br bb datetime-btn" padding>\n            <ion-icon name="md-calendar" item-left></ion-icon>\n            <ion-datetime class="text-primary" displayFormat="MMMM YYYY" min="2018-10" max="2021-10-31" pickerFormat="MMMM YYYY" [(ngModel)]="checkin.date"></ion-datetime>\n          </ion-col>\n        </ion-row>\n\n        <h5 ion-text color="light" padding-horizontal text-center>Travelers</h5>\n\n        <ion-row padding-horizontal>\n          <ion-col col-6 col-md-6>\n            <div class="guests bb">\n              <ion-item>\n                <ion-label>Adults</ion-label>\n                <ion-select [(ngModel)]="adults" cancelText="Cancel" okText="OK">\n                  <ion-option value="1" selected="true">1</ion-option>\n                  <ion-option value="2">2</ion-option>\n                  <ion-option value="3">3</ion-option>\n                  <ion-option value="4">4</ion-option>\n                  <ion-option value="5">5</ion-option>\n                  <ion-option value="6">6</ion-option>\n                  <ion-option value="7">7</ion-option>\n                  <ion-option value="8">8</ion-option>\n                  <ion-option value="9">9</ion-option>\n                  <ion-option value="10">10</ion-option>\n                </ion-select>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col col-6 col-md-6>\n            <div class="guests bb">\n              <ion-item>\n                <ion-label>Children</ion-label>\n                <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                  <ion-option value="0" selected="true">0</ion-option>\n                  <ion-option value="1">1</ion-option>\n                  <ion-option value="2">2</ion-option>\n                  <ion-option value="3">3</ion-option>\n                  <ion-option value="4">4</ion-option>\n                  <ion-option value="5">5</ion-option>\n                  <ion-option value="6">6</ion-option>\n                  <ion-option value="7">7</ion-option>\n                  <ion-option value="8">8</ion-option>\n                  <ion-option value="9">9</ion-option>\n                  <ion-option value="10">10</ion-option>\n                </ion-select>\n              </ion-item>\n            </div>\n          </ion-col>\n          <!-- *ngFor="let child of childs; let i = index" -->\n        </ion-row>\n\n        <ion-row *ngIf="children > 0" padding-horizontal>\n          <ion-col col-12 class="no-paddingT no-paddingB">\n            <p ion-text color="primary" class="bold thirds-op" *ngIf="children == 1">Child\'s age</p>\n            <p ion-text color="primary" class="bold thirds-op" *ngIf="children > 1">Children\'s ages</p>\n          </ion-col>\n          <ion-col col-6 col-md-4 class="no-paddingT no-paddingB" *ngFor="let child of childs; let i = index">\n            <div class="guests bb">\n              <ion-item>\n                <ion-label>Child {{ i + 1 }}</ion-label>\n                <ion-select cancelText="Cancel" okText="OK">\n                  <ion-option value="0" selected="true">0</ion-option>\n                  <ion-option value="1">1</ion-option>\n                  <ion-option value="2">2</ion-option>\n                  <ion-option value="3">3</ion-option>\n                  <ion-option value="4">4</ion-option>\n                  <ion-option value="5">5</ion-option>\n                  <ion-option value="6">6</ion-option>\n                  <ion-option value="7">7</ion-option>\n                  <ion-option value="8">8</ion-option>\n                  <ion-option value="9">9</ion-option>\n                  <ion-option value="10">10</ion-option>\n                  <ion-option value="11">11</ion-option>\n                  <ion-option value="12">12</ion-option>\n                  <ion-option value="13">13</ion-option>\n                  <ion-option value="14">14</ion-option>\n                  <ion-option value="14">15</ion-option>\n                  <ion-option value="14">16</ion-option>\n                  <ion-option value="14">17</ion-option>\n                </ion-select>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row padding-horizontal margin-bottom>\n          <ion-col>\n            <div class="guests bb">\n              <ion-item>\n                <ion-label>Cabin Type</ion-label>\n                <ion-select [(ngModel)]="cabin" cancelText="Cancel" okText="OK">\n                  <ion-option value="1" selected="true">Inside</ion-option>\n                  <ion-option value="2">Oceanview</ion-option>\n                  <ion-option value="3">Balcony</ion-option>\n                  <ion-option value="4">Suite</ion-option>\n                </ion-select>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col no-padding>\n            <button ion-button block color="secondary" class="round" no-margin tappable (click)="doSearch()">\n              <ion-icon name="search"></ion-icon>\n              Show cruises\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col no-padding>\n\n        <div class="trip-card-wrapper tdeal" no-margin>\n          <ion-card class="opt-card">\n            <ion-card-header>\n              <ion-card no-margin class="w100">\n                <ion-card-content class="light-bg">\n                  <h2 ion-text class="bold text-white" text-center>Top deal of the day!</h2>\n                </ion-card-content>\n              </ion-card>\n            </ion-card-header>\n            <ion-card-content class="card-background-page">\n              <ion-grid no-padding>\n                <ion-row>\n                  <ion-col col-12 no-padding>\n                    <ion-card no-margin>\n                      <img src="assets/img/cruise/cruise_cover.jpg" />\n                      <div class="card-title">25% OFF</div>\n                      <div class="card-subtitle">\n                        Bahamas 2019!\n                      </div>\n                      <span ion-text class="card-img-status promo fw300 text-white">\n                        discounts\n                      </span>\n                    </ion-card>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card-content>\n          </ion-card>\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n\n</ion-footer>\n'/*ion-inline-end:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\cruise-search\cruise-search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], CruiseSearchPage);
    return CruiseSearchPage;
}());

//# sourceMappingURL=cruise-search.js.map

/***/ })

});
//# sourceMappingURL=4.js.map