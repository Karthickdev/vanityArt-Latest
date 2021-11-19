(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scanreturns-scanreturns-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/scanreturns/scanreturns.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/scanreturns/scanreturns.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-padding class-headerimg\">\n  <div class=\"ion-text-center ion-text-uppercase title\">RETURNS</div>\n  <ion-toolbar class=\"tool2\">\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"4\" class=\"ion-text-left padd-left-0\">\n          <ion-buttons class=\"back-marg\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\" (click)=\"backToHome()\">BACK</ion-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"2\" class=\"ion-text-center\">\n          <ion-button fill='clear' class=\"save-center\" type=\"submit\" [disabled]=\"!enableSaveBtn\" (click)=\"saveReturn()\">SAVE\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"4\" class=\"ion-text-right\" (click)=\"formreset()\">\n          <ion-buttons class=\"clear-marg\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\">CLEAR</ion-button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <!-- SERIAL SCANNING -->\n  <div *ngIf=\"isSerailScan\">\n    <ion-row>\n      <ion-col size=\"6\"></ion-col>\n      <ion-col size=\"6\" style=\"text-align: left;text-indent: 30px;\">\n        <ion-button expand=\"block\" class=\"loggbtn\" (click)=\"switchToPo()\">SWITCH TO SCAN PO#\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <form [formGroup]=\"serialScanning\" (keyup.enter)=\"handleSerialScan()\">\n      <ion-item class=\"textfields\">\n        <ion-col size=\"9\">\n          <ion-label class=\"lab-font\">Serial #</ion-label>\n          <ion-input #serial clearInput class=\"ion-text-uppercase lab-font\" type=\"text\" formControlName=\"serial\"></ion-input>\n        </ion-col>\n        <ion-col size=\"3\" style=\"text-align: right;\">\n          <ion-icon name=\"search\" style=\"width: 35px; height: 35px; color:darkgray;\" (click)=\"handleSerialScan()\"> </ion-icon>\n        </ion-col>\n      </ion-item>\n      <div class=\"validation-errors\">\n        <div *ngFor=\"let validation of validation_messages['serial']\">\n          <div class=\"error-scan\"\n            *ngIf=\"serialScanning.get('serial').hasError(validation['type']) && serialScanning.get('serial').touched\">\n            {{ validation.message }}\n          </div>\n        </div>\n      </div>\n    </form>\n    <ion-item class=\"textfields\">\n      <ion-label position=\"floating\" class=\"lab-font\">PO#</ion-label>\n      <ion-input class=\"lab-font ion-text-uppercase\" [(ngModel)]=\"poNumber\" readonly></ion-input>\n    </ion-item>\n    <ion-note *ngIf=\"customerName\" style=\"padding-left: 30px;\">Customer: {{customerName}}</ion-note>\n    <!-- <ion-item class=\"textfields\">\n      <ion-label position=\"floating\" class=\"lab-font\">ITEM</ion-label>\n      <ion-input [(ngModel)]=\"itemUpc\" class=\"lab-font ion-text-uppercase\" readonly></ion-input>\n    </ion-item> -->\n    <!-- Display SKU instead of UPC -->\n    <ion-item class=\"textfields\">\n      <ion-label position=\"floating\" class=\"lab-font\">ITEM</ion-label>\n      <ion-input [(ngModel)]=\"itemSku\" class=\"lab-font ion-text-uppercase\" readonly></ion-input>\n    </ion-item>\n    <ion-row style=\"text-indent: 25px;\">\n      <ion-col>\n        <ion-label style=\"color: rgb(28, 31, 31);\" class=\"lab-font\">Warehouse</ion-label>\n        <ion-note style=\"color: red;font-size: 25px;\">*</ion-note>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"dropdown\">\n      <ion-col>\n        <ion-select  [(ngModel)]=\"warehouse\">\n          <ion-select-option *ngFor=\"let warehouse of warehouseList\" value=\"{{warehouse.value}}\">{{warehouse.title}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    \n    <!-- <ion-item class=\"dropdown\"> -->\n      \n    <!-- </ion-item> -->\n    <ion-row style=\"text-indent: 25px;\">\n      <ion-col>\n        <ion-label style=\"color: rgb(28, 31, 31);\" class=\"lab-font\">Condition</ion-label>\n        <ion-note style=\"color: red;font-size: 25px;\">*</ion-note>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"dropdown\">\n      <ion-col>\n        <ion-select  [(ngModel)]=\"condition\" (ionChange)=\"onConditionChange()\">\n          <ion-select-option *ngFor=\"let condition of conditionList\" value=\"{{condition.value}}\">{{condition.title}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-grid *ngIf=\"enableTakePhoto\">\n      <ion-row *ngFor=\"let type of photoType; let i = index\" class=\"takePhotoGrid\">\n        <ion-col size=\"4\">\n          <ion-label style=\"color: rgb(28, 31, 31);\" class=\"lab-font\">{{type.typeName}}</ion-label>\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align: center;\">\n          <ion-button class=\"photobtn\" (click)=\"takePicture(type)\">Take Photo</ion-button>\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align: center;\">\n          <img id={{i}} src=\"{{type.img}}\" style=\"width: 25%;\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-item class=\"textfields\">\n      <ion-col>\n        <ion-label style=\"color: rgb(28, 31, 31);\" class=\"lab-font\">Notes</ion-label>\n        <ion-textarea rows=\"3\" [(ngModel)]=\"notes\" class=\"event-font-italic lab-font\"></ion-textarea>\n      </ion-col>\n    </ion-item>\n  </div>\n<!-- SERIAL SCANNING END -->\n<!-- PO SCANNING -->\n  <div *ngIf=\"!isSerailScan\">\n    <ion-row>\n      <ion-col size=\"6\"></ion-col>\n      <ion-col size=\"6\" style=\"text-align: left;text-indent: 30px;\">\n        <ion-button expand=\"block\" class=\"loggbtn\" (click)=\"switchToserial()\">SWITCH TO SCAN SERIAL#\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <form [formGroup]=\"poScanning\" (keyup.enter)=\"handlePoScan()\">\n      <ion-item class=\"textfields\">\n        <ion-col size=\"9\">\n          <ion-label class=\"lab-font\">PO #</ion-label>\n          <ion-input #po clearInput class=\"ion-text-uppercase lab-font\" type=\"text\" formControlName=\"po\"></ion-input>\n        </ion-col>\n        <ion-col size=\"3\" style=\"text-align: right;\">\n          <ion-icon name=\"search\" style=\"width: 35px; height: 35px; color:darkgray;\" (click)=\"handlePoScan()\"> </ion-icon>\n        </ion-col>\n      </ion-item>\n      <div class=\"validation-errors\">\n        <div *ngFor=\"let validation of validation_messages['po']\">\n          <div class=\"error-scan\"\n            *ngIf=\"poScanning.get('po').hasError(validation['type']) && poScanning.get('po').touched\">\n            {{ validation.message }}\n          </div>\n        </div>\n      </div>\n    </form>\n    <ion-note *ngIf=\"customerName\" style=\"padding-left: 30px;\" class=\"lab-font\">Customer: {{customerName}}</ion-note>\n    <ion-item class=\"textfields\">\n      <ion-col size=\"9\">\n        <ion-label class=\"lab-font\">ITEM</ion-label>\n        <ion-input #item [(ngModel)]=\"itemUpc\" class=\"lab-font\" [readonly]=\"itemReadOnly\" (keyup.enter)=\"handleitemScan()\"></ion-input>\n      </ion-col>\n      <ion-col size=\"3\" style=\"text-align: right;\">\n        <ion-icon name=\"search\" style=\"width: 35px; height: 35px; color:darkgray;\" (click)=\"handleitemScan()\"> </ion-icon>\n      </ion-col>\n    </ion-item>\n    <ion-row style=\"text-indent: 25px;\">\n      <ion-col>\n        <ion-label style=\"color: rgb(28, 31, 31);\" class=\"lab-font\">Warehouse</ion-label>\n        <ion-note style=\"color: red;font-size: 25px;\">*</ion-note>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"dropdown\">\n      <ion-col>\n        <ion-select  [(ngModel)]=\"warehouse\">\n          <ion-select-option *ngFor=\"let warehouse of warehouseList\" value=\"{{warehouse.value}}\">{{warehouse.title}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"text-indent: 25px;\">\n      <ion-col>\n        <ion-label style=\"color: rgb(28, 31, 31);\" class=\"lab-font\">Condition</ion-label>\n        <ion-note style=\"color: red;font-size: 25px;\">*</ion-note>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"dropdown\">\n      <ion-col>\n        <ion-select  [(ngModel)]=\"condition\" (ionChange)=\"onConditionChange()\">\n          <ion-select-option *ngFor=\"let condition of conditionList\" value=\"{{condition.value}}\">{{condition.title}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-grid *ngIf=\"enableTakePhoto\">\n      <ion-row *ngFor=\"let type of photoType\" class=\"takePhotoGrid\">\n        <ion-col size=\"4\">\n          <ion-label style=\"color: rgb(28, 31, 31);\" class=\"lab-font\">{{type.typeName}}</ion-label>\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align: center;\">\n          <ion-button class=\"photobtn\" (click)=\"takePicture(type)\">Take Photo</ion-button>\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align: center;\">\n          <img src=\"{{type.img}}\" style=\"width: 25%;\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-item class=\"textfields\">\n      <ion-col>\n        <ion-label style=\"color: rgb(28, 31, 31);\" class=\"lab-font\">Notes</ion-label>\n        <ion-textarea rows=\"3\" [(ngModel)]=\"notes\" class=\"event-font-italic\"></ion-textarea>\n      </ion-col>\n    </ion-item>\n    \n  </div>\n  <!-- PO SCANNING END -->\n  <ion-row class=\"marginTL10\">\n    <ion-col size=\"12\">\n      <ion-label position=\"stacked\" class=\"event-font marginTL10\">Event Log</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item class=\"ion-padding-horizontal\">\n        <ion-textarea rows=\"3\" [readonly]='true' [(ngModel)]=\"eventLog\" class=\"event-font-italic\"></ion-textarea>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _scanreturns_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scanreturns.page */ "./src/app/scanreturns/scanreturns.page.ts");







var routes = [
    {
        path: '',
        component: _scanreturns_page__WEBPACK_IMPORTED_MODULE_6__["ScanreturnsPage"]
    }
];
var ScanreturnsPageModule = /** @class */ (function () {
    function ScanreturnsPageModule() {
    }
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
    return ScanreturnsPageModule;
}());



/***/ }),

/***/ "./src/app/scanreturns/scanreturns.page.scss":
/*!***************************************************!*\
  !*** ./src/app/scanreturns/scanreturns.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".options {\n  position: relative;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  margin-top: 15px;\n}\n\ninput[type=file] {\n  display: none;\n}\n\n.custom-file-upload {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n\n.report {\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  margin-left: 12%;\n  width: 20%;\n}\n\n.waves {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n\n.loggbtn {\n  width: 100%;\n  border-radius: 5%;\n  font-weight: normal;\n  font-size: 25px;\n  --background: #29c5c5;\n}\n\n.photobtn {\n  width: 80%;\n  border-radius: 5%;\n  font-weight: normal;\n  font-size: 20px;\n  --background: #29c5c5;\n}\n\n.takePhotoGrid {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n  margin: 15px 30px 15px 30px;\n}\n\n.textfields {\n  --padding-start: 0px;\n  margin: 15px 30px 15px 30px;\n}\n\n.dropdown {\n  --padding-start: 0px;\n  margin: 15px 30px 15px 30px;\n  border: 1px solid #B2B2B2;\n  border-radius: 5px;\n}\n\n.round {\n  --border-radius: 50%;\n  --vertical-align: middle;\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #088088;\n  font-size: initial;\n  font-size: 25px;\n}\n\n.itemName {\n  font-weight: bold;\n}\n\n.class-headerimg {\n  background-image: url('bluebg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.back-marg {\n  float: left;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5;\n}\n\n.clear-marg {\n  background: transparent;\n  float: right;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5;\n}\n\n.save-center {\n  border-radius: 50%;\n  background: #07aeba;\n  font-size: 22px;\n  color: #ffffff;\n  height: 80px;\n  width: 85px;\n  border-radius: 50%;\n}\n\n.toggle-color {\n  --ion-color-base: #00BFCC !important;\n}\n\n.label-pos {\n  position: absolute;\n  bottom: 15%;\n}\n\n.row-padd {\n  padding: 1% 3%;\n}\n\n.error-message {\n  position: absolute;\n  left: 5%;\n  color: red;\n  font-size: 15px;\n}\n\n.title {\n  font-size: 33px;\n  font-weight: 500;\n  padding-top: 10px;\n  background: #00000000;\n  color: #fff;\n}\n\n.tool2 {\n  --background:#FFFFFF00;\n  --border-width: 0px !important;\n}\n\n.tool1 {\n  position: relative;\n  top: 1%;\n}\n\n.srccroll {\n  height: 200px;\n  overflow: scroll;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.srchgt {\n  height: auto;\n  overflow: hidden;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.lab-font {\n  font-size: 25px;\n}\n\n.event-font {\n  font-size: 16px;\n}\n\n.event-font-italic {\n  font-size: 16px;\n  color: #333;\n  font-style: italic;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 65px;\n  height: 34px;\n}\n\n.switch input {\n  display: none;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: grey;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 28px;\n  width: 28px;\n  left: 4px;\n  top: 3px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #00BFCC;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(55px);\n  transform: translateX(30px);\n}\n\n.on {\n  display: none;\n}\n\n.off {\n  padding-left: 33px;\n}\n\n.on {\n  padding-right: 25px;\n}\n\n.on, .off {\n  color: white;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  font-size: 13px;\n  font-family: Verdana, sans-serif;\n}\n\ninput:checked + .slider .on {\n  display: block;\n}\n\ninput:checked + .slider .off {\n  display: none;\n}\n\n.slider.rnd {\n  border-radius: 16px;\n}\n\n.slider.rnd:before {\n  border-radius: 14px;\n}\n\n.marginTL10 {\n  margin: 1% 2%;\n}\n\n.marginL15 {\n  margin-left: 35px !important;\n  margin-top: 0px !important;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 568px) {\n  .lab-font {\n    font-size: 13px;\n  }\n\n  .event-font {\n    font-size: 13px;\n  }\n}\n\n.validation-errors {\n  font-size: 15px;\n  color: red;\n  text-indent: 30px;\n}\n\ntable > tbody > tr > td:nth-child(1) {\n  width: 45%;\n  padding: 0% 0% 0% 5%;\n}\n\ntable > tbody > tr > td:nth-child(2) {\n  width: 45%;\n}\n\ntable > tbody > tr > td:nth-child(3) {\n  width: 45%;\n}\n\n.rowtab {\n  padding: 2% 5%;\n}\n\nion-progress-bar {\n  top: 10%;\n}\n\n.imgscan {\n  top: -7%;\n  font-size: 47px;\n  position: relative;\n}\n\n#bar {\n  height: 1.5rem;\n  width: 7.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbmlzdHJhdG9yL0RvY3VtZW50cy92YW5pdHlBcnQtTGF0ZXN0L3NyYy9hcHAvc2NhbnJldHVybnMvc2NhbnJldHVybnMucGFnZS5zY3NzIiwic3JjL2FwcC9zY2FucmV0dXJucy9zY2FucmV0dXJucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0FDRkY7O0FESUE7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNERjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNBRjs7QURFQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQ0E7O0FER0E7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwyQkFBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7RUFDQSwyQkFBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNJLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDRSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsOENBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNJLG9DQUFBO0FDQUo7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNENBQUE7RUFDSSxrQkFBQTtBQ0FOOztBREdBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRElBO0VBQWUsYUFBQTtBQ0FmOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBbE9VO0FDbU9aOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLG1DQUFBO0VBRUEsMkJBQUE7QUNDRjs7QURFQTtFQUVFLGFBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtBQ0FGOztBREdBO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FDREY7O0FESUE7RUFDQyxjQUFBO0FDREQ7O0FER0E7RUFDQyxhQUFBO0FDQUQ7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURDQTtFQUNFO0lBQ0UsZUFBQTtFQ0VGOztFREFBO0lBQ0UsZUFBQTtFQ0dGO0FBQ0Y7O0FEQUE7RUFDQyxlQUFBO0VBQ0EsVUFBQTtFQUNDLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7QUNHRjs7QURBQTtFQUNFLFVBQUE7QUNHRjs7QUREQTtFQUNFLFVBQUE7QUNJRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QURBQTtFQUNFLFFBQUE7QUNHRjs7QUREQTtFQUNFLFFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QURGQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9zY2FucmV0dXJucy9zY2FucmV0dXJucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnRuLWNvbG9yOiAjMDBCRkNDO1xuJHRleHQtY29sb3I6ICMwNzA3MDc7XG5cbi5vcHRpb25ze1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmN1c3RvbS1maWxlLXVwbG9hZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlcG9ydHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTIlO1xuICB3aWR0aDogMjAlO1xufVxuLndhdmVze1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG59XG4ubG9nZ2J0bntcbndpZHRoOiAxMDAlO1xuYm9yZGVyLXJhZGl1czogNSU7XG5mb250LXdlaWdodDogbm9ybWFsO1xuZm9udC1zaXplOiAyNXB4O1xuLS1iYWNrZ3JvdW5kOiAjMjljNWM1O1xuLy9wYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcbn1cblxuLnBob3RvYnRue1xuICB3aWR0aDogODAlO1xuICBib3JkZXItcmFkaXVzOiA1JTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICAtLWJhY2tncm91bmQ6ICMyOWM1YzU7XG4gIH1cblxuLnRha2VQaG90b0dyaWR7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDE1cHggMzBweCAxNXB4IDMwcHg7XG59XG5cbi50ZXh0ZmllbGRze1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgbWFyZ2luOiAxNXB4IDMwcHggMTVweCAzMHB4O1xufVxuXG4uZHJvcGRvd257XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICBtYXJnaW46IDE1cHggMzBweCAxNXB4IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCMkIyQjI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnJvdW5kIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwODgwODg7XG4gICAgZm9udC1zaXplOiBpbml0aWFsO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLml0ZW1OYW1le1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsYXNzLWhlYWRlcmltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9ibHVlYmcucG5nXCIpIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5iYWNrLW1hcmd7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjUlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjljNWM1O1xufVxuXG4uY2xlYXItbWFyZ3tcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI1JTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzI5YzVjNTtcbn1cblxuLnNhdmUtY2VudGVye1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwN2FlYmE7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDg1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnRvZ2dsZS1jb2xvcntcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMDBCRkNDICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbC1wb3N7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNSU7XG59XG5cbi5yb3ctcGFkZHtcbiAgcGFkZGluZzogMSUgMyU7XG59XG5cbi5lcnJvci1tZXNzYWdle1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUlO1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50b29sMntcbiAgLS1iYWNrZ3JvdW5kOiNGRkZGRkYwMDtcbiAgLS1ib3JkZXItd2lkdGggOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRvb2wxe1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMSU7XG59XG5cbi5zcmNjcm9sbHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgei1pbmRleDogOTk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI4KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNyY2hndHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlIDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmxhYi1mb250e1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5ldmVudC1mb250e1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5ldmVudC1mb250LWl0YWxpY3tcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICAvL21hcmdpbjogMCAyJTtcbn1cblxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4uc3dpdGNoIGlucHV0IHtkaXNwbGF5Om5vbmU7fVxuXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gIHRyYW5zaXRpb246IC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG4gIGxlZnQ6IDRweDtcbiAgdG9wOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRidG4tY29sb3I7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcbn1cblxuLm9uXG57XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5vZmZ7XG4gIHBhZGRpbmctbGVmdDozM3B4O1xufVxuXG4ub257XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi5vbiwgLm9mZlxue1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuaW5wdXQ6Y2hlY2tlZCsgLnNsaWRlciAub25cbntkaXNwbGF5OiBibG9jazt9XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIC5vZmZcbntkaXNwbGF5OiBub25lO31cblxuLnNsaWRlci5ybmQge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG4uc2xpZGVyLnJuZDpiZWZvcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG59XG5cbi5tYXJnaW5UTDEwIHtcbiAgbWFyZ2luOiAxJSAyJTtcbn1cbiAgXG4ubWFyZ2luTDE1IHtcbiAgbWFyZ2luLWxlZnQ6IDM1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNTY4cHgpIHtcbiAgLmxhYi1mb250e1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICAuZXZlbnQtZm9udHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgXG59XG4udmFsaWRhdGlvbi1lcnJvcnN7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0Y29sb3I6IHJlZDtcbiAgdGV4dC1pbmRlbnQ6IDMwcHg7XG59XG50YWJsZSA+dGJvZHkgPiB0ciA+IHRkOm50aC1jaGlsZCgxKXtcbiAgd2lkdGg6IDQ1JTtcbiAgcGFkZGluZzogMCUgMCUgMCUgNSU7XG4gIFxufVxudGFibGUgPnRib2R5ID4gdHIgPiB0ZDpudGgtY2hpbGQoMil7XG4gIHdpZHRoOiA0NSU7ICBcbn1cbnRhYmxlID50Ym9keSA+IHRyID4gdGQ6bnRoLWNoaWxkKDMpe1xuICB3aWR0aDogNDUlOyAgXG59XG4vLyB0YWJsZSA+dGJvZHkgPiB0cntcbi8vICAgcGFkZGluZzogMCUgNSUgMCUgNSU7XG4vLyB9XG4ucm93dGFie1xuICBwYWRkaW5nOiAyJSA1JTtcbn1cbmlvbi1wcm9ncmVzcy1iYXJ7XG4gIHRvcDogMTAlO1xufVxuLmltZ3NjYW57XG4gIHRvcDogLTclO1xuICBmb250LXNpemU6IDQ3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNiYXIgeyAgXG4gIGhlaWdodDogMS41cmVtOyBcbiAgd2lkdGg6IDcuNXJlbTtcbn0iLCIub3B0aW9ucyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmN1c3RvbS1maWxlLXVwbG9hZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlcG9ydCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEyJTtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLndhdmVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xufVxuXG4ubG9nZ2J0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1JTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICAtLWJhY2tncm91bmQ6ICMyOWM1YzU7XG59XG5cbi5waG90b2J0biB7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogIzI5YzVjNTtcbn1cblxuLnRha2VQaG90b0dyaWQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxNXB4IDMwcHggMTVweCAzMHB4O1xufVxuXG4udGV4dGZpZWxkcyB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICBtYXJnaW46IDE1cHggMzBweCAxNXB4IDMwcHg7XG59XG5cbi5kcm9wZG93biB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICBtYXJnaW46IDE1cHggMzBweCAxNXB4IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCMkIyQjI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnJvdW5kIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgLS1pb24tY29sb3ItYmFzZTogIzA4ODA4ODtcbiAgZm9udC1zaXplOiBpbml0aWFsO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5pdGVtTmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2xhc3MtaGVhZGVyaW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2JsdWViZy5wbmdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5iYWNrLW1hcmcge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI1JTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzI5YzVjNTtcbn1cblxuLmNsZWFyLW1hcmcge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjUlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjljNWM1O1xufVxuXG4uc2F2ZS1jZW50ZXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwN2FlYmE7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDg1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnRvZ2dsZS1jb2xvciB7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICMwMEJGQ0MgIWltcG9ydGFudDtcbn1cblxuLmxhYmVsLXBvcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNSU7XG59XG5cbi5yb3ctcGFkZCB7XG4gIHBhZGRpbmc6IDElIDMlO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNSU7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRvb2wyIHtcbiAgLS1iYWNrZ3JvdW5kOiNGRkZGRkYwMDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udG9vbDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMSU7XG59XG5cbi5zcmNjcm9sbCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNyY2hndCB7XG4gIGhlaWdodDogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgei1pbmRleDogOTk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubGFiLWZvbnQge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5ldmVudC1mb250IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZXZlbnQtZm9udC1pdGFsaWMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLnN3aXRjaCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xuICBsZWZ0OiA0cHg7XG4gIHRvcDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEJGQ0M7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcbn1cblxuLm9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm9mZiB7XG4gIHBhZGRpbmctbGVmdDogMzNweDtcbn1cblxuLm9uIHtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLm9uLCAub2ZmIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciAub24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIgLm9mZiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGlkZXIucm5kIHtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cblxuLnNsaWRlci5ybmQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbn1cblxuLm1hcmdpblRMMTAge1xuICBtYXJnaW46IDElIDIlO1xufVxuXG4ubWFyZ2luTDE1IHtcbiAgbWFyZ2luLWxlZnQ6IDM1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA1NjhweCkge1xuICAubGFiLWZvbnQge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIC5ldmVudC1mb250IHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbn1cbi52YWxpZGF0aW9uLWVycm9ycyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1pbmRlbnQ6IDMwcHg7XG59XG5cbnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkOm50aC1jaGlsZCgxKSB7XG4gIHdpZHRoOiA0NSU7XG4gIHBhZGRpbmc6IDAlIDAlIDAlIDUlO1xufVxuXG50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZDpudGgtY2hpbGQoMikge1xuICB3aWR0aDogNDUlO1xufVxuXG50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZDpudGgtY2hpbGQoMykge1xuICB3aWR0aDogNDUlO1xufVxuXG4ucm93dGFiIHtcbiAgcGFkZGluZzogMiUgNSU7XG59XG5cbmlvbi1wcm9ncmVzcy1iYXIge1xuICB0b3A6IDEwJTtcbn1cblxuLmltZ3NjYW4ge1xuICB0b3A6IC03JTtcbiAgZm9udC1zaXplOiA0N3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNiYXIge1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgd2lkdGg6IDcuNXJlbTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apiservice.service */ "./src/app/apiservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");










var ScanreturnsPage = /** @class */ (function () {
    function ScanreturnsPage(formBuilder, Vanityartservice, route, keyboard, activatedRoute, alertCtrl, routerOutlet, camera, file, http) {
        this.formBuilder = formBuilder;
        this.Vanityartservice = Vanityartservice;
        this.route = route;
        this.keyboard = keyboard;
        this.activatedRoute = activatedRoute;
        this.alertCtrl = alertCtrl;
        this.routerOutlet = routerOutlet;
        this.camera = camera;
        this.file = file;
        this.http = http;
        this.isSerailScan = true;
        this.eventLog = '';
        this.isKeyboardHide = true;
        this.itemReadOnly = true;
        this.enableSaveBtn = false;
        this.enableTakePhoto = false;
        this.returnImages = [];
        this.formData = new FormData();
        this.cameraOptions = {
            quality: 20,
            destinationType: this.camera.DestinationType.FILE_URI,
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
        this.photoType = [{ "typeName": "Return Label", "img": "../../assets/default-thumbnail.jpg", "isCaptured": false }, { "typeName": "SKU", "img": "../../assets/default-thumbnail.jpg", "isCaptured": false },
            { "typeName": "Damaged Area", "img": "../../assets/default-thumbnail.jpg", "isCaptured": false }, { "typeName": "Up front", "img": "../../assets/default-thumbnail.jpg", "isCaptured": false }];
    }
    ScanreturnsPage.prototype.ngOnInit = function () {
    };
    ScanreturnsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.routerOutlet.swipeGesture = false;
        this.keyboard.onKeyboardWillShow().subscribe(function () {
            _this.isKeyboardHide = false;
            _this.keyboard.disableScroll(true);
        });
        this.keyboard.onKeyboardWillHide().subscribe(function () {
            _this.isKeyboardHide = true;
        });
        this.warehouseList = this.Vanityartservice.warehouses;
        this.conditionList = this.Vanityartservice.conditions;
        this.warehouse = this.Vanityartservice.defaultWarehouse.toString();
    };
    ScanreturnsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.serial.setFocus();
        }, 300);
        this.userId = localStorage.getItem('Id');
        this.usertype = localStorage.getItem('isvanityUser');
    };
    ScanreturnsPage.prototype.switchToPo = function () {
        var _this = this;
        if (this.respData) {
            this.Vanityartservice.PresentToast('There unsaved items. Please save or clear it before switching', 'danger');
        }
        else {
            this.isSerailScan = false;
            this.eventLog = '';
            setTimeout(function () {
                _this.po.setFocus();
            }, 300);
            this.formreset();
        }
    };
    ScanreturnsPage.prototype.switchToserial = function () {
        var _this = this;
        if (this.respData) {
            this.Vanityartservice.PresentToast('There unsaved items. Please save or clear it before switching', 'danger');
        }
        else {
            this.isSerailScan = true;
            this.eventLog = '';
            setTimeout(function () {
                _this.serial.setFocus();
            }, 300);
            this.formreset();
        }
    };
    ScanreturnsPage.prototype.backToHome = function () {
        // this.formreset();
        if (this.isSerailScan) {
            var serial = this.serialScanning.controls.serial.value;
            if (serial == "" || serial == null) {
                this.route.navigate(['/menuitems']);
            }
            else {
                this.Vanityartservice.PresentToast("There is unsaved data in the form, either save or clear the form.", "danger");
            }
        }
        else {
            var po = this.poScanning.controls.po.value;
            if (po == "" || po == null) {
                this.route.navigate(['/menuitems']);
            }
            else {
                this.Vanityartservice.PresentToast("There is unsaved data in the form, either save or clear the form.", "danger");
            }
        }
    };
    ScanreturnsPage.prototype.handleSerialScan = function () {
        var _this = this;
        setTimeout(function () {
            _this.serialScan();
        }, 300);
    };
    ScanreturnsPage.prototype.formreset = function () {
        var _this = this;
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
        this.photoType = [{ "typeName": "Return Label", "img": "../../assets/default-thumbnail.jpg", "isCaptured": false }, { "typeName": "SKU", "img": "../../assets/default-thumbnail.jpg", "isCaptured": false },
            { "typeName": "Damaged Area", "img": "../../assets/default-thumbnail.jpg", "isCaptured": false }, { "typeName": "Up front", "img": "../../assets/default-thumbnail.jpg", "isCaptured": false }];
        if (this.isSerailScan) {
            setTimeout(function () {
                _this.serial.setFocus();
            }, 200);
        }
        else {
            setTimeout(function () {
                _this.po.setFocus();
            }, 200);
        }
    };
    ScanreturnsPage.prototype.serialScan = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.Vanityartservice.baseUrl + this.Vanityartservice.serialScanreturn;
                        data = {
                            "serialNumber": this.serialScanning.controls['serial'].value.toUpperCase()
                        };
                        this.Vanityartservice.present();
                        return [4 /*yield*/, this.Vanityartservice.ajaxCallService(url, 'post', data).then(function (res) {
                                if (res['status'] == "Success") {
                                    _this.Vanityartservice.dismiss();
                                    _this.serialScanning.disable();
                                    _this.enableSaveBtn = true;
                                    _this.Vanityartservice.PresentToast('Serial Number ' + _this.serialScanning.controls['serial'].value + ' is scanned successfully', 'success');
                                    _this.eventLog = 'Serial Number ' + _this.serialScanning.controls['serial'].value + ' is scanned successfully \n' + _this.eventLog;
                                    _this.respData = res;
                                    _this.poNumber = _this.respData['purchaseOrderNumber'];
                                    _this.itemUpc = _this.respData['itemUpc'];
                                    _this.itemSku = _this.respData['itemSku'];
                                    _this.customerName = _this.respData['customerName'];
                                }
                                else {
                                    _this.Vanityartservice.dismiss();
                                    _this.Vanityartservice.PresentToast(_this.serialScanning.controls['serial'].value + ' ' + res['displayMessage'], 'danger');
                                    _this.eventLog = _this.serialScanning.controls['serial'].value + ' ' + res['displayMessage'] + '\n' + _this.eventLog;
                                    _this.serialScanning.reset();
                                    _this.serialScanning.enable();
                                    setTimeout(function () {
                                        _this.serial.setFocus();
                                    }, 300);
                                }
                            }).catch(function (err) {
                                _this.Vanityartservice.dismiss();
                                _this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ScanreturnsPage.prototype.handlePoScan = function () {
        var _this = this;
        setTimeout(function () {
            _this.poScan();
        }, 300);
    };
    ScanreturnsPage.prototype.poScan = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.Vanityartservice.baseUrl + this.Vanityartservice.poScan;
                        data = {
                            "PurchaseOrderNumber": this.poScanning.controls['po'].value.toUpperCase()
                        };
                        this.Vanityartservice.present();
                        return [4 /*yield*/, this.Vanityartservice.ajaxCallService(url, 'post', data).then(function (res) {
                                if (res['status'] == "Success") {
                                    _this.Vanityartservice.dismiss();
                                    _this.poScanning.disable();
                                    _this.enableSaveBtn = true;
                                    _this.Vanityartservice.PresentToast('PO Number ' + _this.poScanning.controls['po'].value + ' is scanned successfully', 'success');
                                    _this.eventLog = 'PO Number ' + _this.poScanning.controls['po'].value + ' is scanned successfully \n' + _this.eventLog;
                                    _this.itemReadOnly = false;
                                    setTimeout(function () {
                                        _this.item.setFocus();
                                    }, 300);
                                    _this.respData = res;
                                    _this.customerName = _this.respData['customerName'];
                                }
                                else if (res['status'] == "Fail") {
                                    _this.Vanityartservice.dismiss();
                                    _this.respData = res;
                                    _this.Vanityartservice.PresentToast(res['displayMessage'], 'danger');
                                    _this.eventLog = res['displayMessage'] + '\n' + _this.eventLog;
                                    _this.poScanning.reset();
                                    _this.itemReadOnly = true;
                                    _this.poScanning.enable();
                                    setTimeout(function () {
                                        _this.po.setFocus();
                                    }, 300);
                                }
                                else {
                                    _this.Vanityartservice.dismiss();
                                    _this.respData = res;
                                    _this.poAlert(_this.respData['displayMessage']);
                                    _this.eventLog = _this.poScanning.controls['po'].value + ' ' + res['displayMessage'] + '\n' + _this.eventLog;
                                }
                            }).catch(function (err) {
                                _this.Vanityartservice.dismiss();
                                _this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ScanreturnsPage.prototype.poAlert = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: msg,
                            buttons: [{
                                    text: "NO",
                                    handler: function () {
                                        _this.poScanning.reset();
                                        _this.poScanning.enable();
                                        setTimeout(function () {
                                            _this.po.setFocus();
                                        }, 300);
                                    }
                                },
                                {
                                    text: "YES",
                                    handler: function () {
                                        _this.itemReadOnly = false;
                                        setTimeout(function () {
                                            _this.item.setFocus();
                                        }, 300);
                                    }
                                }]
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
    ScanreturnsPage.prototype.handleitemScan = function () {
        var _this = this;
        setTimeout(function () {
            _this.itemUpcScan();
        }, 300);
    };
    ScanreturnsPage.prototype.itemUpcScan = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.Vanityartservice.baseUrl + this.Vanityartservice.itemScan;
                        data = {
                            "SkuOrUpc": this.itemUpc,
                            "IsOpalOrder": this.respData['isOpalOrder'],
                            "PurchaseOrderNumber": this.respData['purchaseOrderNumber'],
                            "OrderId": this.respData['orderId'],
                            "IsVanityArtOrder": this.respData['isVanityArtOrder']
                        };
                        this.Vanityartservice.present();
                        return [4 /*yield*/, this.Vanityartservice.ajaxCallService(url, 'post', data).then(function (res) {
                                if (res['status'] == "Success") {
                                    _this.Vanityartservice.dismiss();
                                    _this.itemRespData = res;
                                    _this.respData['actualQuantityOrdered'] = _this.itemRespData['actualQuantityOrdered'];
                                    _this.respData['returnedQuantity'] = _this.itemRespData['returnedQuantity'];
                                    _this.respData['itemId'] = _this.itemRespData['itemId'];
                                    _this.respData['itemUpc'] = _this.itemRespData['itemUpc'];
                                    _this.respData['skuOrUpc'] = _this.itemRespData['skuOrUpc'];
                                    _this.respData['isPartOfGroupItem'] = _this.itemRespData['isPartOfGroupItem'];
                                    _this.Vanityartservice.PresentToast('Item UPC: ' + _this.itemUpc + ' is scanned', 'success');
                                    _this.eventLog = 'Item Upc ' + _this.itemUpc + ' is scanned \n' + _this.eventLog;
                                }
                                else {
                                    _this.Vanityartservice.dismiss();
                                    _this.itemRespData = res;
                                    _this.Vanityartservice.PresentToast(_this.itemUpc + ' ' + _this.itemRespData['displayMessage'], 'danger');
                                    _this.eventLog = _this.itemUpc + ' ' + _this.itemRespData['displayMessage'] + '\n' + _this.eventLog;
                                    _this.itemUpc = '';
                                    setTimeout(function () {
                                        _this.item.setFocus();
                                    });
                                }
                            }).catch(function (err) {
                                _this.Vanityartservice.dismiss();
                                _this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ScanreturnsPage.prototype.onConditionChange = function () {
        if (this.condition == "20" || this.condition == "30") {
            this.enableTakePhoto = true;
            this.enableSaveBtn = false;
        }
        else {
            this.enableTakePhoto = false;
            this.enableSaveBtn = true;
        }
    };
    ScanreturnsPage.prototype.takePicture = function (type) {
        var _this = this;
        this.camera.getPicture(this.cameraOptions).then(function (imageData) {
            var filename = imageData.substring(imageData.lastIndexOf('/') + 1);
            var path = imageData.substring(0, imageData.lastIndexOf('/') + 1);
            _this.file.readAsDataURL(path, filename).then(function (res) {
                for (var _i = 0, _a = _this.photoType; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.typeName == type.typeName) {
                        item.img = res;
                        item.isCaptured = true;
                    }
                }
                var checkCaptured = _this.photoType.filter(function (i) { return i.isCaptured == false; });
                if (checkCaptured.length > 0) {
                    _this.enableSaveBtn = false;
                }
                else {
                    _this.enableSaveBtn = true;
                }
            });
            _this.file.resolveLocalFilesystemUrl(imageData).then(function (entry) {
                entry.file(function (file) {
                    console.log(file);
                    _this.readFile(file);
                });
            });
        }, function (err) {
            // Handle error
        });
    };
    ScanreturnsPage.prototype.readFile = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var imgBlob = new Blob([reader.result], {
                type: file.type
            });
            _this.formData.append('returnAppImages', imgBlob, file.name);
        };
        reader.readAsArrayBuffer(file);
    };
    // async saveReturn(){
    //     let url = this.Vanityartservice.baseUrl+this.Vanityartservice.save;
    //     let data = {
    //       "serialNumber": this.isSerailScan ? this.serialScanning.controls['serial'].value.toUpperCase() : '',
    //       "purchaseOrderNumber": this.respData['purchaseOrderNumber'],
    //       "orderId": this.respData['orderId'],
    //       "isOpalOrder": this.respData['isOpalOrder'],
    //       "isVanityArtOrder": this.respData['isVanityArtOrder'],
    //       "actualQuantityOrdered": this.respData['actualQuantityOrdered'],
    //       "returnedQuantity": this.respData['returnedQuantity'],
    //       "itemId": this.respData['itemId'],
    //       "itemUpc": this.respData['itemUpc'],
    //       "customerId": this.respData['customerId'],
    //       "customerName": this.respData['customerName'],
    //       "skuOrUpc": this.respData['itemUpc'],
    //       "status": "Success",
    //       "isPartOfGroupItem": this.respData['isPartOfGroupItem'],
    //       "WarehouseId":this.warehouse,
    //       "ItemCondition":this.condition,
    //       "CreatedBy":this.userId,
    //       "Notes":this.notes,
    //       "LoggedInUserId":this.userId,
    //       "isVanityArtUser": this.usertype,
    //       "ReturnLabelPhoto": this.enableTakePhoto ? this.returnLabelPhoto : '',
    //       "SkuPhoto": this.enableTakePhoto ? this.skuPhoto : '',
    //       "DamagedAreaPhoto": this.enableTakePhoto ? this.damagedAreaPhoto : '',
    //       "UpFrontPhoto": this.enableTakePhoto ? this.upFrontPhoto : ''
    //     }
    //     this.Vanityartservice.present();
    //     await this.Vanityartservice.ajaxCallService(url, 'post', data).then(res =>{
    //       if(res['status'] == "Success"){
    //         this.Vanityartservice.dismiss();
    //         this.Vanityartservice.PresentToast('Item return saved successfully.', 'success');
    //         this.eventLog = 'Item return saved successfully.'+'\n'+this.eventLog
    //         this.formreset();
    //       }else{
    //         this.Vanityartservice.dismiss();
    //         this.Vanityartservice.PresentToast(res['displayMessage'], 'danger');
    //         this.eventLog = res['displayMessage']+'\n'+this.eventLog
    //       }
    //     }).catch(err =>{
    //       this.Vanityartservice.dismiss();
    //       this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
    //     })
    //   }
    ScanreturnsPage.prototype.saveReturn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var serialNo, formData, url;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.Vanityartservice.present();
                serialNo = this.isSerailScan ? this.serialScanning.controls['serial'].value.toUpperCase() : '';
                formData = new FormData();
                formData.append("serialNumber", serialNo);
                formData.append("purchaseOrderNumber", this.respData['purchaseOrderNumber']);
                formData.append("orderId", this.respData['orderId']);
                formData.append("isOpalOrder", this.respData['isOpalOrder']);
                formData.append("isVanityArtOrder", this.respData['isVanityArtOrder']);
                formData.append("actualQuantityOrdered", this.respData['actualQuantityOrdered']);
                formData.append("returnedQuantity", this.respData['returnedQuantity']);
                formData.append("itemId", this.respData['itemId']);
                formData.append("itemUpc", this.respData['itemUpc']);
                formData.append("customerId", this.respData['customerId']);
                formData.append("customerName", this.respData['customerName']);
                formData.append("skuOrUpc", this.respData['itemUpc']);
                formData.append("status", "Success");
                formData.append("isPartOfGroupItem", this.respData['isPartOfGroupItem']);
                formData.append("WarehouseId", this.warehouse);
                formData.append("ItemCondition", this.condition);
                formData.append("CreatedBy", this.userId);
                formData.append("Notes", this.notes);
                formData.append("LoggedInUserId", this.userId);
                formData.append("isVanityArtUser", this.usertype);
                url = this.Vanityartservice.baseUrl + this.Vanityartservice.save;
                this.http.post(url, formData).subscribe(function (res) {
                    if (res['status'] == "Success") {
                        _this.Vanityartservice.dismiss();
                        _this.Vanityartservice.PresentToast('Item return saved successfully.', 'success');
                        _this.eventLog = 'Item return saved successfully.' + '\n' + _this.eventLog;
                        _this.sendEmailAlert();
                    }
                    else {
                        _this.Vanityartservice.dismiss();
                        _this.Vanityartservice.PresentToast(res['displayMessage'], 'danger');
                        _this.eventLog = res['displayMessage'] + '\n' + _this.eventLog;
                    }
                }, function (err) {
                    _this.Vanityartservice.dismiss();
                    _this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
                });
                return [2 /*return*/];
            });
        });
    };
    ScanreturnsPage.prototype.sendEmailAlert = function () {
        var _this = this;
        this.Vanityartservice.present();
        var serialNo = this.isSerailScan ? this.serialScanning.controls['serial'].value.toUpperCase() : 'NA';
        var url = this.Vanityartservice.baseUrl + this.Vanityartservice.sendEmail + this.respData['purchaseOrderNumber'] + '/' + this.respData['itemUpc'] + '/' + serialNo +
            '/' + parseInt(this.condition) + '/' + this.warehouse + '/' + this.userId + '/' + this.respData['isOpalOrder'] + '/' + this.respData['isVanityArtOrder'] + '/' + this.usertype;
        this.http.post(url, this.formData).subscribe(function (res) {
            console.log(res);
            _this.Vanityartservice.dismiss();
            _this.Vanityartservice.PresentToast("Return Item Images Uploaded", "success");
            _this.formreset();
        }, function (err) {
            _this.Vanityartservice.dismiss();
            _this.Vanityartservice.PresentToast("Unable to reach server", "danger");
        });
    };
    ScanreturnsPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRouterOutlet"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }
    ]; };
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
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRouterOutlet"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], ScanreturnsPage);
    return ScanreturnsPage;
}());



/***/ })

}]);
//# sourceMappingURL=scanreturns-scanreturns-module-es5.js.map