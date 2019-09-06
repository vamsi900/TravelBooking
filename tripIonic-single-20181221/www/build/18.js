webpackJsonp([18],{

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CruiseResultsModule", function() { return CruiseResultsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cruise_results__ = __webpack_require__(591);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CruiseResultsModule = /** @class */ (function () {
    function CruiseResultsModule() {
    }
    CruiseResultsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cruise_results__["a" /* CruiseResultsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__cruise_results__["a" /* CruiseResultsPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__cruise_results__["a" /* CruiseResultsPage */]
            ]
        })
    ], CruiseResultsModule);
    return CruiseResultsModule;
}());

//# sourceMappingURL=cruise-results.module.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CruiseResultsPage; });
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



var CruiseResultsPage = /** @class */ (function () {
    function CruiseResultsPage(nav, cruiseService, toastCtrl) {
        this.nav = nav;
        this.cruiseService = cruiseService;
        this.toastCtrl = toastCtrl;
        // set sample data
        this.cruises = cruiseService.getAll();
    }
    CruiseResultsPage.prototype.favorite = function (cruise) {
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
    // view trip detail
    CruiseResultsPage.prototype.viewDetail = function (id) {
        this.nav.push('page-cruise-detail', {
            'id': id
        });
    };
    CruiseResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cruise-results',template:/*ion-inline-start:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\cruise-results\cruise-results.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Cruise Results</ion-title>\n  </ion-navbar>\n\n  <!--  -->\n  <ion-toolbar padding color="secondary">\n    <p ion-text no-margin class="text-white">\n      <strong>{{ cruises.length }}</strong> results found!\n    </p>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class="cruises common-bg">\n  <ion-grid>\n    <ion-row>\n      <!--list of trips-->\n      <ion-col col-12 col-md-6 col-lg-6 col-xl-4 *ngFor="let cruise of cruises" tappable (click)="viewDetail(cruise.id)">\n\n        <ion-card no-margin class="w100">\n          <ion-card-header no-padding class="coverbg" [ngStyle]="{\'background-image\': \'url(\' + cruise.images[0] + \')\'}">\n            <!-- Something else? -->\n            <ion-badge float-right class="dark-bg">\n              <h2 class="bold text-white">{{ cruise.price_adult | currency:\'USD\':\'symbol\':\'2.0\' }} <small ion-text color="light">/person</small></h2>\n            </ion-badge>\n          </ion-card-header>\n          <ion-card-content no-padding>\n            <ion-item class="itemm">\n              <ion-thumbnail item-start>\n                <img [src]="cruise.thumb">\n              </ion-thumbnail>\n              <h2 ion-text color="dark">\n                {{ cruise.name }}\n              </h2>\n              <h3><strong>Sailing dates:</strong> {{ cruise.date }}</h3>\n              <h3 ion-text color="light"><strong>{{ cruise.time }}</strong></h3>\n            </ion-item>\n\n            <hr class="primary-hr" no-margin>\n\n            <ion-item class="itemm" text-center>\n              <span ion-text class="text-sm">\n                <strong>Ports of call:</strong> {{ cruise.ports }}\n              </span>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\cruise-results\cruise-results.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_cruise_service__["a" /* CruiseService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], CruiseResultsPage);
    return CruiseResultsPage;
}());

//# sourceMappingURL=cruise-results.js.map

/***/ })

});
//# sourceMappingURL=18.js.map