webpackJsonp([26],{

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 140;

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		556,
		25
	],
	"../pages/auth/auth.module": [
		558,
		24
	],
	"../pages/booking-list/booking-list.module": [
		557,
		23
	],
	"../pages/checkout-cruise/checkout-cruise.module": [
		559,
		22
	],
	"../pages/checkout-flight/checkout-flight.module": [
		560,
		21
	],
	"../pages/checkout-train/checkout-train.module": [
		564,
		20
	],
	"../pages/cruise-detail/cruise-detail.module": [
		561,
		19
	],
	"../pages/cruise-results/cruise-results.module": [
		562,
		18
	],
	"../pages/cruise-search/cruise-search.module": [
		563,
		4
	],
	"../pages/edit-profile/edit-profile.module": [
		565,
		0
	],
	"../pages/favorite-list/favorite-list.module": [
		567,
		17
	],
	"../pages/flight-departing/flight-departing.module": [
		566,
		16
	],
	"../pages/flight-detail/flight-detail.module": [
		568,
		15
	],
	"../pages/flight-returning/flight-returning.module": [
		569,
		14
	],
	"../pages/flight-search/flight-search.module": [
		570,
		3
	],
	"../pages/home/home.module": [
		571,
		2
	],
	"../pages/local-weather/local-weather.module": [
		572,
		13
	],
	"../pages/message-detail/message-detail.module": [
		573,
		12
	],
	"../pages/message-list/message-list.module": [
		574,
		11
	],
	"../pages/notifications/notifications.module": [
		575,
		10
	],
	"../pages/search-location/search-location.module": [
		576,
		9
	],
	"../pages/support/support.module": [
		577,
		8
	],
	"../pages/train-departing/train-departing.module": [
		578,
		7
	],
	"../pages/train-detail/train-detail.module": [
		579,
		6
	],
	"../pages/train-search/train-search.module": [
		580,
		1
	],
	"../pages/walkthrough/walkthrough.module": [
		581,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 184;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_flights__ = __webpack_require__(415);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlightService = /** @class */ (function () {
    function FlightService() {
        this.flightsBookingCounter = 0;
        this.flightBookings = [];
        this.flights = __WEBPACK_IMPORTED_MODULE_1__mock_flights__["a" /* FLIGHTS */];
    }
    FlightService.prototype.getAll = function () {
        return this.flights;
    };
    FlightService.prototype.getItem = function (id) {
        for (var i = 0; i < this.flights.length; i++) {
            if (this.flights[i].id === parseInt(id)) {
                return this.flights[i];
            }
        }
        return null;
    };
    FlightService.prototype.remove = function (item) {
        this.flights.splice(this.flights.indexOf(item), 1);
    };
    // Bookings
    FlightService.prototype.setDeparting = function (departing) {
        this.departing = departing;
    };
    FlightService.prototype.setReturning = function (returning) {
        this.returning = returning;
    };
    FlightService.prototype.getDeparting = function () {
        return this.departing;
    };
    FlightService.prototype.getReturning = function () {
        return this.returning;
    };
    FlightService.prototype.booking = function (departing, returning, bookId) {
        this.flightsBookingCounter = this.flightsBookingCounter + 1;
        this.flightBookings.push({
            id: this.flightsBookingCounter,
            bookId: bookId,
            departing: departing,
            returning: returning,
            totalValue: departing.price + returning.price
        });
        this.departing = null;
        this.returning = null;
        return Promise.resolve();
    };
    FlightService.prototype.getBookings = function () {
        return Promise.resolve(this.flightBookings);
    };
    FlightService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FlightService);
    return FlightService;
}());

//# sourceMappingURL=flight-service.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CruiseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_cruises__ = __webpack_require__(417);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CruiseService = /** @class */ (function () {
    function CruiseService() {
        this.cruisesBookingCounter = 0;
        this.cruiseBookings = [];
        this.favoriteCounter = 0;
        this.favorites = [];
        this.cruises = __WEBPACK_IMPORTED_MODULE_1__mock_cruises__["a" /* CRUISES */];
    }
    CruiseService.prototype.getAll = function () {
        return this.cruises;
    };
    CruiseService.prototype.getItem = function (id) {
        for (var i = 0; i < this.cruises.length; i++) {
            if (this.cruises[i].id === parseInt(id)) {
                return this.cruises[i];
            }
        }
        return null;
    };
    CruiseService.prototype.remove = function (item) {
        this.cruises.splice(this.cruises.indexOf(item), 1);
    };
    // Favorites
    CruiseService.prototype.getFavorites = function () {
        return Promise.resolve(this.favorites);
    };
    CruiseService.prototype.favorite = function (cruise) {
        this.favoriteCounter = this.favoriteCounter + 1;
        this.favorites.push({ id: this.favoriteCounter, cruise: cruise });
        return Promise.resolve();
    };
    CruiseService.prototype.unfavorite = function (favorite) {
        var index = this.favorites.indexOf(favorite);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    };
    // Bookings
    CruiseService.prototype.setCruise = function (cruise) {
        this.cruise = cruise;
    };
    CruiseService.prototype.getCruise = function () {
        return this.cruise;
    };
    CruiseService.prototype.booking = function (cruise, bookId) {
        this.cruisesBookingCounter = this.cruisesBookingCounter + 1;
        this.cruiseBookings.push({
            id: this.cruisesBookingCounter,
            bookId: bookId,
            cruise: cruise,
            totalValue: cruise.price_adult + cruise.price_child
        });
        this.cruise = null;
        return Promise.resolve();
    };
    CruiseService.prototype.getBookings = function () {
        return Promise.resolve(this.cruiseBookings);
    };
    CruiseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CruiseService);
    return CruiseService;
}());

//# sourceMappingURL=cruise-service.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_trains__ = __webpack_require__(416);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrainService = /** @class */ (function () {
    function TrainService() {
        this.trainsBookingCounter = 0;
        this.trainBookings = [];
        this.trains = __WEBPACK_IMPORTED_MODULE_1__mock_trains__["a" /* TRAINS */];
    }
    TrainService.prototype.getAll = function () {
        return this.trains;
    };
    // Bookings
    TrainService.prototype.setTrain = function (train) {
        this.train = train;
    };
    TrainService.prototype.getTrain = function () {
        return this.train;
    };
    TrainService.prototype.booking = function (train, bookId) {
        this.trainsBookingCounter = this.trainsBookingCounter + 1;
        this.trainBookings.push({
            id: this.trainsBookingCounter,
            bookId: bookId,
            train: train,
            totalValue: train.out[0].price + train.return[1].price
        });
        this.train = null;
        return Promise.resolve();
    };
    TrainService.prototype.getBookings = function () {
        return Promise.resolve(this.trainBookings);
    };
    TrainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TrainService);
    return TrainService;
}());

//# sourceMappingURL=train-service.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_messages__ = __webpack_require__(524);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messageCounter = 0;
        this.messages = __WEBPACK_IMPORTED_MODULE_1__mock_messages__["a" /* default */];
        // console.log('mock messages: ', messages);
        // console.log(this.messages)
    }
    MessageService.prototype.findById = function (id) {
        // console.log(id)
        return Promise.resolve(this.messages[id - 1]);
    };
    MessageService.prototype.getMessages = function () {
        return this.messages;
    };
    MessageService.prototype.message = function (message) {
        this.messageCounter = this.messageCounter + 1;
        this.messages.push({ id: this.messageCounter, message: message });
        return Promise.resolve();
    };
    MessageService.prototype.getItem = function (id) {
        for (var i = 0; i < this.messages.length; i++) {
            if (this.messages[i].id === parseInt(id)) {
                return this.messages[i];
            }
        }
        return null;
    };
    MessageService.prototype.delMessage = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());

//# sourceMappingURL=message-service-mock.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { api } from './config';


var WeatherProvider = /** @class */ (function () {
    function WeatherProvider(http) {
        this.http = http;
        this.apiKey = '1e4a0bdb251c64e4';
        console.log('Hello WeatherProvider Provider');
        this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q/';
    }
    WeatherProvider.prototype.getWeather = function (state, city) {
        return this.http.get(this.url + state + '/' + city + '.json').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    // Private
    WeatherProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    WeatherProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    WeatherProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WeatherProvider);
    return WeatherProvider;
}());

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(393);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ion2_calendar__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_flight_service__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_cruise_service__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_train_service__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_weather__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_message_service_mock__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_pipes_module__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(555);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* tripIonicApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* tripIonicApp */], {
                    preloadModules: true,
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'page-account', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/booking-list/booking-list.module#BookingListPageModule', name: 'page-booking-list', segment: 'booking-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/auth/auth.module#AuthPageModule', name: 'page-auth', segment: 'auth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout-cruise/checkout-cruise.module#CheckoutCruiseModule', name: 'page-checkout-cruise', segment: 'checkout-cruise/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout-flight/checkout-flight.module#CheckoutFlightModule', name: 'page-checkout-flight', segment: 'checkout-flight', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cruise-detail/cruise-detail.module#CruiseDetailModule', name: 'page-cruise-detail', segment: 'cruise-detail/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cruise-results/cruise-results.module#CruiseResultsModule', name: 'page-cruise-results', segment: 'cruise-results', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cruise-search/cruise-search.module#CruiseSearchModule', name: 'page-cruise-search', segment: 'cruise-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout-train/checkout-train.module#CheckoutTrainModule', name: 'page-checkout-train', segment: 'checkout-train', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'page-edit-profile', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flight-departing/flight-departing.module#FlightDepartingModule', name: 'page-flight-departing', segment: 'flight-departing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorite-list/favorite-list.module#FavoriteListPageModule', name: 'page-favorite-list', segment: 'favorite-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flight-detail/flight-detail.module#FlightDetailModule', name: 'page-flight-detail', segment: 'flight-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flight-returning/flight-returning.module#FlightReturningModule', name: 'page-flight-returning', segment: 'flight-returning', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flight-search/flight-search.module#FlightSearchPageModule', name: 'page-flight-search', segment: 'flight-search', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'page-home', segment: 'home', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/local-weather/local-weather.module#LocalWeatherModule', name: 'page-local-weather', segment: 'local-weather', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/message-detail/message-detail.module#MessageDetailPageModule', name: 'page-message-detail', segment: 'message/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message-list/message-list.module#MessageListPageModule', name: 'page-message-list', segment: 'message-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'page-notifications', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-location/search-location.module#SearchLocationPageModule', name: 'page-search-location', segment: 'search-location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/support/support.module#SupportPageModule', name: 'page-support', segment: 'support', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/train-departing/train-departing.module#TrainDepartingModule', name: 'page-train-departing', segment: 'train-departing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/train-detail/train-detail.module#TrainDetailModule', name: 'page-train-detail', segment: 'train-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/train-search/train-search.module#TrainSearchModule', name: 'page-train-search', segment: 'train-search', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/walkthrough/walkthrough.module#WalkthroughPageModule', name: 'page-walkthrough', segment: 'walkthrough', priority: 'high', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__tripIonicDB',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_5_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_14__pipes_pipes_module__["a" /* PipesModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* tripIonicApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_9__providers_flight_service__["a" /* FlightService */],
                __WEBPACK_IMPORTED_MODULE_10__providers_cruise_service__["a" /* CruiseService */],
                __WEBPACK_IMPORTED_MODULE_11__providers_train_service__["a" /* TrainService */],
                __WEBPACK_IMPORTED_MODULE_13__providers_message_service_mock__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_12__providers_weather__["a" /* WeatherProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicErrorHandler"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FLIGHTS; });
var FLIGHTS = [
    {
        id: 1,
        name: "American Airlines",
        way: "roundtrip",
        totaltime: "1h 20m",
        departure: "7:35pm",
        arriving: "8:55pm",
        from: "LHR",
        to: "AMS",
        steps: "Nonstop",
        airplane: "Airbus A320",
        class: "Economy/Coach",
        logo: "assets/img/flight/thumb/aairlines-logo.jpg",
        price: 100
    },
    {
        id: 2,
        name: "Air Canada",
        way: "roundtrip",
        totaltime: "2h 30m",
        departure: "1:10pm",
        arriving: "2:40pm",
        from: "LHR",
        to: "AMS",
        steps: "Nonstop",
        airplane: "Airbus A380",
        class: "Business",
        logo: "assets/img/flight/thumb/aircanada-logo.jpg",
        price: 320
    },
    {
        id: 3,
        name: "British Airways",
        way: "roundtrip",
        totaltime: "4h 00m",
        departure: "2:15pm",
        arriving: "6:15pm",
        from: "LHR",
        to: "NYC",
        steps: "Nonstop",
        airplane: "Airbus A320",
        class: "Economy/Coach",
        logo: "assets/img/flight/thumb/britishairways-logo.jpg",
        price: 270.50
    },
    {
        id: 4,
        name: "Emirates",
        way: "roundtrip",
        totaltime: "0h 50m",
        departure: "7:35pm",
        arriving: "8:25pm",
        from: "JED",
        to: "CAI",
        steps: "Nonstop",
        airplane: "Airbus A320",
        class: "First Class",
        logo: "assets/img/flight/thumb/emirates-logo.jpg",
        price: 400
    },
    {
        id: 5,
        name: "Iberia",
        way: "roundtrip",
        totaltime: "1h 10m",
        departure: "7:35pm",
        arriving: "8:45pm",
        from: "MAD",
        to: "LIS",
        steps: "Nonstop",
        airplane: "Airbus A320",
        class: "Economy/Coach",
        logo: "assets/img/flight/thumb/iberia-logo.jpg",
        price: 130
    },
    {
        id: 6,
        name: "KLM",
        way: "roundtrip",
        totaltime: "0h 40m",
        departure: "7:35pm",
        arriving: "8:15pm",
        from: "AMS",
        to: "PAR",
        steps: "Nonstop",
        airplane: "Airbus A320",
        class: "Premium Economy",
        logo: "assets/img/flight/thumb/klm-logo.jpg",
        price: 190
    },
    {
        id: 7,
        name: "LATAM",
        way: "roundtrip",
        totaltime: "2h 15m",
        departure: "7:35pm",
        arriving: "9:50pm",
        from: "SAO",
        to: "SCL",
        steps: "1 Stop",
        airplane: "Airbus A320",
        class: "Economy/Coach",
        logo: "assets/img/flight/thumb/latam-logo.jpg",
        price: 190
    },
    {
        id: 8,
        name: "Lufthansa",
        way: "roundtrip",
        totaltime: "4h 15m",
        departure: "7:35pm",
        arriving: "11:50pm",
        from: "BER",
        to: "MOW",
        steps: "2 Stops",
        airplane: "Airbus A380",
        class: "Economy/Coach",
        logo: "assets/img/flight/thumb/lufthansa-logo.jpg",
        price: 263
    }
];
//# sourceMappingURL=mock-flights.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRAINS; });
var TRAINS = [
    {
        id: 1,
        name: "Africa Railways",
        way: "Roundtrip",
        outDate: 'Fri 11th May 2018',
        returnDate: 'Wed 16th May 2018',
        out: [
            {
                departure: "7:35pm",
                arriving: "8:25pm",
                totaltime: "0h 50m",
                price: 40
            },
            {
                departure: "7:35pm",
                arriving: "8:55pm",
                totaltime: "1h 20m",
                price: 50
            },
            {
                departure: "9:15pm",
                arriving: "11:05pm",
                totaltime: "1h 50m",
                price: 32
            },
            {
                departure: "9:15am",
                arriving: "10:45pm",
                totaltime: "1h 30m",
                price: 38
            },
            {
                totaltime: "2h 30m",
                departure: "1:10pm",
                arriving: "2:40pm",
                price: 57
            }
        ],
        return: [
            {
                departure: "7:35pm",
                arriving: "8:25pm",
                totaltime: "0h 50m",
                price: 40
            },
            {
                departure: "7:35pm",
                arriving: "8:55pm",
                totaltime: "1h 20m",
                price: 50
            },
            {
                departure: "9:15pm",
                arriving: "11:05pm",
                totaltime: "1h 50m",
                price: 32
            },
            {
                departure: "9:15am",
                arriving: "10:45pm",
                totaltime: "1h 30m",
                price: 38
            },
            {
                totaltime: "2h 30m",
                departure: "1:10pm",
                arriving: "2:40pm",
                price: 57
            }
        ],
        from: "LHR",
        to: "AMS",
        steps: "Nonstop",
        class: "Window",
        logo: "assets/img/train/thumb/africa-logo.jpg"
    },
    {
        id: 2,
        name: "Alabama Railways",
        way: "roundtrip",
        outDate: 'Fri 11th May 2018',
        returnDate: 'Wed 16th May 2018',
        out: [
            {
                departure: "7:35pm",
                arriving: "8:25pm",
                totaltime: "0h 50m",
                price: 40
            },
            {
                departure: "7:35pm",
                arriving: "8:55pm",
                totaltime: "1h 20m",
                price: 50
            },
            {
                departure: "9:15pm",
                arriving: "11:05pm",
                totaltime: "1h 50m",
                price: 32
            },
            {
                departure: "9:15am",
                arriving: "10:45pm",
                totaltime: "1h 30m",
                price: 38
            },
            {
                totaltime: "2h 30m",
                departure: "1:10pm",
                arriving: "2:40pm",
                price: 57
            }
        ],
        return: [
            {
                departure: "7:35pm",
                arriving: "8:25pm",
                totaltime: "0h 50m",
                price: 40
            },
            {
                departure: "7:35pm",
                arriving: "8:55pm",
                totaltime: "1h 20m",
                price: 50
            },
            {
                departure: "9:15pm",
                arriving: "11:05pm",
                totaltime: "1h 50m",
                price: 32
            },
            {
                departure: "9:15am",
                arriving: "10:45pm",
                totaltime: "1h 30m",
                price: 38
            },
            {
                totaltime: "2h 30m",
                departure: "1:10pm",
                arriving: "2:40pm",
                price: 57
            }
        ],
        from: "LHR",
        to: "AMS",
        steps: "Nonstop",
        class: "Aisle",
        logo: "assets/img/train/thumb/alabama-logo.jpg"
    },
    {
        id: 3,
        name: "AMTRAK",
        way: "roundtrip",
        outDate: 'Fri 11th May 2018',
        returnDate: 'Wed 16th May 2018',
        out: [
            {
                departure: "7:35pm",
                arriving: "8:25pm",
                totaltime: "0h 50m",
                price: 40
            },
            {
                departure: "7:35pm",
                arriving: "8:55pm",
                totaltime: "1h 20m",
                price: 50
            },
            {
                departure: "9:15pm",
                arriving: "11:05pm",
                totaltime: "1h 50m",
                price: 32
            },
            {
                departure: "9:15am",
                arriving: "10:45pm",
                totaltime: "1h 30m",
                price: 38
            },
            {
                totaltime: "2h 30m",
                departure: "1:10pm",
                arriving: "2:40pm",
                price: 57
            }
        ],
        return: [
            {
                departure: "7:35pm",
                arriving: "8:25pm",
                totaltime: "0h 50m",
                price: 40
            },
            {
                departure: "7:35pm",
                arriving: "8:55pm",
                totaltime: "1h 20m",
                price: 50
            },
            {
                departure: "9:15pm",
                arriving: "11:05pm",
                totaltime: "1h 50m",
                price: 32
            },
            {
                departure: "9:15am",
                arriving: "10:45pm",
                totaltime: "1h 30m",
                price: 38
            },
            {
                totaltime: "2h 30m",
                departure: "1:10pm",
                arriving: "2:40pm",
                price: 57
            }
        ],
        from: "LHR",
        to: "NYC",
        steps: "Nonstop",
        class: "First class",
        logo: "assets/img/train/thumb/amtrak-logo.jpg"
    },
    {
        id: 4,
        name: "BNSF Railway",
        way: "roundtrip",
        outDate: 'Fri 11th May 2018',
        returnDate: 'Wed 16th May 2018',
        out: [
            {
                departure: "7:35pm",
                arriving: "8:25pm",
                totaltime: "0h 50m",
                price: 40
            },
            {
                departure: "7:35pm",
                arriving: "8:55pm",
                totaltime: "1h 20m",
                price: 50
            },
            {
                departure: "9:15pm",
                arriving: "11:05pm",
                totaltime: "1h 50m",
                price: 32
            },
            {
                departure: "9:15am",
                arriving: "10:45pm",
                totaltime: "1h 30m",
                price: 38
            },
            {
                totaltime: "2h 30m",
                departure: "1:10pm",
                arriving: "2:40pm",
                price: 57
            }
        ],
        return: [
            {
                departure: "7:35pm",
                arriving: "8:25pm",
                totaltime: "0h 50m",
                price: 40
            },
            {
                departure: "7:35pm",
                arriving: "8:55pm",
                totaltime: "1h 20m",
                price: 50
            },
            {
                departure: "9:15pm",
                arriving: "11:05pm",
                totaltime: "1h 50m",
                price: 32
            },
            {
                departure: "9:15am",
                arriving: "10:45pm",
                totaltime: "1h 30m",
                price: 38
            },
            {
                totaltime: "2h 30m",
                departure: "1:10pm",
                arriving: "2:40pm",
                price: 57
            }
        ],
        from: "JED",
        to: "CAI",
        steps: "Nonstop",
        class: "First Class",
        logo: "assets/img/train/thumb/bnsf-logo.jpg"
    },
    {
        id: 5,
        name: "British Railways",
        way: "roundtrip",
        outDate: 'Fri 11th May 2018',
        returnDate: 'Wed 16th May 2018',
        out: [
            {
                departure: "7:35pm",
                arriving: "8:25pm",
                totaltime: "0h 50m",
                price: 40
            },
            {
                departure: "7:35pm",
                arriving: "8:55pm",
                totaltime: "1h 20m",
                price: 50
            },
            {
                departure: "9:15pm",
                arriving: "11:05pm",
                totaltime: "1h 50m",
                price: 32
            },
            {
                departure: "9:15am",
                arriving: "10:45pm",
                totaltime: "1h 30m",
                price: 38
            },
            {
                totaltime: "2h 30m",
                departure: "1:10pm",
                arriving: "2:40pm",
                price: 57
            }
        ],
        return: [
            {
                departure: "7:35pm",
                arriving: "8:25pm",
                totaltime: "0h 50m",
                price: 40
            },
            {
                departure: "7:35pm",
                arriving: "8:55pm",
                totaltime: "1h 20m",
                price: 50
            },
            {
                departure: "9:15pm",
                arriving: "11:05pm",
                totaltime: "1h 50m",
                price: 32
            },
            {
                departure: "9:15am",
                arriving: "10:45pm",
                totaltime: "1h 30m",
                price: 38
            },
            {
                totaltime: "2h 30m",
                departure: "1:10pm",
                arriving: "2:40pm",
                price: 57
            }
        ],
        from: "MAD",
        to: "LIS",
        steps: "Nonstop",
        class: "Window",
        logo: "assets/img/train/thumb/british-logo.jpg"
    },
    {
        id: 6,
        name: "Canadian National Railway",
        way: "roundtrip",
        outDate: 'Fri 11th May 2018',
        returnDate: 'Wed 16th May 2018',
        out: [
            {
                departure: "7:35pm",
                arriving: "8:25pm",
                totaltime: "0h 50m",
                price: 40
            },
            {
                departure: "7:35pm",
                arriving: "8:55pm",
                totaltime: "1h 20m",
                price: 50
            },
            {
                departure: "9:15pm",
                arriving: "11:05pm",
                totaltime: "1h 50m",
                price: 32
            },
            {
                departure: "9:15am",
                arriving: "10:45pm",
                totaltime: "1h 30m",
                price: 38
            },
            {
                totaltime: "2h 30m",
                departure: "1:10pm",
                arriving: "2:40pm",
                price: 57
            }
        ],
        return: [
            {
                departure: "7:35pm",
                arriving: "8:25pm",
                totaltime: "0h 50m",
                price: 40
            },
            {
                departure: "7:35pm",
                arriving: "8:55pm",
                totaltime: "1h 20m",
                price: 50
            },
            {
                departure: "9:15pm",
                arriving: "11:05pm",
                totaltime: "1h 50m",
                price: 32
            },
            {
                departure: "9:15am",
                arriving: "10:45pm",
                totaltime: "1h 30m",
                price: 38
            },
            {
                totaltime: "2h 30m",
                departure: "1:10pm",
                arriving: "2:40pm",
                price: 57
            }
        ],
        from: "AMS",
        to: "PAR",
        steps: "Nonstop",
        class: "Window",
        logo: "assets/img/train/thumb/cn-logo.jpg"
    },
    {
        id: 7,
        name: "Indian Railways",
        way: "roundtrip",
        outDate: 'Fri 11th May 2018',
        returnDate: 'Wed 16th May 2018',
        out: [
            {
                departure: "7:35pm",
                arriving: "8:25pm",
                totaltime: "0h 50m",
                price: 40
            },
            {
                departure: "7:35pm",
                arriving: "8:55pm",
                totaltime: "1h 20m",
                price: 50
            },
            {
                departure: "9:15pm",
                arriving: "11:05pm",
                totaltime: "1h 50m",
                price: 32
            },
            {
                departure: "9:15am",
                arriving: "10:45pm",
                totaltime: "1h 30m",
                price: 38
            },
            {
                totaltime: "2h 30m",
                departure: "1:10pm",
                arriving: "2:40pm",
                price: 57
            }
        ],
        return: [
            {
                departure: "7:35pm",
                arriving: "8:25pm",
                totaltime: "0h 50m",
                price: 40
            },
            {
                departure: "7:35pm",
                arriving: "8:55pm",
                totaltime: "1h 20m",
                price: 50
            },
            {
                departure: "9:15pm",
                arriving: "11:05pm",
                totaltime: "1h 50m",
                price: 32
            },
            {
                departure: "9:15am",
                arriving: "10:45pm",
                totaltime: "1h 30m",
                price: 38
            },
            {
                totaltime: "2h 30m",
                departure: "1:10pm",
                arriving: "2:40pm",
                price: 57
            }
        ],
        from: "AMS",
        to: "PAR",
        steps: "Nonstop",
        class: "Aisle",
        logo: "assets/img/train/thumb/indian-logo.jpg"
    },
    {
        id: 8,
        name: "Union Pacific",
        way: "roundtrip",
        outDate: 'Fri 11th May 2018',
        returnDate: 'Wed 16th May 2018',
        out: [
            {
                departure: "7:35pm",
                arriving: "8:25pm",
                totaltime: "0h 50m",
                price: 40
            },
            {
                departure: "7:35pm",
                arriving: "8:55pm",
                totaltime: "1h 20m",
                price: 50
            },
            {
                departure: "9:15pm",
                arriving: "11:05pm",
                totaltime: "1h 50m",
                price: 32
            },
            {
                departure: "9:15am",
                arriving: "10:45pm",
                totaltime: "1h 30m",
                price: 38
            },
            {
                totaltime: "2h 30m",
                departure: "1:10pm",
                arriving: "2:40pm",
                price: 57
            }
        ],
        return: [
            {
                departure: "7:35pm",
                arriving: "8:25pm",
                totaltime: "0h 50m",
                price: 40
            },
            {
                departure: "7:35pm",
                arriving: "8:55pm",
                totaltime: "1h 20m",
                price: 50
            },
            {
                departure: "9:15pm",
                arriving: "11:05pm",
                totaltime: "1h 50m",
                price: 32
            },
            {
                departure: "9:15am",
                arriving: "10:45pm",
                totaltime: "1h 30m",
                price: 38
            },
            {
                totaltime: "2h 30m",
                departure: "1:10pm",
                arriving: "2:40pm",
                price: 57
            }
        ],
        from: "AMS",
        to: "PAR",
        steps: "Nonstop",
        class: "Window",
        logo: "assets/img/train/thumb/union-logo.jpg"
    }
];
//# sourceMappingURL=mock-trains.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CRUISES; });
var CRUISES = [
    {
        id: 1,
        name: "Cruise from Miami to Genoa",
        price_adult: 600,
        price_child: 300,
        time: "12 nights",
        date: "2019: Mar 29",
        free_cancellation: 1,
        electric_voucher: 1,
        ports: "Miami; Funchal; Tenerife; Genoa",
        thumb: "assets/img/cruise/thumb/royal-logo.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Rio de Janeiro, Brazil",
        images: [
            "assets/img/cruise/thumb/cruise_1.jpg",
            "assets/img/cruise/thumb/cruise_6.jpg",
            "assets/img/cruise/thumb/cruise_7.jpg",
            "assets/img/cruise/thumb/cruise_8.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    },
    {
        id: 2,
        name: "Cruise from Miami to Valencia",
        price_adult: 900,
        price_child: 450,
        time: "18 nights",
        date: "2018: Oct 10",
        free_cancellation: 1,
        electric_voucher: 1,
        ports: "Miami; Ponta Delgada; Gibraltar; Alicante; Valencia",
        thumb: "assets/img/cruise/thumb/princess-logo.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Rio de Janeiro, Brazil",
        images: [
            "assets/img/cruise/thumb/cruise_2.jpg",
            "assets/img/cruise/thumb/cruise_6.jpg",
            "assets/img/cruise/thumb/cruise_7.jpg",
            "assets/img/cruise/thumb/cruise_8.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    },
    {
        id: 3,
        name: "Cruise from Venice to Miami",
        price_adult: 1300,
        price_child: 650,
        time: "28 nights",
        date: "2019: Apr 9",
        free_cancellation: 1,
        electric_voucher: 1,
        ports: "Venice; Ponta Delgada; Lisbon; Porto; Miami",
        thumb: "assets/img/cruise/thumb/ncl-logo.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "São Paulo, Brazil",
        images: [
            "assets/img/cruise/thumb/cruise_3.jpg",
            "assets/img/cruise/thumb/cruise_4.jpg",
            "assets/img/cruise/thumb/cruise_6.jpg",
            "assets/img/cruise/thumb/cruise_8.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    },
    {
        id: 4,
        name: "Cruise from Rio de Janeiro to Lisbon",
        price_adult: 1500,
        price_child: 750,
        time: "14 nights",
        date: "2019: Jan 13",
        free_cancellation: 1,
        electric_voucher: 1,
        ports: "Rio de Janeiro; Natal; Kingston; Lisbon",
        thumb: "assets/img/cruise/thumb/msc-logo.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Fernando de Noronha, Brazil",
        images: [
            "assets/img/cruise/thumb/cruise_4.jpg",
            "assets/img/cruise/thumb/cruise_2.jpg",
            "assets/img/cruise/thumb/cruise_5.jpg",
            "assets/img/cruise/thumb/cruise_8.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    },
    {
        id: 5,
        name: "Cruise from Santos to Havana",
        price_adult: 800,
        price_child: 400,
        time: "19 nights",
        date: "2018: Sep 26",
        free_cancellation: 1,
        electric_voucher: 1,
        ports: "Santos; Salvador; Natal; Havana",
        thumb: "assets/img/cruise/thumb/disney-logo.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Fernando de Noronha, Brazil",
        images: [
            "assets/img/cruise/thumb/cruise_5.jpg",
            "assets/img/cruise/thumb/cruise_6.jpg",
            "assets/img/cruise/thumb/cruise_7.jpg",
            "assets/img/cruise/thumb/cruise_8.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    },
    {
        id: 6,
        name: "Cruise from Kington to Ponta Delgada",
        price_adult: 1100,
        price_child: 550,
        time: "30 nights",
        date: "2019: Dez 22",
        free_cancellation: 1,
        electric_voucher: 1,
        ports: "Kingston; Port of Prince; Ponta Delgada",
        thumb: "assets/img/cruise/thumb/costa-logo.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Fernando de Noronha, Brazil",
        images: [
            "assets/img/cruise/thumb/cruise_6.jpg",
            "assets/img/cruise/thumb/cruise_1.jpg",
            "assets/img/cruise/thumb/cruise_3.jpg",
            "assets/img/cruise/thumb/cruise_5.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    },
    {
        id: 7,
        name: "Cruise from Havana to Bahamas",
        price_adult: 500,
        price_child: 250,
        time: "7 nights",
        date: "2018: Nov 21",
        free_cancellation: 1,
        electric_voucher: 1,
        ports: "Havana; Port of Prince; Bahamas",
        thumb: "assets/img/cruise/thumb/celebrity-logo.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Fernando de Noronha, Brazil",
        images: [
            "assets/img/cruise/thumb/cruise_7.jpg",
            "assets/img/cruise/thumb/cruise_2.jpg",
            "assets/img/cruise/thumb/cruise_4.jpg",
            "assets/img/cruise/thumb/cruise_6.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    },
    {
        id: 8,
        name: "Cruise from Porto to Macau",
        price_adult: 2800,
        price_child: 1400,
        time: "42 nights",
        date: "2019: May 1",
        free_cancellation: 1,
        electric_voucher: 1,
        ports: "Porto; Valencia; Port Elizabeth; Goa; Macau",
        thumb: "assets/img/cruise/thumb/carnival-logo.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Fernando de Noronha, Brazil",
        images: [
            "assets/img/cruise/thumb/cruise_8.jpg",
            "assets/img/cruise/thumb/cruise_1.jpg",
            "assets/img/cruise/thumb/cruise_3.jpg",
            "assets/img/cruise/thumb/cruise_5.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    }
];
//# sourceMappingURL=mock-cruises.js.map

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 186,
	"./af.js": 186,
	"./ar": 187,
	"./ar-dz": 188,
	"./ar-dz.js": 188,
	"./ar-kw": 189,
	"./ar-kw.js": 189,
	"./ar-ly": 190,
	"./ar-ly.js": 190,
	"./ar-ma": 191,
	"./ar-ma.js": 191,
	"./ar-sa": 192,
	"./ar-sa.js": 192,
	"./ar-tn": 193,
	"./ar-tn.js": 193,
	"./ar.js": 187,
	"./az": 194,
	"./az.js": 194,
	"./be": 195,
	"./be.js": 195,
	"./bg": 196,
	"./bg.js": 196,
	"./bm": 197,
	"./bm.js": 197,
	"./bn": 198,
	"./bn.js": 198,
	"./bo": 199,
	"./bo.js": 199,
	"./br": 200,
	"./br.js": 200,
	"./bs": 201,
	"./bs.js": 201,
	"./ca": 202,
	"./ca.js": 202,
	"./cs": 203,
	"./cs.js": 203,
	"./cv": 204,
	"./cv.js": 204,
	"./cy": 205,
	"./cy.js": 205,
	"./da": 206,
	"./da.js": 206,
	"./de": 207,
	"./de-at": 208,
	"./de-at.js": 208,
	"./de-ch": 209,
	"./de-ch.js": 209,
	"./de.js": 207,
	"./dv": 210,
	"./dv.js": 210,
	"./el": 211,
	"./el.js": 211,
	"./en-SG": 212,
	"./en-SG.js": 212,
	"./en-au": 213,
	"./en-au.js": 213,
	"./en-ca": 214,
	"./en-ca.js": 214,
	"./en-gb": 215,
	"./en-gb.js": 215,
	"./en-ie": 216,
	"./en-ie.js": 216,
	"./en-il": 217,
	"./en-il.js": 217,
	"./en-nz": 218,
	"./en-nz.js": 218,
	"./eo": 219,
	"./eo.js": 219,
	"./es": 220,
	"./es-do": 221,
	"./es-do.js": 221,
	"./es-us": 222,
	"./es-us.js": 222,
	"./es.js": 220,
	"./et": 223,
	"./et.js": 223,
	"./eu": 224,
	"./eu.js": 224,
	"./fa": 225,
	"./fa.js": 225,
	"./fi": 226,
	"./fi.js": 226,
	"./fo": 227,
	"./fo.js": 227,
	"./fr": 228,
	"./fr-ca": 229,
	"./fr-ca.js": 229,
	"./fr-ch": 230,
	"./fr-ch.js": 230,
	"./fr.js": 228,
	"./fy": 231,
	"./fy.js": 231,
	"./ga": 232,
	"./ga.js": 232,
	"./gd": 233,
	"./gd.js": 233,
	"./gl": 234,
	"./gl.js": 234,
	"./gom-latn": 235,
	"./gom-latn.js": 235,
	"./gu": 236,
	"./gu.js": 236,
	"./he": 237,
	"./he.js": 237,
	"./hi": 238,
	"./hi.js": 238,
	"./hr": 239,
	"./hr.js": 239,
	"./hu": 240,
	"./hu.js": 240,
	"./hy-am": 241,
	"./hy-am.js": 241,
	"./id": 242,
	"./id.js": 242,
	"./is": 243,
	"./is.js": 243,
	"./it": 244,
	"./it-ch": 245,
	"./it-ch.js": 245,
	"./it.js": 244,
	"./ja": 246,
	"./ja.js": 246,
	"./jv": 247,
	"./jv.js": 247,
	"./ka": 248,
	"./ka.js": 248,
	"./kk": 249,
	"./kk.js": 249,
	"./km": 250,
	"./km.js": 250,
	"./kn": 251,
	"./kn.js": 251,
	"./ko": 252,
	"./ko.js": 252,
	"./ku": 253,
	"./ku.js": 253,
	"./ky": 254,
	"./ky.js": 254,
	"./lb": 255,
	"./lb.js": 255,
	"./lo": 256,
	"./lo.js": 256,
	"./lt": 257,
	"./lt.js": 257,
	"./lv": 258,
	"./lv.js": 258,
	"./me": 259,
	"./me.js": 259,
	"./mi": 260,
	"./mi.js": 260,
	"./mk": 261,
	"./mk.js": 261,
	"./ml": 262,
	"./ml.js": 262,
	"./mn": 263,
	"./mn.js": 263,
	"./mr": 264,
	"./mr.js": 264,
	"./ms": 265,
	"./ms-my": 266,
	"./ms-my.js": 266,
	"./ms.js": 265,
	"./mt": 267,
	"./mt.js": 267,
	"./my": 268,
	"./my.js": 268,
	"./nb": 269,
	"./nb.js": 269,
	"./ne": 270,
	"./ne.js": 270,
	"./nl": 271,
	"./nl-be": 272,
	"./nl-be.js": 272,
	"./nl.js": 271,
	"./nn": 273,
	"./nn.js": 273,
	"./pa-in": 274,
	"./pa-in.js": 274,
	"./pl": 275,
	"./pl.js": 275,
	"./pt": 276,
	"./pt-br": 277,
	"./pt-br.js": 277,
	"./pt.js": 276,
	"./ro": 278,
	"./ro.js": 278,
	"./ru": 279,
	"./ru.js": 279,
	"./sd": 280,
	"./sd.js": 280,
	"./se": 281,
	"./se.js": 281,
	"./si": 282,
	"./si.js": 282,
	"./sk": 283,
	"./sk.js": 283,
	"./sl": 284,
	"./sl.js": 284,
	"./sq": 285,
	"./sq.js": 285,
	"./sr": 286,
	"./sr-cyrl": 287,
	"./sr-cyrl.js": 287,
	"./sr.js": 286,
	"./ss": 288,
	"./ss.js": 288,
	"./sv": 289,
	"./sv.js": 289,
	"./sw": 290,
	"./sw.js": 290,
	"./ta": 291,
	"./ta.js": 291,
	"./te": 292,
	"./te.js": 292,
	"./tet": 293,
	"./tet.js": 293,
	"./tg": 294,
	"./tg.js": 294,
	"./th": 295,
	"./th.js": 295,
	"./tl-ph": 296,
	"./tl-ph.js": 296,
	"./tlh": 297,
	"./tlh.js": 297,
	"./tr": 298,
	"./tr.js": 298,
	"./tzl": 299,
	"./tzl.js": 299,
	"./tzm": 300,
	"./tzm-latn": 301,
	"./tzm-latn.js": 301,
	"./tzm.js": 300,
	"./ug-cn": 302,
	"./ug-cn.js": 302,
	"./uk": 303,
	"./uk.js": 303,
	"./ur": 304,
	"./ur.js": 304,
	"./uz": 305,
	"./uz-latn": 306,
	"./uz-latn.js": 306,
	"./uz.js": 305,
	"./vi": 307,
	"./vi.js": 307,
	"./x-pseudo": 308,
	"./x-pseudo.js": 308,
	"./yo": 309,
	"./yo.js": 309,
	"./zh-cn": 310,
	"./zh-cn.js": 310,
	"./zh-hk": 311,
	"./zh-hk.js": 311,
	"./zh-tw": 312,
	"./zh-tw.js": 312
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 420;

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var messages = [
    {
        id: 1,
        title: "New Offer 25% OFF",
        date: "2017-11-01T00:00:00.000-0300",
        senderId: 2,
        senderName: "Caroline Broker",
        email: "caroline@tripionic.com",
        message: "Please body! contact me for help you with my new offer, keep in touch for this or other offers.",
        read: false
    },
    {
        id: 2,
        title: "New Offer 15% OFF!",
        date: "2017-11-01T00:00:00.000-0300",
        senderId: 3,
        senderName: "Michael Jones",
        email: "michael@tripionic.com",
        message: "Please body! contact me for help you with my new offer, keep in touch for this or other offers.",
        read: true
    },
    {
        id: 3,
        title: "New Cruises coming!",
        date: "2017-10-20T00:00:00.000-0300",
        senderId: 3,
        senderName: "Michael Jones",
        email: "michael@tripionic.com",
        message: "Please body! contact me for help you with my new offer, keep in touch for this or other offers.",
        read: true
    },
    {
        id: 4,
        title: "Your New Trip",
        date: "2017-10-09T00:00:00.000-0300",
        senderId: 5,
        senderName: "Jessica Stevens",
        email: "jessica@tripionic.com",
        message: "Please body! contact me for help you with my new offer, keep in touch for this or other offers.",
        read: false
    }
];
/* harmony default export */ __webpack_exports__["a"] = (messages);
//# sourceMappingURL=mock-messages.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pipes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__term_search__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__capitalize_pipe__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orderby_pipe__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shorten_pipe__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__temperature_pipe__ = __webpack_require__(554);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var pipes = [
    __WEBPACK_IMPORTED_MODULE_1__term_search__["a" /* TermSearchPipe */],
    __WEBPACK_IMPORTED_MODULE_2__capitalize_pipe__["a" /* CapitalizePipe */],
    __WEBPACK_IMPORTED_MODULE_3__orderby_pipe__["a" /* OrderByPipe */],
    __WEBPACK_IMPORTED_MODULE_4__shorten_pipe__["a" /* ShortenStringPipe */],
    __WEBPACK_IMPORTED_MODULE_5__temperature_pipe__["a" /* TemperaturePipe */],
];
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [pipes],
            exports: [pipes]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermSearchPipe = /** @class */ (function () {
    function TermSearchPipe() {
    }
    TermSearchPipe.prototype.transform = function (value, query, field) {
        return query ? value.reduce(function (prev, next) {
            if (next[field].includes(query)) {
                prev.push(next);
            }
            return prev;
        }, []) : value;
    };
    TermSearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'termSearch',
            pure: false
        }),
        __metadata("design:paramtypes", [])
    ], TermSearchPipe);
    return TermSearchPipe;
}());

//# sourceMappingURL=term-search.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    // Autocapitalizes the first letter of each word in a phrase.
    // Input: {{'john doe' | capitalize}}
    // Output: John Doe
    CapitalizePipe.prototype.transform = function (value) {
        if (value) {
            var words = value.split(' ');
            value = words.map(function (word) { return word.substring(0, 1).toUpperCase() + word.substring(1); }).join(' ');
        }
        return value;
    };
    CapitalizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'capitalize'
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());

//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
        this.value = [];
    }
    OrderByPipe_1 = OrderByPipe;
    OrderByPipe.orderByComparator = function (a, b) {
        if (a === null || typeof a === 'undefined') {
            a = 0;
        }
        if (b === null || typeof b === 'undefined') {
            b = 0;
        }
        if ((isNaN(parseFloat(a)) ||
            !isFinite(a)) ||
            (isNaN(parseFloat(b)) || !isFinite(b))) {
            // Isn"t a number so lowercase the string to properly compare
            a = a.toString();
            b = b.toString();
            if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
            }
            if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
            }
        }
        else {
            // Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b)) {
                return -1;
            }
            if (parseFloat(a) > parseFloat(b)) {
                return 1;
            }
        }
        return 0; // equal each other
    };
    OrderByPipe.prototype.transform = function (input, config) {
        if (config === void 0) { config = '+'; }
        if (!input) {
            return input;
        }
        // make a copy of the input"s reference
        this.value = input.slice();
        var value = this.value;
        if (!Array.isArray(value)) {
            return value;
        }
        if (!Array.isArray(config) || (Array.isArray(config) && config.length === 1)) {
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
            var desc_1 = propertyToCheck.substr(0, 1) === '-';
            // Basic array
            if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+') {
                return !desc_1 ? value.sort() : value.sort().reverse();
            }
            else {
                var property_1 = propertyToCheck.substr(0, 1) === '+' || propertyToCheck.substr(0, 1) === '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                return value.sort(function (a, b) {
                    var aValue = a[property_1];
                    var bValue = b[property_1];
                    var propertySplit = property_1.split('.');
                    if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && propertySplit.length > 1) {
                        aValue = a;
                        bValue = b;
                        for (var j = 0; j < propertySplit.length; j++) {
                            aValue = aValue[propertySplit[j]];
                            bValue = bValue[propertySplit[j]];
                        }
                    }
                    return !desc_1
                        ? OrderByPipe_1.orderByComparator(aValue, bValue)
                        : -OrderByPipe_1.orderByComparator(aValue, bValue);
                });
            }
        }
        else {
            // Loop over property of the array in order and sort
            return value.sort(function (a, b) {
                for (var i = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) === '-';
                    var property = config[i].substr(0, 1) === '+' || config[i].substr(0, 1) === '-'
                        ? config[i].substr(1)
                        : config[i];
                    var aValue = a[property];
                    var bValue = b[property];
                    var propertySplit = property.split('.');
                    if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && propertySplit.length > 1) {
                        aValue = a;
                        bValue = b;
                        for (var j = 0; j < propertySplit.length; j++) {
                            aValue = aValue[propertySplit[j]];
                            bValue = bValue[propertySplit[j]];
                        }
                    }
                    var comparison = !desc
                        ? OrderByPipe_1.orderByComparator(aValue, bValue)
                        : -OrderByPipe_1.orderByComparator(aValue, bValue);
                    // Don't return 0 yet in case of needing to sort by next property
                    if (comparison !== 0) {
                        return comparison;
                    }
                }
                return 0; // equal each other
            });
        }
    };
    OrderByPipe = OrderByPipe_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'orderBy', pure: false })
    ], OrderByPipe);
    return OrderByPipe;
    var OrderByPipe_1;
}());

//# sourceMappingURL=orderby.pipe.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortenStringPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShortenStringPipe = /** @class */ (function () {
    function ShortenStringPipe() {
    }
    // Shortens the string to a given length.
    // Input: {{'This is a very long string' | shorten:18}}
    // Output: This is a very lon...
    ShortenStringPipe.prototype.transform = function (value, maxWidth, suffix) {
        if (maxWidth === void 0) { maxWidth = 30; }
        if (suffix === void 0) { suffix = '...'; }
        if (value && value.length > maxWidth) {
            value = value.substring(0, maxWidth) + suffix;
        }
        return value;
    };
    ShortenStringPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'shorten'
        })
    ], ShortenStringPipe);
    return ShortenStringPipe;
}());

//# sourceMappingURL=shorten.pipe.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemperaturePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TemperaturePipe = /** @class */ (function () {
    function TemperaturePipe() {
    }
    TemperaturePipe.prototype.transform = function (value, args) {
        var c = Math.round(parseInt(value, 10) - 273.15);
        var f = Math.round(parseInt(value, 10) * 9 / 5 - 459.67);
        return args === 'c' ? c + " \u00B0C" : f + " \u00B0F";
    };
    TemperaturePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'temperature'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], TemperaturePipe);
    return TemperaturePipe;
}());

//# sourceMappingURL=temperature.pipe.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tripIonicApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(377);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var tripIonicApp = /** @class */ (function () {
    function tripIonicApp(platform, statusBar, splashScreen, keyboard) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.keyboard = keyboard;
        this.rootPage = "page-walkthrough";
        this.showMenu = true;
        this.initializeApp();
        this.appMenuItems = [
            { title: 'Home', component: 'page-home', icon: 'home' },
            { title: 'Messages', component: 'page-message-list', icon: 'mail' },
            { title: 'Local Weather', component: 'page-local-weather', icon: 'sunny' },
            { title: 'Favorites', component: 'page-favorite-list', icon: 'heart' },
            { title: 'Booking List', component: 'page-booking-list', icon: 'briefcase' },
            { title: 'Support', component: 'page-support', icon: 'help-buoy' },
            { title: 'Walkthrough', component: 'page-walkthrough', icon: 'photos' }
        ];
    }
    tripIonicApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            //*** Control Status Bar
            _this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(false);
            //*** Control Keyboard
            _this.keyboard.hide();
        });
    };
    tripIonicApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    tripIonicApp.prototype.logout = function () {
        this.nav.setRoot('page-auth');
    };
    tripIonicApp.prototype.editProfile = function () {
        this.nav.setRoot('page-edit-profile');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], tripIonicApp.prototype, "nav", void 0);
    tripIonicApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\user\trip\tripIonic-single-20181221\src\app\app.html"*/'<ion-split-pane when="lg">\n\n  <ion-menu side="left" id="authenticated" [content]="content">\n    <ion-header>\n      <ion-toolbar class="user-profile nav-transparent">\n\n        <ion-grid>\n          <ion-row>\n            <ion-col col-4>\n              <ion-avatar item-start>\n                <img class="user-avatar" src="assets/img/0.jpg">\n              </ion-avatar>\n            </ion-col>\n            <ion-col col-8>\n              <h4 ion-text class="text-white bold" no-margin>Pankaj Bhagat</h4>\n              <p ion-text color="light" no-margin>pankaj@cedarinfotech.com</p>\n              <div padding-top>\n                <button ion-button icon-left small color="one" menuClose (click)="editProfile()">\n                  <ion-icon name="contact"></ion-icon>\n                  Edit Profile\n                </button>\n                <button ion-button icon-left small color="one" menuClose (click)="logout()">\n                  <ion-icon name="log-out"></ion-icon>\n                </button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <ion-grid no-padding>\n          <ion-row class="other-data">\n            <ion-col text-center class="column">\n              <span ion-text color="light" class="bold">Points</span>\n              <h5 ion-text no-margin class="text-1x text-white">1124</h5>\n            </ion-col>\n            <ion-col text-center class="column">\n              <span ion-text color="light" class="bold">Location</span>\n              <h5 ion-text no-margin class="text-1x text-white">Jubilee Hills</h5>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content color="primary">\n\n      <ion-list class="user-list">\n        <button ion-item menuClose class="text-1x" *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n          <ion-icon item-left [name]="menuItem.icon" color="one"></ion-icon>\n          <span ion-text color="one">{{menuItem.title}}</span>\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n\n  <ion-nav [root]="rootPage" main #content swipeBackEnabled="false"></ion-nav>\n\n</ion-split-pane>\n'/*ion-inline-end:"C:\Users\user\trip\tripIonic-single-20181221\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */]])
    ], tripIonicApp);
    return tripIonicApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[385]);
//# sourceMappingURL=main.js.map