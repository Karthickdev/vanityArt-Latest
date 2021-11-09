(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bolscan-bolscan-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/bolscan/bolscan.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bolscan/bolscan.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-padding class=\"class-headerimg\">\n  <div text-uppercase text-center class=\"title\">BOL SCANNING</div>\n  <ion-toolbar class=\"tool2\">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"4\" text-left class=\"padd-left-0\">\n          <ion-buttons class=\"back-marg\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\" routerLink=\"/menuitems\">BACK</ion-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"2\" text-center>\n          <ion-button class=\"save-center\" type=\"submit\">SAVE</ion-button>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"4\" text-right (click)=\"formreset()\">\n          <ion-buttons class=\"clear-marg\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\">CLEAR</ion-button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-content no-padding>\n  <form [formGroup]=\"scanbolnumber\">\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">BOL#</ion-label>\n          <ion-input text-uppercase type=\"text\" class=\"lab-font\" formControlName=\"scanbol\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </form>\n  <ion-toolbar class=\"tool1\">\n    <ion-grid style=\"padding: 3% 5%\">\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-label class=\"lab-font\">Auto Save</ion-label>\n        </ion-col>\n        <ion-col size=\"2\" text-center>\n          <label class=\"switch\"><input type=\"checkbox\">\n            <div class=\"slider rnd\"><span class=\"on\">ON</span><span class=\"off\">OFF</span></div>\n          </label>\n        </ion-col>\n        <ion-col size=\"5\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  <ion-row class=\"marginTL10\">\n    <ion-col size=\"12\">\n      <ion-label position=\"stacked\" class=\"event-font marginTL10\">Event Log</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item padding-horizontal>\n        <ion-textarea rows=\"3\" [readonly]='true' class=\"event-font-italic\"></ion-textarea>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/bolscan/bolscan.module.ts":
/*!*******************************************!*\
  !*** ./src/app/bolscan/bolscan.module.ts ***!
  \*******************************************/
/*! exports provided: BolscanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BolscanPageModule", function() { return BolscanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bolscan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bolscan.page */ "./src/app/bolscan/bolscan.page.ts");







var routes = [
    {
        path: '',
        component: _bolscan_page__WEBPACK_IMPORTED_MODULE_6__["BolscanPage"]
    }
];
var BolscanPageModule = /** @class */ (function () {
    function BolscanPageModule() {
    }
    BolscanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_bolscan_page__WEBPACK_IMPORTED_MODULE_6__["BolscanPage"]]
        })
    ], BolscanPageModule);
    return BolscanPageModule;
}());



/***/ }),

/***/ "./src/app/bolscan/bolscan.page.scss":
/*!*******************************************!*\
  !*** ./src/app/bolscan/bolscan.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".round {\n  --border-radius: 50%;\n  --vertical-align: middle;\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #088088;\n  font-size: initial;\n  font-size: 25px;\n}\n\n.class-headerimg {\n  background-image: url('bluebg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.back-marg {\n  float: left;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5;\n}\n\n.clear-marg {\n  background: transparent;\n  float: right;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5;\n}\n\n.save-center {\n  border-radius: 50%;\n  background: #07aeba;\n  font-size: 22px;\n  color: #ffffff;\n  height: 80px;\n  width: 85px;\n  border-radius: 50%;\n}\n\n.toggle-color {\n  --ion-color-base: #00BFCC !important;\n}\n\n.label-pos {\n  position: absolute;\n  bottom: 15%;\n}\n\n.row-padd {\n  padding: 0.5% 3%;\n}\n\n.error-message {\n  position: absolute;\n  left: 5%;\n  color: red;\n  font-size: 15px;\n}\n\n.title {\n  font-size: 33px;\n  font-weight: 500;\n  padding-top: 10px;\n  background: #00000000;\n  color: #fff;\n}\n\n.tool2 {\n  --background:#FFFFFF00;\n  --border-width: 0px !important;\n}\n\n.tool1 {\n  position: relative;\n  top: 1%;\n}\n\n.srccroll {\n  height: 200px;\n  overflow: scroll;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.srchgt {\n  height: auto;\n  overflow: hidden;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.lab-font {\n  font-size: 25px;\n}\n\n.event-font {\n  font-size: 18px;\n}\n\n.event-font-italic {\n  font-size: 16px;\n  color: #333;\n  font-style: italic;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 65px;\n  height: 34px;\n}\n\n.switch input {\n  display: none;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: grey;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 28px;\n  width: 28px;\n  left: 4px;\n  top: 3px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #00BFCC;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(55px);\n  transform: translateX(30px);\n}\n\n.on {\n  display: none;\n}\n\n.off {\n  padding-left: 33px;\n}\n\n.on {\n  padding-right: 25px;\n}\n\n.on, .off {\n  color: white;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  font-size: 13px;\n  font-family: Verdana, sans-serif;\n}\n\ninput:checked + .slider .on {\n  display: block;\n}\n\ninput:checked + .slider .off {\n  display: none;\n}\n\n.slider.rnd {\n  border-radius: 16px;\n}\n\n.slider.rnd:before {\n  border-radius: 14px;\n}\n\n.marginTL10 {\n  margin-left: 20px !important;\n  margin-top: 10px !important;\n}\n\n.marginL15 {\n  margin-left: 35px !important;\n  margin-top: 0px !important;\n}\n\n@media (min-width: 320px) and (max-width: 568px) {\n  .lab-font {\n    font-size: 13px;\n  }\n\n  .event-font {\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbmlzdHJhdG9yL0RvY3VtZW50cy92YW5pdHlBcnQtTGF0ZXN0L3NyYy9hcHAvYm9sc2Nhbi9ib2xzY2FuLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYm9sc2Nhbi9ib2xzY2FuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRko7O0FES0E7RUFDRSw4Q0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRkY7O0FES0E7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0ksb0NBQUE7QUNGSjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNENBQUE7RUFDSSxrQkFBQTtBQ0ZOOztBREtBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLQTtFQUNFLGVBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBO0VBQWUsYUFBQTtBQ0RmOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBN0pVO0FDNkpaOztBREdBO0VBQ0UsMkJBQUE7QUNBRjs7QURHQTtFQUNFLG1DQUFBO0VBRUEsMkJBQUE7QUNBRjs7QURHQTtFQUVFLGFBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0FDREY7O0FESUE7RUFDRSxtQkFBQTtBQ0RGOztBRElBO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FDRkY7O0FES0E7RUFDQyxjQUFBO0FDRkQ7O0FESUE7RUFDQyxhQUFBO0FDREQ7O0FER0E7RUFDRSxtQkFBQTtBQ0FGOztBREdBO0VBQ0ksbUJBQUE7QUNBSjs7QURHQTtFQUNFLDRCQUFBO0VBQ0EsMkJBQUE7QUNBRjs7QURHQTtFQUNFLDRCQUFBO0VBQ0EsMEJBQUE7QUNBRjs7QURHQTtFQUNFO0lBQ0UsZUFBQTtFQ0FGOztFREVBO0lBQ0UsZUFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ib2xzY2FuL2JvbHNjYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJ0bi1jb2xvcjogIzAwQkZDQztcclxuJHRleHQtY29sb3I6ICMwNzA3MDc7XHJcblxyXG4ucm91bmQge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwODgwODg7XHJcbiAgICBmb250LXNpemU6IGluaXRpYWw7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5jbGFzcy1oZWFkZXJpbWcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9ibHVlYmcucG5nXCIpIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5iYWNrLW1hcmd7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjUlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjMjljNWM1O1xyXG59XHJcblxyXG4uY2xlYXItbWFyZ3tcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjUlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjMjljNWM1O1xyXG59XHJcblxyXG4uc2F2ZS1jZW50ZXJ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICMwN2FlYmE7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogODVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi50b2dnbGUtY29sb3J7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMDBCRkNDICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYWJlbC1wb3N7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTUlO1xyXG59XHJcblxyXG4ucm93LXBhZGR7XHJcbiAgcGFkZGluZzogMC41JSAzJTtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2V7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUlO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMzNweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwMDAwMDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRvb2wye1xyXG4gIC0tYmFja2dyb3VuZDojRkZGRkZGMDA7XHJcbiAgLS1ib3JkZXItd2lkdGggOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRvb2wxe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDElO1xyXG59XHJcblxyXG4uc3JjY3JvbGx7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI4KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uc3JjaGd0e1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGUgO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmxhYi1mb250e1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmV2ZW50LWZvbnR7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uZXZlbnQtZm9udC1pdGFsaWN7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLnN3aXRjaCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNjVweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbn1cclxuXHJcbi5zd2l0Y2ggaW5wdXQge2Rpc3BsYXk6bm9uZTt9XHJcblxyXG4uc2xpZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gIHRyYW5zaXRpb246IC40cztcclxufVxyXG5cclxuLnNsaWRlcjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMjhweDtcclxuICB3aWR0aDogMjhweDtcclxuICBsZWZ0OiA0cHg7XHJcbiAgdG9wOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ0bi1jb2xvcjtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7XHJcbn1cclxuXHJcbi5vblxyXG57XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm9mZntcclxuICBwYWRkaW5nLWxlZnQ6MzNweDtcclxufVxyXG5cclxuLm9ue1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5vbiwgLm9mZlxyXG57XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQrIC5zbGlkZXIgLm9uXHJcbntkaXNwbGF5OiBibG9jazt9XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciAub2ZmXHJcbntkaXNwbGF5OiBub25lO31cclxuXHJcbi5zbGlkZXIucm5kIHtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcblxyXG4uc2xpZGVyLnJuZDpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxufVxyXG5cclxuLm1hcmdpblRMMTAge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbiAgXHJcbi5tYXJnaW5MMTUge1xyXG4gIG1hcmdpbi1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDU2OHB4KSB7XHJcbiAgLmxhYi1mb250e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuZXZlbnQtZm9udHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgXHJcbn0iLCIucm91bmQge1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWlvbi1jb2xvci1iYXNlOiAjMDg4MDg4O1xuICBmb250LXNpemU6IGluaXRpYWw7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmNsYXNzLWhlYWRlcmltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9ibHVlYmcucG5nXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uYmFjay1tYXJnIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyNSU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMyOWM1YzU7XG59XG5cbi5jbGVhci1tYXJnIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI1JTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzI5YzVjNTtcbn1cblxuLnNhdmUtY2VudGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMDdhZWJhO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50b2dnbGUtY29sb3Ige1xuICAtLWlvbi1jb2xvci1iYXNlOiAjMDBCRkNDICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbC1wb3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTUlO1xufVxuXG4ucm93LXBhZGQge1xuICBwYWRkaW5nOiAwLjUlIDMlO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNSU7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRvb2wyIHtcbiAgLS1iYWNrZ3JvdW5kOiNGRkZGRkYwMDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udG9vbDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMSU7XG59XG5cbi5zcmNjcm9sbCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNyY2hndCB7XG4gIGhlaWdodDogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgei1pbmRleDogOTk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubGFiLWZvbnQge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5ldmVudC1mb250IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZXZlbnQtZm9udC1pdGFsaWMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLnN3aXRjaCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xuICBsZWZ0OiA0cHg7XG4gIHRvcDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEJGQ0M7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcbn1cblxuLm9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm9mZiB7XG4gIHBhZGRpbmctbGVmdDogMzNweDtcbn1cblxuLm9uIHtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLm9uLCAub2ZmIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciAub24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIgLm9mZiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGlkZXIucm5kIHtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cblxuLnNsaWRlci5ybmQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbn1cblxuLm1hcmdpblRMMTAge1xuICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJnaW5MMTUge1xuICBtYXJnaW4tbGVmdDogMzVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNTY4cHgpIHtcbiAgLmxhYi1mb250IHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cblxuICAuZXZlbnQtZm9udCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/bolscan/bolscan.page.ts":
/*!*****************************************!*\
  !*** ./src/app/bolscan/bolscan.page.ts ***!
  \*****************************************/
/*! exports provided: BolscanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BolscanPage", function() { return BolscanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var BolscanPage = /** @class */ (function () {
    function BolscanPage(formBuilder) {
        this.formBuilder = formBuilder;
        this.scanbolnumber = this.formBuilder.group({
            scanbol: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    }
    BolscanPage.prototype.ngOnInit = function () { };
    BolscanPage.prototype.formreset = function () {
        this.scanbolnumber.reset();
    };
    BolscanPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    BolscanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bolscan',
            template: __webpack_require__(/*! raw-loader!./bolscan.page.html */ "./node_modules/raw-loader/index.js!./src/app/bolscan/bolscan.page.html"),
            styles: [__webpack_require__(/*! ./bolscan.page.scss */ "./src/app/bolscan/bolscan.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], BolscanPage);
    return BolscanPage;
}());



/***/ })

}]);
//# sourceMappingURL=bolscan-bolscan-module-es5.js.map