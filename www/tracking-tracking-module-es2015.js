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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tracking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tracking.page */ "./src/app/tracking/tracking.page.ts");







const routes = [
    {
        path: '',
        component: _tracking_page__WEBPACK_IMPORTED_MODULE_6__["TrackingPage"]
    }
];
let TrackingPageModule = class TrackingPageModule {
};
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



/***/ }),

/***/ "./src/app/tracking/tracking.page.scss":
/*!*********************************************!*\
  !*** ./src/app/tracking/tracking.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".round {\n  --border-radius: 50%;\n  --vertical-align: middle;\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #088088;\n  font-size: initial;\n  font-size: 25px;\n}\n\n.itemName {\n  font-weight: bold;\n}\n\n.class-headerimg {\n  background-image: url('bluebg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.back-marg {\n  float: left;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5;\n}\n\n.clear-marg {\n  background: transparent;\n  float: right;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5;\n}\n\n.save-center {\n  border-radius: 50%;\n  background: #07aeba;\n  font-size: 22px;\n  color: #ffffff;\n  height: 80px;\n  width: 85px;\n  border-radius: 50%;\n}\n\n.toggle-color {\n  --ion-color-base: #00BFCC !important;\n}\n\n.label-pos {\n  position: absolute;\n  bottom: 15%;\n}\n\n.row-padd {\n  padding: 0.5% 3%;\n}\n\n.error-message {\n  position: absolute;\n  left: 5%;\n  color: red;\n  font-size: 15px;\n}\n\n.title {\n  font-size: 33px;\n  font-weight: 500;\n  padding-top: 10px;\n  background: #00000000;\n  color: #fff;\n}\n\n.tool2 {\n  --background:#FFFFFF00;\n  --border-width: 0px !important;\n}\n\n.tool1 {\n  position: relative;\n  top: 1%;\n}\n\n.srccroll {\n  height: 200px;\n  overflow: scroll;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.srchgt {\n  height: auto;\n  overflow: hidden;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.lab-font {\n  font-size: 25px;\n}\n\n.event-font {\n  font-size: 18px;\n}\n\n.event-font-italic {\n  font-size: 16px;\n  color: #333;\n  font-style: italic;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 65px;\n  height: 34px;\n}\n\n.switch input {\n  display: none;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: grey;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 28px;\n  width: 28px;\n  left: 4px;\n  top: 3px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #00BFCC;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(55px);\n  transform: translateX(30px);\n}\n\n.on {\n  display: none;\n}\n\n.off {\n  padding-left: 33px;\n}\n\n.on {\n  padding-right: 25px;\n}\n\n.on, .off {\n  color: white;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  font-size: 13px;\n  font-family: Verdana, sans-serif;\n}\n\ninput:checked + .slider .on {\n  display: block;\n}\n\ninput:checked + .slider .off {\n  display: none;\n}\n\n.slider.rnd {\n  border-radius: 16px;\n}\n\n.slider.rnd:before {\n  border-radius: 14px;\n}\n\n.marginTL10 {\n  margin: 2% 3%;\n}\n\n.marginL15 {\n  margin-left: 35px !important;\n  margin-top: 0px !important;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 568px) {\n  .lab-font {\n    font-size: 13px;\n  }\n\n  .event-font {\n    font-size: 13px;\n  }\n}\n\n.validation-errors {\n  font-size: 15px;\n  color: red;\n}\n\ntable > tbody > tr > td:nth-child(1) {\n  width: 45%;\n  padding: 0% 0% 0% 5%;\n}\n\ntable > tbody > tr > td:nth-child(2) {\n  width: 45%;\n}\n\ntable > tbody > tr > td:nth-child(3) {\n  width: 45%;\n}\n\n.rowtab {\n  padding: 0 5% 0 5%;\n}\n\nion-progress-bar {\n  top: 10%;\n}\n\n.imgscan {\n  top: -7%;\n  font-size: 47px;\n  position: relative;\n}\n\n#bar {\n  height: 1.5rem;\n  width: 7.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbmlzdHJhdG9yL0RvY3VtZW50cy92YW5pdHlBcnQtTGF0ZXN0L3NyYy9hcHAvdHJhY2tpbmcvdHJhY2tpbmcucGFnZS5zY3NzIiwic3JjL2FwcC90cmFja2luZy90cmFja2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0UsaUJBQUE7QUNGRjs7QURLQTtFQUNFLDhDQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURLQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFDSSxvQ0FBQTtBQ0ZKOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDRkY7O0FES0E7RUFDRSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDRkY7O0FES0E7RUFDRSxzQkFBQTtFQUNBLDhCQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtFQUNJLGtCQUFBO0FDRk47O0FES0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0UsZUFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRkY7O0FES0E7RUFBZSxhQUFBO0FDRGY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFqS1U7QUNpS1o7O0FER0E7RUFDRSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsbUNBQUE7RUFFQSwyQkFBQTtBQ0FGOztBREdBO0VBRUUsYUFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTtFQUNFLG1CQUFBO0FDREY7O0FESUE7RUFFRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUNGRjs7QURLQTtFQUNDLGNBQUE7QUNGRDs7QURJQTtFQUNDLGFBQUE7QUNERDs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FER0E7RUFDSSxtQkFBQTtBQ0FKOztBREdBO0VBQ0UsYUFBQTtBQ0FGOztBREdBO0VBQ0UsNEJBQUE7RUFDQSwwQkFBQTtBQ0FGOztBREVBO0VBQ0U7SUFDRSxlQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxlQUFBO0VDRUY7QUFDRjs7QURFQTtFQUNDLGVBQUE7RUFDQSxVQUFBO0FDQUQ7O0FERUE7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURDQTtFQUNFLFVBQUE7QUNFRjs7QURHQTtFQUNFLGtCQUFBO0FDQUY7O0FERUE7RUFDRSxRQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvdHJhY2tpbmcvdHJhY2tpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJ0bi1jb2xvcjogIzAwQkZDQztcclxuJHRleHQtY29sb3I6ICMwNzA3MDc7XHJcblxyXG4ucm91bmQge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwODgwODg7XHJcbiAgICBmb250LXNpemU6IGluaXRpYWw7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5pdGVtTmFtZXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNsYXNzLWhlYWRlcmltZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2JsdWViZy5wbmdcIikhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmJhY2stbWFyZ3tcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAyNSU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMyOWM1YzU7XHJcbn1cclxuXHJcbi5jbGVhci1tYXJne1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAyNSU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMyOWM1YzU7XHJcbn1cclxuXHJcbi5zYXZlLWNlbnRlcntcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogIzA3YWViYTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiA4NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnRvZ2dsZS1jb2xvcntcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwMEJGQ0MgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhYmVsLXBvc3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxNSU7XHJcbn1cclxuXHJcbi5yb3ctcGFkZHtcclxuICBwYWRkaW5nOiAwLjUlIDMlO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNSU7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAzM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udG9vbDJ7XHJcbiAgLS1iYWNrZ3JvdW5kOiNGRkZGRkYwMDtcclxuICAtLWJvcmRlci13aWR0aCA6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9vbDF7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMSU7XHJcbn1cclxuXHJcbi5zcmNjcm9sbHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5zcmNoZ3R7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSA7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ubGFiLWZvbnR7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uZXZlbnQtZm9udHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5ldmVudC1mb250LWl0YWxpY3tcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uc3dpdGNoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA2NXB4O1xyXG4gIGhlaWdodDogMzRweDtcclxufVxyXG5cclxuLnN3aXRjaCBpbnB1dCB7ZGlzcGxheTpub25lO31cclxuXHJcbi5zbGlkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG4uc2xpZGVyOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIHdpZHRoOiAyOHB4O1xyXG4gIGxlZnQ6IDRweDtcclxuICB0b3A6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnRuLWNvbG9yO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcclxufVxyXG5cclxuLm9uXHJcbntcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ub2Zme1xyXG4gIHBhZGRpbmctbGVmdDozM3B4O1xyXG59XHJcblxyXG4ub257XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5cclxuLm9uLCAub2ZmXHJcbntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCsgLnNsaWRlciAub25cclxue2Rpc3BsYXk6IGJsb2NrO31cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIC5vZmZcclxue2Rpc3BsYXk6IG5vbmU7fVxyXG5cclxuLnNsaWRlci5ybmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuXHJcbi5zbGlkZXIucm5kOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG4ubWFyZ2luVEwxMCB7XHJcbiAgbWFyZ2luOiAyJSAzJTtcclxufVxyXG4gIFxyXG4ubWFyZ2luTDE1IHtcclxuICBtYXJnaW4tbGVmdDogMzVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA1NjhweCkge1xyXG4gIC5sYWItZm9udHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLmV2ZW50LWZvbnR7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG4udmFsaWRhdGlvbi1lcnJvcnN7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGNvbG9yOiByZWQ7XHJcbn1cclxudGFibGUgPnRib2R5ID4gdHIgPiB0ZDpudGgtY2hpbGQoMSl7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBwYWRkaW5nOiAwJSAwJSAwJSA1JTtcclxuICBcclxufVxyXG50YWJsZSA+dGJvZHkgPiB0ciA+IHRkOm50aC1jaGlsZCgyKXtcclxuICB3aWR0aDogNDUlOyAgXHJcbn1cclxudGFibGUgPnRib2R5ID4gdHIgPiB0ZDpudGgtY2hpbGQoMyl7XHJcbiAgd2lkdGg6IDQ1JTsgIFxyXG59XHJcbi8vIHRhYmxlID50Ym9keSA+IHRye1xyXG4vLyAgIHBhZGRpbmc6IDAlIDUlIDAlIDUlO1xyXG4vLyB9XHJcbi5yb3d0YWJ7XHJcbiAgcGFkZGluZzogMCA1JSAwIDUlO1xyXG59XHJcbmlvbi1wcm9ncmVzcy1iYXJ7XHJcbiAgdG9wOiAxMCU7XHJcbn1cclxuLmltZ3NjYW57XHJcbiAgdG9wOiAtNyU7XHJcbiAgZm9udC1zaXplOiA0N3B4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgICBcclxufVxyXG4jYmFyIHsgIFxyXG4gIGhlaWdodDogMS41cmVtOyBcclxuICB3aWR0aDogNy41cmVtO1xyXG59IiwiLnJvdW5kIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgLS1pb24tY29sb3ItYmFzZTogIzA4ODA4ODtcbiAgZm9udC1zaXplOiBpbml0aWFsO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5pdGVtTmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2xhc3MtaGVhZGVyaW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2JsdWViZy5wbmdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5iYWNrLW1hcmcge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI1JTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzI5YzVjNTtcbn1cblxuLmNsZWFyLW1hcmcge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjUlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjljNWM1O1xufVxuXG4uc2F2ZS1jZW50ZXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwN2FlYmE7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDg1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnRvZ2dsZS1jb2xvciB7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICMwMEJGQ0MgIWltcG9ydGFudDtcbn1cblxuLmxhYmVsLXBvcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNSU7XG59XG5cbi5yb3ctcGFkZCB7XG4gIHBhZGRpbmc6IDAuNSUgMyU7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1JTtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDMzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udG9vbDIge1xuICAtLWJhY2tncm91bmQ6I0ZGRkZGRjAwO1xuICAtLWJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50b29sMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxJTtcbn1cblxuLnNyY2Nyb2xsIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgei1pbmRleDogOTk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc3JjaGd0IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB6LWluZGV4OiA5OTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5sYWItZm9udCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmV2ZW50LWZvbnQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ldmVudC1mb250LWl0YWxpYyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4uc3dpdGNoIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG4gIGxlZnQ6IDRweDtcbiAgdG9wOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQkZDQztcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xufVxuXG4ub24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ub2ZmIHtcbiAgcGFkZGluZy1sZWZ0OiAzM3B4O1xufVxuXG4ub24ge1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xufVxuXG4ub24sIC5vZmYge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIC5vbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciAub2ZmIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlci5ybmQge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG4uc2xpZGVyLnJuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xufVxuXG4ubWFyZ2luVEwxMCB7XG4gIG1hcmdpbjogMiUgMyU7XG59XG5cbi5tYXJnaW5MMTUge1xuICBtYXJnaW4tbGVmdDogMzVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDU2OHB4KSB7XG4gIC5sYWItZm9udCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG5cbiAgLmV2ZW50LWZvbnQge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuLnZhbGlkYXRpb24tZXJyb3JzIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogcmVkO1xufVxuXG50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZDpudGgtY2hpbGQoMSkge1xuICB3aWR0aDogNDUlO1xuICBwYWRkaW5nOiAwJSAwJSAwJSA1JTtcbn1cblxudGFibGUgPiB0Ym9keSA+IHRyID4gdGQ6bnRoLWNoaWxkKDIpIHtcbiAgd2lkdGg6IDQ1JTtcbn1cblxudGFibGUgPiB0Ym9keSA+IHRyID4gdGQ6bnRoLWNoaWxkKDMpIHtcbiAgd2lkdGg6IDQ1JTtcbn1cblxuLnJvd3RhYiB7XG4gIHBhZGRpbmc6IDAgNSUgMCA1JTtcbn1cblxuaW9uLXByb2dyZXNzLWJhciB7XG4gIHRvcDogMTAlO1xufVxuXG4uaW1nc2NhbiB7XG4gIHRvcDogLTclO1xuICBmb250LXNpemU6IDQ3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2JhciB7XG4gIGhlaWdodDogMS41cmVtO1xuICB3aWR0aDogNy41cmVtO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apiservice.service */ "./src/app/apiservice.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let TrackingPage = class TrackingPage {
    constructor(formbuilder, routeto, Vanityartservice, alert, routerOutlet) {
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
    ngAfterViewInit() {
        setTimeout(() => {
            this.tracking.setFocus();
        }, 400);
    }
    ngOnInit() {
        this.userId = JSON.parse(localStorage.getItem(("Id")));
        this.routerOutlet.swipeGesture = false;
    }
    scanOrder() {
        let value = this.trackingordr.controls['tracking'].value;
        this.trackingSearch(value);
    }
    //order search via enter key
    handleScanner(evt) {
        setTimeout(() => {
            let value = evt.target.value;
            this.trackingSearch(value);
        }, 800);
    }
    //items search via enter key
    handleitemScanner(evt) {
        setTimeout(() => {
            let value = evt.target.value;
            let isItemAvailable = this.scanItemList.filter(item => item.itemUpc == value.toUpperCase());
            if (isItemAvailable.length > 0) {
                this.itemssearch(value);
            }
            else {
                this.Vanityartservice.PresentToast('Item # does not match with any items', 'danger');
            }
        }, 800);
    }
    handleserialNoScanner(evt) {
        let value = evt.target.value;
        if (value.length == 11) {
            this.trackingordr.controls['serialNo'].disable();
            this.serailNoScan(value);
        }
    }
    serailNoScan(value) {
        if (this.itemMatch == true) {
            let serialNo = value.toUpperCase();
            if (serialNo.length == 11) {
                let url = this.Vanityartservice.baseUrl + this.Vanityartservice.serialScan;
                let data = {
                    "BOL": this.respData.trackingNumber,
                    "order": this.orderno,
                    "serialNumber": serialNo
                };
                this.Vanityartservice.present();
                this.Vanityartservice.ajaxCallService(url, "post", data).then(resp => {
                    this.serialData = resp;
                    if (this.serialData['status'] == 'Success') {
                        this.Vanityartservice.dismiss();
                        this.dataSource = this.serialData['dataSource'];
                        if (this.trackingordr.value.itemvalues) {
                            this.scaneditems = this.trackingordr.value.itemvalues.toUpperCase();
                        }
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
                                            this.trackingordr.controls['itemvalues'].reset();
                                            setTimeout(() => {
                                                this.itemNo.setFocus();
                                            }, 200);
                                            //this.trackingordr.controls['serialNo'].enable();
                                            this.trackingordr.controls['serialNo'].reset();
                                            // setTimeout(()=>{
                                            //   this.serialNo.setFocus();
                                            // },200)
                                            if (this.scanItemList[idx]['scannedItems'] == this.scanItemList[idx]['itemQuantity']) {
                                                this.enableSerialNo = false;
                                                this.trackingordr.controls['itemvalues'].reset();
                                                this.itemMatch = false;
                                                this.scanItemList[idx]['selected'] = false;
                                                this.scanItemList[idx]['isScanned'] = true;
                                                setTimeout(() => {
                                                    this.itemNo.setFocus();
                                                }, 200);
                                                let checkItems = this.scanItemList;
                                                checkItems = checkItems.filter(item => item.scannedItems < item.itemQuantity);
                                                if (this.autoSave && checkItems.length == 0) {
                                                    setTimeout(() => {
                                                        this.trackingsubmit();
                                                    }, 200);
                                                }
                                                else if (!this.autoSave && checkItems.length == 0) {
                                                    this.enableSaveBtn = true;
                                                }
                                            }
                                        }
                                        else {
                                            this.trackingordr.controls['serialNo'].enable();
                                            setTimeout(() => {
                                                this.serialNo.setFocus();
                                            }, 100);
                                            this.Vanityartservice.PresentToast('No duplicate serial number allowed across items', "danger");
                                        }
                                    }
                                    else {
                                        this.trackingordr.controls['itemvalues'].reset();
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
                                            //this.trackingordr.controls['serialNo'].enable();
                                            this.trackingordr.controls['itemvalues'].reset();
                                            setTimeout(() => {
                                                this.itemNo.setFocus();
                                            }, 200);
                                            this.trackingordr.controls['serialNo'].reset();
                                            // setTimeout(()=>{
                                            //   this.serialNo.setFocus();
                                            // },200)
                                            if (this.scanItemList[idx]['scannedItems'] == this.scanItemList[idx]['itemQuantity']) {
                                                this.enableSerialNo = false;
                                                this.trackingordr.controls['itemvalues'].reset();
                                                this.itemMatch = false;
                                                this.scanItemList[idx]['selected'] = false;
                                                this.scanItemList[idx]['isScanned'] = true;
                                                setTimeout(() => {
                                                    this.itemNo.setFocus();
                                                }, 200);
                                                let checkItems = this.scanItemList;
                                                checkItems = checkItems.filter(item => item.scannedItems < item.itemQuantity);
                                                if (this.autoSave && checkItems.length == 0) {
                                                    setTimeout(() => {
                                                        this.trackingsubmit();
                                                    }, 200);
                                                }
                                                else if (!this.autoSave && checkItems.length == 0) {
                                                    this.enableSaveBtn = true;
                                                }
                                            }
                                        }
                                        else {
                                            this.trackingordr.controls['serialNo'].enable();
                                            setTimeout(() => {
                                                this.serialNo.setFocus();
                                            }, 100);
                                            this.Vanityartservice.PresentToast('No duplicate serial number allowed across items', "danger");
                                        }
                                    }
                                    else {
                                        this.trackingordr.controls['itemvalues'].reset();
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
                                            //this.trackingordr.controls['serialNo'].enable();
                                            //this.trackingordr.controls['itemvalues'].reset();
                                            this.trackingordr.controls['itemvalues'].reset();
                                            setTimeout(() => {
                                                this.itemNo.setFocus();
                                            }, 200);
                                            this.trackingordr.controls['serialNo'].reset();
                                            // setTimeout(()=>{
                                            //   this.serialNo.setFocus();
                                            // },200)
                                            if (this.scanItemList[idx]['scannedItems'] == this.scanItemList[idx]['itemQuantity']) {
                                                this.trackingordr.controls['serialNo'].reset();
                                                this.itemMatch = false;
                                                this.enableSerialNo = false;
                                                this.scanItemList[idx]['selected'] = false;
                                                this.scanItemList[idx]['isScanned'] = true;
                                                setTimeout(() => {
                                                    this.itemNo.setFocus();
                                                }, 200);
                                                let checkItems = this.scanItemList;
                                                checkItems = checkItems.filter(item => item.scannedItems < item.itemQuantity);
                                                if (this.autoSave && checkItems.length == 0) {
                                                    setTimeout(() => {
                                                        this.trackingsubmit();
                                                    }, 200);
                                                }
                                                else if (!this.autoSave && checkItems.length == 0) {
                                                    this.enableSaveBtn = true;
                                                }
                                            }
                                        }
                                        else {
                                            this.trackingordr.controls['serialNo'].enable();
                                            setTimeout(() => {
                                                this.serialNo.setFocus();
                                            }, 100);
                                            this.Vanityartservice.PresentToast('No duplicate serial number allowed across items', "danger");
                                        }
                                    }
                                    else {
                                        this.trackingordr.controls['itemvalues'].reset();
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
                                            // this.trackingordr.controls['serialNo'].enable();
                                            // this.trackingordr.controls['itemvalues'].reset();
                                            this.trackingordr.controls['itemvalues'].reset();
                                            setTimeout(() => {
                                                this.itemNo.setFocus();
                                            }, 200);
                                            this.trackingordr.controls['serialNo'].reset();
                                            // setTimeout(()=>{
                                            //   this.serialNo.setFocus();
                                            // },200)
                                            if (this.scanItemList[idx]['scannedItems'] == this.scanItemList[idx]['itemQuantity']) {
                                                this.trackingordr.controls['serialNo'].reset();
                                                this.itemMatch = false;
                                                this.enableSerialNo = false;
                                                this.scanItemList[idx]['selected'] = false;
                                                this.scanItemList[idx]['isScanned'] = true;
                                                setTimeout(() => {
                                                    this.itemNo.setFocus();
                                                }, 200);
                                                let checkItems = this.scanItemList;
                                                checkItems = checkItems.filter(item => item.scannedItems < item.itemQuantity);
                                                if (this.autoSave && checkItems.length == 0) {
                                                    setTimeout(() => {
                                                        this.trackingsubmit();
                                                    }, 200);
                                                }
                                                else if (!this.autoSave && checkItems.length == 0) {
                                                    this.enableSaveBtn = true;
                                                }
                                            }
                                        }
                                        else {
                                            this.trackingordr.controls['serialNo'].enable();
                                            setTimeout(() => {
                                                this.serialNo.setFocus();
                                            }, 100);
                                            this.Vanityartservice.PresentToast('No duplicate serial number allowed across items', "danger");
                                        }
                                    }
                                    else {
                                        this.trackingordr.controls['itemvalues'].reset();
                                        this.Vanityartservice.PresentToast('All quantities are scanned', "success");
                                    }
                                }
                            }
                        }
                    }
                    else if (this.serialData['status'] == 'Fail') {
                        this.Vanityartservice.dismiss();
                        this.trackingordr.controls['serialNo'].enable();
                        this.Vanityartservice.PresentToast(this.serialData['message'], 'danger');
                    }
                }).catch(err => {
                    this.Vanityartservice.dismiss();
                    this.trackingordr.controls['serialNo'].enable();
                    this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
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
    }
    //Method to go back to home page
    backToHome() {
        let tracking = this.trackingordr.controls.tracking.value;
        if (tracking == "" || tracking == null) {
            this.routeto.navigate(['/menuitems']);
        }
        else {
            this.Vanityartservice.PresentToast("There is unsaved data in the form, either save or clear the form.", "danger");
        }
    }
    //Method to check if autoSave is on/off
    isChecked(evt) {
        let check = evt.target.checked;
        if (check == true) {
            this.autoSave = true;
        }
        else {
            this.autoSave = false;
        }
    }
    //Method for tracking items
    trackingSearch(evt) {
        var trackingscan = this.Vanityartservice.baseUrl + this.Vanityartservice.trackingitems;
        let trckaingvalue = evt;
        if (trckaingvalue != "" && trckaingvalue != null) {
            var dataParam = {
                "TrackingNumber": trckaingvalue.toUpperCase()
            };
            this.Vanityartservice.present();
            this.Vanityartservice.ajaxCallService(trackingscan, "post", dataParam).then(resp => {
                this.respData = resp;
                console.log("res", this.respData);
                if (resp['scanItemList']['length'] != 0) {
                    this.enterEvt = false;
                    this.enterEvt = false;
                    this.scanItemList = resp['scanItemList'];
                    console.log(this.scanItemList.length);
                    // this.scanItemList = this.scanItemList.filter(item => item.isScanned == false)
                    for (let item of this.scanItemList) {
                        item.serialNumbers = [];
                        if (item.isScanned == false) {
                            item.scannedItems = 0;
                        }
                    }
                    this.scanItemList.map(i => i.isscanneditemslist = 0);
                    this.trackingList = resp;
                    this.orderno = resp['order'];
                    this.trackingnumber = resp['trackingNumber'];
                    this.shipdate = resp['shipDateString'];
                    this.customername = '( ' + resp['customerName'] + ')';
                    this.eventLog = 'Tracking # ' + trckaingvalue + ' successfully scanned' + '\n' + this.eventLog;
                    this.trackingordr.controls['tracking'].disable();
                    setTimeout(() => {
                        this.itemNo.setFocus();
                    }, 300);
                }
                else if (resp['status'] == 'Scanned') {
                    this.openConfirmationAlert(resp, trckaingvalue);
                    this.eventLog = 'Tracking # ' + trckaingvalue + ' already scanned. \u2716' + '\n' + this.eventLog;
                    this.Vanityartservice.PresentToast('Order/Tracking # ' + trckaingvalue + ' already added/scanned', "danger");
                }
                else {
                    this.eventLog = 'Tracking # ' + trckaingvalue.toUpperCase() + ' ' + resp['message'] + ' \u2716' + '\n' + this.eventLog;
                    // this.Vanityartservice.PresentToast("Invalid Order/Tracking #", "danger");
                    this.Vanityartservice.PresentToast(resp['message'], 'danger');
                    this.trackingordr.controls['tracking'].reset();
                    setTimeout(() => {
                        this.tracking.setFocus();
                    }, 500);
                }
                this.Vanityartservice.dismiss();
            }).catch(err => {
                this.Vanityartservice.dismiss();
                this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
            });
        }
    }
    //Tracking items scan
    itemssearch(evt) {
        var itemvalue = evt;
        this.enableSerialNo = true;
        let temp, tempAuto;
        this.scaneditems = this.trackingordr.value.itemvalues.toUpperCase();
        for (let item of this.scanItemList) {
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
    }
    //method for trackingsubmit
    trackingsubmit() {
        this.Vanityartservice.present();
        let checkQuantity = this.scanItemList.filter(item => item.scannedItems != item.itemQuantity);
        if (checkQuantity.length == 0) {
            this.serialNumbers = [];
        }
        this.trackingordr.controls['itemvalues'].reset();
        this.trackingordr.controls['serialNo'].reset();
        this.itemMatch = false;
        this.itemlist = this.scanItemList.filter(item => item.isScanned == true && item.scannedItems == item.itemQuantity);
        var saveTracking = this.Vanityartservice.baseUrl + this.Vanityartservice.savetrckingitems;
        console.log(this.itemslist);
        this.d = new Date();
        this.n = this.d.toJSON();
        let jsonobj = {
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
        this.Vanityartservice.ajaxCallService(saveTracking, "post", jsonobj).then(result => {
            if (result['status'] == "Success") {
                this.enableSaveBtn = false;
                this.Vanityartservice.PresentToast('Tracking  completed & ' + result['message'], "success");
                this.eventLog = 'Tracking# ' + this.respData.trackingNumber + ' scan and save completed. \u2714' + '\n' + this.eventLog;
                this.formreset();
                setTimeout(() => {
                    this.tracking.setFocus();
                }, 400);
            }
            else if (result['status'] == "Fail") {
                this.Vanityartservice.PresentToast('Tracking # ' + result['message'], "danger");
            }
            this.Vanityartservice.dismiss();
        }).catch(err => {
            this.Vanityartservice.dismiss();
            this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
        });
    }
    formreset() {
        this.trackingordr.controls['tracking'].enable();
        this.trackingordr.reset();
        this.scanItemList = [];
        this.serialNumbers = [];
        this.shipdate = '';
        this.orderno = '';
        this.customername = '';
        this.eventLog = '';
        setTimeout(() => {
            this.tracking.setFocus();
        }, 400);
        setTimeout(() => {
        }, 2000);
    }
    //Method to open confirmation alert
    openConfirmationAlert(resp, track) {
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
                                "TrackingNumber": track.toUpperCase()
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
                                    this.trackingList = result;
                                    this.orderno = result['order'];
                                    this.trackingnumber = result['trackingNumber'];
                                    this.shipdate = result['shipDateString'];
                                    this.customername = '( ' + result['customerName'] + ')';
                                    this.eventLog = 'Tracking # ' + this.trackingordr.value.tracking + ' successfully scanned' + '\n' + this.eventLog;
                                    this.trackingordr.controls['tracking'].setValue(track.toUpperCase());
                                    this.trackingordr.controls['tracking'].disable();
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
    }
};
TrackingPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _apiservice_service__WEBPACK_IMPORTED_MODULE_4__["ApiserviceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"] }
];
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



/***/ })

}]);
//# sourceMappingURL=tracking-tracking-module-es2015.js.map