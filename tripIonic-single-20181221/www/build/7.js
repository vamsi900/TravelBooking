webpackJsonp([7],{

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainDepartingModule", function() { return TrainDepartingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__train_departing__ = __webpack_require__(604);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TrainDepartingModule = /** @class */ (function () {
    function TrainDepartingModule() {
    }
    TrainDepartingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__train_departing__["a" /* TrainDepartingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__train_departing__["a" /* TrainDepartingPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__train_departing__["a" /* TrainDepartingPage */]
            ]
        })
    ], TrainDepartingModule);
    return TrainDepartingModule;
}());

//# sourceMappingURL=train-departing.module.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainDepartingPage; });
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



var TrainDepartingPage = /** @class */ (function () {
    function TrainDepartingPage(nav, trainService) {
        this.nav = nav;
        this.trainService = trainService;
        this.outOpts = [];
        this.returnOpts = [];
        // set sample data
        this.trains = this.trainService.getAll();
    }
    TrainDepartingPage.prototype.chooseTrain = function (train) {
        this.trainService.setTrain(train);
        this.nav.push('page-train-detail');
    };
    TrainDepartingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-train-departing',template:/*ion-inline-start:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\train-departing\train-departing.html"*/'<!--  -->\n<ion-header>\n\n  <ion-navbar class="no-border" color="dark">\n    <ion-title>Train <span ion-text color="light">Results</span></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="common-bg trains">\n  <!--  -->\n  <ion-toolbar padding color="secondary">\n    <p ion-text no-margin class="text-white">\n      <strong>{{ trains?.length }}</strong> results found!\n    </p>\n  </ion-toolbar>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-md-6 col-lg-6 col-xl-4 *ngFor="let train of trains; let ind = index">\n\n        <ion-card no-margin class="w100">\n          <ion-card-content no-padding>\n            <ion-item class="itemm">\n              <ion-thumbnail item-start>\n                <img [src]="train.logo">\n              </ion-thumbnail>\n              <h2 ion-text color="dark">\n                <strong>{{ train.from }}</strong> <ion-icon name="train" color="light"></ion-icon> <strong>{{ train.to }}</strong>\n              </h2>\n              <h3 ion-text color="light">\n                <strong>{{ train.name }}</strong>\n              </h3>\n              <p ion-text color="primary" class="text-sm">{{ train.way }} • {{ train.steps }} • {{ train.class }}</p>\n\n              <div item-end>\n                <button ion-button color="secondary" (click)="chooseTrain(train)">Select</button>\n              </div>\n            </ion-item>\n\n            <div radio-group [(ngModel)]="outOpts[ind]">\n              <ion-list-header text-center class="primary-bg">\n                <span ion-text class="bold text-white">OUT - {{ train.outDate }}</span>\n              </ion-list-header>\n\n              <ion-item *ngFor="let out of train.out; let idx = index" class="text-1x">\n                <ion-badge class="green-bg" item-start>\n                  <h3 class="bold text-white">{{out.price | currency:\'USD\':\'symbol\':\'2.0\'}}</h3>\n                </ion-badge>\n                <ion-label>\n                  {{ out.departure }} > {{ out.arriving }} ({{out.totaltime}})\n                </ion-label>\n                <ion-radio [value]="idx"></ion-radio>\n              </ion-item>\n            </div>\n\n            <hr class="primary-hr" no-margin>\n\n            <div radio-group [(ngModel)]="returnOpts[ind]">\n              <ion-list-header text-center class="primary-bg">\n                <span ion-text class="bold text-white">RETURN - {{ train.returnDate }}</span>\n              </ion-list-header>\n\n              <ion-item *ngFor="let return of train.return; let idx = index" class="text-1x">\n                <ion-badge class="green-bg" item-start>\n                  <h3 class="bold text-white">{{return.price | currency:\'USD\':\'symbol\':\'2.0\'}}</h3>\n                </ion-badge>\n                <ion-label>\n                  {{ return.departure }} > {{ return.arriving }} ({{return.totaltime}})\n                </ion-label>\n                <ion-radio [value]="idx"></ion-radio>\n              </ion-item>\n            </div>\n\n          </ion-card-content>\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\train-departing\train-departing.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_train_service__["a" /* TrainService */]])
    ], TrainDepartingPage);
    return TrainDepartingPage;
}());

//# sourceMappingURL=train-departing.js.map

/***/ })

});
//# sourceMappingURL=7.js.map