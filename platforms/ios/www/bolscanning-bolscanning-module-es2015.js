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

module.exports = ".round {\n  --border-radius: 50%;\n  --vertical-align: middle;\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #088088;\n  font-size: initial;\n  font-size: 25px;\n}\n\n.itemName {\n  font-weight: bold;\n}\n\n.class-headerimg {\n  background-image: url('bluebg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.back-marg {\n  float: left;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5;\n}\n\n.clear-marg {\n  background: transparent;\n  float: right;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5;\n}\n\n.save-center {\n  border-radius: 50%;\n  background: #07aeba;\n  font-size: 22px;\n  color: #ffffff;\n  height: 80px;\n  width: 85px;\n  border-radius: 50%;\n}\n\n.toggle-color {\n  --ion-color-base: #00BFCC !important;\n}\n\n.label-pos {\n  position: absolute;\n  bottom: 15%;\n}\n\n.row-padd {\n  padding: 1% 3%;\n}\n\n.error-message {\n  position: absolute;\n  left: 5%;\n  color: red;\n  font-size: 15px;\n}\n\n.title {\n  font-size: 33px;\n  font-weight: 500;\n  padding-top: 10px;\n  background: #00000000;\n  color: #fff;\n}\n\n.tool2 {\n  --background:#FFFFFF00;\n  --border-width: 0px !important;\n}\n\n.tool1 {\n  position: relative;\n  top: 1%;\n}\n\n.srccroll {\n  height: 200px;\n  overflow: scroll;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.srchgt {\n  height: auto;\n  overflow: hidden;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.lab-font {\n  font-size: 25px;\n}\n\n.event-font {\n  font-size: 16px;\n}\n\n.event-font-italic {\n  font-size: 16px;\n  color: #333;\n  font-style: italic;\n  margin: 0 2%;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 65px;\n  height: 34px;\n}\n\n.switch input {\n  display: none;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: grey;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 28px;\n  width: 28px;\n  left: 4px;\n  top: 3px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #00BFCC;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(55px);\n  transform: translateX(30px);\n}\n\n.on {\n  display: none;\n}\n\n.off {\n  padding-left: 33px;\n}\n\n.on {\n  padding-right: 25px;\n}\n\n.on, .off {\n  color: white;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  font-size: 13px;\n  font-family: Verdana, sans-serif;\n}\n\ninput:checked + .slider .on {\n  display: block;\n}\n\ninput:checked + .slider .off {\n  display: none;\n}\n\n.slider.rnd {\n  border-radius: 16px;\n}\n\n.slider.rnd:before {\n  border-radius: 14px;\n}\n\n.marginTL10 {\n  margin: 2% 3%;\n}\n\n.marginL15 {\n  margin-left: 35px !important;\n  margin-top: 0px !important;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 568px) {\n  .lab-font {\n    font-size: 13px;\n  }\n\n  .event-font {\n    font-size: 13px;\n  }\n}\n\n.validation-errors {\n  font-size: 15px;\n  color: red;\n}\n\ntable > tbody > tr > td:nth-child(1) {\n  width: 45%;\n  padding: 0% 0% 0% 5%;\n}\n\ntable > tbody > tr > td:nth-child(2) {\n  width: 45%;\n}\n\ntable > tbody > tr > td:nth-child(3) {\n  width: 45%;\n}\n\n.rowtab {\n  padding: 2% 5%;\n}\n\nion-progress-bar {\n  top: 10%;\n}\n\n.imgscan {\n  top: -7%;\n  font-size: 47px;\n  position: relative;\n}\n\n#bar {\n  height: 1.5rem;\n  width: 7.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbmlzdHJhdG9yL0RvY3VtZW50cy92YW5pdHlBcnQtTGF0ZXN0L3NyYy9hcHAvYm9sc2Nhbm5pbmcvYm9sc2Nhbm5pbmcucGFnZS5zY3NzIiwic3JjL2FwcC9ib2xzY2FubmluZy9ib2xzY2FubmluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0UsaUJBQUE7QUNGRjs7QURLQTtFQUNFLDhDQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURLQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFDSSxvQ0FBQTtBQ0ZKOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDRkY7O0FES0E7RUFDRSxjQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNGRjs7QURLQTtFQUNFLHNCQUFBO0VBQ0EsOEJBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0ksa0JBQUE7QUNGTjs7QURLQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0FDRko7O0FES0E7RUFDRSxlQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRkY7O0FES0E7RUFBZSxhQUFBO0FDRGY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFsS1U7QUNrS1o7O0FER0E7RUFDRSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsbUNBQUE7RUFFQSwyQkFBQTtBQ0FGOztBREdBO0VBRUUsYUFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTtFQUNFLG1CQUFBO0FDREY7O0FESUE7RUFFRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUNGRjs7QURLQTtFQUNDLGNBQUE7QUNGRDs7QURJQTtFQUNDLGFBQUE7QUNERDs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FER0E7RUFDSSxtQkFBQTtBQ0FKOztBREdBO0VBQ0UsYUFBQTtBQ0FGOztBREdBO0VBQ0UsNEJBQUE7RUFDQSwwQkFBQTtBQ0FGOztBREVBO0VBQ0U7SUFDRSxlQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxlQUFBO0VDRUY7QUFDRjs7QURDQTtFQUNDLGVBQUE7RUFDQSxVQUFBO0FDQ0Q7O0FEQ0E7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7QUNFRjs7QURDQTtFQUNFLFVBQUE7QUNFRjs7QURBQTtFQUNFLFVBQUE7QUNHRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURDQTtFQUNFLFFBQUE7QUNFRjs7QURBQTtFQUNFLFFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QUREQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9ib2xzY2FubmluZy9ib2xzY2FubmluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnRuLWNvbG9yOiAjMDBCRkNDO1xyXG4kdGV4dC1jb2xvcjogIzA3MDcwNztcclxuXHJcbi5yb3VuZCB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogIzA4ODA4ODtcclxuICAgIGZvbnQtc2l6ZTogaW5pdGlhbDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLml0ZW1OYW1le1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2xhc3MtaGVhZGVyaW1nIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvYmx1ZWJnLnBuZ1wiKSFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uYmFjay1tYXJne1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDI1JTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogIzI5YzVjNTtcclxufVxyXG5cclxuLmNsZWFyLW1hcmd7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDI1JTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogIzI5YzVjNTtcclxufVxyXG5cclxuLnNhdmUtY2VudGVye1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjMDdhZWJhO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDg1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4udG9nZ2xlLWNvbG9ye1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogIzAwQkZDQyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFiZWwtcG9ze1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDE1JTtcclxufVxyXG5cclxuLnJvdy1wYWRke1xyXG4gIHBhZGRpbmc6IDElIDMlO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNSU7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAzM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udG9vbDJ7XHJcbiAgLS1iYWNrZ3JvdW5kOiNGRkZGRkYwMDtcclxuICAtLWJvcmRlci13aWR0aCA6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9vbDF7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMSU7XHJcbn1cclxuXHJcbi5zcmNjcm9sbHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5zcmNoZ3R7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSA7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ubGFiLWZvbnR7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uZXZlbnQtZm9udHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5ldmVudC1mb250LWl0YWxpY3tcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIG1hcmdpbjogMCAyJTtcclxufVxyXG5cclxuLnN3aXRjaCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNjVweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbn1cclxuXHJcbi5zd2l0Y2ggaW5wdXQge2Rpc3BsYXk6bm9uZTt9XHJcblxyXG4uc2xpZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gIHRyYW5zaXRpb246IC40cztcclxufVxyXG5cclxuLnNsaWRlcjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMjhweDtcclxuICB3aWR0aDogMjhweDtcclxuICBsZWZ0OiA0cHg7XHJcbiAgdG9wOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ0bi1jb2xvcjtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7XHJcbn1cclxuXHJcbi5vblxyXG57XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm9mZntcclxuICBwYWRkaW5nLWxlZnQ6MzNweDtcclxufVxyXG5cclxuLm9ue1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5vbiwgLm9mZlxyXG57XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQrIC5zbGlkZXIgLm9uXHJcbntkaXNwbGF5OiBibG9jazt9XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciAub2ZmXHJcbntkaXNwbGF5OiBub25lO31cclxuXHJcbi5zbGlkZXIucm5kIHtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcblxyXG4uc2xpZGVyLnJuZDpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxufVxyXG5cclxuLm1hcmdpblRMMTAge1xyXG4gIG1hcmdpbjogMiUgMyU7XHJcbn1cclxuICBcclxuLm1hcmdpbkwxNSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDM1cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNTY4cHgpIHtcclxuICAubGFiLWZvbnR7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5ldmVudC1mb250e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICBcclxufVxyXG4udmFsaWRhdGlvbi1lcnJvcnN7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGNvbG9yOiByZWQ7XHJcbn1cclxudGFibGUgPnRib2R5ID4gdHIgPiB0ZDpudGgtY2hpbGQoMSl7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBwYWRkaW5nOiAwJSAwJSAwJSA1JTtcclxuICBcclxufVxyXG50YWJsZSA+dGJvZHkgPiB0ciA+IHRkOm50aC1jaGlsZCgyKXtcclxuICB3aWR0aDogNDUlOyAgXHJcbn1cclxudGFibGUgPnRib2R5ID4gdHIgPiB0ZDpudGgtY2hpbGQoMyl7XHJcbiAgd2lkdGg6IDQ1JTsgIFxyXG59XHJcbi8vIHRhYmxlID50Ym9keSA+IHRye1xyXG4vLyAgIHBhZGRpbmc6IDAlIDUlIDAlIDUlO1xyXG4vLyB9XHJcbi5yb3d0YWJ7XHJcbiAgcGFkZGluZzogMiUgNSU7XHJcbn1cclxuaW9uLXByb2dyZXNzLWJhcntcclxuICB0b3A6IDEwJTtcclxufVxyXG4uaW1nc2NhbntcclxuICB0b3A6IC03JTtcclxuICBmb250LXNpemU6IDQ3cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiNiYXIgeyAgXHJcbiAgaGVpZ2h0OiAxLjVyZW07IFxyXG4gIHdpZHRoOiA3LjVyZW07XHJcbn0iLCIucm91bmQge1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWlvbi1jb2xvci1iYXNlOiAjMDg4MDg4O1xuICBmb250LXNpemU6IGluaXRpYWw7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLml0ZW1OYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbGFzcy1oZWFkZXJpbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvYmx1ZWJnLnBuZ1wiKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmJhY2stbWFyZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjUlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjljNWM1O1xufVxuXG4uY2xlYXItbWFyZyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyNSU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMyOWM1YzU7XG59XG5cbi5zYXZlLWNlbnRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzA3YWViYTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udG9nZ2xlLWNvbG9yIHtcbiAgLS1pb24tY29sb3ItYmFzZTogIzAwQkZDQyAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWwtcG9zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1JTtcbn1cblxuLnJvdy1wYWRkIHtcbiAgcGFkZGluZzogMSUgMyU7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1JTtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDMzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udG9vbDIge1xuICAtLWJhY2tncm91bmQ6I0ZGRkZGRjAwO1xuICAtLWJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50b29sMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxJTtcbn1cblxuLnNyY2Nyb2xsIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgei1pbmRleDogOTk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc3JjaGd0IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB6LWluZGV4OiA5OTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5sYWItZm9udCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmV2ZW50LWZvbnQge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5ldmVudC1mb250LWl0YWxpYyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luOiAwIDIlO1xufVxuXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDM0cHg7XG59XG5cbi5zd2l0Y2ggaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbiAgbGVmdDogNHB4O1xuICB0b3A6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCRkNDO1xufVxuXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7XG59XG5cbi5vbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5vZmYge1xuICBwYWRkaW5nLWxlZnQ6IDMzcHg7XG59XG5cbi5vbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi5vbiwgLm9mZiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIgLm9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIC5vZmYge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2xpZGVyLnJuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG5cbi5zbGlkZXIucm5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG59XG5cbi5tYXJnaW5UTDEwIHtcbiAgbWFyZ2luOiAyJSAzJTtcbn1cblxuLm1hcmdpbkwxNSB7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNTY4cHgpIHtcbiAgLmxhYi1mb250IHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cblxuICAuZXZlbnQtZm9udCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG4udmFsaWRhdGlvbi1lcnJvcnMge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkOm50aC1jaGlsZCgxKSB7XG4gIHdpZHRoOiA0NSU7XG4gIHBhZGRpbmc6IDAlIDAlIDAlIDUlO1xufVxuXG50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZDpudGgtY2hpbGQoMikge1xuICB3aWR0aDogNDUlO1xufVxuXG50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZDpudGgtY2hpbGQoMykge1xuICB3aWR0aDogNDUlO1xufVxuXG4ucm93dGFiIHtcbiAgcGFkZGluZzogMiUgNSU7XG59XG5cbmlvbi1wcm9ncmVzcy1iYXIge1xuICB0b3A6IDEwJTtcbn1cblxuLmltZ3NjYW4ge1xuICB0b3A6IC03JTtcbiAgZm9udC1zaXplOiA0N3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNiYXIge1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgd2lkdGg6IDcuNXJlbTtcbn0iXX0= */"

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