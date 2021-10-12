(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"class-headerimg\">\n  <div class=\"ion-text-center ion-text-uppercase\" class=\"title\"></div>\n</ion-header>\n<ion-content hide-tabs>\n  <form [formGroup]=\"logingrp\" (ngSubmit)=\"btnLogin()\">\n    <ion-grid><br>\n      <br><br>\n      <div class=\"ion-padding\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font\">\n            User Id\n          </ion-label>\n          <ion-input #usermailid type=\"email\" formControlName=\"userEmail\" class=\"lab-font\"\n            (ionInput)=\"checkEmptyIdOnFocus($event)\" (ionBlur)=\"checkEmptyIdOnBlur($event)\" required></ion-input>\n        </ion-item>\n        <div class=\"error-message\" *ngIf=\"errUserName\">{{message[0]}}</div><br>\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font\">\n            Password\n          </ion-label>\n          <ion-input #userpaswrd type=\"Password\" formControlName=\"userPwd\" class=\"lab-font\"\n            (ionInput)=\"checkEmptyPassOnFocus($event)\" (ionBlur)=\"checkEmptyPassOnBlur($event)\" required></ion-input>\n        </ion-item>\n        <div class=\"error-message\" *ngIf=\"errPassword\">{{message[1]}}</div>\n        <br><br>\n        <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n          <ion-col size=\"3\"></ion-col>\n          <ion-col size=\"6\">\n            <ion-button type=\"submit\" size=\"medium\" expand=\"block\" class=\"loggbtn\" color=\"medium\">LOGIN</ion-button>\n          </ion-col>\n          <ion-col size=\"3\"></ion-col>\n        </ion-row>\n      </div>\n    </ion-grid>\n  </form>\n</ion-content>\n<ion-footer no-border class=\"ion-text-center\">\n  <!-- <ion-label style=\"font-size: 14px;\">Version: PROD (0.1.1) 09-20-2021</ion-label> -->\n  <ion-label style=\"font-size: 14px;\">Version: UAT (0.1.1) 09-20-2021</ion-label>\n</ion-footer>"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".class-headerimg {\n  background-image: url('homebg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  height: 250px !important;\n}\n\nion-grid {\n  width: 100%;\n  height: 100%;\n}\n\nion-row {\n  height: 100%;\n}\n\nion-col {\n  background: #fff;\n}\n\n.loggbtn {\n  width: 100%;\n  border-radius: 5%;\n  font-weight: normal;\n  font-size: 25px;\n}\n\n.lab-font {\n  font-size: 25px;\n}\n\n.validation-errors {\n  font-size: 15px;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTgxMTgwL0RvY3VtZW50cy92YW5pdHlBcnQtbGF0ZXN0L3Zhbml0eUFydC1MYXRlc3Qvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q0E7RUFDSSw4Q0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0FDM0NKOztBRDhDQTtFQUNDLFdBQUE7RUFDQSxZQVpXO0FDL0JaOztBRDhDQTtFQUNDLFlBaEJXO0FDM0JaOztBRDhDQTtFQUNDLGdCQXJCYTtBQ3RCZDs7QUQ4Q0E7RUFDQyxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUMzQ0Q7O0FEOENBO0VBQ0MsZUFBQTtBQzNDRDs7QUQ4Q0E7RUFDQyxlQUFBO0VBQ0EsVUFBQTtBQzNDRCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICR3aGl0ZS1jb2xvcjogI2ZmZjtcclxuLy8gJGhlaWdodDEwMDogMTAwJTtcclxuXHJcbi8vIC5jbGFzcy1oZWFkZXJpbWd7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaG9tZWJnLnBuZ1wiKSFpbXBvcnRhbnQ7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgXHJcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4vLyAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuLy8gICAgIGhlaWdodDogMjUwcHghaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyBpb24tZ3JpZCB7XHJcbi8vIFx0d2lkdGg6MTAwJTtcclxuLy8gXHRoZWlnaHQ6ICRoZWlnaHQxMDA7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1yb3cge1xyXG4vLyBcdGhlaWdodDogJGhlaWdodDEwMDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWNvbCB7XHJcbi8vIFx0YmFja2dyb3VuZDogJHdoaXRlLWNvbG9yO1xyXG4vLyB9XHJcblxyXG4vLyAubG9nZ2J0bntcclxuLy8gXHR3aWR0aDogMTAwJTtcclxuLy8gXHRib3JkZXItcmFkaXVzOiA1JTtcclxuLy8gXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG4vLyBcdGZvbnQtc2l6ZTogMjVweDtcclxuLy8gfVxyXG5cclxuLy8gLmxhYi1mb250e1xyXG4vLyBcdGZvbnQtc2l6ZTogMjVweDtcclxuLy8gfVxyXG5cclxuLy8gLnZhbGlkYXRpb24tZXJyb3Jze1xyXG4vLyBcdGZvbnQtc2l6ZTogMTVweDtcclxuLy8gXHRjb2xvcjogcmVkO1xyXG4vLyB9XHJcblxyXG5cclxuJHdoaXRlLWNvbG9yOiAjZmZmO1xyXG4kaGVpZ2h0MTAwOiAxMDAlO1xyXG5cclxuLmNsYXNzLWhlYWRlcmltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaG9tZWJnLnBuZ1wiKSFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogMjUwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcblx0d2lkdGg6MTAwJTtcclxuXHRoZWlnaHQ6ICRoZWlnaHQxMDA7XHJcbn1cclxuXHJcbmlvbi1yb3cge1xyXG5cdGhlaWdodDogJGhlaWdodDEwMDtcclxufVxyXG5cclxuaW9uLWNvbCB7XHJcblx0YmFja2dyb3VuZDogJHdoaXRlLWNvbG9yO1xyXG59XHJcblxyXG4ubG9nZ2J0bntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRib3JkZXItcmFkaXVzOiA1JTtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmxhYi1mb250e1xyXG5cdGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLnZhbGlkYXRpb24tZXJyb3Jze1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRjb2xvcjogcmVkO1xyXG59XHJcbiIsIi5jbGFzcy1oZWFkZXJpbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaG9tZWJnLnBuZ1wiKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNTBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1yb3cge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1jb2wge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ubG9nZ2J0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1JTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ubGFiLWZvbnQge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi52YWxpZGF0aW9uLWVycm9ycyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apiservice.service */ "./src/app/apiservice.service.ts");






var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, routeTo, Vanityartservice, routerOutlet) {
        this.formBuilder = formBuilder;
        this.routeTo = routeTo;
        this.Vanityartservice = Vanityartservice;
        this.routerOutlet = routerOutlet;
        this.logingrp = this.formBuilder.group({
            userEmail: [''],
            userPwd: [''],
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        this.errPassword = false;
        this.errUserName = false;
        this.routerOutlet.swipeGesture = false;
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var msg = JSON.parse(localStorage.getItem(("Message")));
        if (msg)
            this.message = msg;
        var id = localStorage.getItem("userName");
        this.logingrp.reset();
        if (id != undefined && id != null && id != "") {
            this.logingrp.controls['userEmail'].setValue(id);
            this.logingrp.controls['userPwd'].reset();
            setTimeout(function () {
                _this.userpswrd.setFocus();
            }, 700);
        }
        else {
            setTimeout(function () {
                _this.usermailid.setFocus();
            }, 700);
        }
    };
    LoginPage.prototype.btnLogin = function () {
        var _this = this;
        var loginUrl = this.Vanityartservice.baseUrl + this.Vanityartservice.userLogin;
        if (this.logingrp.value.userEmail == undefined || this.logingrp.value.userEmail == "") {
            this.errUserName = true;
            return false;
        }
        else {
            this.errUserName = false;
        }
        if (this.logingrp.value.userPwd == undefined || this.logingrp.value.userPwd == "") {
            this.errPassword = true;
            return false;
        }
        else {
            this.errPassword = false;
        }
        var dataParam = {
            "LoginId": this.logingrp.value.userEmail,
            "Password": this.logingrp.value.userPwd
        };
        var userName = this.logingrp.value.userEmail;
        if (this.Vanityartservice.versionChecked) {
            this.Vanityartservice.present();
            this.Vanityartservice.ajaxCallService(loginUrl, "post", dataParam).then(function (resp) {
                if (resp['status'] == "Success") {
                    localStorage.setItem("Id", resp['userId']);
                    localStorage.setItem('isvanityUser', resp['isVanityArtUser']);
                    localStorage.setItem("userName", userName);
                    _this.Vanityartservice.warehouses = resp['warehouseList'];
                    _this.Vanityartservice.conditions = resp['returnConditionList'];
                    _this.Vanityartservice.defaultWarehouse = resp['warehouseId'];
                    _this.routeTo.navigate(["/menuitems"]);
                    _this.errPassword = false;
                }
                else {
                    _this.Vanityartservice.PresentToast(resp['message'], 'danger');
                }
                _this.Vanityartservice.dismiss();
            }).catch(function (err) {
                _this.Vanityartservice.PresentToast('Unable to reach server, Please try again', 'danger');
                _this.Vanityartservice.dismiss();
            });
        }
        else {
            this.Vanityartservice.presentAlert();
        }
    };
    //check if model is empty
    LoginPage.prototype.checkEmptyIdOnFocus = function (evt) {
        if (evt.target.value != undefined && evt.target.value != "") {
            this.errUserName = false;
        }
    };
    //check if model is empty
    LoginPage.prototype.checkEmptyIdOnBlur = function (evt) {
        if (evt.target.value != undefined && evt.target.value != "") {
            this.errUserName = false;
        }
        else {
            this.errUserName = true;
        }
    };
    //check if model is empty
    LoginPage.prototype.checkEmptyPassOnFocus = function (evt) {
        if (evt.target.value != undefined && evt.target.value != "") {
            this.errPassword = false;
        }
    };
    //check if model is empty
    LoginPage.prototype.checkEmptyPassOnBlur = function (evt) {
        if (evt.target.value != undefined && evt.target.value != "") {
            this.errPassword = false;
        }
        else {
            this.errPassword = true;
        }
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _apiservice_service__WEBPACK_IMPORTED_MODULE_5__["ApiserviceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRouterOutlet"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('usermailid', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginPage.prototype, "usermailid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userpaswrd', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginPage.prototype, "userpswrd", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _apiservice_service__WEBPACK_IMPORTED_MODULE_5__["ApiserviceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRouterOutlet"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map