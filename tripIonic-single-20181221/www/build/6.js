webpackJsonp([6],{

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainDetailModule", function() { return TrainDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__train_detail__ = __webpack_require__(605);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TrainDetailModule = /** @class */ (function () {
    function TrainDetailModule() {
    }
    TrainDetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__train_detail__["a" /* TrainDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__train_detail__["a" /* TrainDetailPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__train_detail__["a" /* TrainDetailPage */]
            ]
        })
    ], TrainDetailModule);
    return TrainDetailModule;
}());

//# sourceMappingURL=train-detail.module.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_train_service__ = __webpack_require__(381);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrainDetailPage = /** @class */ (function () {
    function TrainDetailPage(nav, trainService) {
        this.nav = nav;
        this.trainService = trainService;
        // set sample data
        this.train = this.trainService.getTrain() || this.trainService.getAll()[0];
    }
    TrainDetailPage.prototype.checkout = function () {
        this.nav.push('page-checkout-train');
    };
    TrainDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-train-detail',template:/*ion-inline-start:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\train-detail\train-detail.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar class="no-border" color="primary">\n    <ion-title>Train Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="common-bg">\n  <!-- // -->\n  <ion-toolbar padding color="secondary">\n    <h3 ion-text no-margin class="text-white text-1x">\n      <strong>Review your trip</strong>\n    </h3>\n  </ion-toolbar>\n\n  <ion-grid fixed>\n    <ion-row margin-bottom>\n      <ion-col col-12 *ngIf="train">\n\n        <ion-card no-margin class="w100">\n          <ion-card-content no-padding>\n            <ion-item class="itemm">\n              <ion-thumbnail item-start>\n                <img [src]="train.logo">\n              </ion-thumbnail>\n              <h2 ion-text color="dark">\n                <strong>{{ train.from }}</strong>\n                <ion-icon name="train" color="light"></ion-icon>\n                <strong>{{ train.to }}</strong>\n              </h2>\n              <h3 ion-text color="light">\n                <strong>{{ train.name }}</strong>\n              </h3>\n              <p ion-text color="primary" class="text-sm">1 Adult, 1 Child</p>\n            </ion-item>\n\n            <ion-list-header text-center class="primary-bg">\n              <span ion-text class="bold text-white">OUT - {{ train.outDate }}</span>\n            </ion-list-header>\n\n            <ion-item class="text-1x">\n              <ion-badge class="green-bg" item-start>\n                <h3 class="bold text-white">{{train.out[0].price | currency:\'USD\':\'symbol\':\'2.0\'}}</h3>\n              </ion-badge>\n              <ion-label>\n                {{ train.out[0].departure }} > {{ train.out[0].arriving }} ({{train.out[0].totaltime}})\n              </ion-label>\n            </ion-item>\n\n            <hr class="primary-hr" no-margin>\n\n            <ion-list-header text-center class="primary-bg">\n              <span ion-text class="bold text-white">RETURN - {{ train.returnDate }}</span>\n            </ion-list-header>\n\n            <ion-item class="text-1x">\n              <ion-badge class="green-bg" item-start>\n                <h3 class="bold text-white">{{ train.return[1].price | currency:\'USD\':\'symbol\':\'2.0\'}}</h3>\n              </ion-badge>\n              <ion-label>\n                {{ train.return[1].departure }} > {{ train.return[1].arriving }} ({{train.return[1].totaltime}})\n              </ion-label>\n            </ion-item>\n\n          </ion-card-content>\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row margin-bottom>\n      <ion-col col-12>\n        <h3>Details</h3>\n        <ion-card no-margin class="w100">\n          <ion-card-content no-padding>\n            <ion-item class="itemm" text-center>\n              <span ion-text class="text-sm">\n                <strong ion-text color="secondary">Free Cancellation</strong> • {{ train.way }} • {{ train.steps }} • {{ train.class }}\n              </span>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12>\n        <button ion-button large full round color="secondary" (click)="checkout()">Continue Booking</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\train-detail\train-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_train_service__["a" /* TrainService */]])
    ], TrainDetailPage);
    return TrainDetailPage;
}());

//# sourceMappingURL=train-detail.js.map

/***/ })

});
//# sourceMappingURL=6.js.map