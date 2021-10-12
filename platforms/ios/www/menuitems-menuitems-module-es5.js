(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menuitems-menuitems-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/menuitems/menuitems.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menuitems/menuitems.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"class-headerimg\">\n  <div class=\"ion-text-center ion-text-uppercase title\" ></div>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"ion-padding ion-text-center\">\n  </div>\n  <ion-grid>\n    <ion-row class=\"ion-margin-vertical ion-padding-vertical\">\n      <ion-col size=\"1\" class=\"ion-padding-vertical ion-text-center\"></ion-col>\n      <ion-col size=\"2\" class=\"ion-padding-vertical ion-text-center\" style=\"padding-right: 0\">\n        <ion-button size=\"large\" class=\"ion-text-uppercase btn-height\" color=\"dark\" fill=\"outline\" \n          style=\"background: #C3DBB7\">\n          <ion-thumbnail class=\"scanner-svg\">\n            <img src=\"../../assets/icon/delivery-truck.svg\">\n          </ion-thumbnail>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"8\" class=\"ion-padding-vertical ion-text-center\" style=\"padding-left: 0\">\n        <ion-button size=\"large\" class=\"ion-text-uppercase btn-height\" color=\"dark\" fill=\"outline\" \n          style=\"background: #C3DBB7\" (click)=\"gotobolscan()\">\n          BOL Scan\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\" class=\"ion-padding-vertical ion-text-center\"></ion-col>\n      <ion-col size=\"1\" class=\"ion-padding-vertical ion-text-center\"></ion-col>\n      <ion-col size=\"2\" class=\"ion-padding-vertical ion-text-center\" style=\"padding-right: 0\">\n        <ion-button size=\"large\" class=\"ion-text-uppercase btn-height\" color=\"dark\" fill=\"outline\" style=\"background: #00BFCC\"\n          >\n          <ion-thumbnail class=\"scanner-svg\">\n            <img src=\"../../assets/icon/route.svg\">\n          </ion-thumbnail>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"8\" class=\"ion-padding-vertical ion-text-center\" style=\"padding-left: 0\">\n        <ion-button size=\"large\" class=\"ion-text-uppercase btn-height\" color=\"dark\" fill=\"outline\" style=\"background: #00BFCC\"\n           (click)=\"gototracking()\">\n          Tracking # Scan\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\" class=\"ion-padding-vertical ion-text-center\"></ion-col>\n      <ion-col size=\"1\" class=\"ion-padding-vertical ion-text-center\"></ion-col>\n      <ion-col size=\"2\" class=\"ion-padding-vertical ion-text-center\" style=\"padding-right: 0\">\n        <ion-button size=\"large\" class=\"ion-text-uppercase btn-height\" color=\"dark\" fill=\"outline\" style=\"background: #FC6864\"\n          >\n          <ion-thumbnail class=\"scanner-svg\">\n            <img src=\"../../assets/icon/analysis.svg\">\n          </ion-thumbnail>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"8\" class=\"ion-padding-vertical ion-text-center\" style=\"padding-left: 0\">\n        <ion-button size=\"large\" class=\"ion-text-uppercase btn-height\" color=\"dark\" fill=\"outline\" style=\"background: #FC6864\"\n           (click)=\"gotoreports()\">\n          <span>\n            Reports\n          </span>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\" class=\"ion-padding-vertical ion-text-center\"></ion-col>\n      <ion-col size=\"1\" class=\"ion-padding-vertical ion-text-center\"></ion-col>\n      <ion-col size=\"2\" class=\"ion-padding-vertical ion-text-center\" style=\"padding-right: 0\">\n        <ion-button size=\"large\" class=\"ion-text-uppercase btn-height\" color=\"dark\" fill=\"outline\" style=\"background: #1db4ad\"\n          >\n          <ion-thumbnail class=\"scanner-svg\">\n            <img src=\"../../assets/icon/analysis.svg\">\n          </ion-thumbnail>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"8\" class=\"ion-padding-vertical ion-text-center\" style=\"padding-left: 0\">\n        <ion-button size=\"large\" class=\"ion-text-uppercase btn-height\" color=\"dark\" fill=\"outline\" style=\"background: #1db4ad\"\n           (click)=\"gotoreturns()\">\n          <span>\n            Returns\n          </span>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\" class=\"ion-padding-vertical ion-text-center\"></ion-col>\n      <ion-col size=\"8\" class=\"ion-padding-vertical ion-text-center\"></ion-col>\n      <ion-col size=\"3\" class=\"ion-padding-vertical ion-text-center\">\n        <ion-button size=\"large\" class=\"ion-text-uppercase btn-height\" color=\"dark\" fill=\"outline\" style=\"background: #ffffff\"\n          (click)=\"gotohomepage()\">\n          <ion-thumbnail class=\"scanner-svg\">\n            <img src=\"../../assets/icon/exit-door.svg\">\n          </ion-thumbnail>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\" class=\"ion-padding-vertical ion-text-center\"></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/menuitems/menuitems.module.ts":
/*!***********************************************!*\
  !*** ./src/app/menuitems/menuitems.module.ts ***!
  \***********************************************/
/*! exports provided: MenuitemsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuitemsPageModule", function() { return MenuitemsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menuitems_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menuitems.page */ "./src/app/menuitems/menuitems.page.ts");







var routes = [
    {
        path: '',
        component: _menuitems_page__WEBPACK_IMPORTED_MODULE_6__["MenuitemsPage"]
    }
];
var MenuitemsPageModule = /** @class */ (function () {
    function MenuitemsPageModule() {
    }
    MenuitemsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_menuitems_page__WEBPACK_IMPORTED_MODULE_6__["MenuitemsPage"]]
        })
    ], MenuitemsPageModule);
    return MenuitemsPageModule;
}());



/***/ }),

/***/ "./src/app/menuitems/menuitems.page.scss":
/*!***********************************************!*\
  !*** ./src/app/menuitems/menuitems.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".class-headerimg {\n  background-image: url('homebg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  height: 250px !important;\n}\n\n.title {\n  font-size: 24px;\n  font-weight: 600;\n}\n\n.btn-height {\n  height: 70;\n  width: 100%;\n  color: #070707;\n  border-radius: 8px;\n  font-size: 24px;\n  font-weight: 600;\n}\n\n.opal-icon {\n  height: 38px;\n  width: 38px;\n  position: absolute;\n  top: 3px;\n  left: 10px;\n}\n\n.scanner-svg {\n  height: 40px;\n  width: 40px;\n}\n\n.user-img {\n  height: 150px;\n  width: 150px;\n  margin: auto;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 568px) {\n  .scanner-svg {\n    height: 25px;\n    width: 25px;\n  }\n\n  .btn-height {\n    height: 80px;\n    width: 100%;\n    color: #070707;\n    font-size: 18px;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 667px) {\n  .scanner-svg {\n    height: 25px;\n    width: 25px;\n  }\n\n  .btn-height {\n    height: 80px;\n    width: 100%;\n    color: #070707;\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTgxMTgwL0RvY3VtZW50cy92YW5pdHlBcnQtbGF0ZXN0L3Zhbml0eUFydC1MYXRlc3Qvc3JjL2FwcC9tZW51aXRlbXMvbWVudWl0ZW1zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWVudWl0ZW1zL21lbnVpdGVtcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSw4Q0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0FDRko7O0FESUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDREo7O0FESUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNESjs7QURHQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLFdBQUE7RUNBTjs7RURHRTtJQUNJLFlBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUNBTjtBQUNGOztBREVBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsV0FBQTtFQ0FOOztFREdFO0lBQ0ksWUFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQ0FOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tZW51aXRlbXMvbWVudWl0ZW1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR3aGl0ZS1jb2xvcjogI2ZmZjtcclxuJGhlaWdodDEwMDogMTAwJTtcclxuXHJcbi5jbGFzcy1oZWFkZXJpbWd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaG9tZWJnLnBuZ1wiKSFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogMjUwcHghaW1wb3J0YW50O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYnRuLWhlaWdodHtcclxuICAgIGhlaWdodDogNzA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjMDcwNzA3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLm9wYWwtaWNvbntcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzcHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uc2Nhbm5lci1zdmd7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuLnVzZXItaW1ne1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG1hcmdpbjogYXV0bzs7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDU2OHB4KXtcclxuICAgIC5zY2FubmVyLXN2Z3tcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4taGVpZ2h0e1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjb2xvcjogIzA3MDcwNztcclxuICAgICAgICBmb250LXNpemU6IDE4cHhcclxuICAgIH0gICAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtd2lkdGg6IDY2N3B4KXtcclxuICAgIC5zY2FubmVyLXN2Z3tcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4taGVpZ2h0e1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjb2xvcjogIzA3MDcwNztcclxuICAgICAgICBmb250LXNpemU6IDE4cHhcclxuICAgIH0gICAgXHJcblxyXG59XHJcbiIsIi5jbGFzcy1oZWFkZXJpbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaG9tZWJnLnBuZ1wiKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNTBweCAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5idG4taGVpZ2h0IHtcbiAgaGVpZ2h0OiA3MDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjMDcwNzA3O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm9wYWwtaWNvbiB7XG4gIGhlaWdodDogMzhweDtcbiAgd2lkdGg6IDM4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDEwcHg7XG59XG5cbi5zY2FubmVyLXN2ZyB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi51c2VyLWltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNTY4cHgpIHtcbiAgLnNjYW5uZXItc3ZnIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cblxuICAuYnRuLWhlaWdodCB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjMDcwNzA3O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtd2lkdGg6IDY2N3B4KSB7XG4gIC5zY2FubmVyLXN2ZyB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICB9XG5cbiAgLmJ0bi1oZWlnaHQge1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogIzA3MDcwNztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/menuitems/menuitems.page.ts":
/*!*********************************************!*\
  !*** ./src/app/menuitems/menuitems.page.ts ***!
  \*********************************************/
/*! exports provided: MenuitemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuitemsPage", function() { return MenuitemsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apiservice.service */ "./src/app/apiservice.service.ts");





var MenuitemsPage = /** @class */ (function () {
    function MenuitemsPage(routeto, Vanityartservice, routerOutlet) {
        this.routeto = routeto;
        this.Vanityartservice = Vanityartservice;
        this.routerOutlet = routerOutlet;
    }
    MenuitemsPage.prototype.ngOnInit = function () {
        var id = JSON.parse(localStorage.getItem("Id"));
        this.routerOutlet.swipeGesture = false;
    };
    MenuitemsPage.prototype.gotohomepage = function () {
        this.routeto.navigate(["/login"]);
    };
    MenuitemsPage.prototype.gotobolscan = function () {
        this.routeto.navigate(["/bolscanning"]);
    };
    MenuitemsPage.prototype.gototracking = function () {
        this.routeto.navigate(["/tracking"]);
    };
    MenuitemsPage.prototype.gotoreports = function () {
        this.routeto.navigate(["/reportsip"]);
    };
    MenuitemsPage.prototype.gotoreturns = function () {
        this.routeto.navigate(["/scanreturns"]);
    };
    MenuitemsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"] }
    ]; };
    MenuitemsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menuitems',
            template: __webpack_require__(/*! raw-loader!./menuitems.page.html */ "./node_modules/raw-loader/index.js!./src/app/menuitems/menuitems.page.html"),
            styles: [__webpack_require__(/*! ./menuitems.page.scss */ "./src/app/menuitems/menuitems.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"]])
    ], MenuitemsPage);
    return MenuitemsPage;
}());



/***/ })

}]);
//# sourceMappingURL=menuitems-menuitems-module-es5.js.map