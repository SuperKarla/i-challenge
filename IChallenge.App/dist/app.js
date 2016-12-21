webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(2);
	var core_1 = __webpack_require__(4);
	var app_module_1 = __webpack_require__(24);
	if (process.env.ENV === 'production') {
	    core_1.enableProdMode();
	}
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var platform_browser_1 = __webpack_require__(22);
	var app_component_1 = __webpack_require__(25);
	var home_1 = __webpack_require__(28);
	var app_routes_1 = __webpack_require__(32);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule,
	                app_routes_1.routing
	            ],
	            declarations: [
	                // components
	                app_component_1.AppComponent,
	                home_1.HomeComponent
	            ],
	            bootstrap: [app_component_1.AppComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            //moduleId: module.id,
	            selector: 'ichallenge-app',
	            template: __webpack_require__(26),
	            styles: [__webpack_require__(27)],
	            encapsulation: core_1.ViewEncapsulation.None
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<h3>Hello world</h3>\r\n<router-outlet></router-outlet>";

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "body ichallenge-app {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column; }\n  body ichallenge-app main {\n    display: flex;\n    flex: 1 1 auto;\n    flex-direction: column; }\n"

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(29));


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    HomeComponent.prototype.ngOnInit = function () { };
	    HomeComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(30),
	            styles: [__webpack_require__(31)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;


/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<h3>Home</h3>";

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = ":host h3 {\n  font-size: 24px; }\n"

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(33);
	var home_1 = __webpack_require__(28);
	exports.routes = [
	    {
	        path: '',
	        redirectTo: '/home',
	        pathMatch: 'full'
	    },
	    {
	        path: 'home',
	        component: home_1.HomeComponent
	    },
	];
	exports.routing = router_1.RouterModule.forRoot(exports.routes);


/***/ }
]);
//# sourceMappingURL=app.js.map