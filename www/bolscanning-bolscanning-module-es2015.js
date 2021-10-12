(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bolscanning-bolscanning-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/bolscanning/bolscanning.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bolscanning/bolscanning.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-padding class-headerimg\">\n  <div class=\"ion-text-center ion-text-uppercase title\">BOL SCANNING</div>\n  <ion-toolbar class=\"tool2\">\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"4\" class=\"ion-text-left padd-left-0\">\n          <ion-buttons class=\"back-marg\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\" (click)=\"backToHome()\">BACK</ion-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"2\" class=\"ion-text-center\">\n          <ion-button fill='clear' class=\"save-center\" type=\"submit\" (click)=\"bolscansubmit()\"\n            [disabled]=\"bolscanning.invalid || autoSave == true || enableSaveBtn == false\">SAVE\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"4\" class=\"ion-text-right\" (click)=\"formreset()\">\n          <ion-buttons class=\"clear-marg\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\">CLEAR</ion-button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-no-padding\">\n  <form [formGroup]=\"bolscanning\">\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"11\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">BOL #</ion-label>\n          <ion-input #bolnumber clearInput class=\"ion-text-uppercase lab-font\" type=\"text\" formControlName=\"bolnumber\"\n            (keyup.enter)=\"handleScanner($event)\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <div *ngFor=\"let validation of validation_messages['bolnumber']\">\n            <div class=\"error-message\"\n              *ngIf=\"bolscanning.get('bolnumber').hasError(validation['type']) && bolscanning.get('bolnumber').touched\">\n              {{ validation.message }}\n            </div>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col size=\"1\"\n        style=\"display: flex!important; align-content: center!important; align-items: center!important;\">\n        <ion-buttons>\n          <ion-button fill=\"clear\" (click)=\"scanOrder()\" type=\"button\" item-right\n            style=\"background:white; margin-top: 100%\">\n            <ion-icon name=\"search\" style=\"width: 35px; height: 35px; color:darkgray\"> </ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">Item No</ion-label>\n          <ion-input type=\"text\" #itemNo (keyup.enter)=\"handleitemScanner($event)\" formControlName=\"itemvalues\"\n            clearInput class=\"ion-text-uppercase lab-font\">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">Serial No</ion-label>\n          <ion-input type=\"text\" #serialNo (ionInput)=\"handleserialNoScanner($event)\" maxLength=\"11\" formControlName=\"serialNo\"\n            clearInput class=\"ion-text-uppercase lab-font\">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"rowtab\" *ngIf=\"scanItemList != undefined && scanItemList.length > 0\">\n      <ion-col size=\"4\">\n        <ion-label position=\"floating\" class=\"lab-font lab-color\">ITEM</ion-label>\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-text-center\">\n        <ion-label position=\"floating\" class=\"lab-font lab-color\">QTY</ion-label>\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-text-right\">\n        <ion-label position=\"floating\" class=\"lab-font lab-color\">SCAN</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let item of scanItemList;let i = index\" class=\"rowtab\">\n      <ion-col size=\"4\">\n        <ion-label [ngClass]=\"item.selected == true && item.itemUpc == bolscanning.value.itemvalues ? 'itemName': ''\" position=\"floating\" class=\"lab-font lab-color\">{{item.itemName}}</ion-label>\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-text-center\">\n        <ion-label [ngClass]=\"item.selected == true && item.itemUpc == bolscanning.value.itemvalues ? 'itemName': ''\" position=\"floating\" class=\"lab-font lab-color\">{{item.itemQuantity}}</ion-label>\n      </ion-col>\n      <!-- <ion-col size=\"2\">\n        <img src=\"./assets/icon/checkmark-circle.svg\" class=\"imgscan\" width=\"50%\">\n      </ion-col> -->\n\n      <!-- item.isscanneditemslist == 0 ? 'gray' : item.isscanneditemslist < item.itemQuantity ? 'orange' : item.isscanneditemslist >= item.itemQuantity ? 'green' : '' -->\n      <ion-col size=\"2\" (click)=\"checkToComplete(item)\">\n        <ion-icon name=\"checkmark-circle\"\n        [style.color]=\"item.selected == true  ? 'orange' : item.scannedItems >= item.itemQuantity || item.isScanned == true ? 'green' : item.scannedItems == 0 ? 'gray':''\"\n        class=\"imgscan\"></ion-icon>\n      </ion-col>\n      <!-- && item.itemUpc == bolscanning.value.itemvalues -->\n      <ion-col size=\"2\"> \n        <!-- <ion-progress-bar *ngIf=\"item.scannedItems == 0\" color=\"primary\" value=\"0\" width=\"50%\"\n          id=\"bar\">\n        </ion-progress-bar> -->\n        <ion-progress-bar *ngIf=\"item.isScanned == false\" color=\"primary\" value=\"{{(1/item.itemQuantity)* item.scannedItems}}\" width=\"50%\"\n          id=\"bar\">\n        </ion-progress-bar>\n        <ion-progress-bar *ngIf=\"item.isScanned == true \" color=\"primary\" value=\"1\" width=\"50%\"\n          id=\"bar\">\n        </ion-progress-bar>\n      </ion-col>\n      <ion-note style=\"margin-left: 1%;\">{{item.itemDescription}}</ion-note>\n      <!-- <ion-col size=\"2\">\n        <ion-progress-bar color=\"primary\" value=\"{{(1/item.itemQuantity)* item.isscanneditemslist}}\" width=\"50%\" id=\"bar_{{i}}\">\n        </ion-progress-bar>\n      </ion-col> --> \n    </ion-row>\n\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">PRO # </ion-label>\n          <ion-input #pro type=\"text\" class=\"lab-font lab-color\" style=\"width: 50%;\" formControlName=\"pro\"\n            (keyup.enter)=\"handleproScanner($event)\">\n          </ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <div *ngFor=\"let validation of validation_messages['pro']\">\n            <div class=\"error-message\"\n              *ngIf=\"bolscanning.get('pro').hasError(validation['type']) && bolscanning.get('pro').touched\">\n              {{ validation.message }}\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <ion-label position=\"floating\" class=\"lab-font lab-color\"> Order No\n            &nbsp;{{po}}{{customername}}\n          </ion-label>\n          <br>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item lines=\"none\">\n          <ion-label position=\"floating\" class=\"lab-font lab-color\"> ShipDate &nbsp; {{shipdate}}\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </form>\n  <ion-toolbar class=\"tool1\">\n    <ion-grid style=\"padding: 3% 5%\">\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-label class=\"lab-font\">Auto Save</ion-label>\n        </ion-col>\n        <ion-col size=\"2\" class=\"ion-text-center\">\n          <label class=\"switch\"><input type=\"checkbox\" (change)=\"isChecked($event)\">\n            <div class=\"slider rnd\"><span class=\"on\">ON</span><span class=\"off\">OFF</span></div>\n          </label>\n        </ion-col>\n        <ion-col size=\"5\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  <ion-row class=\"marginTL10\">\n    <ion-col size=\"12\">\n      <ion-label position=\"stacked\" class=\"event-font marginTL10\">Event Log</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item class=\"ion-padding-horizontal\">\n        <ion-textarea rows=\"3\" [readonly]='true' [(ngModel)]=\"eventLog\" class=\"event-font-italic\"></ion-textarea>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/bolscanning/bolscanning.module.ts":
/*!***************************************************!*\
  !*** ./src/app/bolscanning/bolscanning.module.ts ***!
  \***************************************************/
/*! exports provided: BolscanningPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BolscanningPageModule", function() { return BolscanningPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bolscanning_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bolscanning.page */ "./src/app/bolscanning/bolscanning.page.ts");







const routes = [
    {
        path: '',
        component: _bolscanning_page__WEBPACK_IMPORTED_MODULE_6__["BolscanningPage"]
    }
];
let BolscanningPageModule = class BolscanningPageModule {
};
BolscanningPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [_bolscanning_page__WEBPACK_IMPORTED_MODULE_6__["BolscanningPage"]]
    })
], BolscanningPageModule);



/***/ }),

/***/ "./src/app/bolscanning/bolscanning.page.scss":
/*!***************************************************!*\
  !*** ./src/app/bolscanning/bolscanning.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".round {\n  --border-radius: 50%;\n  --vertical-align: middle;\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #088088;\n  font-size: initial;\n  font-size: 25px;\n}\n\n.itemName {\n  font-weight: bold;\n}\n\n.class-headerimg {\n  background-image: url('bluebg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.back-marg {\n  float: left;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5;\n}\n\n.clear-marg {\n  background: transparent;\n  float: right;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5;\n}\n\n.save-center {\n  border-radius: 50%;\n  background: #07aeba;\n  font-size: 22px;\n  color: #ffffff;\n  height: 80px;\n  width: 85px;\n  border-radius: 50%;\n}\n\n.toggle-color {\n  --ion-color-base: #00BFCC !important;\n}\n\n.label-pos {\n  position: absolute;\n  bottom: 15%;\n}\n\n.row-padd {\n  padding: 1% 3%;\n}\n\n.error-message {\n  position: absolute;\n  left: 5%;\n  color: red;\n  font-size: 15px;\n}\n\n.title {\n  font-size: 33px;\n  font-weight: 500;\n  padding-top: 10px;\n  background: #00000000;\n  color: #fff;\n}\n\n.tool2 {\n  --background:#FFFFFF00;\n  --border-width: 0px !important;\n}\n\n.tool1 {\n  position: relative;\n  top: 1%;\n}\n\n.srccroll {\n  height: 200px;\n  overflow: scroll;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.srchgt {\n  height: auto;\n  overflow: hidden;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.lab-font {\n  font-size: 25px;\n}\n\n.event-font {\n  font-size: 16px;\n}\n\n.event-font-italic {\n  font-size: 16px;\n  color: #333;\n  font-style: italic;\n  margin: 0 2%;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 65px;\n  height: 34px;\n}\n\n.switch input {\n  display: none;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: grey;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 28px;\n  width: 28px;\n  left: 4px;\n  top: 3px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #00BFCC;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(55px);\n  transform: translateX(30px);\n}\n\n.on {\n  display: none;\n}\n\n.off {\n  padding-left: 33px;\n}\n\n.on {\n  padding-right: 25px;\n}\n\n.on, .off {\n  color: white;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  font-size: 13px;\n  font-family: Verdana, sans-serif;\n}\n\ninput:checked + .slider .on {\n  display: block;\n}\n\ninput:checked + .slider .off {\n  display: none;\n}\n\n.slider.rnd {\n  border-radius: 16px;\n}\n\n.slider.rnd:before {\n  border-radius: 14px;\n}\n\n.marginTL10 {\n  margin: 2% 3%;\n}\n\n.marginL15 {\n  margin-left: 35px !important;\n  margin-top: 0px !important;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 568px) {\n  .lab-font {\n    font-size: 13px;\n  }\n\n  .event-font {\n    font-size: 13px;\n  }\n}\n\n.validation-errors {\n  font-size: 15px;\n  color: red;\n}\n\ntable > tbody > tr > td:nth-child(1) {\n  width: 45%;\n  padding: 0% 0% 0% 5%;\n}\n\ntable > tbody > tr > td:nth-child(2) {\n  width: 45%;\n}\n\ntable > tbody > tr > td:nth-child(3) {\n  width: 45%;\n}\n\n.rowtab {\n  padding: 2% 5%;\n}\n\nion-progress-bar {\n  top: 10%;\n}\n\n.imgscan {\n  top: -7%;\n  font-size: 47px;\n  position: relative;\n}\n\n#bar {\n  height: 1.5rem;\n  width: 7.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTgxMTgwL0RvY3VtZW50cy92YW5pdHlBcnQtbGF0ZXN0L3Zhbml0eUFydC1MYXRlc3Qvc3JjL2FwcC9ib2xzY2FubmluZy9ib2xzY2FubmluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL2JvbHNjYW5uaW5nL2JvbHNjYW5uaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRko7O0FES0E7RUFDRSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0UsOENBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBREtBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUNJLG9DQUFBO0FDRko7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNGRjs7QURLQTtFQUNFLGNBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNENBQUE7RUFDSSxrQkFBQTtBQ0ZOOztBREtBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLQTtFQUNFLGVBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNGRjs7QURLQTtFQUFlLGFBQUE7QUNEZjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLHlCQWxLVTtBQ2tLWjs7QURHQTtFQUNFLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxtQ0FBQTtFQUVBLDJCQUFBO0FDQUY7O0FER0E7RUFFRSxhQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7QUNERjs7QURJQTtFQUVFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQ0ZGOztBREtBO0VBQ0MsY0FBQTtBQ0ZEOztBRElBO0VBQ0MsYUFBQTtBQ0REOztBREdBO0VBQ0UsbUJBQUE7QUNBRjs7QURHQTtFQUNJLG1CQUFBO0FDQUo7O0FER0E7RUFDRSxhQUFBO0FDQUY7O0FER0E7RUFDRSw0QkFBQTtFQUNBLDBCQUFBO0FDQUY7O0FERUE7RUFDRTtJQUNFLGVBQUE7RUNDRjs7RURDQTtJQUNFLGVBQUE7RUNFRjtBQUNGOztBRENBO0VBQ0MsZUFBQTtFQUNBLFVBQUE7QUNDRDs7QURDQTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtBQ0VGOztBRENBO0VBQ0UsVUFBQTtBQ0VGOztBREFBO0VBQ0UsVUFBQTtBQ0dGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBRENBO0VBQ0UsUUFBQTtBQ0VGOztBREFBO0VBQ0UsUUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL2JvbHNjYW5uaW5nL2JvbHNjYW5uaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRidG4tY29sb3I6ICMwMEJGQ0M7XHJcbiR0ZXh0LWNvbG9yOiAjMDcwNzA3O1xyXG5cclxuLnJvdW5kIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMDg4MDg4O1xyXG4gICAgZm9udC1zaXplOiBpbml0aWFsO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uaXRlbU5hbWV7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jbGFzcy1oZWFkZXJpbWcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9ibHVlYmcucG5nXCIpIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5iYWNrLW1hcmd7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjUlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjMjljNWM1O1xyXG59XHJcblxyXG4uY2xlYXItbWFyZ3tcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjUlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjMjljNWM1O1xyXG59XHJcblxyXG4uc2F2ZS1jZW50ZXJ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICMwN2FlYmE7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogODVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi50b2dnbGUtY29sb3J7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMDBCRkNDICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYWJlbC1wb3N7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTUlO1xyXG59XHJcblxyXG4ucm93LXBhZGR7XHJcbiAgcGFkZGluZzogMSUgMyU7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1JTtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDMzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50b29sMntcclxuICAtLWJhY2tncm91bmQ6I0ZGRkZGRjAwO1xyXG4gIC0tYm9yZGVyLXdpZHRoIDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50b29sMXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxJTtcclxufVxyXG5cclxuLnNyY2Nyb2xse1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnNyY2hndHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlIDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5sYWItZm9udHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5ldmVudC1mb250e1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmV2ZW50LWZvbnQtaXRhbGlje1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgbWFyZ2luOiAwIDIlO1xyXG59XHJcblxyXG4uc3dpdGNoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA2NXB4O1xyXG4gIGhlaWdodDogMzRweDtcclxufVxyXG5cclxuLnN3aXRjaCBpbnB1dCB7ZGlzcGxheTpub25lO31cclxuXHJcbi5zbGlkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG4uc2xpZGVyOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIHdpZHRoOiAyOHB4O1xyXG4gIGxlZnQ6IDRweDtcclxuICB0b3A6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnRuLWNvbG9yO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcclxufVxyXG5cclxuLm9uXHJcbntcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ub2Zme1xyXG4gIHBhZGRpbmctbGVmdDozM3B4O1xyXG59XHJcblxyXG4ub257XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5cclxuLm9uLCAub2ZmXHJcbntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCsgLnNsaWRlciAub25cclxue2Rpc3BsYXk6IGJsb2NrO31cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIC5vZmZcclxue2Rpc3BsYXk6IG5vbmU7fVxyXG5cclxuLnNsaWRlci5ybmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuXHJcbi5zbGlkZXIucm5kOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG4ubWFyZ2luVEwxMCB7XHJcbiAgbWFyZ2luOiAyJSAzJTtcclxufVxyXG4gIFxyXG4ubWFyZ2luTDE1IHtcclxuICBtYXJnaW4tbGVmdDogMzVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA1NjhweCkge1xyXG4gIC5sYWItZm9udHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLmV2ZW50LWZvbnR7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIFxyXG59XHJcbi52YWxpZGF0aW9uLWVycm9yc3tcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Y29sb3I6IHJlZDtcclxufVxyXG50YWJsZSA+dGJvZHkgPiB0ciA+IHRkOm50aC1jaGlsZCgxKXtcclxuICB3aWR0aDogNDUlO1xyXG4gIHBhZGRpbmc6IDAlIDAlIDAlIDUlO1xyXG4gIFxyXG59XHJcbnRhYmxlID50Ym9keSA+IHRyID4gdGQ6bnRoLWNoaWxkKDIpe1xyXG4gIHdpZHRoOiA0NSU7ICBcclxufVxyXG50YWJsZSA+dGJvZHkgPiB0ciA+IHRkOm50aC1jaGlsZCgzKXtcclxuICB3aWR0aDogNDUlOyAgXHJcbn1cclxuLy8gdGFibGUgPnRib2R5ID4gdHJ7XHJcbi8vICAgcGFkZGluZzogMCUgNSUgMCUgNSU7XHJcbi8vIH1cclxuLnJvd3RhYntcclxuICBwYWRkaW5nOiAyJSA1JTtcclxufVxyXG5pb24tcHJvZ3Jlc3MtYmFye1xyXG4gIHRvcDogMTAlO1xyXG59XHJcbi5pbWdzY2Fue1xyXG4gIHRvcDogLTclO1xyXG4gIGZvbnQtc2l6ZTogNDdweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuI2JhciB7ICBcclxuICBoZWlnaHQ6IDEuNXJlbTsgXHJcbiAgd2lkdGg6IDcuNXJlbTtcclxufSIsIi5yb3VuZCB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICMwODgwODg7XG4gIGZvbnQtc2l6ZTogaW5pdGlhbDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaXRlbU5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsYXNzLWhlYWRlcmltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9ibHVlYmcucG5nXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uYmFjay1tYXJnIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyNSU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMyOWM1YzU7XG59XG5cbi5jbGVhci1tYXJnIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI1JTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzI5YzVjNTtcbn1cblxuLnNhdmUtY2VudGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMDdhZWJhO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50b2dnbGUtY29sb3Ige1xuICAtLWlvbi1jb2xvci1iYXNlOiAjMDBCRkNDICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbC1wb3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTUlO1xufVxuXG4ucm93LXBhZGQge1xuICBwYWRkaW5nOiAxJSAzJTtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUlO1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50b29sMiB7XG4gIC0tYmFja2dyb3VuZDojRkZGRkZGMDA7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRvb2wxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDElO1xufVxuXG4uc3JjY3JvbGwge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB6LWluZGV4OiA5OTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zcmNoZ3Qge1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmxhYi1mb250IHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uZXZlbnQtZm9udCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmV2ZW50LWZvbnQtaXRhbGljIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW46IDAgMiU7XG59XG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLnN3aXRjaCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xuICBsZWZ0OiA0cHg7XG4gIHRvcDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEJGQ0M7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcbn1cblxuLm9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm9mZiB7XG4gIHBhZGRpbmctbGVmdDogMzNweDtcbn1cblxuLm9uIHtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLm9uLCAub2ZmIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciAub24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIgLm9mZiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGlkZXIucm5kIHtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cblxuLnNsaWRlci5ybmQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbn1cblxuLm1hcmdpblRMMTAge1xuICBtYXJnaW46IDIlIDMlO1xufVxuXG4ubWFyZ2luTDE1IHtcbiAgbWFyZ2luLWxlZnQ6IDM1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA1NjhweCkge1xuICAubGFiLWZvbnQge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIC5ldmVudC1mb250IHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbn1cbi52YWxpZGF0aW9uLWVycm9ycyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHJlZDtcbn1cblxudGFibGUgPiB0Ym9keSA+IHRyID4gdGQ6bnRoLWNoaWxkKDEpIHtcbiAgd2lkdGg6IDQ1JTtcbiAgcGFkZGluZzogMCUgMCUgMCUgNSU7XG59XG5cbnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkOm50aC1jaGlsZCgyKSB7XG4gIHdpZHRoOiA0NSU7XG59XG5cbnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkOm50aC1jaGlsZCgzKSB7XG4gIHdpZHRoOiA0NSU7XG59XG5cbi5yb3d0YWIge1xuICBwYWRkaW5nOiAyJSA1JTtcbn1cblxuaW9uLXByb2dyZXNzLWJhciB7XG4gIHRvcDogMTAlO1xufVxuXG4uaW1nc2NhbiB7XG4gIHRvcDogLTclO1xuICBmb250LXNpemU6IDQ3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2JhciB7XG4gIGhlaWdodDogMS41cmVtO1xuICB3aWR0aDogNy41cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/bolscanning/bolscanning.page.ts":
/*!*************************************************!*\
  !*** ./src/app/bolscanning/bolscanning.page.ts ***!
  \*************************************************/
/*! exports provided: BolscanningPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BolscanningPage", function() { return BolscanningPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apiservice.service */ "./src/app/apiservice.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let BolscanningPage = class BolscanningPage {
    constructor(formBuilder, routeto, Vanityartservice, alert, routerOutlet) {
        this.formBuilder = formBuilder;
        this.routeto = routeto;
        this.Vanityartservice = Vanityartservice;
        this.alert = alert;
        this.routerOutlet = routerOutlet;
        this.qty = 0;
        this.enterEvt = false;
        this.eventLog = "";
        this.autoSave = false;
        this.message = [];
        this.keyboardOpen = false;
        this.enableSerialNo = false;
        this.serialNumbers = [];
        this.itemMatch = false;
        this.enableSaveBtn = false;
        this.validation_messages = {
            'bolnumber': [
                // { type: 'required', message: this.message[2] },
                { type: 'required', message: 'BOL cannot be empty or null' },
                { type: 'pattern', message: 'Only numbers and characters are allowed' },
            ],
            'pro': [
            // { type: 'required', message: 'PRO# is required.' },
            // { type: 'pattern', message: 'Only numbers and characters are allowed' },
            ]
        };
        this.bolscanning = this.formBuilder.group({
            bolnumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            itemvalues: [''],
            serialNo: [''],
            // autosave : ['', Validators.compose([Validators.required])],
            item: [''],
            qty: [''],
            pro: [''],
            orderno: [''],
            shipdate: [''],
            customerName: ['']
        });
        this.message = JSON.parse(localStorage.getItem(("Message")));
    }
    ngAfterViewInit() {
        console.log(this.bolscanning.value);
        setTimeout(() => {
            this.bolnumber.setFocus();
        }, 400);
    }
    ngOnInit() {
        this.userId = JSON.parse(localStorage.getItem(("Id")));
        this.routerOutlet.swipeGesture = false;
    }
    ionViewDidLeave() {
        // this.bolscanning.reset();
    }
    scanOrder() {
        console.log('In scan order');
        let value = this.bolscanning.controls['bolnumber'].value;
        this.orderSearch(value);
    }
    //order search via enter key
    handleScanner(evt) {
        // this.keyboard.show();
        // this.input.setFocus();
        setTimeout(() => {
            let value = evt.target.value;
            this.orderSearch(value);
        }, 800);
    }
    //items search via enter key
    handleitemScanner(evt) {
        setTimeout(() => {
            let value = evt.target.value;
            let isItemAvailable = this.scanItemList.filter(item => item.itemUpc == value.toUpperCase());
            console.log(isItemAvailable);
            if (isItemAvailable.length > 0) {
                this.itemssearch(value);
            }
            else {
                this.Vanityartservice.PresentToast('Item # does not match with any items', 'danger');
            }
        }, 800);
    }
    handleproScanner(evt) {
        let value = evt.target.value;
        let checkItems = this.scanItemList;
        checkItems = checkItems.filter(item => item.scannedItems < item.itemQuantity);
        if (value && this.autoSave && checkItems.length == 0) {
            this.bolscansubmit();
        }
        else if (value && !this.autoSave && checkItems.length == 0) {
            this.enableSaveBtn = true;
        }
        // setTimeout(() => {
        //   if (this.autoSave) {
        //     this.bolscansubmit();
        //   }
        // }, 800)
    }
    handleserialNoScanner(evt) {
        let value = evt.target.value;
        if (value.length == 11) {
            this.bolscanning.controls['serialNo'].disable();
            this.serailNoScan(value);
        }
    }
    // checkPro(evt){
    //   let value = evt.target.value;
    //   if(value){
    //     this.autoSave = false
    //   }else{
    //     this.autoSave = true
    //   }
    // }
    serailNoScan(value) {
        if (this.itemMatch == true) {
            let serialNo = value.toUpperCase();
            if (serialNo.length == 11) {
                let url = this.Vanityartservice.baseUrl + this.Vanityartservice.serialScan;
                let data = {
                    "BOL": this.bolscanning.controls['bolnumber'].value,
                    "order": this.orderno,
                    "serialNumber": serialNo
                };
                this.Vanityartservice.present();
                this.Vanityartservice.ajaxCallService(url, "post", data).then(resp => {
                    this.serialData = resp;
                    if (this.serialData['status'] == 'Success') {
                        this.Vanityartservice.dismiss();
                        this.dataSource = this.serialData['dataSource'];
                        if (this.bolscanning.value.itemvalues) {
                            this.scaneditems = this.bolscanning.value.itemvalues.toUpperCase();
                        }
                        console.log(this.scanItemList);
                        if (this.scaneditems) {
                            for (var idx in this.scanItemList) {
                                if (this.scanItemList[idx]['itemUpc'] && this.scanItemList[idx]['itemUpc'] == this.scaneditems) {
                                    if (this.scanItemList[idx]['scannedItems'] < this.scanItemList[idx]['itemQuantity']) {
                                        let isDuplicate = this.scanItemList[idx]['serialNumbers'].includes(serialNo);
                                        let checkAllSerials = this.serialNumbers.includes(serialNo);
                                        if (!isDuplicate && !checkAllSerials) {
                                            this.serialNumbers.push(serialNo);
                                            this.scanItemList[idx]['serialNumbers'].push(serialNo);
                                            this.scanItemList[idx]['scannedItems']++;
                                            this.bolscanning.controls['itemvalues'].reset();
                                            setTimeout(() => {
                                                this.itemNo.setFocus();
                                            }, 200);
                                            // this.bolscanning.controls['serialNo'].enable();
                                            this.bolscanning.controls['serialNo'].reset();
                                            // setTimeout(()=>{
                                            //   this.serialNo.setFocus();
                                            // },200)
                                            if (this.scanItemList[idx]['scannedItems'] == this.scanItemList[idx]['itemQuantity']) {
                                                this.enableSerialNo = false;
                                                this.bolscanning.controls['itemvalues'].reset();
                                                this.itemMatch = false;
                                                this.scanItemList[idx]['selected'] = false;
                                                this.scanItemList[idx]['isScanned'] = true;
                                                let checkItems = this.scanItemList;
                                                checkItems = checkItems.filter(item => item.scannedItems < item.itemQuantity);
                                                if (checkItems.length == 0) {
                                                    setTimeout(() => {
                                                        this.proNo.setFocus();
                                                    }, 200);
                                                }
                                                else {
                                                    setTimeout(() => {
                                                        this.itemNo.setFocus();
                                                    }, 200);
                                                }
                                                if (this.autoSave && this.bolscanning.controls['pro'] && checkItems.length == 0) {
                                                    setTimeout(() => {
                                                        this.bolscansubmit();
                                                    }, 200);
                                                }
                                                else if (!this.autoSave && this.bolscanning.controls['pro'] && checkItems.length == 0) {
                                                    this.enableSaveBtn = true;
                                                }
                                            }
                                        }
                                        else {
                                            this.bolscanning.controls['serialNo'].enable();
                                            setTimeout(() => {
                                                this.serialNo.setFocus();
                                            }, 100);
                                            this.Vanityartservice.PresentToast('No duplicate serial number allowed across items', "danger");
                                        }
                                    }
                                    else {
                                        this.bolscanning.controls['itemvalues'].reset();
                                        this.Vanityartservice.PresentToast('All quantities are scanned', "success");
                                    }
                                }
                                else if (this.scanItemList[idx]['itemName'] == this.scaneditems) {
                                    if (this.scanItemList[idx]['scannedItems'] < this.scanItemList[idx]['itemQuantity']) {
                                        let isDuplicate = this.scanItemList[idx]['serialNumbers'].includes(serialNo);
                                        let checkAllSerials = this.serialNumbers.includes(serialNo);
                                        if (!isDuplicate && !checkAllSerials) {
                                            this.serialNumbers.push(serialNo);
                                            this.scanItemList[idx]['serialNumbers'].push(serialNo);
                                            this.scanItemList[idx]['scannedItems']++;
                                            this.bolscanning.controls['itemvalues'].reset();
                                            setTimeout(() => {
                                                this.itemNo.setFocus();
                                            }, 200);
                                            //this.bolscanning.controls['serialNo'].enable();
                                            this.bolscanning.controls['serialNo'].reset();
                                            // setTimeout(()=>{
                                            //   this.serialNo.setFocus();
                                            // },200)
                                            if (this.scanItemList[idx]['scannedItems'] == this.scanItemList[idx]['itemQuantity']) {
                                                this.enableSerialNo = false;
                                                this.bolscanning.controls['itemvalues'].reset();
                                                this.itemMatch = false;
                                                this.scanItemList[idx]['selected'] = false;
                                                this.scanItemList[idx]['isScanned'] = true;
                                                let checkItems = this.scanItemList;
                                                checkItems = checkItems.filter(item => item.scannedItems < item.itemQuantity);
                                                if (checkItems.length == 0) {
                                                    setTimeout(() => {
                                                        this.proNo.setFocus();
                                                    }, 200);
                                                }
                                                else {
                                                    setTimeout(() => {
                                                        this.itemNo.setFocus();
                                                    }, 200);
                                                }
                                                if (this.autoSave && this.bolscanning.controls['pro'] && checkItems.length == 0) {
                                                    setTimeout(() => {
                                                        this.bolscansubmit();
                                                    }, 200);
                                                }
                                                else if (!this.autoSave && this.bolscanning.controls['pro'] && checkItems.length == 0) {
                                                    this.enableSaveBtn = true;
                                                }
                                            }
                                        }
                                        else {
                                            this.bolscanning.controls['serialNo'].enable();
                                            setTimeout(() => {
                                                this.serialNo.setFocus();
                                            }, 100);
                                            this.Vanityartservice.PresentToast('No duplicate serial number allowed across items', "danger");
                                        }
                                    }
                                    else {
                                        this.bolscanning.controls['itemvalues'].reset();
                                        this.Vanityartservice.PresentToast('All quantities are scanned', "success");
                                    }
                                }
                            }
                        }
                        else {
                            this.scaneditems = this.byPassedItem;
                            for (var idx in this.scanItemList) {
                                if (this.scanItemList[idx]['itemUpc'] && this.scanItemList[idx]['itemUpc'] == this.scaneditems) {
                                    if (this.scanItemList[idx]['scannedItems'] < this.scanItemList[idx]['itemQuantity']) {
                                        let isDuplicate = this.scanItemList[idx]['serialNumbers'].includes(serialNo);
                                        let checkAllSerials = this.serialNumbers.includes(serialNo);
                                        if (!isDuplicate && !checkAllSerials) {
                                            this.serialNumbers.push(serialNo);
                                            this.scanItemList[idx]['serialNumbers'].push(serialNo);
                                            this.scanItemList[idx]['scannedItems']++;
                                            this.bolscanning.controls['itemvalues'].reset();
                                            setTimeout(() => {
                                                this.itemNo.setFocus();
                                            }, 200);
                                            //this.bolscanning.controls['serialNo'].enable();
                                            this.bolscanning.controls['serialNo'].reset();
                                            // setTimeout(()=>{
                                            //   this.serialNo.setFocus();
                                            // },200)
                                            if (this.scanItemList[idx]['scannedItems'] == this.scanItemList[idx]['itemQuantity']) {
                                                this.bolscanning.controls['serialNo'].reset();
                                                this.itemMatch = false;
                                                this.enableSerialNo = false;
                                                this.scanItemList[idx]['selected'] = false;
                                                this.scanItemList[idx]['isScanned'] = true;
                                                let checkItems = this.scanItemList;
                                                checkItems = checkItems.filter(item => item.scannedItems < item.itemQuantity);
                                                if (checkItems.length == 0) {
                                                    setTimeout(() => {
                                                        this.proNo.setFocus();
                                                    }, 200);
                                                }
                                                else {
                                                    setTimeout(() => {
                                                        this.itemNo.setFocus();
                                                    }, 200);
                                                }
                                                if (this.autoSave && this.bolscanning.controls['pro'] && checkItems.length == 0) {
                                                    setTimeout(() => {
                                                        this.bolscansubmit();
                                                    }, 200);
                                                }
                                                else if (!this.autoSave && this.bolscanning.controls['pro'] && checkItems.length == 0) {
                                                    this.enableSaveBtn = true;
                                                }
                                            }
                                        }
                                        else {
                                            this.bolscanning.controls['serialNo'].enable();
                                            setTimeout(() => {
                                                this.serialNo.setFocus();
                                            }, 100);
                                            this.Vanityartservice.PresentToast('No duplicate serial number allowed across items', "danger");
                                        }
                                    }
                                    else {
                                        this.bolscanning.controls['itemvalues'].reset();
                                        this.Vanityartservice.PresentToast('All quantities are scanned', "success");
                                    }
                                }
                                else if (this.scanItemList[idx]['itemName'] == this.scaneditems) {
                                    if (this.scanItemList[idx]['scannedItems'] < this.scanItemList[idx]['itemQuantity']) {
                                        let isDuplicate = this.scanItemList[idx]['serialNumbers'].includes(serialNo);
                                        let checkAllSerials = this.serialNumbers.includes(serialNo);
                                        if (!isDuplicate && !checkAllSerials) {
                                            this.serialNumbers.push(serialNo);
                                            this.scanItemList[idx]['serialNumbers'].push(serialNo);
                                            this.scanItemList[idx]['scannedItems']++;
                                            this.bolscanning.controls['itemvalues'].reset();
                                            //this.bolscanning.controls['serialNo'].enable();
                                            // this.bolscanning.controls['itemvalues'].reset();
                                            setTimeout(() => {
                                                this.itemNo.setFocus();
                                            }, 200);
                                            this.bolscanning.controls['serialNo'].reset();
                                            // setTimeout(()=>{
                                            //   this.serialNo.setFocus();
                                            // },200);
                                            if (this.scanItemList[idx]['scannedItems'] == this.scanItemList[idx]['itemQuantity']) {
                                                this.bolscanning.controls['serialNo'].reset();
                                                this.itemMatch = false;
                                                this.enableSerialNo = false;
                                                this.scanItemList[idx]['selected'] = false;
                                                this.scanItemList[idx]['isScanned'] = true;
                                                let checkItems = this.scanItemList;
                                                checkItems = checkItems.filter(item => item.scannedItems < item.itemQuantity);
                                                if (checkItems.length == 0) {
                                                    setTimeout(() => {
                                                        this.proNo.setFocus();
                                                    }, 200);
                                                }
                                                else {
                                                    setTimeout(() => {
                                                        this.itemNo.setFocus();
                                                    }, 200);
                                                }
                                                if (this.autoSave && this.bolscanning.controls['pro'] && checkItems.length == 0) {
                                                    setTimeout(() => {
                                                        this.bolscansubmit();
                                                    }, 200);
                                                }
                                                else if (!this.autoSave && this.bolscanning.controls['pro'] && checkItems.length == 0) {
                                                    this.enableSaveBtn = true;
                                                }
                                            }
                                        }
                                        else {
                                            this.bolscanning.controls['serialNo'].enable();
                                            setTimeout(() => {
                                                this.serialNo.setFocus();
                                            }, 100);
                                            this.Vanityartservice.PresentToast('No duplicate serial number allowed across items', "danger");
                                        }
                                    }
                                    else {
                                        this.bolscanning.controls['itemvalues'].reset();
                                        this.Vanityartservice.PresentToast('All quantities are scanned', "success");
                                    }
                                }
                            }
                        }
                    }
                    else if (this.serialData['status'] == 'Fail') {
                        this.Vanityartservice.dismiss();
                        this.bolscanning.controls['serialNo'].enable();
                        this.Vanityartservice.PresentToast(this.serialData['message'], 'danger');
                    }
                }).catch(err => {
                    this.Vanityartservice.dismiss();
                    this.bolscanning.controls['serialNo'].enable();
                    this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
                });
            }
            else {
                this.bolscanning.controls['serialNo'].enable();
                this.Vanityartservice.PresentToast('Serial Number must be 11 digits', "danger");
            }
        }
        else {
            this.bolscanning.controls['serialNo'].enable();
            this.itemNo.setFocus();
            this.Vanityartservice.PresentToast('No item has been scanned. Please scan an item before serial number scanning.', "danger");
        }
    }
    orderSearch(evt) {
        this.enableSerialNo = false;
        var orderScan = this.Vanityartservice.baseUrl + this.Vanityartservice.getscanitems;
        let bolvalue = evt;
        if (bolvalue != "" && bolvalue != null) {
            var dataParam = {
                //  "BOL": this.bolscanning.value.bolnumber
                "BOL": bolvalue.toUpperCase(),
            };
            this.Vanityartservice.present();
            this.Vanityartservice.ajaxCallService(orderScan, "post", dataParam).then(resp => {
                this.respData = resp;
                // if(resp['status'] == 'Ready to ship'){
                if (resp['scanItemList']['length'] != 0) {
                    this.enterEvt = false;
                    this.enterEvt = false;
                    this.scanItemList = resp['scanItemList'];
                    console.log(this.scanItemList);
                    // this.scanItemList = this.scanItemList.filter(item => item.isScanned == false)
                    for (let item of this.scanItemList) {
                        item.itemDescription = item.itemDescription.substring(0, 70);
                        item.serialNumbers = [];
                        if (item.isScanned == false) {
                            item.scannedItems = 0;
                        }
                    }
                    this.bolscanning.controls['pro'].setValue(resp['pro']);
                    this.scanItemList.map(item => {
                        if (item['isScanned']) {
                            item['isscanneditemslist'] = item['itemQuantity'];
                        }
                        else {
                            item['isscanneditemslist'] = 0;
                        }
                    });
                    this.bolorderList = resp;
                    this.orderno = resp['order'];
                    this.shipdate = resp['shipDateString'];
                    this.customername = '( ' + resp['customerName'] + ')';
                    this.status = resp['orderStatus'];
                    this.po = resp['po'];
                    this.eventLog = 'BOL # ' + bolvalue + ' successfully scanned' + '\n' + this.eventLog;
                    this.bolscanning.controls['bolnumber'].disable();
                    // if (this.scanItemList[0]['isScanned']) {
                    //   setTimeout(() => {
                    //     this.proNo.setFocus();
                    //   }, 500);
                    // } else {
                    setTimeout(() => {
                        this.itemNo.setFocus();
                    }, 500);
                    //  }
                    if (resp['message']) {
                        this.Vanityartservice.PresentToast(resp['message'], "danger");
                    }
                }
                else if (resp['status'] == 'Shipped') {
                    this.openConfirmationAlert(resp, bolvalue);
                    this.eventLog = 'Order # ' + bolvalue + ' ' + resp['message'] + '\u2716' + '\n' + this.eventLog;
                    this.Vanityartservice.PresentToast('BOL# ' + bolvalue + ' ' + resp['message'], "danger");
                    this.bolscanning.controls['bolnumber'].reset();
                }
                else if (resp['status'] == 'Delivered') {
                    this.eventLog = 'Order # ' + bolvalue + ' is Delivered . \u2716' + '\n' + this.eventLog;
                    this.Vanityartservice.PresentToast('BOL # ' + bolvalue + ' is Delivered', "danger");
                    this.bolscanning.controls['bolnumber'].reset();
                }
                else if (resp['message'] == 'Order has been cancelled') {
                    this.eventLog = 'Order # ' + bolvalue + ' is Cancelled . \u2716' + '\n' + this.eventLog;
                    this.Vanityartservice.PresentToast('BOL # ' + bolvalue + ' is Cancelled', "danger");
                    this.bolscanning.controls['bolnumber'].reset();
                    setTimeout(() => {
                        this.bolnumber.setFocus();
                    }, 500);
                }
                else {
                    this.eventLog = 'Order # ' + resp['message'] + ' \u2716' + '\n' + this.eventLog;
                    this.Vanityartservice.PresentToast(resp['message'], 'danger');
                    this.bolscanning.controls['bolnumber'].reset();
                    setTimeout(() => {
                        this.bolnumber.setFocus();
                    }, 500);
                }
                this.Vanityartservice.dismiss();
                // }
            }).catch(err => {
                this.Vanityartservice.dismiss();
                this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
            });
        }
    }
    //items search
    itemssearch(evt) {
        var itemvalue = evt;
        this.enableSerialNo = true;
        let temp, tempAuto;
        this.scaneditems = this.bolscanning.value.itemvalues.toUpperCase();
        for (let item of this.scanItemList) {
            if (item.itemUpc == this.scaneditems && item.isScanned == false) {
                this.itemMatch = true;
                this.bolscanning.controls['serialNo'].enable();
                this.serialNo.setFocus();
                //item.isScanned = true;
                item.isByPass = false;
                if (!item.scannedItems) {
                    item.scannedItems = 0;
                }
                // if(!item.serialNumber){
                //   item.serialNumbers = []
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
        //   this.bolscanning.controls['itemvalues'].reset();
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
        //     // if (this.bolscanning.value['pro'] != '' && this.bolscanning.value['pro'] != undefined) {
        //     this.bolscansubmit();     
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
    }
    //Method to save data through save button
    bolscansubmit() {
        if (this.bolscanning.value.pro == '' || this.bolscanning.value.pro == undefined) {
            this.Vanityartservice.PresentToast('PRO # can not be empty', 'danger');
            setTimeout(() => {
                this.proNo.setFocus();
            }, 200);
        }
        else {
            this.Vanityartservice.present();
            this.itemlist = this.scanItemList;
            let checkQuantity = this.itemlist.filter(item => item.scannedItems != item.itemQuantity);
            if (checkQuantity.length == 0) {
                this.serialNumbers = [];
            }
            this.bolscanning.controls['itemvalues'].reset();
            this.bolscanning.controls['serialNo'].reset();
            this.itemMatch = false;
            this.itemlist = this.itemlist.filter(item => item.isScanned == true && item.scannedItems == item.itemQuantity);
            var saveOrder = this.Vanityartservice.baseUrl + this.Vanityartservice.saveitems;
            let jsonobj = {
                "bol": this.respData.bol,
                "order": this.respData.order,
                "customerName": this.respData.customerName,
                "orderDateString": this.respData.orderDateString,
                "shipDateString": this.respData.shipDateString,
                "carrier": this.respData.carrier,
                "orderStatus": this.respData.orderStatus,
                "shippingMethod": this.respData.shippingMethod,
                // "pro": this.bolscanning.value.pro != undefined ? this.bolscanning.value.pro : '',
                "pro": this.bolscanning.value.pro,
                "Modified": this.userId,
                "scanItemList": this.itemlist,
                "dataSource": this.dataSource
            };
            console.log(jsonobj);
            this.Vanityartservice.ajaxCallService(saveOrder, "post", jsonobj).then(result => {
                if (result['status'] == 'Success') {
                    this.enableSaveBtn = false;
                    this.Vanityartservice.PresentToast("Items scan completed & " + result['message'], "success");
                    this.eventLog = 'Items# ' + this.respData.bol + ' scan and save completed. \u2714' + '\n' + this.eventLog;
                    // this.scanItemList = this.scanItemList.filter(item => item.scannedItems < item.itemQuantity)
                    // if(this.scanItemList.length > 0){
                    //   setTimeout(()=>{
                    //     this.orderSearch(this.respData.bol)
                    //   }, 200)
                    // } else {
                    this.formreset();
                    //}
                    setTimeout(() => {
                        this.bolnumber.setFocus();
                    }, 400);
                }
                else {
                    this.Vanityartservice.dismiss();
                    this.Vanityartservice.PresentToast(result['message'], "danger");
                }
                this.Vanityartservice.dismiss();
            }).catch((err) => {
                this.Vanityartservice.dismiss();
                this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
            });
        }
    }
    //Method to check if autoSave is on/off
    isChecked(evt) {
        let check = evt.target.checked;
        if (check == true) {
            this.autoSave = true;
            // this.itemssearchauto(evt);
        }
        else {
            this.autoSave = false;
        }
    }
    //Method to go back to home page
    backToHome() {
        let bolnumber = this.bolscanning.controls.bolnumber.value;
        if (bolnumber == "" || bolnumber == null) {
            this.routeto.navigate(['/menuitems']);
        }
        else {
            this.Vanityartservice.PresentToast("There is unsaved data in the form, either save or clear the form.", "danger");
        }
    }
    //Method to form reset 
    formreset() {
        this.bolscanning.controls['bolnumber'].enable();
        this.bolscanning.reset();
        this.scanItemList = [];
        this.serialNumbers = [];
        this.shipdate = '';
        this.orderno = '';
        this.customername = '';
        this.po = '';
        this.eventLog = '';
        this.enableSerialNo = false;
        setTimeout(() => {
            this.bolnumber.setFocus();
        }, 400);
    }
    //Method to open confirmation alert
    openConfirmationAlert(resp, bol) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Confirmation',
                message: resp['message'],
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            console.log('Confirm Okay');
                            let jsonobj = {
                                "order": resp['order'],
                                "Modified": this.userId,
                                "BOL": bol.toUpperCase(),
                                "pro": resp['pro']
                            };
                            let url = this.Vanityartservice.baseUrl + this.Vanityartservice.readyToShipped;
                            this.Vanityartservice.ajaxCallService(url, "post", jsonobj).then(result => {
                                console.log(result);
                                if (result['status'] == 'Success') {
                                    this.itemMatch = false;
                                    this.Vanityartservice.PresentToast(result['message'], 'success');
                                    this.enterEvt = false;
                                    this.enterEvt = false;
                                    this.scanItemList = result['scanItemList'];
                                    for (let item of this.scanItemList) {
                                        item.scannedItems = 0;
                                    }
                                    this.scanItemList.map(i => i.isscanneditemslist = 0);
                                    this.bolorderList = result;
                                    this.orderno = result['order'];
                                    this.shipdate = result['shipDateString'];
                                    this.customername = '( ' + result['customerName'] + ')';
                                    this.status = result['orderStatus'];
                                    this.bolscanning.controls['pro'].setValue(resp['pro']);
                                    this.bolscanning.controls['bolnumber'].setValue(bol.toUpperCase());
                                    this.eventLog = 'BOL # ' + this.bolscanning.value.bolnumber + ' successfully scanned' + '\n' + this.eventLog;
                                    this.bolscanning.controls['bolnumber'].disable();
                                    setTimeout(() => {
                                        this.itemNo.setFocus();
                                    }, 300);
                                }
                                else {
                                    this.Vanityartservice.PresentToast(result['message'], 'danger');
                                    this.eventLog = 'Tracking # ' + result['message'] + '\n' + this.eventLog;
                                }
                            }).catch(err => {
                                this.Vanityartservice.dismiss();
                                this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    //Method to check the item as completely scanned
    checkToComplete(scan) {
        this.enableSerialNo = true;
        let tempAuto = false;
        for (let item of this.scanItemList) {
            if (item.itemName == scan.itemName && item.isScanned == false) {
                this.bolscanning.controls['itemvalues'].reset();
                this.bolscanning.controls['itemvalues'].setValue(scan.itemUpc);
                this.bolscanning.controls['serialNo'].enable();
                this.serialNo.setFocus();
                this.itemMatch = true;
                // item.isScanned = true;
                item.isByPass = true;
                if (!item.scannedItems) {
                    item.scannedItems = 0;
                }
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
        //     this.bolscansubmit();  
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
    }
};
BolscanningPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bolnumber', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BolscanningPage.prototype, "bolnumber", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('itemNo', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BolscanningPage.prototype, "itemNo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pro', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BolscanningPage.prototype, "proNo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('serialNo', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BolscanningPage.prototype, "serialNo", void 0);
BolscanningPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bolscanning',
        template: __webpack_require__(/*! raw-loader!./bolscanning.page.html */ "./node_modules/raw-loader/index.js!./src/app/bolscanning/bolscanning.page.html"),
        styles: [__webpack_require__(/*! ./bolscanning.page.scss */ "./src/app/bolscanning/bolscanning.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"]])
], BolscanningPage);



/***/ })

}]);
//# sourceMappingURL=bolscanning-bolscanning-module-es2015.js.map