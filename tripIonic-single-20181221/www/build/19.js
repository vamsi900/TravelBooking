webpackJsonp([19],{

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CruiseDetailModule", function() { return CruiseDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cruise_detail__ = __webpack_require__(590);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CruiseDetailModule = /** @class */ (function () {
    function CruiseDetailModule() {
    }
    CruiseDetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cruise_detail__["a" /* CruiseDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__cruise_detail__["a" /* CruiseDetailPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__cruise_detail__["a" /* CruiseDetailPage */]
            ]
        })
    ], CruiseDetailModule);
    return CruiseDetailModule;
}());

//# sourceMappingURL=cruise-detail.module.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CruiseDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cruise_service__ = __webpack_require__(380);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CruiseDetailPage = /** @class */ (function () {
    function CruiseDetailPage(nav, navParams, cruiseService, toastCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.cruiseService = cruiseService;
        this.toastCtrl = toastCtrl;
        // number of adult
        this.adults = 2;
        // number of children
        this.children = 0;
        // set sample data
        this.param = this.navParams.get('id');
        this.cruise = this.cruiseService.getItem(this.param) ? this.cruiseService.getItem(this.param) : this.cruiseService.getAll()[0];
    }
    // minus adult when click minus button
    CruiseDetailPage.prototype.minusAdult = function () {
        this.adults--;
    };
    // plus adult when click plus button
    CruiseDetailPage.prototype.plusAdult = function () {
        this.adults++;
    };
    // minus children when click minus button
    CruiseDetailPage.prototype.minusChildren = function () {
        this.children--;
    };
    // plus children when click plus button
    CruiseDetailPage.prototype.plusChildren = function () {
        this.children++;
    };
    CruiseDetailPage.prototype.favorite = function (cruise) {
        var _this = this;
        this.cruiseService.favorite(cruise)
            .then(function (cruise) {
            var toast = _this.toastCtrl.create({
                message: 'Cruise added to your favorites',
                cssClass: 'cruiseToast',
                duration: 2000
            });
            toast.present(toast);
        });
    };
    // go to checkout page
    CruiseDetailPage.prototype.checkout = function (cruise) {
        this.nav.push('page-checkout-cruise', {
            'id': cruise.id
        });
    };
    CruiseDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cruise-detail',template:/*ion-inline-start:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\cruise-detail\cruise-detail.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar class="no-border" color="primary">\n    <ion-title>Cruise Detail</ion-title>\n  </ion-navbar>\n  <ion-fab middle right>\n    <button ion-fab mini color="light" (click)="favorite(cruise)">\n      <ion-icon name="heart"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-header>\n\n<ion-content class="common-bg">\n  <div class="trip-card-wrapper" no-margin>\n    <div class="booking-card">\n      <ion-grid class="card" no-padding fixed>\n\n        <ion-row>\n          <ion-col col-12 no-padding>\n            <ion-card no-margin class="full-width">\n                <!--slides-->\n                <ion-slides class="to-top" pager>\n                  <ion-slide *ngFor="let image of cruise.images">\n                    <img src="{{ image }}" alt="">\n                  </ion-slide>\n                </ion-slides>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12>\n            <div padding-vertical class="full-width" text-center>\n              <ion-item class="itemm">\n                <ion-thumbnail item-start>\n                  <img [src]="cruise.thumb">\n                </ion-thumbnail>\n                <h2 ion-text color="dark">\n                  {{ cruise.name }}\n                </h2>\n                <h3>\n                  <strong>Sailing dates:</strong> {{ cruise.date }}</h3>\n                <h3 ion-text color="light">\n                  <strong>{{ cruise.time }}</strong>\n                </h3>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n  </div>\n\n  <!--services-->\n  <ion-grid class="border-bottom detail-bg">\n    <ion-row>\n      <ion-col text-center>\n        <div class="text-1x">\n            <ion-icon name="checkbox-outline" margin-left color="dark" *ngIf="cruise.free_cancellation"></ion-icon>\n            <span ion-text color="primary" *ngIf="cruise.free_cancellation">Free cancellation</span>\n            <ion-icon name="list-box" margin-left color="dark" *ngIf="cruise.electric_voucher"></ion-icon>\n            <span ion-text color="primary" *ngIf="cruise.electric_voucher">Electronic voucher</span>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col col-12>\n        <!--high light-->\n        <div class="border-bottom" padding>\n          <span ion-text color="dark" class="bold">Amenities</span>\n          <ul class="highlight">\n            <li *ngFor="let highlight of cruise.highlights">\n              <ion-icon name="checkmark" class="text-green"></ion-icon>\n              <span ion-text color="primary">{{ highlight }}</span>\n            </li>\n          </ul>\n        </div>\n\n        <!--booking form-->\n        <h4 ion-text text-center>Tickets</h4>\n        <div class="booking-form card round" margin>\n          <div class="border-bottom" padding>\n            <h5>{{ cruise.sub_name }}</h5>\n            <!--choose guest-->\n            <ion-grid class="filters" no-padding margin-top>\n              <ion-row>\n                <ion-col class="adult" width-70>\n                  <span ion-text color="primary"><strong>{{ cruise.price_adult | currency }}</strong> Adults</span>\n                </ion-col>\n                <ion-col width-10 text-center>\n                  <ion-icon name="remove-circle" class="text-2x" tappable (click)="minusAdult()" [hidden]="adults < 2"\n                            color="dark"></ion-icon>\n                </ion-col>\n                <ion-col width-10 text-center>{{ adults }}</ion-col>\n                <ion-col width-10 text-center>\n                  <ion-icon name="add-circle" class="text-2x" tappable (click)="plusAdult()" color="dark"></ion-icon>\n                </ion-col>\n              </ion-row>\n              <ion-row margin-top>\n                <ion-col width-70>\n                  <span ion-text color="primary"><strong>{{ cruise.price_child | currency }}</strong> Child (0-12 years)</span>\n                </ion-col>\n                <ion-col width-10 text-center>\n                  <ion-icon name="remove-circle" class="text-2x" tappable (click)="minusChildren()" [hidden]="children < 1"\n                            color="dark"></ion-icon>\n                </ion-col>\n                <ion-col width-10 text-center>{{ children }}</ion-col>\n                <ion-col width-10 text-center>\n                  <ion-icon name="add-circle" class="text-2x" tappable (click)="plusChildren()" color="dark"></ion-icon>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n          <div padding class="form-bottom">\n            <button ion-button full round color="secondary" tappable (click)="checkout(cruise)">Go to checkout {{ adults * cruise.price_adult +\n              children * cruise.price_child | currency }}\n            </button>\n            <div class="clear"></div>\n          </div>\n        </div>\n\n        <!--description-->\n        <div class="border-bottom" padding>\n          <span ion-text color="primary" class="bold">DESCRIPTION</span>\n          <p ion-text>{{ cruise.description }}</p>\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\cruise-detail\cruise-detail.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_cruise_service__["a" /* CruiseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_cruise_service__["a" /* CruiseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]) === "function" && _d || Object])
    ], CruiseDetailPage);
    return CruiseDetailPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=cruise-detail.js.map

/***/ })

});
//# sourceMappingURL=19.js.map