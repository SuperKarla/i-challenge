webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(process) {\"use strict\";\r\nvar platform_browser_dynamic_1 = __webpack_require__(2);\r\nvar core_1 = __webpack_require__(4);\r\nvar app_module_1 = __webpack_require__(24);\r\nif (process.env.ENV === 'production') {\r\n    core_1.enableProdMode();\r\n}\r\nplatform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);\r\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLnRzPzdkNjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52LkVOViA9PT0gJ3Byb2R1Y3Rpb24nKSBcclxue1xyXG4gIGVuYWJsZVByb2RNb2RlKCk7XHJcbn1cclxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL21haW4udHMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar core_1 = __webpack_require__(4);\r\nvar platform_browser_1 = __webpack_require__(22);\r\nvar material_1 = __webpack_require__(25);\r\nvar app_component_1 = __webpack_require__(62);\r\nvar home_1 = __webpack_require__(65);\r\nvar menu_1 = __webpack_require__(69);\r\nvar app_routes_1 = __webpack_require__(73);\r\nvar AppModule = (function () {\r\n    function AppModule() {\r\n    }\r\n    AppModule = __decorate([\r\n        core_1.NgModule({\r\n            imports: [\r\n                platform_browser_1.BrowserModule,\r\n                app_routes_1.routing,\r\n                material_1.MaterialModule.forRoot()\r\n            ],\r\n            declarations: [\r\n                // components\r\n                app_component_1.AppComponent,\r\n                home_1.HomeComponent,\r\n                menu_1.MenuComponent\r\n            ],\r\n            bootstrap: [app_component_1.AppComponent]\r\n        }), \r\n        __metadata('design:paramtypes', [])\r\n    ], AppModule);\r\n    return AppModule;\r\n}());\r\nexports.AppModule = AppModule;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5tb2R1bGUudHM/MjU2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gIGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUnO1xyXG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51JztcclxuXHJcbmltcG9ydCB7IHJvdXRpbmcgfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgcm91dGluZyxcclxuICAgIE1hdGVyaWFsTW9kdWxlLmZvclJvb3QoKVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAvLyBjb21wb25lbnRzXHJcbiAgICBBcHBDb21wb25lbnQsXHJcbiAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgTWVudUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG5vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL2FwcC5tb2R1bGUudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQWdCQTtBQUFBO0FBQUE7QUFkQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar core_1 = __webpack_require__(4);\r\nvar AppComponent = (function () {\r\n    function AppComponent() {\r\n    }\r\n    AppComponent = __decorate([\r\n        core_1.Component({\r\n            //moduleId: module.id,\r\n            selector: 'ichallenge-app',\r\n            template: __webpack_require__(63),\r\n            styles: [__webpack_require__(64)],\r\n            encapsulation: core_1.ViewEncapsulation.None\r\n        }), \r\n        __metadata('design:paramtypes', [])\r\n    ], AppComponent);\r\n    return AppComponent;\r\n}());\r\nexports.AppComponent = AppComponent;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHM/ZjA1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvL21vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdpY2hhbGxlbmdlLWFwcCcsXHJcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJyksXHJcbiAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LnNjc3MnKV0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFQQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 63:
/***/ function(module, exports) {

	eval("module.exports = \"<h3>Hello world</h3>\\r\\n<router-outlet></router-outlet>\";//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbD85NTE5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8aDM+SGVsbG8gd29ybGQ8L2gzPlxcclxcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 64:
/***/ function(module, exports) {

	eval("module.exports = \"body ichallenge-app {\\n  display: flex;\\n  min-height: 100vh;\\n  flex-direction: column;\\n  background-color: black; }\\n  body ichallenge-app main {\\n    display: flex;\\n    flex: 1 1 auto;\\n    flex-direction: column; }\\n\"//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2Nzcz8xZmZjIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCJib2R5IGljaGFsbGVuZ2UtYXBwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgfVxcbiAgYm9keSBpY2hhbGxlbmdlLWFwcCBtYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\n__export(__webpack_require__(66));\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hvbWUvaW5kZXgudHM/YzE2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvaG9tZS9pbmRleC50cyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar core_1 = __webpack_require__(4);\r\nvar HomeComponent = (function () {\r\n    function HomeComponent() {\r\n    }\r\n    HomeComponent.prototype.ngOnInit = function () { };\r\n    HomeComponent = __decorate([\r\n        core_1.Component({\r\n            template: __webpack_require__(67),\r\n            styles: [__webpack_require__(68)]\r\n        }), \r\n        __metadata('design:paramtypes', [])\r\n    ], HomeComponent);\r\n    return HomeComponent;\r\n}());\r\nexports.HomeComponent = HomeComponent;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHM/NzFjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6W3JlcXVpcmUoJy4vaG9tZS5jb21wb25lbnQuc2NzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkgeyB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQUFBO0FBRUE7QUFQQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBS0E7QUFBQTtBQUpBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 67:
/***/ function(module, exports) {

	eval("module.exports = \"<h3>Home2</h3>\";//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbD82Y2Q4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8aDM+SG9tZTI8L2gzPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 68:
/***/ function(module, exports) {

	eval("module.exports = \":host h3 {\\n  font-size: 24px;\\n  color: red; }\\n\"//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2Nzcz8wMzgyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI6aG9zdCBoMyB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjb2xvcjogcmVkOyB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\n__export(__webpack_require__(70));\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21lbnUvaW5kZXgudHM/Yzg5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL21lbnUuY29tcG9uZW50JztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG5vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL21lbnUvaW5kZXgudHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar core_1 = __webpack_require__(4);\r\nvar MenuComponent = (function () {\r\n    function MenuComponent() {\r\n    }\r\n    MenuComponent.prototype.ngOnInit = function () { };\r\n    MenuComponent = __decorate([\r\n        core_1.Component({\r\n            template: __webpack_require__(71),\r\n            styles: [__webpack_require__(72)]\r\n        }), \r\n        __metadata('design:paramtypes', [])\r\n    ], MenuComponent);\r\n    return MenuComponent;\r\n}());\r\nexports.MenuComponent = MenuComponent;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQudHM/ZmYyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tZW51LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6W3JlcXVpcmUoJy4vbWVudS5jb21wb25lbnQuc2NzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkgeyB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQUFBO0FBRUE7QUFQQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBS0E7QUFBQTtBQUpBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 71:
/***/ function(module, exports) {

	eval("module.exports = \"<md-card>\\r\\n</md-card>\";//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuaHRtbD84ODJhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8bWQtY2FyZD5cXHJcXG48L21kLWNhcmQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 72:
/***/ function(module, exports) {

	eval("module.exports = \"\"//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2Nzcz9iMDQxIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCJcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nvar router_1 = __webpack_require__(74);\r\nvar home_1 = __webpack_require__(65);\r\nexports.routes = [\r\n    {\r\n        path: '',\r\n        redirectTo: '/home',\r\n        pathMatch: 'full'\r\n    },\r\n    {\r\n        path: 'home',\r\n        component: home_1.HomeComponent\r\n    },\r\n];\r\nexports.routing = router_1.RouterModule.forRoot(exports.routes);\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5yb3V0ZXMudHM/Mzk2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUnO1xyXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBcclxuW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6JycsXHJcbiAgICAgICAgcmVkaXJlY3RUbzonL2hvbWUnLFxyXG4gICAgICAgIHBhdGhNYXRjaDogJ2Z1bGwnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICdob21lJyxcclxuICAgICAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnRcclxuICAgIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgcGF0aDogJ2RhdGEnLFxyXG4gICAgLy8gICAgIGNvbXBvbmVudDogRGF0YU1haW5Db21wb25lbnRcclxuICAgIC8vIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgcGF0aDogJ3NldHRpbmdzJyxcclxuICAgIC8vICAgICBjb21wb25lbnQ6IFNldHRpbmdzTWFpbkNvbXBvbmVudFxyXG4gICAgLy8gfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRpbmcgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9hcHAucm91dGVzLnRzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

});