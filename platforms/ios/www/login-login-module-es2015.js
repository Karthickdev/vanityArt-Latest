(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"class-headerimg\">\n  <div class=\"ion-text-center ion-text-uppercase\" class=\"title\"></div>\n</ion-header>\n<ion-content hide-tabs>\n  <form [formGroup]=\"logingrp\" (ngSubmit)=\"btnLogin()\">\n    <ion-grid><br>\n      <br><br>\n      <div class=\"ion-padding\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font\">\n            User Id\n          </ion-label>\n          <ion-input #usermailid type=\"email\" formControlName=\"userEmail\" class=\"lab-font\"\n            (ionInput)=\"checkEmptyIdOnFocus($event)\" (ionBlur)=\"checkEmptyIdOnBlur($event)\" required></ion-input>\n        </ion-item>\n        <div class=\"error-message\" *ngIf=\"errUserName\">{{message[0]}}</div><br>\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font\">\n            Password\n          </ion-label>\n          <ion-input #userpaswrd type=\"Password\" formControlName=\"userPwd\" class=\"lab-font\"\n            (ionInput)=\"checkEmptyPassOnFocus($event)\" (ionBlur)=\"checkEmptyPassOnBlur($event)\" required></ion-input>\n        </ion-item>\n        <div class=\"error-message\" *ngIf=\"errPassword\">{{message[1]}}</div>\n        <br><br>\n        <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n          <ion-col size=\"3\"></ion-col>\n          <ion-col size=\"6\">\n            <ion-button type=\"submit\" size=\"medium\" expand=\"block\" class=\"loggbtn\" color=\"medium\">LOGIN</ion-button>\n          </ion-col>\n          <ion-col size=\"3\"></ion-col>\n        </ion-row>\n      </div>\n    </ion-grid>\n  </form>\n</ion-content>\n<ion-footer no-border class=\"ion-text-center\">\n  <!-- <ion-label style=\"font-size: 14px;\">Version: PROD (0.1.1) 10-19-2021</ion-label> -->\n  <ion-label style=\"font-size: 14px;\">Version: UAT (0.1.1) 11-09-2021</ion-label>\n</ion-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
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



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".class-headerimg {\n  background-image: url('homebg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  height: 250px !important;\n}\n\nion-grid {\n  width: 100%;\n  height: 100%;\n}\n\nion-row {\n  height: 100%;\n}\n\nion-col {\n  background: #fff;\n}\n\n.loggbtn {\n  width: 100%;\n  border-radius: 5%;\n  font-weight: normal;\n  font-size: 25px;\n}\n\n.lab-font {\n  font-size: 25px;\n}\n\n.validation-errors {\n  font-size: 15px;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbmlzdHJhdG9yL0RvY3VtZW50cy92YW5pdHlBcnQtTGF0ZXN0L3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENBO0VBQ0ksOENBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtBQzNDSjs7QUQ4Q0E7RUFDQyxXQUFBO0VBQ0EsWUFaVztBQy9CWjs7QUQ4Q0E7RUFDQyxZQWhCVztBQzNCWjs7QUQ4Q0E7RUFDQyxnQkFyQmE7QUN0QmQ7O0FEOENBO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDM0NEOztBRDhDQTtFQUNDLGVBQUE7QUMzQ0Q7O0FEOENBO0VBQ0MsZUFBQTtFQUNBLFVBQUE7QUMzQ0QiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAkd2hpdGUtY29sb3I6ICNmZmY7XHJcbi8vICRoZWlnaHQxMDA6IDEwMCU7XHJcblxyXG4vLyAuY2xhc3MtaGVhZGVyaW1ne1xyXG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2hvbWViZy5wbmdcIikhaW1wb3J0YW50O1xyXG4vLyAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7IFxyXG4vLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuLy8gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbi8vICAgICBoZWlnaHQ6IDI1MHB4IWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWdyaWQge1xyXG4vLyBcdHdpZHRoOjEwMCU7XHJcbi8vIFx0aGVpZ2h0OiAkaGVpZ2h0MTAwO1xyXG4vLyB9XHJcblxyXG4vLyBpb24tcm93IHtcclxuLy8gXHRoZWlnaHQ6ICRoZWlnaHQxMDA7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1jb2wge1xyXG4vLyBcdGJhY2tncm91bmQ6ICR3aGl0ZS1jb2xvcjtcclxuLy8gfVxyXG5cclxuLy8gLmxvZ2didG57XHJcbi8vIFx0d2lkdGg6IDEwMCU7XHJcbi8vIFx0Ym9yZGVyLXJhZGl1czogNSU7XHJcbi8vIFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuLy8gXHRmb250LXNpemU6IDI1cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5sYWItZm9udHtcclxuLy8gXHRmb250LXNpemU6IDI1cHg7XHJcbi8vIH1cclxuXHJcbi8vIC52YWxpZGF0aW9uLWVycm9yc3tcclxuLy8gXHRmb250LXNpemU6IDE1cHg7XHJcbi8vIFx0Y29sb3I6IHJlZDtcclxuLy8gfVxyXG5cclxuXHJcbiR3aGl0ZS1jb2xvcjogI2ZmZjtcclxuJGhlaWdodDEwMDogMTAwJTtcclxuXHJcbi5jbGFzcy1oZWFkZXJpbWcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2hvbWViZy5wbmdcIikhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDI1MHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0aGVpZ2h0OiAkaGVpZ2h0MTAwO1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuXHRoZWlnaHQ6ICRoZWlnaHQxMDA7XHJcbn1cclxuXHJcbmlvbi1jb2wge1xyXG5cdGJhY2tncm91bmQ6ICR3aGl0ZS1jb2xvcjtcclxufVxyXG5cclxuLmxvZ2didG57XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Ym9yZGVyLXJhZGl1czogNSU7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5sYWItZm9udHtcclxuXHRmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi52YWxpZGF0aW9uLWVycm9yc3tcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Y29sb3I6IHJlZDtcclxufVxyXG4iLCIuY2xhc3MtaGVhZGVyaW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2hvbWViZy5wbmdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjUwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWdyaWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tcm93IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tY29sIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmxvZ2didG4ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmxhYi1mb250IHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4udmFsaWRhdGlvbi1lcnJvcnMge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiByZWQ7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apiservice.service */ "./src/app/apiservice.service.ts");






let LoginPage = class LoginPage {
    constructor(formBuilder, routeTo, Vanityartservice, routerOutlet) {
        this.formBuilder = formBuilder;
        this.routeTo = routeTo;
        this.Vanityartservice = Vanityartservice;
        this.routerOutlet = routerOutlet;
        this.logingrp = this.formBuilder.group({
            userEmail: [''],
            userPwd: [''],
        });
    }
    ngOnInit() {
        this.errPassword = false;
        this.errUserName = false;
        this.routerOutlet.swipeGesture = false;
    }
    ionViewDidEnter() {
        let msg = JSON.parse(localStorage.getItem(("Message")));
        if (msg)
            this.message = msg;
        let id = localStorage.getItem("userName");
        this.logingrp.reset();
        if (id != undefined && id != null && id != "") {
            this.logingrp.controls['userEmail'].setValue(id);
            this.logingrp.controls['userPwd'].reset();
            setTimeout(() => {
                this.userpswrd.setFocus();
            }, 700);
        }
        else {
            setTimeout(() => {
                this.usermailid.setFocus();
            }, 700);
        }
    }
    btnLogin() {
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
        let userName = this.logingrp.value.userEmail;
        if (this.Vanityartservice.versionChecked) {
            this.Vanityartservice.present();
            this.Vanityartservice.ajaxCallService(loginUrl, "post", dataParam).then(resp => {
                if (resp['status'] == "Success") {
                    localStorage.setItem("Id", resp['userId']);
                    localStorage.setItem('isvanityUser', resp['isVanityArtUser']);
                    localStorage.setItem("userName", userName);
                    this.Vanityartservice.warehouses = resp['warehouseList'];
                    this.Vanityartservice.conditions = resp['returnConditionList'];
                    this.Vanityartservice.defaultWarehouse = resp['warehouseId'];
                    this.routeTo.navigate(["/menuitems"]);
                    this.errPassword = false;
                }
                else {
                    this.Vanityartservice.PresentToast(resp['message'], 'danger');
                }
                this.Vanityartservice.dismiss();
            }).catch(err => {
                this.Vanityartservice.PresentToast('Unable to reach server, Please try again', 'danger');
                this.Vanityartservice.dismiss();
            });
        }
        else {
            this.Vanityartservice.presentAlert();
        }
    }
    //check if model is empty
    checkEmptyIdOnFocus(evt) {
        if (evt.target.value != undefined && evt.target.value != "") {
            this.errUserName = false;
        }
    }
    //check if model is empty
    checkEmptyIdOnBlur(evt) {
        if (evt.target.value != undefined && evt.target.value != "") {
            this.errUserName = false;
        }
        else {
            this.errUserName = true;
        }
    }
    //check if model is empty
    checkEmptyPassOnFocus(evt) {
        if (evt.target.value != undefined && evt.target.value != "") {
            this.errPassword = false;
        }
    }
    //check if model is empty
    checkEmptyPassOnBlur(evt) {
        if (evt.target.value != undefined && evt.target.value != "") {
            this.errPassword = false;
        }
        else {
            this.errPassword = true;
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _apiservice_service__WEBPACK_IMPORTED_MODULE_5__["ApiserviceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRouterOutlet"] }
];
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



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map