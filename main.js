(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/leecohen/Desktop/mister-bitcoin-angular/src/main.ts */"zUnb");


/***/ }),

/***/ "0NuV":
/*!*********************************************!*\
  !*** ./src/app/services/bitcoin.service.ts ***!
  \*********************************************/
/*! exports provided: BitcoinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitcoinService", function() { return BitcoinService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class BitcoinService {
    // bitcoinRate=null
    constructor(http) {
        this.http = http;
    }
    getBitcoinRate() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('currency', 'USD')
            .set('value', '1');
        const rate = this.http.get(`https://blockchain.info/tobtc`, { params })
            .pipe(
        // tap(res=> this.bitcoinRate = Math.round(1 / +res) ),
        // map(res => Math.round(1 / +res).toLocaleString())
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => Math.round(1 / +res)));
        return rate;
    }
    getMarketPrice() {
        console.log('getting what needed');
    }
}
BitcoinService.ɵfac = function BitcoinService_Factory(t) { return new (t || BitcoinService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BitcoinService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BitcoinService, factory: BitcoinService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BitcoinService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_bitcoin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/bitcoin.service */ "0NuV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cmps/move-list/move-list.component */ "L8zA");








function HomeComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$ ", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r0.bitcoinRate)) == null ? null : tmp_0_0.toLocaleString(), "");
} }
function HomeComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Loading...");
} }
class HomeComponent {
    constructor(userService, bitcoinService) {
        this.userService = userService;
        this.bitcoinService = bitcoinService;
        this.user = null;
        this.bitcoinRate = null;
        this.amountInDollar = null;
        this.showTransferForm = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = this.userService.getUser();
            this.bitcoinRate = this.bitcoinService.getBitcoinRate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => this.amountInDollar = res));
            //  this.amountInDollar = this.bitcoinRate*this.user.coins
        });
    }
    onShowTransferForm() {
        this.showTransferForm = true;
        console.log('to true');
    }
    onCloseTransferForm() {
        this.showTransferForm = false;
        console.log('to false');
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_bitcoin_service__WEBPACK_IMPORTED_MODULE_4__["BitcoinService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 23, vars: 10, consts: [[1, "home-page"], [1, "head-container"], [1, "user-balance"], [1, "gray-text"], [1, "green-text"], [1, "bitcoin-rate"], ["class", "amount", 4, "ngIf", "ngIfElse"], ["btcLoad", ""], [3, "transactions"], [1, "amount"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "head", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Total Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "BTC: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Current BTC USD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, HomeComponent_span_18_Template, 3, 3, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, HomeComponent_ng_template_20_Template, 1, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "app-move-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
        let tmp_2_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Hi, ", ctx.user.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20BF ", ctx.user.coins, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("US$ ", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 6, ctx.bitcoinRate) * ctx.user.coins) == null ? null : tmp_2_0.toLocaleString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 8, ctx.bitcoinRate))("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("transactions", ctx.user.moves);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_6__["MoveListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".home-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 10px;\n}\n.home-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.home-page[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .head-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.home-page[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .head-container[_ngcontent-%COMP%]   .user-balance[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.home-page[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .head-container[_ngcontent-%COMP%]   .bitcoin-rate[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.home-page[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .head-container[_ngcontent-%COMP%]   .bitcoin-rate[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  font-size: 30px;\n  align-self: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFDSjtBQUFJO0VBQ0ksbUJBQUE7QUFFUjtBQUNRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDWjtBQUFZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBRWhCO0FBQVk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFFaEI7QUFEZ0I7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7QUFHcEIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLXBhZ2V7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaDF7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIG1haW57XG4gICAgICAgIC5oZWFkLWNvbnRhaW5lcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgLnVzZXItYmFsYW5jZXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYml0Y29pbi1yYXRle1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAuYW1vdW50e1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: src_app_services_bitcoin_service__WEBPACK_IMPORTED_MODULE_4__["BitcoinService"] }]; }, null); })();


/***/ }),

/***/ "2uUW":
/*!*******************************************************************!*\
  !*** ./src/app/cmps/contact-preview/contact-preview.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPreviewComponent", function() { return ContactPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact.service */ "3ITz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a1) { return ["/contact", a1]; };
class ContactPreviewComponent {
    constructor(contactService) {
        this.contactService = contactService;
        this.imgPath = null;
    }
    ngOnInit() {
        this.imgPath = `https://robohash.org/${this.contact._id}`;
    }
    onDeleteContact() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.contactService.deleteContact(this.contact._id);
            }
            catch (err) {
                console.log(`err`, err);
            }
        });
    }
}
ContactPreviewComponent.ɵfac = function ContactPreviewComponent_Factory(t) { return new (t || ContactPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"])); };
ContactPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactPreviewComponent, selectors: [["app-contact-preview"]], inputs: { contact: "contact" }, decls: 7, vars: 5, consts: [[1, "contact-preview"], [1, "link", 3, "routerLink"], ["alt", "", 3, "src"], [1, "contact-name"], [1, "delete-btn", 3, "click"], ["src", "../assets/img/cancel-icon.png", "alt", ""]], template: function ContactPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactPreviewComponent_Template_button_click_5_listener() { return ctx.onDeleteContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx.contact._id));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.contact.name);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".contact-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #ffffff38;\n  padding: 0px 0px 5px;\n  cursor: pointer;\n  margin: 0px 10px;\n}\n.contact-preview[_ngcontent-%COMP%]:hover {\n  background-color: #e4e4e4;\n  color: #40434a;\n  border-radius: 3px;\n}\n.contact-preview[_ngcontent-%COMP%]:hover   .delete-btn[_ngcontent-%COMP%] {\n  color: #40434a;\n}\n.contact-preview[_ngcontent-%COMP%]:hover   .delete-btn[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  filter: contrast(0.5);\n}\n.contact-preview[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.contact-preview[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  margin: 0px 5px 5px 0px;\n}\n.contact-preview[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .contact-name[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n.contact-preview[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 25px;\n  border: none;\n  border-radius: 3px;\n  background-color: transparent;\n  color: whitesmoke;\n  cursor: pointer;\n  margin-right: 10px;\n}\n.contact-preview[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 15px;\n  filter: brightness(0) invert(1);\n  position: relative;\n  top: 5px;\n}\n.contact-preview[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]:hover {\n  filter: invert(15%) sepia(96%) saturate(7075%) hue-rotate(2deg) brightness(100%) contrast(114%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbnRhY3QtcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFJO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQURRO0VBQ0ksY0FBQTtBQUdaO0FBRlk7RUFDSSxxQkFBQTtBQUloQjtBQUFJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFHWjtBQUFRO0VBQ0ksZ0JBQUE7QUFFWjtBQUNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ1I7QUFDUTtFQUNJLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUNaO0FBQVk7RUFDSSwrRkFBQTtBQUVoQiIsImZpbGUiOiJjb250YWN0LXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1wcmV2aWV3e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjM4O1xuICAgIHBhZGRpbmc6IDBweCAwcHggNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgICY6aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XG4gICAgICAgIGNvbG9yOiAjNDA0MzRhO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIC5kZWxldGUtYnRue1xuICAgICAgICAgICAgY29sb3I6ICM0MDQzNGE7XG4gICAgICAgICAgICA+aW1ne1xuICAgICAgICAgICAgICAgIGZpbHRlcjogY29udHJhc3QoMC41KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAubGlua3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgID4gaW1ne1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW46IDBweCA1cHggNXB4IDBweDtcbiAgICAgICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFjdC1uYW1le1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZGVsZXRlLWJ0bntcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIFxuICAgICAgICA+aW1ne1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGludmVydCgxNSUpIHNlcGlhKDk2JSkgc2F0dXJhdGUoNzA3NSUpIGh1ZS1yb3RhdGUoMmRlZykgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMTQlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContactPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-contact-preview',
                templateUrl: './contact-preview.component.html',
                styleUrls: ['./contact-preview.component.scss']
            }]
    }], function () { return [{ type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }]; }, { contact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "3ITz":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_contact_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/contact.model */ "BYzK");




const CONTACTS = [
    {
        "_id": "5a56640269f443a5d64b32ca",
        "name": "Ochoa Hyde",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824"
    },
    {
        "_id": "5a5664025f6ae9aa24a99fde",
        "name": "Hallie Mclean",
        "email": "halliemclean@renovize.com",
        "phone": "+1 (948) 464-2888"
    },
    {
        "_id": "5a56640252d6acddd183d319",
        "name": "Parsons Norris",
        "email": "parsonsnorris@renovize.com",
        "phone": "+1 (958) 502-3495"
    },
    {
        "_id": "5a566402ed1cf349f0b47b4d",
        "name": "Rachel Lowe",
        "email": "rachellowe@renovize.com",
        "phone": "+1 (911) 475-2312"
    },
    {
        "_id": "5a566402abce24c6bfe4699d",
        "name": "Dominique Soto",
        "email": "dominiquesoto@renovize.com",
        "phone": "+1 (807) 551-3258"
    },
    {
        "_id": "5a566402a6499c1d4da9220a",
        "name": "Shana Pope",
        "email": "shanapope@renovize.com",
        "phone": "+1 (970) 527-3082"
    },
    {
        "_id": "5a566402f90ae30e97f990db",
        "name": "Faulkner Flores",
        "email": "faulknerflores@renovize.com",
        "phone": "+1 (952) 501-2678"
    },
    {
        "_id": "5a5664027bae84ef280ffbdf",
        "name": "Holder Bean",
        "email": "holderbean@renovize.com",
        "phone": "+1 (989) 503-2663"
    },
    {
        "_id": "5a566402e3b846c5f6aec652",
        "name": "Rosanne Shelton",
        "email": "rosanneshelton@renovize.com",
        "phone": "+1 (968) 454-3851"
    },
    {
        "_id": "5a56640272c7dcdf59c3d411",
        "name": "Pamela Nolan",
        "email": "pamelanolan@renovize.com",
        "phone": "+1 (986) 545-2166"
    },
    {
        "_id": "5a5664029a8dd82a6178b15f",
        "name": "Roy Cantu",
        "email": "roycantu@renovize.com",
        "phone": "+1 (929) 571-2295"
    },
    {
        "_id": "5a5664028c096d08eeb13a8a",
        "name": "Ollie Christian",
        "email": "olliechristian@renovize.com",
        "phone": "+1 (977) 419-3550"
    },
    {
        "_id": "5a5664026c53582bb9ebe9d1",
        "name": "Nguyen Walls",
        "email": "nguyenwalls@renovize.com",
        "phone": "+1 (963) 471-3181"
    },
    {
        "_id": "5a56640298ab77236845b82b",
        "name": "Glenna Santana",
        "email": "glennasantana@renovize.com",
        "phone": "+1 (860) 467-2376"
    },
    {
        "_id": "5a56640208fba3e8ecb97305",
        "name": "Malone Clark",
        "email": "maloneclark@renovize.com",
        "phone": "+1 (818) 565-2557"
    },
    {
        "_id": "5a566402abb3146207bc4ec5",
        "name": "Floyd Rutledge",
        "email": "floydrutledge@renovize.com",
        "phone": "+1 (807) 597-3629"
    },
    {
        "_id": "5a56640298500fead8cb1ee5",
        "name": "Grace James",
        "email": "gracejames@renovize.com",
        "phone": "+1 (959) 525-2529"
    },
    {
        "_id": "5a56640243427b8f8445231e",
        "name": "Tanner Gates",
        "email": "tannergates@renovize.com",
        "phone": "+1 (978) 591-2291"
    },
    {
        "_id": "5a5664025c3abdad6f5e098c",
        "name": "Lilly Conner",
        "email": "lillyconner@renovize.com",
        "phone": "+1 (842) 587-3812"
    }
];
class ContactService {
    constructor() {
        //mock the server
        this._contactsDb = CONTACTS;
        this._contacts$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.contacts$ = this._contacts$.asObservable();
    }
    loadContacts(filterBy = null) {
        let contacts = this._contactsDb;
        if (filterBy && filterBy.term) {
            contacts = this._filter(contacts, filterBy.term);
        }
        this._contacts$.next(this._sort(contacts));
    }
    getContactById(id) {
        //mock the server work
        const contact = this._contactsDb.find(contact => contact._id === id);
        //return an observable
        return contact ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(contact) : rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(`Contact id ${id} not found!`); //deprecated
    }
    deleteContact(id) {
        //mock the server work
        this._contactsDb = this._contactsDb.filter(contact => contact._id !== id);
        // change the observable data in the service - let all the subscribers know
        this._contacts$.next(this._contactsDb);
    }
    saveContact(contact) {
        console.log(`contact`, contact);
        return contact._id ? this._updateContact(contact) : this._addContact(contact);
    }
    getEmptyContact() {
        return {
            name: '',
            email: '',
            phone: ''
        };
    }
    _updateContact(contact) {
        //mock the server work
        this._contactsDb = this._contactsDb.map(c => contact._id === c._id ? contact : c);
        // change the observable data in the service - let all the subscribers know
        this._contacts$.next(this._sort(this._contactsDb));
    }
    _addContact(contact) {
        //mock the server work
        console.log(`contact`, contact);
        const newContact = new _models_contact_model__WEBPACK_IMPORTED_MODULE_2__["Contact"](contact.name, contact.phone, contact.email);
        console.log(`newContact`, newContact);
        newContact.setId();
        this._contactsDb.push(newContact);
        this._contacts$.next(this._sort(this._contactsDb));
    }
    _sort(contacts) {
        return contacts.sort((a, b) => {
            if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                return -1;
            }
            if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                return 1;
            }
            return 0;
        });
    }
    _filter(contacts, term) {
        term = term.toLocaleLowerCase();
        return contacts.filter(contact => {
            return contact.name.toLocaleLowerCase().includes(term) ||
                contact.phone.toLocaleLowerCase().includes(term) ||
                contact.email.toLocaleLowerCase().includes(term);
        });
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "64+1":
/*!**************************************************************!*\
  !*** ./src/app/pages/contact-page/contact-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/contact.service */ "3ITz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../cmps/contact-list/contact-list.component */ "QyWd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






class ContactPageComponent {
    constructor(contactService) {
        this.contactService = contactService;
    }
    ngOnInit() {
        // Before using the async pipe:
        // this.subscription = this.contactService.contacts$.subscribe(contacts => {
        //   this.contacts = contacts
        // })
        this.contactService.loadContacts();
        this.contacts$ = this.contactService.contacts$;
    }
}
ContactPageComponent.ɵfac = function ContactPageComponent_Factory(t) { return new (t || ContactPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"])); };
ContactPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactPageComponent, selectors: [["app-contact-page"]], decls: 9, vars: 3, consts: [[1, "contact-page"], ["routerLink", "/contact/edit", "routerLinkActive", "active", 1, "add-contact-btn"], [3, "contacts"]], template: function ContactPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-contact-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contacts", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 1, ctx.contacts$));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_3__["ContactListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".contact-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.contact-page[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  margin: 10px;\n  margin-bottom: 0;\n}\n.contact-page[_ngcontent-%COMP%]   .add-contact-btn[_ngcontent-%COMP%] {\n  font-size: 26px;\n  padding-bottom: 2px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.contact-page[_ngcontent-%COMP%]   .add-contact-btn[_ngcontent-%COMP%]:hover {\n  color: #ecc843;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbnRhY3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsU0FBQTtFQUVBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFDSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNSO0FBQVE7RUFDSSxjQUFBO0FBRVoiLCJmaWxlIjoiY29udGFjdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtcGFnZXtcbiAgICBkaXNwbGF5OiBmbGV4OyAgXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgICAuYWRkLWNvbnRhY3QtYnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIGNvbG9yOiAjZWNjODQzXG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-page',
                templateUrl: './contact-page.component.html',
                styleUrls: ['./contact-page.component.scss']
            }]
    }], function () { return [{ type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"] }]; }, null); })();


/***/ }),

/***/ "8FSX":
/*!********************************************************************!*\
  !*** ./src/app/pages/contact-details/contact-details.component.ts ***!
  \********************************************************************/
/*! exports provided: ContactDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailsComponent", function() { return ContactDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/contact.service */ "3ITz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cmps_transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../cmps/transfer-fund/transfer-fund.component */ "sLIO");





const _c0 = function (a1) { return ["/contact/edit", a1]; };
class ContactDetailsComponent {
    constructor(contactService, route, router) {
        this.contactService = contactService;
        this.route = route;
        this.router = router;
        this.imgPath = null;
    }
    ngOnInit() {
        console.log('Details Init!');
        this.subscription = this.route.data.subscribe(data => {
            this.contact = data.contact;
            this.imgPath = `https://robohash.org/${this.contact._id}`;
            window.scrollTo(0, 0);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onGoHome() {
        console.log('happend');
        this.router.navigateByUrl('/');
    }
}
ContactDetailsComponent.ɵfac = function ContactDetailsComponent_Factory(t) { return new (t || ContactDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ContactDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactDetailsComponent, selectors: [["app-contact-details"]], decls: 15, vars: 8, consts: [[1, "contact-details"], [1, "details-container"], ["alt", "", 3, "src"], [1, "main-details"], [1, "edit-btn", 3, "routerLink"], ["src", "../assets/img/edit.gif", "alt", ""], ["routerLink", "/contact", 1, "edit-btn"], ["src", "../assets/img/cancel-icon.png", "alt", ""], [3, "moveTo", "onGoHome"]], template: function ContactDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-transfer-fund", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onGoHome", function ContactDetailsComponent_Template_app_transfer_fund_onGoHome_14_listener() { return ctx.onGoHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.contact._id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moveTo", ctx.contact);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _cmps_transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_3__["TransferFundComponent"]], styles: [".contact-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.contact-details[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  margin: 10px;\n  margin-bottom: 20px;\n}\n.contact-details[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n}\n.contact-details[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%]   .main-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.contact-details[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%] {\n  padding: 10px;\n  align-self: flex-start;\n}\n.contact-details[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 15px;\n  filter: brightness(0) invert(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbnRhY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUdaO0FBRFE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBR1o7QUFDSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUNSO0FBQVE7RUFDSSxZQUFBO0VBRUEsK0JBQUE7QUFDWiIsImZpbGUiOiJjb250YWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1kZXRhaWxze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5kZXRhaWxzLWNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyAgXG4gICAgICAgIG1hcmdpbjogMTBweDsgXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7ICAgICBcbiAgICAgICAgPiBpbWd7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgfVxuICAgICAgICAubWFpbi1kZXRhaWxze1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBnYXA6IDVweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5lZGl0LWJ0bntcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgPmltZ3tcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgIC8vIGZpbHRlcjogaW52ZXJ0KDYlKSBzZXBpYSg1JSkgc2F0dXJhdGUoOTQwNyUpIGh1ZS1yb3RhdGUoMTUxNC4zZGVnKSBicmlnaHRuZXNzKDAlKSBjb250cmFzdCgwJSk7XG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-details',
                templateUrl: './contact-details.component.html',
                styleUrls: ['./contact-details.component.scss']
            }]
    }], function () { return [{ type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BYzK":
/*!*****************************************!*\
  !*** ./src/app/models/contact.model.ts ***!
  \*****************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
class Contact {
    constructor(name = '', phone = '', email = '', _id) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this._id = _id;
    }
    setId() {
        // Implement your own set Id
        // this._id = this.utilService.makeId()
        this._id = this.makeId();
    }
    makeId(length = 5) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}


/***/ }),

/***/ "IOHS":
/*!**************************************************************!*\
  !*** ./src/app/pages/contact-edit/contact-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactEditComponent", function() { return ContactEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact.service */ "3ITz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function ContactEditComponent_form_1_h3_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.contact.name);
} }
function ContactEditComponent_form_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "New Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactEditComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function ContactEditComponent_form_1_Template_form_submit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onSaveContact($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContactEditComponent_form_1_h3_2_Template, 2, 1, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ContactEditComponent_form_1_ng_template_5_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactEditComponent_form_1_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.contact.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactEditComponent_form_1_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.contact.phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactEditComponent_form_1_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.contact.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.contact.name)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.contact.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.contact.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.contact.email);
} }
function ContactEditComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ContactEditComponent {
    constructor(contactService, route, router) {
        this.contactService = contactService;
        this.route = route;
        this.router = router;
        this.imgPath = null;
    }
    ngOnInit() {
        console.log('Edit Init!');
        this.subscription = this.route.data.subscribe(data => {
            this.contact = data.contact || this.contactService.getEmptyContact();
            // console.log(`this.contact`, this.contact)
        });
        if (this.contact._id) {
            this.imgPath = `https://robohash.org/${this.contact._id}`;
        }
    }
    onSaveContact(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            ev.preventDefault();
            try {
                // await this.contactService.saveContact(this.contact).toPromise() 
                //the above line used toPromise when u get an observable from the service by of, etc
                console.log(`this.contact`, this.contact);
                yield this.contactService.saveContact(this.contact);
                this.router.navigateByUrl('/');
            }
            catch (err) {
                // this.errMsg = err
                console.log(err);
            }
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
ContactEditComponent.ɵfac = function ContactEditComponent_Factory(t) { return new (t || ContactEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ContactEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactEditComponent, selectors: [["app-contact-edit"]], decls: 4, vars: 2, consts: [[1, "contact-edit-page"], ["class", "edit-form", 3, "submit", 4, "ngIf", "ngIfElse"], ["loader", ""], [1, "edit-form", 3, "submit"], [1, "form-header"], ["class", "title", 4, "ngIf", "ngIfElse"], ["routerLink", "/contact", 1, "edit-btn"], ["src", "./assets/img/cancel-icon.png", "alt", "", 1, "cancel-btn"], ["newContactName", ""], ["type", "text", "id", "name", "name", "name", "placeholder", "Name", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "phone", "name", "phone", "placeholder", "Phone", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "email", "name", "email", "placeholder", "Email", 3, "ngModel", "ngModelChange"], [1, "pink-btn"], [1, "title"]], template: function ContactEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactEditComponent_form_1_Template, 12, 5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContactEditComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contact)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".contact-edit-page[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.contact-edit-page[_ngcontent-%COMP%]   .edit-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-width: 350px;\n}\n.contact-edit-page[_ngcontent-%COMP%]   .edit-form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.contact-edit-page[_ngcontent-%COMP%]   .edit-form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n  height: 15px;\n  filter: invert(1);\n}\n.contact-edit-page[_ngcontent-%COMP%]   .edit-form[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.contact-edit-page[_ngcontent-%COMP%]   .edit-form[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 120px;\n  width: 120px;\n  margin-bottom: 10px;\n}\n.contact-edit-page[_ngcontent-%COMP%]   .edit-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 20px;\n  border-radius: 3px;\n  border: none;\n  padding: 5px 10px;\n  margin-bottom: 10px;\n  max-width: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbnRhY3QtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNSO0FBQVE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFFWjtBQURZO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBR2hCO0FBQVE7RUFDSSxtQkFBQTtBQUVaO0FBQVE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRVo7QUFBUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFFWiIsImZpbGUiOiJjb250YWN0LWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1lZGl0LXBhZ2V7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbiAgICAuZWRpdC1mb3Jte1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgICAgIC5mb3JtLWhlYWRlcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAuY2FuY2VsLWJ0bntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgID4gaW1ne1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXR7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContactEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-contact-edit',
                templateUrl: './contact-edit.component.html',
                styleUrls: ['./contact-edit.component.scss']
            }]
    }], function () { return [{ type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "L8zA":
/*!*******************************************************!*\
  !*** ./src/app/cmps/move-list/move-list.component.ts ***!
  \*******************************************************/
/*! exports provided: MoveListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveListComponent", function() { return MoveListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _transaction_preview_transaction_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transaction-preview/transaction-preview.component */ "gEUI");




function MoveListComponent_app_transaction_preview_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-transaction-preview", 3);
} if (rf & 2) {
    const transaction_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("transaction", transaction_r1);
} }
class MoveListComponent {
    constructor() { }
    ngOnInit() {
    }
}
MoveListComponent.ɵfac = function MoveListComponent_Factory(t) { return new (t || MoveListComponent)(); };
MoveListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoveListComponent, selectors: [["app-move-list"]], inputs: { transactions: "transactions" }, decls: 4, vars: 1, consts: [[1, "move-list"], [1, "moves-title"], [3, "transaction", 4, "ngFor", "ngForOf"], [3, "transaction"]], template: function MoveListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Moves:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MoveListComponent_app_transaction_preview_3_Template, 1, 1, "app-transaction-preview", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.transactions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _transaction_preview_transaction_preview_component__WEBPACK_IMPORTED_MODULE_2__["TransactionPreviewComponent"]], styles: [".move-list[_ngcontent-%COMP%]   .moves-title[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.move-list[_ngcontent-%COMP%]:last-child {\n  border-bottom: 1px solid whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vdmUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG1CQUFBO0FBQVI7QUFFSTtFQUNJLG1DQUFBO0FBQVIiLCJmaWxlIjoibW92ZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmUtbGlzdHtcbiAgICAubW92ZXMtdGl0bGV7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoveListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-move-list',
                templateUrl: './move-list.component.html',
                styleUrls: ['./move-list.component.scss']
            }]
    }], function () { return []; }, { transactions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "QyWd":
/*!*************************************************************!*\
  !*** ./src/app/cmps/contact-list/contact-list.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact-preview/contact-preview.component */ "2uUW");




function ContactListComponent_app_contact_preview_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-contact-preview", 2);
} if (rf & 2) {
    const contact_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contact", contact_r1);
} }
class ContactListComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactListComponent.ɵfac = function ContactListComponent_Factory(t) { return new (t || ContactListComponent)(); };
ContactListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactListComponent, selectors: [["app-contact-list"]], inputs: { contacts: "contacts" }, decls: 2, vars: 1, consts: [[1, "contact-list"], [3, "contact", 4, "ngFor", "ngForOf"], [3, "contact"]], template: function ContactListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactListComponent_app_contact_preview_1_Template, 1, 1, "app-contact-preview", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contacts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_2__["ContactPreviewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-list',
                templateUrl: './contact-list.component.html',
                styleUrls: ['./contact-list.component.scss']
            }]
    }], function () { return []; }, { contacts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cmps/app-header/app-header.component */ "uOz6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__["AppHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ThA2":
/*!************************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.component.ts ***!
  \************************************************************/
/*! exports provided: SignupPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageComponent", function() { return SignupPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SignupPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
SignupPageComponent.ɵfac = function SignupPageComponent_Factory(t) { return new (t || SignupPageComponent)(); };
SignupPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupPageComponent, selectors: [["app-signup-page"]], decls: 2, vars: 0, template: function SignupPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "signup-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup-page',
                templateUrl: './signup-page.component.html',
                styleUrls: ['./signup-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cmps/app-header/app-header.component */ "uOz6");
/* harmony import */ var _cmps_contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cmps/contact-preview/contact-preview.component */ "2uUW");
/* harmony import */ var _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cmps/contact-list/contact-list.component */ "QyWd");
/* harmony import */ var _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/contact-edit/contact-edit.component */ "IOHS");
/* harmony import */ var _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/contact-page/contact-page.component */ "64+1");
/* harmony import */ var _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/contact-details/contact-details.component */ "8FSX");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/signup-page/signup-page.component */ "ThA2");
/* harmony import */ var _cmps_transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cmps/transfer-fund/transfer-fund.component */ "sLIO");
/* harmony import */ var _cmps_transaction_preview_transaction_preview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cmps/transaction-preview/transaction-preview.component */ "gEUI");
/* harmony import */ var _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cmps/move-list/move-list.component */ "L8zA");




// import { HomeComponent } from './pages/home/home.component';














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_5__["AppHeaderComponent"],
        _cmps_contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_6__["ContactPreviewComponent"],
        _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_7__["ContactListComponent"],
        _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_8__["ContactEditComponent"],
        _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_9__["ContactPageComponent"],
        _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_10__["ContactDetailsComponent"],
        _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_13__["SignupPageComponent"],
        _cmps_transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_14__["TransferFundComponent"],
        _cmps_transaction_preview_transaction_preview_component__WEBPACK_IMPORTED_MODULE_15__["TransactionPreviewComponent"],
        _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_16__["MoveListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_5__["AppHeaderComponent"],
                    _cmps_contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_6__["ContactPreviewComponent"],
                    _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_7__["ContactListComponent"],
                    _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_8__["ContactEditComponent"],
                    _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_9__["ContactPageComponent"],
                    _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_10__["ContactDetailsComponent"],
                    _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_13__["SignupPageComponent"],
                    _cmps_transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_14__["TransferFundComponent"],
                    _cmps_transaction_preview_transaction_preview_component__WEBPACK_IMPORTED_MODULE_15__["TransactionPreviewComponent"],
                    _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_16__["MoveListComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ePKA":
/*!******************************************************!*\
  !*** ./src/app/services/contact-resolver.service.ts ***!
  \******************************************************/
/*! exports provided: ContactResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactResolverService", function() { return ContactResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.service */ "3ITz");



class ContactResolverService {
    constructor(contactService) {
        this.contactService = contactService;
    }
    resolve(route) {
        const { id } = route.params;
        return this.contactService.getContactById(id);
        // .pipe(
        //   catchError(err => this.msgService.sendAlert(err))
        // )
    }
}
ContactResolverService.ɵfac = function ContactResolverService_Factory(t) { return new (t || ContactResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"])); };
ContactResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactResolverService, factory: ContactResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"] }]; }, null); })();


/***/ }),

/***/ "gEUI":
/*!***************************************************************************!*\
  !*** ./src/app/cmps/transaction-preview/transaction-preview.component.ts ***!
  \***************************************************************************/
/*! exports provided: TransactionPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPreviewComponent", function() { return TransactionPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class TransactionPreviewComponent {
    constructor() { }
    ngOnInit() {
    }
}
TransactionPreviewComponent.ɵfac = function TransactionPreviewComponent_Factory(t) { return new (t || TransactionPreviewComponent)(); };
TransactionPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionPreviewComponent, selectors: [["app-transaction-preview"]], inputs: { transaction: "transaction" }, decls: 9, vars: 6, consts: [[1, "transaction-preview"], [1, "main-details"], [1, "trans-time"], [3, "ngClass"]], template: function TransactionPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.transaction.to.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("transaction completed: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.transaction.time), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.transaction.amount < 0 ? "pos-amount" : "neg-amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20BF ", ctx.transaction.amount * -1, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".transaction-preview[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0px;\n  border-top: 1px solid whitesmoke;\n}\n.transaction-preview[_ngcontent-%COMP%]   .main-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.transaction-preview[_ngcontent-%COMP%]   .main-details[_ngcontent-%COMP%]   .trans-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.transaction-preview[_ngcontent-%COMP%]   .pos-amount[_ngcontent-%COMP%] {\n  color: greenyellow;\n}\n.transaction-preview[_ngcontent-%COMP%]   .neg-amount[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RyYW5zYWN0aW9uLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFFQSxnQkFBQTtFQUNBLGdDQUFBO0FBQUo7QUFDSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUNSO0FBQVE7RUFDSSxlQUFBO0FBRVo7QUFDSTtFQUNJLGtCQUFBO0FBQ1I7QUFDSTtFQUNJLFVBQUE7QUFDUiIsImZpbGUiOiJ0cmFuc2FjdGlvbi1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYW5zYWN0aW9uLXByZXZpZXd7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLy8gbWFyZ2luLXRvcDogNXB4O1xuICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlc21va2U7XG4gICAgLm1haW4tZGV0YWlsc3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLnRyYW5zLXRpbWV7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnBvcy1hbW91bnR7XG4gICAgICAgIGNvbG9yOiBncmVlbnllbGxvd1xuICAgIH1cbiAgICAubmVnLWFtb3VudHtcbiAgICAgICAgY29sb3I6IHJlZFxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transaction-preview',
                templateUrl: './transaction-preview.component.html',
                styleUrls: ['./transaction-preview.component.scss']
            }]
    }], function () { return []; }, { transaction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "n90K":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StorageService {
    constructor() { }
    loadFromStorage(entityType) {
        const entities = localStorage.getItem(entityType);
        return JSON.parse(entities);
    }
    saveToStorage(entityType, entities) {
        localStorage.setItem(entityType, JSON.stringify(entities));
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ "n90K");



class UserService {
    constructor(storageService) {
        this.storageService = storageService;
        this.USER_KEY = 'user';
        this.user = null;
    }
    getUser() {
        let user = this.storageService.loadFromStorage(this.USER_KEY);
        if (!user) {
            user = {
                name: "Ochoa Hyde",
                coins: 100,
                moves: []
            };
            this.storageService.saveToStorage(this.USER_KEY, user);
        }
        // console.log('user', user);
        this.user = user;
        return user;
    }
    onTransferCoins(transaction) {
        //update users moves array and decrease his coins amount
        if (!this.user)
            this.getUser();
        this.user.coins = this.user.coins - +transaction.amount;
        transaction.time = Date.now();
        //move function
        this.addMove(transaction);
        this.storageService.saveToStorage(this.USER_KEY, this.user);
    }
    addMove(transaction) {
        this.user.moves.unshift(transaction);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "sLIO":
/*!***************************************************************!*\
  !*** ./src/app/cmps/transfer-fund/transfer-fund.component.ts ***!
  \***************************************************************/
/*! exports provided: TransferFundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferFundComponent", function() { return TransferFundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_bitcoin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/bitcoin.service */ "0NuV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function TransferFundComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "($ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r1.transaction.amount * _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r1.bitcoinRate)).toLocaleString());
} }
class TransferFundComponent {
    constructor(userService, bitcoinService) {
        this.userService = userService;
        this.bitcoinService = bitcoinService;
        this.onGoHome = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.bitcoinRate = null;
        this.transaction = {
            amount: '',
            to: {
                id: '',
                name: ''
            },
            time: ''
        };
    }
    ngOnInit() {
        this.bitcoinRate = this.bitcoinService.getBitcoinRate();
        this.transaction.to.id = this.moveTo._id;
        this.transaction.to.name = this.moveTo.name;
    }
    onTransferCoins(form) {
        this.userService.onTransferCoins(this.transaction);
        this.onGoHome.emit();
        // console.log('transfer form sent', this.transaction.amount)
    }
}
TransferFundComponent.ɵfac = function TransferFundComponent_Factory(t) { return new (t || TransferFundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bitcoin_service__WEBPACK_IMPORTED_MODULE_2__["BitcoinService"])); };
TransferFundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransferFundComponent, selectors: [["app-transfer-fund"]], inputs: { moveTo: "moveTo" }, outputs: { onGoHome: "onGoHome" }, decls: 7, vars: 2, consts: [[1, "transfer-fund"], [3, "ngSubmit"], ["form", "ngForm"], ["name", "amount", "minlength", "1", "placeholder", "Amount of coins", "autocomplete", "off", 3, "ngModel", "ngModelChange"], [1, "pink-btn"], [4, "ngIf"]], template: function TransferFundComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TransferFundComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onTransferCoins(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransferFundComponent_Template_input_ngModelChange_3_listener($event) { return ctx.transaction.amount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TransferFundComponent_p_6_Template, 6, 3, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.transaction.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.transaction.amount);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".transfer-fund[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.transfer-fund[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  margin-bottom: 5px;\n}\n.transfer-fund[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n}\n.transfer-fund[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RyYW5zZmVyLWZ1bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQUVSO0FBRFE7RUFDSSxpQkFBQTtBQUdaO0FBRFE7RUFDSSxZQUFBO0FBR1oiLCJmaWxlIjoidHJhbnNmZXItZnVuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFuc2Zlci1mdW5ke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb3Jte1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBpbnB1dHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransferFundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transfer-fund',
                templateUrl: './transfer-fund.component.html',
                styleUrls: ['./transfer-fund.component.scss']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: src_app_services_bitcoin_service__WEBPACK_IMPORTED_MODULE_2__["BitcoinService"] }]; }, { moveTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onGoHome: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "uOz6":
/*!*********************************************************!*\
  !*** ./src/app/cmps/app-header/app-header.component.ts ***!
  \*********************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return { exact: true }; };
class AppHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(); };
AppHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppHeaderComponent, selectors: [["app-header"]], decls: 8, vars: 2, consts: [[1, "app-header"], ["routerLink", "/"], ["src", "../assets/img/bitcoin-logo.png", "alt", ""], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/contact", "routerLinkActive", "active"]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".app-header[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 10px;\n}\n.app-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 30px;\n}\n.app-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]:hover {\n  filter: saturate(4.5);\n}\n.app-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n.app-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .active-nav[_ngcontent-%COMP%] {\n  color: #121d33;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBRUEsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFKO0FBR007RUFDRSxZQUFBO0FBRFI7QUFFUTtFQUNFLHFCQUFBO0FBQVY7QUFLSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUFITjtBQUtNO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBSFIiLCJmaWxlIjoiYXBwLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzEyMWQzMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgIC8vIGNvbG9yOiB3aGl0ZTtcbiAgICBhe1xuICAgICAgPmltZ3tcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAmOmhvdmVye1xuICAgICAgICAgIGZpbHRlcjogc2F0dXJhdGUoNC41KTtcbiAgICAgICAgfVxuICAgICAgfSBcbiAgICB9XG4gICAgICBcbiAgICBuYXYge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZ2FwOiAxMHB4O1xuICBcbiAgICAgIC5hY3RpdmUtbmF2IHtcbiAgICAgICAgY29sb3I6ICMxMjFkMzM7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './app-header.component.html',
                styleUrls: ['./app-header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact-details/contact-details.component */ "8FSX");
/* harmony import */ var _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact-edit/contact-edit.component */ "IOHS");
/* harmony import */ var _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/contact-page/contact-page.component */ "64+1");
/* harmony import */ var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/signup-page/signup-page.component */ "ThA2");
/* harmony import */ var _services_contact_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/contact-resolver.service */ "ePKA");


// import { HomeComponent } from './pages/home/home.component';








const routes = [
    // { path: 'pet/:id', component: PetDetailsComponent, canActivate: [AuthGuard], resolve: { pet: PetResolverService } },
    // { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
    // {
    //   path: '', component: PetAppComponent, // pathMatch:'full' like exact in react, here we dont need it
    //   children: [
    //     { path: 'edit/:id', component: PetEditComponent, resolve: { pet: PetResolverService } },
    //     { path: 'edit', component: PetEditComponent },
    //   ]
    // },
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    {
        path: 'contact', component: _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_5__["ContactPageComponent"],
        children: [
            { path: 'edit/:id', component: _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_4__["ContactEditComponent"], pathMatch: 'full', resolve: { contact: _services_contact_resolver_service__WEBPACK_IMPORTED_MODULE_7__["ContactResolverService"] } },
            { path: 'edit', component: _pages_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_4__["ContactEditComponent"], pathMatch: 'full' },
            { path: ':id', component: _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_3__["ContactDetailsComponent"], resolve: { contact: _services_contact_resolver_service__WEBPACK_IMPORTED_MODULE_7__["ContactResolverService"] } },
        ]
    },
    // { path: 'contact/:id', component: ContactDetailsComponent, resolve: { contact: ContactResolverService } },
    { path: 'signup', component: _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_6__["SignupPageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map