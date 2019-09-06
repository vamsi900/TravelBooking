webpackJsonp([16],{

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightDepartingModule", function() { return FlightDepartingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flight_departing__ = __webpack_require__(595);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FlightDepartingModule = /** @class */ (function () {
    function FlightDepartingModule() {
    }
    FlightDepartingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__flight_departing__["a" /* FlightDepartingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__flight_departing__["a" /* FlightDepartingPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__flight_departing__["a" /* FlightDepartingPage */]
            ]
        })
    ], FlightDepartingModule);
    return FlightDepartingModule;
}());

//# sourceMappingURL=flight-departing.module.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightDepartingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_flight_service__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlightDepartingPage = /** @class */ (function () {
    function FlightDepartingPage(nav, flightService) {
        this.nav = nav;
        this.flightService = flightService;
        // set sample data
        this.flights = this.flightService.getAll();
    }
    FlightDepartingPage.prototype.chooseFlight = function (flight) {
        this.flightService.setDeparting(flight);
        this.nav.push('page-flight-returning');
    };
    FlightDepartingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-flight-departing',template:/*ion-inline-start:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\flight-departing\flight-departing.html"*/'<!--  -->\n<ion-header>\n\n  <ion-navbar class="no-border" color="primary">\n    <ion-title>Flight <span ion-text color="light">(Departing)</span></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="common-bg flights">\n  <!--  -->\n  <ion-toolbar padding color="secondary">\n    <p ion-text no-margin class="text-white">\n      <strong>{{ flights?.length }}</strong> results found!\n    </p>\n  </ion-toolbar>\n\n  <ion-grid>\n    <ion-row>\n      <!--list of car shops-->\n      <ion-col col-12 col-md-6 col-lg-6 col-xl-4 *ngFor="let flight of flights" tappable (click)="chooseFlight(flight)">\n\n        <ion-card no-margin class="w100">\n          <ion-card-content no-padding>\n            <ion-item class="itemm">\n              <ion-thumbnail item-start>\n                <img [src]="flight.logo">\n                <!-- <span ion-text text-center class="text-sm">{{ flight.name }}</span> -->\n              </ion-thumbnail>\n              <h2 ion-text color="dark">\n                <!-- {{ shop.name }} -->\n                <b>{{ flight.departure }}</b> - <b>{{ flight.arriving }}</b>\n              </h2>\n              <h3>{{ flight.totaltime }} ({{ flight.steps }})</h3>\n              <h3 ion-text color="light"><strong>{{ flight.from }}</strong> <ion-icon name="airplane" color="light"></ion-icon> <strong>{{ flight.to }}</strong></h3>\n\n              <div item-end>\n                <ion-badge class="green-bg">\n                  <h3 class="bold text-white">{{ flight.price | currency:\'USD\':\'symbol\':\'2.0\' }}</h3>\n                </ion-badge>\n                <p class="text-sm">{{ flight.way }}</p>\n              </div>\n            </ion-item>\n\n            <hr class="primary-hr" no-margin>\n\n            <ion-item class="itemm" text-center>\n              <span ion-text class="text-sm">\n                <strong ion-text color="secondary">Free Cancellation</strong> • {{ flight.class }} | {{ flight.airplane }}\n              </span>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\flight-departing\flight-departing.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_flight_service__["a" /* FlightService */]])
    ], FlightDepartingPage);
    return FlightDepartingPage;
}());

//# sourceMappingURL=flight-departing.js.map

/***/ })

});
//# sourceMappingURL=16.js.map