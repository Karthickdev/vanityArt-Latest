(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reportsip-reportsip-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/reportsip/reportsip.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reportsip/reportsip.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-padding class-headerimg\">\n  <div class=\"ion-text-center ion-text-uppercase title\">REPORTS</div>\n  <ion-toolbar class=\"tool2\">\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"4\" class=\"ion-text-left\" class=\"padd-left-0\">\n          <ion-buttons class=\"back-marg\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\" (click)=\"backToHome()\">BACK</ion-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"2\" class=\"ion-text-center\">\n          <ion-buttons style=\"float: right;\">\n            <ion-button fill='clear' class=\"save-center\"></ion-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"4\" class=\"ion-text-right\">\n          <ion-buttons class=\"clear-marg\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\" (click)=\"formreset()\">CLEAR</ion-button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-no-padding\">\n  <form [formGroup]=\"reportpage\">\n    <ion-row class=\"class-rowpadd\">\n      <ion-col size-xs=\"12\" size-sm=\"3\" size-lg=\"3\">\n        <ion-label>Status</ion-label>\n        <ion-select value='40' class=\"class-status\" #status formControlName=\"status\"\n          (ionChange)=\"onStatusChange(status.value)\">\n          <ion-select-option value=\"0\">All</ion-select-option>\n          <ion-select-option value=\"40\">Ready To Ship</ion-select-option>\n          <ion-select-option value=\"50\">Shipped</ion-select-option>\n        </ion-select>\n        <!-- <ion-select>\n            <ion-select-option *ngFor=\"let item of orderStatus\" [selected]=\"item['selected']\" value=\"item['enumValue']\">\n              {{item['enumName']}}\n            </ion-select-option>\n          </ion-select> -->\n      </ion-col>\n      <ion-col size-xs=\"12\" size-sm=\"3\" size=\"3\">\n        <ion-label position=\"floating\" class=\"lab-font1 lab-color \">Order#</ion-label>\n        <ion-input #reportorder style=\"border: 1px solid gray;height: 40px;top: 4%;\"\n          class=\"ion-text-uppercase lab-font class-status\" type=\"text\" formControlName=\"reportorder\"></ion-input>\n      </ion-col>\n      <ion-col size-xs=\"12\" size-sm=\"3\" size=\"3\">\n        <ion-label position=\"floating\" class=\"lab-font1 lab-color class-status\">Carrier</ion-label>\n        <ion-input #carrier style=\"border: 1px solid gray;height: 40px;top: 4%;\"\n          class=\"ion-text-uppercase lab-font cls-carrier class-status\" type=\"text\" formControlName=\"carrier\">\n        </ion-input>\n      </ion-col>\n\n      <ion-col size-xs=\"12\" size-sm=\"3\" size-lg=\"3\">\n        <ion-label>Warehouse</ion-label>\n\n        <ion-select (ionChange)=\"onSelectedWarehouse()\" formControlName=\"warehouse\" [(ngModel)]=\"selectedWarehouse\">\n          <ion-select-option *ngFor=\"let item of warehouselist\" [value]=\"item['id']\">\n            {{item['warehouseCode']}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n\n    </ion-row>\n    <ion-row class=\"class-rowpadd\">\n      <ion-col size-xs=\"12\" size-sm=\"3\" size=\"3\">\n        <ion-label position=\"floating\" class=\"lab-font1 lab-color class-status\">\n          {{this.frmdate}}</ion-label>\n\n        <ion-datetime display-format=\"MMM DD, YYYY HH:mm\" picker-format=\"MMM DD, YYYY HH:mm\" [(ngModel)]=\"sdate\"\n          class=\"class-border\" formControlName=\"ordercreatedfrom\">\n        </ion-datetime>\n      </ion-col>\n      <ion-col size-xs=\"12\" size-sm=\"3\" size=\"3\">\n        <ion-label position=\"floating\" class=\"lab-font1 lab-color class-status\">{{this.todate}}</ion-label>\n        <ion-datetime display-format=\"MMM DD, YYYY HH:mm\" picker-format=\"MMM DD, YYYY HH:mm\" [(ngModel)]=\"edate\"\n          class=\"class-border\" formControlName=\"ordercreatedto\">\n        </ion-datetime>\n      </ion-col>\n      <ion-col size-xs=\"6\" size-sm=\"3\" size-lg=\"3\" text-right>\n        <ion-button class=\"class-btn\" (click)=\"getreports()\">\n          Search\n        </ion-button>\n      </ion-col>\n      <ion-col size-xs=\"6\" size-sm=\"3\" size-lg=\"3\" text-right>\n        <ion-button class=\"class-btn\" (click)=\"reportssubmit()\">\n          Export\n        </ion-button>\n      </ion-col>\n\n    </ion-row>\n    <!-- <div style=\"overflow-x:auto;\"> -->\n    <div class=\"tablet\">\n      <table *ngIf=\"reportresults != undefined && reportresults.length > 0\">\n        <tbody>\n          <tr style=\"background: #e6e3e0;\">\n            <th style=\"width: 30%;\">\n              <ion-label class=\"lab-font lab-color class-headerrs\">Order#</ion-label>\n            </th>\n            <th style=\"width: 30%;\">\n              <ion-label class=\"lab-font lab-color class-headerrs\">BOL# / Track#</ion-label>\n            </th>\n            <th style=\"width: 25%;\">\n              <ion-label class=\"lab-font lab-color class-headerrs\">Carrier</ion-label>\n            </th>\n            <th style=\"width: 15%;\">\n              <ion-label class=\"lab-font lab-color class-headerrs\">Status</ion-label>\n            </th>\n          </tr>\n          <tr *ngFor=\"let item of reportresults;let i = index\" class=\"rowtab\">\n            <td>\n              <ion-label position=\"floating\" class=\"lab-font lab-color\">\n                {{item.po}} ({{item.customerName}})<br>{{item.batchFilename}}\n              </ion-label>\n            </td>\n            <td>\n              <ion-label position=\"floating\" class=\"lab-font lab-color\">\n                <span *ngIf='item.bol !== undefined'>{{item.bol}} / </span>\n                <span *ngIf='item.trackingNumber !== undefined'>{{item.trackingNumber}}</span><br>Ship Date:\n                {{item.shipDateString}}\n              </ion-label>\n            </td>\n            <td>\n              <ion-label position=\"floating\" class=\"lab-font lab-color\">\n                <span *ngIf='item.carrierEnum == 50 '>{{item.ltlCarrierName}}</span>\n                <span *ngIf='item.carrierEnum != 50 '>{{item.carrier}}</span>\n              </ion-label>\n            </td>\n            <td>\n              <ion-label position=\"floating\" class=\"lab-font lab-color\" [ngClass]=\"{\n                'readtoshipCssStyle':item.orderStatus === 'ShippingLabelGenerated',\n                'ShipCssStyle':item.orderStatus === 'Shipped'}\">\n                {{item.orderStatus}}</ion-label>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class=\"mobile\" *ngIf=\"reportresults != undefined && reportresults.length > 0\">\n\n      <table *ngFor=\"let item of reportresults;let i = index\" class=\"rowtab\">\n        <tbody>\n          <tr>\n            <th>Order#</th>\n            <td>\n              <ion-label position=\"floating\" class=\"lab-font lab-color\">\n                {{item.po}} ({{item.customerName}})<br>{{item.batchFilename}}\n              </ion-label>\n            </td>\n          </tr>\n          <tr>\n            <th>BOL/Trac</th>\n            <td>\n              <ion-label position=\"floating\" class=\"lab-font lab-color\">\n                <span *ngIf='item.bol !== undefined'>{{item.bol}} / </span>\n                <span *ngIf='item.trackingNumber !== undefined'>{{item.trackingNumber}}</span><br>Ship Date:\n                {{item.shipDateString}}\n              </ion-label>\n            </td>\n          </tr>\n          <tr>\n            <th>Carrier</th>\n            <td>\n              <ion-label position=\"floating\" class=\"lab-font lab-color\">\n                <span *ngIf='item.carrierEnum == 50 '>{{item.ltlCarrierName}}</span>\n                <span *ngIf='item.carrierEnum != 50 '>{{item.carrier}}</span>\n              </ion-label>\n            </td>\n          </tr>\n          <tr>\n            <th>Status</th>\n            <td>\n              <ion-label position=\"floating\" class=\"lab-font lab-color\" [ngClass]=\"{\n                  'readtoshipCssStyle':item.orderStatus === 'ShippingLabelGenerated',\n                  'ShipCssStyle':item.orderStatus === 'Shipped'}\">\n                {{item.orderStatus}}</ion-label>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/reportsip/reportsip.module.ts":
/*!***********************************************!*\
  !*** ./src/app/reportsip/reportsip.module.ts ***!
  \***********************************************/
/*! exports provided: ReportsipPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsipPageModule", function() { return ReportsipPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reportsip_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportsip.page */ "./src/app/reportsip/reportsip.page.ts");







const routes = [
    {
        path: '',
        component: _reportsip_page__WEBPACK_IMPORTED_MODULE_6__["ReportsipPage"]
    }
];
let ReportsipPageModule = class ReportsipPageModule {
};
ReportsipPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_reportsip_page__WEBPACK_IMPORTED_MODULE_6__["ReportsipPage"]]
    })
], ReportsipPageModule);



/***/ }),

/***/ "./src/app/reportsip/reportsip.page.scss":
/*!***********************************************!*\
  !*** ./src/app/reportsip/reportsip.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".round {\n  --border-radius: 50%;\n  --vertical-align: middle;\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #088088;\n  font-size: initial;\n  font-size: 25px;\n}\n\n.class-headerimg {\n  background-image: url('bluebg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.back-marg {\n  float: left;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5;\n}\n\n.clear-marg {\n  background: transparent;\n  float: right;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5;\n}\n\n.save-center {\n  border-radius: 50%;\n  font-size: 22px;\n  color: #ffffff;\n  height: 80px;\n  width: 100%;\n  border-radius: 50%;\n  padding: 0 3% 0 3%;\n}\n\n.toggle-color {\n  --ion-color-base: #00BFCC !important;\n}\n\n.label-pos {\n  position: absolute;\n  bottom: 15%;\n}\n\n.class-rowpadd {\n  padding: 1.5% 2%;\n}\n\n.error-message {\n  position: absolute;\n  left: 5%;\n  color: red;\n  font-size: 15px;\n}\n\n.title {\n  font-size: 33px;\n  font-weight: 500;\n  padding-top: 10px;\n  background: #00000000;\n  color: #fff;\n}\n\n.tool2 {\n  --background:#FFFFFF00;\n  --border-width: 0px !important;\n}\n\n.tool1 {\n  position: relative;\n  top: 1%;\n}\n\n.srccroll {\n  height: 200px;\n  overflow: scroll;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.srchgt {\n  height: auto;\n  overflow: hidden;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.lab-font {\n  font-size: 1rem !important;\n  word-break: break-word;\n}\n\n.lab-font1 {\n  font-size: 14px;\n}\n\n.event-font {\n  font-size: 18px;\n}\n\n.event-font-italic {\n  font-size: 16px;\n  color: #333;\n  font-style: italic;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 65px;\n  height: 34px;\n}\n\n.switch input {\n  display: none;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: grey;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 28px;\n  width: 28px;\n  left: 4px;\n  top: 3px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #00BFCC;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(55px);\n  transform: translateX(30px);\n}\n\n.on {\n  display: none;\n}\n\n.off {\n  padding-left: 33px;\n}\n\n.on {\n  padding-right: 25px;\n}\n\n.on, .off {\n  color: white;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  font-size: 13px;\n  font-family: Verdana, sans-serif;\n}\n\ninput:checked + .slider .on {\n  display: block;\n}\n\ninput:checked + .slider .off {\n  display: none;\n}\n\n.slider.rnd {\n  border-radius: 16px;\n}\n\n.slider.rnd:before {\n  border-radius: 14px;\n}\n\n.marginTL10 {\n  margin-left: 20px !important;\n  margin-top: 10px !important;\n}\n\n.marginL15 {\n  margin-left: 35px !important;\n  margin-top: 0px !important;\n}\n\nion-select {\n  border: 1px solid gray;\n  top: 4%;\n}\n\n.class-headerrs {\n  padding: 0px 32px 0px 0px;\n}\n\n.tablet {\n  display: block;\n  margin: 3%;\n}\n\n.mobile {\n  display: none;\n}\n\ntable {\n  width: 100%;\n  border: 1px solid gray;\n  border-spacing: 30px;\n}\n\nth, td {\n  padding: 2% 1%;\n  text-align: left;\n}\n\ntr td {\n  text-align: left;\n}\n\ntr:nth-child(odd) {\n  background-color: #f2f2f2;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .tablet {\n    display: none;\n  }\n\n  .mobile {\n    display: block;\n    margin: 2%;\n  }\n\n  .lab-font {\n    font-size: 17px;\n  }\n\n  tr th, td {\n    text-align: left;\n  }\n\n  th {\n    width: 35%;\n    padding: 2% 4%;\n    background: #e6e3e0;\n  }\n\n  td {\n    width: 65%;\n    padding: 2% 4%;\n  }\n\n  .search {\n    top: 22%;\n    position: relative;\n  }\n\n  tr:nth-child(odd) {\n    background-color: #f2f2f2;\n  }\n\n  .rowtab {\n    margin-bottom: 2%;\n  }\n}\n\n@media only screen and (min-width: 1024px) and (max-width: 1366px) {\n  .search {\n    top: 22%;\n    position: relative;\n    border: 0.1px solid gray;\n    width: 90%;\n    height: 40px;\n    margin-top: 8px;\n  }\n\n  .class-btn {\n    top: 25%;\n    position: relative;\n    left: -7px;\n    width: 211px;\n  }\n}\n\n@media only screen and (max-width: 812px) {\n  .class-btn {\n    top: 25%;\n    position: relative;\n    left: -7px;\n    width: 95%;\n  }\n}\n\n.search {\n  top: 22%;\n  position: relative;\n  border: 0.1px solid gray;\n  width: 90%;\n  height: 40px;\n  margin-top: 8px;\n  color: #131010;\n}\n\n.class-btn {\n  top: 25%;\n  position: relative;\n  left: -7px;\n}\n\n.readtoshipCssStyle {\n  color: red;\n}\n\n.ShipCssStyle {\n  color: green;\n}\n\n.class-border {\n  border: 1px gray solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbmlzdHJhdG9yL0RvY3VtZW50cy92YW5pdHlBcnQtTGF0ZXN0L3NyYy9hcHAvcmVwb3J0c2lwL3JlcG9ydHNpcC5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlcG9ydHNpcC9yZXBvcnRzaXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksb0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNGSjs7QURLQTtFQUNFLDhDQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURLQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFDSSxvQ0FBQTtBQ0ZKOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDRkY7O0FES0E7RUFDSSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDRkY7O0FES0E7RUFDRSxzQkFBQTtFQUNBLDhCQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtFQUNJ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YXBwL3JlcG9ydHNpcC9yZXBvcnRzaXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJ0bi1jb2xvcjogIzAwQkZDQztcclxuJHRleHQtY29sb3I6ICMwNzA3MDc7XHJcblxyXG4ucm91bmQge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwODgwODg7XHJcbiAgICBmb250LXNpemU6IGluaXRpYWw7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5jbGFzcy1oZWFkZXJpbWcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9ibHVlYmcucG5nXCIpIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5iYWNrLW1hcmd7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjUlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjMjljNWM1O1xyXG59XHJcblxyXG4uY2xlYXItbWFyZ3tcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjUlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjMjljNWM1O1xyXG59XHJcblxyXG4uc2F2ZS1jZW50ZXJ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBhZGRpbmc6IDAgMyUgMCAzJTtcclxufVxyXG5cclxuLnRvZ2dsZS1jb2xvcntcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwMEJGQ0MgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhYmVsLXBvc3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxNSU7XHJcbn1cclxuXHJcbi5jbGFzcy1yb3dwYWRke1xyXG4gICAgcGFkZGluZzogMS41JSAyJTtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2V7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUlO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMzNweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwMDAwMDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRvb2wye1xyXG4gIC0tYmFja2dyb3VuZDojRkZGRkZGMDA7XHJcbiAgLS1ib3JkZXItd2lkdGggOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRvb2wxe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDElO1xyXG59XHJcblxyXG4uc3JjY3JvbGx7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI4KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uc3JjaGd0e1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGUgO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmxhYi1mb250e1xyXG4gICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxufVxyXG4ubGFiLWZvbnQxe1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmV2ZW50LWZvbnR7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uZXZlbnQtZm9udC1pdGFsaWN7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLnN3aXRjaCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNjVweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbn1cclxuXHJcbi5zd2l0Y2ggaW5wdXQge2Rpc3BsYXk6bm9uZTt9XHJcblxyXG4uc2xpZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gIHRyYW5zaXRpb246IC40cztcclxufVxyXG5cclxuLnNsaWRlcjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMjhweDtcclxuICB3aWR0aDogMjhweDtcclxuICBsZWZ0OiA0cHg7XHJcbiAgdG9wOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ0bi1jb2xvcjtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7XHJcbn1cclxuXHJcbi5vblxyXG57XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm9mZntcclxuICBwYWRkaW5nLWxlZnQ6MzNweDtcclxufVxyXG5cclxuLm9ue1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5vbiwgLm9mZlxyXG57XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQrIC5zbGlkZXIgLm9uXHJcbntkaXNwbGF5OiBibG9jazt9XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciAub2ZmXHJcbntkaXNwbGF5OiBub25lO31cclxuXHJcbi5zbGlkZXIucm5kIHtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcblxyXG4uc2xpZGVyLnJuZDpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxufVxyXG5cclxuLm1hcmdpblRMMTAge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbiAgXHJcbi5tYXJnaW5MMTUge1xyXG4gIG1hcmdpbi1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDU2OHB4KSB7XHJcbi8vICAgLmxhYi1mb250e1xyXG4vLyAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4vLyAgIH1cclxuLy8gICAuZXZlbnQtZm9udHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTNweDtcclxuLy8gICB9XHJcbiAgXHJcbi8vIH1cclxuLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNTc2cHgpIHtcclxuLy8gICAgIC5jbHMtY2FycmllcntcclxuLy8gICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbiAgaW9uLXNlbGVjdHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICB0b3A6IDQlOyAgIFxyXG4gIH1cclxuICAuY2xhc3MtaGVhZGVycnN7XHJcbiAgICBwYWRkaW5nOiAwcHggMzJweCAwcHggMHB4O1xyXG4gICAgLy9jb2xvcjogIzc5NzM3MztcclxuICB9ICBcclxuIFxyXG4gIC50YWJsZXR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMyU7XHJcblxyXG4gIH1cclxuICAubW9iaWxle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAvLyBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgLy9ib3JkZXI6IDAuNXB4IHNvbGlkICNhMmE0YWI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5OyAgICBcclxuICAgIGJvcmRlci1zcGFjaW5nOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgdGgsIHRkIHtcclxuICAgIHBhZGRpbmc6IDIlIDElO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgdHIgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgdHI6bnRoLWNoaWxkKG9kZCkge2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOjMyMHB4ICkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXsgICBcclxuICAgIC50YWJsZXR7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubW9iaWxle1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAyJTtcclxuICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIH1cclxuICAgIC5sYWItZm9udHtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuICAvLyB0YWJsZSA+IHRib2R5e1xyXG4gIC8vICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiKDI1NSwgMjI4LCAyMjgpIDtcclxuICAvLyB9XHJcblxyXG4gIHRyIHRoLCB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgdGgge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIHBhZGRpbmc6IDIlIDQlO1xyXG4gICAgYmFja2dyb3VuZDogI2U2ZTNlMDtcclxuICB9XHJcblxyXG4gIHRkIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBwYWRkaW5nOiAyJSA0JTtcclxuICB9XHJcblxyXG4gIC5zZWFyY2h7XHJcbiAgICB0b3A6IDIyJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgdHI6bnRoLWNoaWxkKG9kZCkge2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG4gIC5yb3d0YWIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgfVxyXG59XHJcbi8vICAgdGFibGUgPnRib2R5ID50ciA+dGh7XHJcbi8vICAgICAgIHBhZGRpbmc6IDElO1xyXG4vLyAgIH1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDEwMjRweCkgYW5kIChtYXgtd2lkdGggOiAxMzY2cHgpe1xyXG4gIC5zZWFyY2h7XHJcbiAgICB0b3A6IDIyJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogMC4xcHggc29saWQgZ3JheTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgfVxyXG4gIC5jbGFzcy1idG57XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC03cHg7XHJcbiAgICB3aWR0aDogMjExcHg7XHJcbiAgfVxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggIDo4MTJweCl7XHJcbiAgLmNsYXNzLWJ0bntcclxuICAgIHRvcDogMjUlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTdweDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgfVxyXG4vLyAgIC5sYWItZm9udHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTdweDtcclxuLy8gICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuLy8gfVxyXG5cclxufVxyXG5cclxuXHJcbi5zZWFyY2h7XHJcbiAgdG9wOiAyMiU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogMC4xcHggc29saWQgZ3JheTtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgY29sb3IgOiAjMTMxMDEwO1xyXG59XHJcbi5jbGFzcy1idG57XHJcbiAgdG9wOiAyNSU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IC03cHg7XHJcbn1cclxuLnJlYWR0b3NoaXBDc3NTdHlsZXtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uU2hpcENzc1N0eWxle1xyXG4gIGNvbG9yOmdyZWVuO1xyXG59XHJcbi5jbGFzcy1ib3JkZXJ7XHJcbiAgYm9yZGVyOiAxcHggZ3JheSBzb2xpZDtcclxufSIsIi5yb3VuZCB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICMwODgwODg7XG4gIGZvbnQtc2l6ZTogaW5pdGlhbDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uY2xhc3MtaGVhZGVyaW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2JsdWViZy5wbmdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5iYWNrLW1hcmcge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI1JTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzI5YzVjNTtcbn1cblxuLmNsZWFyLW1hcmcge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjUlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjljNWM1O1xufVxuXG4uc2F2ZS1jZW50ZXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMCAzJSAwIDMlO1xufVxuXG4udG9nZ2xlLWNvbG9yIHtcbiAgLS1pb24tY29sb3ItYmFzZTogIzAwQkZDQyAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWwtcG9zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1JTtcbn1cblxuLmNsYXNzLXJvd3BhZGQge1xuICBwYWRkaW5nOiAxLjUlIDIlO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNSU7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRvb2wyIHtcbiAgLS1iYWNrZ3JvdW5kOiNGRkZGRkYwMDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udG9vbDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMSU7XG59XG5cbi5zcmNjcm9sbCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNyY2hndCB7XG4gIGhlaWdodDogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgei1pbmRleDogOTk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubGFiLWZvbnQge1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLmxhYi1mb250MSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmV2ZW50LWZvbnQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ldmVudC1mb250LWl0YWxpYyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4uc3dpdGNoIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG4gIGxlZnQ6IDRweDtcbiAgdG9wOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQkZDQztcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xufVxuXG4ub24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ub2ZmIHtcbiAgcGFkZGluZy1sZWZ0OiAzM3B4O1xufVxuXG4ub24ge1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xufVxuXG4ub24sIC5vZmYge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIC5vbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciAub2ZmIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlci5ybmQge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG4uc2xpZGVyLnJuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xufVxuXG4ubWFyZ2luVEwxMCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLm1hcmdpbkwxNSB7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgdG9wOiA0JTtcbn1cblxuLmNsYXNzLWhlYWRlcnJzIHtcbiAgcGFkZGluZzogMHB4IDMycHggMHB4IDBweDtcbn1cblxuLnRhYmxldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDMlO1xufVxuXG4ubW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXNwYWNpbmc6IDMwcHg7XG59XG5cbnRoLCB0ZCB7XG4gIHBhZGRpbmc6IDIlIDElO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50ciB0ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC50YWJsZXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDIlO1xuICB9XG5cbiAgLmxhYi1mb250IHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gIH1cblxuICB0ciB0aCwgdGQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICB0aCB7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBwYWRkaW5nOiAyJSA0JTtcbiAgICBiYWNrZ3JvdW5kOiAjZTZlM2UwO1xuICB9XG5cbiAgdGQge1xuICAgIHdpZHRoOiA2NSU7XG4gICAgcGFkZGluZzogMiUgNCU7XG4gIH1cblxuICAuc2VhcmNoIHtcbiAgICB0b3A6IDIyJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgfVxuXG4gIC5yb3d0YWIge1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAuc2VhcmNoIHtcbiAgICB0b3A6IDIyJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiAwLjFweCBzb2xpZCBncmF5O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgfVxuXG4gIC5jbGFzcy1idG4ge1xuICAgIHRvcDogMjUlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtN3B4O1xuICAgIHdpZHRoOiAyMTFweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTJweCkge1xuICAuY2xhc3MtYnRuIHtcbiAgICB0b3A6IDI1JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogLTdweDtcbiAgICB3aWR0aDogOTUlO1xuICB9XG59XG4uc2VhcmNoIHtcbiAgdG9wOiAyMiU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAwLjFweCBzb2xpZCBncmF5O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgY29sb3I6ICMxMzEwMTA7XG59XG5cbi5jbGFzcy1idG4ge1xuICB0b3A6IDI1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtN3B4O1xufVxuXG4ucmVhZHRvc2hpcENzc1N0eWxlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLlNoaXBDc3NTdHlsZSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmNsYXNzLWJvcmRlciB7XG4gIGJvcmRlcjogMXB4IGdyYXkgc29saWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/reportsip/reportsip.page.ts":
/*!*********************************************!*\
  !*** ./src/app/reportsip/reportsip.page.ts ***!
  \*********************************************/
/*! exports provided: ReportsipPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsipPage", function() { return ReportsipPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apiservice.service */ "./src/app/apiservice.service.ts");






// import { DatePicker } from '@ionic-native/date-picker';
let ReportsipPage = class ReportsipPage {
    constructor(formbuilder, routeto, Vanityartservice, routerOutlet
    // private datePicker: DatePicker,
    ) {
        this.formbuilder = formbuilder;
        this.routeto = routeto;
        this.Vanityartservice = Vanityartservice;
        this.routerOutlet = routerOutlet;
        this.sdate = new Date().toLocaleDateString();
        this.warehouseval = "hi";
        this.reportpage = this.formbuilder.group({
            status: ['40', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            reportorder: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            carrier: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            warehouse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            ordercreatedfrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            ordercreatedto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
        this.reportpageMobile = this.formbuilder.group({
            status: ['40', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            reportorder: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            carrier: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            warehouse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    }
    ngOnInit() {
        this.frmdate = "OrderReceived From";
        this.todate = "OrderReceived To";
        this.userId = JSON.parse(localStorage.getItem(("Id")));
        // this.getOrderStatusList();
        this.getWarehouseList();
        this.reportpage.controls['warehouse'].setValue(this.selectedWarehouse);
        let date = new Date();
        this.edate = new Date(date.setDate(date.getDate() + 1)).toLocaleDateString();
        this.routerOutlet.swipeGesture = false;
    }
    onSelectedWarehouse() {
        this.reportpage.controls['warehouse'].setValue(this.selectedWarehouse);
    }
    formreset() {
        let date = new Date();
        console.log(this.reportpage.value);
        this.reportpage.reset();
        setTimeout(() => {
            this.reportresults = [];
            this.sdate = date.toLocaleDateString();
            this.edate = new Date(date.setDate(date.getDate() + 1)).toLocaleDateString();
            this.reportpage.patchValue({ status: '40' });
            this.reportpage.patchValue({ warehouse: '1000' });
        }, 300);
    }
    //Method to go back to home page
    backToHome() {
        this.routeto.navigate(['/menuitems']);
    }
    getreports() {
        this.reportresults = [];
        var now = new Date();
        var sdate = now.toLocaleDateString();
        var stime = now.toLocaleTimeString();
        this.starttime = stime.split(" ")[0];
        this.startdate = this.reportpage.value.ordercreatedfrom;
        this.enddate = this.reportpage.value.ordercreatedto;
        var repporting = this.Vanityartservice.baseUrl + this.Vanityartservice.getReport;
        let dataParam = {
            "Order": this.reportpage.value.reportorder,
            "StatusEnum": this.reportpage.value.status,
            "wareHouseid": this.reportpage.value.warehouse ? this.reportpage.value.warehouse : '',
            "CarrierEnum": this.reportpage.value.carrier,
            "OrderCreatedFromDate": this.startdate.replace('+05:30', ' ').replace("T", " "),
            "OrderCreatedToDate": this.enddate.replace('+05:30', ' ').replace("T", " ")
        };
        console.log("resports", dataParam);
        this.Vanityartservice.present();
        this.Vanityartservice.ajaxCallService(repporting, "post", dataParam).then(resp => {
            this.Vanityartservice.dismiss();
            if (Array.isArray(resp)) {
                this.reportresults = resp;
                // console.log("isArray");
                // console.log("resp", resp[0]['batchFilename'].split("_")[1] + "_" + resp[0]['batchFilename'].split("_")[2])
                // var tempArr = [];
                // for (let idx of this.reportresults) {
                //   this.povalue = idx['batchFilename'].split("_")[1] + "_" + idx['batchFilename'].split("_")[2]
                //   tempArr.push(this.povalue);
                //   console.log("reporttss", tempArr)
                // }
            }
            else {
                // console.log("isNotArray");
                // if (resp['message'] == 'No data found for the given search critiera.') {
                //   this.reportresults = [];
                //   this.Vanityartservice.PresentToast(resp['message'], "danger");
                // } else if (resp['status'] == 'Success') {
                //   this.Vanityartservice.PresentToast(resp['message'], "danger");
                // }
                this.reportresults = [];
                this.Vanityartservice.PresentToast(resp['message'], "danger");
            }
        }).catch(err => {
            this.Vanityartservice.dismiss();
        });
    }
    reportssubmit() {
        var exportrepporting = this.Vanityartservice.baseUrl + this.Vanityartservice.exportreports;
        let dataParam = {
            "Order": this.reportpage.value.reportorder,
            "StatusEnum": this.reportpage.value.status,
            "wareHouseid": this.reportpage.value.warehouse,
            "CarrierEnum": this.reportpage.value.carrier,
            "Userid": this.userId,
            "OrderCreatedFromDate": this.startdate,
            "OrderCreatedToDate": this.enddate
        };
        console.log(dataParam);
        this.Vanityartservice.present();
        this.Vanityartservice.ajaxCallService(exportrepporting, "post", dataParam).then(resp => {
            this.respData = resp;
            console.log("res", this.respData);
            if (resp['status'] = "Success") {
                this.Vanityartservice.PresentToast(resp['message'], "success");
            }
            this.Vanityartservice.dismiss();
        });
    }
    //Method to get order status lists
    getOrderStatusList() {
        let url = this.Vanityartservice.baseUrl + this.Vanityartservice.orderList;
        this.Vanityartservice.present();
        this.Vanityartservice.ajaxCallService(url, "post", '').then(resp => {
            this.respData = resp;
            console.log("res", this.respData);
            this.orderStatus = resp;
            this.orderStatus.map((item, i) => {
                if (i == 0) {
                    item['selected'] = true;
                }
                else {
                    item['selected'] = false;
                }
            });
            this.orderStatus.push({ enumName: 'All', enumValue: '0', selected: false });
            this.orderStatus.push({ enumName: 'Ready to Ship', enumValue: '40', selected: false });
            this.orderStatus.push({ enumName: 'Shipped', enumValue: '50', selected: false });
            console.log(this.orderStatus);
            this.Vanityartservice.dismiss();
        });
    }
    onStatusChange(svalue) {
        this.changevalue = svalue;
        console.log("Values", this.changevalue);
        if (svalue == 50) {
            this.frmdate = "OrderShipped From";
            this.todate = "OrderShipped To";
        }
        else if (svalue == 40) {
            this.frmdate = "OrderReceived From";
            this.todate = "OrderReceived To";
        }
        else if (svalue == 0) {
            this.frmdate = "OrderReceived From";
            this.todate = "OrderReceived To";
        }
    }
    //Method to get Warehouse List
    getWarehouseList() {
        let url = this.Vanityartservice.baseUrl + this.Vanityartservice.warehouseList;
        this.Vanityartservice.ajaxCallService(url, "post", '').then(resp => {
            this.warehouselist = resp;
            console.log(resp);
            this.warehouseval = resp[0]['warehouseCode'];
            this.reportpage.patchValue({ warehouse: resp[0]['id'] });
            console.log(this.warehouseval);
            for (let idx of this.warehouselist) {
                if (idx['warehouseCode'] == this.warehouseval) {
                    this.wareID = idx['id'];
                }
                console.log(this.wareID);
            }
        });
    }
};
ReportsipPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _apiservice_service__WEBPACK_IMPORTED_MODULE_5__["ApiserviceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRouterOutlet"] }
];
ReportsipPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reportsip',
        template: __webpack_require__(/*! raw-loader!./reportsip.page.html */ "./node_modules/raw-loader/index.js!./src/app/reportsip/reportsip.page.html"),
        styles: [__webpack_require__(/*! ./reportsip.page.scss */ "./src/app/reportsip/reportsip.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _apiservice_service__WEBPACK_IMPORTED_MODULE_5__["ApiserviceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRouterOutlet"]
        // private datePicker: DatePicker,
    ])
], ReportsipPage);



/***/ })

}]);
//# sourceMappingURL=reportsip-reportsip-module-es2015.js.map