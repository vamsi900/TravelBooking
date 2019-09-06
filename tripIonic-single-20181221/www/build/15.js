webpackJsonp([15],{

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightDetailModule", function() { return FlightDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flight_detail__ = __webpack_require__(597);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FlightDetailModule = /** @class */ (function () {
    function FlightDetailModule() {
    }
    FlightDetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__flight_detail__["a" /* FlightDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__flight_detail__["a" /* FlightDetailPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__flight_detail__["a" /* FlightDetailPage */]
            ]
        })
    ], FlightDetailModule);
    return FlightDetailModule;
}());

//# sourceMappingURL=flight-detail.module.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightDetailPage; });
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



var FlightDetailPage = /** @class */ (function () {
    function FlightDetailPage(nav, flightService) {
        this.nav = nav;
        this.flightService = flightService;
        // set sample data
        this.departing = this.flightService.getDeparting() || this.flightService.getAll()[0];
        this.returning = this.flightService.getReturning() || this.flightService.getAll()[1];
    }
    FlightDetailPage.prototype.checkout = function () {
        this.nav.push('page-checkout-flight');
    };
    FlightDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-flight-detail',template:/*ion-inline-start:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\flight-detail\flight-detail.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar class="no-border" color="primary">\n    <ion-title>Flight Detail</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="common-bg">\n  <!--  -->\n  <ion-toolbar padding color="secondary">\n    <h3 ion-text no-margin class="text-white text-1x">\n      <strong>Review your trip</strong>\n    </h3>\n  </ion-toolbar>\n\n  <ion-grid fixed>\n    <ion-row margin-bottom>\n\n      <ion-col col-12 col-md-6 *ngIf="departing">\n        <ion-card no-margin class="w100">\n          <ion-card-header class="primary-bg">\n            <h3 class="text-1x text-white bold">\n              <ion-icon name="airplane"></ion-icon>\n              Departing\n            </h3>\n          </ion-card-header>\n          <hr class="primary-hr" no-margin>\n          <ion-card-content no-padding>\n            <ion-item class="itemm">\n              <ion-thumbnail item-start>\n                <img [src]="departing.logo">\n                <!-- <span ion-text text-center class="text-sm">{{ flight.name }}</span> -->\n              </ion-thumbnail>\n              <h2 ion-text color="dark">\n                <strong>{{ departing.departure }}</strong> -\n                <strong>{{ departing.arriving }}</strong>\n              </h2>\n              <h3>{{ departing.totaltime }} ({{ departing.steps }})</h3>\n              <h3 ion-text color="light">\n                <strong>{{ departing.from }}</strong>\n                <ion-icon name="airplane" color="light"></ion-icon>\n                <strong>{{ departing.to }}</strong>\n              </h3>\n\n              <div item-end>\n                <ion-badge class="green-bg">\n                  <h3 class="bold text-white">{{ departing.price | currency:\'USD\':\'symbol\':\'2.0\' }}</h3>\n                </ion-badge>\n                <p class="text-sm">{{ departing.way }}</p>\n              </div>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-12 col-md-6 *ngIf="returning">\n        <ion-card no-margin class="w100">\n          <ion-card-header class="primary-bg">\n            <h3 class="text-1x text-white bold">\n              <ion-icon name="airplane" class="deg180"></ion-icon>\n              Returning\n            </h3>\n          </ion-card-header>\n          <hr class="primary-hr" no-margin>\n          <ion-card-content no-padding>\n            <ion-item class="itemm">\n              <ion-thumbnail item-start>\n                <img [src]="returning.logo">\n                <!-- <span ion-text text-center class="text-sm">{{ flight.name }}</span> -->\n              </ion-thumbnail>\n              <h2 ion-text color="dark">\n                <strong>{{ returning.departure }}</strong> -\n                <strong>{{ returning.arriving }}</strong>\n              </h2>\n              <h3>{{ returning.totaltime }} ({{ returning.steps }})</h3>\n              <h3 ion-text color="light">\n                <strong>{{ returning.from }}</strong>\n                <ion-icon name="airplane" color="light" class="deg180"></ion-icon>\n                <strong>{{ returning.to }}</strong>\n              </h3>\n\n              <div item-end>\n                <ion-badge class="green-bg">\n                  <h3 class="bold text-white">{{ returning.price | currency:\'USD\':\'symbol\':\'2.0\' }}</h3>\n                </ion-badge>\n                <p class="text-sm">{{ returning.way }}</p>\n              </div>\n            </ion-item>\n          </ion-card-content>\n\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row margin-bottom>\n      <ion-col col-12>\n        <h3>Details</h3>\n        <ion-card no-margin class="w100">\n          <ion-card-content no-padding>\n            <ion-item class="itemm" text-center>\n              <span ion-text class="text-sm">\n                <strong ion-text color="secondary">Free Cancellation</strong> • {{ departing.class }} | {{ departing.airplane }}\n              </span>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12>\n        <button ion-button large full round color="one" (click)="checkout()">Continue Booking</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\flight-detail\flight-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_flight_service__["a" /* FlightService */]])
    ], FlightDetailPage);
    return FlightDetailPage;
}());

//# sourceMappingURL=flight-detail.js.map

/***/ })

});
//# sourceMappingURL=15.js.map