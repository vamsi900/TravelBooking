webpackJsonp([23],{

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingListPageModule", function() { return BookingListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_list__ = __webpack_require__(586);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookingListPageModule = /** @class */ (function () {
    function BookingListPageModule() {
    }
    BookingListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__booking_list__["a" /* BookingListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__booking_list__["a" /* BookingListPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__booking_list__["a" /* BookingListPage */]
            ]
        })
    ], BookingListPageModule);
    return BookingListPageModule;
}());

//# sourceMappingURL=booking-list.module.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_flight_service__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_train_service__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_cruise_service__ = __webpack_require__(380);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookingListPage = /** @class */ (function () {
    function BookingListPage(navCtrl, flightService, trainService, cruiseService) {
        this.navCtrl = navCtrl;
        this.flightService = flightService;
        this.trainService = trainService;
        this.cruiseService = cruiseService;
        this.flightBookings = [];
        this.cruiseBookings = [];
        this.trainBookings = [];
        this.getFlightBookings();
        this.getTrainBookings();
        this.getCruiseBookings();
    }
    BookingListPage.prototype.getTrainBookings = function () {
        var _this = this;
        this.trainService.getBookings()
            .then(function (data) { _this.trainBookings = data; });
    };
    BookingListPage.prototype.getCruiseBookings = function () {
        var _this = this;
        this.cruiseService.getBookings()
            .then(function (data) { _this.cruiseBookings = data; });
    };
    BookingListPage.prototype.getFlightBookings = function () {
        var _this = this;
        this.flightService.getBookings()
            .then(function (data) { _this.flightBookings = data; });
    };
    BookingListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-booking-list',template:/*ion-inline-start:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\booking-list\booking-list.html"*/'<ion-header class="no-shadow">\n    <ion-navbar class="no-border" color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Booking List</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="common-bg">\n  <ion-grid no-padding fixed>\n    <ion-row>\n      <ion-col col-12 margin-bottom>\n\n        <ion-card *ngIf="!flightBookings.length && !cruiseBookings.length && !trainBookings.length" class="primary-bg" margin-top>\n          <ion-card-content>\n          	<p text-center class="text-white">You have no bookings yet.</p>\n          </ion-card-content>\n        </ion-card>\n        <!-- Flight Books -->\n        <div *ngIf="flightBookings.length">\n          <ion-item-divider color="dark" class="bold">Flights</ion-item-divider>\n\n          <ion-card *ngFor="let book of flightBookings">\n            <ion-card-header text-center class="primary-bg">\n              <h3 ion-text class="text-white">\n                Booking ID: <strong>{{ book.bookId }}</strong> - Fri 11th May 2018\n              </h3>\n            </ion-card-header>\n            <ion-card-content no-padding *ngIf="book.departing">\n              <ion-item class="itemm">\n                <ion-thumbnail item-start>\n                  <img [src]="book.departing.logo">\n                  <!-- <span ion-text text-center class="text-sm">{{ flight.name }}</span> -->\n                </ion-thumbnail>\n                <h2 ion-text color="dark">\n                  <strong>{{ book.departing.departure }}</strong> -\n                  <strong>{{ book.departing.arriving }}</strong>\n                </h2>\n                <h3>{{ book.departing.totaltime }} ({{ book.departing.steps }})</h3>\n                <h3 ion-text color="light">\n                  <strong>{{ book.departing.from }}</strong>\n                  <ion-icon name="plane" color="light"></ion-icon>\n                  <strong>{{ book.departing.to }}</strong>\n                </h3>\n\n                <div item-end>\n                  <ion-badge class="light-bg">\n                    <h3 class="bold">departing</h3>\n                  </ion-badge>\n                </div>\n              </ion-item>\n            </ion-card-content>\n\n            <hr class="primary-hr" no-margin>\n\n            <ion-card-content no-padding *ngIf="book.returning">\n              <ion-item class="itemm">\n                <ion-thumbnail item-start>\n                  <img [src]="book.returning.logo">\n                  <!-- <span ion-text text-center class="text-sm">{{ flight.name }}</span> -->\n                </ion-thumbnail>\n                <h2 ion-text color="dark">\n                  <strong>{{ book.returning.departure }}</strong> -\n                  <strong>{{ book.returning.arriving }}</strong>\n                </h2>\n                <h3>{{ book.returning.totaltime }} ({{ book.returning.steps }})</h3>\n                <h3 ion-text color="light">\n                  <strong>{{ book.returning.from }}</strong>\n                  <ion-icon name="plane" color="light" class="deg180"></ion-icon>\n                  <strong>{{ book.returning.to }}</strong>\n                </h3>\n\n                <div item-end>\n                  <ion-badge class="light-bg">\n                    <h3 class="bold">returning</h3>\n                  </ion-badge>\n                </div>\n              </ion-item>\n            </ion-card-content>\n\n            <ion-card-content class="green-bg" text-center>\n              <h6 class="text-white">total value:</h6>\n              <h5 class="bold text-2x text-white">{{ book.totalValue | currency:\'USD\':\'symbol\':\'2.2\' }}</h5>\n            </ion-card-content>\n          </ion-card>\n        </div>\n\n        <!-- Cruise Books -->\n        <!-- <div *ngIf="cruiseBookings.length">\n          <ion-item-divider color="dark" class="bold">Cruises</ion-item-divider>\n\n          <ion-card *ngFor="let book of cruiseBookings">\n            <ion-card-header text-center class="primary-bg">\n              <h3 ion-text class="text-white">\n                Booking ID:\n                <strong>{{ book.bookId }}</strong> - Fri 11th May 2018\n              </h3>\n            </ion-card-header>\n            <ion-card-content no-padding>\n              <ion-grid padding>\n                <ion-row>\n                  <ion-col col-12 no-padding>\n\n                    <ion-item class="itemm" no-padding margin-bottom>\n                      <ion-thumbnail item-start>\n                        <img [src]="book.cruise.thumb">\n                      </ion-thumbnail>\n                      <h2 ion-text color="dark">\n                        {{ book.cruise.name }}\n                      </h2>\n                      <h3>\n                        <strong>Sailing dates:</strong> {{ book.cruise.date }}</h3>\n                      <h3 ion-text color="light">\n                        <strong>{{ book.cruise.time }}</strong>\n                      </h3>\n                    </ion-item>\n\n                    <div *ngIf="book.cruise.free_cancellation">\n                      <ion-icon name="checkmark" class="text-green"></ion-icon>\n                      <span ion-text>Free cancellation</span>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card-content>\n\n            <ion-card-content class="green-bg" text-center>\n              <h6 class="text-white">total value:</h6>\n              <h5 class="bold text-2x text-white">{{ book.totalValue | currency:\'USD\':\'symbol\':\'2.2\' }}</h5>\n            </ion-card-content>\n          </ion-card>\n        </div> -->\n\n        <!-- Train Books -->\n        <div *ngIf="trainBookings.length">\n          <ion-item-divider color="dark" class="bold">Trains</ion-item-divider>\n\n          <ion-card *ngFor="let book of trainBookings">\n            <ion-card-header text-center class="primary-bg">\n              <h3 ion-text class="text-white">\n                Booking ID:\n                <strong>{{ book.bookId }}</strong> - Fri 11th May 2018\n              </h3>\n            </ion-card-header>\n\n            <ion-card-content no-padding>\n              <ion-item class="itemm">\n                <ion-thumbnail item-start>\n                  <img [src]="book.train.logo">\n                </ion-thumbnail>\n                <h2 ion-text color="dark">\n                  <strong>{{ book.train.from }}</strong>\n                  <ion-icon name="train" color="light"></ion-icon>\n                  <strong>{{ book.train.to }}</strong>\n                </h2>\n                <h3 ion-text color="light">\n                  <strong>{{ book.train.name }}</strong>\n                </h3>\n                <p ion-text color="primary" class="text-sm">1 Adult, 1 Child</p>\n              </ion-item>\n\n              <ion-list-header text-center class="light-bg">\n                <span ion-text class="bold text-white">OUT - {{ book.train.outDate }}</span>\n              </ion-list-header>\n\n              <ion-item class="text-1x">\n                <ion-badge class="green-bg" item-start>\n                  <h3 class="bold text-white">{{book.train.out[0].price | currency:\'USD\':\'symbol\':\'2.0\'}}</h3>\n                </ion-badge>\n                <ion-label>\n                  {{ book.train.out[0].departure }} > {{ book.train.out[0].arriving }} ({{book.train.out[0].totaltime}})\n                </ion-label>\n              </ion-item>\n\n              <hr class="primary-hr" no-margin>\n\n              <ion-list-header text-center class="light-bg">\n                <span ion-text class="bold text-white">RETURN - {{ book.train.returnDate }}</span>\n              </ion-list-header>\n\n              <ion-item class="text-1x">\n                <ion-badge class="green-bg" item-start>\n                  <h3 class="bold text-white">{{ book.train.return[1].price | currency:\'USD\':\'symbol\':\'2.0\'}}</h3>\n                </ion-badge>\n                <ion-label>\n                  {{ book.train.return[1].departure }} > {{ book.train.return[1].arriving }} ({{book.train.return[1].totaltime}})\n                </ion-label>\n              </ion-item>\n\n            </ion-card-content>\n\n            <ion-card-content class="green-bg" text-center>\n              <h6 class="text-white">total value:</h6>\n              <h5 class="bold text-2x text-white">{{ book.totalValue | currency:\'USD\':\'symbol\':\'2.2\' }}</h5>\n            </ion-card-content>\n          </ion-card>\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\booking-list\booking-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_flight_service__["a" /* FlightService */], __WEBPACK_IMPORTED_MODULE_3__providers_train_service__["a" /* TrainService */], __WEBPACK_IMPORTED_MODULE_4__providers_cruise_service__["a" /* CruiseService */]])
    ], BookingListPage);
    return BookingListPage;
}());

//# sourceMappingURL=booking-list.js.map

/***/ })

});
//# sourceMappingURL=23.js.map