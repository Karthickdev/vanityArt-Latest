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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reportsip_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportsip.page */ "./src/app/reportsip/reportsip.page.ts");







var routes = [
    {
        path: '',
        component: _reportsip_page__WEBPACK_IMPORTED_MODULE_6__["ReportsipPage"]
    }
];
var ReportsipPageModule = /** @class */ (function () {
    function ReportsipPageModule() {
    }
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
    return ReportsipPageModule;
}());



/***/ }),

/***/ "./src/app/reportsip/reportsip.page.scss":
/*!***********************************************!*\
  !*** ./src/app/reportsip/reportsip.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".round {\n  --border-radius: 50%;\n  --vertical-align: middle;\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #088088;\n  font-size: initial;\n  font-size: 25px;\n}\n\n.class-headerimg {\n  background-image: url('bluebg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.back-marg {\n  float: left;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5;\n}\n\n.clear-marg {\n  background: transparent;\n  float: right;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5;\n}\n\n.save-center {\n  border-radius: 50%;\n  font-size: 22px;\n  color: #ffffff;\n  height: 80px;\n  width: 100%;\n  border-radius: 50%;\n  padding: 0 3% 0 3%;\n}\n\n.toggle-color {\n  --ion-color-base: #00BFCC !important;\n}\n\n.label-pos {\n  position: absolute;\n  bottom: 15%;\n}\n\n.class-rowpadd {\n  padding: 1.5% 2%;\n}\n\n.error-message {\n  position: absolute;\n  left: 5%;\n  color: red;\n  font-size: 15px;\n}\n\n.title {\n  font-size: 33px;\n  font-weight: 500;\n  padding-top: 10px;\n  background: #00000000;\n  color: #fff;\n}\n\n.tool2 {\n  --background:#FFFFFF00;\n  --border-width: 0px !important;\n}\n\n.tool1 {\n  position: relative;\n  top: 1%;\n}\n\n.srccroll {\n  height: 200px;\n  overflow: scroll;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.srchgt {\n  height: auto;\n  overflow: hidden;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.lab-font {\n  font-size: 1rem !important;\n  word-break: break-word;\n}\n\n.lab-font1 {\n  font-size: 14px;\n}\n\n.event-font {\n  font-size: 18px;\n}\n\n.event-font-italic {\n  font-size: 16px;\n  color: #333;\n  font-style: italic;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 65px;\n  height: 34px;\n}\n\n.switch input {\n  display: none;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: grey;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 28px;\n  width: 28px;\n  left: 4px;\n  top: 3px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #00BFCC;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(55px);\n  transform: translateX(30px);\n}\n\n.on {\n  display: none;\n}\n\n.off {\n  padding-left: 33px;\n}\n\n.on {\n  padding-right: 25px;\n}\n\n.on, .off {\n  color: white;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  font-size: 13px;\n  font-family: Verdana, sans-serif;\n}\n\ninput:checked + .slider .on {\n  display: block;\n}\n\ninput:checked + .slider .off {\n  display: none;\n}\n\n.slider.rnd {\n  border-radius: 16px;\n}\n\n.slider.rnd:before {\n  border-radius: 14px;\n}\n\n.marginTL10 {\n  margin-left: 20px !important;\n  margin-top: 10px !important;\n}\n\n.marginL15 {\n  margin-left: 35px !important;\n  margin-top: 0px !important;\n}\n\nion-select {\n  border: 1px solid gray;\n  top: 4%;\n}\n\n.class-headerrs {\n  padding: 0px 32px 0px 0px;\n}\n\n.tablet {\n  display: block;\n  margin: 3%;\n}\n\n.mobile {\n  display: none;\n}\n\ntable {\n  width: 100%;\n  border: 1px solid gray;\n  border-spacing: 30px;\n}\n\nth, td {\n  padding: 2% 1%;\n  text-align: left;\n}\n\ntr td {\n  text-align: left;\n}\n\ntr:nth-child(odd) {\n  background-color: #f2f2f2;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .tablet {\n    display: none;\n  }\n\n  .mobile {\n    display: block;\n    margin: 2%;\n  }\n\n  .lab-font {\n    font-size: 17px;\n  }\n\n  tr th, td {\n    text-align: left;\n  }\n\n  th {\n    width: 35%;\n    padding: 2% 4%;\n    background: #e6e3e0;\n  }\n\n  td {\n    width: 65%;\n    padding: 2% 4%;\n  }\n\n  .search {\n    top: 22%;\n    position: relative;\n  }\n\n  tr:nth-child(odd) {\n    background-color: #f2f2f2;\n  }\n\n  .rowtab {\n    margin-bottom: 2%;\n  }\n}\n\n@media only screen and (min-width: 1024px) and (max-width: 1366px) {\n  .search {\n    top: 22%;\n    position: relative;\n    border: 0.1px solid gray;\n    width: 90%;\n    height: 40px;\n    margin-top: 8px;\n  }\n\n  .class-btn {\n    top: 25%;\n    position: relative;\n    left: -7px;\n    width: 211px;\n  }\n}\n\n@media only screen and (max-width: 812px) {\n  .class-btn {\n    top: 25%;\n    position: relative;\n    left: -7px;\n    width: 95%;\n  }\n}\n\n.search {\n  top: 22%;\n  position: relative;\n  border: 0.1px solid gray;\n  width: 90%;\n  height: 40px;\n  margin-top: 8px;\n  color: #131010;\n}\n\n.class-btn {\n  top: 25%;\n  position: relative;\n  left: -7px;\n}\n\n.readtoshipCssStyle {\n  color: red;\n}\n\n.ShipCssStyle {\n  color: green;\n}\n\n.class-border {\n  border: 1px gray solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTgxMTgwL0RvY3VtZW50cy92YW5pdHlBcnQtbGF0ZXN0L3Zhbml0eUFydC1MYXRlc3Qvc3JjL2FwcC9yZXBvcnRzaXAvcmVwb3J0c2lwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVwb3J0c2lwL3JlcG9ydHNpcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0UsOENBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBREtBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUNJLG9DQUFBO0FDRko7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNGRjs7QURLQTtFQUNJLGdCQUFBO0FDRko7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNGRjs7QURLQTtFQUNFLHNCQUFBO0VBQ0EsOEJBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0ksa0JBQUE7QUNGTjs7QURLQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0FDRko7O0FES0E7RUFDSSwwQkFBQTtFQUNDLHNCQUFBO0FDRkw7O0FESUE7RUFDRSxlQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNERjs7QURJQTtFQUFlLGFBQUE7QUNBZjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQWpLVTtBQ2tLWjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQ0FBQTtFQUVBLDJCQUFBO0FDQ0Y7O0FERUE7RUFFRSxhQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7QUNBRjs7QURHQTtFQUVFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQ0RGOztBRElBO0VBQ0MsY0FBQTtBQ0REOztBREdBO0VBQ0MsYUFBQTtBQ0FEOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDRSw0QkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLDBCQUFBO0FDQ0Y7O0FEZUU7RUFDRSxzQkFBQTtFQUNBLE9BQUE7QUNaSjs7QURjRTtFQUNFLHlCQUFBO0FDWEo7O0FEZUU7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ1pKOztBRGVFO0VBQ0UsYUFBQTtBQ1pKOztBRGVFO0VBQ0UsV0FBQTtFQUdBLHNCQUFBO0VBQ0Esb0JBQUE7QUNkSjs7QURpQkU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNkSjs7QURpQkU7RUFDRSxnQkFBQTtBQ2RKOztBRGdCRTtFQUFtQix5QkFBQTtBQ1pyQjs7QURjRTtFQUNFO0lBQ0UsYUFBQTtFQ1hKOztFRGFFO0lBQ0UsY0FBQTtJQUNBLFVBQUE7RUNWSjs7RURhRTtJQUNFLGVBQUE7RUNWSjs7RURnQkE7SUFDRSxnQkFBQTtFQ2JGOztFRGdCQTtJQUNFLFVBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUNiRjs7RURnQkE7SUFDRSxVQUFBO0lBQ0EsY0FBQTtFQ2JGOztFRGdCQTtJQUNFLFFBQUE7SUFDQSxrQkFBQTtFQ2JGOztFRGVBO0lBQW1CLHlCQUFBO0VDWG5COztFRFlBO0lBQ0UsaUJBQUE7RUNURjtBQUNGOztBRGVBO0VBQ0U7SUFDRSxRQUFBO0lBQ0Esa0JBQUE7SUFDQSx3QkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQ2JGOztFRGVBO0lBQ0UsUUFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUNaRjtBQUNGOztBRGVBO0VBQ0U7SUFDRSxRQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtFQ2JGO0FBQ0Y7O0FEc0JBO0VBQ0UsUUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDcEJGOztBRHNCQTtFQUNFLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNuQkY7O0FEcUJBO0VBQ0UsVUFBQTtBQ2xCRjs7QURxQkE7RUFDRSxZQUFBO0FDbEJGOztBRG9CQTtFQUNFLHNCQUFBO0FDakJGIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0c2lwL3JlcG9ydHNpcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnRuLWNvbG9yOiAjMDBCRkNDO1xyXG4kdGV4dC1jb2xvcjogIzA3MDcwNztcclxuXHJcbi5yb3VuZCB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogIzA4ODA4ODtcclxuICAgIGZvbnQtc2l6ZTogaW5pdGlhbDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmNsYXNzLWhlYWRlcmltZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2JsdWViZy5wbmdcIikhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmJhY2stbWFyZ3tcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAyNSU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMyOWM1YzU7XHJcbn1cclxuXHJcbi5jbGVhci1tYXJne1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAyNSU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMyOWM1YzU7XHJcbn1cclxuXHJcbi5zYXZlLWNlbnRlcntcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcGFkZGluZzogMCAzJSAwIDMlO1xyXG59XHJcblxyXG4udG9nZ2xlLWNvbG9ye1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogIzAwQkZDQyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFiZWwtcG9ze1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDE1JTtcclxufVxyXG5cclxuLmNsYXNzLXJvd3BhZGR7XHJcbiAgICBwYWRkaW5nOiAxLjUlIDIlO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNSU7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAzM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udG9vbDJ7XHJcbiAgLS1iYWNrZ3JvdW5kOiNGRkZGRkYwMDtcclxuICAtLWJvcmRlci13aWR0aCA6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9vbDF7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMSU7XHJcbn1cclxuXHJcbi5zcmNjcm9sbHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5zcmNoZ3R7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSA7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ubGFiLWZvbnR7XHJcbiAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcclxuICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcbi5sYWItZm9udDF7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZXZlbnQtZm9udHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5ldmVudC1mb250LWl0YWxpY3tcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uc3dpdGNoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA2NXB4O1xyXG4gIGhlaWdodDogMzRweDtcclxufVxyXG5cclxuLnN3aXRjaCBpbnB1dCB7ZGlzcGxheTpub25lO31cclxuXHJcbi5zbGlkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG4uc2xpZGVyOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIHdpZHRoOiAyOHB4O1xyXG4gIGxlZnQ6IDRweDtcclxuICB0b3A6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnRuLWNvbG9yO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcclxufVxyXG5cclxuLm9uXHJcbntcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ub2Zme1xyXG4gIHBhZGRpbmctbGVmdDozM3B4O1xyXG59XHJcblxyXG4ub257XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5cclxuLm9uLCAub2ZmXHJcbntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCsgLnNsaWRlciAub25cclxue2Rpc3BsYXk6IGJsb2NrO31cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIC5vZmZcclxue2Rpc3BsYXk6IG5vbmU7fVxyXG5cclxuLnNsaWRlci5ybmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuXHJcbi5zbGlkZXIucm5kOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG4ubWFyZ2luVEwxMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuICBcclxuLm1hcmdpbkwxNSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDM1cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4vLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNTY4cHgpIHtcclxuLy8gICAubGFiLWZvbnR7XHJcbi8vICAgICBmb250LXNpemU6IDE3cHg7XHJcbi8vICAgfVxyXG4vLyAgIC5ldmVudC1mb250e1xyXG4vLyAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4vLyAgIH1cclxuICBcclxuLy8gfVxyXG4vLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4vLyAgICAgLmNscy1jYXJyaWVye1xyXG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuICBpb24tc2VsZWN0e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIHRvcDogNCU7ICAgXHJcbiAgfVxyXG4gIC5jbGFzcy1oZWFkZXJyc3tcclxuICAgIHBhZGRpbmc6IDBweCAzMnB4IDBweCAwcHg7XHJcbiAgICAvL2NvbG9yOiAjNzk3MzczO1xyXG4gIH0gIFxyXG4gXHJcbiAgLnRhYmxldHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAzJTtcclxuXHJcbiAgfVxyXG4gIC5tb2JpbGV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgIC8vIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAvL2JvcmRlcjogMC41cHggc29saWQgI2EyYTRhYjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7ICAgIFxyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDMwcHg7XHJcbiAgfVxyXG5cclxuICB0aCwgdGQge1xyXG4gICAgcGFkZGluZzogMiUgMSU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICB0ciB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICB0cjpudGgtY2hpbGQob2RkKSB7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6MzIwcHggKSBhbmQgKG1heC13aWR0aDogNDgwcHgpeyAgIFxyXG4gICAgLnRhYmxldHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5tb2JpbGV7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW46IDIlO1xyXG4gICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgfVxyXG4gICAgLmxhYi1mb250e1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG4gIC8vIHRhYmxlID4gdGJvZHl7XHJcbiAgLy8gICBib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2IoMjU1LCAyMjgsIDIyOCkgO1xyXG4gIC8vIH1cclxuXHJcbiAgdHIgdGgsIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICB0aCB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgcGFkZGluZzogMiUgNCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTZlM2UwO1xyXG4gIH1cclxuXHJcbiAgdGQge1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIHBhZGRpbmc6IDIlIDQlO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaHtcclxuICAgIHRvcDogMjIlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICB0cjpudGgtY2hpbGQob2RkKSB7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcbiAgLnJvd3RhYiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICB9XHJcbn1cclxuLy8gICB0YWJsZSA+dGJvZHkgPnRyID50aHtcclxuLy8gICAgICAgcGFkZGluZzogMSU7XHJcbi8vICAgfVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogMTAyNHB4KSBhbmQgKG1heC13aWR0aCA6IDEzNjZweCl7XHJcbiAgLnNlYXJjaHtcclxuICAgIHRvcDogMjIlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAwLjFweCBzb2xpZCBncmF5O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICB9XHJcbiAgLmNsYXNzLWJ0bntcclxuICAgIHRvcDogMjUlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTdweDtcclxuICAgIHdpZHRoOiAyMTFweDtcclxuICB9XHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCAgOjgxMnB4KXtcclxuICAuY2xhc3MtYnRue1xyXG4gICAgdG9wOiAyNSU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAtN3B4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICB9XHJcbi8vICAgLmxhYi1mb250e1xyXG4vLyAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4vLyAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4vLyB9XHJcblxyXG59XHJcblxyXG5cclxuLnNlYXJjaHtcclxuICB0b3A6IDIyJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiAwLjFweCBzb2xpZCBncmF5O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBjb2xvciA6ICMxMzEwMTA7XHJcbn1cclxuLmNsYXNzLWJ0bntcclxuICB0b3A6IDI1JTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogLTdweDtcclxufVxyXG4ucmVhZHRvc2hpcENzc1N0eWxle1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5TaGlwQ3NzU3R5bGV7XHJcbiAgY29sb3I6Z3JlZW47XHJcbn1cclxuLmNsYXNzLWJvcmRlcntcclxuICBib3JkZXI6IDFweCBncmF5IHNvbGlkO1xyXG59IiwiLnJvdW5kIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgLS1pb24tY29sb3ItYmFzZTogIzA4ODA4ODtcbiAgZm9udC1zaXplOiBpbml0aWFsO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5jbGFzcy1oZWFkZXJpbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvYmx1ZWJnLnBuZ1wiKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmJhY2stbWFyZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjUlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjljNWM1O1xufVxuXG4uY2xlYXItbWFyZyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyNSU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMyOWM1YzU7XG59XG5cbi5zYXZlLWNlbnRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwIDMlIDAgMyU7XG59XG5cbi50b2dnbGUtY29sb3Ige1xuICAtLWlvbi1jb2xvci1iYXNlOiAjMDBCRkNDICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbC1wb3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTUlO1xufVxuXG4uY2xhc3Mtcm93cGFkZCB7XG4gIHBhZGRpbmc6IDEuNSUgMiU7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1JTtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDMzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udG9vbDIge1xuICAtLWJhY2tncm91bmQ6I0ZGRkZGRjAwO1xuICAtLWJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50b29sMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxJTtcbn1cblxuLnNyY2Nyb2xsIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgei1pbmRleDogOTk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc3JjaGd0IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB6LWluZGV4OiA5OTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5sYWItZm9udCB7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4ubGFiLWZvbnQxIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZXZlbnQtZm9udCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmV2ZW50LWZvbnQtaXRhbGljIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDM0cHg7XG59XG5cbi5zd2l0Y2ggaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbiAgbGVmdDogNHB4O1xuICB0b3A6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCRkNDO1xufVxuXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7XG59XG5cbi5vbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5vZmYge1xuICBwYWRkaW5nLWxlZnQ6IDMzcHg7XG59XG5cbi5vbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi5vbiwgLm9mZiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIgLm9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIC5vZmYge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2xpZGVyLnJuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG5cbi5zbGlkZXIucm5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG59XG5cbi5tYXJnaW5UTDEwIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ubWFyZ2luTDE1IHtcbiAgbWFyZ2luLWxlZnQ6IDM1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICB0b3A6IDQlO1xufVxuXG4uY2xhc3MtaGVhZGVycnMge1xuICBwYWRkaW5nOiAwcHggMzJweCAwcHggMHB4O1xufVxuXG4udGFibGV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMyU7XG59XG5cbi5tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItc3BhY2luZzogMzBweDtcbn1cblxudGgsIHRkIHtcbiAgcGFkZGluZzogMiUgMSU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRyIHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnRhYmxldCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tb2JpbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMiU7XG4gIH1cblxuICAubGFiLWZvbnQge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuXG4gIHRyIHRoLCB0ZCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIHRoIHtcbiAgICB3aWR0aDogMzUlO1xuICAgIHBhZGRpbmc6IDIlIDQlO1xuICAgIGJhY2tncm91bmQ6ICNlNmUzZTA7XG4gIH1cblxuICB0ZCB7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBwYWRkaW5nOiAyJSA0JTtcbiAgfVxuXG4gIC5zZWFyY2gge1xuICAgIHRvcDogMjIlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIHRyOm50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICB9XG5cbiAgLnJvd3RhYiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gIC5zZWFyY2gge1xuICAgIHRvcDogMjIlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXI6IDAuMXB4IHNvbGlkIGdyYXk7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG5cbiAgLmNsYXNzLWJ0biB7XG4gICAgdG9wOiAyNSU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC03cHg7XG4gICAgd2lkdGg6IDIxMXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgxMnB4KSB7XG4gIC5jbGFzcy1idG4ge1xuICAgIHRvcDogMjUlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtN3B4O1xuICAgIHdpZHRoOiA5NSU7XG4gIH1cbn1cbi5zZWFyY2gge1xuICB0b3A6IDIyJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDAuMXB4IHNvbGlkIGdyYXk7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBjb2xvcjogIzEzMTAxMDtcbn1cblxuLmNsYXNzLWJ0biB7XG4gIHRvcDogMjUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC03cHg7XG59XG5cbi5yZWFkdG9zaGlwQ3NzU3R5bGUge1xuICBjb2xvcjogcmVkO1xufVxuXG4uU2hpcENzc1N0eWxlIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uY2xhc3MtYm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggZ3JheSBzb2xpZDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apiservice.service */ "./src/app/apiservice.service.ts");






// import { DatePicker } from '@ionic-native/date-picker';
var ReportsipPage = /** @class */ (function () {
    function ReportsipPage(formbuilder, routeto, Vanityartservice, routerOutlet
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
    ReportsipPage.prototype.ngOnInit = function () {
        this.frmdate = "OrderReceived From";
        this.todate = "OrderReceived To";
        this.userId = JSON.parse(localStorage.getItem(("Id")));
        // this.getOrderStatusList();
        this.getWarehouseList();
        this.reportpage.controls['warehouse'].setValue(this.selectedWarehouse);
        var date = new Date();
        this.edate = new Date(date.setDate(date.getDate() + 1)).toLocaleDateString();
        this.routerOutlet.swipeGesture = false;
    };
    ReportsipPage.prototype.onSelectedWarehouse = function () {
        this.reportpage.controls['warehouse'].setValue(this.selectedWarehouse);
    };
    ReportsipPage.prototype.formreset = function () {
        var _this = this;
        var date = new Date();
        console.log(this.reportpage.value);
        this.reportpage.reset();
        setTimeout(function () {
            _this.reportresults = [];
            _this.sdate = date.toLocaleDateString();
            _this.edate = new Date(date.setDate(date.getDate() + 1)).toLocaleDateString();
            _this.reportpage.patchValue({ status: '40' });
            _this.reportpage.patchValue({ warehouse: '1000' });
        }, 300);
    };
    //Method to go back to home page
    ReportsipPage.prototype.backToHome = function () {
        this.routeto.navigate(['/menuitems']);
    };
    ReportsipPage.prototype.getreports = function () {
        var _this = this;
        this.reportresults = [];
        var now = new Date();
        var sdate = now.toLocaleDateString();
        var stime = now.toLocaleTimeString();
        this.starttime = stime.split(" ")[0];
        this.startdate = this.reportpage.value.ordercreatedfrom;
        this.enddate = this.reportpage.value.ordercreatedto;
        var repporting = this.Vanityartservice.baseUrl + this.Vanityartservice.getReport;
        var dataParam = {
            "Order": this.reportpage.value.reportorder,
            "StatusEnum": this.reportpage.value.status,
            "wareHouseid": this.reportpage.value.warehouse ? this.reportpage.value.warehouse : '',
            "CarrierEnum": this.reportpage.value.carrier,
            "OrderCreatedFromDate": this.startdate.replace('+05:30', ' ').replace("T", " "),
            "OrderCreatedToDate": this.enddate.replace('+05:30', ' ').replace("T", " ")
        };
        console.log("resports", dataParam);
        this.Vanityartservice.present();
        this.Vanityartservice.ajaxCallService(repporting, "post", dataParam).then(function (resp) {
            _this.Vanityartservice.dismiss();
            if (Array.isArray(resp)) {
                _this.reportresults = resp;
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
                _this.reportresults = [];
                _this.Vanityartservice.PresentToast(resp['message'], "danger");
            }
        }).catch(function (err) {
            _this.Vanityartservice.dismiss();
        });
    };
    ReportsipPage.prototype.reportssubmit = function () {
        var _this = this;
        var exportrepporting = this.Vanityartservice.baseUrl + this.Vanityartservice.exportreports;
        var dataParam = {
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
        this.Vanityartservice.ajaxCallService(exportrepporting, "post", dataParam).then(function (resp) {
            _this.respData = resp;
            console.log("res", _this.respData);
            if (resp['status'] = "Success") {
                _this.Vanityartservice.PresentToast(resp['message'], "success");
            }
            _this.Vanityartservice.dismiss();
        });
    };
    //Method to get order status lists
    ReportsipPage.prototype.getOrderStatusList = function () {
        var _this = this;
        var url = this.Vanityartservice.baseUrl + this.Vanityartservice.orderList;
        this.Vanityartservice.present();
        this.Vanityartservice.ajaxCallService(url, "post", '').then(function (resp) {
            _this.respData = resp;
            console.log("res", _this.respData);
            _this.orderStatus = resp;
            _this.orderStatus.map(function (item, i) {
                if (i == 0) {
                    item['selected'] = true;
                }
                else {
                    item['selected'] = false;
                }
            });
            _this.orderStatus.push({ enumName: 'All', enumValue: '0', selected: false });
            _this.orderStatus.push({ enumName: 'Ready to Ship', enumValue: '40', selected: false });
            _this.orderStatus.push({ enumName: 'Shipped', enumValue: '50', selected: false });
            console.log(_this.orderStatus);
            _this.Vanityartservice.dismiss();
        });
    };
    ReportsipPage.prototype.onStatusChange = function (svalue) {
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
    };
    //Method to get Warehouse List
    ReportsipPage.prototype.getWarehouseList = function () {
        var _this = this;
        var url = this.Vanityartservice.baseUrl + this.Vanityartservice.warehouseList;
        this.Vanityartservice.ajaxCallService(url, "post", '').then(function (resp) {
            _this.warehouselist = resp;
            console.log(resp);
            _this.warehouseval = resp[0]['warehouseCode'];
            _this.reportpage.patchValue({ warehouse: resp[0]['id'] });
            console.log(_this.warehouseval);
            for (var _i = 0, _a = _this.warehouselist; _i < _a.length; _i++) {
                var idx = _a[_i];
                if (idx['warehouseCode'] == _this.warehouseval) {
                    _this.wareID = idx['id'];
                }
                console.log(_this.wareID);
            }
        });
    };
    ReportsipPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _apiservice_service__WEBPACK_IMPORTED_MODULE_5__["ApiserviceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRouterOutlet"] }
    ]; };
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
    return ReportsipPage;
}());



/***/ })

}]);
//# sourceMappingURL=reportsip-reportsip-module-es5.js.map