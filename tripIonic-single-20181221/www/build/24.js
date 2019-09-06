webpackJsonp([24],{

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__(587);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AuthPageModule = /** @class */ (function () {
    function AuthPageModule() {
    }
    AuthPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthPage */]),
            ],
        })
    ], AuthPageModule);
    return AuthPageModule;
}());

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthPage = /** @class */ (function () {
    function AuthPage(_fb, nav, forgotCtrl, menu, toastCtrl) {
        this._fb = _fb;
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.auth = "login";
        this.menu.swipeEnable(false);
        this.menu.enable(false);
    }
    AuthPage.prototype.ngOnInit = function () {
        this.onLoginForm = this._fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                ])]
        });
        this.onRegisterForm = this._fb.group({
            fullName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                ])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                ])]
        });
    };
    // go to register page
    // register() {
    //   this.nav.setRoot(RegisterPage);
    // }
    // login and go to home page
    AuthPage.prototype.login = function () {
        this.nav.setRoot('page-home');
    };
    AuthPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
            title: 'Forgot Password?',
            message: "Enter you email address to send a reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-auth',template:/*ion-inline-start:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\auth\auth.html"*/'<!-- -->\n<ion-content padding class="animated fadeIn login auth-page">\n	<div class="login-content">\n\n		<!-- Logo -->\n		<div padding-horizontal text-center class="animated fadeInDown">\n			<div class="logo">\n			</div>\n			<h2 ion-text class="text-white" no-margin>\n				<span ion-text color="light">Cedar</span><strong>Trips</strong>\n			</h2>\n		</div>\n\n		<div padding-vertical>\n		  <ion-segment [(ngModel)]="auth" color="light">\n		    <ion-segment-button value="login">\n		      Login\n		    </ion-segment-button>\n		    <ion-segment-button value="register">\n		      Register\n		    </ion-segment-button>\n		  </ion-segment>\n		</div>\n\n		<div [ngSwitch]="auth">\n			<!-- Login form -->\n			<div id="loginForm" *ngSwitchCase="\'login\'">\n				<form [formGroup]="onLoginForm" class="list-form">\n					<ion-item>\n						<ion-label floating>\n							<ion-icon name="mail" item-start class="text-white"></ion-icon>\n							Email\n						</ion-label>\n						<ion-input type="email" formControlName="email"></ion-input>\n					</ion-item>\n					<p ion-text color="danger" class="text-1x has-error" *ngIf="onLoginForm.get(\'email\').touched && onLoginForm.get(\'email\').hasError(\'required\')">This field is required</p>\n\n					<ion-item>\n						<ion-label floating>\n							<ion-icon name="lock" item-start class="text-white"></ion-icon>\n							Password\n						</ion-label>\n						<ion-input type="password" formControlName="password"></ion-input>\n					</ion-item>\n					<p ion-text color="danger" class="text-1x has-error" *ngIf="onLoginForm.get(\'password\').touched && onLoginForm.get(\'password\').hasError(\'required\')">This field is required</p>\n				</form>\n\n				<p text-right ion-text color="light" tappable (click)="forgotPass()"><strong>Forgot Password?</strong></p>\n\n				<div>\n					<button ion-button icon-start block color="secondary" (click)="login()" [disabled]="!onLoginForm.valid">\n						<ion-icon name="log-in"></ion-icon>\n						SIGN IN\n					</button>\n\n					<p text-center ion-text color="light">Or Sign in with:</p>\n\n					<ion-grid class="btn-group">\n						<ion-row>\n							<button ion-button icon-only block class="btn-facebook col col-4">\n								<ion-icon name="logo-facebook"></ion-icon>\n							</button>\n							<button ion-button icon-only block class="btn-twitter col col-4">\n								<ion-icon name="logo-twitter"></ion-icon>\n							</button>\n							<button ion-button icon-only block class="btn-gplus col col-4">\n								<ion-icon name="logo-googleplus"></ion-icon>\n							</button>\n						</ion-row>\n					</ion-grid>\n\n				</div>\n			</div>\n\n			<div id="registerForm" *ngSwitchCase="\'register\'">\n		    <!-- Register form -->\n		    <form [formGroup]="onRegisterForm" class="list-form">\n		      <ion-item>\n		        <ion-label floating>\n		          <ion-icon name="person" item-start class="text-white"></ion-icon>\n		          Full Name\n		        </ion-label>\n		        <ion-input type="text" formControlName="fullName"></ion-input>\n		      </ion-item>\n		      <p ion-text color="danger" class="text-1x has-error" *ngIf="onRegisterForm.get(\'fullName\').touched && onRegisterForm.get(\'fullName\').hasError(\'required\')">This field is required</p>\n\n		      <ion-item>\n		        <ion-label floating>\n		          <ion-icon name="mail" item-start class="text-white"></ion-icon>\n		          Email\n		        </ion-label>\n		        <ion-input type="email" formControlName="email"></ion-input>\n		      </ion-item>\n		      <p ion-text color="danger" class="text-1x has-error" *ngIf="onRegisterForm.get(\'email\').touched && onRegisterForm.get(\'email\').hasError(\'required\')">This field is required</p>\n\n		      <ion-item>\n		        <ion-label floating>\n		          <ion-icon name="lock" item-start class="text-white"></ion-icon>\n		          Password\n		        </ion-label>\n		        <ion-input type="password" formControlName="password"></ion-input>\n		      </ion-item>\n		      <p ion-text color="danger" class="text-1x has-error" *ngIf="onRegisterForm.get(\'password\').touched && onRegisterForm.get(\'password\').hasError(\'required\')">This field is required</p>\n		    </form>\n\n		    <div margin-top>\n		      <button ion-button block color="secondary" (click)="login()" [disabled]="!onRegisterForm.valid">\n		        SIGN UP\n		      </button>\n\n		      <p text-center ion-text color="light">Or Sign Up with:</p>\n\n		      <ion-grid class="btn-group">\n		        <ion-row>\n		          <button ion-button icon-only block class="btn-facebook col col-4">\n		            <ion-icon name="logo-facebook"></ion-icon>\n		          </button>\n		          <button ion-button icon-only block class="btn-twitter col col-4">\n		            <ion-icon name="logo-twitter"></ion-icon>\n		          </button>\n		          <button ion-button icon-only block class="btn-gplus col col-4">\n		            <ion-icon name="logo-googleplus"></ion-icon>\n		          </button>\n		        </ion-row>\n		      </ion-grid>\n		    </div>\n		  </div>\n\n		</div>\n\n\n	</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\trip\tripIonic-single-20181221\src\pages\auth\auth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ })

});
//# sourceMappingURL=24.js.map