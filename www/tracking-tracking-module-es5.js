(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tracking-tracking-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tracking/tracking.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tracking/tracking.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-padding class-headerimg\">\n  <div class=\"ion-text-center ion-text-uppercase title\">TRACKING NUMBER</div>\n  <ion-toolbar class=\"tool2\">\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"4\" class=\"ion-text-left padd-left-0\">\n          <ion-buttons class=\"back-marg\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\" (click)=\"backToHome()\">BACK</ion-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"2\" class=\"ion-text-center\">\n          <ion-button fill='clear' class=\"save-center\" type=\"submit\" (click)=\"trackingsubmit()\"\n            [disabled]=\"trackingordr.invalid || autoSave || !enableSaveBtn\">SAVE\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"4\" class=\"ion-text-right\" (click)=\"formreset()\">\n          <ion-buttons class=\"clear-marg\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\">CLEAR</ion-button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-no-padding\">\n  <form [formGroup]=\"trackingordr\">\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"11\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">TRACKING#</ion-label>\n          <ion-input #tracking class=\"ion-text-uppercase lab-font\" clearInput type=\"text\" formControlName=\"tracking\"\n            (keyup.enter)=\"handleScanner($event)\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <div *ngFor=\"let validation of validation_messages['tracking']\">\n            <div class=\"error-message\"\n              *ngIf=\"trackingordr.get('tracking').hasError(validation['type']) && trackingordr.get('tracking').touched\">\n              {{ validation.message }}\n            </div>\n          </div>\n        </div>\n        <div class=\"error-message\" *ngIf=\"errOrder\">Invalid Tracking number.</div>\n      </ion-col>\n      <ion-col size=\"1\"\n        style=\"display: flex!important; align-content: center!important; align-items: center!important;\">\n        <ion-buttons>\n          <ion-button fill=\"clear\" (click)=\"scanOrder()\" type=\"button\" [disabled]=\"searched\" item-right\n            style=\"background:white; margin-top: 100%\">\n            <ion-icon name=\"search\" style=\"width: 35px; height: 35px; color:darkgray\"> </ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">Item No</ion-label>\n\n          <ion-input type=\"text\" #itemNo (keyup.enter)=\"handleitemScanner($event)\" formControlName=\"itemvalues\"\n            clearInput class=\"ion-text-uppercase lab-font\">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">Serial No</ion-label>\n          <ion-input type=\"text\" #serialNo (ionInput)=\"handleserialNoScanner($event)\" formControlName=\"serialNo\"\n            clearInput class=\"ion-text-uppercase lab-font\">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-input type=\"text\" class=\"lab-font\" style=\"width: 50%;\" (keyup.enter)=\"handleitemScanner($event)\"\n            clearInput formControlName=\"itemvalues\" placeholder=\"Scan item number\">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row> -->\n    <ion-row class=\"rowtab\" *ngIf=\"scanItemList != undefined && scanItemList.length > 0\">\n      <ion-col size=\"4\">\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">ITEM</ion-label>\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-text-center\">\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">ORD.QTY</ion-label>\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-text-center\">\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">SCAN</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let item of scanItemList;let i = index\" class=\"rowtab\">\n      <ion-col size=\"4\">\n        <ion-label [ngClass]=\"item.selected == true && item.itemUpc == trackingordr.value.itemvalues ? 'itemName': ''\" position=\"floating\" class=\"lab-font lab-color\">{{item.itemName}}</ion-label>\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-text-center\">\n        <ion-label [ngClass]=\"item.selected == true && item.itemUpc == trackingordr.value.itemvalues ? 'itemName': ''\" position=\"floating\" class=\"lab-font lab-color\">{{item.itemQuantity}}</ion-label>\n      </ion-col>\n      <!-- [style.color]=\"((1/item.itemQuantity)* item.isscanneditemslist) == 0 ? 'gray' : ((1/item.itemQuantity)* item.isscanneditemslist) < item.itemQuantity ? 'orange' : ((1/item.itemQuantity)* item.isscanneditemslist) == item.itemQuantity ? 'green' : ''\" -->\n      <ion-col size=\"2\" class=\"ion-text-center\" (click)=\"checkToComplete(item)\">\n        <ion-icon name=\"checkmark-circle\"\n          [style.color]=\"item.selected == true && item.itemUpc == trackingordr.value.itemvalues ? 'orange' : item.scannedItems >= item.itemQuantity ? 'green' : item.scannedItems == 0 ? 'gray':''\"\n          class=\"imgscan\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"2\">\n        <!-- <ion-progress-bar *ngIf=\"item.scannedItems == 0\" color=\"primary\" value=\"0\" width=\"50%\"\n        id=\"bar\">\n      </ion-progress-bar> -->\n      <ion-progress-bar *ngIf=\"item.isScanned == false\" color=\"primary\" value=\"{{(1/item.itemQuantity)* item.scannedItems}}\" width=\"50%\"\n        id=\"bar\">\n      </ion-progress-bar>\n      <ion-progress-bar *ngIf=\"item.isScanned == true \" color=\"primary\" value=\"1\" width=\"50%\"\n          id=\"bar\">\n        </ion-progress-bar>\n      </ion-col>\n      <ion-note style=\"margin-left: 1%;\">{{item.itemDescription}}</ion-note>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">Order No &nbsp;{{this.orderno}}{{this.customername}}\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">ShipDate &nbsp;{{this.shipdate}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </form>\n  <ion-toolbar class=\"tool1\">\n    <ion-grid style=\"padding: 3% 5%\">\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-label class=\"lab-font\">Auto Save</ion-label>\n        </ion-col>\n        <ion-col size=\"2\" class=\"ion-text-center\">\n          <label class=\"switch\"><input type=\"checkbox\" (change)=\"isChecked($event)\">\n            <div class=\"slider rnd\"><span class=\"on\">ON</span><span class=\"off\">OFF</span></div>\n          </label>\n        </ion-col>\n        <ion-col size=\"5\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  <ion-row class=\"marginTL10\">\n    <ion-col size=\"12\">\n      <ion-label position=\"stacked\" class=\"event-font marginTL10\">Event Log</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item class=\"ion-padding-horizontal\">\n        <ion-textarea rows=\"3\" [(ngModel)]=\"eventLog\" [readonly]='true' class=\"event-font-italic\"></ion-textarea>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/tracking/tracking.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tracking/tracking.module.ts ***!
  \*********************************************/
/*! exports provided: TrackingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingPageModule", function() { return TrackingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tracking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tracking.page */ "./src/app/tracking/tracking.page.ts");







var routes = [
    {
        path: '',
        component: _tracking_page__WEBPACK_IMPORTED_MODULE_6__["TrackingPage"]
    }
];
var TrackingPageModule = /** @class */ (function () {
    function TrackingPageModule() {
    }
    TrackingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tracking_page__WEBPACK_IMPORTED_MODULE_6__["TrackingPage"]]
        })
    ], TrackingPageModule);
    return TrackingPageModule;
}());



/***/ }),

/***/ "./src/app/tracking/tracking.page.scss":
/*!*********************************************!*\
  !*** ./src/app/tracking/tracking.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".round {\n  --border-radius: 50%;\n  --vertical-align: middle;\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #088088;\n  font-size: initial;\n  font-size: 25px;\n}\n\n.itemName {\n  font-weight: bold;\n}\n\n.class-headerimg {\n  background-image: url('bluebg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.back-marg {\n  float: left;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5;\n}\n\n.clear-marg {\n  background: transparent;\n  float: right;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5;\n}\n\n.save-center {\n  border-radius: 50%;\n  background: #07aeba;\n  font-size: 22px;\n  color: #ffffff;\n  height: 80px;\n  width: 85px;\n  border-radius: 50%;\n}\n\n.toggle-color {\n  --ion-color-base: #00BFCC !important;\n}\n\n.label-pos {\n  position: absolute;\n  bottom: 15%;\n}\n\n.row-padd {\n  padding: 0.5% 3%;\n}\n\n.error-message {\n  position: absolute;\n  left: 5%;\n  color: red;\n  font-size: 15px;\n}\n\n.title {\n  font-size: 33px;\n  font-weight: 500;\n  padding-top: 10px;\n  background: #00000000;\n  color: #fff;\n}\n\n.tool2 {\n  --background:#FFFFFF00;\n  --border-width: 0px !important;\n}\n\n.tool1 {\n  position: relative;\n  top: 1%;\n}\n\n.srccroll {\n  height: 200px;\n  overflow: scroll;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.srchgt {\n  height: auto;\n  overflow: hidden;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.lab-font {\n  font-size: 25px;\n}\n\n.event-font {\n  font-size: 18px;\n}\n\n.event-font-italic {\n  font-size: 16px;\n  color: #333;\n  font-style: italic;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 65px;\n  height: 34px;\n}\n\n.switch input {\n  display: none;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: grey;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 28px;\n  width: 28px;\n  left: 4px;\n  top: 3px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #00BFCC;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(55px);\n  transform: translateX(30px);\n}\n\n.on {\n  display: none;\n}\n\n.off {\n  padding-left: 33px;\n}\n\n.on {\n  padding-right: 25px;\n}\n\n.on, .off {\n  color: white;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  font-size: 13px;\n  font-family: Verdana, sans-serif;\n}\n\ninput:checked + .slider .on {\n  display: block;\n}\n\ninput:checked + .slider .off {\n  display: none;\n}\n\n.slider.rnd {\n  border-radius: 16px;\n}\n\n.slider.rnd:before {\n  border-radius: 14px;\n}\n\n.marginTL10 {\n  margin: 2% 3%;\n}\n\n.marginL15 {\n  margin-left: 35px !important;\n  margin-top: 0px !important;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 568px) {\n  .lab-font {\n    font-size: 13px;\n  }\n\n  .event-font {\n    font-size: 13px;\n  }\n}\n\n.validation-errors {\n  font-size: 15px;\n  color: red;\n}\n\ntable > tbody > tr > td:nth-child(1) {\n  width: 45%;\n  padding: 0% 0% 0% 5%;\n}\n\ntable > tbody > tr > td:nth-child(2) {\n  width: 45%;\n}\n\ntable > tbody > tr > td:nth-child(3) {\n  width: 45%;\n}\n\n.rowtab {\n  padding: 0 5% 0 5%;\n}\n\nion-progress-bar {\n  top: 10%;\n}\n\n.imgscan {\n  top: -7%;\n  font-size: 47px;\n  position: relative;\n}\n\n#bar {\n  height: 1.5rem;\n  width: 7.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTgxMTgwL0RvY3VtZW50cy92YW5pdHlBcnQtbGF0ZXN0L3Zhbml0eUFydC1MYXRlc3Qvc3JjL2FwcC90cmFja2luZy90cmFja2luZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RyYWNraW5nL3RyYWNraW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRko7O0FES0E7RUFDRSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0UsOENBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBREtBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUNJLG9DQUFBO0FDRko7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNGRjs7QURLQTtFQUNFLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNGRjs7QURLQTtFQUNFLHNCQUFBO0VBQ0EsOEJBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0ksa0JBQUE7QUNGTjs7QURLQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0FDRko7O0FES0E7RUFDRSxlQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNGRjs7QURLQTtFQUFlLGFBQUE7QUNEZjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLHlCQWpLVTtBQ2lLWjs7QURHQTtFQUNFLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxtQ0FBQTtFQUVBLDJCQUFBO0FDQUY7O0FER0E7RUFFRSxhQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7QUNERjs7QURJQTtFQUVFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQ0ZGOztBREtBO0VBQ0MsY0FBQTtBQ0ZEOztBRElBO0VBQ0MsYUFBQTtBQ0REOztBREdBO0VBQ0UsbUJBQUE7QUNBRjs7QURHQTtFQUNJLG1CQUFBO0FDQUo7O0FER0E7RUFDRSxhQUFBO0FDQUY7O0FER0E7RUFDRSw0QkFBQTtFQUNBLDBCQUFBO0FDQUY7O0FERUE7RUFDRTtJQUNFLGVBQUE7RUNDRjs7RURDQTtJQUNFLGVBQUE7RUNFRjtBQUNGOztBREVBO0VBQ0MsZUFBQTtFQUNBLFVBQUE7QUNBRDs7QURFQTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBRENBO0VBQ0UsVUFBQTtBQ0VGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURFQTtFQUNFLFFBQUE7QUNDRjs7QURDQTtFQUNFLFFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC90cmFja2luZy90cmFja2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnRuLWNvbG9yOiAjMDBCRkNDO1xyXG4kdGV4dC1jb2xvcjogIzA3MDcwNztcclxuXHJcbi5yb3VuZCB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogIzA4ODA4ODtcclxuICAgIGZvbnQtc2l6ZTogaW5pdGlhbDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLml0ZW1OYW1le1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2xhc3MtaGVhZGVyaW1nIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvYmx1ZWJnLnBuZ1wiKSFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uYmFjay1tYXJne1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDI1JTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogIzI5YzVjNTtcclxufVxyXG5cclxuLmNsZWFyLW1hcmd7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDI1JTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogIzI5YzVjNTtcclxufVxyXG5cclxuLnNhdmUtY2VudGVye1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjMDdhZWJhO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDg1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4udG9nZ2xlLWNvbG9ye1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogIzAwQkZDQyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFiZWwtcG9ze1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDE1JTtcclxufVxyXG5cclxuLnJvdy1wYWRke1xyXG4gIHBhZGRpbmc6IDAuNSUgMyU7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1JTtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDMzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50b29sMntcclxuICAtLWJhY2tncm91bmQ6I0ZGRkZGRjAwO1xyXG4gIC0tYm9yZGVyLXdpZHRoIDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50b29sMXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxJTtcclxufVxyXG5cclxuLnNyY2Nyb2xse1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnNyY2hndHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlIDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5sYWItZm9udHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5ldmVudC1mb250e1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmV2ZW50LWZvbnQtaXRhbGlje1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5zd2l0Y2gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDY1cHg7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG59XHJcblxyXG4uc3dpdGNoIGlucHV0IHtkaXNwbGF5Om5vbmU7fVxyXG5cclxuLnNsaWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbi5zbGlkZXI6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgd2lkdGg6IDI4cHg7XHJcbiAgbGVmdDogNHB4O1xyXG4gIHRvcDogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gIHRyYW5zaXRpb246IC40cztcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRidG4tY29sb3I7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xyXG59XHJcblxyXG4ub25cclxue1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5vZmZ7XHJcbiAgcGFkZGluZy1sZWZ0OjMzcHg7XHJcbn1cclxuXHJcbi5vbntcclxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4ub24sIC5vZmZcclxue1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkKyAuc2xpZGVyIC5vblxyXG57ZGlzcGxheTogYmxvY2s7fVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIgLm9mZlxyXG57ZGlzcGxheTogbm9uZTt9XHJcblxyXG4uc2xpZGVyLnJuZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG5cclxuLnNsaWRlci5ybmQ6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbn1cclxuXHJcbi5tYXJnaW5UTDEwIHtcclxuICBtYXJnaW46IDIlIDMlO1xyXG59XHJcbiAgXHJcbi5tYXJnaW5MMTUge1xyXG4gIG1hcmdpbi1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDU2OHB4KSB7XHJcbiAgLmxhYi1mb250e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuZXZlbnQtZm9udHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbi52YWxpZGF0aW9uLWVycm9yc3tcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Y29sb3I6IHJlZDtcclxufVxyXG50YWJsZSA+dGJvZHkgPiB0ciA+IHRkOm50aC1jaGlsZCgxKXtcclxuICB3aWR0aDogNDUlO1xyXG4gIHBhZGRpbmc6IDAlIDAlIDAlIDUlO1xyXG4gIFxyXG59XHJcbnRhYmxlID50Ym9keSA+IHRyID4gdGQ6bnRoLWNoaWxkKDIpe1xyXG4gIHdpZHRoOiA0NSU7ICBcclxufVxyXG50YWJsZSA+dGJvZHkgPiB0ciA+IHRkOm50aC1jaGlsZCgzKXtcclxuICB3aWR0aDogNDUlOyAgXHJcbn1cclxuLy8gdGFibGUgPnRib2R5ID4gdHJ7XHJcbi8vICAgcGFkZGluZzogMCUgNSUgMCUgNSU7XHJcbi8vIH1cclxuLnJvd3RhYntcclxuICBwYWRkaW5nOiAwIDUlIDAgNSU7XHJcbn1cclxuaW9uLXByb2dyZXNzLWJhcntcclxuICB0b3A6IDEwJTtcclxufVxyXG4uaW1nc2NhbntcclxuICB0b3A6IC03JTtcclxuICBmb250LXNpemU6IDQ3cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAgIFxyXG59XHJcbiNiYXIgeyAgXHJcbiAgaGVpZ2h0OiAxLjVyZW07IFxyXG4gIHdpZHRoOiA3LjVyZW07XHJcbn0iLCIucm91bmQge1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWlvbi1jb2xvci1iYXNlOiAjMDg4MDg4O1xuICBmb250LXNpemU6IGluaXRpYWw7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLml0ZW1OYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbGFzcy1oZWFkZXJpbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvYmx1ZWJnLnBuZ1wiKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmJhY2stbWFyZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjUlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjljNWM1O1xufVxuXG4uY2xlYXItbWFyZyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyNSU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMyOWM1YzU7XG59XG5cbi5zYXZlLWNlbnRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzA3YWViYTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udG9nZ2xlLWNvbG9yIHtcbiAgLS1pb24tY29sb3ItYmFzZTogIzAwQkZDQyAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWwtcG9zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1JTtcbn1cblxuLnJvdy1wYWRkIHtcbiAgcGFkZGluZzogMC41JSAzJTtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUlO1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50b29sMiB7XG4gIC0tYmFja2dyb3VuZDojRkZGRkZGMDA7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRvb2wxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDElO1xufVxuXG4uc3JjY3JvbGwge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB6LWluZGV4OiA5OTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zcmNoZ3Qge1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmxhYi1mb250IHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uZXZlbnQtZm9udCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmV2ZW50LWZvbnQtaXRhbGljIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDM0cHg7XG59XG5cbi5zd2l0Y2ggaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbiAgbGVmdDogNHB4O1xuICB0b3A6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCRkNDO1xufVxuXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7XG59XG5cbi5vbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5vZmYge1xuICBwYWRkaW5nLWxlZnQ6IDMzcHg7XG59XG5cbi5vbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi5vbiwgLm9mZiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIgLm9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIC5vZmYge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2xpZGVyLnJuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG5cbi5zbGlkZXIucm5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG59XG5cbi5tYXJnaW5UTDEwIHtcbiAgbWFyZ2luOiAyJSAzJTtcbn1cblxuLm1hcmdpbkwxNSB7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNTY4cHgpIHtcbiAgLmxhYi1mb250IHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cblxuICAuZXZlbnQtZm9udCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG4udmFsaWRhdGlvbi1lcnJvcnMge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkOm50aC1jaGlsZCgxKSB7XG4gIHdpZHRoOiA0NSU7XG4gIHBhZGRpbmc6IDAlIDAlIDAlIDUlO1xufVxuXG50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZDpudGgtY2hpbGQoMikge1xuICB3aWR0aDogNDUlO1xufVxuXG50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZDpudGgtY2hpbGQoMykge1xuICB3aWR0aDogNDUlO1xufVxuXG4ucm93dGFiIHtcbiAgcGFkZGluZzogMCA1JSAwIDUlO1xufVxuXG5pb24tcHJvZ3Jlc3MtYmFyIHtcbiAgdG9wOiAxMCU7XG59XG5cbi5pbWdzY2FuIHtcbiAgdG9wOiAtNyU7XG4gIGZvbnQtc2l6ZTogNDdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jYmFyIHtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIHdpZHRoOiA3LjVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/tracking/tracking.page.ts":
/*!*******************************************!*\
  !*** ./src/app/tracking/tracking.page.ts ***!
  \*******************************************/
/*! exports provided: TrackingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingPage", function() { return TrackingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apiservice.service */ "./src/app/apiservice.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var TrackingPage = /** @class */ (function () {
    function TrackingPage(formbuilder, routeto, Vanityartservice, alert, routerOutlet) {
        this.formbuilder = formbuilder;
        this.routeto = routeto;
        this.Vanityartservice = Vanityartservice;
        this.alert = alert;
        this.routerOutlet = routerOutlet;
        this.enterEvt = false;
        this.eventLog = "";
        this.autoSave = false;
        this.message = [];
        this.enableSerialNo = false;
        this.serialNumbers = [];
        this.itemMatch = false;
        this.enableSaveBtn = false;
        this.validation_messages = {
            'tracking': [
                // { type: 'required', message: this.message[3] },
                { type: 'required', message: 'Tracking Number cannot be empty or null' },
                { type: 'pattern', message: 'Only numbers and characters are allowed' },
            ],
        };
        this.trackingordr = this.formbuilder.group({
            tracking: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            itemvalues: ['',],
            serialNo: ['']
        });
        this.message = JSON.parse(localStorage.getItem(("Message")));
    }
    TrackingPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.tracking.setFocus();
        }, 400);
    };
    TrackingPage.prototype.ngOnInit = function () {
        this.userId = JSON.parse(localStorage.getItem(("Id")));
        this.routerOutlet.swipeGesture = false;
    };
    TrackingPage.prototype.scanOrder = function () {
        var value = this.trackingordr.controls['tracking'].value;
        this.trackingSearch(value);
    };
    //order search via enter key
    TrackingPage.prototype.handleScanner = function (evt) {
        var _this = this;
        setTimeout(function () {
            var value = evt.target.value;
            _this.trackingSearch(value);
        }, 800);
    };
    //items search via enter key
    TrackingPage.prototype.handleitemScanner = function (evt) {
        var _this = this;
        setTimeout(function () {
            var value = evt.target.value;
            var isItemAvailable = _this.scanItemList.filter(function (item) { return item.itemUpc == value.toUpperCase(); });
            if (isItemAvailable.length > 0) {
                _this.itemssearch(value);
            }
            else {
                _this.Vanityartservice.PresentToast('Item # does not match with any items', 'danger');
            }
        }, 800);
    };
    TrackingPage.prototype.handleserialNoScanner = function (evt) {
        var value = evt.target.value;
        if (value.length == 11) {
            this.trackingordr.controls['serialNo'].disable();
            this.serailNoScan(value);
        }
    };
    TrackingPage.prototype.serailNoScan = function (value) {
        var _this = this;
        if (this.itemMatch == true) {
            var serialNo_1 = value.toUpperCase();
            if (serialNo_1.length == 11) {
                var url = this.Vanityartservice.baseUrl + this.Vanityartservice.serialScan;
                var data = {
                    "BOL": this.respData.trackingNumber,
                    "order": this.orderno,
                    "serialNumber": serialNo_1
                };
                this.Vanityartservice.present();
                this.Vanityartservice.ajaxCallService(url, "post", data).then(function (resp) {
                    _this.serialData = resp;
                    if (_this.serialData['status'] == 'Success') {
                        _this.Vanityartservice.dismiss();
                        _this.dataSource = _this.serialData['dataSource'];
                        if (_this.trackingordr.value.itemvalues) {
                            _this.scaneditems = _this.trackingordr.value.itemvalues.toUpperCase();
                        }
                        if (_this.scaneditems) {
                            for (var idx in _this.scanItemList) {
                                if (_this.scanItemList[idx]['itemUpc'] && _this.scanItemList[idx]['itemUpc'] == _this.scaneditems) {
                                    if (_this.scanItemList[idx]['scannedItems'] < _this.scanItemList[idx]['itemQuantity']) {
                                        var isDuplicate = _this.scanItemList[idx]['serialNumbers'].includes(serialNo_1);
                                        var checkAllSerials = _this.serialNumbers.includes(serialNo_1);
                                        if (!isDuplicate && !checkAllSerials) {
                                            _this.serialNumbers.push(serialNo_1);
                                            _this.scanItemList[idx]['serialNumbers'].push(serialNo_1);
                                            _this.scanItemList[idx]['scannedItems']++;
                                            _this.trackingordr.controls['itemvalues'].reset();
                                            setTimeout(function () {
                                                _this.itemNo.setFocus();
                                            }, 200);
                                            //this.trackingordr.controls['serialNo'].enable();
                                            _this.trackingordr.controls['serialNo'].reset();
                                            // setTimeout(()=>{
                                            //   this.serialNo.setFocus();
                                            // },200)
                                            if (_this.scanItemList[idx]['scannedItems'] == _this.scanItemList[idx]['itemQuantity']) {
                                                _this.enableSerialNo = false;
                                                _this.trackingordr.controls['itemvalues'].reset();
                                                _this.itemMatch = false;
                                                _this.scanItemList[idx]['selected'] = false;
                                                _this.scanItemList[idx]['isScanned'] = true;
                                                setTimeout(function () {
                                                    _this.itemNo.setFocus();
                                                }, 200);
                                                var checkItems = _this.scanItemList;
                                                checkItems = checkItems.filter(function (item) { return item.scannedItems < item.itemQuantity; });
                                                if (_this.autoSave && checkItems.length == 0) {
                                                    setTimeout(function () {
                                                        _this.trackingsubmit();
                                                    }, 200);
                                                }
                                                else if (!_this.autoSave && checkItems.length == 0) {
                                                    _this.enableSaveBtn = true;
                                                }
                                            }
                                        }
                                        else {
                                            _this.trackingordr.controls['serialNo'].enable();
                                            setTimeout(function () {
                                                _this.serialNo.setFocus();
                                            }, 100);
                                            _this.Vanityartservice.PresentToast('No duplicate serial number allowed across items', "danger");
                                        }
                                    }
                                    else {
                                        _this.trackingordr.controls['itemvalues'].reset();
                                        _this.Vanityartservice.PresentToast('All quantities are scanned', "success");
                                    }
                                }
                                else if (_this.scanItemList[idx]['itemName'] == _this.scaneditems) {
                                    if (_this.scanItemList[idx]['scannedItems'] < _this.scanItemList[idx]['itemQuantity']) {
                                        var isDuplicate = _this.scanItemList[idx]['serialNumbers'].includes(serialNo_1);
                                        var checkAllSerials = _this.serialNumbers.includes(serialNo_1);
                                        if (!isDuplicate && !checkAllSerials) {
                                            _this.serialNumbers.push(serialNo_1);
                                            _this.scanItemList[idx]['serialNumbers'].push(serialNo_1);
                                            _this.scanItemList[idx]['scannedItems']++;
                                            //this.trackingordr.controls['serialNo'].enable();
                                            _this.trackingordr.controls['itemvalues'].reset();
                                            setTimeout(function () {
                                                _this.itemNo.setFocus();
                                            }, 200);
                                            _this.trackingordr.controls['serialNo'].reset();
                                            // setTimeout(()=>{
                                            //   this.serialNo.setFocus();
                                            // },200)
                                            if (_this.scanItemList[idx]['scannedItems'] == _this.scanItemList[idx]['itemQuantity']) {
                                                _this.enableSerialNo = false;
                                                _this.trackingordr.controls['itemvalues'].reset();
                                                _this.itemMatch = false;
                                                _this.scanItemList[idx]['selected'] = false;
                                                _this.scanItemList[idx]['isScanned'] = true;
                                                setTimeout(function () {
                                                    _this.itemNo.setFocus();
                                                }, 200);
                                                var checkItems = _this.scanItemList;
                                                checkItems = checkItems.filter(function (item) { return item.scannedItems < item.itemQuantity; });
                                                if (_this.autoSave && checkItems.length == 0) {
                                                    setTimeout(function () {
                                                        _this.trackingsubmit();
                                                    }, 200);
                                                }
                                                else if (!_this.autoSave && checkItems.length == 0) {
                                                    _this.enableSaveBtn = true;
                                                }
                                            }
                                        }
                                        else {
                                            _this.trackingordr.controls['serialNo'].enable();
                                            setTimeout(function () {
                                                _this.serialNo.setFocus();
                                            }, 100);
                                            _this.Vanityartservice.PresentToast('No duplicate serial number allowed across items', "danger");
                                        }
                                    }
                                    else {
                                        _this.trackingordr.controls['itemvalues'].reset();
                                        _this.Vanityartservice.PresentToast('All quantities are scanned', "success");
                                    }
                                }
                            }
                        }
                        else {
                            _this.scaneditems = _this.byPassedItem;
                            for (var idx in _this.scanItemList) {
                                if (_this.scanItemList[idx]['itemUpc'] && _this.scanItemList[idx]['itemUpc'] == _this.scaneditems) {
                                    if (_this.scanItemList[idx]['scannedItems'] < _this.scanItemList[idx]['itemQuantity']) {
                                        var isDuplicate = _this.scanItemList[idx]['serialNumbers'].includes(serialNo_1);
                                        var checkAllSerials = _this.serialNumbers.includes(serialNo_1);
                                        if (!isDuplicate && !checkAllSerials) {
                                            _this.serialNumbers.push(serialNo_1);
                                            _this.scanItemList[idx]['serialNumbers'].push(serialNo_1);
                                            _this.scanItemList[idx]['scannedItems']++;
                                            //this.trackingordr.controls['serialNo'].enable();
                                            //this.trackingordr.controls['itemvalues'].reset();
                                            _this.trackingordr.controls['itemvalues'].reset();
                                            setTimeout(function () {
                                                _this.itemNo.setFocus();
                                            }, 200);
                                            _this.trackingordr.controls['serialNo'].reset();
                                            // setTimeout(()=>{
                                            //   this.serialNo.setFocus();
                                            // },200)
                                            if (_this.scanItemList[idx]['scannedItems'] == _this.scanItemList[idx]['itemQuantity']) {
                                                _this.trackingordr.controls['serialNo'].reset();
                                                _this.itemMatch = false;
                                                _this.enableSerialNo = false;
                                                _this.scanItemList[idx]['selected'] = false;
                                                _this.scanItemList[idx]['isScanned'] = true;
                                                setTimeout(function () {
                                                    _this.itemNo.setFocus();
                                                }, 200);
                                                var checkItems = _this.scanItemList;
                                                checkItems = checkItems.filter(function (item) { return item.scannedItems < item.itemQuantity; });
                                                if (_this.autoSave && checkItems.length == 0) {
                                                    setTimeout(function () {
                                                        _this.trackingsubmit();
                                                    }, 200);
                                                }
                                                else if (!_this.autoSave && checkItems.length == 0) {
                                                    _this.enableSaveBtn = true;
                                                }
                                            }
                                        }
                                        else {
                                            _this.trackingordr.controls['serialNo'].enable();
                                            setTimeout(function () {
                                                _this.serialNo.setFocus();
                                            }, 100);
                                            _this.Vanityartservice.PresentToast('No duplicate serial number allowed across items', "danger");
                                        }
                                    }
                                    else {
                                        _this.trackingordr.controls['itemvalues'].reset();
                                        _this.Vanityartservice.PresentToast('All quantities are scanned', "success");
                                    }
                                }
                                else if (_this.scanItemList[idx]['itemName'] == _this.scaneditems) {
                                    if (_this.scanItemList[idx]['scannedItems'] < _this.scanItemList[idx]['itemQuantity']) {
                                        var isDuplicate = _this.scanItemList[idx]['serialNumbers'].includes(serialNo_1);
                                        var checkAllSerials = _this.serialNumbers.includes(serialNo_1);
                                        if (!isDuplicate && !checkAllSerials) {
                                            _this.serialNumbers.push(serialNo_1);
                                            _this.scanItemList[idx]['serialNumbers'].push(serialNo_1);
                                            _this.scanItemList[idx]['scannedItems']++;
                                            // this.trackingordr.controls['serialNo'].enable();
                                            // this.trackingordr.controls['itemvalues'].reset();
                                            _this.trackingordr.controls['itemvalues'].reset();
                                            setTimeout(function () {
                                                _this.itemNo.setFocus();
                                            }, 200);
                                            _this.trackingordr.controls['serialNo'].reset();
                                            // setTimeout(()=>{
                                            //   this.serialNo.setFocus();
                                            // },200)
                                            if (_this.scanItemList[idx]['scannedItems'] == _this.scanItemList[idx]['itemQuantity']) {
                                                _this.trackingordr.controls['serialNo'].reset();
                                                _this.itemMatch = false;
                                                _this.enableSerialNo = false;
                                                _this.scanItemList[idx]['selected'] = false;
                                                _this.scanItemList[idx]['isScanned'] = true;
                                                setTimeout(function () {
                                                    _this.itemNo.setFocus();
                                                }, 200);
                                                var checkItems = _this.scanItemList;
                                                checkItems = checkItems.filter(function (item) { return item.scannedItems < item.itemQuantity; });
                                                if (_this.autoSave && checkItems.length == 0) {
                                                    setTimeout(function () {
                                                        _this.trackingsubmit();
                                                    }, 200);
                                                }
                                                else if (!_this.autoSave && checkItems.length == 0) {
                                                    _this.enableSaveBtn = true;
                                                }
                                            }
                                        }
                                        else {
                                            _this.trackingordr.controls['serialNo'].enable();
                                            setTimeout(function () {
                                                _this.serialNo.setFocus();
                                            }, 100);
                                            _this.Vanityartservice.PresentToast('No duplicate serial number allowed across items', "danger");
                                        }
                                    }
                                    else {
                                        _this.trackingordr.controls['itemvalues'].reset();
                                        _this.Vanityartservice.PresentToast('All quantities are scanned', "success");
                                    }
                                }
                            }
                        }
                    }
                    else if (_this.serialData['status'] == 'Fail') {
                        _this.Vanityartservice.dismiss();
                        _this.trackingordr.controls['serialNo'].enable();
                        _this.Vanityartservice.PresentToast(_this.serialData['message'], 'danger');
                    }
                }).catch(function (err) {
                    _this.Vanityartservice.dismiss();
                    _this.trackingordr.controls['serialNo'].enable();
                    _this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
                });
            }
            else {
                this.trackingordr.controls['serialNo'].enable();
                this.Vanityartservice.PresentToast('Serial Number must be 11 digits', "danger");
            }
        }
        else {
            this.trackingordr.controls['serialNo'].enable();
            this.itemNo.setFocus();
            this.Vanityartservice.PresentToast('No item has been scanned. Please scan an item before serial number scanning.', "danger");
        }
    };
    //Method to go back to home page
    TrackingPage.prototype.backToHome = function () {
        var tracking = this.trackingordr.controls.tracking.value;
        if (tracking == "" || tracking == null) {
            this.routeto.navigate(['/menuitems']);
        }
        else {
            this.Vanityartservice.PresentToast("There is unsaved data in the form, either save or clear the form.", "danger");
        }
    };
    //Method to check if autoSave is on/off
    TrackingPage.prototype.isChecked = function (evt) {
        var check = evt.target.checked;
        if (check == true) {
            this.autoSave = true;
        }
        else {
            this.autoSave = false;
        }
    };
    //Method for tracking items
    TrackingPage.prototype.trackingSearch = function (evt) {
        var _this = this;
        var trackingscan = this.Vanityartservice.baseUrl + this.Vanityartservice.trackingitems;
        var trckaingvalue = evt;
        if (trckaingvalue != "" && trckaingvalue != null) {
            var dataParam = {
                "TrackingNumber": trckaingvalue.toUpperCase()
            };
            this.Vanityartservice.present();
            this.Vanityartservice.ajaxCallService(trackingscan, "post", dataParam).then(function (resp) {
                _this.respData = resp;
                console.log("res", _this.respData);
                if (resp['scanItemList']['length'] != 0) {
                    _this.enterEvt = false;
                    _this.enterEvt = false;
                    _this.scanItemList = resp['scanItemList'];
                    console.log(_this.scanItemList.length);
                    // this.scanItemList = this.scanItemList.filter(item => item.isScanned == false)
                    for (var _i = 0, _a = _this.scanItemList; _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.serialNumbers = [];
                        if (item.isScanned == false) {
                            item.scannedItems = 0;
                        }
                    }
                    _this.scanItemList.map(function (i) { return i.isscanneditemslist = 0; });
                    _this.trackingList = resp;
                    _this.orderno = resp['order'];
                    _this.trackingnumber = resp['trackingNumber'];
                    _this.shipdate = resp['shipDateString'];
                    _this.customername = '( ' + resp['customerName'] + ')';
                    _this.eventLog = 'Tracking # ' + trckaingvalue + ' successfully scanned' + '\n' + _this.eventLog;
                    _this.trackingordr.controls['tracking'].disable();
                    setTimeout(function () {
                        _this.itemNo.setFocus();
                    }, 300);
                }
                else if (resp['status'] == 'Scanned') {
                    _this.openConfirmationAlert(resp, trckaingvalue);
                    _this.eventLog = 'Tracking # ' + trckaingvalue + ' already scanned. \u2716' + '\n' + _this.eventLog;
                    _this.Vanityartservice.PresentToast('Order/Tracking # ' + trckaingvalue + ' already added/scanned', "danger");
                }
                else {
                    _this.eventLog = 'Tracking # ' + trckaingvalue.toUpperCase() + ' ' + resp['message'] + ' \u2716' + '\n' + _this.eventLog;
                    // this.Vanityartservice.PresentToast("Invalid Order/Tracking #", "danger");
                    _this.Vanityartservice.PresentToast(resp['message'], 'danger');
                    _this.trackingordr.controls['tracking'].reset();
                    setTimeout(function () {
                        _this.tracking.setFocus();
                    }, 500);
                }
                _this.Vanityartservice.dismiss();
            }).catch(function (err) {
                _this.Vanityartservice.dismiss();
                _this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
            });
        }
    };
    //Tracking items scan
    TrackingPage.prototype.itemssearch = function (evt) {
        var itemvalue = evt;
        this.enableSerialNo = true;
        var temp, tempAuto;
        this.scaneditems = this.trackingordr.value.itemvalues.toUpperCase();
        for (var _i = 0, _a = this.scanItemList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.itemUpc == this.scaneditems && item.isScanned == false) {
                // item.isScanned = true;
                this.itemMatch = true;
                this.trackingordr.controls['serialNo'].enable();
                this.serialNo.setFocus();
                item.isByPass = false;
                if (!item.scannedItems) {
                    item.scannedItems = 0;
                }
                // if(!item.serialNumber){
                //   item.serialNumbers = [];
                // } 
                item.selected = true;
                temp = true;
            }
            else if (item.itemUpc == this.scaneditems && item.scannedItems == item.itemQuantity) {
                this.Vanityartservice.PresentToast('Item and serial number(s) are already scanned & completed.', 'danger');
            }
        }
        // if (!temp) {
        //   this.Vanityartservice.PresentToast(this.message[4], 'danger');
        //   this.eventLog = 'Items# ' + this.scaneditems + ' ' + this.message[4] + ' \u2714' + '\n' + this.eventLog;
        //   this.enableSerialNo = false
        //   this.trackingordr.controls['itemvalues'].reset();
        // }
        // if (this.autoSave) {
        //   for (let idx of this.scanItemList) {
        //     if (idx['itemQuantity'] == idx['scannedItems']) {
        //       tempAuto = true;
        //     } else {
        //       tempAuto = false;
        //       break;
        //     }
        //   }
        //   if (tempAuto) {
        //     // if (this.trackingordr.value['pro'] != '' && this.trackingordr.value['pro'] != undefined) {
        //     this.trackingsubmit();     
        //   } else {
        //     setTimeout(() => {
        //       this.serialNo.setFocus();
        //     }, 300);
        //   }
        // } else {
        //   for (let idx of this.scanItemList) {
        //     if (idx['itemQuantity'] == idx['scannedItems']) {
        //       tempAuto = true;
        //     } else {
        //       tempAuto = false;
        //       break;
        //     }
        //   }
        //   if (!tempAuto) {
        //     setTimeout(() => {
        //       this.serialNo.setFocus();
        //     }, 300);
        //   } else {
        //     setTimeout(() => {
        //       this.itemNo.setFocus();
        //     }, 300);
        //   }
        // }
    };
    //method for trackingsubmit
    TrackingPage.prototype.trackingsubmit = function () {
        var _this = this;
        this.Vanityartservice.present();
        var checkQuantity = this.scanItemList.filter(function (item) { return item.scannedItems != item.itemQuantity; });
        if (checkQuantity.length == 0) {
            this.serialNumbers = [];
        }
        this.trackingordr.controls['itemvalues'].reset();
        this.trackingordr.controls['serialNo'].reset();
        this.itemMatch = false;
        this.itemlist = this.scanItemList.filter(function (item) { return item.isScanned == true && item.scannedItems == item.itemQuantity; });
        var saveTracking = this.Vanityartservice.baseUrl + this.Vanityartservice.savetrckingitems;
        console.log(this.itemslist);
        this.d = new Date();
        this.n = this.d.toJSON();
        var jsonobj = {
            "trackingNumber": this.respData.trackingNumber,
            "order": this.respData.order,
            "customerName": this.respData.customerName,
            "orderDateString": this.respData.orderDateString,
            "shipDateString": this.respData.shipDateString,
            "carrier": this.respData.carrier,
            "orderStatus": this.respData.orderStatus,
            "shippingMethod": this.respData.shippingMethod,
            "pro": this.trackingordr.value.pro,
            "Modified": this.userId,
            "scanItemList": this.itemlist,
            "scanDate": this.n,
            "isScanned": this.respData.isScanned = true,
            "status": this.respData.status,
            "dataSource": this.dataSource
        };
        this.Vanityartservice.ajaxCallService(saveTracking, "post", jsonobj).then(function (result) {
            if (result['status'] == "Success") {
                _this.enableSaveBtn = false;
                _this.Vanityartservice.PresentToast('Tracking  completed & ' + result['message'], "success");
                _this.eventLog = 'Tracking# ' + _this.respData.trackingNumber + ' scan and save completed. \u2714' + '\n' + _this.eventLog;
                _this.formreset();
                setTimeout(function () {
                    _this.tracking.setFocus();
                }, 400);
            }
            else if (result['status'] == "Fail") {
                _this.Vanityartservice.PresentToast('Tracking # ' + result['message'], "danger");
            }
            _this.Vanityartservice.dismiss();
        }).catch(function (err) {
            _this.Vanityartservice.dismiss();
            _this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
        });
    };
    TrackingPage.prototype.formreset = function () {
        var _this = this;
        this.trackingordr.controls['tracking'].enable();
        this.trackingordr.reset();
        this.scanItemList = [];
        this.serialNumbers = [];
        this.shipdate = '';
        this.orderno = '';
        this.customername = '';
        this.eventLog = '';
        setTimeout(function () {
            _this.tracking.setFocus();
        }, 400);
        setTimeout(function () {
        }, 2000);
    };
    //Method to open confirmation alert
    TrackingPage.prototype.openConfirmationAlert = function (resp, track) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Confirmation',
                            message: resp['message'],
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        var jsonobj = {
                                            "order": resp['order'],
                                            "Modified": _this.userId,
                                            "TrackingNumber": track.toUpperCase()
                                        };
                                        var url = _this.Vanityartservice.baseUrl + _this.Vanityartservice.readyToShipped;
                                        _this.Vanityartservice.ajaxCallService(url, "post", jsonobj).then(function (result) {
                                            console.log(result);
                                            if (result['status'] == 'Success') {
                                                _this.itemMatch = false;
                                                _this.Vanityartservice.PresentToast(result['message'], 'success');
                                                _this.enterEvt = false;
                                                _this.enterEvt = false;
                                                _this.scanItemList = result['scanItemList'];
                                                for (var _i = 0, _a = _this.scanItemList; _i < _a.length; _i++) {
                                                    var item = _a[_i];
                                                    item.scannedItems = 0;
                                                }
                                                _this.scanItemList.map(function (i) { return i.isscanneditemslist = 0; });
                                                _this.trackingList = result;
                                                _this.orderno = result['order'];
                                                _this.trackingnumber = result['trackingNumber'];
                                                _this.shipdate = result['shipDateString'];
                                                _this.customername = '( ' + result['customerName'] + ')';
                                                _this.eventLog = 'Tracking # ' + _this.trackingordr.value.tracking + ' successfully scanned' + '\n' + _this.eventLog;
                                                _this.trackingordr.controls['tracking'].setValue(track.toUpperCase());
                                                _this.trackingordr.controls['tracking'].disable();
                                                setTimeout(function () {
                                                    _this.itemNo.setFocus();
                                                }, 300);
                                            }
                                            else {
                                                _this.Vanityartservice.PresentToast(result['message'], 'danger');
                                                _this.eventLog = 'Tracking # ' + result['message'] + '\n' + _this.eventLog;
                                            }
                                        }).catch(function (err) {
                                            _this.Vanityartservice.dismiss();
                                            _this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Method to check the item as completely scanned
    TrackingPage.prototype.checkToComplete = function (scan) {
        this.enableSerialNo = true;
        var tempAuto = false;
        for (var _i = 0, _a = this.scanItemList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.itemName == scan.itemName && item.isScanned == false) {
                this.trackingordr.controls['itemvalues'].reset();
                this.trackingordr.controls['itemvalues'].setValue(scan.itemUpc);
                this.trackingordr.controls['serialNo'].enable();
                this.serialNo.setFocus();
                this.itemMatch = true;
                //item.isScanned = true;
                item.isByPass = true;
                item.scannedItems = 0;
                // item.serialNumbers = [];
                item.selected = true;
                this.scaneditems = null;
                if (item.itemUpc) {
                    this.byPassedItem = item.itemUpc;
                }
                else {
                    this.byPassedItem = item.itemName;
                }
            }
        }
        //   if (this.autoSave) {
        //     for (let idx of this.scanItemList) {
        //       if (idx['itemQuantity'] == idx['scannedItems']) {
        //         tempAuto = true;
        //       } else {
        //         tempAuto = false;
        //         break;
        //       }
        //     }
        //     if (tempAuto) {
        //       this.trackingsubmit();  
        //     } else {
        //       setTimeout(() => {
        //         this.serialNo.setFocus();
        //       }, 300);
        //     }
        //   } else {
        //     for (let idx of this.scanItemList) {
        //       if (idx['itemQuantity'] == idx['scannedItems']) {
        //         tempAuto = true;
        //       } else {
        //         tempAuto = false;
        //         break;
        //       }
        //     }
        //     if (!tempAuto) {
        //       setTimeout(() => {
        //         this.serialNo.setFocus();
        //       }, 300);
        //     } else {
        //       setTimeout(() => {
        //         this.itemNo.setFocus();
        //       }, 300);
        //     }
        //   }
    };
    TrackingPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tracking', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TrackingPage.prototype, "tracking", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('itemNo', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TrackingPage.prototype, "itemNo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('serialNo', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TrackingPage.prototype, "serialNo", void 0);
    TrackingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tracking',
            template: __webpack_require__(/*! raw-loader!./tracking.page.html */ "./node_modules/raw-loader/index.js!./src/app/tracking/tracking.page.html"),
            styles: [__webpack_require__(/*! ./tracking.page.scss */ "./src/app/tracking/tracking.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"]])
    ], TrackingPage);
    return TrackingPage;
}());



/***/ })

}]);
//# sourceMappingURL=tracking-tracking-module-es5.js.map