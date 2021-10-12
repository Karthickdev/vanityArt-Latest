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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menuitems_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menuitems.page */ "./src/app/menuitems/menuitems.page.ts");







const routes = [
    {
        path: '',
        component: _menuitems_page__WEBPACK_IMPORTED_MODULE_6__["MenuitemsPage"]
    }
];
let MenuitemsPageModule = class MenuitemsPageModule {
};
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



/***/ }),

/***/ "./src/app/menuitems/menuitems.page.scss":
/*!***********************************************!*\
  !*** ./src/app/menuitems/menuitems.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".class-headerimg {\n  background-image: url('homebg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  height: 250px !important;\n}\n\n.title {\n  font-size: 24px;\n  font-weight: 600;\n}\n\n.btn-height {\n  height: 70;\n  width: 100%;\n  color: #070707;\n  border-radius: 8px;\n  font-size: 24px;\n  font-weight: 600;\n}\n\n.opal-icon {\n  height: 38px;\n  width: 38px;\n  position: absolute;\n  top: 3px;\n  left: 10px;\n}\n\n.scanner-svg {\n  height: 40px;\n  width: 40px;\n}\n\n.user-img {\n  height: 150px;\n  width: 150px;\n  margin: auto;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 568px) {\n  .scanner-svg {\n    height: 25px;\n    width: 25px;\n  }\n\n  .btn-height {\n    height: 80px;\n    width: 100%;\n    color: #070707;\n    font-size: 18px;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 667px) {\n  .scanner-svg {\n    height: 25px;\n    width: 25px;\n  }\n\n  .btn-height {\n    height: 80px;\n    width: 100%;\n    color: #070707;\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjA2MDE4L0RvY3VtZW50cy92YW5pdHlBcnQtTGF0ZXN0L3NyYy9hcHAvbWVudWl0ZW1zL21lbnVpdGVtcy5wYWdlLnNjc3MiLCJzcmMvYXBwL21lbnVpdGVtcy9tZW51aXRlbXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksOENBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtBQ0ZKOztBRElBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDREo7O0FER0E7RUFDSTtJQUNJLFlBQUE7SUFDQSxXQUFBO0VDQU47O0VER0U7SUFDSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VDQU47QUFDRjs7QURFQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLFdBQUE7RUNBTjs7RURHRTtJQUNJLFlBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUNBTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWVudWl0ZW1zL21lbnVpdGVtcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkd2hpdGUtY29sb3I6ICNmZmY7XHJcbiRoZWlnaHQxMDA6IDEwMCU7XHJcblxyXG4uY2xhc3MtaGVhZGVyaW1ne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2hvbWViZy5wbmdcIikhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDI1MHB4IWltcG9ydGFudDtcclxufVxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmJ0bi1oZWlnaHR7XHJcbiAgICBoZWlnaHQ6IDcwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogIzA3MDcwNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5vcGFsLWljb257XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICB3aWR0aDogMzhweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogM3B4O1xyXG4gICAgbGVmdDogMTBweDtcclxufVxyXG5cclxuLnNjYW5uZXItc3Zne1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbi51c2VyLWltZ3tcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA1NjhweCl7XHJcbiAgICAuc2Nhbm5lci1zdmd7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHdpZHRoOiAyNXB4OztcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWhlaWdodHtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6ICMwNzA3MDc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4XHJcbiAgICB9ICAgIFxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOiA2NjdweCl7XHJcbiAgICAuc2Nhbm5lci1zdmd7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHdpZHRoOiAyNXB4OztcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWhlaWdodHtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6ICMwNzA3MDc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4XHJcbiAgICB9ICAgIFxyXG5cclxufVxyXG4iLCIuY2xhc3MtaGVhZGVyaW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2hvbWViZy5wbmdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjUwcHggIWltcG9ydGFudDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYnRuLWhlaWdodCB7XG4gIGhlaWdodDogNzA7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzA3MDcwNztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5vcGFsLWljb24ge1xuICBoZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiAzOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiAxMHB4O1xufVxuXG4uc2Nhbm5lci1zdmcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4udXNlci1pbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDU2OHB4KSB7XG4gIC5zY2FubmVyLXN2ZyB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICB9XG5cbiAgLmJ0bi1oZWlnaHQge1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogIzA3MDcwNztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOiA2NjdweCkge1xuICAuc2Nhbm5lci1zdmcge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgfVxuXG4gIC5idG4taGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICMwNzA3MDc7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apiservice.service */ "./src/app/apiservice.service.ts");





let MenuitemsPage = class MenuitemsPage {
    constructor(routeto, Vanityartservice, routerOutlet) {
        this.routeto = routeto;
        this.Vanityartservice = Vanityartservice;
        this.routerOutlet = routerOutlet;
    }
    ngOnInit() {
        let id = JSON.parse(localStorage.getItem("Id"));
        this.routerOutlet.swipeGesture = false;
    }
    gotohomepage() {
        this.routeto.navigate(["/login"]);
    }
    gotobolscan() {
        this.routeto.navigate(["/bolscanning"]);
    }
    gototracking() {
        this.routeto.navigate(["/tracking"]);
    }
    gotoreports() {
        this.routeto.navigate(["/reportsip"]);
    }
    gotoreturns() {
        this.routeto.navigate(["/scanreturns"]);
    }
};
MenuitemsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"] }
];
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



/***/ })

}]);
//# sourceMappingURL=menuitems-menuitems-module-es2015.js.map