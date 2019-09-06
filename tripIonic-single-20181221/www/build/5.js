webpackJsonp([5],{

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPageModule", function() { return WalkthroughPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__walkthrough__ = __webpack_require__(607);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WalkthroughPageModule = /** @class */ (function () {
    function WalkthroughPageModule() {
    }
    WalkthroughPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__walkthrough__["a" /* WalkthroughPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__walkthrough__["a" /* WalkthroughPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__walkthrough__["a" /* WalkthroughPage */]
            ]
        })
    ], WalkthroughPageModule);
    return WalkthroughPageModule;
}());

//# sourceMappingURL=walkthrough.module.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkthroughPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WalkthroughPage = /** @class */ (function () {
    function WalkthroughPage(navCtrl, menu) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.showSkip = true;
        this.dir = 'ltr';
        this.slideList = [
            {
                title: 'What is <span class="text-light">Cedar</span><strong>Trips</strong>?',
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.",
                image: "assets/img/tripionic-ico.png",
            },
            {
                title: "Why CedarTrips?",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.",
                image: "assets/img/tripionic-ico.png",
            },
            {
                title: "Your Vacation is coming!",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.",
                image: "assets/img/tripionic-ico.png",
            }
        ];
        this.menu.swipeEnable(false);
        this.menu.enable(false);
    }
    WalkthroughPage.prototype.onSlideNext = function () {
        this.slides.slideNext(300);
    };
    WalkthroughPage.prototype.onSlidePrev = function () {
        this.slides.slidePrev(300);
    };
    WalkthroughPage.prototype.onLastSlide = function () {
        this.slides.slideTo(3, 300);
    };
    WalkthroughPage.prototype.openHomePage = function () {
        this.navCtrl.setRoot('page-home');
    };
    WalkthroughPage.prototype.openAuthPage = function () {
        this.navCtrl.setRoot('page-auth');
    };
    WalkthroughPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalkthroughPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"])
    ], WalkthroughPage.prototype, "slides", void 0);
    WalkthroughPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-walkthrough',template:/*ion-inline-start:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\walkthrough\walkthrough.html"*/'<ion-content class="primary-bg">\n	<ion-grid no-padding fixed>\n		<ion-row no-padding>\n			<ion-col>\n\n			  <ion-slides pager="true" dir="{{dir}}">\n			    <ion-slide *ngFor="let slide of slideList">\n			      <ion-toolbar fixed>\n			        <ion-buttons end>\n			          <button ion-button color="light" (click)="onLastSlide()">Skip</button>\n			        </ion-buttons>\n			      </ion-toolbar>\n			      <img [src]="slide.image" class="slide-image">\n			      <h3 class="slide-title text-white" [innerHTML]="slide.title"></h3>\n			      <p [innerHTML]="slide.description" class="text-white"></p>\n\n						<div padding>\n				      <button ion-button round block color="secondary" margin-top icon-end (click)="onSlideNext()">\n				      	Next\n				      	<ion-icon name="arrow-round-forward"></ion-icon>\n				    	</button>\n			    	</div>\n			    </ion-slide>\n			    <ion-slide>\n			      <ion-toolbar>\n			      </ion-toolbar>\n			      <img src="assets/img/tripionic-ico.png" class="slide-image" margin-top>\n			      <h2 class="slide-title text-white">Ready to your Trip?</h2>\n\n			      <div padding>\n			        <button ion-button block round color="secondary" margin-top (click)="openAuthPage()">\n			          Sign In / Sign Up\n			        </button>\n			        <button ion-button block round color="dark" margin-top (click)="openHomePage()">\n			          Get Started\n			        </button>\n			      </div>\n			    </ion-slide>\n			  </ion-slides>\n\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\walkthrough\walkthrough.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]])
    ], WalkthroughPage);
    return WalkthroughPage;
}());

//# sourceMappingURL=walkthrough.js.map

/***/ })

});
//# sourceMappingURL=5.js.map