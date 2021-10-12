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

module.exports = ".options {\n  position: relative;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  margin-top: 15px;\n}\n\n.report {\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  margin-left: 12%;\n  width: 20%;\n}\n\n.waves {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n\n.loggbtn {\n  width: 100%;\n  border-radius: 5%;\n  font-weight: normal;\n  font-size: 25px;\n  --background: #29c5c5;\n}\n\n.photobtn {\n  width: 80%;\n  border-radius: 5%;\n  font-weight: normal;\n  font-size: 20px;\n  --background: #29c5c5;\n}\n\n.takePhotoGrid {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n  margin: 15px 30px 15px 30px;\n}\n\n.textfields {\n  --padding-start: 0px;\n  margin: 15px 30px 15px 30px;\n}\n\n.dropdown {\n  --padding-start: 0px;\n  margin: 15px 30px 15px 30px;\n  border: 1px solid #B2B2B2;\n  border-radius: 5px;\n}\n\n.round {\n  --border-radius: 50%;\n  --vertical-align: middle;\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #088088;\n  font-size: initial;\n  font-size: 25px;\n}\n\n.itemName {\n  font-weight: bold;\n}\n\n.class-headerimg {\n  background-image: url('bluebg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.back-marg {\n  float: left;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5;\n}\n\n.clear-marg {\n  background: transparent;\n  float: right;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5;\n}\n\n.save-center {\n  border-radius: 50%;\n  background: #07aeba;\n  font-size: 22px;\n  color: #ffffff;\n  height: 80px;\n  width: 85px;\n  border-radius: 50%;\n}\n\n.toggle-color {\n  --ion-color-base: #00BFCC !important;\n}\n\n.label-pos {\n  position: absolute;\n  bottom: 15%;\n}\n\n.row-padd {\n  padding: 1% 3%;\n}\n\n.error-message {\n  position: absolute;\n  left: 5%;\n  color: red;\n  font-size: 15px;\n}\n\n.title {\n  font-size: 33px;\n  font-weight: 500;\n  padding-top: 10px;\n  background: #00000000;\n  color: #fff;\n}\n\n.tool2 {\n  --background:#FFFFFF00;\n  --border-width: 0px !important;\n}\n\n.tool1 {\n  position: relative;\n  top: 1%;\n}\n\n.srccroll {\n  height: 200px;\n  overflow: scroll;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.srchgt {\n  height: auto;\n  overflow: hidden;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.lab-font {\n  font-size: 25px;\n}\n\n.event-font {\n  font-size: 16px;\n}\n\n.event-font-italic {\n  font-size: 16px;\n  color: #333;\n  font-style: italic;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 65px;\n  height: 34px;\n}\n\n.switch input {\n  display: none;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: grey;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 28px;\n  width: 28px;\n  left: 4px;\n  top: 3px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #00BFCC;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(55px);\n  transform: translateX(30px);\n}\n\n.on {\n  display: none;\n}\n\n.off {\n  padding-left: 33px;\n}\n\n.on {\n  padding-right: 25px;\n}\n\n.on, .off {\n  color: white;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  font-size: 13px;\n  font-family: Verdana, sans-serif;\n}\n\ninput:checked + .slider .on {\n  display: block;\n}\n\ninput:checked + .slider .off {\n  display: none;\n}\n\n.slider.rnd {\n  border-radius: 16px;\n}\n\n.slider.rnd:before {\n  border-radius: 14px;\n}\n\n.marginTL10 {\n  margin: 1% 2%;\n}\n\n.marginL15 {\n  margin-left: 35px !important;\n  margin-top: 0px !important;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 568px) {\n  .lab-font {\n    font-size: 13px;\n  }\n\n  .event-font {\n    font-size: 13px;\n  }\n}\n\n.validation-errors {\n  font-size: 15px;\n  color: red;\n  text-indent: 30px;\n}\n\ntable > tbody > tr > td:nth-child(1) {\n  width: 45%;\n  padding: 0% 0% 0% 5%;\n}\n\ntable > tbody > tr > td:nth-child(2) {\n  width: 45%;\n}\n\ntable > tbody > tr > td:nth-child(3) {\n  width: 45%;\n}\n\n.rowtab {\n  padding: 2% 5%;\n}\n\nion-progress-bar {\n  top: 10%;\n}\n\n.imgscan {\n  top: -7%;\n  font-size: 47px;\n  position: relative;\n}\n\n#bar {\n  height: 1.5rem;\n  width: 7.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjA2MDE4L0RvY3VtZW50cy92YW5pdHlBcnQtTGF0ZXN0L3NyYy9hcHAvc2NhbnJldHVybnMvc2NhbnJldHVybnMucGFnZS5zY3NzIiwic3JjL2FwcC9zY2FucmV0dXJucy9zY2FucmV0dXJucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNGRjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNERjs7QURHQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQUE7O0FESUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0RGOztBRElBO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwyQkFBQTtBQ0RGOztBRElBO0VBQ0Usb0JBQUE7RUFDQSwyQkFBQTtBQ0RGOztBRElBO0VBQ0Usb0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNJLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDREo7O0FESUE7RUFDRSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsOENBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNJLG9DQUFBO0FDREo7O0FESUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRElBO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNENBQUE7RUFDSSxrQkFBQTtBQ0ROOztBRElBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBO0VBQWUsYUFBQTtBQ0RmOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBeE5VO0FDd05aOztBREdBO0VBQ0UsMkJBQUE7QUNBRjs7QURHQTtFQUNFLG1DQUFBO0VBRUEsMkJBQUE7QUNBRjs7QURHQTtFQUVFLGFBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0FDREY7O0FESUE7RUFDRSxtQkFBQTtBQ0RGOztBRElBO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FDRkY7O0FES0E7RUFDQyxjQUFBO0FDRkQ7O0FESUE7RUFDQyxhQUFBO0FDREQ7O0FER0E7RUFDRSxtQkFBQTtBQ0FGOztBREdBO0VBQ0ksbUJBQUE7QUNBSjs7QURHQTtFQUNFLGFBQUE7QUNBRjs7QURHQTtFQUNFLDRCQUFBO0VBQ0EsMEJBQUE7QUNBRjs7QURFQTtFQUNFO0lBQ0UsZUFBQTtFQ0NGOztFRENBO0lBQ0UsZUFBQTtFQ0VGO0FBQ0Y7O0FEQ0E7RUFDQyxlQUFBO0VBQ0EsVUFBQTtFQUNDLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7QUNFRjs7QURDQTtFQUNFLFVBQUE7QUNFRjs7QURBQTtFQUNFLFVBQUE7QUNHRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURDQTtFQUNFLFFBQUE7QUNFRjs7QURBQTtFQUNFLFFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QUREQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9zY2FucmV0dXJucy9zY2FucmV0dXJucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnRuLWNvbG9yOiAjMDBCRkNDO1xuJHRleHQtY29sb3I6ICMwNzA3MDc7XG5cbi5vcHRpb25ze1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnJlcG9ydHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTIlO1xuICB3aWR0aDogMjAlO1xufVxuLndhdmVze1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG59XG4ubG9nZ2J0bntcbndpZHRoOiAxMDAlO1xuYm9yZGVyLXJhZGl1czogNSU7XG5mb250LXdlaWdodDogbm9ybWFsO1xuZm9udC1zaXplOiAyNXB4O1xuLS1iYWNrZ3JvdW5kOiAjMjljNWM1O1xuLy9wYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcbn1cblxuLnBob3RvYnRue1xuICB3aWR0aDogODAlO1xuICBib3JkZXItcmFkaXVzOiA1JTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICAtLWJhY2tncm91bmQ6ICMyOWM1YzU7XG4gIH1cblxuLnRha2VQaG90b0dyaWR7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDE1cHggMzBweCAxNXB4IDMwcHg7XG59XG5cbi50ZXh0ZmllbGRze1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgbWFyZ2luOiAxNXB4IDMwcHggMTVweCAzMHB4O1xufVxuXG4uZHJvcGRvd257XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICBtYXJnaW46IDE1cHggMzBweCAxNXB4IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCMkIyQjI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnJvdW5kIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwODgwODg7XG4gICAgZm9udC1zaXplOiBpbml0aWFsO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLml0ZW1OYW1le1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsYXNzLWhlYWRlcmltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9ibHVlYmcucG5nXCIpIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5iYWNrLW1hcmd7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjUlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjljNWM1O1xufVxuXG4uY2xlYXItbWFyZ3tcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI1JTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzI5YzVjNTtcbn1cblxuLnNhdmUtY2VudGVye1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwN2FlYmE7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDg1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnRvZ2dsZS1jb2xvcntcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMDBCRkNDICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbC1wb3N7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNSU7XG59XG5cbi5yb3ctcGFkZHtcbiAgcGFkZGluZzogMSUgMyU7XG59XG5cbi5lcnJvci1tZXNzYWdle1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUlO1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50b29sMntcbiAgLS1iYWNrZ3JvdW5kOiNGRkZGRkYwMDtcbiAgLS1ib3JkZXItd2lkdGggOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRvb2wxe1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMSU7XG59XG5cbi5zcmNjcm9sbHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgei1pbmRleDogOTk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI4KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNyY2hndHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlIDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmxhYi1mb250e1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5ldmVudC1mb250e1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5ldmVudC1mb250LWl0YWxpY3tcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICAvL21hcmdpbjogMCAyJTtcbn1cblxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4uc3dpdGNoIGlucHV0IHtkaXNwbGF5Om5vbmU7fVxuXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gIHRyYW5zaXRpb246IC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG4gIGxlZnQ6IDRweDtcbiAgdG9wOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRidG4tY29sb3I7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcbn1cblxuLm9uXG57XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5vZmZ7XG4gIHBhZGRpbmctbGVmdDozM3B4O1xufVxuXG4ub257XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi5vbiwgLm9mZlxue1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuaW5wdXQ6Y2hlY2tlZCsgLnNsaWRlciAub25cbntkaXNwbGF5OiBibG9jazt9XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIC5vZmZcbntkaXNwbGF5OiBub25lO31cblxuLnNsaWRlci5ybmQge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG4uc2xpZGVyLnJuZDpiZWZvcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG59XG5cbi5tYXJnaW5UTDEwIHtcbiAgbWFyZ2luOiAxJSAyJTtcbn1cbiAgXG4ubWFyZ2luTDE1IHtcbiAgbWFyZ2luLWxlZnQ6IDM1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNTY4cHgpIHtcbiAgLmxhYi1mb250e1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICAuZXZlbnQtZm9udHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgXG59XG4udmFsaWRhdGlvbi1lcnJvcnN7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0Y29sb3I6IHJlZDtcbiAgdGV4dC1pbmRlbnQ6IDMwcHg7XG59XG50YWJsZSA+dGJvZHkgPiB0ciA+IHRkOm50aC1jaGlsZCgxKXtcbiAgd2lkdGg6IDQ1JTtcbiAgcGFkZGluZzogMCUgMCUgMCUgNSU7XG4gIFxufVxudGFibGUgPnRib2R5ID4gdHIgPiB0ZDpudGgtY2hpbGQoMil7XG4gIHdpZHRoOiA0NSU7ICBcbn1cbnRhYmxlID50Ym9keSA+IHRyID4gdGQ6bnRoLWNoaWxkKDMpe1xuICB3aWR0aDogNDUlOyAgXG59XG4vLyB0YWJsZSA+dGJvZHkgPiB0cntcbi8vICAgcGFkZGluZzogMCUgNSUgMCUgNSU7XG4vLyB9XG4ucm93dGFie1xuICBwYWRkaW5nOiAyJSA1JTtcbn1cbmlvbi1wcm9ncmVzcy1iYXJ7XG4gIHRvcDogMTAlO1xufVxuLmltZ3NjYW57XG4gIHRvcDogLTclO1xuICBmb250LXNpemU6IDQ3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNiYXIgeyAgXG4gIGhlaWdodDogMS41cmVtOyBcbiAgd2lkdGg6IDcuNXJlbTtcbn0iLCIub3B0aW9ucyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ucmVwb3J0IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTIlO1xuICB3aWR0aDogMjAlO1xufVxuXG4ud2F2ZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG59XG5cbi5sb2dnYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDI1cHg7XG4gIC0tYmFja2dyb3VuZDogIzI5YzVjNTtcbn1cblxuLnBob3RvYnRuIHtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjMjljNWM1O1xufVxuXG4udGFrZVBob3RvR3JpZCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDE1cHggMzBweCAxNXB4IDMwcHg7XG59XG5cbi50ZXh0ZmllbGRzIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbjogMTVweCAzMHB4IDE1cHggMzBweDtcbn1cblxuLmRyb3Bkb3duIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbjogMTVweCAzMHB4IDE1cHggMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0IyQjJCMjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucm91bmQge1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWlvbi1jb2xvci1iYXNlOiAjMDg4MDg4O1xuICBmb250LXNpemU6IGluaXRpYWw7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLml0ZW1OYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbGFzcy1oZWFkZXJpbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvYmx1ZWJnLnBuZ1wiKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmJhY2stbWFyZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjUlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjljNWM1O1xufVxuXG4uY2xlYXItbWFyZyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyNSU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMyOWM1YzU7XG59XG5cbi5zYXZlLWNlbnRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzA3YWViYTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udG9nZ2xlLWNvbG9yIHtcbiAgLS1pb24tY29sb3ItYmFzZTogIzAwQkZDQyAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWwtcG9zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1JTtcbn1cblxuLnJvdy1wYWRkIHtcbiAgcGFkZGluZzogMSUgMyU7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1JTtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDMzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udG9vbDIge1xuICAtLWJhY2tncm91bmQ6I0ZGRkZGRjAwO1xuICAtLWJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50b29sMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxJTtcbn1cblxuLnNyY2Nyb2xsIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgei1pbmRleDogOTk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc3JjaGd0IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB6LWluZGV4OiA5OTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5sYWItZm9udCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmV2ZW50LWZvbnQge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5ldmVudC1mb250LWl0YWxpYyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4uc3dpdGNoIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG4gIGxlZnQ6IDRweDtcbiAgdG9wOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQkZDQztcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xufVxuXG4ub24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ub2ZmIHtcbiAgcGFkZGluZy1sZWZ0OiAzM3B4O1xufVxuXG4ub24ge1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xufVxuXG4ub24sIC5vZmYge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIC5vbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciAub2ZmIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlci5ybmQge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG4uc2xpZGVyLnJuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xufVxuXG4ubWFyZ2luVEwxMCB7XG4gIG1hcmdpbjogMSUgMiU7XG59XG5cbi5tYXJnaW5MMTUge1xuICBtYXJnaW4tbGVmdDogMzVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDU2OHB4KSB7XG4gIC5sYWItZm9udCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG5cbiAgLmV2ZW50LWZvbnQge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuLnZhbGlkYXRpb24tZXJyb3JzIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWluZGVudDogMzBweDtcbn1cblxudGFibGUgPiB0Ym9keSA+IHRyID4gdGQ6bnRoLWNoaWxkKDEpIHtcbiAgd2lkdGg6IDQ1JTtcbiAgcGFkZGluZzogMCUgMCUgMCUgNSU7XG59XG5cbnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkOm50aC1jaGlsZCgyKSB7XG4gIHdpZHRoOiA0NSU7XG59XG5cbnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkOm50aC1jaGlsZCgzKSB7XG4gIHdpZHRoOiA0NSU7XG59XG5cbi5yb3d0YWIge1xuICBwYWRkaW5nOiAyJSA1JTtcbn1cblxuaW9uLXByb2dyZXNzLWJhciB7XG4gIHRvcDogMTAlO1xufVxuXG4uaW1nc2NhbiB7XG4gIHRvcDogLTclO1xuICBmb250LXNpemU6IDQ3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2JhciB7XG4gIGhlaWdodDogMS41cmVtO1xuICB3aWR0aDogNy41cmVtO1xufSJdfQ== */"

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
                    if (item.typeName == 'Return Label') {
                        this.returnLabelPhoto = base64Image;
                    }
                    else if (item.typeName == 'SKU') {
                        this.skuPhoto = base64Image;
                    }
                    else if (item.typeName == 'Damaged Area') {
                        this.damagedAreaPhoto = base64Image;
                    }
                    else if (item.typeName == 'Up front') {
                        this.upFrontPhoto = base64Image;
                    }
                }
            }
            if (this.returnLabelPhoto && this.skuPhoto && this.damagedAreaPhoto && this.upFrontPhoto) {
                this.enableSaveBtn = true;
            }
            else {
                this.enableSaveBtn = false;
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
                "isVanityArtUser": this.usertype,
                "ReturnLabelPhoto": this.enableTakePhoto ? this.returnLabelPhoto : '',
                "SkuPhoto": this.enableTakePhoto ? this.skuPhoto : '',
                "DamagedAreaPhoto": this.enableTakePhoto ? this.damagedAreaPhoto : '',
                "UpFrontPhoto": this.enableTakePhoto ? this.upFrontPhoto : ''
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