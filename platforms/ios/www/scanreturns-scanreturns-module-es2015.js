(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scanreturns-scanreturns-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/scanreturns/scanreturns.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/scanreturns/scanreturns.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-padding class-headerimg\">\n  <div class=\"ion-text-center ion-text-uppercase title\">RETURNS</div>\n  <ion-toolbar class=\"tool2\">\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"4\" class=\"ion-text-left padd-left-0\">\n          <ion-buttons class=\"back-marg\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\" (click)=\"backToHome()\">BACK</ion-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"2\" class=\"ion-text-center\">\n          <ion-button fill='clear' class=\"save-center\" type=\"submit\" [disabled]=\"!enableSaveBtn\" (click)=\"saveReturn()\">SAVE\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"4\" class=\"ion-text-right\" (click)=\"formreset()\">\n          <ion-buttons class=\"clear-marg\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\">CLEAR</ion-button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <!-- SERIAL SCANNING -->\n  <div *ngIf=\"isSerailScan\">\n    <ion-row>\n      <ion-col size=\"6\"></ion-col>\n      <ion-col size=\"6\" style=\"text-align: left;text-indent: 30px;\">\n        <ion-button expand=\"block\" class=\"loggbtn\" (click)=\"switchToPo()\">SWITCH TO SCAN PO#\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <form [formGroup]=\"serialScanning\" (keyup.enter)=\"handleSerialScan()\">\n      <ion-item class=\"textfields\">\n        <ion-col size=\"9\">\n          <ion-label class=\"lab-font\">Serial #</ion-label>\n          <ion-input #serial clearInput class=\"ion-text-uppercase lab-font\" type=\"text\" formControlName=\"serial\"></ion-input>\n        </ion-col>\n        <ion-col size=\"3\" style=\"text-align: right;\">\n          <ion-icon name=\"search\" style=\"width: 35px; height: 35px; color:darkgray;\" (click)=\"handleSerialScan()\"> </ion-icon>\n        </ion-col>\n      </ion-item>\n      <div class=\"validation-errors\">\n        <div *ngFor=\"let validation of validation_messages['serial']\">\n          <div class=\"error-scan\"\n            *ngIf=\"serialScanning.get('serial').hasError(validation['type']) && serialScanning.get('serial').touched\">\n            {{ validation.message }}\n          </div>\n        </div>\n      </div>\n    </form>\n    <ion-item class=\"textfields\">\n      <ion-label position=\"floating\" class=\"lab-font\">PO#</ion-label>\n      <ion-input class=\"lab-font ion-text-uppercase\" [(ngModel)]=\"poNumber\" readonly></ion-input>\n    </ion-item>\n    <ion-note *ngIf=\"customerName\" style=\"padding-left: 30px;\">Customer: {{customerName}}</ion-note>\n    <!-- <ion-item class=\"textfields\">\n      <ion-label position=\"floating\" class=\"lab-font\">ITEM</ion-label>\n      <ion-input [(ngModel)]=\"itemUpc\" class=\"lab-font ion-text-uppercase\" readonly></ion-input>\n    </ion-item> -->\n    <!-- Display SKU instead of UPC -->\n    <ion-item class=\"textfields\">\n      <ion-label position=\"floating\" class=\"lab-font\">ITEM</ion-label>\n      <ion-input [(ngModel)]=\"itemSku\" class=\"lab-font ion-text-uppercase\" readonly></ion-input>\n    </ion-item>\n    <ion-row style=\"text-indent: 25px;\">\n      <ion-col>\n        <ion-label style=\"color: rgb(28, 31, 31);\" class=\"lab-font\">Warehouse</ion-label>\n        <ion-note style=\"color: red;font-size: 25px;\">*</ion-note>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"dropdown\">\n      <ion-col>\n        <ion-select  [(ngModel)]=\"warehouse\">\n          <ion-select-option *ngFor=\"let warehouse of warehouseList\" value=\"{{warehouse.value}}\">{{warehouse.title}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    \n    <!-- <ion-item class=\"dropdown\"> -->\n      \n    <!-- </ion-item> -->\n    <ion-row style=\"text-indent: 25px;\">\n      <ion-col>\n        <ion-label style=\"color: rgb(28, 31, 31);\" class=\"lab-font\">Condition</ion-label>\n        <ion-note style=\"color: red;font-size: 25px;\">*</ion-note>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"dropdown\">\n      <ion-col>\n        <ion-select  [(ngModel)]=\"condition\" (ionChange)=\"onConditionChange()\">\n          <ion-select-option *ngFor=\"let condition of conditionList\" value=\"{{condition.value}}\">{{condition.title}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-grid *ngIf=\"enableTakePhoto\">\n      <ion-row *ngFor=\"let type of photoType\" class=\"takePhotoGrid\">\n        <ion-col size=\"4\">\n          <ion-label style=\"color: rgb(28, 31, 31);\" class=\"lab-font\">{{type.typeName}}</ion-label>\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align: center;\">\n          <ion-button class=\"photobtn\" (click)=\"takePhoto(type)\">Take Photo</ion-button>\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align: center;\">\n          <img src=\"{{type.img}}\" style=\"width: 25%;\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-item class=\"textfields\">\n      <ion-col>\n        <ion-label style=\"color: rgb(28, 31, 31);\" class=\"lab-font\">Notes</ion-label>\n        <ion-textarea rows=\"3\" [(ngModel)]=\"notes\" class=\"event-font-italic lab-font\"></ion-textarea>\n      </ion-col>\n    </ion-item>\n  </div>\n<!-- SERIAL SCANNING END -->\n<!-- PO SCANNING -->\n  <div *ngIf=\"!isSerailScan\">\n    <ion-row>\n      <ion-col size=\"6\"></ion-col>\n      <ion-col size=\"6\" style=\"text-align: left;text-indent: 30px;\">\n        <ion-button expand=\"block\" class=\"loggbtn\" (click)=\"switchToserial()\">SWITCH TO SCAN SERIAL#\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <form [formGroup]=\"poScanning\" (keyup.enter)=\"handlePoScan()\">\n      <ion-item class=\"textfields\">\n        <ion-col size=\"9\">\n          <ion-label class=\"lab-font\">PO #</ion-label>\n          <ion-input #po clearInput class=\"ion-text-uppercase lab-font\" type=\"text\" formControlName=\"po\"></ion-input>\n        </ion-col>\n        <ion-col size=\"3\" style=\"text-align: right;\">\n          <ion-icon name=\"search\" style=\"width: 35px; height: 35px; color:darkgray;\" (click)=\"handlePoScan()\"> </ion-icon>\n        </ion-col>\n      </ion-item>\n      <div class=\"validation-errors\">\n        <div *ngFor=\"let validation of validation_messages['po']\">\n          <div class=\"error-scan\"\n            *ngIf=\"poScanning.get('po').hasError(validation['type']) && poScanning.get('po').touched\">\n            {{ validation.message }}\n          </div>\n        </div>\n      </div>\n    </form>\n    <ion-note *ngIf=\"customerName\" style=\"padding-left: 30px;\" class=\"lab-font\">Customer: {{customerName}}</ion-note>\n    <ion-item class=\"textfields\">\n      <ion-col size=\"9\">\n        <ion-label class=\"lab-font\">ITEM</ion-label>\n        <ion-input #item [(ngModel)]=\"itemUpc\" class=\"lab-font\" [readonly]=\"itemReadOnly\" (keyup.enter)=\"handleitemScan()\"></ion-input>\n      </ion-col>\n      <ion-col size=\"3\" style=\"text-align: right;\">\n        <ion-icon name=\"search\" style=\"width: 35px; height: 35px; color:darkgray;\" (click)=\"handleitemScan()\"> </ion-icon>\n      </ion-col>\n    </ion-item>\n    <ion-row style=\"text-indent: 25px;\">\n      <ion-col>\n        <ion-label style=\"color: rgb(28, 31, 31);\" class=\"lab-font\">Warehouse</ion-label>\n        <ion-note style=\"color: red;font-size: 25px;\">*</ion-note>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"dropdown\">\n      <ion-col>\n        <ion-select  [(ngModel)]=\"warehouse\">\n          <ion-select-option *ngFor=\"let warehouse of warehouseList\" value=\"{{warehouse.value}}\">{{warehouse.title}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"text-indent: 25px;\">\n      <ion-col>\n        <ion-label style=\"color: rgb(28, 31, 31);\" class=\"lab-font\">Condition</ion-label>\n        <ion-note style=\"color: red;font-size: 25px;\">*</ion-note>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"dropdown\">\n      <ion-col>\n        <ion-select  [(ngModel)]=\"condition\" (ionChange)=\"onConditionChange()\">\n          <ion-select-option *ngFor=\"let condition of conditionList\" value=\"{{condition.value}}\">{{condition.title}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-grid *ngIf=\"enableTakePhoto\">\n      <ion-row *ngFor=\"let type of photoType\" class=\"takePhotoGrid\">\n        <ion-col size=\"4\">\n          <ion-label style=\"color: rgb(28, 31, 31);\" class=\"lab-font\">{{type.typeName}}</ion-label>\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align: center;\">\n          <ion-button class=\"photobtn\" (click)=\"takePhoto(type)\">Take Photo</ion-button>\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align: center;\">\n          <img src=\"{{type.img}}\" style=\"width: 25%;\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-item class=\"textfields\">\n      <ion-col>\n        <ion-label style=\"color: rgb(28, 31, 31);\" class=\"lab-font\">Notes</ion-label>\n        <ion-textarea rows=\"3\" [(ngModel)]=\"notes\" class=\"event-font-italic\"></ion-textarea>\n      </ion-col>\n    </ion-item>\n    \n  </div>\n  <!-- PO SCANNING END -->\n  <ion-row class=\"marginTL10\">\n    <ion-col size=\"12\">\n      <ion-label position=\"stacked\" class=\"event-font marginTL10\">Event Log</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item class=\"ion-padding-horizontal\">\n        <ion-textarea rows=\"3\" [readonly]='true' [(ngModel)]=\"eventLog\" class=\"event-font-italic\"></ion-textarea>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/scanreturns/scanreturns.module.ts":
/*!***************************************************!*\
  !*** ./src/app/scanreturns/scanreturns.module.ts ***!
  \***************************************************/
/*! exports provided: ScanreturnsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanreturnsPageModule", function() { return ScanreturnsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _scanreturns_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scanreturns.page */ "./src/app/scanreturns/scanreturns.page.ts");







const routes = [
    {
        path: '',
        component: _scanreturns_page__WEBPACK_IMPORTED_MODULE_6__["ScanreturnsPage"]
    }
];
let ScanreturnsPageModule = class ScanreturnsPageModule {
};
ScanreturnsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_scanreturns_page__WEBPACK_IMPORTED_MODULE_6__["ScanreturnsPage"]]
    })
], ScanreturnsPageModule);



/***/ }),

/***/ "./src/app/scanreturns/scanreturns.page.scss":
/*!***************************************************!*\
  !*** ./src/app/scanreturns/scanreturns.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".options {\n  position: relative;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  margin-top: 15px;\n}\n\n.report {\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  margin-left: 12%;\n  width: 20%;\n}\n\n.waves {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n\n.loggbtn {\n  width: 100%;\n  border-radius: 5%;\n  font-weight: normal;\n  font-size: 25px;\n  --background: #29c5c5;\n}\n\n.photobtn {\n  width: 80%;\n  border-radius: 5%;\n  font-weight: normal;\n  font-size: 20px;\n  --background: #29c5c5;\n}\n\n.takePhotoGrid {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n  margin: 15px 30px 15px 30px;\n}\n\n.textfields {\n  --padding-start: 0px;\n  margin: 15px 30px 15px 30px;\n}\n\n.dropdown {\n  --padding-start: 0px;\n  margin: 15px 30px 15px 30px;\n  border: 1px solid #B2B2B2;\n  border-radius: 5px;\n}\n\n.round {\n  --border-radius: 50%;\n  --vertical-align: middle;\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #088088;\n  font-size: initial;\n  font-size: 25px;\n}\n\n.itemName {\n  font-weight: bold;\n}\n\n.class-headerimg {\n  background-image: url('bluebg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.back-marg {\n  float: left;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5;\n}\n\n.clear-marg {\n  background: transparent;\n  float: right;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5;\n}\n\n.save-center {\n  border-radius: 50%;\n  background: #07aeba;\n  font-size: 22px;\n  color: #ffffff;\n  height: 80px;\n  width: 85px;\n  border-radius: 50%;\n}\n\n.toggle-color {\n  --ion-color-base: #00BFCC !important;\n}\n\n.label-pos {\n  position: absolute;\n  bottom: 15%;\n}\n\n.row-padd {\n  padding: 1% 3%;\n}\n\n.error-message {\n  position: absolute;\n  left: 5%;\n  color: red;\n  font-size: 15px;\n}\n\n.title {\n  font-size: 33px;\n  font-weight: 500;\n  padding-top: 10px;\n  background: #00000000;\n  color: #fff;\n}\n\n.tool2 {\n  --background:#FFFFFF00;\n  --border-width: 0px !important;\n}\n\n.tool1 {\n  position: relative;\n  top: 1%;\n}\n\n.srccroll {\n  height: 200px;\n  overflow: scroll;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.srchgt {\n  height: auto;\n  overflow: hidden;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.lab-font {\n  font-size: 25px;\n}\n\n.event-font {\n  font-size: 16px;\n}\n\n.event-font-italic {\n  font-size: 16px;\n  color: #333;\n  font-style: italic;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 65px;\n  height: 34px;\n}\n\n.switch input {\n  display: none;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: grey;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 28px;\n  width: 28px;\n  left: 4px;\n  top: 3px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #00BFCC;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(55px);\n  transform: translateX(30px);\n}\n\n.on {\n  display: none;\n}\n\n.off {\n  padding-left: 33px;\n}\n\n.on {\n  padding-right: 25px;\n}\n\n.on, .off {\n  color: white;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  font-size: 13px;\n  font-family: Verdana, sans-serif;\n}\n\ninput:checked + .slider .on {\n  display: block;\n}\n\ninput:checked + .slider .off {\n  display: none;\n}\n\n.slider.rnd {\n  border-radius: 16px;\n}\n\n.slider.rnd:before {\n  border-radius: 14px;\n}\n\n.marginTL10 {\n  margin: 1% 2%;\n}\n\n.marginL15 {\n  margin-left: 35px !important;\n  margin-top: 0px !important;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 568px) {\n  .lab-font {\n    font-size: 13px;\n  }\n\n  .event-font {\n    font-size: 13px;\n  }\n}\n\n.validation-errors {\n  font-size: 15px;\n  color: red;\n  text-indent: 30px;\n}\n\ntable > tbody > tr > td:nth-child(1) {\n  width: 45%;\n  padding: 0% 0% 0% 5%;\n}\n\ntable > tbody > tr > td:nth-child(2) {\n  width: 45%;\n}\n\ntable > tbody > tr > td:nth-child(3) {\n  width: 45%;\n}\n\n.rowtab {\n  padding: 2% 5%;\n}\n\nion-progress-bar {\n  top: 10%;\n}\n\n.imgscan {\n  top: -7%;\n  font-size: 47px;\n  position: relative;\n}\n\n#bar {\n  height: 1.5rem;\n  width: 7.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTgxMTgwL0RvY3VtZW50cy92YW5pdHlBcnQtbGF0ZXN0L3Zhbml0eUFydC1MYXRlc3Qvc3JjL2FwcC9zY2FucmV0dXJucy9zY2FucmV0dXJucy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NjYW5yZXR1cm5zL3NjYW5yZXR1cm5zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0ZGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0RGOztBREdBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNBQTs7QURJQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDJCQUFBO0FDREY7O0FESUE7RUFDRSxvQkFBQTtFQUNBLDJCQUFBO0FDREY7O0FESUE7RUFDRSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0ksb0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNESjs7QURJQTtFQUNFLGlCQUFBO0FDREY7O0FESUE7RUFDRSw4Q0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDREY7O0FESUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0ksb0NBQUE7QUNESjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDREY7O0FESUE7RUFDRSxzQkFBQTtFQUNBLDhCQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtFQUNJLGtCQUFBO0FDRE47O0FESUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0UsZUFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0RGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRkY7O0FES0E7RUFBZSxhQUFBO0FDRGY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSx5QkF4TlU7QUN3Tlo7O0FER0E7RUFDRSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsbUNBQUE7RUFFQSwyQkFBQTtBQ0FGOztBREdBO0VBRUUsYUFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTtFQUNFLG1CQUFBO0FDREY7O0FESUE7RUFFRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUNGRjs7QURLQTtFQUNDLGNBQUE7QUNGRDs7QURJQTtFQUNDLGFBQUE7QUNERDs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FER0E7RUFDSSxtQkFBQTtBQ0FKOztBREdBO0VBQ0UsYUFBQTtBQ0FGOztBREdBO0VBQ0UsNEJBQUE7RUFDQSwwQkFBQTtBQ0FGOztBREVBO0VBQ0U7SUFDRSxlQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxlQUFBO0VDRUY7QUFDRjs7QURDQTtFQUNDLGVBQUE7RUFDQSxVQUFBO0VBQ0MsaUJBQUE7QUNDRjs7QURDQTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtBQ0VGOztBRENBO0VBQ0UsVUFBQTtBQ0VGOztBREFBO0VBQ0UsVUFBQTtBQ0dGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBRENBO0VBQ0UsUUFBQTtBQ0VGOztBREFBO0VBQ0UsUUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3NjYW5yZXR1cm5zL3NjYW5yZXR1cm5zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRidG4tY29sb3I6ICMwMEJGQ0M7XG4kdGV4dC1jb2xvcjogIzA3MDcwNztcblxuLm9wdGlvbnN7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ucmVwb3J0e1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMiU7XG4gIHdpZHRoOiAyMCU7XG59XG4ud2F2ZXN7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbn1cbi5sb2dnYnRue1xud2lkdGg6IDEwMCU7XG5ib3JkZXItcmFkaXVzOiA1JTtcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XG5mb250LXNpemU6IDI1cHg7XG4tLWJhY2tncm91bmQ6ICMyOWM1YzU7XG4vL3BhZGRpbmc6IDEwcHggMHB4IDEwcHggMHB4O1xufVxuXG4ucGhvdG9idG57XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogIzI5YzVjNTtcbiAgfVxuXG4udGFrZVBob3RvR3JpZHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMTVweCAzMHB4IDE1cHggMzBweDtcbn1cblxuLnRleHRmaWVsZHN7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICBtYXJnaW46IDE1cHggMzBweCAxNXB4IDMwcHg7XG59XG5cbi5kcm9wZG93bntcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbjogMTVweCAzMHB4IDE1cHggMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0IyQjJCMjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucm91bmQge1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgLS1pb24tY29sb3ItYmFzZTogIzA4ODA4ODtcbiAgICBmb250LXNpemU6IGluaXRpYWw7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaXRlbU5hbWV7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2xhc3MtaGVhZGVyaW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2JsdWViZy5wbmdcIikhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmJhY2stbWFyZ3tcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyNSU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMyOWM1YzU7XG59XG5cbi5jbGVhci1tYXJne1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjUlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjljNWM1O1xufVxuXG4uc2F2ZS1jZW50ZXJ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzA3YWViYTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udG9nZ2xlLWNvbG9ye1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwMEJGQ0MgIWltcG9ydGFudDtcbn1cblxuLmxhYmVsLXBvc3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1JTtcbn1cblxuLnJvdy1wYWRke1xuICBwYWRkaW5nOiAxJSAzJTtcbn1cblxuLmVycm9yLW1lc3NhZ2V7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNSU7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRvb2wye1xuICAtLWJhY2tncm91bmQ6I0ZGRkZGRjAwO1xuICAtLWJvcmRlci13aWR0aCA6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udG9vbDF7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxJTtcbn1cblxuLnNyY2Nyb2xse1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB6LWluZGV4OiA5OTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc3JjaGd0e1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGUgO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubGFiLWZvbnR7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmV2ZW50LWZvbnR7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmV2ZW50LWZvbnQtaXRhbGlje1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIC8vbWFyZ2luOiAwIDIlO1xufVxuXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDM0cHg7XG59XG5cbi5zd2l0Y2ggaW5wdXQge2Rpc3BsYXk6bm9uZTt9XG5cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbiAgbGVmdDogNHB4O1xuICB0b3A6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ0bi1jb2xvcjtcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xufVxuXG4ub25cbntcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm9mZntcbiAgcGFkZGluZy1sZWZ0OjMzcHg7XG59XG5cbi5vbntcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLm9uLCAub2ZmXG57XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG5pbnB1dDpjaGVja2VkKyAuc2xpZGVyIC5vblxue2Rpc3BsYXk6IGJsb2NrO31cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIgLm9mZlxue2Rpc3BsYXk6IG5vbmU7fVxuXG4uc2xpZGVyLnJuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG5cbi5zbGlkZXIucm5kOmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbn1cblxuLm1hcmdpblRMMTAge1xuICBtYXJnaW46IDElIDIlO1xufVxuICBcbi5tYXJnaW5MMTUge1xuICBtYXJnaW4tbGVmdDogMzVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA1NjhweCkge1xuICAubGFiLWZvbnR7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIC5ldmVudC1mb250e1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICBcbn1cbi52YWxpZGF0aW9uLWVycm9yc3tcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRjb2xvcjogcmVkO1xuICB0ZXh0LWluZGVudDogMzBweDtcbn1cbnRhYmxlID50Ym9keSA+IHRyID4gdGQ6bnRoLWNoaWxkKDEpe1xuICB3aWR0aDogNDUlO1xuICBwYWRkaW5nOiAwJSAwJSAwJSA1JTtcbiAgXG59XG50YWJsZSA+dGJvZHkgPiB0ciA+IHRkOm50aC1jaGlsZCgyKXtcbiAgd2lkdGg6IDQ1JTsgIFxufVxudGFibGUgPnRib2R5ID4gdHIgPiB0ZDpudGgtY2hpbGQoMyl7XG4gIHdpZHRoOiA0NSU7ICBcbn1cbi8vIHRhYmxlID50Ym9keSA+IHRye1xuLy8gICBwYWRkaW5nOiAwJSA1JSAwJSA1JTtcbi8vIH1cbi5yb3d0YWJ7XG4gIHBhZGRpbmc6IDIlIDUlO1xufVxuaW9uLXByb2dyZXNzLWJhcntcbiAgdG9wOiAxMCU7XG59XG4uaW1nc2NhbntcbiAgdG9wOiAtNyU7XG4gIGZvbnQtc2l6ZTogNDdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI2JhciB7ICBcbiAgaGVpZ2h0OiAxLjVyZW07IFxuICB3aWR0aDogNy41cmVtO1xufSIsIi5vcHRpb25zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5yZXBvcnQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMiU7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi53YXZlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbn1cblxuLmxvZ2didG4ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgLS1iYWNrZ3JvdW5kOiAjMjljNWM1O1xufVxuXG4ucGhvdG9idG4ge1xuICB3aWR0aDogODAlO1xuICBib3JkZXItcmFkaXVzOiA1JTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICAtLWJhY2tncm91bmQ6ICMyOWM1YzU7XG59XG5cbi50YWtlUGhvdG9HcmlkIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMTVweCAzMHB4IDE1cHggMzBweDtcbn1cblxuLnRleHRmaWVsZHMge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgbWFyZ2luOiAxNXB4IDMwcHggMTVweCAzMHB4O1xufVxuXG4uZHJvcGRvd24ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgbWFyZ2luOiAxNXB4IDMwcHggMTVweCAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQjJCMkIyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5yb3VuZCB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICMwODgwODg7XG4gIGZvbnQtc2l6ZTogaW5pdGlhbDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaXRlbU5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsYXNzLWhlYWRlcmltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9ibHVlYmcucG5nXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uYmFjay1tYXJnIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyNSU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMyOWM1YzU7XG59XG5cbi5jbGVhci1tYXJnIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI1JTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzI5YzVjNTtcbn1cblxuLnNhdmUtY2VudGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMDdhZWJhO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50b2dnbGUtY29sb3Ige1xuICAtLWlvbi1jb2xvci1iYXNlOiAjMDBCRkNDICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbC1wb3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTUlO1xufVxuXG4ucm93LXBhZGQge1xuICBwYWRkaW5nOiAxJSAzJTtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUlO1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50b29sMiB7XG4gIC0tYmFja2dyb3VuZDojRkZGRkZGMDA7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRvb2wxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDElO1xufVxuXG4uc3JjY3JvbGwge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB6LWluZGV4OiA5OTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zcmNoZ3Qge1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmxhYi1mb250IHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uZXZlbnQtZm9udCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmV2ZW50LWZvbnQtaXRhbGljIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDM0cHg7XG59XG5cbi5zd2l0Y2ggaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbiAgbGVmdDogNHB4O1xuICB0b3A6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCRkNDO1xufVxuXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7XG59XG5cbi5vbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5vZmYge1xuICBwYWRkaW5nLWxlZnQ6IDMzcHg7XG59XG5cbi5vbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi5vbiwgLm9mZiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIgLm9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIC5vZmYge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2xpZGVyLnJuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG5cbi5zbGlkZXIucm5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG59XG5cbi5tYXJnaW5UTDEwIHtcbiAgbWFyZ2luOiAxJSAyJTtcbn1cblxuLm1hcmdpbkwxNSB7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNTY4cHgpIHtcbiAgLmxhYi1mb250IHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cblxuICAuZXZlbnQtZm9udCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG4udmFsaWRhdGlvbi1lcnJvcnMge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtaW5kZW50OiAzMHB4O1xufVxuXG50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZDpudGgtY2hpbGQoMSkge1xuICB3aWR0aDogNDUlO1xuICBwYWRkaW5nOiAwJSAwJSAwJSA1JTtcbn1cblxudGFibGUgPiB0Ym9keSA+IHRyID4gdGQ6bnRoLWNoaWxkKDIpIHtcbiAgd2lkdGg6IDQ1JTtcbn1cblxudGFibGUgPiB0Ym9keSA+IHRyID4gdGQ6bnRoLWNoaWxkKDMpIHtcbiAgd2lkdGg6IDQ1JTtcbn1cblxuLnJvd3RhYiB7XG4gIHBhZGRpbmc6IDIlIDUlO1xufVxuXG5pb24tcHJvZ3Jlc3MtYmFyIHtcbiAgdG9wOiAxMCU7XG59XG5cbi5pbWdzY2FuIHtcbiAgdG9wOiAtNyU7XG4gIGZvbnQtc2l6ZTogNDdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jYmFyIHtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIHdpZHRoOiA3LjVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/scanreturns/scanreturns.page.ts":
/*!*************************************************!*\
  !*** ./src/app/scanreturns/scanreturns.page.ts ***!
  \*************************************************/
/*! exports provided: ScanreturnsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanreturnsPage", function() { return ScanreturnsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apiservice.service */ "./src/app/apiservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");








let ScanreturnsPage = class ScanreturnsPage {
    constructor(formBuilder, Vanityartservice, route, keyboard, activatedRoute, alertCtrl, routerOutlet, camera) {
        this.formBuilder = formBuilder;
        this.Vanityartservice = Vanityartservice;
        this.route = route;
        this.keyboard = keyboard;
        this.activatedRoute = activatedRoute;
        this.alertCtrl = alertCtrl;
        this.routerOutlet = routerOutlet;
        this.camera = camera;
        this.isSerailScan = true;
        this.eventLog = '';
        this.isKeyboardHide = true;
        this.itemReadOnly = true;
        this.enableSaveBtn = false;
        this.enableTakePhoto = false;
        this.cameraOptions = {
            quality: 20,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.validation_messages = {
            'serial': [
                { type: 'required', message: 'Serial cannot be empty or null' },
                { type: 'pattern', message: 'Only numbers and characters are allowed' },
            ],
            'po': [
                { type: 'required', message: 'PO# cannot be empty or null' },
                { type: 'pattern', message: 'Only numbers and characters are allowed' },
            ]
        };
        this.serialScanning = this.formBuilder.group({
            serial: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
        this.poScanning = this.formBuilder.group({
            po: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
        // this.photoType = ['Return Label', 'SKU', 'Damaged Area', 'Up front'];
        this.photoType = [{ "typeName": "Return Label", "img": "../../assets/default-thumbnail.jpg" }, { "typeName": "SKU", "img": "../../assets/default-thumbnail.jpg" },
            { "typeName": "Damaged Area", "img": "../../assets/default-thumbnail.jpg" }, { "typeName": "Up front", "img": "../../assets/default-thumbnail.jpg" }];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.routerOutlet.swipeGesture = false;
        this.keyboard.onKeyboardWillShow().subscribe(() => {
            this.isKeyboardHide = false;
            this.keyboard.disableScroll(true);
        });
        this.keyboard.onKeyboardWillHide().subscribe(() => {
            this.isKeyboardHide = true;
        });
        this.warehouseList = this.Vanityartservice.warehouses;
        this.conditionList = this.Vanityartservice.conditions;
        this.warehouse = this.Vanityartservice.defaultWarehouse.toString();
    }
    ionViewDidEnter() {
        setTimeout(() => {
            this.serial.setFocus();
        }, 300);
        this.userId = localStorage.getItem('Id');
        this.usertype = localStorage.getItem('isvanityUser');
    }
    switchToPo() {
        if (this.respData) {
            this.Vanityartservice.PresentToast('There unsaved items. Please save or clear it before switching', 'danger');
        }
        else {
            this.isSerailScan = false;
            this.eventLog = '';
            setTimeout(() => {
                this.po.setFocus();
            }, 300);
            this.formreset();
        }
    }
    switchToserial() {
        if (this.respData) {
            this.Vanityartservice.PresentToast('There unsaved items. Please save or clear it before switching', 'danger');
        }
        else {
            this.isSerailScan = true;
            this.eventLog = '';
            setTimeout(() => {
                this.serial.setFocus();
            }, 300);
            this.formreset();
        }
    }
    backToHome() {
        // this.formreset();
        if (this.isSerailScan) {
            let serial = this.serialScanning.controls.serial.value;
            if (serial == "" || serial == null) {
                this.route.navigate(['/menuitems']);
            }
            else {
                this.Vanityartservice.PresentToast("There is unsaved data in the form, either save or clear the form.", "danger");
            }
        }
        else {
            let po = this.poScanning.controls.po.value;
            if (po == "" || po == null) {
                this.route.navigate(['/menuitems']);
            }
            else {
                this.Vanityartservice.PresentToast("There is unsaved data in the form, either save or clear the form.", "danger");
            }
        }
    }
    handleSerialScan() {
        setTimeout(() => {
            this.serialScan();
        }, 300);
    }
    formreset() {
        this.poNumber = '';
        this.itemUpc = '';
        this.itemSku = '';
        this.customerName = '';
        this.condition = '';
        this.warehouse = this.Vanityartservice.defaultWarehouse ? this.Vanityartservice.defaultWarehouse.toString() : '';
        this.notes = '';
        this.respData = '';
        this.serialScanning.enable();
        this.poScanning.enable();
        this.serialScanning.reset();
        this.poScanning.reset();
        this.itemReadOnly = true;
        this.enableSaveBtn = false;
        this.enableTakePhoto = false;
        this.photoType = [{ "typeName": "Return Label", "img": "../../assets/default-thumbnail.jpg" }, { "typeName": "SKU", "img": "../../assets/default-thumbnail.jpg" },
            { "typeName": "Damaged Area", "img": "../../assets/default-thumbnail.jpg" }, { "typeName": "Up front", "img": "../../assets/default-thumbnail.jpg" }];
        if (this.isSerailScan) {
            setTimeout(() => {
                this.serial.setFocus();
            }, 200);
        }
        else {
            setTimeout(() => {
                this.po.setFocus();
            }, 200);
        }
    }
    serialScan() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let url = this.Vanityartservice.baseUrl + this.Vanityartservice.serialScanreturn;
            let data = {
                "serialNumber": this.serialScanning.controls['serial'].value.toUpperCase()
            };
            this.Vanityartservice.present();
            yield this.Vanityartservice.ajaxCallService(url, 'post', data).then(res => {
                if (res['status'] == "Success") {
                    this.Vanityartservice.dismiss();
                    this.serialScanning.disable();
                    this.enableSaveBtn = true;
                    this.Vanityartservice.PresentToast('Serial Number ' + this.serialScanning.controls['serial'].value + ' is scanned successfully', 'success');
                    this.eventLog = 'Serial Number ' + this.serialScanning.controls['serial'].value + ' is scanned successfully \n' + this.eventLog;
                    this.respData = res;
                    this.poNumber = this.respData['purchaseOrderNumber'];
                    this.itemUpc = this.respData['itemUpc'];
                    this.itemSku = this.respData['itemSku'];
                    this.customerName = this.respData['customerName'];
                }
                else {
                    this.Vanityartservice.dismiss();
                    this.Vanityartservice.PresentToast(this.serialScanning.controls['serial'].value + ' ' + res['displayMessage'], 'danger');
                    this.eventLog = this.serialScanning.controls['serial'].value + ' ' + res['displayMessage'] + '\n' + this.eventLog;
                    this.serialScanning.reset();
                    this.serialScanning.enable();
                    setTimeout(() => {
                        this.serial.setFocus();
                    }, 300);
                }
            }).catch(err => {
                this.Vanityartservice.dismiss();
                this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
            });
        });
    }
    handlePoScan() {
        setTimeout(() => {
            this.poScan();
        }, 300);
    }
    poScan() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let url = this.Vanityartservice.baseUrl + this.Vanityartservice.poScan;
            let data = {
                "PurchaseOrderNumber": this.poScanning.controls['po'].value.toUpperCase()
            };
            this.Vanityartservice.present();
            yield this.Vanityartservice.ajaxCallService(url, 'post', data).then(res => {
                if (res['status'] == "Success") {
                    this.Vanityartservice.dismiss();
                    this.poScanning.disable();
                    this.enableSaveBtn = true;
                    this.Vanityartservice.PresentToast('PO Number ' + this.poScanning.controls['po'].value + ' is scanned successfully', 'success');
                    this.eventLog = 'PO Number ' + this.poScanning.controls['po'].value + ' is scanned successfully \n' + this.eventLog;
                    this.itemReadOnly = false;
                    setTimeout(() => {
                        this.item.setFocus();
                    }, 300);
                    this.respData = res;
                    this.customerName = this.respData['customerName'];
                }
                else if (res['status'] == "Fail") {
                    this.Vanityartservice.dismiss();
                    this.respData = res;
                    this.Vanityartservice.PresentToast(res['displayMessage'], 'danger');
                    this.eventLog = res['displayMessage'] + '\n' + this.eventLog;
                    this.poScanning.reset();
                    this.itemReadOnly = true;
                    this.poScanning.enable();
                    setTimeout(() => {
                        this.po.setFocus();
                    }, 300);
                }
                else {
                    this.Vanityartservice.dismiss();
                    this.respData = res;
                    this.poAlert(this.respData['displayMessage']);
                    this.eventLog = this.poScanning.controls['po'].value + ' ' + res['displayMessage'] + '\n' + this.eventLog;
                }
            }).catch(err => {
                this.Vanityartservice.dismiss();
                this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
            });
        });
    }
    poAlert(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: msg,
                buttons: [{
                        text: "NO",
                        handler: () => {
                            this.poScanning.reset();
                            this.poScanning.enable();
                            setTimeout(() => {
                                this.po.setFocus();
                            }, 300);
                        }
                    },
                    {
                        text: "YES",
                        handler: () => {
                            this.itemReadOnly = false;
                            setTimeout(() => {
                                this.item.setFocus();
                            }, 300);
                        }
                    }]
            });
            yield alert.present();
        });
    }
    handleitemScan() {
        setTimeout(() => {
            this.itemUpcScan();
        }, 300);
    }
    itemUpcScan() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let url = this.Vanityartservice.baseUrl + this.Vanityartservice.itemScan;
            let data = {
                "SkuOrUpc": this.itemUpc,
                "IsOpalOrder": this.respData['isOpalOrder'],
                "PurchaseOrderNumber": this.respData['purchaseOrderNumber'],
                "OrderId": this.respData['orderId'],
                "IsVanityArtOrder": this.respData['isVanityArtOrder']
            };
            this.Vanityartservice.present();
            yield this.Vanityartservice.ajaxCallService(url, 'post', data).then(res => {
                if (res['status'] == "Success") {
                    this.Vanityartservice.dismiss();
                    this.itemRespData = res;
                    this.respData['actualQuantityOrdered'] = this.itemRespData['actualQuantityOrdered'];
                    this.respData['returnedQuantity'] = this.itemRespData['returnedQuantity'];
                    this.respData['itemId'] = this.itemRespData['itemId'];
                    this.respData['itemUpc'] = this.itemRespData['itemUpc'];
                    this.respData['skuOrUpc'] = this.itemRespData['skuOrUpc'];
                    this.respData['isPartOfGroupItem'] = this.itemRespData['isPartOfGroupItem'];
                    this.Vanityartservice.PresentToast('Item UPC: ' + this.itemUpc + ' is scanned', 'success');
                    this.eventLog = 'Item Upc ' + this.itemUpc + ' is scanned \n' + this.eventLog;
                }
                else {
                    this.Vanityartservice.dismiss();
                    this.itemRespData = res;
                    this.Vanityartservice.PresentToast(this.itemUpc + ' ' + this.itemRespData['displayMessage'], 'danger');
                    this.eventLog = this.itemUpc + ' ' + this.itemRespData['displayMessage'] + '\n' + this.eventLog;
                    this.itemUpc = '';
                    setTimeout(() => {
                        this.item.setFocus();
                    });
                }
            }).catch(err => {
                this.Vanityartservice.dismiss();
                this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
            });
        });
    }
    onConditionChange() {
        if (this.condition == "20" || this.condition == "30") {
            this.enableTakePhoto = true;
        }
        else {
            this.enableTakePhoto = false;
        }
    }
    takePhoto(type) {
        this.camera.getPicture(this.cameraOptions).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            for (let item of this.photoType) {
                if (item.typeName == type.typeName) {
                    item.img = base64Image;
                }
            }
        }, (err) => {
            // Handle error
        });
    }
    saveReturn() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let url = this.Vanityartservice.baseUrl + this.Vanityartservice.save;
            let data = {
                "serialNumber": this.isSerailScan ? this.serialScanning.controls['serial'].value.toUpperCase() : '',
                "purchaseOrderNumber": this.respData['purchaseOrderNumber'],
                "orderId": this.respData['orderId'],
                "isOpalOrder": this.respData['isOpalOrder'],
                "isVanityArtOrder": this.respData['isVanityArtOrder'],
                "actualQuantityOrdered": this.respData['actualQuantityOrdered'],
                "returnedQuantity": this.respData['returnedQuantity'],
                "itemId": this.respData['itemId'],
                "itemUpc": this.respData['itemUpc'],
                "customerId": this.respData['customerId'],
                "customerName": this.respData['customerName'],
                "skuOrUpc": this.respData['itemUpc'],
                "status": "Success",
                "isPartOfGroupItem": this.respData['isPartOfGroupItem'],
                "WarehouseId": this.warehouse,
                "ItemCondition": this.condition,
                "CreatedBy": this.userId,
                "Notes": this.notes,
                "LoggedInUserId": this.userId,
                "isVanityArtUser": this.usertype
            };
            console.log(data);
            this.Vanityartservice.present();
            yield this.Vanityartservice.ajaxCallService(url, 'post', data).then(res => {
                if (res['status'] == "Success") {
                    this.Vanityartservice.dismiss();
                    this.Vanityartservice.PresentToast('Item return saved successfully.', 'success');
                    this.eventLog = 'Item return saved successfully.' + '\n' + this.eventLog;
                    this.formreset();
                }
                else {
                    this.Vanityartservice.dismiss();
                    this.Vanityartservice.PresentToast(res['displayMessage'], 'danger');
                    this.eventLog = res['displayMessage'] + '\n' + this.eventLog;
                }
            }).catch(err => {
                this.Vanityartservice.dismiss();
                this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
            });
        });
    }
};
ScanreturnsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRouterOutlet"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('serial', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ScanreturnsPage.prototype, "serial", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('po', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ScanreturnsPage.prototype, "po", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('item', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ScanreturnsPage.prototype, "item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])
], ScanreturnsPage.prototype, "content", void 0);
ScanreturnsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scanreturns',
        template: __webpack_require__(/*! raw-loader!./scanreturns.page.html */ "./node_modules/raw-loader/index.js!./src/app/scanreturns/scanreturns.page.html"),
        styles: [__webpack_require__(/*! ./scanreturns.page.scss */ "./src/app/scanreturns/scanreturns.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRouterOutlet"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"]])
], ScanreturnsPage);



/***/ })

}]);
//# sourceMappingURL=scanreturns-scanreturns-module-es2015.js.map