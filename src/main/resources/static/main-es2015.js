(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-company/add-company.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-company/add-company.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar></app-nav-bar>\r\n<div class=\"ui-g-12 ui-g\">\r\n<div class=\"ui-lg-6 ui-md-6 ui-sm-12\">\r\n    <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"goBack()\" style=\"width:45%;margin-left:30%;background: #479761;; \"\r\n        label=\"Back\"></button>\r\n</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    </div>\r\n\r\n<h1 class=\"heading\">Company Registration</h1>\r\n\r\n<hr\r\n  style=\"height: 1px; background-color: green; width: 80%; margin-left: 12%\"\r\n/>\r\n<div class=\"container\">\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-md-12 ui-lg-12 ui-sm-12\">\r\n      <p-card\r\n        header=\"\"\r\n        [style]=\"{\r\n          width: '95%',\r\n          'font-size': '15px',\r\n          'margin-left': '5.5%',\r\n          'text-align': 'left',\r\n          color: 'green'\r\n        }\"\r\n      >\r\n      <p-toast></p-toast>\r\n        <h4 style=\"color: green; font-weight: bold\">Add Company :</h4>\r\n        <hr\r\n          style=\"height:2px;width:100%;background-color:green; margin-left: 1px;\"\r\n        />\r\n        <div class=\"ui-g ui-fluid\">\r\n                <form\r\n                  style=\"width:100%;\"\r\n                  #myForm=\"ngForm\"\r\n                  (ngSubmit)=\"submitcompany(); myForm.reset()\"\r\n                >\r\n                <div class=\"ui-g\">\r\n                        <!-- <div class=\"ui-md-3 ui-lg-3\"></div> -->\r\n                        <div class=\"ui-md-12 ui-lg-12 ui-sm-12\">\r\n                          <div class=\"ui-inputgroup\">\r\n                            <span\r\n                              class=\"ui-inputgroup-addon\"\r\n                              style=\"width: 50%;font-size:15px;\"\r\n                              >Company Name <i style=\"color: red\">*</i></span\r\n                            >\r\n                            <input\r\n                              type=\"text\"\r\n                              required\r\n                              style=\"width: 100%\"\r\n                              name=\"productname\"\r\n                              pInputText\r\n                              [(ngModel)]=\"company.name\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"ui-md-12 ui-lg-12 ui-sm-12\">\r\n                                <div class=\"ui-inputgroup\">\r\n                                  <span\r\n                                    class=\"ui-inputgroup-addon\"\r\n                                    style=\"width: 50%;font-size:15px;\"\r\n                                    >Discount <i style=\"color: red\">*</i></span\r\n                                  >\r\n                                  <input\r\n                                    type=\"text\"\r\n                                    required\r\n                                    style=\"width: 100%\"\r\n                                    name=\"productname\"\r\n                                    pInputText\r\n                                    [(ngModel)]=\"company.discount\"\r\n                                  />\r\n                                </div>\r\n                              </div>\r\n\r\n                              \r\n                                    <div class=\"ui-md-3 ui-lg-3 ui-sm-12\"></div>\r\n                                    <div class=\"ui-md-6 ui-lg-6 ui-sm-12\">\r\n\r\n                                            <button\r\n                                            pButton\r\n                                            type=\"submit\"\r\n                                            label=\"Save\"\r\n                                            [disabled]=\"myForm.form.invalid\"\r\n                                            style=\"margin-top: 0px; background-color:#479761;width:100%;\"\r\n                                            class=\"colorSetAllButtons\"\r\n                                          ></button>\r\n\r\n                                        </div>\r\n                                        <div class=\"ui-md-3 ui-lg-3 ui-sm-12\"></div>\r\n                                \r\n                              \r\n</div>\r\n</form>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </p-card>\r\n        </div>\r\n        </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n <!-- <app-nav-bar></app-nav-bar>  -->\r\n\r\n<router-outlet></router-outlet> \r\n<!-- <app-qrcode></app-qrcode> -->\r\n\r\n<!-- <app-sales-mainscreen></app-sales-mainscreen> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company-list/company-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company-list/company-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar></app-nav-bar>\r\n<div class=\"ui-g\">\r\n<div class=\"ui-g-12 ui-g\">\r\n        <div class=\"ui-lg-6 ui-md-6 ui-sm-12\">\r\n           </div>\r\n\r\n        <div class=\"ui-lg-6 ui-md-6 ui-sm-12\">\r\n                <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"routetoaddcompany()\" style=\"width:45%;margin-left:30%;background: #479761;; \"\r\n                    label=\"Add New Company\"></button>\r\n            </div>\r\n       </div>\r\n       </div>\r\n\r\n <p-card header=\"\" [style]=\"{  width: '90%',\r\n'font-size': '20px',\r\n'text-align': 'center',\r\ncolor: 'green',\r\n'margin-left':'5.5%',\r\n'margin-right':'5.5%'\r\n}\">\r\n\r\n<p-toast></p-toast>\r\n\r\n    <p-table #dt [columns]=\"cols\" [value]=\"companydata\" [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\">\r\n        <ng-template pTemplate=\"caption\">\r\n                <div class=\"ui-g-12\">\r\n                        <h2 style=\"font-weight:bold;color: green;\">ADD COMPANY</h2>\r\n                        <hr style=\"background-color:rgb(11, 92, 58);height:3px;\" />\r\n                    </div>\r\n            <div style=\"text-align: right\">\r\n                <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n                <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\" />\r\n            </div>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{ col.header }}\r\n                </th>\r\n                <th style=\"text-align: center;\">\r\n                    Actions\r\n                </th>\r\n            </tr>\r\n          \r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr [pSelectableRow]=\"rowData\">\r\n                <td *ngFor=\"let col of columns\" style=\"overflow: auto;\">\r\n                    {{ rowData[col.field] }}\r\n                </td>\r\n                <td>\r\n                        <button pButton [ngStyle]=\"{width:'100px',margin:'8px'}\" type=\"button\" label=\"Delete\" class=\"ui-button-danger\"  (click)=\"deletecompanybyid(rowData['id'])\"></button>\r\n                    <!-- <button pButton type=\"button\" (click)=\"deletePanelByID(rowData['id'])\" class=\"ui-button-danger\" style=\"width:20%;height: 50px; margin-left: 40%; \"> -->\r\n         \r\n          <!-- </button> -->\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</p-card>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin-left:10%;width:80%;\">\r\n    <div class=\"ui-g\">\r\n\r\n\r\n        <div class=\"ui-g-12\">\r\n            <p-toast></p-toast>\r\n            <p-card header=\"Dashboard\" [style]=\"{\r\n          width: '100%',\r\n          'font-size': '24px',\r\n          'text-align': 'center',\r\n          'color': 'green',\r\n          'padding-bottom': '5px'\r\n        }\">\r\n                <div class=\"ui-g-fluid \">\r\n                    <hr style=\"height:2px;width:100%;background-color:green\" />\r\n                    <div style=\"width: 100%\" class=\"ui-g\">\r\n                        <div class=\"ui-g-3 ui-sm-12  ui-md-4   ui-lg-4\">\r\n                            <label style=\"font-size: 25px !important \"> Today: </label>\r\n                            <label\r\n                                style=\"font-size:22px !important;color:black;margin-left:10px; text-decoration:underline  \">\r\n                                {{ showdate }}</label>\r\n                        </div>\r\n                        <div class=\"ui-g-9 ui-sm-12  ui-md-8   ui-lg-8\"></div>\r\n\r\n\r\n                        <div style=\"width: 100%\" class=\"ui-g ui-inputgroup \">\r\n                            <div class=\"ui-g-1 ui-sm-12  ui-md-1   ui-lg-1\"></div>\r\n                            <div class=\"ui-g-5 ui-sm-12  ui-md-5   ui-lg-5\">\r\n                                <span class=\"ui-inputgroup-addon \" style=\"font-size:14px\">From </span>\r\n                                <p-calendar name=\"filterByDate\" required [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                                    yearRange=\"1947:2090\" showButtonBar=\"true\" placeholder=\"Select Date\">\r\n                                </p-calendar>\r\n                            </div>\r\n                            <div class=\"ui-g-1 ui-sm-12  ui-md-1   ui-lg-1\"></div>\r\n                            <div class=\"ui-g-5 ui-sm-12  ui-md-5   ui-lg-5\">\r\n                                <span class=\"ui-inputgroup-addon \" style=\"font-size:14px;padding-right:20px\">Till  </span>\r\n                                <p-calendar name=\"filterByDate\" required [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                                    yearRange=\"1947:2090\" showButtonBar=\"true\" placeholder=\"Select Date\">\r\n                                </p-calendar>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div style=\"width: 100%\" class=\"ui-g\">\r\n                            <div class=\"ui-g-3 ui-sm-12  ui-md-3   ui-lg-4\"></div>\r\n                            <div class=\"ui-g-3 ui-sm-12  ui-md-6   ui-lg-4\">\r\n                                <button pButton type=\"button\" class=\"backBtnStyle\"\r\n                                    style=\"width:90%;margin-left:5%;  height:40px;\" label=\"Filter\"></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </p-card>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12\">\r\n            <p-card [style]=\"{\r\n          width: '100%',\r\n          overflow: 'hidden',\r\n          'margin-top': '0px'\r\n        }\">\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-xl-4 col-sm-6 py-2\">\r\n                        <div class=\"card bg-success text-white h-100\">\r\n                            <div class=\"card-body bg-success\">\r\n                                <h6 class=\"text-uppercase\">Total Sales:</h6>\r\n                                <h1 class=\"display-4\">{{ 343223 }}</h1>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xl-4 col-sm-6 py-2\">\r\n                        <div class=\"card text-white bg-success h-100\">\r\n                            <div class=\"card-body bg-danger\">\r\n                                <h6 class=\"text-uppercase\">Out of stock Products:</h6>\r\n                                <h1 class=\"display-4\">{{ 12 }}</h1>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xl-4 col-sm-6 py-2\">\r\n                        <div class=\"card text-white bg-info h-100\">\r\n                            <div class=\"card-body\">\r\n                                <h6 class=\"text-uppercase\">Running Products:</h6>\r\n                                <h1 class=\"display-4\">{{ 34 }}</h1>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </p-card>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drug-formation-list/drug-formation-list.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drug-formation-list/drug-formation-list.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar></app-nav-bar>\r\n<div class=\"ui-g\">\r\n<div class=\"ui-g-12 ui-g\">\r\n        <div class=\"ui-lg-6 ui-md-6 ui-sm-12\">\r\n           \r\n        </div>\r\n\r\n        <div class=\"ui-lg-6 ui-md-6 ui-sm-12\">\r\n                <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"routetoDrugFormation()\" style=\"width:45%;margin-left:30%;background: #479761;; \"\r\n                    label=\"Add New Drug Formation\"></button>\r\n            </div>\r\n       </div>\r\n       </div>\r\n\r\n <p-card header=\"\" [style]=\"{  width: '90%',\r\n'font-size': '20px',\r\n'text-align': 'center',\r\ncolor: 'green',\r\n'margin-left':'5.5%',\r\n'margin-right':'5.5%'\r\n}\">\r\n<p-toast> </p-toast>\r\n    \r\n    <p-table #dt [columns]=\"cols\" [value]=\"drugFormationData\" [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\">\r\n        <ng-template pTemplate=\"caption\">\r\n                <div class=\"ui-g-12\">\r\n                        <h2 style=\"font-weight:bold;color: green;\">DRUGFORMATION LIST </h2>\r\n                        <hr style=\"background-color:rgb(11, 92, 58);height:3px;\" />\r\n                    </div>\r\n            <div style=\"text-align: right\">\r\n                <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n                <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\" />\r\n            </div>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{ col.header }}\r\n                </th>\r\n                <th style=\"text-align: center;\">\r\n                    Actions\r\n                </th>\r\n            </tr>\r\n          \r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr [pSelectableRow]=\"rowData\">\r\n                <td *ngFor=\"let col of columns\" style=\"overflow: auto;\">\r\n                    {{ rowData[col.field] }}\r\n                </td>\r\n                <td>\r\n                        <button pButton [ngStyle]=\"{width:'100px',margin:'8px'}\" type=\"button\" label=\"Delete\" class=\"ui-button-danger\"  (click)=\"deletecompanybyid(rowData['id'])\"></button>\r\n                    <!-- <button pButton type=\"button\" (click)=\"deletePanelByID(rowData['id'])\" class=\"ui-button-danger\" style=\"width:20%;height: 50px; margin-left: 40%; \"> -->\r\n         \r\n          <!-- </button> -->\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</p-card>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drug-formation/drug-formation.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drug-formation/drug-formation.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar></app-nav-bar>\r\n\r\n<div class=\"ui-g-12 ui-g\">\r\n    <div class=\"ui-lg-6 ui-md-6 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"goBack()\" style=\"width:45%;margin-left:30%;background: #479761;; \"\r\n            label=\"Back\"></button>\r\n    </div>\r\n    </div>\r\n    \r\n    <div class=\"row\">\r\n        </div>\r\n    \r\n    <h1 class=\"heading\"> Drug Formation</h1>\r\n    \r\n    <hr\r\n      style=\"height: 1px; background-color: green; width: 80%; margin-left: 12%\"\r\n    />\r\n    <div class=\"container\">\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-md-12 ui-lg-12 ui-sm-12\">\r\n          <p-card\r\n            header=\"\"\r\n            [style]=\"{\r\n              width: '95%',\r\n              'font-size': '15px',\r\n              'margin-left': '5.5%',\r\n              'text-align': 'left',\r\n              color: 'green'\r\n            }\"\r\n          >\r\n          <p-toast></p-toast>\r\n            <h4 style=\"color: green; font-weight: bold\">Add a new Drug Formation:</h4>\r\n            <hr\r\n              style=\"height:2px;width:100%;background-color:green; margin-left: 1px;\"\r\n            />\r\n            <div class=\"ui-g ui-fluid\">\r\n                    <form\r\n                      style=\"width:100%;\"\r\n                      #myForm=\"ngForm\"\r\n                      (ngSubmit)=\"submitdrugFormation(); myForm.reset()\"\r\n                    >\r\n                    <div class=\"ui-g\">\r\n                            <!-- <div class=\"ui-md-3 ui-lg-3\"></div> -->\r\n                            <div class=\"ui-md-12 ui-lg-12 ui-sm-12\">\r\n                              <div class=\"ui-inputgroup\">\r\n                                <span\r\n                                  class=\"ui-inputgroup-addon\"\r\n                                  style=\"width: 50%;font-size:15px;\"\r\n                                  >Drug Formation Type <i style=\"color: red\">*</i></span\r\n                                >\r\n                                <input\r\n                                  type=\"text\"\r\n                                  required\r\n                                  style=\"width: 100%\"\r\n                                  name=\"productname\"\r\n                                  pInputText\r\n                                  [(ngModel)]=\"drugformation.type\"\r\n                                  \r\n                                />\r\n                              </div>\r\n                            </div>\r\n                            \r\n                          \r\n                                  \r\n                                        <div class=\"ui-md-3 ui-lg-3 ui-sm-12\"></div>\r\n                                        <div class=\"ui-md-6 ui-lg-6 ui-sm-12\">\r\n    \r\n                                                <button\r\n                                                pButton\r\n                                                type=\"submit\"\r\n                                                label=\"Save\"\r\n                                                [disabled]=\"myForm.form.invalid\"\r\n                                                style=\"margin-top: 0px; background-color:#479761;width:100%;\"\r\n                                                class=\"colorSetAllButtons\"\r\n                                              ></button>\r\n    \r\n                                            </div>\r\n                                            <div class=\"ui-md-3 ui-lg-3 ui-sm-12\"></div>\r\n                                    \r\n                                  \r\n    </div>\r\n    </form>\r\n    </div>\r\n    \r\n </p-card>\r\n            </div>\r\n            </div>\r\n    </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/grn-detail/grn-detail.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/grn-detail/grn-detail.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar></app-nav-bar>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-lg-6 ui-md-6 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"routeToGrnList()\"\r\n            style=\"width:45%;margin-left:30%;background: #479761;; \" label=\"Back\"></button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-1\">\r\n    </div>\r\n    <div class=\"ui-g-10\">\r\n\r\n        <p-card [style]=\"{\r\n                width: '100%',\r\n                'font-size': '16px',\r\n              \r\n                'margin-top':'60px'\r\n              }\">\r\n\r\n            <h4 style=\"text-align: center;color: green; font-weight: bold\">GRN DETAILS:</h4>\r\n            <hr style=\"height:2px;width:100%;background-color:green; margin-left: 1px;\" />\r\n\r\n            <form class=\"ui-g ui-fluid\" #myForm=\"ngForm\" (ngSubmit)=\"submitGrn(myForm.value,myForm);\">\r\n\r\n\r\n                <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <label style=\"margin-right: 20px;font-weight: bold;\"> Company:\r\n                        </label>\r\n                        <span>{{grn.company.name}}</span>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n\r\n\r\n                <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <label style=\"margin-right: 20px;font-weight: bold;\"> Invoice:\r\n                        </label>\r\n                        <span>{{grn.invoice}}</span>\r\n\r\n                    </div>\r\n\r\n\r\n\r\n                </div>\r\n\r\n                <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <label style=\"margin-right: 20px;font-weight: bold;\"> Received By:\r\n                        </label>\r\n                        <span>{{grn.receivedBy}}</span>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <label style=\"margin-right: 20px;font-weight: bold;\"> Product Name:\r\n                        </label>\r\n                        <span>{{grn.productName}}</span>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <label style=\"margin-right: 20px;font-weight: bold;\"> Packing:\r\n                        </label>\r\n                        <span>{{grn.packing}}</span>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <label style=\"margin-right: 20px;font-weight: bold;\"> Req Quantity:\r\n                        </label>\r\n                        <span>{{grn.requiredQuantity}}</span>\r\n\r\n                    </div>\r\n\r\n\r\n                </div>\r\n\r\n                <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <label style=\"margin-right: 20px;font-weight: bold;\"> Bonus Quantity:\r\n                        </label>\r\n                        <span>{{grn.bonusQuantity}}</span>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n                <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <label style=\"margin-right: 20px;font-weight: bold;\"> Box Tip:\r\n                        </label>\r\n                        <span>{{grn.boxTip}}</span>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <label style=\"margin-right: 20px;font-weight: bold;\"> Discount:\r\n                        </label>\r\n                        <span>{{grn.discount}}</span>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <label style=\"margin-right: 20px;font-weight: bold;\"> Discount Amount:\r\n                        </label>\r\n                        <span>{{grn.discountedAmount}}</span>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n\r\n                <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <label style=\"margin-right: 20px;font-weight: bold;\"> Box Rate:\r\n                        </label>\r\n                        <span>{{grn.boxRate}}</span>\r\n\r\n                    </div>\r\n\r\n\r\n                </div>\r\n                <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <label style=\"margin-right: 20px;font-weight: bold;\"> Product TotalAmount:\r\n                        </label>\r\n                        <span>{{grn.productTotalAmount}}</span>\r\n\r\n                    </div>\r\n\r\n\r\n                </div>\r\n\r\n\r\n\r\n            </form>\r\n\r\n        </p-card>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/grn-form/grn-form.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/grn-form/grn-form.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar></app-nav-bar>\r\n\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-lg-6 ui-md-6 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"routeToGrnList()\"\r\n            style=\"width:45%;margin-left:30%;background: #479761;; \" label=\"Back\"></button>\r\n    </div>\r\n</div>\r\n<p-toast position=\"top-right\"></p-toast>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-1\">\r\n    </div>\r\n    <div class=\"ui-g-11\">\r\n\r\n        <p-card [style]=\"{\r\n            width: '100%',\r\n            'font-size': '16px',\r\n            color: 'green',\r\n            'margin-top':'20px'\r\n          }\">\r\n\r\n            <h4 style=\"text-align: center;color: green; font-weight: bold\">GRN FORM:</h4>\r\n            <hr style=\"height:2px;width:100%;background-color:green; margin-left: 1px;\" />\r\n\r\n            <form class=\"ui-g ui-fluid\" #myForm=\"ngForm\" (ngSubmit)=\"submitGrn(myForm.value,myForm);\">\r\n\r\n\r\n                <div class=\"ui-g-6 ui-lg-6 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n\r\n                        <p-dropdown style=\"width:100%\" [style]=\"{height:'40px'}\" required [options]=\"companies\"\r\n                            name=\"company\" [(ngModel)]=\"grn.company\"></p-dropdown>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n\r\n\r\n                <div class=\"ui-g-6 ui-lg-6 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span style=\"width: 40%\" class=\"ui-inputgroup-addon spanWidth\"> Invoice<i\r\n                                style=\"color: red\">*</i></span>\r\n                        <input (keypress)=\"numberOnly($event)\" style=\"width: 80%;text-indent:5px\" type=\"text\" required\r\n                            pInputText placeholder=\" Invoice No\" [(ngModel)]=\"grn.invoice\" name=\"invoice\" />\r\n                    </div>\r\n\r\n\r\n                </div>\r\n\r\n                <div class=\"ui-g-6 ui-lg-6 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span style=\"width: 40%\" class=\"ui-inputgroup-addon spanWidth\"> Received By:<i\r\n                                style=\"color: red\">*</i></span>\r\n                        <input style=\"width:80%;text-indent:5px\" [(ngModel)]=\"grn.receivedBy\" type=\"text\" required\r\n                            pInputText name=\"receivedBy\" placeholder=\" Received By\" />\r\n                    </div>\r\n\r\n\r\n                </div>\r\n\r\n                <div class=\"ui-g-6 ui-lg-6 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span style=\"width: 40%\" class=\"ui-inputgroup-addon spanWidth\"> Product Name</span>\r\n                        <input style=\"width:80%;text-indent:5px\" required [(ngModel)]=\"grn.productName\" type=\"text\"\r\n                            pInputText placeholder=\" Product Name\" name=\"productName\" />\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"ui-g-6 ui-lg-6 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span style=\"width: 40%\" class=\"ui-inputgroup-addon spanWidth\"> Packing: <i\r\n                                style=\"color: red\">*</i></span>\r\n                        <input (input)=\"amountDetector()\" (keypress)=\"numberOnly($event)\"\r\n                            style=\"width: 80%;text-indent:5px\" [(ngModel)]=\"grn.packing\" type=\"text\" pInputText required\r\n                            placeholder=\" Packing\" name=\"packing\" />\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n\r\n\r\n                <div class=\"ui-g-6 ui-lg-6 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span style=\"width: 40%\" class=\"ui-inputgroup-addon spanWidth\"> Box Rate: <i\r\n                                style=\"color: red\">*</i></span>\r\n                        <input (input)=\"amountDetector()\" (keypress)=\"numberOnly($event)\"\r\n                            style=\"width:80%;text-indent:5px\" [(ngModel)]=\"grn.boxRate\" type=\"text\" pInputText required\r\n                            placeholder=\" Box Rate\" name=\"boxRate\" />\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"ui-g-6 ui-lg-6 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span style=\"width: 40%\" class=\"ui-inputgroup-addon spanWidth\"> Product TotalAmount:\r\n                            <i style=\"color: red\">*</i></span>\r\n                        <input [disabled]=\"true\" (keypress)=\"numberOnly($event)\" style=\"width:80%;text-indent:5px\"\r\n                            type=\"text\" [(ngModel)]=\"grn.productTotalAmount\" pInputText required placeholder=\"0\"\r\n                            name=\"productTotalAmount\" />\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"ui-g-6 ui-lg-6 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span style=\"width: 40%\" class=\"ui-inputgroup-addon spanWidth\"> Discount: <i\r\n                                style=\"color: red\">*</i></span>\r\n                        <input (input)=\"amountDetector()\" (keypress)=\"numberOnly($event)\"\r\n                            style=\"width: 80%;text-indent:5px\" [(ngModel)]=\"grn.discount\" type=\"text\" pInputText\r\n                            required placeholder=\" Discount\" name=\"discount\" />\r\n                    </div>\r\n                    <div style=\"padding:0px;margin-bottom:0px !important\" *ngIf=\"disable\" class=\"alert alert-danger\">\r\n                        Discount cannot be more than product amount\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"ui-g-6 ui-lg-6 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span style=\"width: 40%\" class=\"ui-inputgroup-addon spanWidth\"> Disc Amount: <i\r\n                                style=\"color: red\">*</i></span>\r\n                        <input [disabled]=\"true\" (keypress)=\"numberOnly($event)\" style=\"width: 80%;text-indent:5px\"\r\n                            type=\"text\" [(ngModel)]=\"grn.discountedAmount\" pInputText required\r\n                            placeholder=\" Discounted Amount\" name=\"discountedAmount\" />\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"ui-g-6 ui-lg-6 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span style=\"width: 40%\" class=\"ui-inputgroup-addon spanWidth\">Req Quantity: <i\r\n                                style=\"color: red\">*</i></span>\r\n                        <input (keypress)=\"numberOnly($event)\" style=\"width: 80%;text-indent:5px\"\r\n                            [(ngModel)]=\"grn.requiredQuantity\" type=\"text\" pInputText required\r\n                            placeholder=\" Required Quantity\" name=\"requiredQuantity\" />\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                <div class=\"ui-g-6 ui-lg-6 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span style=\"width: 40%\" class=\"ui-inputgroup-addon spanWidth\">Bonus Quantity: <i\r\n                                style=\"color: red\">*</i></span>\r\n                        <input (keypress)=\"numberOnly($event)\" style=\"width: 80%;text-indent:5px\"\r\n                            [(ngModel)]=\"grn.bonusQuantity\" type=\"text\" pInputText required\r\n                            placeholder=\" Bonus Quantity:\" name=\"bonusQuantity\" />\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n                <div class=\"ui-g-6 ui-lg-6 ui-sm-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span style=\"width: 40%\" class=\"ui-inputgroup-addon spanWidth\"> Box Tip: <i\r\n                                style=\"color: red\">*</i></span>\r\n                        <input (keypress)=\"numberOnly($event)\" style=\"width: 80%;text-indent:5px\"\r\n                            [(ngModel)]=\"grn.boxTip\" type=\"text\" pInputText required placeholder=\" Box Tip\"\r\n                            name=\"boxTip\" />\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div style=\"width:100%\" class=\"ui-g-12\">\r\n                    <button style=\"width: 100%;\" type=\"submit\" [disabled]=\"myForm.invalid || disable\"\r\n                        class=\"btn btn-success btn-block submitBtnStyle\">\r\n                        Submit\r\n                    </button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </p-card>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/grn-list/grn-list.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/grn-list/grn-list.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar></app-nav-bar>\r\n\r\n<div class=\"ui-g\">\r\n\r\n    <div class=\"ui-lg-6 ui-md-6 ui-sm-12\">\r\n          <p-card [style]=\"{ width: '60%','margin-left':'18%','background-color':'#479761','color':'white'}\">\r\n                <h6 class=\"text-uppercase\" style=\"padding-top: 6px;text-align: center\" >Total Amount of goods recieved</h6>\r\n                <hr style=\"width: 80%;height:2px;background-color: honeydew\">\r\n                <h3 style=\"text-align: center\">{{ totalamount }} Rs</h3>\r\n              </p-card>\r\n\r\n        </div>\r\n      \r\n\r\n    <div class=\"ui-lg-6 ui-md-6 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"routeToGrn()\"\r\n            style=\"width:45%;margin-left:30%;background: #479761; \" label=\"Add New GRN\"></button>\r\n    </div>\r\n</div>\r\n<p-card header=\"\" [style]=\"{  width: '84%',\r\n'font-size': '20px',\r\n'text-align': 'center',\r\ncolor: 'green',\r\n'margin-left':'10%',\r\n'margin-top':'30px'\r\n}\">\r\n    <p-toast></p-toast>\r\n\r\n\r\n    <div class=\"ui-fluid\">\r\n\r\n        <p-table #dt [responsive]=\"true\" [columns]=\"cols\" [value]=\"grnData\" [paginator]=\"true\" [rows]=\"3\"\r\n            [totalRecords]=\"totalRecords\">\r\n            <ng-template pTemplate=\"caption\">\r\n\r\n                <div class=\"ui-g-12\">\r\n                    <h2 style=\"font-weight:bold;color: green;\">GRN LIST</h2>\r\n                    <hr style=\"background-color:rgb(11, 92, 58);height:3px;\" />\r\n                </div>\r\n                <div style=\"text-align: right\">\r\n                    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n                    <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\"\r\n                        (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:30%\" />\r\n                </div>\r\n\r\n            </ng-template>\r\n            <ng-template pTemplate=\"header\" let-columns>\r\n\r\n                <tr>\r\n                    <th *ngFor=\"let col of columns\">\r\n                        {{ col.header }}\r\n                    </th>\r\n                    <th style=\"text-align: center;\">\r\n                        Action\r\n                    </th>\r\n                </tr>\r\n                <div *ngIf=\"loader\" style=\"margin-left: 325%;\">\r\n                    <p-progressSpinner></p-progressSpinner>\r\n\r\n                </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n\r\n\r\n\r\n                <tr class=\"hoverGrn\" [pSelectableRow]=\"rowData\">\r\n\r\n                    <td title=\"show GRN details\" (click)=\"gotoDetails(rowData['id'])\" *ngFor=\"let col of columns\"\r\n                        style=\"overflow: auto;cursor: pointer;\">\r\n                        {{ rowData[col.field] }}\r\n                    </td>\r\n                    <td>\r\n\r\n                        <button pButton [ngStyle]=\"{width:'100px',margin:'2px'}\" type=\"button\" label=\"Delete\"\r\n                            class=\"ui-button-danger\" (click)=\"deleteGrn(rowData['id'])\"></button>\r\n                            <button pButton [ngStyle]=\"{width:'100px',margin:'2px'}\" type=\"button\" label=\"Edit\"\r\n                            class=\"ui-button-success\" (click)=\"updateGrn(rowData['id'])\"></button>\r\n\r\n                    </td>\r\n                </tr>\r\n\r\n            </ng-template>\r\n\r\n        </p-table>\r\n        <!-- <p-progressSpinner></p-progressSpinner> -->\r\n    </div>\r\n</p-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-nav-bar></app-nav-bar> -->\r\n\r\n<p-toast></p-toast>\r\n<div class=\"wrap\">\r\n  <div class=\"ui-g\">\r\n    \r\n\r\n    <div class=\"ui-lg-4 ui-md-4 ui-sm-12 col-lg-offset-6 col-md-offset-6\">\r\n      <div class=\"limiter\">\r\n        <div class=\"container-login100\">\r\n          <div class=\"wrap-login100\">\r\n            <form class=\"login100-form validate-form\">\r\n              <span class=\"login100-form-title p-b-34 p-t-27\">\r\n                <b>Log in</b>\r\n              </span>\r\n              <div *ngIf=\"showErrorMessage\">\r\n                <p style=\"color:red;font-size:small;text-align: center\">Wrong Email or Password</p>\r\n              </div>\r\n\r\n              <div class=\"wrap-input100 validate-input\" data-validate=\"Enter username\">\r\n                <input class=\"input100\" type=\"text\" name=\"username\" #u1 placeholder=\"Username\">\r\n                <span class=\"focus-input100\" data-placeholder=\"&#xf207;\"></span>\r\n            \r\n              </div>\r\n\r\n              <div class=\"wrap-input100 validate-input\" data-validate=\"Enter password\">\r\n                <input class=\"input100\" type=\"password\" name=\"pass\" #p2 placeholder=\"Password\">\r\n                <span class=\"focus-input100\" data-placeholder=\"&#xf191;\"></span>\r\n                <!-- <div *ngIf=\"showErrorMessage\">\r\n                  <p style=\"color:red;font-size:xx-small\">Wrong Password</p>\r\n                </div> -->\r\n              </div>\r\n\r\n\r\n              <div class=\"container-login100-form-btn\">\r\n                <button (click)=\"check(u1.value, p2.value)\" class=\"login100-form-btn\">\r\n                  <b>Login</b>\r\n                </button>\r\n              </div>\r\n              <!-- <div *ngIf=\"showErrorMessage\">\r\n                <p style=\"color:red;font-size:small;text-align: center\">Wrong Email or Password</p>\r\n              </div> -->\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"ui-lg-8 ui-md-8 ui-sm-12\">\r\n      <div class=\"ui-g\">\r\n        <div class=\"ui-lg-10 ui-sm-12\" style=\"margin-top: 13%;\">\r\n          <h1 class=\"entry-title h1\"><b>WELCOME TO BARKHIA HOSPITAL</b></h1><br>\r\n\r\n        </div>\r\n        <h2 style=\"margin-left: 3%\" class=\"entry-title h2\"><b>PHARMACY APPLICATION</b></h2>\r\n\r\n      </div>\r\n      <div class=\"ui-g-12\"><img style=\"margin-left: 30%;margin-top: 20px;;height:70px;\" src=\"../../assets/logo1.jpg\">\r\n      </div>\r\n\r\n      <div class=\"ui-g makeItCenter\">\r\n        <div class=\"ui-lg-4 ui-md-4 ui-sm-12 col-lg-offset-2\">\r\n          <!-- <br><br><br> -->\r\n          <a href=\"{{opdUrl}}\" class=\"bttnOpd\">OPD</a>\r\n        </div>\r\n        <div class=\"ui-lg-4 ui-md-4 ui-sm-12 ui-offset-sm-6 col-offset-lg-2\">\r\n          <!-- <br><br><br> -->\r\n          <a href=\"{{labUrl}}\" class=\"bttnlab\">LAB</a>\r\n        </div>\r\n        <div class=\"ui-lg-4 ui-md-4 ui-sm-12 col-lg-offset-2\">\r\n          <!-- <br><br><br> -->\r\n          <a href=\"{{pharmacyUrl}}\" class=\"bttnPharmacy\">PHARMACY</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<nav class=\"navbar navbarCss\" style=\"padding:0px !important;\">\r\n  <div class=\"container-fluid\"  style=\"padding-left: 5px !important;background-color:#479761\">\r\n    <div style=\"margin:0px\"  class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" style=\"color:white;font-weight: bold;text-align: center;\"><img style=\"height:50px;\" src=\"../../assets/logo1.jpg\"> BARKHIA HOSPITAL</a>\r\n    </div>\r\n    \r\n        <app-right-user-bar></app-right-user-bar>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<nav class=\"main-menu\" style=\"margin-top: 60px;height: 100% !important;\">\r\n  <ul>\r\n\r\n    <li style=\"margin-top: 50px;cursor: pointer;\" (click)=\"routeToCompanylist()\">\r\n      <a>\r\n        <div style=\"width: 63px\">\r\n          <img src=\"assets/icons8-company-64.png\" class=\"imgClass\" />\r\n        </div>\r\n        <span class=\"nav-text\">\r\n          Add Company\r\n        </span>\r\n      </a>\r\n    </li>\r\n   \r\n\r\n    <li (click)=\"routetoproductregistrationlist()\" style=\"margin-top: 13px !important;cursor: pointer;\">\r\n      <a>\r\n\r\n        <div style=\"width: 63px\">\r\n          <img src=\"assets/icons8-account-48.png\" class=\"imgClass\" />\r\n        </div>\r\n        <span class=\"nav-text\">\r\n          Register Product\r\n        </span>\r\n      </a>\r\n    </li>\r\n    <li (click)=\"routeToGrn()\" style=\"margin-top: 13px !important;cursor: pointer;\">\r\n      <a style=\"cursor: pointer\">\r\n        <div style=\"width: 63px\">\r\n          <img src=\"assets/icons8-container-truck-48.png\" class=\"imgClass\" />\r\n        </div>\r\n        <span class=\"nav-text\">\r\n          Add GRN\r\n        </span>\r\n      </a>\r\n    </li>\r\n\r\n\r\n    <li (click)=\" routetodrugformationList()\" style=\"margin-top: 13px !important;cursor: pointer;\">\r\n      <a>\r\n\r\n        <div style=\"width: 63px\">\r\n          <img src=\"assets/icons8-pills-48.png\" class=\"imgClass\" />\r\n        </div>\r\n        <span class=\"nav-text\">\r\n          Add Drugs\r\n        </span>\r\n      </a>\r\n    </li>\r\n \r\n    <li (click)=\"routeToSalesList()\" style=\"margin-top: 13px !important;cursor: pointer;\">\r\n      <a  class='active-page'>\r\n        <div style=\"width: 63px\">\r\n          <img src=\"assets/icons8-us-dollar-100.png\" class=\"imgClass\" />\r\n        </div>\r\n        <span class=\"nav-text\">\r\n          Sales\r\n        </span>\r\n      </a>\r\n    </li>\r\n      <li (click)=\"logout()\"\r\n        style=\"margin-top: 13px !important;cursor: pointer;\">\r\n        <a>\r\n          <div style=\"width: 63px\">\r\n            <img src=\"assets/icons8-shutdown-48.png\"\r\n              class=\"imgClass\" />\r\n          </div>\r\n          <span class=\"nav-text\">\r\n            Logout\r\n          </span>\r\n        </a>\r\n      </li>\r\n  </ul>\r\n\r\n</nav>\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/print-products/print-products.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/print-products/print-products.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<app-nav-bar></app-nav-bar>\r\n<p>print-products works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar></app-nav-bar>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-lg-6 ui-md-6 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"routeBack()\"\r\n            style=\"width:45%;margin-left:30%;background: #479761;; \" label=\"Back\"></button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-1\"></div>\r\n    <div class=\"ui-g-10\">\r\n\r\n            <p-card [style]=\"{marginTop:'40px'}\">\r\n                    <div class=\"ui-g\">\r\n                        \r\n                     \r\n                        <div class=\"ui-sm-10 ui-g-8 ui-lg-12 \">\r\n                            <div class=\"ui-g-2 ui-sm-6 ui-md-4 ui-lg-2 ui-g-offset-5\">\r\n                                <img printSectionId=\"print\" ngxPrint label=\"Print\"\r\n                                    style=\"margin-left:15%;;width: 70% !important;margin:0px !important;\"\r\n                                    [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(product.qrCode)\">\r\n                              \r\n                                <button class=\"ui-button-success\"\r\n                                    style=\"margin-left: 10%;width:51%;height:24px;font-size:10px;line-height:30px;\" pButton\r\n                                    printSectionId=\"print\" ngxPrint label=\"Print\"></button>\r\n                            </div>\r\n                        </div>\r\n                \r\n                       \r\n                \r\n                \r\n                        <div style=\"margin-top: 60px;\" class=\"ui-g\">\r\n                            <div class=\"ui-g-2\"></div>\r\n                            <div class=\"ui-g-8\">\r\n                                <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                                    <div class=\"ui-inputgroup\">\r\n                                        <label style=\"margin-right: 20px;font-weight: bold;\"> Product Name:\r\n                                        </label>\r\n                                        <span>{{product.productName}}</span>\r\n                \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                                    <div class=\"ui-inputgroup\">\r\n                                        <label style=\"margin-right: 20px;font-weight: bold;\"> Formula:\r\n                                        </label>\r\n                                        <span>{{product.formula}}</span>\r\n                \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                                    <div class=\"ui-inputgroup\">\r\n                                        <label style=\"margin-right: 20px;font-weight: bold;\"> Packing:\r\n                                        </label>\r\n                                        <span>{{product.packing}}</span>\r\n                \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                                    <div class=\"ui-inputgroup\">\r\n                                        <label style=\"margin-right: 20px;font-weight: bold;\"> Box Rate:\r\n                                        </label>\r\n                                        <span>{{product.boxRate}}</span>\r\n                \r\n                                    </div>\r\n                                </div>\r\n                \r\n                                <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                                    <div class=\"ui-inputgroup\">\r\n                                        <label style=\"margin-right: 20px;font-weight: bold;\"> Min Stock:\r\n                                        </label>\r\n                                        <span>{{product.minStock}}</span>\r\n                \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                                    <div class=\"ui-inputgroup\">\r\n                                        <label style=\"margin-right: 20px;font-weight: bold;\"> Max Stock:\r\n                                        </label>\r\n                                        <span>{{product.maxStock}}</span>\r\n                \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                                    <div class=\"ui-inputgroup\">\r\n                                        <label style=\"margin-right: 20px;font-weight: bold;\"> State:\r\n                                        </label>\r\n                                        <span>{{product.state}}</span>\r\n                \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                                    <div class=\"ui-inputgroup\">\r\n                                        <label style=\"margin-right: 20px;font-weight: bold;\"> Selling Price:\r\n                                        </label>\r\n                                        <span>{{product.sellingPrice}}</span>\r\n                \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                                    <div class=\"ui-inputgroup\">\r\n                                        <label style=\"margin-right: 20px;font-weight: bold;\"> Company Product:\r\n                                        </label>\r\n                                        <span>{{product.companyProd}}</span>\r\n                \r\n                                    </div>\r\n                                </div>\r\n                                <!-- <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                            <div class=\"ui-inputgroup\">\r\n                                <label style=\"margin-right: 20px;font-weight: bold;\"> Drug Formation:\r\n                                </label>\r\n                                <span>{{product.drugFormation}}</span>\r\n                \r\n                            </div>\r\n                        </div> -->\r\n                                <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                                    <div class=\"ui-inputgroup\">\r\n                                        <label style=\"margin-right: 20px;font-weight: bold;\"> Unit Price:\r\n                                        </label>\r\n                                        <span>{{product.unitPrice}}</span>\r\n                \r\n                                    </div>\r\n                                </div>\r\n                                <!-- <div class=\"ui-g-6 ui-lg-4 ui-sm-12 ui-md-12\">\r\n                            <div class=\"ui-inputgroup\">\r\n                                <label style=\"margin-right: 20px;font-weight: bold;\"> Unit Price:\r\n                                </label>\r\n                                <span>{{product.unitPrice}}</span>\r\n                \r\n                            </div>\r\n                        </div> -->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </p-card>\r\n                \r\n    </div>\r\n</div>\r\n<div id=\"print\" target=\"blank\" [hidden]=\"true\" style=\"width: 100%;\">\r\n    <img [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(product.qrCode)\" style=\"width: 100%;\">\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-registration-list/product-registration-list.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-registration-list/product-registration-list.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar></app-nav-bar>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-g\">\r\n\r\n        <div class=\"ui-lg-6 ui-md-6 ui-sm-12\">\r\n            <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"routertoproductregistration()\"\r\n                style=\"width:45%;margin-left:30%;background: #479761;; \" label=\"Register A New Product\"></button>\r\n        </div>\r\n        <div class=\"ui-lg-6 ui-md-6 ui-sm-12\">\r\n            <button pButton type=\"button\" class=\"backBtnStyle ui-button-success\" printSectionId=\"print\" ngxPrint\r\n                label=\"Print\" style=\"width:45%;margin-left:30%;background: #dd2f2f; \" label=\"Print Products\"></button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<p-card header=\"\" [style]=\"{  width: '90%',\r\n'font-size': '20px',\r\n'text-align': 'center',\r\ncolor: 'green',\r\n'margin-left':'5.5%',\r\n'margin-right':'5.5%'\r\n}\">\r\n    <p-toast> </p-toast>\r\n\r\n    <p-table [responsive]=\"true\" #dt [columns]=\"cols\" [value]=\"productRegistration\" [paginator]=\"true\" [rows]=\"10\"\r\n        [totalRecords]=\"totalRecords\">\r\n        <ng-template pTemplate=\"caption\">\r\n            <div class=\"ui-g-12\">\r\n                <h2 style=\"font-weight:bold;color: green;\">REGISTER PRODUCT LIST</h2>\r\n                <hr style=\"background-color:rgb(11, 92, 58);height:3px;\" />\r\n            </div>\r\n            <div style=\"text-align: right\">\r\n                <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n                <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\"\r\n                    (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\" />\r\n            </div>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{ col.header }}\r\n                </th>\r\n                <th style=\"text-align: center;\">\r\n                    Actions\r\n                </th>\r\n            </tr>\r\n\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr class=\"hoverGrn\" [pSelectableRow]=\"rowData\">\r\n                <td title=\"show Product details\" (click)=\"gotoDetails(rowData['id'])\" *ngFor=\"let col of columns\"\r\n                    style=\"overflow: auto;cursor: pointer;\">\r\n                    {{ rowData[col.field] }}\r\n                </td>\r\n                <td>\r\n                    <button pButton [ngStyle]=\"{width:'80px',margin:'8px'}\" type=\"button\" label=\"Delete\"\r\n                        class=\"ui-button-danger\" (click)=\"deleteproductregistrationbyid(rowData['id'])\"></button>\r\n                    <button pButton [ngStyle]=\"{width:'80px',margin:'8px'}\" type=\"button\" label=\"Edit\"\r\n                        class=\"ui-button-success\" (click)=\"updatebyid(rowData['id'])\"></button>\r\n                    <!-- <button pButton type=\"button\" (click)=\"deletePanelByID(rowData['id'])\" class=\"ui-button-danger\" style=\"width:20%;height: 50px; margin-left: 40%; \"> -->\r\n\r\n                    <!-- </button> -->\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</p-card>\r\n\r\n\r\n\r\n\r\n\r\n<div id=\"print\" [hidden]=\"true\">\r\n        <div class=\"container\">\r\n            <img style=\"width: 100%;height:100px;margin-bottom: 60px;\" src=\"../../assets/logo.jpg\">\r\n\r\n\r\n            <table class=\"table table-striped\">\r\n              <thead>\r\n                  <th *ngFor=\"let col of columns\">\r\n                      {{ col.header }} &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; \r\n                  </th>\r\n              </thead>\r\n              <tbody>\r\n                      <tr *ngFor=\"let details of printingDataArray\" style=\"overflow: auto;\">\r\n                            <td>{{details.id}}</td>\r\n                            <td>{{details.name}}</td>\r\n                            <td>{{details.sellingPrice}}</td>\r\n                            <td><img style=\"width:80px\" [src]=\"details.qrCode\">\"</td>\r\n    \r\n                      </tr>\r\n    \r\n              </tbody>\r\n              <tfoot>\r\n                    <tr *ngIf=\"!printingDataArray?.length>0\">\r\n                        <td colspan=\"4\">No Fields Available</td>\r\n                    </tr>\r\n                </tfoot>\r\n            </table>\r\n          </div>\r\n    </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-registration/product-registration.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-registration/product-registration.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar></app-nav-bar>\r\n\r\n<div class=\"ui-g-12 ui-g\">\r\n  <div class=\"ui-lg-6 ui-md-6 ui-sm-12\">\r\n    <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"routetoproductregistrationlist()\"\r\n      style=\"width:45%;margin-left:30%;background: #479761;; \" label=\"Back\"></button>\r\n  </div>\r\n  \r\n    \r\n</div>\r\n\r\n<h1 class=\"heading\">Product Registration</h1>\r\n\r\n<hr style=\"height: 1px; background-color: green; width: 80%; margin-left: 12%\" />\r\n<div class=\"container\">\r\n  <div class=\"ui-g\">\r\n    <div class=\"ui-md-12 ui-lg-12 ui-sm-12\">\r\n      <p-card header=\"\" [style]=\"{\r\n          width: '95%',\r\n          'font-size': '15px',\r\n          'margin-left': '5.5%',\r\n          'text-align': 'left',\r\n          color: 'green'\r\n        }\">\r\n        <p-toast> </p-toast>\r\n        \r\n        <div class=\"ui-g\" style=\"margin-top:0px !important\">\r\n       \r\n          <div *ngIf=\"productid\" style=\"text-align: center;\" class=\"ui-md-2 ui-lg-offset-5 ui-lg-2 ui-sm-12\">\r\n           \r\n              <img style=\"margin-left:15%;;width: 70% !important;margin:0px !important;\" [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(qrCodeUrl)\">\r\n           <div  style=\"cursor: pointer;font-size:11px;margin-top: 0px;color: red;\">click to print</div>\r\n          </div>\r\n        </div>\r\n        <h4 style=\"color: green; font-weight: bold\">Register Product :</h4>\r\n        <hr style=\"height:2px;width:100%;background-color:green; margin-left: 1px;\" />\r\n        <div class=\"ui-g ui-fluid\">\r\n          <form style=\"width:100%;\" #myForm=\"ngForm\" (ngSubmit)=\"saveproductregistrtion(); myForm.reset()\">\r\n            <div class=\"ui-g\">\r\n            \r\n              <div class=\"ui-md-5 ui-lg-5 ui-sm-12\">\r\n                <div class=\"ui-inputgroup\">\r\n                  <span class=\"ui-inputgroup-addon\" style=\"width: 50%;font-size:15px;\">Product Name: <i\r\n                      style=\"color: red\">*</i></span>\r\n                  <input type=\"text\" required style=\"width: 100%\" name=\"productName\" required pInputText\r\n                    [(ngModel)]=\"productRegistration.productName\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"ui-md-5 ui-lg-5 ui-sm-12\">\r\n                <div class=\"ui-inputgroup\">\r\n                  <span class=\"ui-inputgroup-addon\" style=\"width: 50%;font-size:15px;\">Company <i\r\n                      style=\"color: red\">*</i></span>\r\n                  <p-dropdown [options]=\"company\" name=\"companyProd\" placeholder=\"Select Company\"\r\n                    [(ngModel)]=\"productRegistration.companyProd\" [filter]=\"true\" [style]=\"{\r\n                      width: '100%',\r\n                      height: '100%',\r\n                      'font-size': '20px'\r\n                    }\" [ngStyle]=\"{ width: '100%', 'font-size': '20px' }\" required></p-dropdown>\r\n                </div>\r\n              </div>\r\n              <div class=\" ui-md-2 ui-lg-2 ui-sm-12\">\r\n                <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"routetoaddcompany()\"\r\n                  style=\"width:75%;background: #479761;; \" label=\"Add \"></button>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"ui-g\">\r\n              <!-- <div class=\"ui-md-3 ui-lg-3\"></div> -->\r\n              <div class=\"ui-md-5 ui-lg-5 ui-sm-12\">\r\n                <div class=\"ui-inputgroup\">\r\n                  <span class=\"ui-inputgroup-addon\" style=\"width: 50%;font-size:15px;\">Formula <i\r\n                      style=\"color: red\">*</i></span>\r\n                  <input type=\"text\" required style=\"width: 100%\" name=\"formula\" pInputText\r\n                    [(ngModel)]=\"productRegistration.formula\" required />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"ui-md-5 ui-lg-5 ui-sm-12\">\r\n                <div class=\"ui-inputgroup\">\r\n                  <span class=\"ui-inputgroup-addon\" style=\"width: 50%;font-size:15px;\">Drug Formation <i\r\n                      style=\"color: red\">*</i></span>\r\n                  <p-dropdown [options]=\"drugformation\" name=\"drugFormation\" placeholder=\"Select drugFormation\"\r\n                    [(ngModel)]=\"productRegistration.drugFormation\" [filter]=\"true\" [style]=\"{\r\n                      width: '100%',\r\n                      height: '100%',\r\n                      'font-size': '20px'\r\n                    }\" [ngStyle]=\"{ width: '100%', 'font-size': '20px' }\" required></p-dropdown>\r\n                </div>\r\n              </div>\r\n              <div class=\" ui-md-2 ui-lg-2 ui-sm-12\">\r\n                <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"routetoDrugFormation()\"\r\n                  style=\"width:75%;background: #479761;; \" label=\"Add \"></button>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"ui-g\">\r\n              <!-- <div class=\"ui-md-3 ui-lg-3\"></div> -->\r\n              <div class=\"ui-md-5 ui-lg-5 ui-sm-12\">\r\n                <div class=\"ui-inputgroup\">\r\n                  <span class=\"ui-inputgroup-addon\" style=\"width: 50%;font-size:15px;\">Packing: <i\r\n                      style=\"color: red\">*</i></span>\r\n                  <input type=\"text\" required style=\"width: 100%\" name=\"packing\" pInputText\r\n                    (keypress)=\"numberOnly($event)\" [(ngModel)]=\"productRegistration.packing\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"ui-md-5 ui-lg-5 ui-sm-12\">\r\n                <div class=\"ui-inputgroup\">\r\n                  <span class=\"ui-inputgroup-addon\" style=\"width: 50%;font-size:15px;\">\r\n                    BoxRate<i style=\"color: red\">*</i></span>\r\n                  <input type=\"text\" required (input)=\"onchangeUnitPrice()\" style=\"width: 100%\" name=\"boxRate\"\r\n                    pInputText (keypress)=\"numberOnly($event)\" [(ngModel)]=\"productRegistration.boxRate\" />\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"ui-g\">\r\n              <div class=\"ui-md-5 ui-lg-5 ui-sm-12\">\r\n                <div class=\"ui-inputgroup\">\r\n                  <span class=\"ui-inputgroup-addon\" style=\"width: 50%;font-size:15px;\">\r\n                    Unit Price</span>\r\n                  <input [disabled]=\"true\" type=\"text\" required style=\"width: 100%\" name=\"unitPrice\" pInputText\r\n                    (keypress)=\"numberOnly($event)\" [(ngModel)]=\"unitprice\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"ui-md-5 ui-lg-5 ui-sm-12\">\r\n                <div class=\"ui-inputgroup\">\r\n                  <span class=\"ui-inputgroup-addon\" style=\"width: 50%;font-size:15px;\">\r\n                    Selling Price<i style=\"color: red\">*</i></span>\r\n                  <input type=\"text\" required (input)=\"onchangeUnitPrice()\" style=\"width: 100%\" name=\"sellingPrice\"\r\n                    pInputText (keypress)=\"numberOnly($event)\" [(ngModel)]=\"productRegistration.sellingPrice\" />\r\n\r\n                </div>\r\n                <div style=\"padding:0px;margin-bottom:0px\" *ngIf=\"sellingBtn\" class=\"alert alert-danger\">\r\n                  Sale price must be greater than Unit price\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n              <!-- <div class=\"ui-md-3 ui-lg-3\"></div> -->\r\n              <div class=\"ui-md-5 ui-lg-5 ui-sm-12\">\r\n                <div class=\"ui-inputgroup\">\r\n                  <span class=\"ui-inputgroup-addon\" style=\"width: 50%;font-size:15px;\">\r\n                    MinStock<i style=\"color: red\">*</i></span>\r\n                  <input type=\"text\" required style=\"width: 100%\" name=\"minStock\" (change)=\"onchangeUnitPrice()\"\r\n                    pInputText [disabled]=\"disableMaxAndMinStock()\" (keypress)=\"numberOnly($event)\"\r\n                    [(ngModel)]=\"productRegistration.minStock\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"ui-md-5 ui-lg-5 ui-sm-12\">\r\n                <div class=\"ui-inputgroup\">\r\n                  <span class=\"ui-inputgroup-addon\" style=\"width: 50%;font-size:15px;\">maxStock <i\r\n                      style=\"color: red\">*</i></span>\r\n                  <input type=\"text\" required style=\"width: 100%\" name=\"maxStock\" pInputText\r\n                    [disabled]=\"disableMaxAndMinStock()\" (keypress)=\"numberOnly($event)\"\r\n                    [(ngModel)]=\"productRegistration.maxStock\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n              <div class=\"ui-md-6 ui-lg-4 ui-lg-offset-1 ui-sm-12\">\r\n                <div class=\"ui-g-12\">\r\n                  <p-radioButton required class=\"makeBold\" name=\"activeProduct\" label=\"Active Product\"\r\n                    value=\"activeProduct\" [(ngModel)]=\"productRegistration.state\" (click)=\"changeStatus1()\">\r\n                  </p-radioButton>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui-md-6 ui-lg-4 ui-lg-offset-1 ui-sm-12\">\r\n                <div class=\"ui-g-12\">\r\n                  <p-radioButton required class=\"makeBold\" name=\"runningProduct\" value=\"runningProduct\"\r\n                    label=\"Running Product\" [(ngModel)]=\"productRegistration.state\" (click)=\"changeStatus2()\">\r\n                  </p-radioButton>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"ui-g\">\r\n              <div class=\"ui-md-3 ui-lg-2 ui-sm-12\"></div>\r\n              <div class=\"ui-md-6 ui-lg-6 ui-sm-12\">\r\n                <button pButton type=\"submit\" label=\"Save\" [disabled]=\"myForm.form.invalid || sellingBtn\"\r\n                  style=\"margin-top: 0px; background-color:#479761;width:100%;\" class=\"colorSetAllButtons\"></button>\r\n              </div>\r\n              <div class=\"ui-md-3 ui-lg-3 ui-sm-12\"></div>\r\n            </div>\r\n\r\n          </form>\r\n        </div>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/right-user-bar/right-user-bar.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/right-user-bar/right-user-bar.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <span\r\n    style=\"font-size:20px;cursor:pointer;color: #ffffff;\"\r\n    (click)=\"openNavBar()\"\r\n    >&#9776; User Details\r\n  </span>\r\n</div>\r\n\r\n<div id=\"mySidenav\" [style.width]=\"sideBarWidth\" class=\"sidenav\">\r\n  <div style=\"text-align: left;margin-left: 5%; \" (click)=\"closeNavBar()\">\r\n    <p style=\"color: white;font-weight: bold\">X</p>\r\n  </div>\r\n  <hr style=\"background-color: white; width: 86%; height:2px\" />\r\n  <div class=\"ui-g\" style=\"margin-left: 28%\">\r\n    <div class=\"ui-lg-3 ui-md-3 ui-sm-12\">\r\n      <img src=\"assets/icons8-user-100.png\" class=\"imgClass\" />\r\n    </div>\r\n  </div>\r\n  <hr style=\"background-color: white; width: 86%; height:1px\" />\r\n  <p-card\r\n    [style]=\"{\r\n      width: '90%',\r\n      'font-size': '15px',\r\n      'margin-left': '5%',\r\n      'text-align': 'left',\r\n      color: 'green',\r\n      height: '200px'\r\n    }\"\r\n  >\r\n    <div class=\"ui-g\">\r\n      <label style=\"text-align: left; font-weight: bold\"\r\n        >Username:\r\n      </label>\r\n      <p style=\" margin-left: 4%\">{{ username }}</p>\r\n    </div>\r\n    <div class=\"ui-g\">\r\n        <label style=\"text-align: left; font-weight: bold\"\r\n          >Sales:\r\n        </label>\r\n        <p style=\" margin-left: 4%\">{{ username }}</p>\r\n      </div>\r\n  \r\n  </p-card>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sales-list/sales-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sales-list/sales-list.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar></app-nav-bar>\r\n\r\n<div class=\"ui-g\">\r\n\r\n  <div class=\"ui-lg-6 ui-md-6 ui-sm-12\">\r\n    <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"routeToSales()\"\r\n      style=\"width:45%;margin-left:30%;background: #479761;; \" label=\"Point Of Sales Form\"></button>\r\n  </div>\r\n</div>\r\n<p-card header=\"\" [style]=\"{\r\n    width: '80%',\r\n    'font-size': '20px',\r\n    'text-align': 'center',\r\n    color: 'green',\r\n    'margin-left': '10%',\r\n    'margin-top': '30px'\r\n  }\">\r\n  <p-toast></p-toast>\r\n\r\n  <div class=\"ui-g ui-inputgroup\" style=\"margin-top: 0px !important;;margin-bottom: 0px !important;\">\r\n    <div class=\"ui-g-3 ui-sm-12  ui-md-4   ui-lg-4\">\r\n      <label style=\"font-size: 14px !important; color:black; font-weight: bold \">\r\n        Today&ensp;:\r\n      </label>\r\n      <label style=\"font-size:14px !important;color:black;margin-left:10px; \">\r\n        {{ date | date: \"dd/MM/yyyy\" }}</label>\r\n    </div>\r\n  </div>\r\n  <!-- <hr style=\"background-color:black;height:1px; width: 82%\" /> -->\r\n\r\n  <div class=\" ui-g  ui-inputgroup\">\r\n    <div class=\"ui-g-3 ui-sm-12  ui-md-2   ui-lg-3\"></div>\r\n    <div class=\" ui-g-4 ui-sm-12  ui-md-5   ui-lg-3  \">\r\n      <span class=\"ui-inputgroup-addon \" style=\"font-size:14px\">From</span>\r\n      <p-calendar name=\"filterByDate\" required [(ngModel)]=\"dateFrom\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n        yearRange=\"1990:2090\" showButtonBar=\"true\" placeholder=\"Select Date\">\r\n      </p-calendar>\r\n    </div>\r\n\r\n    <div class=\"ui-g-3 ui-sm-12  ui-md-5   ui-lg-3 \">\r\n      <span class=\"ui-inputgroup-addon \" style=\"font-size:14px\">Till&nbsp;&nbsp;</span>\r\n      <p-calendar name=\"filterByDate\" required [(ngModel)]=\"dateTill\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n        yearRange=\"1990:2090\" showButtonBar=\"true\" placeholder=\"Select Date\">\r\n      </p-calendar>\r\n    </div>\r\n  </div>\r\n  <div class=\" ui-g \">\r\n    <div class=\"ui-g-3 ui-sm-12  ui-md-5   ui-lg-5\"></div>\r\n    <div class=\"ui-g-3 ui-sm-12  ui-md-2   ui-lg-2\">\r\n      <button pButton type=\"button\" class=\"ui-button-raised ui-button-danger\" (click)=\"onfilter()\"\r\n        style=\"width:80%;margin-left:10%;  height:30px;\" label=\"Filter\"></button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-fluid\">\r\n    <p-table #dt [responsive]=\"true\" [columns]=\"cols\" [value]=\"bulksaveData\" [paginator]=\"true\" [rows]=\"5\"\r\n      [totalRecords]=\"totalRecords\">\r\n      <ng-template pTemplate=\"caption\">\r\n        <div class=\"ui-g-12\">\r\n          <h2 style=\"font-weight:bold;color: green;\">SALES LIST</h2>\r\n          <hr style=\"background-color:rgb(11, 92, 58);height:3px;\" />\r\n        </div>\r\n        <div style=\"text-align: right\">\r\n          <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n          <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\"\r\n            (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:30%\" />\r\n        </div>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th *ngFor=\"let col of columns\">\r\n            {{ col.header }}\r\n          </th>\r\n        </tr>\r\n        <div *ngIf=\"loader\" style=\"margin-left: 180%;\">\r\n          <p-progressSpinner></p-progressSpinner>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n        <tr class=\"hoverGrn\" [pSelectableRow]=\"rowData\">\r\n          <td *ngFor=\"let col of columns\" style=\"overflow: auto;cursor: pointer;\">\r\n            {{ rowData[col.field] }}\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n</p-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sales-mainscreen/qrcode/qrcode.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sales-mainscreen/qrcode/qrcode.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<zxing-scanner  [formats]=\"['QR_CODE', 'EAN_13', 'CODE_128', 'DATA_MATRIX']\"  (scanSuccess)=\"onCodeResult($event,audio)\"></zxing-scanner>\r\n<audio style=\"display: none;\" #audio  src=\"../../../assets/beep.wav\" autoplay=\"false\" ></audio>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sales-mainscreen/sales-mainscreen.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sales-mainscreen/sales-mainscreen.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar></app-nav-bar>\r\n\r\n<!-- <h1 class=\"heading\">SALES</h1> -->\r\n\r\n<hr style=\"height: 1px; background-color: green; width: 80%; margin-left: 12%\" />\r\n<p-toast [showTransitionOptions]=\"'4ms'\"></p-toast>\r\n\r\n<div style=\"width: 100%;margin-top:10px;\" class=\"ui-g\">\r\n  <div class=\"ui-md-12 ui-lg-6 ui-sm-12\">\r\n    <p-card header=\"\" [style]=\"{\r\n        width: '80%',\r\n        'font-size': '15px',\r\n        'margin-left': '23.5%',\r\n        'text-align': 'left',\r\n        color: 'green'\r\n      }\">\r\n      <div class=\"ui-g\">\r\n        <div class=\"ui-g-9\" style=\"text-align: center;\">\r\n          <h1\r\n            style=\"text-shadow: 3px 3px #479761;;color: rgb(9, 87, 13)#479761;margin-top:45px;font-weight: bold;\">\r\n            POINT OF SALES</h1>\r\n        </div>\r\n        <div class=\"ui-g-3\">\r\n\r\n          <p-card [style]=\"{padding:'5px',textAlign:'center'}\">\r\n            <p style=\"font-size:12px;font-weight: bold;margin-bottom: 5px;color: #0a702c;\">scan your qr code</p>\r\n\r\n            <app-qrcode (productEmitter)=\"productEmitter($event)\"></app-qrcode>\r\n\r\n          </p-card>\r\n        </div>\r\n      </div>\r\n      <!-- <h4 style=\"color: green; font-weight: bold\">Point Of Sales Form :</h4> -->\r\n\r\n      <hr style=\"height:2px;width:82%;background-color:green; margin-left: 1px;\" />\r\n\r\n\r\n      <div class=\"ui-g ui-fluid\">\r\n        <form style=\"width:100%;\" #myForm=\"ngForm\">\r\n          <div class=\"ui-g\">\r\n            <!-- <div class=\"ui-md-1 ui-lg-1\"></div> -->\r\n            <div class=\"ui-md-12 ui-lg-10 ui-sm-12\">\r\n\r\n              <div class=\"ui-inputgroup\">\r\n                <p-dropdown [options]=\"dropdownData\" (onChange)=\"onProductChange()\"\r\n                  [(ngModel)]=\"salesObj.productRegistration\" name=\"testname\" placeholder=\"Select Product\" pInputText\r\n                  [style]=\"{ height: '40px' }\" style=\"width: 100%\" [filter]=\"true\"></p-dropdown>\r\n              </div>\r\n            </div>\r\n            <div class=\" ui-md-2 ui-lg-2 ui-sm-12\">\r\n              <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"routetoProductRegistration()\"\r\n                style=\"width:75%;background: #479761;; \" label=\"Add \"></button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"ui-g\">\r\n            <!-- <div class=\"ui-md-3 ui-lg-3\"></div> -->\r\n            <div class=\"ui-md-12 ui-lg-10 ui-sm-12\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width: 50%;font-size:15px;\">Quantity: <i\r\n                    style=\"color: red\">*</i></span>\r\n                <input type=\"number\" required (keypress)=\"numberOnly($event)\" style=\"width: 100%\" name=\"quantity\"\r\n                  [disabled]=\"disableUnit()\" (input)=\"\r\n                    calculatePriceQuantityProduct(); getProductQuantity()\r\n                  \" [(ngModel)]=\"salesObj.productQuantity\" pInputText />\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"ui-g\">\r\n            <!-- <div class=\"ui-md-1 ui-lg-1\"></div> -->\r\n            <div class=\"ui-md-12 ui-lg-10 ui-sm-12\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width:50%;font-size:15px;\">Cost Price: <i\r\n                    style=\"color: red\">*</i></span>\r\n                <!-- <input type=\"text\" required [(ngModel)]=\"test.details\" name=\"details\" pInputText> -->\r\n                <input type=\"text\" required (keypress)=\"numberOnly($event)\" style=\"width: 100%\" [disabled]=\"true\"\r\n                  name=\"productPrice\" [(ngModel)]=\"salesObj.total\" pInputText />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g\">\r\n            <!-- <div class=\"ui-md-3 ui-lg-3\"></div> -->\r\n            <div class=\"ui-md-12 ui-lg-10 ui-sm-12\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width: 50%;font-size:15px;\">Selling Price: <i\r\n                    style=\"color: red\">*</i></span>\r\n                <input type=\"number\" min=\"0\" required (keypress)=\"numberOnly($event)\" style=\"width: 100%\"\r\n                  name=\"sellingPrice\" ngModel #sale=\"ngModel\" (input)=\"addPrice();restrictSellingPrice()\"\r\n                  [disabled]=\"disableCost()\" [(ngModel)]=\"salesObj.totalSellingPrice\" pInputText />\r\n              </div>\r\n              <div style=\"padding:0px;margin-bottom:0px\" [hidden]=\"restrictSellingPrice()\" class=\"alert alert-danger\">\r\n                Sale price must be greater than cost price\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g\">\r\n            <!-- <div class=\"ui-md-3 ui-lg-3\"></div> -->\r\n            <div class=\"ui-md-12 ui-lg-10 ui-sm-12\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width: 50%;font-size:15px;\">Discount: </span>\r\n                <input type=\"text\" (keypress)=\"numberOnly($event)\" style=\"width: 100%\" name=\"discount\" ngModel\r\n                  #disc=\"ngModel\" (input)=\"discountOnSellingPrice()\" [disabled]=\"disableDiscount()\"\r\n                  [(ngModel)]=\"discount\" pInputText />\r\n              </div>\r\n              <div style=\"padding:0px;margin-bottom:0px\" [hidden]=\"showDiv\" class=\"alert alert-danger\">\r\n                Discount can't more than selling price\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g\">\r\n            <!-- <div class=\"ui-md-1 ui-lg-1\"></div> -->\r\n            <div class=\"ui-md-12 ui-lg-10 ui-sm-12\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width: 50%;font-size:15px;\">Total: </span>\r\n                <input type=\"number\" min=\"0\" style=\"width: 100%;height: 36px;\" name=\"totalSellingPrice\"\r\n                  placeholder=\"Total Selling Price\" [disabled]=\"true\" [(ngModel)]=\"totalFieldInForm\" pInputText />\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"ui-g\" style=\"margin-top:20px !important;\">\r\n            <div class=\"ui-md-3 ui-lg-3\"></div>\r\n            <div class=\"ui-md-5 ui-lg-5 ui-sm-12\">\r\n              <button pButton type=\"submit\" label=\"Add to cart\" (click)=\"callForChangeInProductStocks(myForm)\"\r\n                [disabled]=\"(myForm.form.invalid || salesObj.total == 0)\"\r\n                style=\"margin-top: 0px; background-color:#479761;width:100%;\"></button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </p-card>\r\n  </div>\r\n  <div class=\"ui-md-12 ui-lg-5 ui-sm-12\">\r\n    <p-card [style]=\"{\r\n        width: '100%',\r\n        'font-size': '15px',\r\n        'margin-left': '3%',\r\n        'text-align': 'left',\r\n        height:'615px'\r\n      }\">\r\n      <div class=\"ui-g\">\r\n        <div class=\"ui-g-2\">\r\n          <h4 style=\"color: green; font-weight: bold\">Cart:</h4>\r\n        </div>\r\n        <div class=\"ui-g-3\">\r\n          <img src=\"assets/icons8-shopping-cart-30.png\" />\r\n        </div>\r\n        <div class=\"ui-g-1\"></div>\r\n        <div class=\"ui-g-3\">\r\n          <button pButton type=\"button\" printSectionId=\"print\" ngxPrint label=\"Print\" (click)=\"emptyPrintDataArray()\"\r\n            [disabled]=\"disablePrintButton\" style=\"margin-top: 0px; background-color:#479761;width:100%;\"></button>\r\n        </div>\r\n        <div class=\"ui-g-3\">\r\n          <button pButton type=\"button\" label=\"Save\" [disabled]=\"disablesavebutton\" (click)=\"saveSales()\"\r\n            style=\"margin-top: 0px; background-color:#479761;width:100%;\"></button>\r\n        </div>\r\n      </div>\r\n      <hr style=\"height:2px;width:100%;background-color:green; margin-left: 1px;\" />\r\n\r\n      <!-- <p style=\"margin:10px\" [hidden]=\"facilities.length\">No Facility selected!</p> -->\r\n      <p-table [ngStyle]=\"{ textAlign: 'center' }\" [totalRecords]=\"totalRecords\" #dt [paginator]=\"true\" [rows]=\"5\"\r\n        [value]=\"tableData\">\r\n        <ng-template pTemplate=\"header\">\r\n          <tr>\r\n            <th [ngStyle]=\"{ textAlign: 'center' }\" *ngFor=\"let col of cols\">\r\n              {{ col.header }}\r\n            </th>\r\n            <th style=\"text-align: center;\" pResizableColumn>\r\n              Actions\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-car let-rowData let-rowIndex>\r\n          <tr [pSelectableRow]=\"rowData\">\r\n            <td *ngFor=\"let col of cols\" style=\"overflow: auto\">\r\n              {{ car[col.field] }}\r\n            </td>\r\n            <td>\r\n              <div (click)=\"\r\n              deleteProduct(tableData.indexOf(rowIndex), rowData['total'])\">\r\n                <img src=\"assets/delete.png\" style=\"cursor: pointer\" />\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </p-table>\r\n\r\n\r\n      <div class=\"ui-g\" style=\"margin-top: 4%;\">\r\n        <hr style=\"height:1px;width:100%;background-color:black; margin-left: 1px !important\" />\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g\">\r\n            <h5 style=\"font-weight: bold;color: black\">Total :</h5>\r\n            <h6 style=\"margin-top: 2%;margin-left: 6%;color: black;font-size: large\">\r\n              {{ total }}\r\n            </h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </p-card>\r\n  </div>\r\n</div>\r\n<div id=\"print\" target=\"blank\" [hidden]=\"true\">\r\n  <!-- <div *ngIf=\"addEmergency.name !== undefined\"> -->\r\n    <img style=\"width: 100%;height:120px;\" src=\"../../assets/logo.jpg\">\r\n\r\n  <h1 style=\"text-align: center; margin-top: 60px;;font-weight:bold;\">\r\n    Sales Slip\r\n  </h1>\r\n  <hr style=\"border: 2px solid black;\" />\r\n  <div class=\"ui-g\">\r\n    <p style=\"font-size: 20px;\">\r\n      <b style=\"font-size: 20px;\"> Date: </b>\r\n      {{ printSlipDate | date: \"short\" }}\r\n    </p>\r\n\r\n    <div>\r\n      <span style=\"font-weight:bold;\">Product Name</span>\r\n      <span style=\"font-weight:bold; margin-left: 225px\">Quantity</span>\r\n      <span style=\"font-weight:bold;float: right;\">Price</span>\r\n      <hr style=\"border: 1px solid black;width:100%;\" />\r\n      <div *ngFor=\"let data of printData\">\r\n        <span>{{ data.name }}</span>\r\n        <span style=\" margin-left: 295px\">{{ data.quantity }}</span>\r\n        <span style=\"float: right;\">{{ data.total }}</span>\r\n        <hr style=\"width:100%;\" />\r\n      </div>\r\n      <div>\r\n        <hr style=\"border:1px solid black;width:100%;\" />\r\n        <span><b> Total: </b>\r\n          <span style=\"float:right;\">{{ printTotal }}</span></span>\r\n        <hr style=\"border:1px solid black;width:100%;\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/Services/company-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/Services/company-service.service.ts ***!
  \*****************************************************/
/*! exports provided: CompanyServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyServiceService", function() { return CompanyServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let CompanyServiceService = class CompanyServiceService {
    constructor(http) {
        this.http = http;
        this.postCompanyURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/company/post";
        this.getallcompanyurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/company/getAll";
        this.deletecompanyurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/company/delete/";
        this.updatecompanyurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/company/";
    }
    postcompany(company) {
        return this.http.post(this.postCompanyURL, company);
    }
    getallcompany() {
        return this.http.get(this.getallcompanyurl);
    }
    deletebyid(id) {
        return this.http.delete(this.deletecompanyurl + id);
    }
    updatebyid(id, company) {
        return this.http.put(this.updatecompanyurl + id, company);
    }
};
CompanyServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CompanyServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CompanyServiceService);



/***/ }),

/***/ "./src/app/Services/drugformation.service.ts":
/*!***************************************************!*\
  !*** ./src/app/Services/drugformation.service.ts ***!
  \***************************************************/
/*! exports provided: DrugformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugformationService", function() { return DrugformationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let DrugformationService = class DrugformationService {
    constructor(http) {
        this.http = http;
        this.postdrugformationURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/drugFormation/post";
        this.getAlldrugformationURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/drugFormation/getAll";
        this.deleteByIDdrugformationURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/drugFormation/delete/";
        this.updatebyIddrugformationURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/drugFormation";
    }
    postDrugFormation(drugformation) {
        return this.http.post(this.postdrugformationURL, drugformation);
    }
    getallDrugFormation() {
        return this.http.get(this.getAlldrugformationURL);
    }
    deletebyid(id) {
        return this.http.delete(this.deleteByIDdrugformationURL + id);
    }
    updatebyid(id, drugformation) {
        return this.http.put(this.updatebyIddrugformationURL + id, drugformation);
    }
};
DrugformationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DrugformationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DrugformationService);



/***/ }),

/***/ "./src/app/Services/grn.service.ts":
/*!*****************************************!*\
  !*** ./src/app/Services/grn.service.ts ***!
  \*****************************************/
/*! exports provided: GrnService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrnService", function() { return GrnService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let GrnService = class GrnService {
    constructor(http) {
        this.http = http;
    }
    postGrn(obj) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/grn/post", obj);
    }
    getGrnList() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/grn/getAll");
    }
    deleteGrn(id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/grn/delete/" + id);
    }
    getGrnById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/grn/" + id);
    }
    updateGrnById(id, obj) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/grn/update/" + id, obj);
    }
};
GrnService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GrnService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GrnService);



/***/ }),

/***/ "./src/app/Services/product-registration.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/Services/product-registration.service.ts ***!
  \**********************************************************/
/*! exports provided: ProductRegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRegistrationService", function() { return ProductRegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ProductRegistrationService = class ProductRegistrationService {
    constructor(http) {
        this.http = http;
        this.postproductregistrationURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/productRegistration/post";
        this.getallproductregistrationURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/productRegistration/getAll";
        this.deleteproductregistrationbyidURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/productRegistration/delete/";
        this.updateproductregistrationURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/productRegistration/update/";
        this.getbyidURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/productRegistration/getOne/";
    }
    postproductregistration(productregistration) {
        return this.http.post(this.postproductregistrationURL, productregistration);
    }
    getallproductregistration() {
        return this.http.get(this.getallproductregistrationURL);
    }
    deletebyid(id) {
        return this.http.delete(this.deleteproductregistrationbyidURL + id);
    }
    updatebyid(id, productRegistration) {
        return this.http.put(this.updateproductregistrationURL + id, productRegistration);
    }
    getbyid(id) {
        return this.http.get(this.getbyidURL + id);
    }
};
ProductRegistrationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductRegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductRegistrationService);



/***/ }),

/***/ "./src/app/Services/sales.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Services/sales.service.ts ***!
  \*******************************************/
/*! exports provided: SalesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesService", function() { return SalesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let SalesService = class SalesService {
    constructor(http) {
        this.http = http;
        this.tempApi = "http://localhost:3000/posts/";
    }
    saveSales(sales) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/sales/post", sales);
    }
    getProductRegistrations() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/productRegistration/getAll");
    }
    postQuantity(quantityObj) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/productRegistration/update", quantityObj);
    }
    addMaxStocks(addmaxobj) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/productRegistration/addmaxstock", addmaxobj);
    }
    getSales() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/sales/get");
    }
    getFilteredDates(salesListObj) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/sales/getfilteredsales", salesListObj);
    }
    getProductByQrCode(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/sales/product/" + id);
    }
};
SalesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SalesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SalesService);



/***/ }),

/***/ "./src/app/add-company/add-company.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-company/add-company.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heading{\r\n    text-align: center;\r\n    color: green;\r\n    font-weight: bold;\r\n    margin-top: 1%;\r\n}\r\n\r\n.makeBold{\r\n    font-weight: bold !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWNvbXBhbnkvYWRkLWNvbXBhbnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9hZGQtY29tcGFueS9hZGQtY29tcGFueS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG59XHJcblxyXG4ubWFrZUJvbGR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/add-company/add-company.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-company/add-company.component.ts ***!
  \******************************************************/
/*! exports provided: AddCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyComponent", function() { return AddCompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company */ "./src/app/add-company/company.ts");
/* harmony import */ var _Services_company_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/company-service.service */ "./src/app/Services/company-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _toast_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toast-service.service */ "./src/app/toast-service.service.ts");







let AddCompanyComponent = class AddCompanyComponent {
    constructor(companyservice, router, messageService, msgService) {
        this.companyservice = companyservice;
        this.router = router;
        this.messageService = messageService;
        this.msgService = msgService;
        this.company = new _company__WEBPACK_IMPORTED_MODULE_2__["Company"]();
    }
    ngOnInit() {
    }
    goBack() {
        window.history.go(-1);
    }
    submitcompany() {
        // console.log(this.company);
        this.companyservice.postcompany(this.company).subscribe(data => {
            // this.msgService.succesMethod
            // console.log(this.company);
            this.messageService.add({
                severity: "success",
                summary: "Succesfully",
                detail: "company successfully saved!"
            });
        }, error => {
            // console.log(error);
            this.messageService.add({
                severity: "error",
                summary: "Error Found",
                detail: "Something went wrong check your internet connection "
            });
        });
    }
    routeToCompanylist() {
        this.router.navigate(['companylist']);
    }
    backToMonitor() {
        history.go(-1);
    }
};
AddCompanyComponent.ctorParameters = () => [
    { type: _Services_company_service_service__WEBPACK_IMPORTED_MODULE_3__["CompanyServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
    { type: _toast_service_service__WEBPACK_IMPORTED_MODULE_6__["ToastServiceService"] }
];
AddCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-company',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-company/add-company.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-company.component.css */ "./src/app/add-company/add-company.component.css")).default]
    })
], AddCompanyComponent);



/***/ }),

/***/ "./src/app/add-company/company.ts":
/*!****************************************!*\
  !*** ./src/app/add-company/company.ts ***!
  \****************************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Company {
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-company/add-company.component */ "./src/app/add-company/add-company.component.ts");
/* harmony import */ var _sales_mainscreen_sales_mainscreen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sales-mainscreen/sales-mainscreen.component */ "./src/app/sales-mainscreen/sales-mainscreen.component.ts");
/* harmony import */ var _product_registration_product_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-registration/product-registration.component */ "./src/app/product-registration/product-registration.component.ts");
/* harmony import */ var _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-list/company-list.component */ "./src/app/company-list/company-list.component.ts");
/* harmony import */ var _product_registration_list_product_registration_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-registration-list/product-registration-list.component */ "./src/app/product-registration-list/product-registration-list.component.ts");
/* harmony import */ var _drug_formation_drug_formation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drug-formation/drug-formation.component */ "./src/app/drug-formation/drug-formation.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _grn_form_grn_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./grn-form/grn-form.component */ "./src/app/grn-form/grn-form.component.ts");
/* harmony import */ var _grn_list_grn_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./grn-list/grn-list.component */ "./src/app/grn-list/grn-list.component.ts");
/* harmony import */ var _grn_detail_grn_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./grn-detail/grn-detail.component */ "./src/app/grn-detail/grn-detail.component.ts");
/* harmony import */ var _drug_formation_list_drug_formation_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./drug-formation-list/drug-formation-list.component */ "./src/app/drug-formation-list/drug-formation-list.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guard/auth-guard.service */ "./src/app/guard/auth-guard.service.ts");
/* harmony import */ var _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sales-list/sales-list.component */ "./src/app/sales-list/sales-list.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _print_products_print_products_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./print-products/print-products.component */ "./src/app/print-products/print-products.component.ts");



















const routes = [
    { path: '', redirectTo: '/pharmacy', pathMatch: 'full' },
    { path: 'pharmacy', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_14__["LoginPageComponent"] },
    { path: 'sales', canActivate: [_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]], component: _sales_mainscreen_sales_mainscreen_component__WEBPACK_IMPORTED_MODULE_4__["SalesMainscreenComponent"] },
    { path: "addcompany", canActivate: [_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]], component: _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_3__["AddCompanyComponent"] },
    { path: 'productreg', canActivate: [_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]], component: _product_registration_product_registration_component__WEBPACK_IMPORTED_MODULE_5__["ProductRegistrationComponent"] },
    { path: 'productreg/:id', canActivate: [_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]], component: _product_registration_product_registration_component__WEBPACK_IMPORTED_MODULE_5__["ProductRegistrationComponent"] },
    { path: "companylist", canActivate: [_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]], component: _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_6__["CompanyListComponent"] },
    { path: "productregistrationlist", canActivate: [_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]], component: _product_registration_list_product_registration_list_component__WEBPACK_IMPORTED_MODULE_7__["ProductRegistrationListComponent"] },
    { path: "drugformation", canActivate: [_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]], component: _drug_formation_drug_formation_component__WEBPACK_IMPORTED_MODULE_8__["DrugFormationComponent"] },
    { path: "drugformationlist", canActivate: [_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]], component: _drug_formation_list_drug_formation_list_component__WEBPACK_IMPORTED_MODULE_13__["DrugFormationListComponent"] },
    { path: "addDrugs", canActivate: [_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]], component: _drug_formation_drug_formation_component__WEBPACK_IMPORTED_MODULE_8__["DrugFormationComponent"] },
    { path: "dashboard", canActivate: [_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]], component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"] },
    { path: "grn/:id", canActivate: [_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]], component: _grn_form_grn_form_component__WEBPACK_IMPORTED_MODULE_10__["GrnFormComponent"] },
    { path: "grn", canActivate: [_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]], component: _grn_form_grn_form_component__WEBPACK_IMPORTED_MODULE_10__["GrnFormComponent"] },
    { path: "grnlist", canActivate: [_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]], component: _grn_list_grn_list_component__WEBPACK_IMPORTED_MODULE_11__["GrnListComponent"] },
    { path: "grndetail/:id", canActivate: [_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]], component: _grn_detail_grn_detail_component__WEBPACK_IMPORTED_MODULE_12__["GrnDetailComponent"] },
    { path: 'salesList', component: _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_16__["SalesListComponent"] },
    { path: 'productdetail/:id', component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_17__["ProductDetailsComponent"] },
    { path: 'printproduct', component: _print_products_print_products_component__WEBPACK_IMPORTED_MODULE_18__["PrintProductsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'HMS-PHARMACY-UI';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _sales_mainscreen_sales_mainscreen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sales-mainscreen/sales-mainscreen.component */ "./src/app/sales-mainscreen/sales-mainscreen.component.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-company/add-company.component */ "./src/app/add-company/add-company.component.ts");
/* harmony import */ var _product_registration_product_registration_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product-registration/product-registration.component */ "./src/app/product-registration/product-registration.component.ts");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./company-list/company-list.component */ "./src/app/company-list/company-list.component.ts");
/* harmony import */ var _product_registration_list_product_registration_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./product-registration-list/product-registration-list.component */ "./src/app/product-registration-list/product-registration-list.component.ts");
/* harmony import */ var _drug_formation_drug_formation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./drug-formation/drug-formation.component */ "./src/app/drug-formation/drug-formation.component.ts");
/* harmony import */ var _drug_formation_list_drug_formation_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./drug-formation-list/drug-formation-list.component */ "./src/app/drug-formation-list/drug-formation-list.component.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var angular2_qrscanner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angular2-qrscanner */ "./node_modules/angular2-qrscanner/esm2015/angular2-qrscanner.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/progressspinner.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _grn_form_grn_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./grn-form/grn-form.component */ "./src/app/grn-form/grn-form.component.ts");
/* harmony import */ var _grn_list_grn_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./grn-list/grn-list.component */ "./src/app/grn-list/grn-list.component.ts");
/* harmony import */ var _grn_detail_grn_detail_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./grn-detail/grn-detail.component */ "./src/app/grn-detail/grn-detail.component.ts");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm2015/ngx-print.js");
/* harmony import */ var _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./sales-list/sales-list.component */ "./src/app/sales-list/sales-list.component.ts");
/* harmony import */ var _toast_service_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./toast-service.service */ "./src/app/toast-service.service.ts");
/* harmony import */ var _sales_mainscreen_qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./sales-mainscreen/qrcode/qrcode.component */ "./src/app/sales-mainscreen/qrcode/qrcode.component.ts");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/fesm2015/zxing-ngx-scanner.js");
/* harmony import */ var _right_user_bar_right_user_bar_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./right-user-bar/right-user-bar.component */ "./src/app/right-user-bar/right-user-bar.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _print_products_print_products_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./print-products/print-products.component */ "./src/app/print-products/print-products.component.ts");









































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavBarComponent"],
            _sales_mainscreen_sales_mainscreen_component__WEBPACK_IMPORTED_MODULE_12__["SalesMainscreenComponent"],
            _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_15__["AddCompanyComponent"],
            _drug_formation_drug_formation_component__WEBPACK_IMPORTED_MODULE_20__["DrugFormationComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_27__["DashboardComponent"],
            _grn_form_grn_form_component__WEBPACK_IMPORTED_MODULE_30__["GrnFormComponent"],
            _product_registration_product_registration_component__WEBPACK_IMPORTED_MODULE_16__["ProductRegistrationComponent"],
            _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_18__["CompanyListComponent"],
            _product_registration_list_product_registration_list_component__WEBPACK_IMPORTED_MODULE_19__["ProductRegistrationListComponent"],
            _drug_formation_drug_formation_component__WEBPACK_IMPORTED_MODULE_20__["DrugFormationComponent"],
            _drug_formation_list_drug_formation_list_component__WEBPACK_IMPORTED_MODULE_21__["DrugFormationListComponent"],
            _drug_formation_drug_formation_component__WEBPACK_IMPORTED_MODULE_20__["DrugFormationComponent"],
            _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_25__["LoginPageComponent"],
            _grn_list_grn_list_component__WEBPACK_IMPORTED_MODULE_31__["GrnListComponent"],
            _grn_detail_grn_detail_component__WEBPACK_IMPORTED_MODULE_32__["GrnDetailComponent"],
            _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_34__["SalesListComponent"],
            _sales_mainscreen_qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_36__["QrcodeComponent"],
            _right_user_bar_right_user_bar_component__WEBPACK_IMPORTED_MODULE_38__["RightUserBarComponent"],
            _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_39__["ProductDetailsComponent"],
            _print_products_print_products_component__WEBPACK_IMPORTED_MODULE_40__["PrintProductsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            primeng_multiselect__WEBPACK_IMPORTED_MODULE_8__["MultiSelectModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_13__["CardModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_14__["TableModule"],
            _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_37__["ZXingScannerModule"],
            primeng_radiobutton__WEBPACK_IMPORTED_MODULE_9__["RadioButtonModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_17__["ToastModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"],
            angular2_qrscanner__WEBPACK_IMPORTED_MODULE_26__["NgQrScannerModule"],
            primeng_calendar__WEBPACK_IMPORTED_MODULE_28__["CalendarModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_3__["PanelModule"],
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_29__["ProgressSpinnerModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_17__["ToastModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"],
            // HttpClientXsrfModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__["DropdownModule"],
            ngx_print__WEBPACK_IMPORTED_MODULE_33__["NgxPrintModule"]
        ],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_22__["MessageService"], _toast_service_service__WEBPACK_IMPORTED_MODULE_35__["ToastServiceService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/company-list/company-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/company-list/company-list.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnktbGlzdC9jb21wYW55LWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/company-list/company-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/company-list/company-list.component.ts ***!
  \********************************************************/
/*! exports provided: CompanyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyListComponent", function() { return CompanyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Services_company_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/company-service.service */ "./src/app/Services/company-service.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _add_company_company__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-company/company */ "./src/app/add-company/company.ts");






let CompanyListComponent = class CompanyListComponent {
    constructor(router, companyservice, messageservice) {
        this.router = router;
        this.companyservice = companyservice;
        this.messageservice = messageservice;
        this.company = new _add_company_company__WEBPACK_IMPORTED_MODULE_5__["Company"]();
    }
    ngOnInit() {
        this.showallcompanies();
    }
    routetoaddcompany() {
        this.router.navigate(['addcompany']);
    }
    showallcompanies() {
        this.companydata = [];
        this.companyservice.getallcompany().subscribe(data => {
            this.companydata = [];
            data.map(p => {
                // console.log("fmkmfa",p.productRegistrationList);
                this.companydata.push({
                    id: p.id,
                    name: p.name,
                    discount: p.discount,
                });
            });
        });
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'name', header: 'Company Name' },
            { field: 'discount', header: 'Discount' }
        ];
    }
    deletecompanybyid(id) {
        this.companyservice.deletebyid(id).subscribe(data => {
            // console.log(data);
            if (data) {
                this.showallcompanies();
                this.messageservice.add({
                    severity: "success",
                    summary: "Succesfully",
                    detail: "company succesfully deleted!"
                });
            }
        }, error => {
            // console.log(error);
            this.messageservice.add({
                severity: "error",
                summary: "Error Found",
                detail: "Something went wrong check your internet connection "
            });
        });
    }
    backToMonitor() {
        history.go(-1);
    }
};
CompanyListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Services_company_service_service__WEBPACK_IMPORTED_MODULE_3__["CompanyServiceService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
];
CompanyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company-list/company-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-list.component.css */ "./src/app/company-list/company-list.component.css")).default]
    })
], CompanyListComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/drug-formation-list/drug-formation-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/drug-formation-list/drug-formation-list.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RydWctZm9ybWF0aW9uLWxpc3QvZHJ1Zy1mb3JtYXRpb24tbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/drug-formation-list/drug-formation-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/drug-formation-list/drug-formation-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: DrugFormationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugFormationListComponent", function() { return DrugFormationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Services_drugformation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/drugformation.service */ "./src/app/Services/drugformation.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);





let DrugFormationListComponent = class DrugFormationListComponent {
    constructor(router, drugservice, messageservice) {
        this.router = router;
        this.drugservice = drugservice;
        this.messageservice = messageservice;
    }
    ngOnInit() {
        this.showallDrugFormation();
    }
    routetoDrugFormation() {
        this.router.navigate(['drugformation']);
    }
    showallDrugFormation() {
        this.drugFormationData = [];
        this.drugservice.getallDrugFormation().subscribe(data => {
            // console.log(data);
            this.drugFormationData = [];
            data.map(p => {
                // console.log("fmkmfa",p.productRegistrationList);
                this.drugFormationData.push({
                    id: p.id,
                    type: p.type
                });
            });
        });
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'type', header: 'Drug Formation Type' },
        ];
    }
    deletecompanybyid(id) {
        this.drugservice.deletebyid(id).subscribe(data => {
            // console.log(data);
            if (data) {
                this.showallDrugFormation();
            }
            this.messageservice.add({
                severity: "success",
                summary: "Succesfully",
                detail: "company succesfully deleted!"
            });
        }, error => {
            // console.log(error);
            this.messageservice.add({
                severity: "error",
                summary: "Error Found",
                detail: "Something went wrong check your internet connection "
            });
        });
    }
    backToMonitor() {
        history.go(-1);
    }
};
DrugFormationListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Services_drugformation_service__WEBPACK_IMPORTED_MODULE_3__["DrugformationService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
];
DrugFormationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-drug-formation-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drug-formation-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drug-formation-list/drug-formation-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drug-formation-list.component.css */ "./src/app/drug-formation-list/drug-formation-list.component.css")).default]
    })
], DrugFormationListComponent);



/***/ }),

/***/ "./src/app/drug-formation/drug-formation.component.css":
/*!*************************************************************!*\
  !*** ./src/app/drug-formation/drug-formation.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heading{\r\n    text-align: center;\r\n    color: green;\r\n    font-weight: bold;\r\n    margin-top: 1%;\r\n}\r\n\r\n.makeBold{\r\n    font-weight: bold !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJ1Zy1mb3JtYXRpb24vZHJ1Zy1mb3JtYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9kcnVnLWZvcm1hdGlvbi9kcnVnLWZvcm1hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG59XHJcblxyXG4ubWFrZUJvbGR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/drug-formation/drug-formation.component.ts":
/*!************************************************************!*\
  !*** ./src/app/drug-formation/drug-formation.component.ts ***!
  \************************************************************/
/*! exports provided: DrugFormationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugFormationComponent", function() { return DrugFormationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _drugFormation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drugFormation */ "./src/app/drug-formation/drugFormation.ts");
/* harmony import */ var _Services_drugformation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/drugformation.service */ "./src/app/Services/drugformation.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);






let DrugFormationComponent = class DrugFormationComponent {
    constructor(router, drugservice, messageservice) {
        this.router = router;
        this.drugservice = drugservice;
        this.messageservice = messageservice;
        this.drugformation = new _drugFormation__WEBPACK_IMPORTED_MODULE_3__["drugFormation"]();
    }
    ngOnInit() {
    }
    goBack() {
        window.history.go(-1);
    }
    routetodrugformationList() {
        this.router.navigate(['drugformationlist']);
    }
    submitdrugFormation() {
        // console.log(this.drugformation);
        this.drugservice.postDrugFormation(this.drugformation).subscribe(data => {
            // console.log(this.drugformation);
            this.messageservice.add({
                severity: "success",
                summary: "Succesfully",
                detail: "company successfully saved!"
            });
        }, error => {
            // console.log(error);
            this.messageservice.add({
                severity: "error",
                summary: "Error Found",
                detail: "Something went wrong check your internet connection "
            });
        });
    }
    backToMonitor() {
        history.go(-1);
    }
};
DrugFormationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Services_drugformation_service__WEBPACK_IMPORTED_MODULE_4__["DrugformationService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }
];
DrugFormationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-drug-formation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drug-formation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drug-formation/drug-formation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drug-formation.component.css */ "./src/app/drug-formation/drug-formation.component.css")).default]
    })
], DrugFormationComponent);



/***/ }),

/***/ "./src/app/drug-formation/drugFormation.ts":
/*!*************************************************!*\
  !*** ./src/app/drug-formation/drugFormation.ts ***!
  \*************************************************/
/*! exports provided: drugFormation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drugFormation", function() { return drugFormation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class drugFormation {
}


/***/ }),

/***/ "./src/app/grn-detail/grn-detail.component.css":
/*!*****************************************************!*\
  !*** ./src/app/grn-detail/grn-detail.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dybi1kZXRhaWwvZ3JuLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/grn-detail/grn-detail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/grn-detail/grn-detail.component.ts ***!
  \****************************************************/
/*! exports provided: GrnDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrnDetailComponent", function() { return GrnDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _grn_form_Grn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grn-form/Grn */ "./src/app/grn-form/Grn.ts");
/* harmony import */ var _Services_grn_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/grn.service */ "./src/app/Services/grn.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let GrnDetailComponent = class GrnDetailComponent {
    constructor(service, router, activateRoute) {
        this.service = service;
        this.router = router;
        this.activateRoute = activateRoute;
        this.companies = [];
    }
    ngOnInit() {
        this.grn = new _grn_form_Grn__WEBPACK_IMPORTED_MODULE_2__["Grn"]();
        this.id = this.activateRoute.snapshot.params['id'];
        if (this.id)
            this.getGrn(this.id);
    }
    getGrn(id) {
        this.service.getGrnById(id).subscribe((response) => {
            console.log(response);
            this.grn = response;
        });
    }
    routeToGrnList() {
        this.router.navigate(['grnlist']);
    }
};
GrnDetailComponent.ctorParameters = () => [
    { type: _Services_grn_service__WEBPACK_IMPORTED_MODULE_3__["GrnService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
GrnDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grn-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grn-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/grn-detail/grn-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grn-detail.component.css */ "./src/app/grn-detail/grn-detail.component.css")).default]
    })
], GrnDetailComponent);



/***/ }),

/***/ "./src/app/grn-form/Grn.ts":
/*!*********************************!*\
  !*** ./src/app/grn-form/Grn.ts ***!
  \*********************************/
/*! exports provided: Grn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grn", function() { return Grn; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Grn {
    constructor() {
        this.company = {
            name: String
        };
    }
}


/***/ }),

/***/ "./src/app/grn-form/grn-form.component.css":
/*!*************************************************!*\
  !*** ./src/app/grn-form/grn-form.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dybi1mb3JtL2dybi1mb3JtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/grn-form/grn-form.component.ts":
/*!************************************************!*\
  !*** ./src/app/grn-form/grn-form.component.ts ***!
  \************************************************/
/*! exports provided: GrnFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrnFormComponent", function() { return GrnFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_grn_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/grn.service */ "./src/app/Services/grn.service.ts");
/* harmony import */ var _Services_company_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/company-service.service */ "./src/app/Services/company-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Grn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Grn */ "./src/app/grn-form/Grn.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);







let GrnFormComponent = class GrnFormComponent {
    constructor(messageService, service, companyService, router, activateRoute) {
        this.messageService = messageService;
        this.service = service;
        this.companyService = companyService;
        this.router = router;
        this.activateRoute = activateRoute;
        this.disable = false;
        this.status = [];
        this.companies = [];
    }
    ngOnInit() {
        this.grn = new _Grn__WEBPACK_IMPORTED_MODULE_5__["Grn"]();
        this.id = this.activateRoute.snapshot.params['id'];
        this.getCompanies();
        if (this.id)
            this.getGrn(this.id);
    }
    getGrn(id) {
        this.service.getGrnById(id).subscribe((response) => {
            // console.log(response)
            this.grn = response;
        });
    }
    getCompanies() {
        this.companies = [{ label: 'Select company', value: null }];
        this.companyService.getallcompany().subscribe((response) => {
            response.map(company => this.companies.push({ label: company.name, value: company }));
        });
    }
    amountDetector() {
        this.grn.packing = this.grn.packing ? this.grn.packing : 0;
        this.grn.boxRate = this.grn.boxRate ? this.grn.boxRate : 0;
        this.disable = this.grn.discount > this.grn.productTotalAmount ? true : false;
        this.grn.discount = this.grn.discount ? this.grn.discount : 0;
        this.grn.productTotalAmount = this.grn.boxRate * this.grn.packing;
        this.grn.discountedAmount = this.grn.productTotalAmount - this.grn.discount;
    }
    submitGrn(data, myForm) {
        //let a = document.getElementById("");
        if (this.id) {
            this.service.updateGrnById(this.id, this.grn).subscribe((response) => {
                this.messageService.add({ severity: 'success', summary: 'Service Message', detail: response });
            }, error => {
                this.messageService.add({ severity: 'error', summary: 'Service Message', detail: error.error });
            });
        }
        else {
            console.log(this.grn);
            this.service.postGrn(this.grn).subscribe((response) => {
                this.messageService.add({ severity: 'success', summary: 'Service Message', detail: response });
                myForm.reset();
            }, error => {
                this.messageService.add({ severity: 'error', summary: 'Service Message', detail: error.error });
            });
        }
    }
    numberOnly(event) {
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    routeToGrnList() {
        this.router.navigate(['grnlist']);
    }
};
GrnFormComponent.ctorParameters = () => [
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"] },
    { type: _Services_grn_service__WEBPACK_IMPORTED_MODULE_2__["GrnService"] },
    { type: _Services_company_service_service__WEBPACK_IMPORTED_MODULE_3__["CompanyServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
GrnFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grn-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grn-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/grn-form/grn-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grn-form.component.css */ "./src/app/grn-form/grn-form.component.css")).default]
    })
], GrnFormComponent);



/***/ }),

/***/ "./src/app/grn-list/grn-list.component.css":
/*!*************************************************!*\
  !*** ./src/app/grn-list/grn-list.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hoverGrn:hover{\r\nbackground-color:#479761 !important;\r\ncolor: white;\r\n}\r\n\r\n@-webkit-keyframes ui-progress-spinner-color {\r\n    100%,\r\n    0% {\r\n        stroke: #386310;\r\n    }\r\n    40% {\r\n        stroke: #00e7ad;\r\n    }\r\n    66% {\r\n        stroke: rgb(196, 238, 234);\r\n    }\r\n    80%,\r\n    90% {\r\n        stroke: #29614e;\r\n    }\r\n}\r\n\r\n@keyframes ui-progress-spinner-color {\r\n    100%,\r\n    0% {\r\n        stroke: #386310;\r\n    }\r\n    40% {\r\n        stroke: #00e7ad;\r\n    }\r\n    66% {\r\n        stroke: rgb(196, 238, 234);\r\n    }\r\n    80%,\r\n    90% {\r\n        stroke: #29614e;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JuLWxpc3QvZ3JuLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLG1DQUFtQztBQUNuQyxZQUFZO0FBQ1o7O0FBRUE7SUFDSTs7UUFFSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTs7UUFFSSxlQUFlO0lBQ25CO0FBQ0o7O0FBZkE7SUFDSTs7UUFFSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTs7UUFFSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ncm4tbGlzdC9ncm4tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvdmVyR3JuOmhvdmVye1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiM0Nzk3NjEgIWltcG9ydGFudDtcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHVpLXByb2dyZXNzLXNwaW5uZXItY29sb3Ige1xyXG4gICAgMTAwJSxcclxuICAgIDAlIHtcclxuICAgICAgICBzdHJva2U6ICMzODYzMTA7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAgIHN0cm9rZTogIzAwZTdhZDtcclxuICAgIH1cclxuICAgIDY2JSB7XHJcbiAgICAgICAgc3Ryb2tlOiByZ2IoMTk2LCAyMzgsIDIzNCk7XHJcbiAgICB9XHJcbiAgICA4MCUsXHJcbiAgICA5MCUge1xyXG4gICAgICAgIHN0cm9rZTogIzI5NjE0ZTtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/grn-list/grn-list.component.ts":
/*!************************************************!*\
  !*** ./src/app/grn-list/grn-list.component.ts ***!
  \************************************************/
/*! exports provided: GrnListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrnListComponent", function() { return GrnListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Services_grn_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/grn.service */ "./src/app/Services/grn.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);





let GrnListComponent = class GrnListComponent {
    constructor(router, service, messageService) {
        this.router = router;
        this.service = service;
        this.messageService = messageService;
        this.totalamount = 0;
        this.grnData = [];
        this.loader = true;
    }
    ngOnInit() {
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'invoice', header: 'Invoice No' },
            { field: 'productName', header: 'Product Name' },
            { field: 'productTotalAmount', header: 'Product Total Amount' },
            { field: 'receivedBy', header: 'Received by' },
            { field: 'company', header: 'Company' }
        ];
        this.getGrnList();
    }
    getGrnList() {
        this.grnData = [];
        this.service.getGrnList().subscribe((response) => {
            this.loader = false;
            this.totalamount = 0;
            response.map((grn) => {
                this.totalamount = this.totalamount + grn.productTotalAmount;
                var obj = {
                    id: grn.id,
                    invoice: grn.invoice,
                    productName: grn.productName,
                    productTotalAmount: grn.productTotalAmount,
                    receivedBy: grn.receivedBy,
                    company: grn.company.name
                };
                this.grnData = [...this.grnData, obj];
                console.log("yeh raha total amount", this.totalamount);
            });
        }, error => {
            this.loader = false;
        });
    }
    deleteGrn(id) {
        this.service.deleteGrn(id).subscribe((response) => {
            this.getGrnList();
            this.messageService.add({ severity: 'success', summary: 'Service Message', detail: response });
        });
    }
    gotoDetails(id) {
        this.router.navigate(['grndetail/' + id]);
    }
    updateGrn(id) {
        this.router.navigate(['grn/' + id]);
    }
    routeToGrn() {
        this.router.navigate(['grn']);
    }
};
GrnListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Services_grn_service__WEBPACK_IMPORTED_MODULE_3__["GrnService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
];
GrnListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grn-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grn-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/grn-list/grn-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grn-list.component.css */ "./src/app/grn-list/grn-list.component.css")).default]
    })
], GrnListComponent);



/***/ }),

/***/ "./src/app/guard/auth-guard.service.ts":
/*!*********************************************!*\
  !*** ./src/app/guard/auth-guard.service.ts ***!
  \*********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);


// import { CanActivate } from '@angular/router/src/utils/preactivation';


let AuthGuardService = class AuthGuardService {
    constructor(router, messageService) {
        this.router = router;
        this.messageService = messageService;
    }
    // this prevents from getting into another url without login
    canActivate(next, state) {
        if (sessionStorage.getItem('token') != null) {
            return true;
        }
        else {
            this.errorMethod("Session Expired Please Login Again");
            this.router.navigate(['']);
            return false;
        }
    }
    errorMethod(msg) {
        this.messageService.add({
            severity: 'error',
            summary: msg.toString(),
            detail: 'retry login'
        });
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "./src/app/login-page/login-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-page/login-page.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n \r\n\r\n\r\n\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n[ RESTYLE TAG ]*/\r\n\r\n* {\r\n\tmargin: 0px; \r\n\tpadding: 0px; \r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.wrap{\r\n    \r\n    background-image:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('hospital.jpg');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n\r\n}\r\n\r\n/* body, html {\r\n\theight: 100%;\r\n\tfont-family: sans-serif, sans-serif;\r\n} */\r\n\r\n/*---------------------------------------------*/\r\n\r\na {\r\n\tfont-family: sans-serif;\r\n\tfont-size: 14px;\r\n\tline-height: 1.7;\r\n\tcolor: #666666;\r\n\tmargin: 0px;\r\n\ttransition: all 0.4s;\r\n\t-webkit-transition: all 0.4s;\r\n  -o-transition: all 0.4s;\r\n  -moz-transition: all 0.4s;\r\n}\r\n\r\na:focus {\r\n\toutline: none !important;\r\n}\r\n\r\na:hover {\r\n\ttext-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\nh1,h2,h3,h4,h5,h6 {\r\n    margin: 0px;\r\n    /* font-weight: bold; */\r\n}\r\n\r\np {\r\n\tfont-family: sans-serif;\r\n\tfont-size: 14px;\r\n\tline-height: 1.7;\r\n\tcolor: #666666;\r\n\tmargin: 0px;\r\n}\r\n\r\nul, li {\r\n\tmargin: 0px;\r\n\tlist-style-type: none;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\ninput {\r\n\toutline: none;\r\n\tborder: none;\r\n}\r\n\r\ntextarea {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\ntextarea:focus, input:focus {\r\n  border-color: transparent !important;\r\n}\r\n\r\ninput:focus::-webkit-input-placeholder { color:transparent; }\r\n\r\ninput:focus:-moz-placeholder { color:transparent; }\r\n\r\ninput:focus::-moz-placeholder { color:transparent; }\r\n\r\ninput:focus:-ms-input-placeholder { color:transparent; }\r\n\r\ntextarea:focus::-webkit-input-placeholder { color:transparent; }\r\n\r\ntextarea:focus:-moz-placeholder { color:transparent; }\r\n\r\ntextarea:focus::-moz-placeholder { color:transparent; }\r\n\r\ntextarea:focus:-ms-input-placeholder { color:transparent; }\r\n\r\ninput::-webkit-input-placeholder { color: #fff;}\r\n\r\ninput:-moz-placeholder { color: #fff;}\r\n\r\ninput::-moz-placeholder { color: rgb(41, 13, 13);}\r\n\r\ninput:-ms-input-placeholder { color: #fff;}\r\n\r\ntextarea::-webkit-input-placeholder { color: #fff;}\r\n\r\ntextarea:-moz-placeholder { color: #fff;}\r\n\r\ntextarea::-moz-placeholder { color: #fff;}\r\n\r\ntextarea:-ms-input-placeholder { color: #fff;}\r\n\r\nlabel {\r\n  margin: 0;\r\n  display: block;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\nbutton {\r\n\toutline: none !important;\r\n\tborder: none;\r\n\tbackground: transparent;\r\n}\r\n\r\nbutton:hover {\r\n\tcursor: pointer;\r\n}\r\n\r\niframe {\r\n\tborder: none !important;\r\n}\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n[ Utility ]*/\r\n\r\n.txt1 {\r\n  font-family: sans-serif;\r\n  font-size: 13px;\r\n  color: #e5e5e5;\r\n  line-height: 1.5;\r\n}\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n[ login ]*/\r\n\r\n.limiter {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.container-login100 {\r\n  width: 100%;  \r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 15px;\r\n  /* background: url(\"../../assets/images/hospital.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover; */\r\n  position: relative;\r\n  z-index: 1;  \r\n}\r\n\r\n.container-login100::before {\r\n  /* content: \"\"; */\r\n  display: block;\r\n  position: absolute;\r\n  z-index: -1;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(255,255,255,0.9);\r\n}\r\n\r\n.wrap-login100 {\r\n  width: 357px;\r\n  margin-bottom: 15%;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    padding: 55px 55px 37px 55px;\r\n    background: #075727e3;\r\n  /* background: #9152f8; */\r\n  background: linear-gradient(top, #7579ff, #b224ef);\r\n}\r\n\r\n/*------------------------------------------------------------------\r\n[ Form ]*/\r\n\r\n.login100-form {\r\n  width: 100%;\r\n}\r\n\r\n.login100-form-logo {\r\n  font-size: 60px; \r\n  color: #333333;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 120px;\r\n  height: 120px;\r\n  border-radius: 50%;\r\n  background-color: #fff;\r\n  margin: 0 auto;\r\n}\r\n\r\n.login100-form-title {\r\n  font-family: Poppins-Medium;\r\n  font-size: 30px;\r\n  color: #fff;\r\n  line-height: 1.2;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n\r\n  display: block;\r\n}\r\n\r\n/*------------------------------------------------------------------\r\n[ Input ]*/\r\n\r\n.wrap-input100 {\r\n  width: 100%;\r\n  position: relative;\r\n  border-bottom: 2px solid rgba(255,255,255,0.24);\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.input100 {\r\n  font-family: sans-serif;\r\n  font-size: 16px;\r\n  color: #fff;\r\n  line-height: 1.2;\r\n\r\n  display: block;\r\n  width: 100%;\r\n  height: 45px;\r\n  background: transparent;\r\n  padding: 0 5px 0 38px;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\n.focus-input100 {\r\n  position: absolute;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n.focus-input100::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  bottom: -2px;\r\n  left: 0;\r\n  width: 0;\r\n  height: 2px;\r\n  transition: all 0.4s;\r\n\r\n  background: #fff;\r\n}\r\n\r\n.focus-input100::after {\r\n  /* font-family: Material-Design-Iconic-Font; */\r\n  font-size: 22px;\r\n  color: #fff;\r\n\r\n  /* content: attr(data-placeholder); */\r\n  display: block;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 6px;\r\n  left: 0px;\r\n  padding-left: 5px;\r\n  transition: all 0.4s;\r\n}\r\n\r\n.input100:focus {\r\n  padding-left: 5px;\r\n}\r\n\r\n.input100:focus + .focus-input100::after {\r\n  top: -22px;\r\n  font-size: 18px;\r\n}\r\n\r\n.input100:focus + .focus-input100::before {\r\n  width: 100%;\r\n}\r\n\r\n.has-val.input100 + .focus-input100::after {\r\n  top: -22px;\r\n  font-size: 18px;\r\n}\r\n\r\n.has-val.input100 + .focus-input100::before {\r\n  width: 100%;\r\n}\r\n\r\n.has-val.input100 {\r\n  padding-left: 5px;\r\n}\r\n\r\n/*==================================================================\r\n[ Restyle Checkbox ]*/\r\n\r\n.contact100-form-checkbox {\r\n  padding-left: 5px;\r\n  padding-top: 5px;\r\n  padding-bottom: 35px;\r\n}\r\n\r\n.input-checkbox100 {\r\n  display: none;\r\n}\r\n\r\n.label-checkbox100 {\r\n  font-family: sans-serif;\r\n  font-size: 13px;\r\n  color: #fff;\r\n  line-height: 1.2;\r\n\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 26px;\r\n  cursor: pointer;\r\n}\r\n\r\n.label-checkbox100::before {\r\n  content: \"\\f26b\";\r\n  /* font-family: Material-Design-Iconic-Font; */\r\n  font-size: 13px;\r\n  color: transparent;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  width: 16px;\r\n  height: 16px;\r\n  border-radius: 2px;\r\n  background: #fff;\r\n  left: 0;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.input-checkbox100:checked + .label-checkbox100::before {\r\n  color: #555555;\r\n}\r\n\r\n/*------------------------------------------------------------------\r\n[ Button ]*/\r\n\r\n.container-login100-form-btn {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.login100-form-btn {\r\n  font-family: Poppins-Medium;\r\n  font-size: 16px;\r\n  color: #555555;\r\n  line-height: 1.2;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0 20px;\r\n  min-width: 120px;\r\n  height: 50px;\r\n  border-radius: 25px;\r\n\r\n  background:#08792de6;\r\n  background: linear-gradient(bottom, #7579ff, #b224ef);\r\n  position: relative;\r\n  z-index: 1;\r\n  transition: all 0.4s;\r\n}\r\n\r\n.login100-form-btn::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  z-index: -1;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 25px;\r\n  background-color: #fff;\r\n  top: 0;\r\n  left: 0;\r\n  opacity: 1;\r\n  transition: all 0.4s;\r\n}\r\n\r\n.login100-form-btn:hover {\r\n  color: #fff;\r\n}\r\n\r\n.login100-form-btn:hover:before {\r\n  opacity: 0;\r\n}\r\n\r\n/*------------------------------------------------------------------\r\n[ Responsive ]*/\r\n\r\n@media (max-width: 576px) {\r\n  .wrap-login100 {\r\n    padding: 55px 15px 37px 15px;\r\n  }\r\n}\r\n\r\n/*------------------------------------------------------------------\r\n[ Alert validate ]*/\r\n\r\n.validate-input {\r\n  position: relative;\r\n}\r\n\r\n.alert-validate::before {\r\n  content: attr(data-validate);\r\n  position: absolute;\r\n  max-width: 70%;\r\n  background-color: #fff;\r\n  border: 1px solid #c80000;\r\n  border-radius: 2px;\r\n  padding: 4px 25px 4px 10px;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  right: 0px;\r\n  pointer-events: none;\r\n\r\n  font-family: sans-serif;\r\n  color: #c80000;\r\n  font-size: 13px;\r\n  line-height: 1.4;\r\n  text-align: left;\r\n\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: opacity 0.4s;\r\n}\r\n\r\n.alert-validate::after {\r\n  content: \"\\f12a\";\r\n  font-family: FontAwesome;\r\n  font-size: 16px;\r\n  color: #c80000;\r\n\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  right: 5px;\r\n}\r\n\r\n.alert-validate:hover:before {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .alert-validate::before {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/*[ FONT SIZE ]\r\n///////////////////////////////////////////////////////////\r\n*/\r\n\r\n.fs-1 {font-size: 1px;}\r\n\r\n.fs-2 {font-size: 2px;}\r\n\r\n.fs-3 {font-size: 3px;}\r\n\r\n.fs-4 {font-size: 4px;}\r\n\r\n.fs-5 {font-size: 5px;}\r\n\r\n.fs-6 {font-size: 6px;}\r\n\r\n.fs-7 {font-size: 7px;}\r\n\r\n.fs-8 {font-size: 8px;}\r\n\r\n.fs-9 {font-size: 9px;}\r\n\r\n.fs-10 {font-size: 10px;}\r\n\r\n.fs-11 {font-size: 11px;}\r\n\r\n.fs-12 {font-size: 12px;}\r\n\r\n.fs-13 {font-size: 13px;}\r\n\r\n.fs-14 {font-size: 14px;}\r\n\r\n.fs-15 {font-size: 15px;}\r\n\r\n.fs-16 {font-size: 16px;}\r\n\r\n.fs-17 {font-size: 17px;}\r\n\r\n.fs-18 {font-size: 18px;}\r\n\r\n.fs-19 {font-size: 19px;}\r\n\r\n.fs-20 {font-size: 20px;}\r\n\r\n.fs-21 {font-size: 21px;}\r\n\r\n.fs-22 {font-size: 22px;}\r\n\r\n.fs-23 {font-size: 23px;}\r\n\r\n.fs-24 {font-size: 24px;}\r\n\r\n.fs-25 {font-size: 25px;}\r\n\r\n.fs-26 {font-size: 26px;}\r\n\r\n.fs-27 {font-size: 27px;}\r\n\r\n.fs-28 {font-size: 28px;}\r\n\r\n.fs-29 {font-size: 29px;}\r\n\r\n.fs-30 {font-size: 30px;}\r\n\r\n.fs-31 {font-size: 31px;}\r\n\r\n.fs-32 {font-size: 32px;}\r\n\r\n.fs-33 {font-size: 33px;}\r\n\r\n.fs-34 {font-size: 34px;}\r\n\r\n.fs-35 {font-size: 35px;}\r\n\r\n.fs-36 {font-size: 36px;}\r\n\r\n.fs-37 {font-size: 37px;}\r\n\r\n.fs-38 {font-size: 38px;}\r\n\r\n.fs-39 {font-size: 39px;}\r\n\r\n.fs-40 {font-size: 40px;}\r\n\r\n.fs-41 {font-size: 41px;}\r\n\r\n.fs-42 {font-size: 42px;}\r\n\r\n.fs-43 {font-size: 43px;}\r\n\r\n.fs-44 {font-size: 44px;}\r\n\r\n.fs-45 {font-size: 45px;}\r\n\r\n.fs-46 {font-size: 46px;}\r\n\r\n.fs-47 {font-size: 47px;}\r\n\r\n.fs-48 {font-size: 48px;}\r\n\r\n.fs-49 {font-size: 49px;}\r\n\r\n.fs-50 {font-size: 50px;}\r\n\r\n.fs-51 {font-size: 51px;}\r\n\r\n.fs-52 {font-size: 52px;}\r\n\r\n.fs-53 {font-size: 53px;}\r\n\r\n.fs-54 {font-size: 54px;}\r\n\r\n.fs-55 {font-size: 55px;}\r\n\r\n.fs-56 {font-size: 56px;}\r\n\r\n.fs-57 {font-size: 57px;}\r\n\r\n.fs-58 {font-size: 58px;}\r\n\r\n.fs-59 {font-size: 59px;}\r\n\r\n.fs-60 {font-size: 60px;}\r\n\r\n.fs-61 {font-size: 61px;}\r\n\r\n.fs-62 {font-size: 62px;}\r\n\r\n.fs-63 {font-size: 63px;}\r\n\r\n.fs-64 {font-size: 64px;}\r\n\r\n.fs-65 {font-size: 65px;}\r\n\r\n.fs-66 {font-size: 66px;}\r\n\r\n.fs-67 {font-size: 67px;}\r\n\r\n.fs-68 {font-size: 68px;}\r\n\r\n.fs-69 {font-size: 69px;}\r\n\r\n.fs-70 {font-size: 70px;}\r\n\r\n.fs-71 {font-size: 71px;}\r\n\r\n.fs-72 {font-size: 72px;}\r\n\r\n.fs-73 {font-size: 73px;}\r\n\r\n.fs-74 {font-size: 74px;}\r\n\r\n.fs-75 {font-size: 75px;}\r\n\r\n.fs-76 {font-size: 76px;}\r\n\r\n.fs-77 {font-size: 77px;}\r\n\r\n.fs-78 {font-size: 78px;}\r\n\r\n.fs-79 {font-size: 79px;}\r\n\r\n.fs-80 {font-size: 80px;}\r\n\r\n.fs-81 {font-size: 81px;}\r\n\r\n.fs-82 {font-size: 82px;}\r\n\r\n.fs-83 {font-size: 83px;}\r\n\r\n.fs-84 {font-size: 84px;}\r\n\r\n.fs-85 {font-size: 85px;}\r\n\r\n.fs-86 {font-size: 86px;}\r\n\r\n.fs-87 {font-size: 87px;}\r\n\r\n.fs-88 {font-size: 88px;}\r\n\r\n.fs-89 {font-size: 89px;}\r\n\r\n.fs-90 {font-size: 90px;}\r\n\r\n.fs-91 {font-size: 91px;}\r\n\r\n.fs-92 {font-size: 92px;}\r\n\r\n.fs-93 {font-size: 93px;}\r\n\r\n.fs-94 {font-size: 94px;}\r\n\r\n.fs-95 {font-size: 95px;}\r\n\r\n.fs-96 {font-size: 96px;}\r\n\r\n.fs-97 {font-size: 97px;}\r\n\r\n.fs-98 {font-size: 98px;}\r\n\r\n.fs-99 {font-size: 99px;}\r\n\r\n.fs-100 {font-size: 100px;}\r\n\r\n.fs-101 {font-size: 101px;}\r\n\r\n.fs-102 {font-size: 102px;}\r\n\r\n.fs-103 {font-size: 103px;}\r\n\r\n.fs-104 {font-size: 104px;}\r\n\r\n.fs-105 {font-size: 105px;}\r\n\r\n.fs-106 {font-size: 106px;}\r\n\r\n.fs-107 {font-size: 107px;}\r\n\r\n.fs-108 {font-size: 108px;}\r\n\r\n.fs-109 {font-size: 109px;}\r\n\r\n.fs-110 {font-size: 110px;}\r\n\r\n.fs-111 {font-size: 111px;}\r\n\r\n.fs-112 {font-size: 112px;}\r\n\r\n.fs-113 {font-size: 113px;}\r\n\r\n.fs-114 {font-size: 114px;}\r\n\r\n.fs-115 {font-size: 115px;}\r\n\r\n.fs-116 {font-size: 116px;}\r\n\r\n.fs-117 {font-size: 117px;}\r\n\r\n.fs-118 {font-size: 118px;}\r\n\r\n.fs-119 {font-size: 119px;}\r\n\r\n.fs-120 {font-size: 120px;}\r\n\r\n.fs-121 {font-size: 121px;}\r\n\r\n.fs-122 {font-size: 122px;}\r\n\r\n.fs-123 {font-size: 123px;}\r\n\r\n.fs-124 {font-size: 124px;}\r\n\r\n.fs-125 {font-size: 125px;}\r\n\r\n.fs-126 {font-size: 126px;}\r\n\r\n.fs-127 {font-size: 127px;}\r\n\r\n.fs-128 {font-size: 128px;}\r\n\r\n.fs-129 {font-size: 129px;}\r\n\r\n.fs-130 {font-size: 130px;}\r\n\r\n.fs-131 {font-size: 131px;}\r\n\r\n.fs-132 {font-size: 132px;}\r\n\r\n.fs-133 {font-size: 133px;}\r\n\r\n.fs-134 {font-size: 134px;}\r\n\r\n.fs-135 {font-size: 135px;}\r\n\r\n.fs-136 {font-size: 136px;}\r\n\r\n.fs-137 {font-size: 137px;}\r\n\r\n.fs-138 {font-size: 138px;}\r\n\r\n.fs-139 {font-size: 139px;}\r\n\r\n.fs-140 {font-size: 140px;}\r\n\r\n.fs-141 {font-size: 141px;}\r\n\r\n.fs-142 {font-size: 142px;}\r\n\r\n.fs-143 {font-size: 143px;}\r\n\r\n.fs-144 {font-size: 144px;}\r\n\r\n.fs-145 {font-size: 145px;}\r\n\r\n.fs-146 {font-size: 146px;}\r\n\r\n.fs-147 {font-size: 147px;}\r\n\r\n.fs-148 {font-size: 148px;}\r\n\r\n.fs-149 {font-size: 149px;}\r\n\r\n.fs-150 {font-size: 150px;}\r\n\r\n.fs-151 {font-size: 151px;}\r\n\r\n.fs-152 {font-size: 152px;}\r\n\r\n.fs-153 {font-size: 153px;}\r\n\r\n.fs-154 {font-size: 154px;}\r\n\r\n.fs-155 {font-size: 155px;}\r\n\r\n.fs-156 {font-size: 156px;}\r\n\r\n.fs-157 {font-size: 157px;}\r\n\r\n.fs-158 {font-size: 158px;}\r\n\r\n.fs-159 {font-size: 159px;}\r\n\r\n.fs-160 {font-size: 160px;}\r\n\r\n.fs-161 {font-size: 161px;}\r\n\r\n.fs-162 {font-size: 162px;}\r\n\r\n.fs-163 {font-size: 163px;}\r\n\r\n.fs-164 {font-size: 164px;}\r\n\r\n.fs-165 {font-size: 165px;}\r\n\r\n.fs-166 {font-size: 166px;}\r\n\r\n.fs-167 {font-size: 167px;}\r\n\r\n.fs-168 {font-size: 168px;}\r\n\r\n.fs-169 {font-size: 169px;}\r\n\r\n.fs-170 {font-size: 170px;}\r\n\r\n.fs-171 {font-size: 171px;}\r\n\r\n.fs-172 {font-size: 172px;}\r\n\r\n.fs-173 {font-size: 173px;}\r\n\r\n.fs-174 {font-size: 174px;}\r\n\r\n.fs-175 {font-size: 175px;}\r\n\r\n.fs-176 {font-size: 176px;}\r\n\r\n.fs-177 {font-size: 177px;}\r\n\r\n.fs-178 {font-size: 178px;}\r\n\r\n.fs-179 {font-size: 179px;}\r\n\r\n.fs-180 {font-size: 180px;}\r\n\r\n.fs-181 {font-size: 181px;}\r\n\r\n.fs-182 {font-size: 182px;}\r\n\r\n.fs-183 {font-size: 183px;}\r\n\r\n.fs-184 {font-size: 184px;}\r\n\r\n.fs-185 {font-size: 185px;}\r\n\r\n.fs-186 {font-size: 186px;}\r\n\r\n.fs-187 {font-size: 187px;}\r\n\r\n.fs-188 {font-size: 188px;}\r\n\r\n.fs-189 {font-size: 189px;}\r\n\r\n.fs-190 {font-size: 190px;}\r\n\r\n.fs-191 {font-size: 191px;}\r\n\r\n.fs-192 {font-size: 192px;}\r\n\r\n.fs-193 {font-size: 193px;}\r\n\r\n.fs-194 {font-size: 194px;}\r\n\r\n.fs-195 {font-size: 195px;}\r\n\r\n.fs-196 {font-size: 196px;}\r\n\r\n.fs-197 {font-size: 197px;}\r\n\r\n.fs-198 {font-size: 198px;}\r\n\r\n.fs-199 {font-size: 199px;}\r\n\r\n.fs-200 {font-size: 200px;}\r\n\r\n/*[ PADDING ]\r\n///////////////////////////////////////////////////////////\r\n*/\r\n\r\n.p-t-0 {padding-top: 0px;}\r\n\r\n.p-t-1 {padding-top: 1px;}\r\n\r\n.p-t-2 {padding-top: 2px;}\r\n\r\n.p-t-3 {padding-top: 3px;}\r\n\r\n.p-t-4 {padding-top: 4px;}\r\n\r\n.p-t-5 {padding-top: 5px;}\r\n\r\n.p-t-6 {padding-top: 6px;}\r\n\r\n.p-t-7 {padding-top: 7px;}\r\n\r\n.p-t-8 {padding-top: 8px;}\r\n\r\n.p-t-9 {padding-top: 9px;}\r\n\r\n.p-t-10 {padding-top: 10px;}\r\n\r\n.p-t-11 {padding-top: 11px;}\r\n\r\n.p-t-12 {padding-top: 12px;}\r\n\r\n.p-t-13 {padding-top: 13px;}\r\n\r\n.p-t-14 {padding-top: 14px;}\r\n\r\n.p-t-15 {padding-top: 15px;}\r\n\r\n.p-t-16 {padding-top: 16px;}\r\n\r\n.p-t-17 {padding-top: 17px;}\r\n\r\n.p-t-18 {padding-top: 18px;}\r\n\r\n.p-t-19 {padding-top: 19px;}\r\n\r\n.p-t-20 {padding-top: 20px;}\r\n\r\n.p-t-21 {padding-top: 21px;}\r\n\r\n.p-t-22 {padding-top: 22px;}\r\n\r\n.p-t-23 {padding-top: 23px;}\r\n\r\n.p-t-24 {padding-top: 24px;}\r\n\r\n.p-t-25 {padding-top: 25px;}\r\n\r\n.p-t-26 {padding-top: 26px;}\r\n\r\n.p-t-27 {padding-top: 27px;}\r\n\r\n.p-t-28 {padding-top: 28px;}\r\n\r\n.p-t-29 {padding-top: 29px;}\r\n\r\n.p-t-30 {padding-top: 30px;}\r\n\r\n.p-t-31 {padding-top: 31px;}\r\n\r\n.p-t-32 {padding-top: 32px;}\r\n\r\n.p-t-33 {padding-top: 33px;}\r\n\r\n.p-t-34 {padding-top: 34px;}\r\n\r\n.p-t-35 {padding-top: 35px;}\r\n\r\n.p-t-36 {padding-top: 36px;}\r\n\r\n.p-t-37 {padding-top: 37px;}\r\n\r\n.p-t-38 {padding-top: 38px;}\r\n\r\n.p-t-39 {padding-top: 39px;}\r\n\r\n.p-t-40 {padding-top: 40px;}\r\n\r\n.p-t-41 {padding-top: 41px;}\r\n\r\n.p-t-42 {padding-top: 42px;}\r\n\r\n.p-t-43 {padding-top: 43px;}\r\n\r\n.p-t-44 {padding-top: 44px;}\r\n\r\n.p-t-45 {padding-top: 45px;}\r\n\r\n.p-t-46 {padding-top: 46px;}\r\n\r\n.p-t-47 {padding-top: 47px;}\r\n\r\n.p-t-48 {padding-top: 48px;}\r\n\r\n.p-t-49 {padding-top: 49px;}\r\n\r\n.p-t-50 {padding-top: 50px;}\r\n\r\n.p-t-51 {padding-top: 51px;}\r\n\r\n.p-t-52 {padding-top: 52px;}\r\n\r\n.p-t-53 {padding-top: 53px;}\r\n\r\n.p-t-54 {padding-top: 54px;}\r\n\r\n.p-t-55 {padding-top: 55px;}\r\n\r\n.p-t-56 {padding-top: 56px;}\r\n\r\n.p-t-57 {padding-top: 57px;}\r\n\r\n.p-t-58 {padding-top: 58px;}\r\n\r\n.p-t-59 {padding-top: 59px;}\r\n\r\n.p-t-60 {padding-top: 60px;}\r\n\r\n.p-t-61 {padding-top: 61px;}\r\n\r\n.p-t-62 {padding-top: 62px;}\r\n\r\n.p-t-63 {padding-top: 63px;}\r\n\r\n.p-t-64 {padding-top: 64px;}\r\n\r\n.p-t-65 {padding-top: 65px;}\r\n\r\n.p-t-66 {padding-top: 66px;}\r\n\r\n.p-t-67 {padding-top: 67px;}\r\n\r\n.p-t-68 {padding-top: 68px;}\r\n\r\n.p-t-69 {padding-top: 69px;}\r\n\r\n.p-t-70 {padding-top: 70px;}\r\n\r\n.p-t-71 {padding-top: 71px;}\r\n\r\n.p-t-72 {padding-top: 72px;}\r\n\r\n.p-t-73 {padding-top: 73px;}\r\n\r\n.p-t-74 {padding-top: 74px;}\r\n\r\n.p-t-75 {padding-top: 75px;}\r\n\r\n.p-t-76 {padding-top: 76px;}\r\n\r\n.p-t-77 {padding-top: 77px;}\r\n\r\n.p-t-78 {padding-top: 78px;}\r\n\r\n.p-t-79 {padding-top: 79px;}\r\n\r\n.p-t-80 {padding-top: 80px;}\r\n\r\n.p-t-81 {padding-top: 81px;}\r\n\r\n.p-t-82 {padding-top: 82px;}\r\n\r\n.p-t-83 {padding-top: 83px;}\r\n\r\n.p-t-84 {padding-top: 84px;}\r\n\r\n.p-t-85 {padding-top: 85px;}\r\n\r\n.p-t-86 {padding-top: 86px;}\r\n\r\n.p-t-87 {padding-top: 87px;}\r\n\r\n.p-t-88 {padding-top: 88px;}\r\n\r\n.p-t-89 {padding-top: 89px;}\r\n\r\n.p-t-90 {padding-top: 90px;}\r\n\r\n.p-t-91 {padding-top: 91px;}\r\n\r\n.p-t-92 {padding-top: 92px;}\r\n\r\n.p-t-93 {padding-top: 93px;}\r\n\r\n.p-t-94 {padding-top: 94px;}\r\n\r\n.p-t-95 {padding-top: 95px;}\r\n\r\n.p-t-96 {padding-top: 96px;}\r\n\r\n.p-t-97 {padding-top: 97px;}\r\n\r\n.p-t-98 {padding-top: 98px;}\r\n\r\n.p-t-99 {padding-top: 99px;}\r\n\r\n.p-t-100 {padding-top: 100px;}\r\n\r\n.p-t-101 {padding-top: 101px;}\r\n\r\n.p-t-102 {padding-top: 102px;}\r\n\r\n.p-t-103 {padding-top: 103px;}\r\n\r\n.p-t-104 {padding-top: 104px;}\r\n\r\n.p-t-105 {padding-top: 105px;}\r\n\r\n.p-t-106 {padding-top: 106px;}\r\n\r\n.p-t-107 {padding-top: 107px;}\r\n\r\n.p-t-108 {padding-top: 108px;}\r\n\r\n.p-t-109 {padding-top: 109px;}\r\n\r\n.p-t-110 {padding-top: 110px;}\r\n\r\n.p-t-111 {padding-top: 111px;}\r\n\r\n.p-t-112 {padding-top: 112px;}\r\n\r\n.p-t-113 {padding-top: 113px;}\r\n\r\n.p-t-114 {padding-top: 114px;}\r\n\r\n.p-t-115 {padding-top: 115px;}\r\n\r\n.p-t-116 {padding-top: 116px;}\r\n\r\n.p-t-117 {padding-top: 117px;}\r\n\r\n.p-t-118 {padding-top: 118px;}\r\n\r\n.p-t-119 {padding-top: 119px;}\r\n\r\n.p-t-120 {padding-top: 120px;}\r\n\r\n.p-t-121 {padding-top: 121px;}\r\n\r\n.p-t-122 {padding-top: 122px;}\r\n\r\n.p-t-123 {padding-top: 123px;}\r\n\r\n.p-t-124 {padding-top: 124px;}\r\n\r\n.p-t-125 {padding-top: 125px;}\r\n\r\n.p-t-126 {padding-top: 126px;}\r\n\r\n.p-t-127 {padding-top: 127px;}\r\n\r\n.p-t-128 {padding-top: 128px;}\r\n\r\n.p-t-129 {padding-top: 129px;}\r\n\r\n.p-t-130 {padding-top: 130px;}\r\n\r\n.p-t-131 {padding-top: 131px;}\r\n\r\n.p-t-132 {padding-top: 132px;}\r\n\r\n.p-t-133 {padding-top: 133px;}\r\n\r\n.p-t-134 {padding-top: 134px;}\r\n\r\n.p-t-135 {padding-top: 135px;}\r\n\r\n.p-t-136 {padding-top: 136px;}\r\n\r\n.p-t-137 {padding-top: 137px;}\r\n\r\n.p-t-138 {padding-top: 138px;}\r\n\r\n.p-t-139 {padding-top: 139px;}\r\n\r\n.p-t-140 {padding-top: 140px;}\r\n\r\n.p-t-141 {padding-top: 141px;}\r\n\r\n.p-t-142 {padding-top: 142px;}\r\n\r\n.p-t-143 {padding-top: 143px;}\r\n\r\n.p-t-144 {padding-top: 144px;}\r\n\r\n.p-t-145 {padding-top: 145px;}\r\n\r\n.p-t-146 {padding-top: 146px;}\r\n\r\n.p-t-147 {padding-top: 147px;}\r\n\r\n.p-t-148 {padding-top: 148px;}\r\n\r\n.p-t-149 {padding-top: 149px;}\r\n\r\n.p-t-150 {padding-top: 150px;}\r\n\r\n.p-t-151 {padding-top: 151px;}\r\n\r\n.p-t-152 {padding-top: 152px;}\r\n\r\n.p-t-153 {padding-top: 153px;}\r\n\r\n.p-t-154 {padding-top: 154px;}\r\n\r\n.p-t-155 {padding-top: 155px;}\r\n\r\n.p-t-156 {padding-top: 156px;}\r\n\r\n.p-t-157 {padding-top: 157px;}\r\n\r\n.p-t-158 {padding-top: 158px;}\r\n\r\n.p-t-159 {padding-top: 159px;}\r\n\r\n.p-t-160 {padding-top: 160px;}\r\n\r\n.p-t-161 {padding-top: 161px;}\r\n\r\n.p-t-162 {padding-top: 162px;}\r\n\r\n.p-t-163 {padding-top: 163px;}\r\n\r\n.p-t-164 {padding-top: 164px;}\r\n\r\n.p-t-165 {padding-top: 165px;}\r\n\r\n.p-t-166 {padding-top: 166px;}\r\n\r\n.p-t-167 {padding-top: 167px;}\r\n\r\n.p-t-168 {padding-top: 168px;}\r\n\r\n.p-t-169 {padding-top: 169px;}\r\n\r\n.p-t-170 {padding-top: 170px;}\r\n\r\n.p-t-171 {padding-top: 171px;}\r\n\r\n.p-t-172 {padding-top: 172px;}\r\n\r\n.p-t-173 {padding-top: 173px;}\r\n\r\n.p-t-174 {padding-top: 174px;}\r\n\r\n.p-t-175 {padding-top: 175px;}\r\n\r\n.p-t-176 {padding-top: 176px;}\r\n\r\n.p-t-177 {padding-top: 177px;}\r\n\r\n.p-t-178 {padding-top: 178px;}\r\n\r\n.p-t-179 {padding-top: 179px;}\r\n\r\n.p-t-180 {padding-top: 180px;}\r\n\r\n.p-t-181 {padding-top: 181px;}\r\n\r\n.p-t-182 {padding-top: 182px;}\r\n\r\n.p-t-183 {padding-top: 183px;}\r\n\r\n.p-t-184 {padding-top: 184px;}\r\n\r\n.p-t-185 {padding-top: 185px;}\r\n\r\n.p-t-186 {padding-top: 186px;}\r\n\r\n.p-t-187 {padding-top: 187px;}\r\n\r\n.p-t-188 {padding-top: 188px;}\r\n\r\n.p-t-189 {padding-top: 189px;}\r\n\r\n.p-t-190 {padding-top: 190px;}\r\n\r\n.p-t-191 {padding-top: 191px;}\r\n\r\n.p-t-192 {padding-top: 192px;}\r\n\r\n.p-t-193 {padding-top: 193px;}\r\n\r\n.p-t-194 {padding-top: 194px;}\r\n\r\n.p-t-195 {padding-top: 195px;}\r\n\r\n.p-t-196 {padding-top: 196px;}\r\n\r\n.p-t-197 {padding-top: 197px;}\r\n\r\n.p-t-198 {padding-top: 198px;}\r\n\r\n.p-t-199 {padding-top: 199px;}\r\n\r\n.p-t-200 {padding-top: 200px;}\r\n\r\n.p-t-201 {padding-top: 201px;}\r\n\r\n.p-t-202 {padding-top: 202px;}\r\n\r\n.p-t-203 {padding-top: 203px;}\r\n\r\n.p-t-204 {padding-top: 204px;}\r\n\r\n.p-t-205 {padding-top: 205px;}\r\n\r\n.p-t-206 {padding-top: 206px;}\r\n\r\n.p-t-207 {padding-top: 207px;}\r\n\r\n.p-t-208 {padding-top: 208px;}\r\n\r\n.p-t-209 {padding-top: 209px;}\r\n\r\n.p-t-210 {padding-top: 210px;}\r\n\r\n.p-t-211 {padding-top: 211px;}\r\n\r\n.p-t-212 {padding-top: 212px;}\r\n\r\n.p-t-213 {padding-top: 213px;}\r\n\r\n.p-t-214 {padding-top: 214px;}\r\n\r\n.p-t-215 {padding-top: 215px;}\r\n\r\n.p-t-216 {padding-top: 216px;}\r\n\r\n.p-t-217 {padding-top: 217px;}\r\n\r\n.p-t-218 {padding-top: 218px;}\r\n\r\n.p-t-219 {padding-top: 219px;}\r\n\r\n.p-t-220 {padding-top: 220px;}\r\n\r\n.p-t-221 {padding-top: 221px;}\r\n\r\n.p-t-222 {padding-top: 222px;}\r\n\r\n.p-t-223 {padding-top: 223px;}\r\n\r\n.p-t-224 {padding-top: 224px;}\r\n\r\n.p-t-225 {padding-top: 225px;}\r\n\r\n.p-t-226 {padding-top: 226px;}\r\n\r\n.p-t-227 {padding-top: 227px;}\r\n\r\n.p-t-228 {padding-top: 228px;}\r\n\r\n.p-t-229 {padding-top: 229px;}\r\n\r\n.p-t-230 {padding-top: 230px;}\r\n\r\n.p-t-231 {padding-top: 231px;}\r\n\r\n.p-t-232 {padding-top: 232px;}\r\n\r\n.p-t-233 {padding-top: 233px;}\r\n\r\n.p-t-234 {padding-top: 234px;}\r\n\r\n.p-t-235 {padding-top: 235px;}\r\n\r\n.p-t-236 {padding-top: 236px;}\r\n\r\n.p-t-237 {padding-top: 237px;}\r\n\r\n.p-t-238 {padding-top: 238px;}\r\n\r\n.p-t-239 {padding-top: 239px;}\r\n\r\n.p-t-240 {padding-top: 240px;}\r\n\r\n.p-t-241 {padding-top: 241px;}\r\n\r\n.p-t-242 {padding-top: 242px;}\r\n\r\n.p-t-243 {padding-top: 243px;}\r\n\r\n.p-t-244 {padding-top: 244px;}\r\n\r\n.p-t-245 {padding-top: 245px;}\r\n\r\n.p-t-246 {padding-top: 246px;}\r\n\r\n.p-t-247 {padding-top: 247px;}\r\n\r\n.p-t-248 {padding-top: 248px;}\r\n\r\n.p-t-249 {padding-top: 249px;}\r\n\r\n.p-t-250 {padding-top: 250px;}\r\n\r\n.p-b-0 {padding-bottom: 0px;}\r\n\r\n.p-b-1 {padding-bottom: 1px;}\r\n\r\n.p-b-2 {padding-bottom: 2px;}\r\n\r\n.p-b-3 {padding-bottom: 3px;}\r\n\r\n.p-b-4 {padding-bottom: 4px;}\r\n\r\n.p-b-5 {padding-bottom: 5px;}\r\n\r\n.p-b-6 {padding-bottom: 6px;}\r\n\r\n.p-b-7 {padding-bottom: 7px;}\r\n\r\n.p-b-8 {padding-bottom: 8px;}\r\n\r\n.p-b-9 {padding-bottom: 9px;}\r\n\r\n.p-b-10 {padding-bottom: 10px;}\r\n\r\n.p-b-11 {padding-bottom: 11px;}\r\n\r\n.p-b-12 {padding-bottom: 12px;}\r\n\r\n.p-b-13 {padding-bottom: 13px;}\r\n\r\n.p-b-14 {padding-bottom: 14px;}\r\n\r\n.p-b-15 {padding-bottom: 15px;}\r\n\r\n.p-b-16 {padding-bottom: 16px;}\r\n\r\n.p-b-17 {padding-bottom: 17px;}\r\n\r\n.p-b-18 {padding-bottom: 18px;}\r\n\r\n.p-b-19 {padding-bottom: 19px;}\r\n\r\n.p-b-20 {padding-bottom: 20px;}\r\n\r\n.p-b-21 {padding-bottom: 21px;}\r\n\r\n.p-b-22 {padding-bottom: 22px;}\r\n\r\n.p-b-23 {padding-bottom: 23px;}\r\n\r\n.p-b-24 {padding-bottom: 24px;}\r\n\r\n.p-b-25 {padding-bottom: 25px;}\r\n\r\n.p-b-26 {padding-bottom: 26px;}\r\n\r\n.p-b-27 {padding-bottom: 27px;}\r\n\r\n.p-b-28 {padding-bottom: 28px;}\r\n\r\n.p-b-29 {padding-bottom: 29px;}\r\n\r\n.p-b-30 {padding-bottom: 30px;}\r\n\r\n.p-b-31 {padding-bottom: 31px;}\r\n\r\n.p-b-32 {padding-bottom: 32px;}\r\n\r\n.p-b-33 {padding-bottom: 33px;}\r\n\r\n.p-b-34 {padding-bottom: 34px;}\r\n\r\n.p-b-35 {padding-bottom: 35px;}\r\n\r\n.p-b-36 {padding-bottom: 36px;}\r\n\r\n.p-b-37 {padding-bottom: 37px;}\r\n\r\n.p-b-38 {padding-bottom: 38px;}\r\n\r\n.p-b-39 {padding-bottom: 39px;}\r\n\r\n.p-b-40 {padding-bottom: 40px;}\r\n\r\n.p-b-41 {padding-bottom: 41px;}\r\n\r\n.p-b-42 {padding-bottom: 42px;}\r\n\r\n.p-b-43 {padding-bottom: 43px;}\r\n\r\n.p-b-44 {padding-bottom: 44px;}\r\n\r\n.p-b-45 {padding-bottom: 45px;}\r\n\r\n.p-b-46 {padding-bottom: 46px;}\r\n\r\n.p-b-47 {padding-bottom: 47px;}\r\n\r\n.p-b-48 {padding-bottom: 48px;}\r\n\r\n.p-b-49 {padding-bottom: 49px;}\r\n\r\n.p-b-50 {padding-bottom: 50px;}\r\n\r\n.p-b-51 {padding-bottom: 51px;}\r\n\r\n.p-b-52 {padding-bottom: 52px;}\r\n\r\n.p-b-53 {padding-bottom: 53px;}\r\n\r\n.p-b-54 {padding-bottom: 54px;}\r\n\r\n.p-b-55 {padding-bottom: 55px;}\r\n\r\n.p-b-56 {padding-bottom: 56px;}\r\n\r\n.p-b-57 {padding-bottom: 57px;}\r\n\r\n.p-b-58 {padding-bottom: 58px;}\r\n\r\n.p-b-59 {padding-bottom: 59px;}\r\n\r\n.p-b-60 {padding-bottom: 60px;}\r\n\r\n.p-b-61 {padding-bottom: 61px;}\r\n\r\n.p-b-62 {padding-bottom: 62px;}\r\n\r\n.p-b-63 {padding-bottom: 63px;}\r\n\r\n.p-b-64 {padding-bottom: 64px;}\r\n\r\n.p-b-65 {padding-bottom: 65px;}\r\n\r\n.p-b-66 {padding-bottom: 66px;}\r\n\r\n.p-b-67 {padding-bottom: 67px;}\r\n\r\n.p-b-68 {padding-bottom: 68px;}\r\n\r\n.p-b-69 {padding-bottom: 69px;}\r\n\r\n.p-b-70 {padding-bottom: 70px;}\r\n\r\n.p-b-71 {padding-bottom: 71px;}\r\n\r\n.p-b-72 {padding-bottom: 72px;}\r\n\r\n.p-b-73 {padding-bottom: 73px;}\r\n\r\n.p-b-74 {padding-bottom: 74px;}\r\n\r\n.p-b-75 {padding-bottom: 75px;}\r\n\r\n.p-b-76 {padding-bottom: 76px;}\r\n\r\n.p-b-77 {padding-bottom: 77px;}\r\n\r\n.p-b-78 {padding-bottom: 78px;}\r\n\r\n.p-b-79 {padding-bottom: 79px;}\r\n\r\n.p-b-80 {padding-bottom: 80px;}\r\n\r\n.p-b-81 {padding-bottom: 81px;}\r\n\r\n.p-b-82 {padding-bottom: 82px;}\r\n\r\n.p-b-83 {padding-bottom: 83px;}\r\n\r\n.p-b-84 {padding-bottom: 84px;}\r\n\r\n.p-b-85 {padding-bottom: 85px;}\r\n\r\n.p-b-86 {padding-bottom: 86px;}\r\n\r\n.p-b-87 {padding-bottom: 87px;}\r\n\r\n.p-b-88 {padding-bottom: 88px;}\r\n\r\n.p-b-89 {padding-bottom: 89px;}\r\n\r\n.p-b-90 {padding-bottom: 90px;}\r\n\r\n.p-b-91 {padding-bottom: 91px;}\r\n\r\n.p-b-92 {padding-bottom: 92px;}\r\n\r\n.p-b-93 {padding-bottom: 93px;}\r\n\r\n.p-b-94 {padding-bottom: 94px;}\r\n\r\n.p-b-95 {padding-bottom: 95px;}\r\n\r\n.p-b-96 {padding-bottom: 96px;}\r\n\r\n.p-b-97 {padding-bottom: 97px;}\r\n\r\n.p-b-98 {padding-bottom: 98px;}\r\n\r\n.p-b-99 {padding-bottom: 99px;}\r\n\r\n.p-b-100 {padding-bottom: 100px;}\r\n\r\n.p-b-101 {padding-bottom: 101px;}\r\n\r\n.p-b-102 {padding-bottom: 102px;}\r\n\r\n.p-b-103 {padding-bottom: 103px;}\r\n\r\n.p-b-104 {padding-bottom: 104px;}\r\n\r\n.p-b-105 {padding-bottom: 105px;}\r\n\r\n.p-b-106 {padding-bottom: 106px;}\r\n\r\n.p-b-107 {padding-bottom: 107px;}\r\n\r\n.p-b-108 {padding-bottom: 108px;}\r\n\r\n.p-b-109 {padding-bottom: 109px;}\r\n\r\n.p-b-110 {padding-bottom: 110px;}\r\n\r\n.p-b-111 {padding-bottom: 111px;}\r\n\r\n.p-b-112 {padding-bottom: 112px;}\r\n\r\n.p-b-113 {padding-bottom: 113px;}\r\n\r\n.p-b-114 {padding-bottom: 114px;}\r\n\r\n.p-b-115 {padding-bottom: 115px;}\r\n\r\n.p-b-116 {padding-bottom: 116px;}\r\n\r\n.p-b-117 {padding-bottom: 117px;}\r\n\r\n.p-b-118 {padding-bottom: 118px;}\r\n\r\n.p-b-119 {padding-bottom: 119px;}\r\n\r\n.p-b-120 {padding-bottom: 120px;}\r\n\r\n.p-b-121 {padding-bottom: 121px;}\r\n\r\n.p-b-122 {padding-bottom: 122px;}\r\n\r\n.p-b-123 {padding-bottom: 123px;}\r\n\r\n.p-b-124 {padding-bottom: 124px;}\r\n\r\n.p-b-125 {padding-bottom: 125px;}\r\n\r\n.p-b-126 {padding-bottom: 126px;}\r\n\r\n.p-b-127 {padding-bottom: 127px;}\r\n\r\n.p-b-128 {padding-bottom: 128px;}\r\n\r\n.p-b-129 {padding-bottom: 129px;}\r\n\r\n.p-b-130 {padding-bottom: 130px;}\r\n\r\n.p-b-131 {padding-bottom: 131px;}\r\n\r\n.p-b-132 {padding-bottom: 132px;}\r\n\r\n.p-b-133 {padding-bottom: 133px;}\r\n\r\n.p-b-134 {padding-bottom: 134px;}\r\n\r\n.p-b-135 {padding-bottom: 135px;}\r\n\r\n.p-b-136 {padding-bottom: 136px;}\r\n\r\n.p-b-137 {padding-bottom: 137px;}\r\n\r\n.p-b-138 {padding-bottom: 138px;}\r\n\r\n.p-b-139 {padding-bottom: 139px;}\r\n\r\n.p-b-140 {padding-bottom: 140px;}\r\n\r\n.p-b-141 {padding-bottom: 141px;}\r\n\r\n.p-b-142 {padding-bottom: 142px;}\r\n\r\n.p-b-143 {padding-bottom: 143px;}\r\n\r\n.p-b-144 {padding-bottom: 144px;}\r\n\r\n.p-b-145 {padding-bottom: 145px;}\r\n\r\n.p-b-146 {padding-bottom: 146px;}\r\n\r\n.p-b-147 {padding-bottom: 147px;}\r\n\r\n.p-b-148 {padding-bottom: 148px;}\r\n\r\n.p-b-149 {padding-bottom: 149px;}\r\n\r\n.p-b-150 {padding-bottom: 150px;}\r\n\r\n.p-b-151 {padding-bottom: 151px;}\r\n\r\n.p-b-152 {padding-bottom: 152px;}\r\n\r\n.p-b-153 {padding-bottom: 153px;}\r\n\r\n.p-b-154 {padding-bottom: 154px;}\r\n\r\n.p-b-155 {padding-bottom: 155px;}\r\n\r\n.p-b-156 {padding-bottom: 156px;}\r\n\r\n.p-b-157 {padding-bottom: 157px;}\r\n\r\n.p-b-158 {padding-bottom: 158px;}\r\n\r\n.p-b-159 {padding-bottom: 159px;}\r\n\r\n.p-b-160 {padding-bottom: 160px;}\r\n\r\n.p-b-161 {padding-bottom: 161px;}\r\n\r\n.p-b-162 {padding-bottom: 162px;}\r\n\r\n.p-b-163 {padding-bottom: 163px;}\r\n\r\n.p-b-164 {padding-bottom: 164px;}\r\n\r\n.p-b-165 {padding-bottom: 165px;}\r\n\r\n.p-b-166 {padding-bottom: 166px;}\r\n\r\n.p-b-167 {padding-bottom: 167px;}\r\n\r\n.p-b-168 {padding-bottom: 168px;}\r\n\r\n.p-b-169 {padding-bottom: 169px;}\r\n\r\n.p-b-170 {padding-bottom: 170px;}\r\n\r\n.p-b-171 {padding-bottom: 171px;}\r\n\r\n.p-b-172 {padding-bottom: 172px;}\r\n\r\n.p-b-173 {padding-bottom: 173px;}\r\n\r\n.p-b-174 {padding-bottom: 174px;}\r\n\r\n.p-b-175 {padding-bottom: 175px;}\r\n\r\n.p-b-176 {padding-bottom: 176px;}\r\n\r\n.p-b-177 {padding-bottom: 177px;}\r\n\r\n.p-b-178 {padding-bottom: 178px;}\r\n\r\n.p-b-179 {padding-bottom: 179px;}\r\n\r\n.p-b-180 {padding-bottom: 180px;}\r\n\r\n.p-b-181 {padding-bottom: 181px;}\r\n\r\n.p-b-182 {padding-bottom: 182px;}\r\n\r\n.p-b-183 {padding-bottom: 183px;}\r\n\r\n.p-b-184 {padding-bottom: 184px;}\r\n\r\n.p-b-185 {padding-bottom: 185px;}\r\n\r\n.p-b-186 {padding-bottom: 186px;}\r\n\r\n.p-b-187 {padding-bottom: 187px;}\r\n\r\n.p-b-188 {padding-bottom: 188px;}\r\n\r\n.p-b-189 {padding-bottom: 189px;}\r\n\r\n.p-b-190 {padding-bottom: 190px;}\r\n\r\n.p-b-191 {padding-bottom: 191px;}\r\n\r\n.p-b-192 {padding-bottom: 192px;}\r\n\r\n.p-b-193 {padding-bottom: 193px;}\r\n\r\n.p-b-194 {padding-bottom: 194px;}\r\n\r\n.p-b-195 {padding-bottom: 195px;}\r\n\r\n.p-b-196 {padding-bottom: 196px;}\r\n\r\n.p-b-197 {padding-bottom: 197px;}\r\n\r\n.p-b-198 {padding-bottom: 198px;}\r\n\r\n.p-b-199 {padding-bottom: 199px;}\r\n\r\n.p-b-200 {padding-bottom: 200px;}\r\n\r\n.p-b-201 {padding-bottom: 201px;}\r\n\r\n.p-b-202 {padding-bottom: 202px;}\r\n\r\n.p-b-203 {padding-bottom: 203px;}\r\n\r\n.p-b-204 {padding-bottom: 204px;}\r\n\r\n.p-b-205 {padding-bottom: 205px;}\r\n\r\n.p-b-206 {padding-bottom: 206px;}\r\n\r\n.p-b-207 {padding-bottom: 207px;}\r\n\r\n.p-b-208 {padding-bottom: 208px;}\r\n\r\n.p-b-209 {padding-bottom: 209px;}\r\n\r\n.p-b-210 {padding-bottom: 210px;}\r\n\r\n.p-b-211 {padding-bottom: 211px;}\r\n\r\n.p-b-212 {padding-bottom: 212px;}\r\n\r\n.p-b-213 {padding-bottom: 213px;}\r\n\r\n.p-b-214 {padding-bottom: 214px;}\r\n\r\n.p-b-215 {padding-bottom: 215px;}\r\n\r\n.p-b-216 {padding-bottom: 216px;}\r\n\r\n.p-b-217 {padding-bottom: 217px;}\r\n\r\n.p-b-218 {padding-bottom: 218px;}\r\n\r\n.p-b-219 {padding-bottom: 219px;}\r\n\r\n.p-b-220 {padding-bottom: 220px;}\r\n\r\n.p-b-221 {padding-bottom: 221px;}\r\n\r\n.p-b-222 {padding-bottom: 222px;}\r\n\r\n.p-b-223 {padding-bottom: 223px;}\r\n\r\n.p-b-224 {padding-bottom: 224px;}\r\n\r\n.p-b-225 {padding-bottom: 225px;}\r\n\r\n.p-b-226 {padding-bottom: 226px;}\r\n\r\n.p-b-227 {padding-bottom: 227px;}\r\n\r\n.p-b-228 {padding-bottom: 228px;}\r\n\r\n.p-b-229 {padding-bottom: 229px;}\r\n\r\n.p-b-230 {padding-bottom: 230px;}\r\n\r\n.p-b-231 {padding-bottom: 231px;}\r\n\r\n.p-b-232 {padding-bottom: 232px;}\r\n\r\n.p-b-233 {padding-bottom: 233px;}\r\n\r\n.p-b-234 {padding-bottom: 234px;}\r\n\r\n.p-b-235 {padding-bottom: 235px;}\r\n\r\n.p-b-236 {padding-bottom: 236px;}\r\n\r\n.p-b-237 {padding-bottom: 237px;}\r\n\r\n.p-b-238 {padding-bottom: 238px;}\r\n\r\n.p-b-239 {padding-bottom: 239px;}\r\n\r\n.p-b-240 {padding-bottom: 240px;}\r\n\r\n.p-b-241 {padding-bottom: 241px;}\r\n\r\n.p-b-242 {padding-bottom: 242px;}\r\n\r\n.p-b-243 {padding-bottom: 243px;}\r\n\r\n.p-b-244 {padding-bottom: 244px;}\r\n\r\n.p-b-245 {padding-bottom: 245px;}\r\n\r\n.p-b-246 {padding-bottom: 246px;}\r\n\r\n.p-b-247 {padding-bottom: 247px;}\r\n\r\n.p-b-248 {padding-bottom: 248px;}\r\n\r\n.p-b-249 {padding-bottom: 249px;}\r\n\r\n.p-b-250 {padding-bottom: 250px;}\r\n\r\n.p-l-0 {padding-left: 0px;}\r\n\r\n.p-l-1 {padding-left: 1px;}\r\n\r\n.p-l-2 {padding-left: 2px;}\r\n\r\n.p-l-3 {padding-left: 3px;}\r\n\r\n.p-l-4 {padding-left: 4px;}\r\n\r\n.p-l-5 {padding-left: 5px;}\r\n\r\n.p-l-6 {padding-left: 6px;}\r\n\r\n.p-l-7 {padding-left: 7px;}\r\n\r\n.p-l-8 {padding-left: 8px;}\r\n\r\n.p-l-9 {padding-left: 9px;}\r\n\r\n.p-l-10 {padding-left: 10px;}\r\n\r\n.p-l-11 {padding-left: 11px;}\r\n\r\n.p-l-12 {padding-left: 12px;}\r\n\r\n.p-l-13 {padding-left: 13px;}\r\n\r\n.p-l-14 {padding-left: 14px;}\r\n\r\n.p-l-15 {padding-left: 15px;}\r\n\r\n.p-l-16 {padding-left: 16px;}\r\n\r\n.p-l-17 {padding-left: 17px;}\r\n\r\n.p-l-18 {padding-left: 18px;}\r\n\r\n.p-l-19 {padding-left: 19px;}\r\n\r\n.p-l-20 {padding-left: 20px;}\r\n\r\n.p-l-21 {padding-left: 21px;}\r\n\r\n.p-l-22 {padding-left: 22px;}\r\n\r\n.p-l-23 {padding-left: 23px;}\r\n\r\n.p-l-24 {padding-left: 24px;}\r\n\r\n.p-l-25 {padding-left: 25px;}\r\n\r\n.p-l-26 {padding-left: 26px;}\r\n\r\n.p-l-27 {padding-left: 27px;}\r\n\r\n.p-l-28 {padding-left: 28px;}\r\n\r\n.p-l-29 {padding-left: 29px;}\r\n\r\n.p-l-30 {padding-left: 30px;}\r\n\r\n.p-l-31 {padding-left: 31px;}\r\n\r\n.p-l-32 {padding-left: 32px;}\r\n\r\n.p-l-33 {padding-left: 33px;}\r\n\r\n.p-l-34 {padding-left: 34px;}\r\n\r\n.p-l-35 {padding-left: 35px;}\r\n\r\n.p-l-36 {padding-left: 36px;}\r\n\r\n.p-l-37 {padding-left: 37px;}\r\n\r\n.p-l-38 {padding-left: 38px;}\r\n\r\n.p-l-39 {padding-left: 39px;}\r\n\r\n.p-l-40 {padding-left: 40px;}\r\n\r\n.p-l-41 {padding-left: 41px;}\r\n\r\n.p-l-42 {padding-left: 42px;}\r\n\r\n.p-l-43 {padding-left: 43px;}\r\n\r\n.p-l-44 {padding-left: 44px;}\r\n\r\n.p-l-45 {padding-left: 45px;}\r\n\r\n.p-l-46 {padding-left: 46px;}\r\n\r\n.p-l-47 {padding-left: 47px;}\r\n\r\n.p-l-48 {padding-left: 48px;}\r\n\r\n.p-l-49 {padding-left: 49px;}\r\n\r\n.p-l-50 {padding-left: 50px;}\r\n\r\n.p-l-51 {padding-left: 51px;}\r\n\r\n.p-l-52 {padding-left: 52px;}\r\n\r\n.p-l-53 {padding-left: 53px;}\r\n\r\n.p-l-54 {padding-left: 54px;}\r\n\r\n.p-l-55 {padding-left: 55px;}\r\n\r\n.p-l-56 {padding-left: 56px;}\r\n\r\n.p-l-57 {padding-left: 57px;}\r\n\r\n.p-l-58 {padding-left: 58px;}\r\n\r\n.p-l-59 {padding-left: 59px;}\r\n\r\n.p-l-60 {padding-left: 60px;}\r\n\r\n.p-l-61 {padding-left: 61px;}\r\n\r\n.p-l-62 {padding-left: 62px;}\r\n\r\n.p-l-63 {padding-left: 63px;}\r\n\r\n.p-l-64 {padding-left: 64px;}\r\n\r\n.p-l-65 {padding-left: 65px;}\r\n\r\n.p-l-66 {padding-left: 66px;}\r\n\r\n.p-l-67 {padding-left: 67px;}\r\n\r\n.p-l-68 {padding-left: 68px;}\r\n\r\n.p-l-69 {padding-left: 69px;}\r\n\r\n.p-l-70 {padding-left: 70px;}\r\n\r\n.p-l-71 {padding-left: 71px;}\r\n\r\n.p-l-72 {padding-left: 72px;}\r\n\r\n.p-l-73 {padding-left: 73px;}\r\n\r\n.p-l-74 {padding-left: 74px;}\r\n\r\n.p-l-75 {padding-left: 75px;}\r\n\r\n.p-l-76 {padding-left: 76px;}\r\n\r\n.p-l-77 {padding-left: 77px;}\r\n\r\n.p-l-78 {padding-left: 78px;}\r\n\r\n.p-l-79 {padding-left: 79px;}\r\n\r\n.p-l-80 {padding-left: 80px;}\r\n\r\n.p-l-81 {padding-left: 81px;}\r\n\r\n.p-l-82 {padding-left: 82px;}\r\n\r\n.p-l-83 {padding-left: 83px;}\r\n\r\n.p-l-84 {padding-left: 84px;}\r\n\r\n.p-l-85 {padding-left: 85px;}\r\n\r\n.p-l-86 {padding-left: 86px;}\r\n\r\n.p-l-87 {padding-left: 87px;}\r\n\r\n.p-l-88 {padding-left: 88px;}\r\n\r\n.p-l-89 {padding-left: 89px;}\r\n\r\n.p-l-90 {padding-left: 90px;}\r\n\r\n.p-l-91 {padding-left: 91px;}\r\n\r\n.p-l-92 {padding-left: 92px;}\r\n\r\n.p-l-93 {padding-left: 93px;}\r\n\r\n.p-l-94 {padding-left: 94px;}\r\n\r\n.p-l-95 {padding-left: 95px;}\r\n\r\n.p-l-96 {padding-left: 96px;}\r\n\r\n.p-l-97 {padding-left: 97px;}\r\n\r\n.p-l-98 {padding-left: 98px;}\r\n\r\n.p-l-99 {padding-left: 99px;}\r\n\r\n.p-l-100 {padding-left: 100px;}\r\n\r\n.p-l-101 {padding-left: 101px;}\r\n\r\n.p-l-102 {padding-left: 102px;}\r\n\r\n.p-l-103 {padding-left: 103px;}\r\n\r\n.p-l-104 {padding-left: 104px;}\r\n\r\n.p-l-105 {padding-left: 105px;}\r\n\r\n.p-l-106 {padding-left: 106px;}\r\n\r\n.p-l-107 {padding-left: 107px;}\r\n\r\n.p-l-108 {padding-left: 108px;}\r\n\r\n.p-l-109 {padding-left: 109px;}\r\n\r\n.p-l-110 {padding-left: 110px;}\r\n\r\n.p-l-111 {padding-left: 111px;}\r\n\r\n.p-l-112 {padding-left: 112px;}\r\n\r\n.p-l-113 {padding-left: 113px;}\r\n\r\n.p-l-114 {padding-left: 114px;}\r\n\r\n.p-l-115 {padding-left: 115px;}\r\n\r\n.p-l-116 {padding-left: 116px;}\r\n\r\n.p-l-117 {padding-left: 117px;}\r\n\r\n.p-l-118 {padding-left: 118px;}\r\n\r\n.p-l-119 {padding-left: 119px;}\r\n\r\n.p-l-120 {padding-left: 120px;}\r\n\r\n.p-l-121 {padding-left: 121px;}\r\n\r\n.p-l-122 {padding-left: 122px;}\r\n\r\n.p-l-123 {padding-left: 123px;}\r\n\r\n.p-l-124 {padding-left: 124px;}\r\n\r\n.p-l-125 {padding-left: 125px;}\r\n\r\n.p-l-126 {padding-left: 126px;}\r\n\r\n.p-l-127 {padding-left: 127px;}\r\n\r\n.p-l-128 {padding-left: 128px;}\r\n\r\n.p-l-129 {padding-left: 129px;}\r\n\r\n.p-l-130 {padding-left: 130px;}\r\n\r\n.p-l-131 {padding-left: 131px;}\r\n\r\n.p-l-132 {padding-left: 132px;}\r\n\r\n.p-l-133 {padding-left: 133px;}\r\n\r\n.p-l-134 {padding-left: 134px;}\r\n\r\n.p-l-135 {padding-left: 135px;}\r\n\r\n.p-l-136 {padding-left: 136px;}\r\n\r\n.p-l-137 {padding-left: 137px;}\r\n\r\n.p-l-138 {padding-left: 138px;}\r\n\r\n.p-l-139 {padding-left: 139px;}\r\n\r\n.p-l-140 {padding-left: 140px;}\r\n\r\n.p-l-141 {padding-left: 141px;}\r\n\r\n.p-l-142 {padding-left: 142px;}\r\n\r\n.p-l-143 {padding-left: 143px;}\r\n\r\n.p-l-144 {padding-left: 144px;}\r\n\r\n.p-l-145 {padding-left: 145px;}\r\n\r\n.p-l-146 {padding-left: 146px;}\r\n\r\n.p-l-147 {padding-left: 147px;}\r\n\r\n.p-l-148 {padding-left: 148px;}\r\n\r\n.p-l-149 {padding-left: 149px;}\r\n\r\n.p-l-150 {padding-left: 150px;}\r\n\r\n.p-l-151 {padding-left: 151px;}\r\n\r\n.p-l-152 {padding-left: 152px;}\r\n\r\n.p-l-153 {padding-left: 153px;}\r\n\r\n.p-l-154 {padding-left: 154px;}\r\n\r\n.p-l-155 {padding-left: 155px;}\r\n\r\n.p-l-156 {padding-left: 156px;}\r\n\r\n.p-l-157 {padding-left: 157px;}\r\n\r\n.p-l-158 {padding-left: 158px;}\r\n\r\n.p-l-159 {padding-left: 159px;}\r\n\r\n.p-l-160 {padding-left: 160px;}\r\n\r\n.p-l-161 {padding-left: 161px;}\r\n\r\n.p-l-162 {padding-left: 162px;}\r\n\r\n.p-l-163 {padding-left: 163px;}\r\n\r\n.p-l-164 {padding-left: 164px;}\r\n\r\n.p-l-165 {padding-left: 165px;}\r\n\r\n.p-l-166 {padding-left: 166px;}\r\n\r\n.p-l-167 {padding-left: 167px;}\r\n\r\n.p-l-168 {padding-left: 168px;}\r\n\r\n.p-l-169 {padding-left: 169px;}\r\n\r\n.p-l-170 {padding-left: 170px;}\r\n\r\n.p-l-171 {padding-left: 171px;}\r\n\r\n.p-l-172 {padding-left: 172px;}\r\n\r\n.p-l-173 {padding-left: 173px;}\r\n\r\n.p-l-174 {padding-left: 174px;}\r\n\r\n.p-l-175 {padding-left: 175px;}\r\n\r\n.p-l-176 {padding-left: 176px;}\r\n\r\n.p-l-177 {padding-left: 177px;}\r\n\r\n.p-l-178 {padding-left: 178px;}\r\n\r\n.p-l-179 {padding-left: 179px;}\r\n\r\n.p-l-180 {padding-left: 180px;}\r\n\r\n.p-l-181 {padding-left: 181px;}\r\n\r\n.p-l-182 {padding-left: 182px;}\r\n\r\n.p-l-183 {padding-left: 183px;}\r\n\r\n.p-l-184 {padding-left: 184px;}\r\n\r\n.p-l-185 {padding-left: 185px;}\r\n\r\n.p-l-186 {padding-left: 186px;}\r\n\r\n.p-l-187 {padding-left: 187px;}\r\n\r\n.p-l-188 {padding-left: 188px;}\r\n\r\n.p-l-189 {padding-left: 189px;}\r\n\r\n.p-l-190 {padding-left: 190px;}\r\n\r\n.p-l-191 {padding-left: 191px;}\r\n\r\n.p-l-192 {padding-left: 192px;}\r\n\r\n.p-l-193 {padding-left: 193px;}\r\n\r\n.p-l-194 {padding-left: 194px;}\r\n\r\n.p-l-195 {padding-left: 195px;}\r\n\r\n.p-l-196 {padding-left: 196px;}\r\n\r\n.p-l-197 {padding-left: 197px;}\r\n\r\n.p-l-198 {padding-left: 198px;}\r\n\r\n.p-l-199 {padding-left: 199px;}\r\n\r\n.p-l-200 {padding-left: 200px;}\r\n\r\n.p-l-201 {padding-left: 201px;}\r\n\r\n.p-l-202 {padding-left: 202px;}\r\n\r\n.p-l-203 {padding-left: 203px;}\r\n\r\n.p-l-204 {padding-left: 204px;}\r\n\r\n.p-l-205 {padding-left: 205px;}\r\n\r\n.p-l-206 {padding-left: 206px;}\r\n\r\n.p-l-207 {padding-left: 207px;}\r\n\r\n.p-l-208 {padding-left: 208px;}\r\n\r\n.p-l-209 {padding-left: 209px;}\r\n\r\n.p-l-210 {padding-left: 210px;}\r\n\r\n.p-l-211 {padding-left: 211px;}\r\n\r\n.p-l-212 {padding-left: 212px;}\r\n\r\n.p-l-213 {padding-left: 213px;}\r\n\r\n.p-l-214 {padding-left: 214px;}\r\n\r\n.p-l-215 {padding-left: 215px;}\r\n\r\n.p-l-216 {padding-left: 216px;}\r\n\r\n.p-l-217 {padding-left: 217px;}\r\n\r\n.p-l-218 {padding-left: 218px;}\r\n\r\n.p-l-219 {padding-left: 219px;}\r\n\r\n.p-l-220 {padding-left: 220px;}\r\n\r\n.p-l-221 {padding-left: 221px;}\r\n\r\n.p-l-222 {padding-left: 222px;}\r\n\r\n.p-l-223 {padding-left: 223px;}\r\n\r\n.p-l-224 {padding-left: 224px;}\r\n\r\n.p-l-225 {padding-left: 225px;}\r\n\r\n.p-l-226 {padding-left: 226px;}\r\n\r\n.p-l-227 {padding-left: 227px;}\r\n\r\n.p-l-228 {padding-left: 228px;}\r\n\r\n.p-l-229 {padding-left: 229px;}\r\n\r\n.p-l-230 {padding-left: 230px;}\r\n\r\n.p-l-231 {padding-left: 231px;}\r\n\r\n.p-l-232 {padding-left: 232px;}\r\n\r\n.p-l-233 {padding-left: 233px;}\r\n\r\n.p-l-234 {padding-left: 234px;}\r\n\r\n.p-l-235 {padding-left: 235px;}\r\n\r\n.p-l-236 {padding-left: 236px;}\r\n\r\n.p-l-237 {padding-left: 237px;}\r\n\r\n.p-l-238 {padding-left: 238px;}\r\n\r\n.p-l-239 {padding-left: 239px;}\r\n\r\n.p-l-240 {padding-left: 240px;}\r\n\r\n.p-l-241 {padding-left: 241px;}\r\n\r\n.p-l-242 {padding-left: 242px;}\r\n\r\n.p-l-243 {padding-left: 243px;}\r\n\r\n.p-l-244 {padding-left: 244px;}\r\n\r\n.p-l-245 {padding-left: 245px;}\r\n\r\n.p-l-246 {padding-left: 246px;}\r\n\r\n.p-l-247 {padding-left: 247px;}\r\n\r\n.p-l-248 {padding-left: 248px;}\r\n\r\n.p-l-249 {padding-left: 249px;}\r\n\r\n.p-l-250 {padding-left: 250px;}\r\n\r\n.p-r-0 {padding-right: 0px;}\r\n\r\n.p-r-1 {padding-right: 1px;}\r\n\r\n.p-r-2 {padding-right: 2px;}\r\n\r\n.p-r-3 {padding-right: 3px;}\r\n\r\n.p-r-4 {padding-right: 4px;}\r\n\r\n.p-r-5 {padding-right: 5px;}\r\n\r\n.p-r-6 {padding-right: 6px;}\r\n\r\n.p-r-7 {padding-right: 7px;}\r\n\r\n.p-r-8 {padding-right: 8px;}\r\n\r\n.p-r-9 {padding-right: 9px;}\r\n\r\n.p-r-10 {padding-right: 10px;}\r\n\r\n.p-r-11 {padding-right: 11px;}\r\n\r\n.p-r-12 {padding-right: 12px;}\r\n\r\n.p-r-13 {padding-right: 13px;}\r\n\r\n.p-r-14 {padding-right: 14px;}\r\n\r\n.p-r-15 {padding-right: 15px;}\r\n\r\n.p-r-16 {padding-right: 16px;}\r\n\r\n.p-r-17 {padding-right: 17px;}\r\n\r\n.p-r-18 {padding-right: 18px;}\r\n\r\n.p-r-19 {padding-right: 19px;}\r\n\r\n.p-r-20 {padding-right: 20px;}\r\n\r\n.p-r-21 {padding-right: 21px;}\r\n\r\n.p-r-22 {padding-right: 22px;}\r\n\r\n.p-r-23 {padding-right: 23px;}\r\n\r\n.p-r-24 {padding-right: 24px;}\r\n\r\n.p-r-25 {padding-right: 25px;}\r\n\r\n.p-r-26 {padding-right: 26px;}\r\n\r\n.p-r-27 {padding-right: 27px;}\r\n\r\n.p-r-28 {padding-right: 28px;}\r\n\r\n.p-r-29 {padding-right: 29px;}\r\n\r\n.p-r-30 {padding-right: 30px;}\r\n\r\n.p-r-31 {padding-right: 31px;}\r\n\r\n.p-r-32 {padding-right: 32px;}\r\n\r\n.p-r-33 {padding-right: 33px;}\r\n\r\n.p-r-34 {padding-right: 34px;}\r\n\r\n.p-r-35 {padding-right: 35px;}\r\n\r\n.p-r-36 {padding-right: 36px;}\r\n\r\n.p-r-37 {padding-right: 37px;}\r\n\r\n.p-r-38 {padding-right: 38px;}\r\n\r\n.p-r-39 {padding-right: 39px;}\r\n\r\n.p-r-40 {padding-right: 40px;}\r\n\r\n.p-r-41 {padding-right: 41px;}\r\n\r\n.p-r-42 {padding-right: 42px;}\r\n\r\n.p-r-43 {padding-right: 43px;}\r\n\r\n.p-r-44 {padding-right: 44px;}\r\n\r\n.p-r-45 {padding-right: 45px;}\r\n\r\n.p-r-46 {padding-right: 46px;}\r\n\r\n.p-r-47 {padding-right: 47px;}\r\n\r\n.p-r-48 {padding-right: 48px;}\r\n\r\n.p-r-49 {padding-right: 49px;}\r\n\r\n.p-r-50 {padding-right: 50px;}\r\n\r\n.p-r-51 {padding-right: 51px;}\r\n\r\n.p-r-52 {padding-right: 52px;}\r\n\r\n.p-r-53 {padding-right: 53px;}\r\n\r\n.p-r-54 {padding-right: 54px;}\r\n\r\n.p-r-55 {padding-right: 55px;}\r\n\r\n.p-r-56 {padding-right: 56px;}\r\n\r\n.p-r-57 {padding-right: 57px;}\r\n\r\n.p-r-58 {padding-right: 58px;}\r\n\r\n.p-r-59 {padding-right: 59px;}\r\n\r\n.p-r-60 {padding-right: 60px;}\r\n\r\n.p-r-61 {padding-right: 61px;}\r\n\r\n.p-r-62 {padding-right: 62px;}\r\n\r\n.p-r-63 {padding-right: 63px;}\r\n\r\n.p-r-64 {padding-right: 64px;}\r\n\r\n.p-r-65 {padding-right: 65px;}\r\n\r\n.p-r-66 {padding-right: 66px;}\r\n\r\n.p-r-67 {padding-right: 67px;}\r\n\r\n.p-r-68 {padding-right: 68px;}\r\n\r\n.p-r-69 {padding-right: 69px;}\r\n\r\n.p-r-70 {padding-right: 70px;}\r\n\r\n.p-r-71 {padding-right: 71px;}\r\n\r\n.p-r-72 {padding-right: 72px;}\r\n\r\n.p-r-73 {padding-right: 73px;}\r\n\r\n.p-r-74 {padding-right: 74px;}\r\n\r\n.p-r-75 {padding-right: 75px;}\r\n\r\n.p-r-76 {padding-right: 76px;}\r\n\r\n.p-r-77 {padding-right: 77px;}\r\n\r\n.p-r-78 {padding-right: 78px;}\r\n\r\n.p-r-79 {padding-right: 79px;}\r\n\r\n.p-r-80 {padding-right: 80px;}\r\n\r\n.p-r-81 {padding-right: 81px;}\r\n\r\n.p-r-82 {padding-right: 82px;}\r\n\r\n.p-r-83 {padding-right: 83px;}\r\n\r\n.p-r-84 {padding-right: 84px;}\r\n\r\n.p-r-85 {padding-right: 85px;}\r\n\r\n.p-r-86 {padding-right: 86px;}\r\n\r\n.p-r-87 {padding-right: 87px;}\r\n\r\n.p-r-88 {padding-right: 88px;}\r\n\r\n.p-r-89 {padding-right: 89px;}\r\n\r\n.p-r-90 {padding-right: 90px;}\r\n\r\n.p-r-91 {padding-right: 91px;}\r\n\r\n.p-r-92 {padding-right: 92px;}\r\n\r\n.p-r-93 {padding-right: 93px;}\r\n\r\n.p-r-94 {padding-right: 94px;}\r\n\r\n.p-r-95 {padding-right: 95px;}\r\n\r\n.p-r-96 {padding-right: 96px;}\r\n\r\n.p-r-97 {padding-right: 97px;}\r\n\r\n.p-r-98 {padding-right: 98px;}\r\n\r\n.p-r-99 {padding-right: 99px;}\r\n\r\n.p-r-100 {padding-right: 100px;}\r\n\r\n.p-r-101 {padding-right: 101px;}\r\n\r\n.p-r-102 {padding-right: 102px;}\r\n\r\n.p-r-103 {padding-right: 103px;}\r\n\r\n.p-r-104 {padding-right: 104px;}\r\n\r\n.p-r-105 {padding-right: 105px;}\r\n\r\n.p-r-106 {padding-right: 106px;}\r\n\r\n.p-r-107 {padding-right: 107px;}\r\n\r\n.p-r-108 {padding-right: 108px;}\r\n\r\n.p-r-109 {padding-right: 109px;}\r\n\r\n.p-r-110 {padding-right: 110px;}\r\n\r\n.p-r-111 {padding-right: 111px;}\r\n\r\n.p-r-112 {padding-right: 112px;}\r\n\r\n.p-r-113 {padding-right: 113px;}\r\n\r\n.p-r-114 {padding-right: 114px;}\r\n\r\n.p-r-115 {padding-right: 115px;}\r\n\r\n.p-r-116 {padding-right: 116px;}\r\n\r\n.p-r-117 {padding-right: 117px;}\r\n\r\n.p-r-118 {padding-right: 118px;}\r\n\r\n.p-r-119 {padding-right: 119px;}\r\n\r\n.p-r-120 {padding-right: 120px;}\r\n\r\n.p-r-121 {padding-right: 121px;}\r\n\r\n.p-r-122 {padding-right: 122px;}\r\n\r\n.p-r-123 {padding-right: 123px;}\r\n\r\n.p-r-124 {padding-right: 124px;}\r\n\r\n.p-r-125 {padding-right: 125px;}\r\n\r\n.p-r-126 {padding-right: 126px;}\r\n\r\n.p-r-127 {padding-right: 127px;}\r\n\r\n.p-r-128 {padding-right: 128px;}\r\n\r\n.p-r-129 {padding-right: 129px;}\r\n\r\n.p-r-130 {padding-right: 130px;}\r\n\r\n.p-r-131 {padding-right: 131px;}\r\n\r\n.p-r-132 {padding-right: 132px;}\r\n\r\n.p-r-133 {padding-right: 133px;}\r\n\r\n.p-r-134 {padding-right: 134px;}\r\n\r\n.p-r-135 {padding-right: 135px;}\r\n\r\n.p-r-136 {padding-right: 136px;}\r\n\r\n.p-r-137 {padding-right: 137px;}\r\n\r\n.p-r-138 {padding-right: 138px;}\r\n\r\n.p-r-139 {padding-right: 139px;}\r\n\r\n.p-r-140 {padding-right: 140px;}\r\n\r\n.p-r-141 {padding-right: 141px;}\r\n\r\n.p-r-142 {padding-right: 142px;}\r\n\r\n.p-r-143 {padding-right: 143px;}\r\n\r\n.p-r-144 {padding-right: 144px;}\r\n\r\n.p-r-145 {padding-right: 145px;}\r\n\r\n.p-r-146 {padding-right: 146px;}\r\n\r\n.p-r-147 {padding-right: 147px;}\r\n\r\n.p-r-148 {padding-right: 148px;}\r\n\r\n.p-r-149 {padding-right: 149px;}\r\n\r\n.p-r-150 {padding-right: 150px;}\r\n\r\n.p-r-151 {padding-right: 151px;}\r\n\r\n.p-r-152 {padding-right: 152px;}\r\n\r\n.p-r-153 {padding-right: 153px;}\r\n\r\n.p-r-154 {padding-right: 154px;}\r\n\r\n.p-r-155 {padding-right: 155px;}\r\n\r\n.p-r-156 {padding-right: 156px;}\r\n\r\n.p-r-157 {padding-right: 157px;}\r\n\r\n.p-r-158 {padding-right: 158px;}\r\n\r\n.p-r-159 {padding-right: 159px;}\r\n\r\n.p-r-160 {padding-right: 160px;}\r\n\r\n.p-r-161 {padding-right: 161px;}\r\n\r\n.p-r-162 {padding-right: 162px;}\r\n\r\n.p-r-163 {padding-right: 163px;}\r\n\r\n.p-r-164 {padding-right: 164px;}\r\n\r\n.p-r-165 {padding-right: 165px;}\r\n\r\n.p-r-166 {padding-right: 166px;}\r\n\r\n.p-r-167 {padding-right: 167px;}\r\n\r\n.p-r-168 {padding-right: 168px;}\r\n\r\n.p-r-169 {padding-right: 169px;}\r\n\r\n.p-r-170 {padding-right: 170px;}\r\n\r\n.p-r-171 {padding-right: 171px;}\r\n\r\n.p-r-172 {padding-right: 172px;}\r\n\r\n.p-r-173 {padding-right: 173px;}\r\n\r\n.p-r-174 {padding-right: 174px;}\r\n\r\n.p-r-175 {padding-right: 175px;}\r\n\r\n.p-r-176 {padding-right: 176px;}\r\n\r\n.p-r-177 {padding-right: 177px;}\r\n\r\n.p-r-178 {padding-right: 178px;}\r\n\r\n.p-r-179 {padding-right: 179px;}\r\n\r\n.p-r-180 {padding-right: 180px;}\r\n\r\n.p-r-181 {padding-right: 181px;}\r\n\r\n.p-r-182 {padding-right: 182px;}\r\n\r\n.p-r-183 {padding-right: 183px;}\r\n\r\n.p-r-184 {padding-right: 184px;}\r\n\r\n.p-r-185 {padding-right: 185px;}\r\n\r\n.p-r-186 {padding-right: 186px;}\r\n\r\n.p-r-187 {padding-right: 187px;}\r\n\r\n.p-r-188 {padding-right: 188px;}\r\n\r\n.p-r-189 {padding-right: 189px;}\r\n\r\n.p-r-190 {padding-right: 190px;}\r\n\r\n.p-r-191 {padding-right: 191px;}\r\n\r\n.p-r-192 {padding-right: 192px;}\r\n\r\n.p-r-193 {padding-right: 193px;}\r\n\r\n.p-r-194 {padding-right: 194px;}\r\n\r\n.p-r-195 {padding-right: 195px;}\r\n\r\n.p-r-196 {padding-right: 196px;}\r\n\r\n.p-r-197 {padding-right: 197px;}\r\n\r\n.p-r-198 {padding-right: 198px;}\r\n\r\n.p-r-199 {padding-right: 199px;}\r\n\r\n.p-r-200 {padding-right: 200px;}\r\n\r\n.p-r-201 {padding-right: 201px;}\r\n\r\n.p-r-202 {padding-right: 202px;}\r\n\r\n.p-r-203 {padding-right: 203px;}\r\n\r\n.p-r-204 {padding-right: 204px;}\r\n\r\n.p-r-205 {padding-right: 205px;}\r\n\r\n.p-r-206 {padding-right: 206px;}\r\n\r\n.p-r-207 {padding-right: 207px;}\r\n\r\n.p-r-208 {padding-right: 208px;}\r\n\r\n.p-r-209 {padding-right: 209px;}\r\n\r\n.p-r-210 {padding-right: 210px;}\r\n\r\n.p-r-211 {padding-right: 211px;}\r\n\r\n.p-r-212 {padding-right: 212px;}\r\n\r\n.p-r-213 {padding-right: 213px;}\r\n\r\n.p-r-214 {padding-right: 214px;}\r\n\r\n.p-r-215 {padding-right: 215px;}\r\n\r\n.p-r-216 {padding-right: 216px;}\r\n\r\n.p-r-217 {padding-right: 217px;}\r\n\r\n.p-r-218 {padding-right: 218px;}\r\n\r\n.p-r-219 {padding-right: 219px;}\r\n\r\n.p-r-220 {padding-right: 220px;}\r\n\r\n.p-r-221 {padding-right: 221px;}\r\n\r\n.p-r-222 {padding-right: 222px;}\r\n\r\n.p-r-223 {padding-right: 223px;}\r\n\r\n.p-r-224 {padding-right: 224px;}\r\n\r\n.p-r-225 {padding-right: 225px;}\r\n\r\n.p-r-226 {padding-right: 226px;}\r\n\r\n.p-r-227 {padding-right: 227px;}\r\n\r\n.p-r-228 {padding-right: 228px;}\r\n\r\n.p-r-229 {padding-right: 229px;}\r\n\r\n.p-r-230 {padding-right: 230px;}\r\n\r\n.p-r-231 {padding-right: 231px;}\r\n\r\n.p-r-232 {padding-right: 232px;}\r\n\r\n.p-r-233 {padding-right: 233px;}\r\n\r\n.p-r-234 {padding-right: 234px;}\r\n\r\n.p-r-235 {padding-right: 235px;}\r\n\r\n.p-r-236 {padding-right: 236px;}\r\n\r\n.p-r-237 {padding-right: 237px;}\r\n\r\n.p-r-238 {padding-right: 238px;}\r\n\r\n.p-r-239 {padding-right: 239px;}\r\n\r\n.p-r-240 {padding-right: 240px;}\r\n\r\n.p-r-241 {padding-right: 241px;}\r\n\r\n.p-r-242 {padding-right: 242px;}\r\n\r\n.p-r-243 {padding-right: 243px;}\r\n\r\n.p-r-244 {padding-right: 244px;}\r\n\r\n.p-r-245 {padding-right: 245px;}\r\n\r\n.p-r-246 {padding-right: 246px;}\r\n\r\n.p-r-247 {padding-right: 247px;}\r\n\r\n.p-r-248 {padding-right: 248px;}\r\n\r\n.p-r-249 {padding-right: 249px;}\r\n\r\n.p-r-250 {padding-right: 250px;}\r\n\r\n/*[ MARGIN ]\r\n///////////////////////////////////////////////////////////\r\n*/\r\n\r\n.m-t-0 {margin-top: 0px;}\r\n\r\n.m-t-1 {margin-top: 1px;}\r\n\r\n.m-t-2 {margin-top: 2px;}\r\n\r\n.m-t-3 {margin-top: 3px;}\r\n\r\n.m-t-4 {margin-top: 4px;}\r\n\r\n.m-t-5 {margin-top: 5px;}\r\n\r\n.m-t-6 {margin-top: 6px;}\r\n\r\n.m-t-7 {margin-top: 7px;}\r\n\r\n.m-t-8 {margin-top: 8px;}\r\n\r\n.m-t-9 {margin-top: 9px;}\r\n\r\n.m-t-10 {margin-top: 10px;}\r\n\r\n.m-t-11 {margin-top: 11px;}\r\n\r\n.m-t-12 {margin-top: 12px;}\r\n\r\n.m-t-13 {margin-top: 13px;}\r\n\r\n.m-t-14 {margin-top: 14px;}\r\n\r\n.m-t-15 {margin-top: 15px;}\r\n\r\n.m-t-16 {margin-top: 16px;}\r\n\r\n.m-t-17 {margin-top: 17px;}\r\n\r\n.m-t-18 {margin-top: 18px;}\r\n\r\n.m-t-19 {margin-top: 19px;}\r\n\r\n.m-t-20 {margin-top: 20px;}\r\n\r\n.m-t-21 {margin-top: 21px;}\r\n\r\n.m-t-22 {margin-top: 22px;}\r\n\r\n.m-t-23 {margin-top: 23px;}\r\n\r\n.m-t-24 {margin-top: 24px;}\r\n\r\n.m-t-25 {margin-top: 25px;}\r\n\r\n.m-t-26 {margin-top: 26px;}\r\n\r\n.m-t-27 {margin-top: 27px;}\r\n\r\n.m-t-28 {margin-top: 28px;}\r\n\r\n.m-t-29 {margin-top: 29px;}\r\n\r\n.m-t-30 {margin-top: 30px;}\r\n\r\n.m-t-31 {margin-top: 31px;}\r\n\r\n.m-t-32 {margin-top: 32px;}\r\n\r\n.m-t-33 {margin-top: 33px;}\r\n\r\n.m-t-34 {margin-top: 34px;}\r\n\r\n.m-t-35 {margin-top: 35px;}\r\n\r\n.m-t-36 {margin-top: 36px;}\r\n\r\n.m-t-37 {margin-top: 37px;}\r\n\r\n.m-t-38 {margin-top: 38px;}\r\n\r\n.m-t-39 {margin-top: 39px;}\r\n\r\n.m-t-40 {margin-top: 40px;}\r\n\r\n.m-t-41 {margin-top: 41px;}\r\n\r\n.m-t-42 {margin-top: 42px;}\r\n\r\n.m-t-43 {margin-top: 43px;}\r\n\r\n.m-t-44 {margin-top: 44px;}\r\n\r\n.m-t-45 {margin-top: 45px;}\r\n\r\n.m-t-46 {margin-top: 46px;}\r\n\r\n.m-t-47 {margin-top: 47px;}\r\n\r\n.m-t-48 {margin-top: 48px;}\r\n\r\n.m-t-49 {margin-top: 49px;}\r\n\r\n.m-t-50 {margin-top: 50px;}\r\n\r\n.m-t-51 {margin-top: 51px;}\r\n\r\n.m-t-52 {margin-top: 52px;}\r\n\r\n.m-t-53 {margin-top: 53px;}\r\n\r\n.m-t-54 {margin-top: 54px;}\r\n\r\n.m-t-55 {margin-top: 55px;}\r\n\r\n.m-t-56 {margin-top: 56px;}\r\n\r\n.m-t-57 {margin-top: 57px;}\r\n\r\n.m-t-58 {margin-top: 58px;}\r\n\r\n.m-t-59 {margin-top: 59px;}\r\n\r\n.m-t-60 {margin-top: 60px;}\r\n\r\n.m-t-61 {margin-top: 61px;}\r\n\r\n.m-t-62 {margin-top: 62px;}\r\n\r\n.m-t-63 {margin-top: 63px;}\r\n\r\n.m-t-64 {margin-top: 64px;}\r\n\r\n.m-t-65 {margin-top: 65px;}\r\n\r\n.m-t-66 {margin-top: 66px;}\r\n\r\n.m-t-67 {margin-top: 67px;}\r\n\r\n.m-t-68 {margin-top: 68px;}\r\n\r\n.m-t-69 {margin-top: 69px;}\r\n\r\n.m-t-70 {margin-top: 70px;}\r\n\r\n.m-t-71 {margin-top: 71px;}\r\n\r\n.m-t-72 {margin-top: 72px;}\r\n\r\n.m-t-73 {margin-top: 73px;}\r\n\r\n.m-t-74 {margin-top: 74px;}\r\n\r\n.m-t-75 {margin-top: 75px;}\r\n\r\n.m-t-76 {margin-top: 76px;}\r\n\r\n.m-t-77 {margin-top: 77px;}\r\n\r\n.m-t-78 {margin-top: 78px;}\r\n\r\n.m-t-79 {margin-top: 79px;}\r\n\r\n.m-t-80 {margin-top: 80px;}\r\n\r\n.m-t-81 {margin-top: 81px;}\r\n\r\n.m-t-82 {margin-top: 82px;}\r\n\r\n.m-t-83 {margin-top: 83px;}\r\n\r\n.m-t-84 {margin-top: 84px;}\r\n\r\n.m-t-85 {margin-top: 85px;}\r\n\r\n.m-t-86 {margin-top: 86px;}\r\n\r\n.m-t-87 {margin-top: 87px;}\r\n\r\n.m-t-88 {margin-top: 88px;}\r\n\r\n.m-t-89 {margin-top: 89px;}\r\n\r\n.m-t-90 {margin-top: 90px;}\r\n\r\n.m-t-91 {margin-top: 91px;}\r\n\r\n.m-t-92 {margin-top: 92px;}\r\n\r\n.m-t-93 {margin-top: 93px;}\r\n\r\n.m-t-94 {margin-top: 94px;}\r\n\r\n.m-t-95 {margin-top: 95px;}\r\n\r\n.m-t-96 {margin-top: 96px;}\r\n\r\n.m-t-97 {margin-top: 97px;}\r\n\r\n.m-t-98 {margin-top: 98px;}\r\n\r\n.m-t-99 {margin-top: 99px;}\r\n\r\n.m-t-100 {margin-top: 100px;}\r\n\r\n.m-t-101 {margin-top: 101px;}\r\n\r\n.m-t-102 {margin-top: 102px;}\r\n\r\n.m-t-103 {margin-top: 103px;}\r\n\r\n.m-t-104 {margin-top: 104px;}\r\n\r\n.m-t-105 {margin-top: 105px;}\r\n\r\n.m-t-106 {margin-top: 106px;}\r\n\r\n.m-t-107 {margin-top: 107px;}\r\n\r\n.m-t-108 {margin-top: 108px;}\r\n\r\n.m-t-109 {margin-top: 109px;}\r\n\r\n.m-t-110 {margin-top: 110px;}\r\n\r\n.m-t-111 {margin-top: 111px;}\r\n\r\n.m-t-112 {margin-top: 112px;}\r\n\r\n.m-t-113 {margin-top: 113px;}\r\n\r\n.m-t-114 {margin-top: 114px;}\r\n\r\n.m-t-115 {margin-top: 115px;}\r\n\r\n.m-t-116 {margin-top: 116px;}\r\n\r\n.m-t-117 {margin-top: 117px;}\r\n\r\n.m-t-118 {margin-top: 118px;}\r\n\r\n.m-t-119 {margin-top: 119px;}\r\n\r\n.m-t-120 {margin-top: 120px;}\r\n\r\n.m-t-121 {margin-top: 121px;}\r\n\r\n.m-t-122 {margin-top: 122px;}\r\n\r\n.m-t-123 {margin-top: 123px;}\r\n\r\n.m-t-124 {margin-top: 124px;}\r\n\r\n.m-t-125 {margin-top: 125px;}\r\n\r\n.m-t-126 {margin-top: 126px;}\r\n\r\n.m-t-127 {margin-top: 127px;}\r\n\r\n.m-t-128 {margin-top: 128px;}\r\n\r\n.m-t-129 {margin-top: 129px;}\r\n\r\n.m-t-130 {margin-top: 130px;}\r\n\r\n.m-t-131 {margin-top: 131px;}\r\n\r\n.m-t-132 {margin-top: 132px;}\r\n\r\n.m-t-133 {margin-top: 133px;}\r\n\r\n.m-t-134 {margin-top: 134px;}\r\n\r\n.m-t-135 {margin-top: 135px;}\r\n\r\n.m-t-136 {margin-top: 136px;}\r\n\r\n.m-t-137 {margin-top: 137px;}\r\n\r\n.m-t-138 {margin-top: 138px;}\r\n\r\n.m-t-139 {margin-top: 139px;}\r\n\r\n.m-t-140 {margin-top: 140px;}\r\n\r\n.m-t-141 {margin-top: 141px;}\r\n\r\n.m-t-142 {margin-top: 142px;}\r\n\r\n.m-t-143 {margin-top: 143px;}\r\n\r\n.m-t-144 {margin-top: 144px;}\r\n\r\n.m-t-145 {margin-top: 145px;}\r\n\r\n.m-t-146 {margin-top: 146px;}\r\n\r\n.m-t-147 {margin-top: 147px;}\r\n\r\n.m-t-148 {margin-top: 148px;}\r\n\r\n.m-t-149 {margin-top: 149px;}\r\n\r\n.m-t-150 {margin-top: 150px;}\r\n\r\n.m-t-151 {margin-top: 151px;}\r\n\r\n.m-t-152 {margin-top: 152px;}\r\n\r\n.m-t-153 {margin-top: 153px;}\r\n\r\n.m-t-154 {margin-top: 154px;}\r\n\r\n.m-t-155 {margin-top: 155px;}\r\n\r\n.m-t-156 {margin-top: 156px;}\r\n\r\n.m-t-157 {margin-top: 157px;}\r\n\r\n.m-t-158 {margin-top: 158px;}\r\n\r\n.m-t-159 {margin-top: 159px;}\r\n\r\n.m-t-160 {margin-top: 160px;}\r\n\r\n.m-t-161 {margin-top: 161px;}\r\n\r\n.m-t-162 {margin-top: 162px;}\r\n\r\n.m-t-163 {margin-top: 163px;}\r\n\r\n.m-t-164 {margin-top: 164px;}\r\n\r\n.m-t-165 {margin-top: 165px;}\r\n\r\n.m-t-166 {margin-top: 166px;}\r\n\r\n.m-t-167 {margin-top: 167px;}\r\n\r\n.m-t-168 {margin-top: 168px;}\r\n\r\n.m-t-169 {margin-top: 169px;}\r\n\r\n.m-t-170 {margin-top: 170px;}\r\n\r\n.m-t-171 {margin-top: 171px;}\r\n\r\n.m-t-172 {margin-top: 172px;}\r\n\r\n.m-t-173 {margin-top: 173px;}\r\n\r\n.m-t-174 {margin-top: 174px;}\r\n\r\n.m-t-175 {margin-top: 175px;}\r\n\r\n.m-t-176 {margin-top: 176px;}\r\n\r\n.m-t-177 {margin-top: 177px;}\r\n\r\n.m-t-178 {margin-top: 178px;}\r\n\r\n.m-t-179 {margin-top: 179px;}\r\n\r\n.m-t-180 {margin-top: 180px;}\r\n\r\n.m-t-181 {margin-top: 181px;}\r\n\r\n.m-t-182 {margin-top: 182px;}\r\n\r\n.m-t-183 {margin-top: 183px;}\r\n\r\n.m-t-184 {margin-top: 184px;}\r\n\r\n.m-t-185 {margin-top: 185px;}\r\n\r\n.m-t-186 {margin-top: 186px;}\r\n\r\n.m-t-187 {margin-top: 187px;}\r\n\r\n.m-t-188 {margin-top: 188px;}\r\n\r\n.m-t-189 {margin-top: 189px;}\r\n\r\n.m-t-190 {margin-top: 190px;}\r\n\r\n.m-t-191 {margin-top: 191px;}\r\n\r\n.m-t-192 {margin-top: 192px;}\r\n\r\n.m-t-193 {margin-top: 193px;}\r\n\r\n.m-t-194 {margin-top: 194px;}\r\n\r\n.m-t-195 {margin-top: 195px;}\r\n\r\n.m-t-196 {margin-top: 196px;}\r\n\r\n.m-t-197 {margin-top: 197px;}\r\n\r\n.m-t-198 {margin-top: 198px;}\r\n\r\n.m-t-199 {margin-top: 199px;}\r\n\r\n.m-t-200 {margin-top: 200px;}\r\n\r\n.m-t-201 {margin-top: 201px;}\r\n\r\n.m-t-202 {margin-top: 202px;}\r\n\r\n.m-t-203 {margin-top: 203px;}\r\n\r\n.m-t-204 {margin-top: 204px;}\r\n\r\n.m-t-205 {margin-top: 205px;}\r\n\r\n.m-t-206 {margin-top: 206px;}\r\n\r\n.m-t-207 {margin-top: 207px;}\r\n\r\n.m-t-208 {margin-top: 208px;}\r\n\r\n.m-t-209 {margin-top: 209px;}\r\n\r\n.m-t-210 {margin-top: 210px;}\r\n\r\n.m-t-211 {margin-top: 211px;}\r\n\r\n.m-t-212 {margin-top: 212px;}\r\n\r\n.m-t-213 {margin-top: 213px;}\r\n\r\n.m-t-214 {margin-top: 214px;}\r\n\r\n.m-t-215 {margin-top: 215px;}\r\n\r\n.m-t-216 {margin-top: 216px;}\r\n\r\n.m-t-217 {margin-top: 217px;}\r\n\r\n.m-t-218 {margin-top: 218px;}\r\n\r\n.m-t-219 {margin-top: 219px;}\r\n\r\n.m-t-220 {margin-top: 220px;}\r\n\r\n.m-t-221 {margin-top: 221px;}\r\n\r\n.m-t-222 {margin-top: 222px;}\r\n\r\n.m-t-223 {margin-top: 223px;}\r\n\r\n.m-t-224 {margin-top: 224px;}\r\n\r\n.m-t-225 {margin-top: 225px;}\r\n\r\n.m-t-226 {margin-top: 226px;}\r\n\r\n.m-t-227 {margin-top: 227px;}\r\n\r\n.m-t-228 {margin-top: 228px;}\r\n\r\n.m-t-229 {margin-top: 229px;}\r\n\r\n.m-t-230 {margin-top: 230px;}\r\n\r\n.m-t-231 {margin-top: 231px;}\r\n\r\n.m-t-232 {margin-top: 232px;}\r\n\r\n.m-t-233 {margin-top: 233px;}\r\n\r\n.m-t-234 {margin-top: 234px;}\r\n\r\n.m-t-235 {margin-top: 235px;}\r\n\r\n.m-t-236 {margin-top: 236px;}\r\n\r\n.m-t-237 {margin-top: 237px;}\r\n\r\n.m-t-238 {margin-top: 238px;}\r\n\r\n.m-t-239 {margin-top: 239px;}\r\n\r\n.m-t-240 {margin-top: 240px;}\r\n\r\n.m-t-241 {margin-top: 241px;}\r\n\r\n.m-t-242 {margin-top: 242px;}\r\n\r\n.m-t-243 {margin-top: 243px;}\r\n\r\n.m-t-244 {margin-top: 244px;}\r\n\r\n.m-t-245 {margin-top: 245px;}\r\n\r\n.m-t-246 {margin-top: 246px;}\r\n\r\n.m-t-247 {margin-top: 247px;}\r\n\r\n.m-t-248 {margin-top: 248px;}\r\n\r\n.m-t-249 {margin-top: 249px;}\r\n\r\n.m-t-250 {margin-top: 250px;}\r\n\r\n.m-b-0 {margin-bottom: 0px;}\r\n\r\n.m-b-1 {margin-bottom: 1px;}\r\n\r\n.m-b-2 {margin-bottom: 2px;}\r\n\r\n.m-b-3 {margin-bottom: 3px;}\r\n\r\n.m-b-4 {margin-bottom: 4px;}\r\n\r\n.m-b-5 {margin-bottom: 5px;}\r\n\r\n.m-b-6 {margin-bottom: 6px;}\r\n\r\n.m-b-7 {margin-bottom: 7px;}\r\n\r\n.m-b-8 {margin-bottom: 8px;}\r\n\r\n.m-b-9 {margin-bottom: 9px;}\r\n\r\n.m-b-10 {margin-bottom: 10px;}\r\n\r\n.m-b-11 {margin-bottom: 11px;}\r\n\r\n.m-b-12 {margin-bottom: 12px;}\r\n\r\n.m-b-13 {margin-bottom: 13px;}\r\n\r\n.m-b-14 {margin-bottom: 14px;}\r\n\r\n.m-b-15 {margin-bottom: 15px;}\r\n\r\n.m-b-16 {margin-bottom: 16px;}\r\n\r\n.m-b-17 {margin-bottom: 17px;}\r\n\r\n.m-b-18 {margin-bottom: 18px;}\r\n\r\n.m-b-19 {margin-bottom: 19px;}\r\n\r\n.m-b-20 {margin-bottom: 20px;}\r\n\r\n.m-b-21 {margin-bottom: 21px;}\r\n\r\n.m-b-22 {margin-bottom: 22px;}\r\n\r\n.m-b-23 {margin-bottom: 23px;}\r\n\r\n.m-b-24 {margin-bottom: 24px;}\r\n\r\n.m-b-25 {margin-bottom: 25px;}\r\n\r\n.m-b-26 {margin-bottom: 26px;}\r\n\r\n.m-b-27 {margin-bottom: 27px;}\r\n\r\n.m-b-28 {margin-bottom: 28px;}\r\n\r\n.m-b-29 {margin-bottom: 29px;}\r\n\r\n.m-b-30 {margin-bottom: 30px;}\r\n\r\n.m-b-31 {margin-bottom: 31px;}\r\n\r\n.m-b-32 {margin-bottom: 32px;}\r\n\r\n.m-b-33 {margin-bottom: 33px;}\r\n\r\n.m-b-34 {margin-bottom: 34px;}\r\n\r\n.m-b-35 {margin-bottom: 35px;}\r\n\r\n.m-b-36 {margin-bottom: 36px;}\r\n\r\n.m-b-37 {margin-bottom: 37px;}\r\n\r\n.m-b-38 {margin-bottom: 38px;}\r\n\r\n.m-b-39 {margin-bottom: 39px;}\r\n\r\n.m-b-40 {margin-bottom: 40px;}\r\n\r\n.m-b-41 {margin-bottom: 41px;}\r\n\r\n.m-b-42 {margin-bottom: 42px;}\r\n\r\n.m-b-43 {margin-bottom: 43px;}\r\n\r\n.m-b-44 {margin-bottom: 44px;}\r\n\r\n.m-b-45 {margin-bottom: 45px;}\r\n\r\n.m-b-46 {margin-bottom: 46px;}\r\n\r\n.m-b-47 {margin-bottom: 47px;}\r\n\r\n.m-b-48 {margin-bottom: 48px;}\r\n\r\n.m-b-49 {margin-bottom: 49px;}\r\n\r\n.m-b-50 {margin-bottom: 50px;}\r\n\r\n.m-b-51 {margin-bottom: 51px;}\r\n\r\n.m-b-52 {margin-bottom: 52px;}\r\n\r\n.m-b-53 {margin-bottom: 53px;}\r\n\r\n.m-b-54 {margin-bottom: 54px;}\r\n\r\n.m-b-55 {margin-bottom: 55px;}\r\n\r\n.m-b-56 {margin-bottom: 56px;}\r\n\r\n.m-b-57 {margin-bottom: 57px;}\r\n\r\n.m-b-58 {margin-bottom: 58px;}\r\n\r\n.m-b-59 {margin-bottom: 59px;}\r\n\r\n.m-b-60 {margin-bottom: 60px;}\r\n\r\n.m-b-61 {margin-bottom: 61px;}\r\n\r\n.m-b-62 {margin-bottom: 62px;}\r\n\r\n.m-b-63 {margin-bottom: 63px;}\r\n\r\n.m-b-64 {margin-bottom: 64px;}\r\n\r\n.m-b-65 {margin-bottom: 65px;}\r\n\r\n.m-b-66 {margin-bottom: 66px;}\r\n\r\n.m-b-67 {margin-bottom: 67px;}\r\n\r\n.m-b-68 {margin-bottom: 68px;}\r\n\r\n.m-b-69 {margin-bottom: 69px;}\r\n\r\n.m-b-70 {margin-bottom: 70px;}\r\n\r\n.m-b-71 {margin-bottom: 71px;}\r\n\r\n.m-b-72 {margin-bottom: 72px;}\r\n\r\n.m-b-73 {margin-bottom: 73px;}\r\n\r\n.m-b-74 {margin-bottom: 74px;}\r\n\r\n.m-b-75 {margin-bottom: 75px;}\r\n\r\n.m-b-76 {margin-bottom: 76px;}\r\n\r\n.m-b-77 {margin-bottom: 77px;}\r\n\r\n.m-b-78 {margin-bottom: 78px;}\r\n\r\n.m-b-79 {margin-bottom: 79px;}\r\n\r\n.m-b-80 {margin-bottom: 80px;}\r\n\r\n.m-b-81 {margin-bottom: 81px;}\r\n\r\n.m-b-82 {margin-bottom: 82px;}\r\n\r\n.m-b-83 {margin-bottom: 83px;}\r\n\r\n.m-b-84 {margin-bottom: 84px;}\r\n\r\n.m-b-85 {margin-bottom: 85px;}\r\n\r\n.m-b-86 {margin-bottom: 86px;}\r\n\r\n.m-b-87 {margin-bottom: 87px;}\r\n\r\n.m-b-88 {margin-bottom: 88px;}\r\n\r\n.m-b-89 {margin-bottom: 89px;}\r\n\r\n.m-b-90 {margin-bottom: 90px;}\r\n\r\n.m-b-91 {margin-bottom: 91px;}\r\n\r\n.m-b-92 {margin-bottom: 92px;}\r\n\r\n.m-b-93 {margin-bottom: 93px;}\r\n\r\n.m-b-94 {margin-bottom: 94px;}\r\n\r\n.m-b-95 {margin-bottom: 95px;}\r\n\r\n.m-b-96 {margin-bottom: 96px;}\r\n\r\n.m-b-97 {margin-bottom: 97px;}\r\n\r\n.m-b-98 {margin-bottom: 98px;}\r\n\r\n.m-b-99 {margin-bottom: 99px;}\r\n\r\n.m-b-100 {margin-bottom: 100px;}\r\n\r\n.m-b-101 {margin-bottom: 101px;}\r\n\r\n.m-b-102 {margin-bottom: 102px;}\r\n\r\n.m-b-103 {margin-bottom: 103px;}\r\n\r\n.m-b-104 {margin-bottom: 104px;}\r\n\r\n.m-b-105 {margin-bottom: 105px;}\r\n\r\n.m-b-106 {margin-bottom: 106px;}\r\n\r\n.m-b-107 {margin-bottom: 107px;}\r\n\r\n.m-b-108 {margin-bottom: 108px;}\r\n\r\n.m-b-109 {margin-bottom: 109px;}\r\n\r\n.m-b-110 {margin-bottom: 110px;}\r\n\r\n.m-b-111 {margin-bottom: 111px;}\r\n\r\n.m-b-112 {margin-bottom: 112px;}\r\n\r\n.m-b-113 {margin-bottom: 113px;}\r\n\r\n.m-b-114 {margin-bottom: 114px;}\r\n\r\n.m-b-115 {margin-bottom: 115px;}\r\n\r\n.m-b-116 {margin-bottom: 116px;}\r\n\r\n.m-b-117 {margin-bottom: 117px;}\r\n\r\n.m-b-118 {margin-bottom: 118px;}\r\n\r\n.m-b-119 {margin-bottom: 119px;}\r\n\r\n.m-b-120 {margin-bottom: 120px;}\r\n\r\n.m-b-121 {margin-bottom: 121px;}\r\n\r\n.m-b-122 {margin-bottom: 122px;}\r\n\r\n.m-b-123 {margin-bottom: 123px;}\r\n\r\n.m-b-124 {margin-bottom: 124px;}\r\n\r\n.m-b-125 {margin-bottom: 125px;}\r\n\r\n.m-b-126 {margin-bottom: 126px;}\r\n\r\n.m-b-127 {margin-bottom: 127px;}\r\n\r\n.m-b-128 {margin-bottom: 128px;}\r\n\r\n.m-b-129 {margin-bottom: 129px;}\r\n\r\n.m-b-130 {margin-bottom: 130px;}\r\n\r\n.m-b-131 {margin-bottom: 131px;}\r\n\r\n.m-b-132 {margin-bottom: 132px;}\r\n\r\n.m-b-133 {margin-bottom: 133px;}\r\n\r\n.m-b-134 {margin-bottom: 134px;}\r\n\r\n.m-b-135 {margin-bottom: 135px;}\r\n\r\n.m-b-136 {margin-bottom: 136px;}\r\n\r\n.m-b-137 {margin-bottom: 137px;}\r\n\r\n.m-b-138 {margin-bottom: 138px;}\r\n\r\n.m-b-139 {margin-bottom: 139px;}\r\n\r\n.m-b-140 {margin-bottom: 140px;}\r\n\r\n.m-b-141 {margin-bottom: 141px;}\r\n\r\n.m-b-142 {margin-bottom: 142px;}\r\n\r\n.m-b-143 {margin-bottom: 143px;}\r\n\r\n.m-b-144 {margin-bottom: 144px;}\r\n\r\n.m-b-145 {margin-bottom: 145px;}\r\n\r\n.m-b-146 {margin-bottom: 146px;}\r\n\r\n.m-b-147 {margin-bottom: 147px;}\r\n\r\n.m-b-148 {margin-bottom: 148px;}\r\n\r\n.m-b-149 {margin-bottom: 149px;}\r\n\r\n.m-b-150 {margin-bottom: 150px;}\r\n\r\n.m-b-151 {margin-bottom: 151px;}\r\n\r\n.m-b-152 {margin-bottom: 152px;}\r\n\r\n.m-b-153 {margin-bottom: 153px;}\r\n\r\n.m-b-154 {margin-bottom: 154px;}\r\n\r\n.m-b-155 {margin-bottom: 155px;}\r\n\r\n.m-b-156 {margin-bottom: 156px;}\r\n\r\n.m-b-157 {margin-bottom: 157px;}\r\n\r\n.m-b-158 {margin-bottom: 158px;}\r\n\r\n.m-b-159 {margin-bottom: 159px;}\r\n\r\n.m-b-160 {margin-bottom: 160px;}\r\n\r\n.m-b-161 {margin-bottom: 161px;}\r\n\r\n.m-b-162 {margin-bottom: 162px;}\r\n\r\n.m-b-163 {margin-bottom: 163px;}\r\n\r\n.m-b-164 {margin-bottom: 164px;}\r\n\r\n.m-b-165 {margin-bottom: 165px;}\r\n\r\n.m-b-166 {margin-bottom: 166px;}\r\n\r\n.m-b-167 {margin-bottom: 167px;}\r\n\r\n.m-b-168 {margin-bottom: 168px;}\r\n\r\n.m-b-169 {margin-bottom: 169px;}\r\n\r\n.m-b-170 {margin-bottom: 170px;}\r\n\r\n.m-b-171 {margin-bottom: 171px;}\r\n\r\n.m-b-172 {margin-bottom: 172px;}\r\n\r\n.m-b-173 {margin-bottom: 173px;}\r\n\r\n.m-b-174 {margin-bottom: 174px;}\r\n\r\n.m-b-175 {margin-bottom: 175px;}\r\n\r\n.m-b-176 {margin-bottom: 176px;}\r\n\r\n.m-b-177 {margin-bottom: 177px;}\r\n\r\n.m-b-178 {margin-bottom: 178px;}\r\n\r\n.m-b-179 {margin-bottom: 179px;}\r\n\r\n.m-b-180 {margin-bottom: 180px;}\r\n\r\n.m-b-181 {margin-bottom: 181px;}\r\n\r\n.m-b-182 {margin-bottom: 182px;}\r\n\r\n.m-b-183 {margin-bottom: 183px;}\r\n\r\n.m-b-184 {margin-bottom: 184px;}\r\n\r\n.m-b-185 {margin-bottom: 185px;}\r\n\r\n.m-b-186 {margin-bottom: 186px;}\r\n\r\n.m-b-187 {margin-bottom: 187px;}\r\n\r\n.m-b-188 {margin-bottom: 188px;}\r\n\r\n.m-b-189 {margin-bottom: 189px;}\r\n\r\n.m-b-190 {margin-bottom: 190px;}\r\n\r\n.m-b-191 {margin-bottom: 191px;}\r\n\r\n.m-b-192 {margin-bottom: 192px;}\r\n\r\n.m-b-193 {margin-bottom: 193px;}\r\n\r\n.m-b-194 {margin-bottom: 194px;}\r\n\r\n.m-b-195 {margin-bottom: 195px;}\r\n\r\n.m-b-196 {margin-bottom: 196px;}\r\n\r\n.m-b-197 {margin-bottom: 197px;}\r\n\r\n.m-b-198 {margin-bottom: 198px;}\r\n\r\n.m-b-199 {margin-bottom: 199px;}\r\n\r\n.m-b-200 {margin-bottom: 200px;}\r\n\r\n.m-b-201 {margin-bottom: 201px;}\r\n\r\n.m-b-202 {margin-bottom: 202px;}\r\n\r\n.m-b-203 {margin-bottom: 203px;}\r\n\r\n.m-b-204 {margin-bottom: 204px;}\r\n\r\n.m-b-205 {margin-bottom: 205px;}\r\n\r\n.m-b-206 {margin-bottom: 206px;}\r\n\r\n.m-b-207 {margin-bottom: 207px;}\r\n\r\n.m-b-208 {margin-bottom: 208px;}\r\n\r\n.m-b-209 {margin-bottom: 209px;}\r\n\r\n.m-b-210 {margin-bottom: 210px;}\r\n\r\n.m-b-211 {margin-bottom: 211px;}\r\n\r\n.m-b-212 {margin-bottom: 212px;}\r\n\r\n.m-b-213 {margin-bottom: 213px;}\r\n\r\n.m-b-214 {margin-bottom: 214px;}\r\n\r\n.m-b-215 {margin-bottom: 215px;}\r\n\r\n.m-b-216 {margin-bottom: 216px;}\r\n\r\n.m-b-217 {margin-bottom: 217px;}\r\n\r\n.m-b-218 {margin-bottom: 218px;}\r\n\r\n.m-b-219 {margin-bottom: 219px;}\r\n\r\n.m-b-220 {margin-bottom: 220px;}\r\n\r\n.m-b-221 {margin-bottom: 221px;}\r\n\r\n.m-b-222 {margin-bottom: 222px;}\r\n\r\n.m-b-223 {margin-bottom: 223px;}\r\n\r\n.m-b-224 {margin-bottom: 224px;}\r\n\r\n.m-b-225 {margin-bottom: 225px;}\r\n\r\n.m-b-226 {margin-bottom: 226px;}\r\n\r\n.m-b-227 {margin-bottom: 227px;}\r\n\r\n.m-b-228 {margin-bottom: 228px;}\r\n\r\n.m-b-229 {margin-bottom: 229px;}\r\n\r\n.m-b-230 {margin-bottom: 230px;}\r\n\r\n.m-b-231 {margin-bottom: 231px;}\r\n\r\n.m-b-232 {margin-bottom: 232px;}\r\n\r\n.m-b-233 {margin-bottom: 233px;}\r\n\r\n.m-b-234 {margin-bottom: 234px;}\r\n\r\n.m-b-235 {margin-bottom: 235px;}\r\n\r\n.m-b-236 {margin-bottom: 236px;}\r\n\r\n.m-b-237 {margin-bottom: 237px;}\r\n\r\n.m-b-238 {margin-bottom: 238px;}\r\n\r\n.m-b-239 {margin-bottom: 239px;}\r\n\r\n.m-b-240 {margin-bottom: 240px;}\r\n\r\n.m-b-241 {margin-bottom: 241px;}\r\n\r\n.m-b-242 {margin-bottom: 242px;}\r\n\r\n.m-b-243 {margin-bottom: 243px;}\r\n\r\n.m-b-244 {margin-bottom: 244px;}\r\n\r\n.m-b-245 {margin-bottom: 245px;}\r\n\r\n.m-b-246 {margin-bottom: 246px;}\r\n\r\n.m-b-247 {margin-bottom: 247px;}\r\n\r\n.m-b-248 {margin-bottom: 248px;}\r\n\r\n.m-b-249 {margin-bottom: 249px;}\r\n\r\n.m-b-250 {margin-bottom: 250px;}\r\n\r\n.m-l-0 {margin-left: 0px;}\r\n\r\n.m-l-1 {margin-left: 1px;}\r\n\r\n.m-l-2 {margin-left: 2px;}\r\n\r\n.m-l-3 {margin-left: 3px;}\r\n\r\n.m-l-4 {margin-left: 4px;}\r\n\r\n.m-l-5 {margin-left: 5px;}\r\n\r\n.m-l-6 {margin-left: 6px;}\r\n\r\n.m-l-7 {margin-left: 7px;}\r\n\r\n.m-l-8 {margin-left: 8px;}\r\n\r\n.m-l-9 {margin-left: 9px;}\r\n\r\n.m-l-10 {margin-left: 10px;}\r\n\r\n.m-l-11 {margin-left: 11px;}\r\n\r\n.m-l-12 {margin-left: 12px;}\r\n\r\n.m-l-13 {margin-left: 13px;}\r\n\r\n.m-l-14 {margin-left: 14px;}\r\n\r\n.m-l-15 {margin-left: 15px;}\r\n\r\n.m-l-16 {margin-left: 16px;}\r\n\r\n.m-l-17 {margin-left: 17px;}\r\n\r\n.m-l-18 {margin-left: 18px;}\r\n\r\n.m-l-19 {margin-left: 19px;}\r\n\r\n.m-l-20 {margin-left: 20px;}\r\n\r\n.m-l-21 {margin-left: 21px;}\r\n\r\n.m-l-22 {margin-left: 22px;}\r\n\r\n.m-l-23 {margin-left: 23px;}\r\n\r\n.m-l-24 {margin-left: 24px;}\r\n\r\n.m-l-25 {margin-left: 25px;}\r\n\r\n.m-l-26 {margin-left: 26px;}\r\n\r\n.m-l-27 {margin-left: 27px;}\r\n\r\n.m-l-28 {margin-left: 28px;}\r\n\r\n.m-l-29 {margin-left: 29px;}\r\n\r\n.m-l-30 {margin-left: 30px;}\r\n\r\n.m-l-31 {margin-left: 31px;}\r\n\r\n.m-l-32 {margin-left: 32px;}\r\n\r\n.m-l-33 {margin-left: 33px;}\r\n\r\n.m-l-34 {margin-left: 34px;}\r\n\r\n.m-l-35 {margin-left: 35px;}\r\n\r\n.m-l-36 {margin-left: 36px;}\r\n\r\n.m-l-37 {margin-left: 37px;}\r\n\r\n.m-l-38 {margin-left: 38px;}\r\n\r\n.m-l-39 {margin-left: 39px;}\r\n\r\n.m-l-40 {margin-left: 40px;}\r\n\r\n.m-l-41 {margin-left: 41px;}\r\n\r\n.m-l-42 {margin-left: 42px;}\r\n\r\n.m-l-43 {margin-left: 43px;}\r\n\r\n.m-l-44 {margin-left: 44px;}\r\n\r\n.m-l-45 {margin-left: 45px;}\r\n\r\n.m-l-46 {margin-left: 46px;}\r\n\r\n.m-l-47 {margin-left: 47px;}\r\n\r\n.m-l-48 {margin-left: 48px;}\r\n\r\n.m-l-49 {margin-left: 49px;}\r\n\r\n.m-l-50 {margin-left: 50px;}\r\n\r\n.m-l-51 {margin-left: 51px;}\r\n\r\n.m-l-52 {margin-left: 52px;}\r\n\r\n.m-l-53 {margin-left: 53px;}\r\n\r\n.m-l-54 {margin-left: 54px;}\r\n\r\n.m-l-55 {margin-left: 55px;}\r\n\r\n.m-l-56 {margin-left: 56px;}\r\n\r\n.m-l-57 {margin-left: 57px;}\r\n\r\n.m-l-58 {margin-left: 58px;}\r\n\r\n.m-l-59 {margin-left: 59px;}\r\n\r\n.m-l-60 {margin-left: 60px;}\r\n\r\n.m-l-61 {margin-left: 61px;}\r\n\r\n.m-l-62 {margin-left: 62px;}\r\n\r\n.m-l-63 {margin-left: 63px;}\r\n\r\n.m-l-64 {margin-left: 64px;}\r\n\r\n.m-l-65 {margin-left: 65px;}\r\n\r\n.m-l-66 {margin-left: 66px;}\r\n\r\n.m-l-67 {margin-left: 67px;}\r\n\r\n.m-l-68 {margin-left: 68px;}\r\n\r\n.m-l-69 {margin-left: 69px;}\r\n\r\n.m-l-70 {margin-left: 70px;}\r\n\r\n.m-l-71 {margin-left: 71px;}\r\n\r\n.m-l-72 {margin-left: 72px;}\r\n\r\n.m-l-73 {margin-left: 73px;}\r\n\r\n.m-l-74 {margin-left: 74px;}\r\n\r\n.m-l-75 {margin-left: 75px;}\r\n\r\n.m-l-76 {margin-left: 76px;}\r\n\r\n.m-l-77 {margin-left: 77px;}\r\n\r\n.m-l-78 {margin-left: 78px;}\r\n\r\n.m-l-79 {margin-left: 79px;}\r\n\r\n.m-l-80 {margin-left: 80px;}\r\n\r\n.m-l-81 {margin-left: 81px;}\r\n\r\n.m-l-82 {margin-left: 82px;}\r\n\r\n.m-l-83 {margin-left: 83px;}\r\n\r\n.m-l-84 {margin-left: 84px;}\r\n\r\n.m-l-85 {margin-left: 85px;}\r\n\r\n.m-l-86 {margin-left: 86px;}\r\n\r\n.m-l-87 {margin-left: 87px;}\r\n\r\n.m-l-88 {margin-left: 88px;}\r\n\r\n.m-l-89 {margin-left: 89px;}\r\n\r\n.m-l-90 {margin-left: 90px;}\r\n\r\n.m-l-91 {margin-left: 91px;}\r\n\r\n.m-l-92 {margin-left: 92px;}\r\n\r\n.m-l-93 {margin-left: 93px;}\r\n\r\n.m-l-94 {margin-left: 94px;}\r\n\r\n.m-l-95 {margin-left: 95px;}\r\n\r\n.m-l-96 {margin-left: 96px;}\r\n\r\n.m-l-97 {margin-left: 97px;}\r\n\r\n.m-l-98 {margin-left: 98px;}\r\n\r\n.m-l-99 {margin-left: 99px;}\r\n\r\n.m-l-100 {margin-left: 100px;}\r\n\r\n.m-l-101 {margin-left: 101px;}\r\n\r\n.m-l-102 {margin-left: 102px;}\r\n\r\n.m-l-103 {margin-left: 103px;}\r\n\r\n.m-l-104 {margin-left: 104px;}\r\n\r\n.m-l-105 {margin-left: 105px;}\r\n\r\n.m-l-106 {margin-left: 106px;}\r\n\r\n.m-l-107 {margin-left: 107px;}\r\n\r\n.m-l-108 {margin-left: 108px;}\r\n\r\n.m-l-109 {margin-left: 109px;}\r\n\r\n.m-l-110 {margin-left: 110px;}\r\n\r\n.m-l-111 {margin-left: 111px;}\r\n\r\n.m-l-112 {margin-left: 112px;}\r\n\r\n.m-l-113 {margin-left: 113px;}\r\n\r\n.m-l-114 {margin-left: 114px;}\r\n\r\n.m-l-115 {margin-left: 115px;}\r\n\r\n.m-l-116 {margin-left: 116px;}\r\n\r\n.m-l-117 {margin-left: 117px;}\r\n\r\n.m-l-118 {margin-left: 118px;}\r\n\r\n.m-l-119 {margin-left: 119px;}\r\n\r\n.m-l-120 {margin-left: 120px;}\r\n\r\n.m-l-121 {margin-left: 121px;}\r\n\r\n.m-l-122 {margin-left: 122px;}\r\n\r\n.m-l-123 {margin-left: 123px;}\r\n\r\n.m-l-124 {margin-left: 124px;}\r\n\r\n.m-l-125 {margin-left: 125px;}\r\n\r\n.m-l-126 {margin-left: 126px;}\r\n\r\n.m-l-127 {margin-left: 127px;}\r\n\r\n.m-l-128 {margin-left: 128px;}\r\n\r\n.m-l-129 {margin-left: 129px;}\r\n\r\n.m-l-130 {margin-left: 130px;}\r\n\r\n.m-l-131 {margin-left: 131px;}\r\n\r\n.m-l-132 {margin-left: 132px;}\r\n\r\n.m-l-133 {margin-left: 133px;}\r\n\r\n.m-l-134 {margin-left: 134px;}\r\n\r\n.m-l-135 {margin-left: 135px;}\r\n\r\n.m-l-136 {margin-left: 136px;}\r\n\r\n.m-l-137 {margin-left: 137px;}\r\n\r\n.m-l-138 {margin-left: 138px;}\r\n\r\n.m-l-139 {margin-left: 139px;}\r\n\r\n.m-l-140 {margin-left: 140px;}\r\n\r\n.m-l-141 {margin-left: 141px;}\r\n\r\n.m-l-142 {margin-left: 142px;}\r\n\r\n.m-l-143 {margin-left: 143px;}\r\n\r\n.m-l-144 {margin-left: 144px;}\r\n\r\n.m-l-145 {margin-left: 145px;}\r\n\r\n.m-l-146 {margin-left: 146px;}\r\n\r\n.m-l-147 {margin-left: 147px;}\r\n\r\n.m-l-148 {margin-left: 148px;}\r\n\r\n.m-l-149 {margin-left: 149px;}\r\n\r\n.m-l-150 {margin-left: 150px;}\r\n\r\n.m-l-151 {margin-left: 151px;}\r\n\r\n.m-l-152 {margin-left: 152px;}\r\n\r\n.m-l-153 {margin-left: 153px;}\r\n\r\n.m-l-154 {margin-left: 154px;}\r\n\r\n.m-l-155 {margin-left: 155px;}\r\n\r\n.m-l-156 {margin-left: 156px;}\r\n\r\n.m-l-157 {margin-left: 157px;}\r\n\r\n.m-l-158 {margin-left: 158px;}\r\n\r\n.m-l-159 {margin-left: 159px;}\r\n\r\n.m-l-160 {margin-left: 160px;}\r\n\r\n.m-l-161 {margin-left: 161px;}\r\n\r\n.m-l-162 {margin-left: 162px;}\r\n\r\n.m-l-163 {margin-left: 163px;}\r\n\r\n.m-l-164 {margin-left: 164px;}\r\n\r\n.m-l-165 {margin-left: 165px;}\r\n\r\n.m-l-166 {margin-left: 166px;}\r\n\r\n.m-l-167 {margin-left: 167px;}\r\n\r\n.m-l-168 {margin-left: 168px;}\r\n\r\n.m-l-169 {margin-left: 169px;}\r\n\r\n.m-l-170 {margin-left: 170px;}\r\n\r\n.m-l-171 {margin-left: 171px;}\r\n\r\n.m-l-172 {margin-left: 172px;}\r\n\r\n.m-l-173 {margin-left: 173px;}\r\n\r\n.m-l-174 {margin-left: 174px;}\r\n\r\n.m-l-175 {margin-left: 175px;}\r\n\r\n.m-l-176 {margin-left: 176px;}\r\n\r\n.m-l-177 {margin-left: 177px;}\r\n\r\n.m-l-178 {margin-left: 178px;}\r\n\r\n.m-l-179 {margin-left: 179px;}\r\n\r\n.m-l-180 {margin-left: 180px;}\r\n\r\n.m-l-181 {margin-left: 181px;}\r\n\r\n.m-l-182 {margin-left: 182px;}\r\n\r\n.m-l-183 {margin-left: 183px;}\r\n\r\n.m-l-184 {margin-left: 184px;}\r\n\r\n.m-l-185 {margin-left: 185px;}\r\n\r\n.m-l-186 {margin-left: 186px;}\r\n\r\n.m-l-187 {margin-left: 187px;}\r\n\r\n.m-l-188 {margin-left: 188px;}\r\n\r\n.m-l-189 {margin-left: 189px;}\r\n\r\n.m-l-190 {margin-left: 190px;}\r\n\r\n.m-l-191 {margin-left: 191px;}\r\n\r\n.m-l-192 {margin-left: 192px;}\r\n\r\n.m-l-193 {margin-left: 193px;}\r\n\r\n.m-l-194 {margin-left: 194px;}\r\n\r\n.m-l-195 {margin-left: 195px;}\r\n\r\n.m-l-196 {margin-left: 196px;}\r\n\r\n.m-l-197 {margin-left: 197px;}\r\n\r\n.m-l-198 {margin-left: 198px;}\r\n\r\n.m-l-199 {margin-left: 199px;}\r\n\r\n.m-l-200 {margin-left: 200px;}\r\n\r\n.m-l-201 {margin-left: 201px;}\r\n\r\n.m-l-202 {margin-left: 202px;}\r\n\r\n.m-l-203 {margin-left: 203px;}\r\n\r\n.m-l-204 {margin-left: 204px;}\r\n\r\n.m-l-205 {margin-left: 205px;}\r\n\r\n.m-l-206 {margin-left: 206px;}\r\n\r\n.m-l-207 {margin-left: 207px;}\r\n\r\n.m-l-208 {margin-left: 208px;}\r\n\r\n.m-l-209 {margin-left: 209px;}\r\n\r\n.m-l-210 {margin-left: 210px;}\r\n\r\n.m-l-211 {margin-left: 211px;}\r\n\r\n.m-l-212 {margin-left: 212px;}\r\n\r\n.m-l-213 {margin-left: 213px;}\r\n\r\n.m-l-214 {margin-left: 214px;}\r\n\r\n.m-l-215 {margin-left: 215px;}\r\n\r\n.m-l-216 {margin-left: 216px;}\r\n\r\n.m-l-217 {margin-left: 217px;}\r\n\r\n.m-l-218 {margin-left: 218px;}\r\n\r\n.m-l-219 {margin-left: 219px;}\r\n\r\n.m-l-220 {margin-left: 220px;}\r\n\r\n.m-l-221 {margin-left: 221px;}\r\n\r\n.m-l-222 {margin-left: 222px;}\r\n\r\n.m-l-223 {margin-left: 223px;}\r\n\r\n.m-l-224 {margin-left: 224px;}\r\n\r\n.m-l-225 {margin-left: 225px;}\r\n\r\n.m-l-226 {margin-left: 226px;}\r\n\r\n.m-l-227 {margin-left: 227px;}\r\n\r\n.m-l-228 {margin-left: 228px;}\r\n\r\n.m-l-229 {margin-left: 229px;}\r\n\r\n.m-l-230 {margin-left: 230px;}\r\n\r\n.m-l-231 {margin-left: 231px;}\r\n\r\n.m-l-232 {margin-left: 232px;}\r\n\r\n.m-l-233 {margin-left: 233px;}\r\n\r\n.m-l-234 {margin-left: 234px;}\r\n\r\n.m-l-235 {margin-left: 235px;}\r\n\r\n.m-l-236 {margin-left: 236px;}\r\n\r\n.m-l-237 {margin-left: 237px;}\r\n\r\n.m-l-238 {margin-left: 238px;}\r\n\r\n.m-l-239 {margin-left: 239px;}\r\n\r\n.m-l-240 {margin-left: 240px;}\r\n\r\n.m-l-241 {margin-left: 241px;}\r\n\r\n.m-l-242 {margin-left: 242px;}\r\n\r\n.m-l-243 {margin-left: 243px;}\r\n\r\n.m-l-244 {margin-left: 244px;}\r\n\r\n.m-l-245 {margin-left: 245px;}\r\n\r\n.m-l-246 {margin-left: 246px;}\r\n\r\n.m-l-247 {margin-left: 247px;}\r\n\r\n.m-l-248 {margin-left: 248px;}\r\n\r\n.m-l-249 {margin-left: 249px;}\r\n\r\n.m-l-250 {margin-left: 250px;}\r\n\r\n.m-r-0 {margin-right: 0px;}\r\n\r\n.m-r-1 {margin-right: 1px;}\r\n\r\n.m-r-2 {margin-right: 2px;}\r\n\r\n.m-r-3 {margin-right: 3px;}\r\n\r\n.m-r-4 {margin-right: 4px;}\r\n\r\n.m-r-5 {margin-right: 5px;}\r\n\r\n.m-r-6 {margin-right: 6px;}\r\n\r\n.m-r-7 {margin-right: 7px;}\r\n\r\n.m-r-8 {margin-right: 8px;}\r\n\r\n.m-r-9 {margin-right: 9px;}\r\n\r\n.m-r-10 {margin-right: 10px;}\r\n\r\n.m-r-11 {margin-right: 11px;}\r\n\r\n.m-r-12 {margin-right: 12px;}\r\n\r\n.m-r-13 {margin-right: 13px;}\r\n\r\n.m-r-14 {margin-right: 14px;}\r\n\r\n.m-r-15 {margin-right: 15px;}\r\n\r\n.m-r-16 {margin-right: 16px;}\r\n\r\n.m-r-17 {margin-right: 17px;}\r\n\r\n.m-r-18 {margin-right: 18px;}\r\n\r\n.m-r-19 {margin-right: 19px;}\r\n\r\n.m-r-20 {margin-right: 20px;}\r\n\r\n.m-r-21 {margin-right: 21px;}\r\n\r\n.m-r-22 {margin-right: 22px;}\r\n\r\n.m-r-23 {margin-right: 23px;}\r\n\r\n.m-r-24 {margin-right: 24px;}\r\n\r\n.m-r-25 {margin-right: 25px;}\r\n\r\n.m-r-26 {margin-right: 26px;}\r\n\r\n.m-r-27 {margin-right: 27px;}\r\n\r\n.m-r-28 {margin-right: 28px;}\r\n\r\n.m-r-29 {margin-right: 29px;}\r\n\r\n.m-r-30 {margin-right: 30px;}\r\n\r\n.m-r-31 {margin-right: 31px;}\r\n\r\n.m-r-32 {margin-right: 32px;}\r\n\r\n.m-r-33 {margin-right: 33px;}\r\n\r\n.m-r-34 {margin-right: 34px;}\r\n\r\n.m-r-35 {margin-right: 35px;}\r\n\r\n.m-r-36 {margin-right: 36px;}\r\n\r\n.m-r-37 {margin-right: 37px;}\r\n\r\n.m-r-38 {margin-right: 38px;}\r\n\r\n.m-r-39 {margin-right: 39px;}\r\n\r\n.m-r-40 {margin-right: 40px;}\r\n\r\n.m-r-41 {margin-right: 41px;}\r\n\r\n.m-r-42 {margin-right: 42px;}\r\n\r\n.m-r-43 {margin-right: 43px;}\r\n\r\n.m-r-44 {margin-right: 44px;}\r\n\r\n.m-r-45 {margin-right: 45px;}\r\n\r\n.m-r-46 {margin-right: 46px;}\r\n\r\n.m-r-47 {margin-right: 47px;}\r\n\r\n.m-r-48 {margin-right: 48px;}\r\n\r\n.m-r-49 {margin-right: 49px;}\r\n\r\n.m-r-50 {margin-right: 50px;}\r\n\r\n.m-r-51 {margin-right: 51px;}\r\n\r\n.m-r-52 {margin-right: 52px;}\r\n\r\n.m-r-53 {margin-right: 53px;}\r\n\r\n.m-r-54 {margin-right: 54px;}\r\n\r\n.m-r-55 {margin-right: 55px;}\r\n\r\n.m-r-56 {margin-right: 56px;}\r\n\r\n.m-r-57 {margin-right: 57px;}\r\n\r\n.m-r-58 {margin-right: 58px;}\r\n\r\n.m-r-59 {margin-right: 59px;}\r\n\r\n.m-r-60 {margin-right: 60px;}\r\n\r\n.m-r-61 {margin-right: 61px;}\r\n\r\n.m-r-62 {margin-right: 62px;}\r\n\r\n.m-r-63 {margin-right: 63px;}\r\n\r\n.m-r-64 {margin-right: 64px;}\r\n\r\n.m-r-65 {margin-right: 65px;}\r\n\r\n.m-r-66 {margin-right: 66px;}\r\n\r\n.m-r-67 {margin-right: 67px;}\r\n\r\n.m-r-68 {margin-right: 68px;}\r\n\r\n.m-r-69 {margin-right: 69px;}\r\n\r\n.m-r-70 {margin-right: 70px;}\r\n\r\n.m-r-71 {margin-right: 71px;}\r\n\r\n.m-r-72 {margin-right: 72px;}\r\n\r\n.m-r-73 {margin-right: 73px;}\r\n\r\n.m-r-74 {margin-right: 74px;}\r\n\r\n.m-r-75 {margin-right: 75px;}\r\n\r\n.m-r-76 {margin-right: 76px;}\r\n\r\n.m-r-77 {margin-right: 77px;}\r\n\r\n.m-r-78 {margin-right: 78px;}\r\n\r\n.m-r-79 {margin-right: 79px;}\r\n\r\n.m-r-80 {margin-right: 80px;}\r\n\r\n.m-r-81 {margin-right: 81px;}\r\n\r\n.m-r-82 {margin-right: 82px;}\r\n\r\n.m-r-83 {margin-right: 83px;}\r\n\r\n.m-r-84 {margin-right: 84px;}\r\n\r\n.m-r-85 {margin-right: 85px;}\r\n\r\n.m-r-86 {margin-right: 86px;}\r\n\r\n.m-r-87 {margin-right: 87px;}\r\n\r\n.m-r-88 {margin-right: 88px;}\r\n\r\n.m-r-89 {margin-right: 89px;}\r\n\r\n.m-r-90 {margin-right: 90px;}\r\n\r\n.m-r-91 {margin-right: 91px;}\r\n\r\n.m-r-92 {margin-right: 92px;}\r\n\r\n.m-r-93 {margin-right: 93px;}\r\n\r\n.m-r-94 {margin-right: 94px;}\r\n\r\n.m-r-95 {margin-right: 95px;}\r\n\r\n.m-r-96 {margin-right: 96px;}\r\n\r\n.m-r-97 {margin-right: 97px;}\r\n\r\n.m-r-98 {margin-right: 98px;}\r\n\r\n.m-r-99 {margin-right: 99px;}\r\n\r\n.m-r-100 {margin-right: 100px;}\r\n\r\n.m-r-101 {margin-right: 101px;}\r\n\r\n.m-r-102 {margin-right: 102px;}\r\n\r\n.m-r-103 {margin-right: 103px;}\r\n\r\n.m-r-104 {margin-right: 104px;}\r\n\r\n.m-r-105 {margin-right: 105px;}\r\n\r\n.m-r-106 {margin-right: 106px;}\r\n\r\n.m-r-107 {margin-right: 107px;}\r\n\r\n.m-r-108 {margin-right: 108px;}\r\n\r\n.m-r-109 {margin-right: 109px;}\r\n\r\n.m-r-110 {margin-right: 110px;}\r\n\r\n.m-r-111 {margin-right: 111px;}\r\n\r\n.m-r-112 {margin-right: 112px;}\r\n\r\n.m-r-113 {margin-right: 113px;}\r\n\r\n.m-r-114 {margin-right: 114px;}\r\n\r\n.m-r-115 {margin-right: 115px;}\r\n\r\n.m-r-116 {margin-right: 116px;}\r\n\r\n.m-r-117 {margin-right: 117px;}\r\n\r\n.m-r-118 {margin-right: 118px;}\r\n\r\n.m-r-119 {margin-right: 119px;}\r\n\r\n.m-r-120 {margin-right: 120px;}\r\n\r\n.m-r-121 {margin-right: 121px;}\r\n\r\n.m-r-122 {margin-right: 122px;}\r\n\r\n.m-r-123 {margin-right: 123px;}\r\n\r\n.m-r-124 {margin-right: 124px;}\r\n\r\n.m-r-125 {margin-right: 125px;}\r\n\r\n.m-r-126 {margin-right: 126px;}\r\n\r\n.m-r-127 {margin-right: 127px;}\r\n\r\n.m-r-128 {margin-right: 128px;}\r\n\r\n.m-r-129 {margin-right: 129px;}\r\n\r\n.m-r-130 {margin-right: 130px;}\r\n\r\n.m-r-131 {margin-right: 131px;}\r\n\r\n.m-r-132 {margin-right: 132px;}\r\n\r\n.m-r-133 {margin-right: 133px;}\r\n\r\n.m-r-134 {margin-right: 134px;}\r\n\r\n.m-r-135 {margin-right: 135px;}\r\n\r\n.m-r-136 {margin-right: 136px;}\r\n\r\n.m-r-137 {margin-right: 137px;}\r\n\r\n.m-r-138 {margin-right: 138px;}\r\n\r\n.m-r-139 {margin-right: 139px;}\r\n\r\n.m-r-140 {margin-right: 140px;}\r\n\r\n.m-r-141 {margin-right: 141px;}\r\n\r\n.m-r-142 {margin-right: 142px;}\r\n\r\n.m-r-143 {margin-right: 143px;}\r\n\r\n.m-r-144 {margin-right: 144px;}\r\n\r\n.m-r-145 {margin-right: 145px;}\r\n\r\n.m-r-146 {margin-right: 146px;}\r\n\r\n.m-r-147 {margin-right: 147px;}\r\n\r\n.m-r-148 {margin-right: 148px;}\r\n\r\n.m-r-149 {margin-right: 149px;}\r\n\r\n.m-r-150 {margin-right: 150px;}\r\n\r\n.m-r-151 {margin-right: 151px;}\r\n\r\n.m-r-152 {margin-right: 152px;}\r\n\r\n.m-r-153 {margin-right: 153px;}\r\n\r\n.m-r-154 {margin-right: 154px;}\r\n\r\n.m-r-155 {margin-right: 155px;}\r\n\r\n.m-r-156 {margin-right: 156px;}\r\n\r\n.m-r-157 {margin-right: 157px;}\r\n\r\n.m-r-158 {margin-right: 158px;}\r\n\r\n.m-r-159 {margin-right: 159px;}\r\n\r\n.m-r-160 {margin-right: 160px;}\r\n\r\n.m-r-161 {margin-right: 161px;}\r\n\r\n.m-r-162 {margin-right: 162px;}\r\n\r\n.m-r-163 {margin-right: 163px;}\r\n\r\n.m-r-164 {margin-right: 164px;}\r\n\r\n.m-r-165 {margin-right: 165px;}\r\n\r\n.m-r-166 {margin-right: 166px;}\r\n\r\n.m-r-167 {margin-right: 167px;}\r\n\r\n.m-r-168 {margin-right: 168px;}\r\n\r\n.m-r-169 {margin-right: 169px;}\r\n\r\n.m-r-170 {margin-right: 170px;}\r\n\r\n.m-r-171 {margin-right: 171px;}\r\n\r\n.m-r-172 {margin-right: 172px;}\r\n\r\n.m-r-173 {margin-right: 173px;}\r\n\r\n.m-r-174 {margin-right: 174px;}\r\n\r\n.m-r-175 {margin-right: 175px;}\r\n\r\n.m-r-176 {margin-right: 176px;}\r\n\r\n.m-r-177 {margin-right: 177px;}\r\n\r\n.m-r-178 {margin-right: 178px;}\r\n\r\n.m-r-179 {margin-right: 179px;}\r\n\r\n.m-r-180 {margin-right: 180px;}\r\n\r\n.m-r-181 {margin-right: 181px;}\r\n\r\n.m-r-182 {margin-right: 182px;}\r\n\r\n.m-r-183 {margin-right: 183px;}\r\n\r\n.m-r-184 {margin-right: 184px;}\r\n\r\n.m-r-185 {margin-right: 185px;}\r\n\r\n.m-r-186 {margin-right: 186px;}\r\n\r\n.m-r-187 {margin-right: 187px;}\r\n\r\n.m-r-188 {margin-right: 188px;}\r\n\r\n.m-r-189 {margin-right: 189px;}\r\n\r\n.m-r-190 {margin-right: 190px;}\r\n\r\n.m-r-191 {margin-right: 191px;}\r\n\r\n.m-r-192 {margin-right: 192px;}\r\n\r\n.m-r-193 {margin-right: 193px;}\r\n\r\n.m-r-194 {margin-right: 194px;}\r\n\r\n.m-r-195 {margin-right: 195px;}\r\n\r\n.m-r-196 {margin-right: 196px;}\r\n\r\n.m-r-197 {margin-right: 197px;}\r\n\r\n.m-r-198 {margin-right: 198px;}\r\n\r\n.m-r-199 {margin-right: 199px;}\r\n\r\n.m-r-200 {margin-right: 200px;}\r\n\r\n.m-r-201 {margin-right: 201px;}\r\n\r\n.m-r-202 {margin-right: 202px;}\r\n\r\n.m-r-203 {margin-right: 203px;}\r\n\r\n.m-r-204 {margin-right: 204px;}\r\n\r\n.m-r-205 {margin-right: 205px;}\r\n\r\n.m-r-206 {margin-right: 206px;}\r\n\r\n.m-r-207 {margin-right: 207px;}\r\n\r\n.m-r-208 {margin-right: 208px;}\r\n\r\n.m-r-209 {margin-right: 209px;}\r\n\r\n.m-r-210 {margin-right: 210px;}\r\n\r\n.m-r-211 {margin-right: 211px;}\r\n\r\n.m-r-212 {margin-right: 212px;}\r\n\r\n.m-r-213 {margin-right: 213px;}\r\n\r\n.m-r-214 {margin-right: 214px;}\r\n\r\n.m-r-215 {margin-right: 215px;}\r\n\r\n.m-r-216 {margin-right: 216px;}\r\n\r\n.m-r-217 {margin-right: 217px;}\r\n\r\n.m-r-218 {margin-right: 218px;}\r\n\r\n.m-r-219 {margin-right: 219px;}\r\n\r\n.m-r-220 {margin-right: 220px;}\r\n\r\n.m-r-221 {margin-right: 221px;}\r\n\r\n.m-r-222 {margin-right: 222px;}\r\n\r\n.m-r-223 {margin-right: 223px;}\r\n\r\n.m-r-224 {margin-right: 224px;}\r\n\r\n.m-r-225 {margin-right: 225px;}\r\n\r\n.m-r-226 {margin-right: 226px;}\r\n\r\n.m-r-227 {margin-right: 227px;}\r\n\r\n.m-r-228 {margin-right: 228px;}\r\n\r\n.m-r-229 {margin-right: 229px;}\r\n\r\n.m-r-230 {margin-right: 230px;}\r\n\r\n.m-r-231 {margin-right: 231px;}\r\n\r\n.m-r-232 {margin-right: 232px;}\r\n\r\n.m-r-233 {margin-right: 233px;}\r\n\r\n.m-r-234 {margin-right: 234px;}\r\n\r\n.m-r-235 {margin-right: 235px;}\r\n\r\n.m-r-236 {margin-right: 236px;}\r\n\r\n.m-r-237 {margin-right: 237px;}\r\n\r\n.m-r-238 {margin-right: 238px;}\r\n\r\n.m-r-239 {margin-right: 239px;}\r\n\r\n.m-r-240 {margin-right: 240px;}\r\n\r\n.m-r-241 {margin-right: 241px;}\r\n\r\n.m-r-242 {margin-right: 242px;}\r\n\r\n.m-r-243 {margin-right: 243px;}\r\n\r\n.m-r-244 {margin-right: 244px;}\r\n\r\n.m-r-245 {margin-right: 245px;}\r\n\r\n.m-r-246 {margin-right: 246px;}\r\n\r\n.m-r-247 {margin-right: 247px;}\r\n\r\n.m-r-248 {margin-right: 248px;}\r\n\r\n.m-r-249 {margin-right: 249px;}\r\n\r\n.m-r-250 {margin-right: 250px;}\r\n\r\n.m-l-r-auto {margin-left: auto;\tmargin-right: auto;}\r\n\r\n.m-l-auto {margin-left: auto;}\r\n\r\n.m-r-auto {margin-right: auto;}\r\n\r\n/*[ TEXT ]\r\n///////////////////////////////////////////////////////////\r\n*/\r\n\r\n/* ------------------------------------ */\r\n\r\n.text-white {color: white;}\r\n\r\n.text-black {color: black;}\r\n\r\n.text-hov-white:hover {color: white;}\r\n\r\n/* ------------------------------------ */\r\n\r\n.text-up {text-transform: uppercase;}\r\n\r\n/* ------------------------------------ */\r\n\r\n.text-center {text-align: center;}\r\n\r\n.text-left {text-align: left;}\r\n\r\n.text-right {text-align: right;}\r\n\r\n.text-middle {vertical-align: middle;}\r\n\r\n/* ------------------------------------ */\r\n\r\n.lh-1-0 {line-height: 1.0;}\r\n\r\n.lh-1-1 {line-height: 1.1;}\r\n\r\n.lh-1-2 {line-height: 1.2;}\r\n\r\n.lh-1-3 {line-height: 1.3;}\r\n\r\n.lh-1-4 {line-height: 1.4;}\r\n\r\n.lh-1-5 {line-height: 1.5;}\r\n\r\n.lh-1-6 {line-height: 1.6;}\r\n\r\n.lh-1-7 {line-height: 1.7;}\r\n\r\n.lh-1-8 {line-height: 1.8;}\r\n\r\n.lh-1-9 {line-height: 1.9;}\r\n\r\n.lh-2-0 {line-height: 2.0;}\r\n\r\n.lh-2-1 {line-height: 2.1;}\r\n\r\n.lh-2-2 {line-height: 2.2;}\r\n\r\n.lh-2-3 {line-height: 2.3;}\r\n\r\n.lh-2-4 {line-height: 2.4;}\r\n\r\n.lh-2-5 {line-height: 2.5;}\r\n\r\n.lh-2-6 {line-height: 2.6;}\r\n\r\n.lh-2-7 {line-height: 2.7;}\r\n\r\n.lh-2-8 {line-height: 2.8;}\r\n\r\n.lh-2-9 {line-height: 2.9;}\r\n\r\n/*[ SHAPE ]\r\n///////////////////////////////////////////////////////////\r\n*/\r\n\r\n/*[ Display ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.dis-none {display: none;}\r\n\r\n.dis-block {display: block;}\r\n\r\n.dis-inline {display: inline;}\r\n\r\n.dis-inline-block {display: inline-block;}\r\n\r\n.dis-flex {\r\n\tdisplay: flex;\r\n}\r\n\r\n/*[ Position ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.pos-relative {position: relative;}\r\n\r\n.pos-absolute {position: absolute;}\r\n\r\n.pos-fixed {position: fixed;}\r\n\r\n/*[ float ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.float-l {float: left;}\r\n\r\n.float-r {float: right;}\r\n\r\n/*[ Width & Height ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.sizefull {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.w-full {width: 100%;}\r\n\r\n.h-full {height: 100%;}\r\n\r\n.max-w-full {max-width: 100%;}\r\n\r\n.max-h-full {max-height: 100%;}\r\n\r\n.min-w-full {min-width: 100%;}\r\n\r\n.min-h-full {min-height: 100%;}\r\n\r\n/*[ Top Bottom Left Right ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.top-0 {top: 0;}\r\n\r\n.bottom-0 {bottom: 0;}\r\n\r\n.left-0 {left: 0;}\r\n\r\n.right-0 {right: 0;}\r\n\r\n.top-auto {top: auto;}\r\n\r\n.bottom-auto {bottom: auto;}\r\n\r\n.left-auto {left: auto;}\r\n\r\n.right-auto {right: auto;}\r\n\r\n/*[ Opacity ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.op-0-0 {opacity: 0;}\r\n\r\n.op-0-1 {opacity: 0.1;}\r\n\r\n.op-0-2 {opacity: 0.2;}\r\n\r\n.op-0-3 {opacity: 0.3;}\r\n\r\n.op-0-4 {opacity: 0.4;}\r\n\r\n.op-0-5 {opacity: 0.5;}\r\n\r\n.op-0-6 {opacity: 0.6;}\r\n\r\n.op-0-7 {opacity: 0.7;}\r\n\r\n.op-0-8 {opacity: 0.8;}\r\n\r\n.op-0-9 {opacity: 0.9;}\r\n\r\n.op-1-0 {opacity: 1;}\r\n\r\n/*[ Background ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.bgwhite {background-color: white;}\r\n\r\n.bgblack {background-color: black;}\r\n\r\n/*[ Wrap Picture ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.wrap-pic-w img {width: 100%;}\r\n\r\n.wrap-pic-max-w img {max-width: 100%;}\r\n\r\n/* ------------------------------------ */\r\n\r\n.wrap-pic-h img {height: 100%;}\r\n\r\n.wrap-pic-max-h img {max-height: 100%;}\r\n\r\n/* ------------------------------------ */\r\n\r\n.wrap-pic-cir {\r\n\tborder-radius: 50%;\r\n\toverflow: hidden;\r\n}\r\n\r\n.wrap-pic-cir img {\r\n\twidth: 100%;\r\n}\r\n\r\n/*[ Hover ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.hov-pointer:hover {cursor: pointer;}\r\n\r\n/* ------------------------------------ */\r\n\r\n.hov-img-zoom {\r\n\tdisplay: block;\r\n\toverflow: hidden;\r\n}\r\n\r\n.hov-img-zoom img{\r\n\twidth: 100%;\r\n transition: all 0.6s;\r\n}\r\n\r\n.hov-img-zoom:hover img {\r\n\ttransform: scale(1.1);\r\n}\r\n\r\n/*[  ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.bo-cir {border-radius: 50%;}\r\n\r\n.of-hidden {overflow: hidden;}\r\n\r\n.visible-false {visibility: hidden;}\r\n\r\n.visible-true {visibility: visible;}\r\n\r\n/*[ Transition ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.trans-0-1 {\r\n transition: all 0.1s;\r\n}\r\n\r\n.trans-0-2 {\r\n transition: all 0.2s;\r\n}\r\n\r\n.trans-0-3 {\r\n transition: all 0.3s;\r\n}\r\n\r\n.trans-0-4 {\r\n transition: all 0.4s;\r\n}\r\n\r\n.trans-0-5 {\r\n transition: all 0.5s;\r\n}\r\n\r\n.trans-0-6 {\r\n transition: all 0.6s;\r\n}\r\n\r\n.trans-0-9 {\r\n transition: all 0.9s;\r\n}\r\n\r\n.trans-1-0 {\r\n transition: all 1s;\r\n}\r\n\r\n/*[ Layout ]\r\n///////////////////////////////////////////////////////////\r\n*/\r\n\r\n/*[ Flex ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n/* ------------------------------------ */\r\n\r\n.flex-w {\r\n\tdisplay: flex;\r\n\t-o-flex-wrap: wrap;\r\n\tflex-wrap: wrap;\r\n}\r\n\r\n/* ------------------------------------ */\r\n\r\n.flex-l {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n}\r\n\r\n.flex-r {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n}\r\n\r\n.flex-c {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\n.flex-sa {\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n}\r\n\r\n.flex-sb {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n/* ------------------------------------ */\r\n\r\n.flex-t {\r\n\tdisplay: flex;\r\n\t-ms-align-items: flex-start;\r\n\talign-items: flex-start;\r\n}\r\n\r\n.flex-b {\r\n\tdisplay: flex;\r\n\t-ms-align-items: flex-end;\r\n\talign-items: flex-end;\r\n}\r\n\r\n.flex-m {\r\n\tdisplay: flex;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n\r\n.flex-str {\r\n\tdisplay: flex;\r\n\t-ms-align-items: stretch;\r\n\talign-items: stretch;\r\n}\r\n\r\n/* ------------------------------------ */\r\n\r\n.flex-row {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: row;\r\n\t-o-flex-direction: row;\r\n\tflex-direction: row;\r\n}\r\n\r\n.flex-row-rev {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: row-reverse;\r\n\t-o-flex-direction: row-reverse;\r\n\tflex-direction: row-reverse;\r\n}\r\n\r\n.flex-col {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n}\r\n\r\n.flex-col-rev {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column-reverse;\r\n\t-o-flex-direction: column-reverse;\r\n\tflex-direction: column-reverse;\r\n}\r\n\r\n/* ------------------------------------ */\r\n\r\n.flex-c-m {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n\r\n.flex-c-t {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\t-ms-align-items: flex-start;\r\n\talign-items: flex-start;\r\n}\r\n\r\n.flex-c-b {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\t-ms-align-items: flex-end;\r\n\talign-items: flex-end;\r\n}\r\n\r\n.flex-c-str {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\t-ms-align-items: stretch;\r\n\talign-items: stretch;\r\n}\r\n\r\n.flex-l-m {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n\r\n.flex-r-m {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n\r\n.flex-sa-m {\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n\r\n.flex-sb-m {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n\r\n/* ------------------------------------ */\r\n\r\n.flex-col-l {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\t-ms-align-items: flex-start;\r\n\talign-items: flex-start;\r\n}\r\n\r\n.flex-col-r {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\t-ms-align-items: flex-end;\r\n\talign-items: flex-end;\r\n}\r\n\r\n.flex-col-c {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n\r\n.flex-col-l-m {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\t-ms-align-items: flex-start;\r\n\talign-items: flex-start;\r\n\tjustify-content: center;\r\n}\r\n\r\n.flex-col-r-m {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\t-ms-align-items: flex-end;\r\n\talign-items: flex-end;\r\n\tjustify-content: center;\r\n}\r\n\r\n.flex-col-c-m {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.flex-col-str {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\t-ms-align-items: stretch;\r\n\talign-items: stretch;\r\n}\r\n\r\n.flex-col-sb {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n/* ------------------------------------ */\r\n\r\n.flex-col-rev-l {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column-reverse;\r\n\t-o-flex-direction: column-reverse;\r\n\tflex-direction: column-reverse;\r\n\t-ms-align-items: flex-start;\r\n\talign-items: flex-start;\r\n}\r\n\r\n.flex-col-rev-r {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column-reverse;\r\n\t-o-flex-direction: column-reverse;\r\n\tflex-direction: column-reverse;\r\n\t-ms-align-items: flex-end;\r\n\talign-items: flex-end;\r\n}\r\n\r\n.flex-col-rev-c {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column-reverse;\r\n\t-o-flex-direction: column-reverse;\r\n\tflex-direction: column-reverse;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n\r\n.flex-col-rev-str {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column-reverse;\r\n\t-o-flex-direction: column-reverse;\r\n\tflex-direction: column-reverse;\r\n\t-ms-align-items: stretch;\r\n\talign-items: stretch;\r\n}\r\n\r\n/*[ Absolute ]\r\n-----------------------------------------------------------\r\n*/\r\n\r\n.ab-c-m {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n}\r\n\r\n.ab-c-t {\r\n\tposition: absolute;\r\n\ttop: 0px;\r\n\tleft: 50%;\r\n\ttransform: translateX(-50%);\r\n}\r\n\r\n.ab-c-b {\r\n\tposition: absolute;\r\n\tbottom: 0px;\r\n\tleft: 50%;\r\n\ttransform: translateX(-50%);\r\n}\r\n\r\n.ab-l-m {\r\n\tposition: absolute;\r\n\tleft: 0px;\r\n\ttop: 50%;\r\n\ttransform: translateY(-50%);\r\n}\r\n\r\n.ab-r-m {\r\n\tposition: absolute;\r\n\tright: 0px;\r\n\ttop: 50%;\r\n\ttransform: translateY(-50%);\r\n}\r\n\r\n.ab-t-l {\r\n\tposition: absolute;\r\n\tleft: 0px;\r\n\ttop: 0px;\r\n}\r\n\r\n.ab-t-r {\r\n\tposition: absolute;\r\n\tright: 0px;\r\n\ttop: 0px;\r\n}\r\n\r\n.ab-b-l {\r\n\tposition: absolute;\r\n\tleft: 0px;\r\n\tbottom: 0px;\r\n}\r\n\r\n.ab-b-r {\r\n\tposition: absolute;\r\n\tright: 0px;\r\n\tbottom: 0px;\r\n}\r\n\r\n.entry-title{\r\n\t/* border-top: 1px solid white; */\r\n\t    /* margin-left: 17% */\r\n\t/* border-bottom: 1px solid white; */\r\n    position: relative;\r\n    z-index: 25;\r\n    display: inline;\r\n    width: 100%;\r\n    /* padding: 4% 0 5%; */\r\n    text-align: center;\r\n    max-width: 72%;\r\n    margin: 0 auto;\r\n    font-size: 45px;\r\n    font-weight: 400;\r\n    line-height: 1.2;\r\n    /* margin-top: 10%; */\r\n    /* margin: 0 auto; */\r\n   color: #f3fdf7;\r\n text-shadow:   6px 4px 20px rgba(18, 40, 7, 0.4)\r\n\r\n\r\n}\r\n\r\n.dark {\r\n\t background: #24252a;\r\n}\r\n\r\na.bttn {\r\n\t color:#075727e3;\r\n\t text-decoration: none;\r\n\t transition: 0.3s ease all;\r\n}\r\n\r\na.bttn:hover {\r\n\t color: #fff;\r\n}\r\n\r\na.bttn:focus {\r\n\t color: #fff;\r\n}\r\n\r\na.bttn-dark:hover {\r\n\t color: #fff;\r\n}\r\n\r\na.bttn-dark:focus {\r\n\t color: #fff;\r\n}\r\n\r\n.bttnOpd{\r\n\t  font-size: 30px;\r\n\t letter-spacing: 2px;\r\n\t text-transform: uppercase;\r\n\t display: inline-block;\r\n\t text-align: center;\r\n\t width: 270px;\r\n\t font-weight: bold;\r\n\t padding: 14px 0px;\r\n\t /* border: 3px solid#075727e3; */\r\n\t border-radius: 2px;\r\n\t position: relative;\r\n\t box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.bttnlab{\r\n\t font-size: 30px;\r\n\t letter-spacing: 2px;\r\n\t text-transform: uppercase;\r\n\t display: inline-block;\r\n\t text-align: center;\r\n\t width: 270px;\r\n\t font-weight: bold;\r\n\t padding: 14px 0px;\r\n\t /* border: 3px solid#075bbbe8; */\r\n\t border-radius: 2px;\r\n\t position: relative;\r\n\t box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.bttnPharmacy{\r\n\t  font-size: 30px;\r\n\t letter-spacing: 2px;\r\n\t text-transform: uppercase;\r\n\t display: inline-block;\r\n\t text-align: center;\r\n\t width: 270px;\r\n\t font-weight: bold;\r\n\t padding: 14px 0px;\r\n\t /* border: 3px solid#075727e3; */\r\n\t border-radius: 2px;\r\n\t position: relative;\r\n\t box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);\r\n\r\n     \r\n}\r\n\r\n.makeItCenter{\r\n    margin-top: 160px;\r\n}\r\n\r\n.bttnPharmacy,.bttnOpd,.bttnlab{\r\n    background-color: #095126;\r\n    color: white;\r\n\t\tfont-weight: bold;\r\n\t\tbox-shadow: 1px 3px 20px 20px rgba(0, 0, 0, 0.38), 1px 3px 20px 20px rgba(0,0,0,0.19);\r\n    /* border-radius: 80%; */\r\n}\r\n\r\n.bttnPharmacy:hover,.bttnOpd:hover,.bttnlab:hover{\r\n    box-shadow:1px 3px 20px 0px rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n}\r\n\r\nhr{\r\n    width: inherit;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n .bttnPharmacy {\r\n\t\t/* margin-left: 0%; */\r\n\t\tcolor:green;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU9BO2dCQUNnQjs7QUFFaEI7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLHNCQUFzQjtBQUN2Qjs7QUFDQTs7SUFFSSxxRkFBa0c7RUFDcEcsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixzQkFBc0I7O0FBRXhCOztBQUVBOzs7R0FHRzs7QUFFSCxnREFBZ0Q7O0FBQ2hEO0NBQ0MsdUJBQXVCO0NBQ3ZCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLFdBQVc7Q0FDWCxvQkFBb0I7Q0FDcEIsNEJBQTRCO0VBQzNCLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxxQkFBcUI7RUFDcEIsV0FBVztBQUNiOztBQUVBLGdEQUFnRDs7QUFDaEQ7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxxQkFBcUI7QUFDdEI7O0FBR0EsZ0RBQWdEOztBQUNoRDtDQUNDLGFBQWE7Q0FDYixZQUFZO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUdDLHlDQUF5QyxpQkFBaUIsRUFBRTs7QUFFN0QsK0JBQStCLGlCQUFpQixFQUFFOztBQUNsRCxnQ0FBZ0MsaUJBQWlCLEVBQUU7O0FBQ25ELG9DQUFvQyxpQkFBaUIsRUFBRTs7QUFFdkQsNENBQTRDLGlCQUFpQixFQUFFOztBQUMvRCxrQ0FBa0MsaUJBQWlCLEVBQUU7O0FBQ3JELG1DQUFtQyxpQkFBaUIsRUFBRTs7QUFDdEQsdUNBQXVDLGlCQUFpQixFQUFFOztBQUUxRCxtQ0FBbUMsV0FBVyxDQUFDOztBQUMvQyx5QkFBeUIsV0FBVyxDQUFDOztBQUNyQywwQkFBMEIsc0JBQXNCLENBQUM7O0FBQ2pELDhCQUE4QixXQUFXLENBQUM7O0FBRTFDLHNDQUFzQyxXQUFXLENBQUM7O0FBQ2xELDRCQUE0QixXQUFXLENBQUM7O0FBQ3hDLDZCQUE2QixXQUFXLENBQUM7O0FBQ3pDLGlDQUFpQyxXQUFXLENBQUM7O0FBRTdDO0VBQ0UsU0FBUztFQUNULGNBQWM7QUFDaEI7O0FBRUEsZ0RBQWdEOztBQUNoRDtDQUNDLHdCQUF3QjtDQUN4QixZQUFZO0NBQ1osdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFHQTtZQUNZOztBQUNaO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUdBO1VBQ1U7O0FBRVY7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFLakIsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYjs7OzJCQUd5QjtFQUN6QixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLHFCQUFxQjtFQUN2Qix5QkFBeUI7RUFJekIsa0RBQWtEO0FBQ3BEOztBQUdBO1NBQ1M7O0FBRVQ7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQU1kLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7O0VBRXpCLGNBQWM7QUFDaEI7O0FBR0E7VUFDVTs7QUFFVjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsK0NBQStDO0VBQy9DLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjs7RUFFaEIsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQSxnREFBZ0Q7O0FBQ2hEO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1Asb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUtYLG9CQUFvQjs7RUFFcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLGVBQWU7RUFDZixXQUFXOztFQUVYLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGlCQUFpQjtFQUtqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUdBO3FCQUNxQjs7QUFFckI7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjs7RUFFaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw4Q0FBOEM7RUFDOUMsZUFBZTtFQUNmLGtCQUFrQjtFQU1sQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxRQUFRO0VBS1IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFHQTtXQUNXOztBQUNYO0VBQ0UsV0FBVztFQUtYLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBTWhCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjs7RUFFbkIsb0JBQW9CO0VBSXBCLHFEQUFxRDtFQUNyRCxrQkFBa0I7RUFDbEIsVUFBVTtFQUtWLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFVO0VBS1Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUdBO2VBQ2U7O0FBRWY7RUFDRTtJQUNFLDRCQUE0QjtFQUM5QjtBQUNGOztBQUlBO21CQUNtQjs7QUFFbkI7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsUUFBUTtFQUtSLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1Ysb0JBQW9COztFQUVwQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCOztFQUVoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUtWLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGNBQWM7O0VBRWQsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBS1IsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7QUFDRjs7QUFHQTs7Q0FFQzs7QUFDRCxPQUFPLGNBQWMsQ0FBQzs7QUFDdEIsT0FBTyxjQUFjLENBQUM7O0FBQ3RCLE9BQU8sY0FBYyxDQUFDOztBQUN0QixPQUFPLGNBQWMsQ0FBQzs7QUFDdEIsT0FBTyxjQUFjLENBQUM7O0FBQ3RCLE9BQU8sY0FBYyxDQUFDOztBQUN0QixPQUFPLGNBQWMsQ0FBQzs7QUFDdEIsT0FBTyxjQUFjLENBQUM7O0FBQ3RCLE9BQU8sY0FBYyxDQUFDOztBQUN0QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUMxQixTQUFTLGdCQUFnQixDQUFDOztBQUUxQjs7Q0FFQzs7QUFDRCxRQUFRLGdCQUFnQixDQUFDOztBQUN6QixRQUFRLGdCQUFnQixDQUFDOztBQUN6QixRQUFRLGdCQUFnQixDQUFDOztBQUN6QixRQUFRLGdCQUFnQixDQUFDOztBQUN6QixRQUFRLGdCQUFnQixDQUFDOztBQUN6QixRQUFRLGdCQUFnQixDQUFDOztBQUN6QixRQUFRLGdCQUFnQixDQUFDOztBQUN6QixRQUFRLGdCQUFnQixDQUFDOztBQUN6QixRQUFRLGdCQUFnQixDQUFDOztBQUN6QixRQUFRLGdCQUFnQixDQUFDOztBQUN6QixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixTQUFTLGlCQUFpQixDQUFDOztBQUMzQixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixVQUFVLGtCQUFrQixDQUFDOztBQUM3QixRQUFRLG1CQUFtQixDQUFDOztBQUM1QixRQUFRLG1CQUFtQixDQUFDOztBQUM1QixRQUFRLG1CQUFtQixDQUFDOztBQUM1QixRQUFRLG1CQUFtQixDQUFDOztBQUM1QixRQUFRLG1CQUFtQixDQUFDOztBQUM1QixRQUFRLG1CQUFtQixDQUFDOztBQUM1QixRQUFRLG1CQUFtQixDQUFDOztBQUM1QixRQUFRLG1CQUFtQixDQUFDOztBQUM1QixRQUFRLG1CQUFtQixDQUFDOztBQUM1QixRQUFRLG1CQUFtQixDQUFDOztBQUM1QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixTQUFTLG9CQUFvQixDQUFDOztBQUM5QixVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxVQUFVLHFCQUFxQixDQUFDOztBQUNoQyxRQUFRLGlCQUFpQixDQUFDOztBQUMxQixRQUFRLGlCQUFpQixDQUFDOztBQUMxQixRQUFRLGlCQUFpQixDQUFDOztBQUMxQixRQUFRLGlCQUFpQixDQUFDOztBQUMxQixRQUFRLGlCQUFpQixDQUFDOztBQUMxQixRQUFRLGlCQUFpQixDQUFDOztBQUMxQixRQUFRLGlCQUFpQixDQUFDOztBQUMxQixRQUFRLGlCQUFpQixDQUFDOztBQUMxQixRQUFRLGlCQUFpQixDQUFDOztBQUMxQixRQUFRLGlCQUFpQixDQUFDOztBQUMxQixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixTQUFTLGtCQUFrQixDQUFDOztBQUM1QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixVQUFVLG1CQUFtQixDQUFDOztBQUM5QixRQUFRLGtCQUFrQixDQUFDOztBQUMzQixRQUFRLGtCQUFrQixDQUFDOztBQUMzQixRQUFRLGtCQUFrQixDQUFDOztBQUMzQixRQUFRLGtCQUFrQixDQUFDOztBQUMzQixRQUFRLGtCQUFrQixDQUFDOztBQUMzQixRQUFRLGtCQUFrQixDQUFDOztBQUMzQixRQUFRLGtCQUFrQixDQUFDOztBQUMzQixRQUFRLGtCQUFrQixDQUFDOztBQUMzQixRQUFRLGtCQUFrQixDQUFDOztBQUMzQixRQUFRLGtCQUFrQixDQUFDOztBQUMzQixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUMvQixVQUFVLG9CQUFvQixDQUFDOztBQUUvQjs7Q0FFQzs7QUFDRCxRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsUUFBUSxlQUFlLENBQUM7O0FBQ3hCLFFBQVEsZUFBZSxDQUFDOztBQUN4QixRQUFRLGVBQWUsQ0FBQzs7QUFDeEIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7QUFDMUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsVUFBVSxpQkFBaUIsQ0FBQzs7QUFDNUIsUUFBUSxrQkFBa0IsQ0FBQzs7QUFDM0IsUUFBUSxrQkFBa0IsQ0FBQzs7QUFDM0IsUUFBUSxrQkFBa0IsQ0FBQzs7QUFDM0IsUUFBUSxrQkFBa0IsQ0FBQzs7QUFDM0IsUUFBUSxrQkFBa0IsQ0FBQzs7QUFDM0IsUUFBUSxrQkFBa0IsQ0FBQzs7QUFDM0IsUUFBUSxrQkFBa0IsQ0FBQzs7QUFDM0IsUUFBUSxrQkFBa0IsQ0FBQzs7QUFDM0IsUUFBUSxrQkFBa0IsQ0FBQzs7QUFDM0IsUUFBUSxrQkFBa0IsQ0FBQzs7QUFDM0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7QUFDL0IsUUFBUSxnQkFBZ0IsQ0FBQzs7QUFDekIsUUFBUSxnQkFBZ0IsQ0FBQzs7QUFDekIsUUFBUSxnQkFBZ0IsQ0FBQzs7QUFDekIsUUFBUSxnQkFBZ0IsQ0FBQzs7QUFDekIsUUFBUSxnQkFBZ0IsQ0FBQzs7QUFDekIsUUFBUSxnQkFBZ0IsQ0FBQzs7QUFDekIsUUFBUSxnQkFBZ0IsQ0FBQzs7QUFDekIsUUFBUSxnQkFBZ0IsQ0FBQzs7QUFDekIsUUFBUSxnQkFBZ0IsQ0FBQzs7QUFDekIsUUFBUSxnQkFBZ0IsQ0FBQzs7QUFDekIsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFDM0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFDN0IsUUFBUSxpQkFBaUIsQ0FBQzs7QUFDMUIsUUFBUSxpQkFBaUIsQ0FBQzs7QUFDMUIsUUFBUSxpQkFBaUIsQ0FBQzs7QUFDMUIsUUFBUSxpQkFBaUIsQ0FBQzs7QUFDMUIsUUFBUSxpQkFBaUIsQ0FBQzs7QUFDMUIsUUFBUSxpQkFBaUIsQ0FBQzs7QUFDMUIsUUFBUSxpQkFBaUIsQ0FBQzs7QUFDMUIsUUFBUSxpQkFBaUIsQ0FBQzs7QUFDMUIsUUFBUSxpQkFBaUIsQ0FBQzs7QUFDMUIsUUFBUSxpQkFBaUIsQ0FBQzs7QUFDMUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7QUFDNUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7QUFDOUIsYUFBYSxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQzs7QUFDbkQsV0FBVyxpQkFBaUIsQ0FBQzs7QUFDN0IsV0FBVyxrQkFBa0IsQ0FBQzs7QUFJOUI7O0NBRUM7O0FBQ0QseUNBQXlDOztBQUN6QyxhQUFhLFlBQVksQ0FBQzs7QUFDMUIsYUFBYSxZQUFZLENBQUM7O0FBRTFCLHVCQUF1QixZQUFZLENBQUM7O0FBRXBDLHlDQUF5Qzs7QUFDekMsVUFBVSx5QkFBeUIsQ0FBQzs7QUFFcEMseUNBQXlDOztBQUN6QyxjQUFjLGtCQUFrQixDQUFDOztBQUNqQyxZQUFZLGdCQUFnQixDQUFDOztBQUM3QixhQUFhLGlCQUFpQixDQUFDOztBQUMvQixjQUFjLHNCQUFzQixDQUFDOztBQUVyQyx5Q0FBeUM7O0FBQ3pDLFNBQVMsZ0JBQWdCLENBQUM7O0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7O0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7O0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7O0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7O0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7O0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7O0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7O0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7O0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7O0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7O0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7O0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7O0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7O0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7O0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7O0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7O0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7O0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7O0FBQzFCLFNBQVMsZ0JBQWdCLENBQUM7O0FBTTFCOztDQUVDOztBQUVEOztDQUVDOztBQUNELFdBQVcsYUFBYSxDQUFDOztBQUN6QixZQUFZLGNBQWMsQ0FBQzs7QUFDM0IsYUFBYSxlQUFlLENBQUM7O0FBQzdCLG1CQUFtQixxQkFBcUIsQ0FBQzs7QUFDekM7Q0FLQyxhQUFhO0FBQ2Q7O0FBRUE7O0NBRUM7O0FBQ0QsZUFBZSxrQkFBa0IsQ0FBQzs7QUFDbEMsZUFBZSxrQkFBa0IsQ0FBQzs7QUFDbEMsWUFBWSxlQUFlLENBQUM7O0FBRTVCOztDQUVDOztBQUNELFVBQVUsV0FBVyxDQUFDOztBQUN0QixVQUFVLFlBQVksQ0FBQzs7QUFHdkI7O0NBRUM7O0FBQ0Q7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUNBLFNBQVMsV0FBVyxDQUFDOztBQUNyQixTQUFTLFlBQVksQ0FBQzs7QUFDdEIsYUFBYSxlQUFlLENBQUM7O0FBQzdCLGFBQWEsZ0JBQWdCLENBQUM7O0FBQzlCLGFBQWEsZUFBZSxDQUFDOztBQUM3QixhQUFhLGdCQUFnQixDQUFDOztBQUU5Qjs7Q0FFQzs7QUFDRCxRQUFRLE1BQU0sQ0FBQzs7QUFDZixXQUFXLFNBQVMsQ0FBQzs7QUFDckIsU0FBUyxPQUFPLENBQUM7O0FBQ2pCLFVBQVUsUUFBUSxDQUFDOztBQUVuQixXQUFXLFNBQVMsQ0FBQzs7QUFDckIsY0FBYyxZQUFZLENBQUM7O0FBQzNCLFlBQVksVUFBVSxDQUFDOztBQUN2QixhQUFhLFdBQVcsQ0FBQzs7QUFHekI7O0NBRUM7O0FBQ0QsU0FBUyxVQUFVLENBQUM7O0FBQ3BCLFNBQVMsWUFBWSxDQUFDOztBQUN0QixTQUFTLFlBQVksQ0FBQzs7QUFDdEIsU0FBUyxZQUFZLENBQUM7O0FBQ3RCLFNBQVMsWUFBWSxDQUFDOztBQUN0QixTQUFTLFlBQVksQ0FBQzs7QUFDdEIsU0FBUyxZQUFZLENBQUM7O0FBQ3RCLFNBQVMsWUFBWSxDQUFDOztBQUN0QixTQUFTLFlBQVksQ0FBQzs7QUFDdEIsU0FBUyxZQUFZLENBQUM7O0FBQ3RCLFNBQVMsVUFBVSxDQUFDOztBQUVwQjs7Q0FFQzs7QUFDRCxVQUFVLHVCQUF1QixDQUFDOztBQUNsQyxVQUFVLHVCQUF1QixDQUFDOztBQUlsQzs7Q0FFQzs7QUFDRCxpQkFBaUIsV0FBVyxDQUFDOztBQUM3QixxQkFBcUIsZUFBZSxDQUFDOztBQUVyQyx5Q0FBeUM7O0FBQ3pDLGlCQUFpQixZQUFZLENBQUM7O0FBQzlCLHFCQUFxQixnQkFBZ0IsQ0FBQzs7QUFFdEMseUNBQXlDOztBQUN6QztDQUNDLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7O0FBSUE7O0NBRUM7O0FBQ0Qsb0JBQW9CLGVBQWUsQ0FBQzs7QUFFcEMseUNBQXlDOztBQUN6QztDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyxXQUFXO0NBSVIsb0JBQW9CO0FBQ3hCOztBQUNBO0NBS0MscUJBQXFCO0FBQ3RCOztBQUlBOztDQUVDOztBQUNELFNBQVMsa0JBQWtCLENBQUM7O0FBRTVCLFlBQVksZ0JBQWdCLENBQUM7O0FBRTdCLGdCQUFnQixrQkFBa0IsQ0FBQzs7QUFDbkMsZUFBZSxtQkFBbUIsQ0FBQzs7QUFLbkM7O0NBRUM7O0FBQ0Q7Q0FJSSxvQkFBb0I7QUFDeEI7O0FBQ0E7Q0FJSSxvQkFBb0I7QUFDeEI7O0FBQ0E7Q0FJSSxvQkFBb0I7QUFDeEI7O0FBQ0E7Q0FJSSxvQkFBb0I7QUFDeEI7O0FBQ0E7Q0FJSSxvQkFBb0I7QUFDeEI7O0FBQ0E7Q0FJSSxvQkFBb0I7QUFDeEI7O0FBQ0E7Q0FJSSxvQkFBb0I7QUFDeEI7O0FBQ0E7Q0FJSSxrQkFBa0I7QUFDdEI7O0FBSUE7O0NBRUM7O0FBRUQ7O0NBRUM7O0FBQ0QseUNBQXlDOztBQUN6QztDQUtDLGFBQWE7Q0FJYixrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjs7QUFFQSx5Q0FBeUM7O0FBQ3pDO0NBS0MsYUFBYTtDQUNiLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUtDLGFBQWE7Q0FDYix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FLQyxhQUFhO0NBQ2IsdUJBQXVCO0FBQ3hCOztBQUVBO0NBS0MsYUFBYTtDQUNiLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUtDLGFBQWE7Q0FDYiw4QkFBOEI7QUFDL0I7O0FBRUEseUNBQXlDOztBQUN6QztDQUtDLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0IsdUJBQXVCO0FBQ3hCOztBQUVBO0NBS0MsYUFBYTtDQUNiLHlCQUF5QjtDQUN6QixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FLQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUtDLGFBQWE7Q0FDYix3QkFBd0I7Q0FDeEIsb0JBQW9CO0FBQ3JCOztBQUVBLHlDQUF5Qzs7QUFDekM7Q0FLQyxhQUFhO0NBRWIsd0JBQXdCO0NBRXhCLHNCQUFzQjtDQUN0QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FLQyxhQUFhO0NBRWIsZ0NBQWdDO0NBRWhDLDhCQUE4QjtDQUM5QiwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FLQyxhQUFhO0NBRWIsMkJBQTJCO0NBRTNCLHlCQUF5QjtDQUN6QixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FLQyxhQUFhO0NBRWIsbUNBQW1DO0NBRW5DLGlDQUFpQztDQUNqQyw4QkFBOEI7QUFDL0I7O0FBRUEseUNBQXlDOztBQUN6QztDQUtDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUtDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsMkJBQTJCO0NBQzNCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUtDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIseUJBQXlCO0NBQ3pCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUtDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsd0JBQXdCO0NBQ3hCLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUtDLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUtDLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUtDLGFBQWE7Q0FDYiw2QkFBNkI7Q0FDN0IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUtDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQSx5Q0FBeUM7O0FBQ3pDO0NBS0MsYUFBYTtDQUViLDJCQUEyQjtDQUUzQix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLDJCQUEyQjtDQUMzQix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FLQyxhQUFhO0NBRWIsMkJBQTJCO0NBRTNCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIseUJBQXlCO0NBQ3pCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUtDLGFBQWE7Q0FFYiwyQkFBMkI7Q0FFM0IseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBS0MsYUFBYTtDQUViLDJCQUEyQjtDQUUzQix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLDJCQUEyQjtDQUMzQix1QkFBdUI7Q0FDdkIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBS0MsYUFBYTtDQUViLDJCQUEyQjtDQUUzQix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6QixxQkFBcUI7Q0FDckIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBS0MsYUFBYTtDQUViLDJCQUEyQjtDQUUzQix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBS0MsYUFBYTtDQUViLDJCQUEyQjtDQUUzQix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLHdCQUF3QjtDQUN4QixvQkFBb0I7QUFDckI7O0FBRUE7Q0FLQyxhQUFhO0NBRWIsMkJBQTJCO0NBRTNCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsOEJBQThCO0FBQy9COztBQUVBLHlDQUF5Qzs7QUFDekM7Q0FLQyxhQUFhO0NBRWIsbUNBQW1DO0NBRW5DLGlDQUFpQztDQUNqQyw4QkFBOEI7Q0FDOUIsMkJBQTJCO0NBQzNCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUtDLGFBQWE7Q0FFYixtQ0FBbUM7Q0FFbkMsaUNBQWlDO0NBQ2pDLDhCQUE4QjtDQUM5Qix5QkFBeUI7Q0FDekIscUJBQXFCO0FBQ3RCOztBQUVBO0NBS0MsYUFBYTtDQUViLG1DQUFtQztDQUVuQyxpQ0FBaUM7Q0FDakMsOEJBQThCO0NBQzlCLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FLQyxhQUFhO0NBRWIsbUNBQW1DO0NBRW5DLGlDQUFpQztDQUNqQyw4QkFBOEI7Q0FDOUIsd0JBQXdCO0NBQ3hCLG9CQUFvQjtBQUNyQjs7QUFHQTs7Q0FFQzs7QUFDRDtDQUNDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsU0FBUztDQUtULGdDQUFnQztBQUNqQzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsU0FBUztDQUtULDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsU0FBUztDQUtULDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsUUFBUTtDQUtSLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsUUFBUTtDQUtSLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsUUFBUTtBQUNUOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixRQUFRO0FBQ1Q7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFdBQVc7QUFDWjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsV0FBVztBQUNaOztBQUlBO0NBQ0MsaUNBQWlDO0tBQzdCLHFCQUFxQjtDQUN6QixvQ0FBb0M7SUFDakMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsb0JBQW9CO0dBQ3JCLGNBQWM7Q0FDaEI7OztBQUdEOztBQVFDO0VBQ0MsbUJBQW1CO0FBQ3JCOztBQUlDO0VBQ0MsZUFBZTtFQUNmLHFCQUFxQjtFQUVyQix5QkFBeUI7QUFDM0I7O0FBQ0M7RUFDQyxXQUFXO0FBQ2I7O0FBQ0M7RUFDQyxXQUFXO0FBQ2I7O0FBRUM7RUFDQyxXQUFXO0FBQ2I7O0FBQ0M7RUFDQyxXQUFXO0FBQ2I7O0FBQ0M7R0FDRSxlQUFlO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix3RUFBd0U7QUFDMUU7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHdFQUF3RTtBQUMxRTs7QUFLQTtHQUNHLGVBQWU7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHdFQUF3RTs7O0FBRzFFOztBQU1BO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZCxpQkFBaUI7RUFDakIscUZBQXFGO0lBQ25GLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDBFQUEwRTtBQUM5RTs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7Q0FDQztFQUNDLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1g7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4gXHJcblxyXG5cclxuXHJcblxyXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5bIFJFU1RZTEUgVEFHIF0qL1xyXG5cclxuKiB7XHJcblx0bWFyZ2luOiAwcHg7IFxyXG5cdHBhZGRpbmc6IDBweDsgXHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ud3JhcHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjcpLHJnYmEoMCwwLDAsMC43KSksdXJsKFwiLi4vLi4vYXNzZXRzL2hvc3BpdGFsLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxufVxyXG5cclxuLyogYm9keSwgaHRtbCB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmLCBzYW5zLXNlcmlmO1xyXG59ICovXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmEge1xyXG5cdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRsaW5lLWhlaWdodDogMS43O1xyXG5cdGNvbG9yOiAjNjY2NjY2O1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxufVxyXG5cclxuYTpmb2N1cyB7XHJcblx0b3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuaDEsaDIsaDMsaDQsaDUsaDYge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cclxufVxyXG5cclxucCB7XHJcblx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjc7XHJcblx0Y29sb3I6ICM2NjY2NjY7XHJcblx0bWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbnVsLCBsaSB7XHJcblx0bWFyZ2luOiAwcHg7XHJcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5pbnB1dCB7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxudGV4dGFyZWE6Zm9jdXMsIGlucHV0OmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4gaW5wdXQ6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjp0cmFuc3BhcmVudDsgfVxyXG5cclxuaW5wdXQ6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOnRyYW5zcGFyZW50OyB9XHJcbmlucHV0OmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6dHJhbnNwYXJlbnQ7IH1cclxuaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6dHJhbnNwYXJlbnQ7IH1cclxuXHJcbnRleHRhcmVhOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6dHJhbnNwYXJlbnQ7IH1cclxudGV4dGFyZWE6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOnRyYW5zcGFyZW50OyB9XHJcbnRleHRhcmVhOmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6dHJhbnNwYXJlbnQ7IH1cclxudGV4dGFyZWE6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6dHJhbnNwYXJlbnQ7IH1cclxuXHJcbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICNmZmY7fVxyXG5pbnB1dDotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6ICNmZmY7fVxyXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiByZ2IoNDEsIDEzLCAxMyk7fVxyXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogI2ZmZjt9XHJcblxyXG50ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAjZmZmO31cclxudGV4dGFyZWE6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAjZmZmO31cclxudGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIgeyBjb2xvcjogI2ZmZjt9XHJcbnRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAjZmZmO31cclxuXHJcbmxhYmVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuYnV0dG9uIHtcclxuXHRvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaWZyYW1lIHtcclxuXHRib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblsgVXRpbGl0eSBdKi9cclxuLnR4dDEge1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogI2U1ZTVlNTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG5cclxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuWyBsb2dpbiBdKi9cclxuXHJcbi5saW1pdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmNvbnRhaW5lci1sb2dpbjEwMCB7XHJcbiAgd2lkdGg6IDEwMCU7ICBcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIC8qIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9zcGl0YWwuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7ICBcclxufVxyXG5cclxuLmNvbnRhaW5lci1sb2dpbjEwMDo6YmVmb3JlIHtcclxuICAvKiBjb250ZW50OiBcIlwiOyAqL1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xyXG59XHJcblxyXG4ud3JhcC1sb2dpbjEwMCB7XHJcbiAgd2lkdGg6IDM1N3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogNTVweCA1NXB4IDM3cHggNTVweDtcclxuICAgIGJhY2tncm91bmQ6ICMwNzU3MjdlMztcclxuICAvKiBiYWNrZ3JvdW5kOiAjOTE1MmY4OyAqL1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzA1N2MzN2M3LCAjYjIyNGVmKTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjNzU3OWZmLCAjYjIyNGVmKTtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICM3NTc5ZmYsICNiMjI0ZWYpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0b3AsICM3NTc5ZmYsICNiMjI0ZWYpO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuWyBGb3JtIF0qL1xyXG5cclxuLmxvZ2luMTAwLWZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubG9naW4xMDAtZm9ybS1sb2dvIHtcclxuICBmb250LXNpemU6IDYwcHg7IFxyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG5cclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ubG9naW4xMDAtZm9ybS10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtTWVkaXVtO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblsgSW5wdXQgXSovXHJcblxyXG4ud3JhcC1pbnB1dDEwMCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMjQpO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5pbnB1dDEwMCB7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDVweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAwIDVweCAwIDM4cHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi8gXHJcbi5mb2N1cy1pbnB1dDEwMCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmZvY3VzLWlucHV0MTAwOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTJweDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG5cclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcblxyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5mb2N1cy1pbnB1dDEwMDo6YWZ0ZXIge1xyXG4gIC8qIGZvbnQtZmFtaWx5OiBNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnQ7ICovXHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICAvKiBjb250ZW50OiBhdHRyKGRhdGEtcGxhY2Vob2xkZXIpOyAqL1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDZweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxufVxyXG5cclxuLmlucHV0MTAwOmZvY3VzIHtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmlucHV0MTAwOmZvY3VzICsgLmZvY3VzLWlucHV0MTAwOjphZnRlciB7XHJcbiAgdG9wOiAtMjJweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5pbnB1dDEwMDpmb2N1cyArIC5mb2N1cy1pbnB1dDEwMDo6YmVmb3JlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhhcy12YWwuaW5wdXQxMDAgKyAuZm9jdXMtaW5wdXQxMDA6OmFmdGVyIHtcclxuICB0b3A6IC0yMnB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmhhcy12YWwuaW5wdXQxMDAgKyAuZm9jdXMtaW5wdXQxMDA6OmJlZm9yZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oYXMtdmFsLmlucHV0MTAwIHtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblsgUmVzdHlsZSBDaGVja2JveCBdKi9cclxuXHJcbi5jb250YWN0MTAwLWZvcm0tY2hlY2tib3gge1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDM1cHg7XHJcbn1cclxuXHJcbi5pbnB1dC1jaGVja2JveDEwMCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmxhYmVsLWNoZWNrYm94MTAwIHtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctbGVmdDogMjZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sYWJlbC1jaGVja2JveDEwMDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZjI2YlwiO1xyXG4gIC8qIGZvbnQtZmFtaWx5OiBNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnQ7ICovXHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4uaW5wdXQtY2hlY2tib3gxMDA6Y2hlY2tlZCArIC5sYWJlbC1jaGVja2JveDEwMDo6YmVmb3JlIHtcclxuICBjb2xvcjogIzU1NTU1NTtcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblsgQnV0dG9uIF0qL1xyXG4uY29udGFpbmVyLWxvZ2luMTAwLWZvcm0tYnRuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbjEwMC1mb3JtLWJ0biB7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtTWVkaXVtO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzU1NTU1NTtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG5cclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG5cclxuICBiYWNrZ3JvdW5kOiMwODc5MmRlNjtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChib3R0b20sICM3NTc5ZmYsICNiMjI0ZWYpO1xyXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChib3R0b20sICM3NTc5ZmYsICNiMjI0ZWYpO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgIzc1NzlmZiwgI2IyMjRlZik7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgIzc1NzlmZiwgI2IyMjRlZik7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxufVxyXG5cclxuLmxvZ2luMTAwLWZvcm0tYnRuOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgb3BhY2l0eTogMTtcclxuXHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG59XHJcblxyXG4ubG9naW4xMDAtZm9ybS1idG46aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubG9naW4xMDAtZm9ybS1idG46aG92ZXI6YmVmb3JlIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuWyBSZXNwb25zaXZlIF0qL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLndyYXAtbG9naW4xMDAge1xyXG4gICAgcGFkZGluZzogNTVweCAxNXB4IDM3cHggMTVweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuWyBBbGVydCB2YWxpZGF0ZSBdKi9cclxuXHJcbi52YWxpZGF0ZS1pbnB1dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYWxlcnQtdmFsaWRhdGU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogYXR0cihkYXRhLXZhbGlkYXRlKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzgwMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBwYWRkaW5nOiA0cHggMjVweCA0cHggMTBweDtcclxuICB0b3A6IDUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICNjODAwMDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDA7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xyXG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcclxuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XHJcbn1cclxuXHJcbi5hbGVydC12YWxpZGF0ZTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXFxmMTJhXCI7XHJcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogI2M4MDAwMDtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICByaWdodDogNXB4O1xyXG59XHJcblxyXG4uYWxlcnQtdmFsaWRhdGU6aG92ZXI6YmVmb3JlIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5hbGVydC12YWxpZGF0ZTo6YmVmb3JlIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qWyBGT05UIFNJWkUgXVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4qL1xyXG4uZnMtMSB7Zm9udC1zaXplOiAxcHg7fVxyXG4uZnMtMiB7Zm9udC1zaXplOiAycHg7fVxyXG4uZnMtMyB7Zm9udC1zaXplOiAzcHg7fVxyXG4uZnMtNCB7Zm9udC1zaXplOiA0cHg7fVxyXG4uZnMtNSB7Zm9udC1zaXplOiA1cHg7fVxyXG4uZnMtNiB7Zm9udC1zaXplOiA2cHg7fVxyXG4uZnMtNyB7Zm9udC1zaXplOiA3cHg7fVxyXG4uZnMtOCB7Zm9udC1zaXplOiA4cHg7fVxyXG4uZnMtOSB7Zm9udC1zaXplOiA5cHg7fVxyXG4uZnMtMTAge2ZvbnQtc2l6ZTogMTBweDt9XHJcbi5mcy0xMSB7Zm9udC1zaXplOiAxMXB4O31cclxuLmZzLTEyIHtmb250LXNpemU6IDEycHg7fVxyXG4uZnMtMTMge2ZvbnQtc2l6ZTogMTNweDt9XHJcbi5mcy0xNCB7Zm9udC1zaXplOiAxNHB4O31cclxuLmZzLTE1IHtmb250LXNpemU6IDE1cHg7fVxyXG4uZnMtMTYge2ZvbnQtc2l6ZTogMTZweDt9XHJcbi5mcy0xNyB7Zm9udC1zaXplOiAxN3B4O31cclxuLmZzLTE4IHtmb250LXNpemU6IDE4cHg7fVxyXG4uZnMtMTkge2ZvbnQtc2l6ZTogMTlweDt9XHJcbi5mcy0yMCB7Zm9udC1zaXplOiAyMHB4O31cclxuLmZzLTIxIHtmb250LXNpemU6IDIxcHg7fVxyXG4uZnMtMjIge2ZvbnQtc2l6ZTogMjJweDt9XHJcbi5mcy0yMyB7Zm9udC1zaXplOiAyM3B4O31cclxuLmZzLTI0IHtmb250LXNpemU6IDI0cHg7fVxyXG4uZnMtMjUge2ZvbnQtc2l6ZTogMjVweDt9XHJcbi5mcy0yNiB7Zm9udC1zaXplOiAyNnB4O31cclxuLmZzLTI3IHtmb250LXNpemU6IDI3cHg7fVxyXG4uZnMtMjgge2ZvbnQtc2l6ZTogMjhweDt9XHJcbi5mcy0yOSB7Zm9udC1zaXplOiAyOXB4O31cclxuLmZzLTMwIHtmb250LXNpemU6IDMwcHg7fVxyXG4uZnMtMzEge2ZvbnQtc2l6ZTogMzFweDt9XHJcbi5mcy0zMiB7Zm9udC1zaXplOiAzMnB4O31cclxuLmZzLTMzIHtmb250LXNpemU6IDMzcHg7fVxyXG4uZnMtMzQge2ZvbnQtc2l6ZTogMzRweDt9XHJcbi5mcy0zNSB7Zm9udC1zaXplOiAzNXB4O31cclxuLmZzLTM2IHtmb250LXNpemU6IDM2cHg7fVxyXG4uZnMtMzcge2ZvbnQtc2l6ZTogMzdweDt9XHJcbi5mcy0zOCB7Zm9udC1zaXplOiAzOHB4O31cclxuLmZzLTM5IHtmb250LXNpemU6IDM5cHg7fVxyXG4uZnMtNDAge2ZvbnQtc2l6ZTogNDBweDt9XHJcbi5mcy00MSB7Zm9udC1zaXplOiA0MXB4O31cclxuLmZzLTQyIHtmb250LXNpemU6IDQycHg7fVxyXG4uZnMtNDMge2ZvbnQtc2l6ZTogNDNweDt9XHJcbi5mcy00NCB7Zm9udC1zaXplOiA0NHB4O31cclxuLmZzLTQ1IHtmb250LXNpemU6IDQ1cHg7fVxyXG4uZnMtNDYge2ZvbnQtc2l6ZTogNDZweDt9XHJcbi5mcy00NyB7Zm9udC1zaXplOiA0N3B4O31cclxuLmZzLTQ4IHtmb250LXNpemU6IDQ4cHg7fVx0XHJcbi5mcy00OSB7Zm9udC1zaXplOiA0OXB4O31cclxuLmZzLTUwIHtmb250LXNpemU6IDUwcHg7fVxyXG4uZnMtNTEge2ZvbnQtc2l6ZTogNTFweDt9XHJcbi5mcy01MiB7Zm9udC1zaXplOiA1MnB4O31cclxuLmZzLTUzIHtmb250LXNpemU6IDUzcHg7fVxyXG4uZnMtNTQge2ZvbnQtc2l6ZTogNTRweDt9XHJcbi5mcy01NSB7Zm9udC1zaXplOiA1NXB4O31cclxuLmZzLTU2IHtmb250LXNpemU6IDU2cHg7fVxyXG4uZnMtNTcge2ZvbnQtc2l6ZTogNTdweDt9XHJcbi5mcy01OCB7Zm9udC1zaXplOiA1OHB4O31cclxuLmZzLTU5IHtmb250LXNpemU6IDU5cHg7fVxyXG4uZnMtNjAge2ZvbnQtc2l6ZTogNjBweDt9XHJcbi5mcy02MSB7Zm9udC1zaXplOiA2MXB4O31cclxuLmZzLTYyIHtmb250LXNpemU6IDYycHg7fVxyXG4uZnMtNjMge2ZvbnQtc2l6ZTogNjNweDt9XHJcbi5mcy02NCB7Zm9udC1zaXplOiA2NHB4O31cclxuLmZzLTY1IHtmb250LXNpemU6IDY1cHg7fVxyXG4uZnMtNjYge2ZvbnQtc2l6ZTogNjZweDt9XHJcbi5mcy02NyB7Zm9udC1zaXplOiA2N3B4O31cclxuLmZzLTY4IHtmb250LXNpemU6IDY4cHg7fVxyXG4uZnMtNjkge2ZvbnQtc2l6ZTogNjlweDt9XHJcbi5mcy03MCB7Zm9udC1zaXplOiA3MHB4O31cclxuLmZzLTcxIHtmb250LXNpemU6IDcxcHg7fVxyXG4uZnMtNzIge2ZvbnQtc2l6ZTogNzJweDt9XHJcbi5mcy03MyB7Zm9udC1zaXplOiA3M3B4O31cclxuLmZzLTc0IHtmb250LXNpemU6IDc0cHg7fVxyXG4uZnMtNzUge2ZvbnQtc2l6ZTogNzVweDt9XHJcbi5mcy03NiB7Zm9udC1zaXplOiA3NnB4O31cclxuLmZzLTc3IHtmb250LXNpemU6IDc3cHg7fVxyXG4uZnMtNzgge2ZvbnQtc2l6ZTogNzhweDt9XHJcbi5mcy03OSB7Zm9udC1zaXplOiA3OXB4O31cclxuLmZzLTgwIHtmb250LXNpemU6IDgwcHg7fVxyXG4uZnMtODEge2ZvbnQtc2l6ZTogODFweDt9XHJcbi5mcy04MiB7Zm9udC1zaXplOiA4MnB4O31cclxuLmZzLTgzIHtmb250LXNpemU6IDgzcHg7fVxyXG4uZnMtODQge2ZvbnQtc2l6ZTogODRweDt9XHJcbi5mcy04NSB7Zm9udC1zaXplOiA4NXB4O31cclxuLmZzLTg2IHtmb250LXNpemU6IDg2cHg7fVxyXG4uZnMtODcge2ZvbnQtc2l6ZTogODdweDt9XHJcbi5mcy04OCB7Zm9udC1zaXplOiA4OHB4O31cclxuLmZzLTg5IHtmb250LXNpemU6IDg5cHg7fVxyXG4uZnMtOTAge2ZvbnQtc2l6ZTogOTBweDt9XHJcbi5mcy05MSB7Zm9udC1zaXplOiA5MXB4O31cclxuLmZzLTkyIHtmb250LXNpemU6IDkycHg7fVxyXG4uZnMtOTMge2ZvbnQtc2l6ZTogOTNweDt9XHJcbi5mcy05NCB7Zm9udC1zaXplOiA5NHB4O31cclxuLmZzLTk1IHtmb250LXNpemU6IDk1cHg7fVxyXG4uZnMtOTYge2ZvbnQtc2l6ZTogOTZweDt9XHJcbi5mcy05NyB7Zm9udC1zaXplOiA5N3B4O31cclxuLmZzLTk4IHtmb250LXNpemU6IDk4cHg7fVxyXG4uZnMtOTkge2ZvbnQtc2l6ZTogOTlweDt9XHJcbi5mcy0xMDAge2ZvbnQtc2l6ZTogMTAwcHg7fVxyXG4uZnMtMTAxIHtmb250LXNpemU6IDEwMXB4O31cclxuLmZzLTEwMiB7Zm9udC1zaXplOiAxMDJweDt9XHJcbi5mcy0xMDMge2ZvbnQtc2l6ZTogMTAzcHg7fVxyXG4uZnMtMTA0IHtmb250LXNpemU6IDEwNHB4O31cclxuLmZzLTEwNSB7Zm9udC1zaXplOiAxMDVweDt9XHJcbi5mcy0xMDYge2ZvbnQtc2l6ZTogMTA2cHg7fVxyXG4uZnMtMTA3IHtmb250LXNpemU6IDEwN3B4O31cclxuLmZzLTEwOCB7Zm9udC1zaXplOiAxMDhweDt9XHJcbi5mcy0xMDkge2ZvbnQtc2l6ZTogMTA5cHg7fVxyXG4uZnMtMTEwIHtmb250LXNpemU6IDExMHB4O31cclxuLmZzLTExMSB7Zm9udC1zaXplOiAxMTFweDt9XHJcbi5mcy0xMTIge2ZvbnQtc2l6ZTogMTEycHg7fVxyXG4uZnMtMTEzIHtmb250LXNpemU6IDExM3B4O31cclxuLmZzLTExNCB7Zm9udC1zaXplOiAxMTRweDt9XHJcbi5mcy0xMTUge2ZvbnQtc2l6ZTogMTE1cHg7fVxyXG4uZnMtMTE2IHtmb250LXNpemU6IDExNnB4O31cclxuLmZzLTExNyB7Zm9udC1zaXplOiAxMTdweDt9XHJcbi5mcy0xMTgge2ZvbnQtc2l6ZTogMTE4cHg7fVxyXG4uZnMtMTE5IHtmb250LXNpemU6IDExOXB4O31cclxuLmZzLTEyMCB7Zm9udC1zaXplOiAxMjBweDt9XHJcbi5mcy0xMjEge2ZvbnQtc2l6ZTogMTIxcHg7fVxyXG4uZnMtMTIyIHtmb250LXNpemU6IDEyMnB4O31cclxuLmZzLTEyMyB7Zm9udC1zaXplOiAxMjNweDt9XHJcbi5mcy0xMjQge2ZvbnQtc2l6ZTogMTI0cHg7fVxyXG4uZnMtMTI1IHtmb250LXNpemU6IDEyNXB4O31cclxuLmZzLTEyNiB7Zm9udC1zaXplOiAxMjZweDt9XHJcbi5mcy0xMjcge2ZvbnQtc2l6ZTogMTI3cHg7fVxyXG4uZnMtMTI4IHtmb250LXNpemU6IDEyOHB4O31cclxuLmZzLTEyOSB7Zm9udC1zaXplOiAxMjlweDt9XHJcbi5mcy0xMzAge2ZvbnQtc2l6ZTogMTMwcHg7fVxyXG4uZnMtMTMxIHtmb250LXNpemU6IDEzMXB4O31cclxuLmZzLTEzMiB7Zm9udC1zaXplOiAxMzJweDt9XHJcbi5mcy0xMzMge2ZvbnQtc2l6ZTogMTMzcHg7fVxyXG4uZnMtMTM0IHtmb250LXNpemU6IDEzNHB4O31cclxuLmZzLTEzNSB7Zm9udC1zaXplOiAxMzVweDt9XHJcbi5mcy0xMzYge2ZvbnQtc2l6ZTogMTM2cHg7fVxyXG4uZnMtMTM3IHtmb250LXNpemU6IDEzN3B4O31cclxuLmZzLTEzOCB7Zm9udC1zaXplOiAxMzhweDt9XHJcbi5mcy0xMzkge2ZvbnQtc2l6ZTogMTM5cHg7fVxyXG4uZnMtMTQwIHtmb250LXNpemU6IDE0MHB4O31cclxuLmZzLTE0MSB7Zm9udC1zaXplOiAxNDFweDt9XHJcbi5mcy0xNDIge2ZvbnQtc2l6ZTogMTQycHg7fVxyXG4uZnMtMTQzIHtmb250LXNpemU6IDE0M3B4O31cclxuLmZzLTE0NCB7Zm9udC1zaXplOiAxNDRweDt9XHJcbi5mcy0xNDUge2ZvbnQtc2l6ZTogMTQ1cHg7fVxyXG4uZnMtMTQ2IHtmb250LXNpemU6IDE0NnB4O31cclxuLmZzLTE0NyB7Zm9udC1zaXplOiAxNDdweDt9XHJcbi5mcy0xNDgge2ZvbnQtc2l6ZTogMTQ4cHg7fVxyXG4uZnMtMTQ5IHtmb250LXNpemU6IDE0OXB4O31cclxuLmZzLTE1MCB7Zm9udC1zaXplOiAxNTBweDt9XHJcbi5mcy0xNTEge2ZvbnQtc2l6ZTogMTUxcHg7fVxyXG4uZnMtMTUyIHtmb250LXNpemU6IDE1MnB4O31cclxuLmZzLTE1MyB7Zm9udC1zaXplOiAxNTNweDt9XHJcbi5mcy0xNTQge2ZvbnQtc2l6ZTogMTU0cHg7fVxyXG4uZnMtMTU1IHtmb250LXNpemU6IDE1NXB4O31cclxuLmZzLTE1NiB7Zm9udC1zaXplOiAxNTZweDt9XHJcbi5mcy0xNTcge2ZvbnQtc2l6ZTogMTU3cHg7fVxyXG4uZnMtMTU4IHtmb250LXNpemU6IDE1OHB4O31cclxuLmZzLTE1OSB7Zm9udC1zaXplOiAxNTlweDt9XHJcbi5mcy0xNjAge2ZvbnQtc2l6ZTogMTYwcHg7fVxyXG4uZnMtMTYxIHtmb250LXNpemU6IDE2MXB4O31cclxuLmZzLTE2MiB7Zm9udC1zaXplOiAxNjJweDt9XHJcbi5mcy0xNjMge2ZvbnQtc2l6ZTogMTYzcHg7fVxyXG4uZnMtMTY0IHtmb250LXNpemU6IDE2NHB4O31cclxuLmZzLTE2NSB7Zm9udC1zaXplOiAxNjVweDt9XHJcbi5mcy0xNjYge2ZvbnQtc2l6ZTogMTY2cHg7fVxyXG4uZnMtMTY3IHtmb250LXNpemU6IDE2N3B4O31cclxuLmZzLTE2OCB7Zm9udC1zaXplOiAxNjhweDt9XHJcbi5mcy0xNjkge2ZvbnQtc2l6ZTogMTY5cHg7fVxyXG4uZnMtMTcwIHtmb250LXNpemU6IDE3MHB4O31cclxuLmZzLTE3MSB7Zm9udC1zaXplOiAxNzFweDt9XHJcbi5mcy0xNzIge2ZvbnQtc2l6ZTogMTcycHg7fVxyXG4uZnMtMTczIHtmb250LXNpemU6IDE3M3B4O31cclxuLmZzLTE3NCB7Zm9udC1zaXplOiAxNzRweDt9XHJcbi5mcy0xNzUge2ZvbnQtc2l6ZTogMTc1cHg7fVxyXG4uZnMtMTc2IHtmb250LXNpemU6IDE3NnB4O31cclxuLmZzLTE3NyB7Zm9udC1zaXplOiAxNzdweDt9XHJcbi5mcy0xNzgge2ZvbnQtc2l6ZTogMTc4cHg7fVxyXG4uZnMtMTc5IHtmb250LXNpemU6IDE3OXB4O31cclxuLmZzLTE4MCB7Zm9udC1zaXplOiAxODBweDt9XHJcbi5mcy0xODEge2ZvbnQtc2l6ZTogMTgxcHg7fVxyXG4uZnMtMTgyIHtmb250LXNpemU6IDE4MnB4O31cclxuLmZzLTE4MyB7Zm9udC1zaXplOiAxODNweDt9XHJcbi5mcy0xODQge2ZvbnQtc2l6ZTogMTg0cHg7fVxyXG4uZnMtMTg1IHtmb250LXNpemU6IDE4NXB4O31cclxuLmZzLTE4NiB7Zm9udC1zaXplOiAxODZweDt9XHJcbi5mcy0xODcge2ZvbnQtc2l6ZTogMTg3cHg7fVxyXG4uZnMtMTg4IHtmb250LXNpemU6IDE4OHB4O31cclxuLmZzLTE4OSB7Zm9udC1zaXplOiAxODlweDt9XHJcbi5mcy0xOTAge2ZvbnQtc2l6ZTogMTkwcHg7fVxyXG4uZnMtMTkxIHtmb250LXNpemU6IDE5MXB4O31cclxuLmZzLTE5MiB7Zm9udC1zaXplOiAxOTJweDt9XHJcbi5mcy0xOTMge2ZvbnQtc2l6ZTogMTkzcHg7fVxyXG4uZnMtMTk0IHtmb250LXNpemU6IDE5NHB4O31cclxuLmZzLTE5NSB7Zm9udC1zaXplOiAxOTVweDt9XHJcbi5mcy0xOTYge2ZvbnQtc2l6ZTogMTk2cHg7fVxyXG4uZnMtMTk3IHtmb250LXNpemU6IDE5N3B4O31cclxuLmZzLTE5OCB7Zm9udC1zaXplOiAxOThweDt9XHJcbi5mcy0xOTkge2ZvbnQtc2l6ZTogMTk5cHg7fVxyXG4uZnMtMjAwIHtmb250LXNpemU6IDIwMHB4O31cclxuXHJcbi8qWyBQQURESU5HIF1cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuKi9cclxuLnAtdC0wIHtwYWRkaW5nLXRvcDogMHB4O31cclxuLnAtdC0xIHtwYWRkaW5nLXRvcDogMXB4O31cclxuLnAtdC0yIHtwYWRkaW5nLXRvcDogMnB4O31cclxuLnAtdC0zIHtwYWRkaW5nLXRvcDogM3B4O31cclxuLnAtdC00IHtwYWRkaW5nLXRvcDogNHB4O31cclxuLnAtdC01IHtwYWRkaW5nLXRvcDogNXB4O31cclxuLnAtdC02IHtwYWRkaW5nLXRvcDogNnB4O31cclxuLnAtdC03IHtwYWRkaW5nLXRvcDogN3B4O31cclxuLnAtdC04IHtwYWRkaW5nLXRvcDogOHB4O31cclxuLnAtdC05IHtwYWRkaW5nLXRvcDogOXB4O31cclxuLnAtdC0xMCB7cGFkZGluZy10b3A6IDEwcHg7fVxyXG4ucC10LTExIHtwYWRkaW5nLXRvcDogMTFweDt9XHJcbi5wLXQtMTIge3BhZGRpbmctdG9wOiAxMnB4O31cclxuLnAtdC0xMyB7cGFkZGluZy10b3A6IDEzcHg7fVxyXG4ucC10LTE0IHtwYWRkaW5nLXRvcDogMTRweDt9XHJcbi5wLXQtMTUge3BhZGRpbmctdG9wOiAxNXB4O31cclxuLnAtdC0xNiB7cGFkZGluZy10b3A6IDE2cHg7fVxyXG4ucC10LTE3IHtwYWRkaW5nLXRvcDogMTdweDt9XHJcbi5wLXQtMTgge3BhZGRpbmctdG9wOiAxOHB4O31cclxuLnAtdC0xOSB7cGFkZGluZy10b3A6IDE5cHg7fVxyXG4ucC10LTIwIHtwYWRkaW5nLXRvcDogMjBweDt9XHJcbi5wLXQtMjEge3BhZGRpbmctdG9wOiAyMXB4O31cclxuLnAtdC0yMiB7cGFkZGluZy10b3A6IDIycHg7fVxyXG4ucC10LTIzIHtwYWRkaW5nLXRvcDogMjNweDt9XHJcbi5wLXQtMjQge3BhZGRpbmctdG9wOiAyNHB4O31cclxuLnAtdC0yNSB7cGFkZGluZy10b3A6IDI1cHg7fVxyXG4ucC10LTI2IHtwYWRkaW5nLXRvcDogMjZweDt9XHJcbi5wLXQtMjcge3BhZGRpbmctdG9wOiAyN3B4O31cclxuLnAtdC0yOCB7cGFkZGluZy10b3A6IDI4cHg7fVxyXG4ucC10LTI5IHtwYWRkaW5nLXRvcDogMjlweDt9XHJcbi5wLXQtMzAge3BhZGRpbmctdG9wOiAzMHB4O31cclxuLnAtdC0zMSB7cGFkZGluZy10b3A6IDMxcHg7fVxyXG4ucC10LTMyIHtwYWRkaW5nLXRvcDogMzJweDt9XHJcbi5wLXQtMzMge3BhZGRpbmctdG9wOiAzM3B4O31cclxuLnAtdC0zNCB7cGFkZGluZy10b3A6IDM0cHg7fVxyXG4ucC10LTM1IHtwYWRkaW5nLXRvcDogMzVweDt9XHJcbi5wLXQtMzYge3BhZGRpbmctdG9wOiAzNnB4O31cclxuLnAtdC0zNyB7cGFkZGluZy10b3A6IDM3cHg7fVxyXG4ucC10LTM4IHtwYWRkaW5nLXRvcDogMzhweDt9XHJcbi5wLXQtMzkge3BhZGRpbmctdG9wOiAzOXB4O31cclxuLnAtdC00MCB7cGFkZGluZy10b3A6IDQwcHg7fVxyXG4ucC10LTQxIHtwYWRkaW5nLXRvcDogNDFweDt9XHJcbi5wLXQtNDIge3BhZGRpbmctdG9wOiA0MnB4O31cclxuLnAtdC00MyB7cGFkZGluZy10b3A6IDQzcHg7fVxyXG4ucC10LTQ0IHtwYWRkaW5nLXRvcDogNDRweDt9XHJcbi5wLXQtNDUge3BhZGRpbmctdG9wOiA0NXB4O31cclxuLnAtdC00NiB7cGFkZGluZy10b3A6IDQ2cHg7fVxyXG4ucC10LTQ3IHtwYWRkaW5nLXRvcDogNDdweDt9XHJcbi5wLXQtNDgge3BhZGRpbmctdG9wOiA0OHB4O31cclxuLnAtdC00OSB7cGFkZGluZy10b3A6IDQ5cHg7fVxyXG4ucC10LTUwIHtwYWRkaW5nLXRvcDogNTBweDt9XHJcbi5wLXQtNTEge3BhZGRpbmctdG9wOiA1MXB4O31cclxuLnAtdC01MiB7cGFkZGluZy10b3A6IDUycHg7fVxyXG4ucC10LTUzIHtwYWRkaW5nLXRvcDogNTNweDt9XHJcbi5wLXQtNTQge3BhZGRpbmctdG9wOiA1NHB4O31cclxuLnAtdC01NSB7cGFkZGluZy10b3A6IDU1cHg7fVxyXG4ucC10LTU2IHtwYWRkaW5nLXRvcDogNTZweDt9XHJcbi5wLXQtNTcge3BhZGRpbmctdG9wOiA1N3B4O31cclxuLnAtdC01OCB7cGFkZGluZy10b3A6IDU4cHg7fVxyXG4ucC10LTU5IHtwYWRkaW5nLXRvcDogNTlweDt9XHJcbi5wLXQtNjAge3BhZGRpbmctdG9wOiA2MHB4O31cclxuLnAtdC02MSB7cGFkZGluZy10b3A6IDYxcHg7fVxyXG4ucC10LTYyIHtwYWRkaW5nLXRvcDogNjJweDt9XHJcbi5wLXQtNjMge3BhZGRpbmctdG9wOiA2M3B4O31cclxuLnAtdC02NCB7cGFkZGluZy10b3A6IDY0cHg7fVxyXG4ucC10LTY1IHtwYWRkaW5nLXRvcDogNjVweDt9XHJcbi5wLXQtNjYge3BhZGRpbmctdG9wOiA2NnB4O31cclxuLnAtdC02NyB7cGFkZGluZy10b3A6IDY3cHg7fVxyXG4ucC10LTY4IHtwYWRkaW5nLXRvcDogNjhweDt9XHJcbi5wLXQtNjkge3BhZGRpbmctdG9wOiA2OXB4O31cclxuLnAtdC03MCB7cGFkZGluZy10b3A6IDcwcHg7fVxyXG4ucC10LTcxIHtwYWRkaW5nLXRvcDogNzFweDt9XHJcbi5wLXQtNzIge3BhZGRpbmctdG9wOiA3MnB4O31cclxuLnAtdC03MyB7cGFkZGluZy10b3A6IDczcHg7fVxyXG4ucC10LTc0IHtwYWRkaW5nLXRvcDogNzRweDt9XHJcbi5wLXQtNzUge3BhZGRpbmctdG9wOiA3NXB4O31cclxuLnAtdC03NiB7cGFkZGluZy10b3A6IDc2cHg7fVxyXG4ucC10LTc3IHtwYWRkaW5nLXRvcDogNzdweDt9XHJcbi5wLXQtNzgge3BhZGRpbmctdG9wOiA3OHB4O31cclxuLnAtdC03OSB7cGFkZGluZy10b3A6IDc5cHg7fVxyXG4ucC10LTgwIHtwYWRkaW5nLXRvcDogODBweDt9XHJcbi5wLXQtODEge3BhZGRpbmctdG9wOiA4MXB4O31cclxuLnAtdC04MiB7cGFkZGluZy10b3A6IDgycHg7fVxyXG4ucC10LTgzIHtwYWRkaW5nLXRvcDogODNweDt9XHJcbi5wLXQtODQge3BhZGRpbmctdG9wOiA4NHB4O31cclxuLnAtdC04NSB7cGFkZGluZy10b3A6IDg1cHg7fVxyXG4ucC10LTg2IHtwYWRkaW5nLXRvcDogODZweDt9XHJcbi5wLXQtODcge3BhZGRpbmctdG9wOiA4N3B4O31cclxuLnAtdC04OCB7cGFkZGluZy10b3A6IDg4cHg7fVxyXG4ucC10LTg5IHtwYWRkaW5nLXRvcDogODlweDt9XHJcbi5wLXQtOTAge3BhZGRpbmctdG9wOiA5MHB4O31cclxuLnAtdC05MSB7cGFkZGluZy10b3A6IDkxcHg7fVxyXG4ucC10LTkyIHtwYWRkaW5nLXRvcDogOTJweDt9XHJcbi5wLXQtOTMge3BhZGRpbmctdG9wOiA5M3B4O31cclxuLnAtdC05NCB7cGFkZGluZy10b3A6IDk0cHg7fVxyXG4ucC10LTk1IHtwYWRkaW5nLXRvcDogOTVweDt9XHJcbi5wLXQtOTYge3BhZGRpbmctdG9wOiA5NnB4O31cclxuLnAtdC05NyB7cGFkZGluZy10b3A6IDk3cHg7fVxyXG4ucC10LTk4IHtwYWRkaW5nLXRvcDogOThweDt9XHJcbi5wLXQtOTkge3BhZGRpbmctdG9wOiA5OXB4O31cclxuLnAtdC0xMDAge3BhZGRpbmctdG9wOiAxMDBweDt9XHJcbi5wLXQtMTAxIHtwYWRkaW5nLXRvcDogMTAxcHg7fVxyXG4ucC10LTEwMiB7cGFkZGluZy10b3A6IDEwMnB4O31cclxuLnAtdC0xMDMge3BhZGRpbmctdG9wOiAxMDNweDt9XHJcbi5wLXQtMTA0IHtwYWRkaW5nLXRvcDogMTA0cHg7fVxyXG4ucC10LTEwNSB7cGFkZGluZy10b3A6IDEwNXB4O31cclxuLnAtdC0xMDYge3BhZGRpbmctdG9wOiAxMDZweDt9XHJcbi5wLXQtMTA3IHtwYWRkaW5nLXRvcDogMTA3cHg7fVxyXG4ucC10LTEwOCB7cGFkZGluZy10b3A6IDEwOHB4O31cclxuLnAtdC0xMDkge3BhZGRpbmctdG9wOiAxMDlweDt9XHJcbi5wLXQtMTEwIHtwYWRkaW5nLXRvcDogMTEwcHg7fVxyXG4ucC10LTExMSB7cGFkZGluZy10b3A6IDExMXB4O31cclxuLnAtdC0xMTIge3BhZGRpbmctdG9wOiAxMTJweDt9XHJcbi5wLXQtMTEzIHtwYWRkaW5nLXRvcDogMTEzcHg7fVxyXG4ucC10LTExNCB7cGFkZGluZy10b3A6IDExNHB4O31cclxuLnAtdC0xMTUge3BhZGRpbmctdG9wOiAxMTVweDt9XHJcbi5wLXQtMTE2IHtwYWRkaW5nLXRvcDogMTE2cHg7fVxyXG4ucC10LTExNyB7cGFkZGluZy10b3A6IDExN3B4O31cclxuLnAtdC0xMTgge3BhZGRpbmctdG9wOiAxMThweDt9XHJcbi5wLXQtMTE5IHtwYWRkaW5nLXRvcDogMTE5cHg7fVxyXG4ucC10LTEyMCB7cGFkZGluZy10b3A6IDEyMHB4O31cclxuLnAtdC0xMjEge3BhZGRpbmctdG9wOiAxMjFweDt9XHJcbi5wLXQtMTIyIHtwYWRkaW5nLXRvcDogMTIycHg7fVxyXG4ucC10LTEyMyB7cGFkZGluZy10b3A6IDEyM3B4O31cclxuLnAtdC0xMjQge3BhZGRpbmctdG9wOiAxMjRweDt9XHJcbi5wLXQtMTI1IHtwYWRkaW5nLXRvcDogMTI1cHg7fVxyXG4ucC10LTEyNiB7cGFkZGluZy10b3A6IDEyNnB4O31cclxuLnAtdC0xMjcge3BhZGRpbmctdG9wOiAxMjdweDt9XHJcbi5wLXQtMTI4IHtwYWRkaW5nLXRvcDogMTI4cHg7fVxyXG4ucC10LTEyOSB7cGFkZGluZy10b3A6IDEyOXB4O31cclxuLnAtdC0xMzAge3BhZGRpbmctdG9wOiAxMzBweDt9XHJcbi5wLXQtMTMxIHtwYWRkaW5nLXRvcDogMTMxcHg7fVxyXG4ucC10LTEzMiB7cGFkZGluZy10b3A6IDEzMnB4O31cclxuLnAtdC0xMzMge3BhZGRpbmctdG9wOiAxMzNweDt9XHJcbi5wLXQtMTM0IHtwYWRkaW5nLXRvcDogMTM0cHg7fVxyXG4ucC10LTEzNSB7cGFkZGluZy10b3A6IDEzNXB4O31cclxuLnAtdC0xMzYge3BhZGRpbmctdG9wOiAxMzZweDt9XHJcbi5wLXQtMTM3IHtwYWRkaW5nLXRvcDogMTM3cHg7fVxyXG4ucC10LTEzOCB7cGFkZGluZy10b3A6IDEzOHB4O31cclxuLnAtdC0xMzkge3BhZGRpbmctdG9wOiAxMzlweDt9XHJcbi5wLXQtMTQwIHtwYWRkaW5nLXRvcDogMTQwcHg7fVxyXG4ucC10LTE0MSB7cGFkZGluZy10b3A6IDE0MXB4O31cclxuLnAtdC0xNDIge3BhZGRpbmctdG9wOiAxNDJweDt9XHJcbi5wLXQtMTQzIHtwYWRkaW5nLXRvcDogMTQzcHg7fVxyXG4ucC10LTE0NCB7cGFkZGluZy10b3A6IDE0NHB4O31cclxuLnAtdC0xNDUge3BhZGRpbmctdG9wOiAxNDVweDt9XHJcbi5wLXQtMTQ2IHtwYWRkaW5nLXRvcDogMTQ2cHg7fVxyXG4ucC10LTE0NyB7cGFkZGluZy10b3A6IDE0N3B4O31cclxuLnAtdC0xNDgge3BhZGRpbmctdG9wOiAxNDhweDt9XHJcbi5wLXQtMTQ5IHtwYWRkaW5nLXRvcDogMTQ5cHg7fVxyXG4ucC10LTE1MCB7cGFkZGluZy10b3A6IDE1MHB4O31cclxuLnAtdC0xNTEge3BhZGRpbmctdG9wOiAxNTFweDt9XHJcbi5wLXQtMTUyIHtwYWRkaW5nLXRvcDogMTUycHg7fVxyXG4ucC10LTE1MyB7cGFkZGluZy10b3A6IDE1M3B4O31cclxuLnAtdC0xNTQge3BhZGRpbmctdG9wOiAxNTRweDt9XHJcbi5wLXQtMTU1IHtwYWRkaW5nLXRvcDogMTU1cHg7fVxyXG4ucC10LTE1NiB7cGFkZGluZy10b3A6IDE1NnB4O31cclxuLnAtdC0xNTcge3BhZGRpbmctdG9wOiAxNTdweDt9XHJcbi5wLXQtMTU4IHtwYWRkaW5nLXRvcDogMTU4cHg7fVxyXG4ucC10LTE1OSB7cGFkZGluZy10b3A6IDE1OXB4O31cclxuLnAtdC0xNjAge3BhZGRpbmctdG9wOiAxNjBweDt9XHJcbi5wLXQtMTYxIHtwYWRkaW5nLXRvcDogMTYxcHg7fVxyXG4ucC10LTE2MiB7cGFkZGluZy10b3A6IDE2MnB4O31cclxuLnAtdC0xNjMge3BhZGRpbmctdG9wOiAxNjNweDt9XHJcbi5wLXQtMTY0IHtwYWRkaW5nLXRvcDogMTY0cHg7fVxyXG4ucC10LTE2NSB7cGFkZGluZy10b3A6IDE2NXB4O31cclxuLnAtdC0xNjYge3BhZGRpbmctdG9wOiAxNjZweDt9XHJcbi5wLXQtMTY3IHtwYWRkaW5nLXRvcDogMTY3cHg7fVxyXG4ucC10LTE2OCB7cGFkZGluZy10b3A6IDE2OHB4O31cclxuLnAtdC0xNjkge3BhZGRpbmctdG9wOiAxNjlweDt9XHJcbi5wLXQtMTcwIHtwYWRkaW5nLXRvcDogMTcwcHg7fVxyXG4ucC10LTE3MSB7cGFkZGluZy10b3A6IDE3MXB4O31cclxuLnAtdC0xNzIge3BhZGRpbmctdG9wOiAxNzJweDt9XHJcbi5wLXQtMTczIHtwYWRkaW5nLXRvcDogMTczcHg7fVxyXG4ucC10LTE3NCB7cGFkZGluZy10b3A6IDE3NHB4O31cclxuLnAtdC0xNzUge3BhZGRpbmctdG9wOiAxNzVweDt9XHJcbi5wLXQtMTc2IHtwYWRkaW5nLXRvcDogMTc2cHg7fVxyXG4ucC10LTE3NyB7cGFkZGluZy10b3A6IDE3N3B4O31cclxuLnAtdC0xNzgge3BhZGRpbmctdG9wOiAxNzhweDt9XHJcbi5wLXQtMTc5IHtwYWRkaW5nLXRvcDogMTc5cHg7fVxyXG4ucC10LTE4MCB7cGFkZGluZy10b3A6IDE4MHB4O31cclxuLnAtdC0xODEge3BhZGRpbmctdG9wOiAxODFweDt9XHJcbi5wLXQtMTgyIHtwYWRkaW5nLXRvcDogMTgycHg7fVxyXG4ucC10LTE4MyB7cGFkZGluZy10b3A6IDE4M3B4O31cclxuLnAtdC0xODQge3BhZGRpbmctdG9wOiAxODRweDt9XHJcbi5wLXQtMTg1IHtwYWRkaW5nLXRvcDogMTg1cHg7fVxyXG4ucC10LTE4NiB7cGFkZGluZy10b3A6IDE4NnB4O31cclxuLnAtdC0xODcge3BhZGRpbmctdG9wOiAxODdweDt9XHJcbi5wLXQtMTg4IHtwYWRkaW5nLXRvcDogMTg4cHg7fVxyXG4ucC10LTE4OSB7cGFkZGluZy10b3A6IDE4OXB4O31cclxuLnAtdC0xOTAge3BhZGRpbmctdG9wOiAxOTBweDt9XHJcbi5wLXQtMTkxIHtwYWRkaW5nLXRvcDogMTkxcHg7fVxyXG4ucC10LTE5MiB7cGFkZGluZy10b3A6IDE5MnB4O31cclxuLnAtdC0xOTMge3BhZGRpbmctdG9wOiAxOTNweDt9XHJcbi5wLXQtMTk0IHtwYWRkaW5nLXRvcDogMTk0cHg7fVxyXG4ucC10LTE5NSB7cGFkZGluZy10b3A6IDE5NXB4O31cclxuLnAtdC0xOTYge3BhZGRpbmctdG9wOiAxOTZweDt9XHJcbi5wLXQtMTk3IHtwYWRkaW5nLXRvcDogMTk3cHg7fVxyXG4ucC10LTE5OCB7cGFkZGluZy10b3A6IDE5OHB4O31cclxuLnAtdC0xOTkge3BhZGRpbmctdG9wOiAxOTlweDt9XHJcbi5wLXQtMjAwIHtwYWRkaW5nLXRvcDogMjAwcHg7fVxyXG4ucC10LTIwMSB7cGFkZGluZy10b3A6IDIwMXB4O31cclxuLnAtdC0yMDIge3BhZGRpbmctdG9wOiAyMDJweDt9XHJcbi5wLXQtMjAzIHtwYWRkaW5nLXRvcDogMjAzcHg7fVxyXG4ucC10LTIwNCB7cGFkZGluZy10b3A6IDIwNHB4O31cclxuLnAtdC0yMDUge3BhZGRpbmctdG9wOiAyMDVweDt9XHJcbi5wLXQtMjA2IHtwYWRkaW5nLXRvcDogMjA2cHg7fVxyXG4ucC10LTIwNyB7cGFkZGluZy10b3A6IDIwN3B4O31cclxuLnAtdC0yMDgge3BhZGRpbmctdG9wOiAyMDhweDt9XHJcbi5wLXQtMjA5IHtwYWRkaW5nLXRvcDogMjA5cHg7fVxyXG4ucC10LTIxMCB7cGFkZGluZy10b3A6IDIxMHB4O31cclxuLnAtdC0yMTEge3BhZGRpbmctdG9wOiAyMTFweDt9XHJcbi5wLXQtMjEyIHtwYWRkaW5nLXRvcDogMjEycHg7fVxyXG4ucC10LTIxMyB7cGFkZGluZy10b3A6IDIxM3B4O31cclxuLnAtdC0yMTQge3BhZGRpbmctdG9wOiAyMTRweDt9XHJcbi5wLXQtMjE1IHtwYWRkaW5nLXRvcDogMjE1cHg7fVxyXG4ucC10LTIxNiB7cGFkZGluZy10b3A6IDIxNnB4O31cclxuLnAtdC0yMTcge3BhZGRpbmctdG9wOiAyMTdweDt9XHJcbi5wLXQtMjE4IHtwYWRkaW5nLXRvcDogMjE4cHg7fVxyXG4ucC10LTIxOSB7cGFkZGluZy10b3A6IDIxOXB4O31cclxuLnAtdC0yMjAge3BhZGRpbmctdG9wOiAyMjBweDt9XHJcbi5wLXQtMjIxIHtwYWRkaW5nLXRvcDogMjIxcHg7fVxyXG4ucC10LTIyMiB7cGFkZGluZy10b3A6IDIyMnB4O31cclxuLnAtdC0yMjMge3BhZGRpbmctdG9wOiAyMjNweDt9XHJcbi5wLXQtMjI0IHtwYWRkaW5nLXRvcDogMjI0cHg7fVxyXG4ucC10LTIyNSB7cGFkZGluZy10b3A6IDIyNXB4O31cclxuLnAtdC0yMjYge3BhZGRpbmctdG9wOiAyMjZweDt9XHJcbi5wLXQtMjI3IHtwYWRkaW5nLXRvcDogMjI3cHg7fVxyXG4ucC10LTIyOCB7cGFkZGluZy10b3A6IDIyOHB4O31cclxuLnAtdC0yMjkge3BhZGRpbmctdG9wOiAyMjlweDt9XHJcbi5wLXQtMjMwIHtwYWRkaW5nLXRvcDogMjMwcHg7fVxyXG4ucC10LTIzMSB7cGFkZGluZy10b3A6IDIzMXB4O31cclxuLnAtdC0yMzIge3BhZGRpbmctdG9wOiAyMzJweDt9XHJcbi5wLXQtMjMzIHtwYWRkaW5nLXRvcDogMjMzcHg7fVxyXG4ucC10LTIzNCB7cGFkZGluZy10b3A6IDIzNHB4O31cclxuLnAtdC0yMzUge3BhZGRpbmctdG9wOiAyMzVweDt9XHJcbi5wLXQtMjM2IHtwYWRkaW5nLXRvcDogMjM2cHg7fVxyXG4ucC10LTIzNyB7cGFkZGluZy10b3A6IDIzN3B4O31cclxuLnAtdC0yMzgge3BhZGRpbmctdG9wOiAyMzhweDt9XHJcbi5wLXQtMjM5IHtwYWRkaW5nLXRvcDogMjM5cHg7fVxyXG4ucC10LTI0MCB7cGFkZGluZy10b3A6IDI0MHB4O31cclxuLnAtdC0yNDEge3BhZGRpbmctdG9wOiAyNDFweDt9XHJcbi5wLXQtMjQyIHtwYWRkaW5nLXRvcDogMjQycHg7fVxyXG4ucC10LTI0MyB7cGFkZGluZy10b3A6IDI0M3B4O31cclxuLnAtdC0yNDQge3BhZGRpbmctdG9wOiAyNDRweDt9XHJcbi5wLXQtMjQ1IHtwYWRkaW5nLXRvcDogMjQ1cHg7fVxyXG4ucC10LTI0NiB7cGFkZGluZy10b3A6IDI0NnB4O31cclxuLnAtdC0yNDcge3BhZGRpbmctdG9wOiAyNDdweDt9XHJcbi5wLXQtMjQ4IHtwYWRkaW5nLXRvcDogMjQ4cHg7fVxyXG4ucC10LTI0OSB7cGFkZGluZy10b3A6IDI0OXB4O31cclxuLnAtdC0yNTAge3BhZGRpbmctdG9wOiAyNTBweDt9XHJcbi5wLWItMCB7cGFkZGluZy1ib3R0b206IDBweDt9XHJcbi5wLWItMSB7cGFkZGluZy1ib3R0b206IDFweDt9XHJcbi5wLWItMiB7cGFkZGluZy1ib3R0b206IDJweDt9XHJcbi5wLWItMyB7cGFkZGluZy1ib3R0b206IDNweDt9XHJcbi5wLWItNCB7cGFkZGluZy1ib3R0b206IDRweDt9XHJcbi5wLWItNSB7cGFkZGluZy1ib3R0b206IDVweDt9XHJcbi5wLWItNiB7cGFkZGluZy1ib3R0b206IDZweDt9XHJcbi5wLWItNyB7cGFkZGluZy1ib3R0b206IDdweDt9XHJcbi5wLWItOCB7cGFkZGluZy1ib3R0b206IDhweDt9XHJcbi5wLWItOSB7cGFkZGluZy1ib3R0b206IDlweDt9XHJcbi5wLWItMTAge3BhZGRpbmctYm90dG9tOiAxMHB4O31cclxuLnAtYi0xMSB7cGFkZGluZy1ib3R0b206IDExcHg7fVxyXG4ucC1iLTEyIHtwYWRkaW5nLWJvdHRvbTogMTJweDt9XHJcbi5wLWItMTMge3BhZGRpbmctYm90dG9tOiAxM3B4O31cclxuLnAtYi0xNCB7cGFkZGluZy1ib3R0b206IDE0cHg7fVxyXG4ucC1iLTE1IHtwYWRkaW5nLWJvdHRvbTogMTVweDt9XHJcbi5wLWItMTYge3BhZGRpbmctYm90dG9tOiAxNnB4O31cclxuLnAtYi0xNyB7cGFkZGluZy1ib3R0b206IDE3cHg7fVxyXG4ucC1iLTE4IHtwYWRkaW5nLWJvdHRvbTogMThweDt9XHJcbi5wLWItMTkge3BhZGRpbmctYm90dG9tOiAxOXB4O31cclxuLnAtYi0yMCB7cGFkZGluZy1ib3R0b206IDIwcHg7fVxyXG4ucC1iLTIxIHtwYWRkaW5nLWJvdHRvbTogMjFweDt9XHJcbi5wLWItMjIge3BhZGRpbmctYm90dG9tOiAyMnB4O31cclxuLnAtYi0yMyB7cGFkZGluZy1ib3R0b206IDIzcHg7fVxyXG4ucC1iLTI0IHtwYWRkaW5nLWJvdHRvbTogMjRweDt9XHJcbi5wLWItMjUge3BhZGRpbmctYm90dG9tOiAyNXB4O31cclxuLnAtYi0yNiB7cGFkZGluZy1ib3R0b206IDI2cHg7fVxyXG4ucC1iLTI3IHtwYWRkaW5nLWJvdHRvbTogMjdweDt9XHJcbi5wLWItMjgge3BhZGRpbmctYm90dG9tOiAyOHB4O31cclxuLnAtYi0yOSB7cGFkZGluZy1ib3R0b206IDI5cHg7fVxyXG4ucC1iLTMwIHtwYWRkaW5nLWJvdHRvbTogMzBweDt9XHJcbi5wLWItMzEge3BhZGRpbmctYm90dG9tOiAzMXB4O31cclxuLnAtYi0zMiB7cGFkZGluZy1ib3R0b206IDMycHg7fVxyXG4ucC1iLTMzIHtwYWRkaW5nLWJvdHRvbTogMzNweDt9XHJcbi5wLWItMzQge3BhZGRpbmctYm90dG9tOiAzNHB4O31cclxuLnAtYi0zNSB7cGFkZGluZy1ib3R0b206IDM1cHg7fVxyXG4ucC1iLTM2IHtwYWRkaW5nLWJvdHRvbTogMzZweDt9XHJcbi5wLWItMzcge3BhZGRpbmctYm90dG9tOiAzN3B4O31cclxuLnAtYi0zOCB7cGFkZGluZy1ib3R0b206IDM4cHg7fVxyXG4ucC1iLTM5IHtwYWRkaW5nLWJvdHRvbTogMzlweDt9XHJcbi5wLWItNDAge3BhZGRpbmctYm90dG9tOiA0MHB4O31cclxuLnAtYi00MSB7cGFkZGluZy1ib3R0b206IDQxcHg7fVxyXG4ucC1iLTQyIHtwYWRkaW5nLWJvdHRvbTogNDJweDt9XHJcbi5wLWItNDMge3BhZGRpbmctYm90dG9tOiA0M3B4O31cclxuLnAtYi00NCB7cGFkZGluZy1ib3R0b206IDQ0cHg7fVxyXG4ucC1iLTQ1IHtwYWRkaW5nLWJvdHRvbTogNDVweDt9XHJcbi5wLWItNDYge3BhZGRpbmctYm90dG9tOiA0NnB4O31cclxuLnAtYi00NyB7cGFkZGluZy1ib3R0b206IDQ3cHg7fVxyXG4ucC1iLTQ4IHtwYWRkaW5nLWJvdHRvbTogNDhweDt9XHJcbi5wLWItNDkge3BhZGRpbmctYm90dG9tOiA0OXB4O31cclxuLnAtYi01MCB7cGFkZGluZy1ib3R0b206IDUwcHg7fVxyXG4ucC1iLTUxIHtwYWRkaW5nLWJvdHRvbTogNTFweDt9XHJcbi5wLWItNTIge3BhZGRpbmctYm90dG9tOiA1MnB4O31cclxuLnAtYi01MyB7cGFkZGluZy1ib3R0b206IDUzcHg7fVxyXG4ucC1iLTU0IHtwYWRkaW5nLWJvdHRvbTogNTRweDt9XHJcbi5wLWItNTUge3BhZGRpbmctYm90dG9tOiA1NXB4O31cclxuLnAtYi01NiB7cGFkZGluZy1ib3R0b206IDU2cHg7fVxyXG4ucC1iLTU3IHtwYWRkaW5nLWJvdHRvbTogNTdweDt9XHJcbi5wLWItNTgge3BhZGRpbmctYm90dG9tOiA1OHB4O31cclxuLnAtYi01OSB7cGFkZGluZy1ib3R0b206IDU5cHg7fVxyXG4ucC1iLTYwIHtwYWRkaW5nLWJvdHRvbTogNjBweDt9XHJcbi5wLWItNjEge3BhZGRpbmctYm90dG9tOiA2MXB4O31cclxuLnAtYi02MiB7cGFkZGluZy1ib3R0b206IDYycHg7fVxyXG4ucC1iLTYzIHtwYWRkaW5nLWJvdHRvbTogNjNweDt9XHJcbi5wLWItNjQge3BhZGRpbmctYm90dG9tOiA2NHB4O31cclxuLnAtYi02NSB7cGFkZGluZy1ib3R0b206IDY1cHg7fVxyXG4ucC1iLTY2IHtwYWRkaW5nLWJvdHRvbTogNjZweDt9XHJcbi5wLWItNjcge3BhZGRpbmctYm90dG9tOiA2N3B4O31cclxuLnAtYi02OCB7cGFkZGluZy1ib3R0b206IDY4cHg7fVxyXG4ucC1iLTY5IHtwYWRkaW5nLWJvdHRvbTogNjlweDt9XHJcbi5wLWItNzAge3BhZGRpbmctYm90dG9tOiA3MHB4O31cclxuLnAtYi03MSB7cGFkZGluZy1ib3R0b206IDcxcHg7fVxyXG4ucC1iLTcyIHtwYWRkaW5nLWJvdHRvbTogNzJweDt9XHJcbi5wLWItNzMge3BhZGRpbmctYm90dG9tOiA3M3B4O31cclxuLnAtYi03NCB7cGFkZGluZy1ib3R0b206IDc0cHg7fVxyXG4ucC1iLTc1IHtwYWRkaW5nLWJvdHRvbTogNzVweDt9XHJcbi5wLWItNzYge3BhZGRpbmctYm90dG9tOiA3NnB4O31cclxuLnAtYi03NyB7cGFkZGluZy1ib3R0b206IDc3cHg7fVxyXG4ucC1iLTc4IHtwYWRkaW5nLWJvdHRvbTogNzhweDt9XHJcbi5wLWItNzkge3BhZGRpbmctYm90dG9tOiA3OXB4O31cclxuLnAtYi04MCB7cGFkZGluZy1ib3R0b206IDgwcHg7fVxyXG4ucC1iLTgxIHtwYWRkaW5nLWJvdHRvbTogODFweDt9XHJcbi5wLWItODIge3BhZGRpbmctYm90dG9tOiA4MnB4O31cclxuLnAtYi04MyB7cGFkZGluZy1ib3R0b206IDgzcHg7fVxyXG4ucC1iLTg0IHtwYWRkaW5nLWJvdHRvbTogODRweDt9XHJcbi5wLWItODUge3BhZGRpbmctYm90dG9tOiA4NXB4O31cclxuLnAtYi04NiB7cGFkZGluZy1ib3R0b206IDg2cHg7fVxyXG4ucC1iLTg3IHtwYWRkaW5nLWJvdHRvbTogODdweDt9XHJcbi5wLWItODgge3BhZGRpbmctYm90dG9tOiA4OHB4O31cclxuLnAtYi04OSB7cGFkZGluZy1ib3R0b206IDg5cHg7fVxyXG4ucC1iLTkwIHtwYWRkaW5nLWJvdHRvbTogOTBweDt9XHJcbi5wLWItOTEge3BhZGRpbmctYm90dG9tOiA5MXB4O31cclxuLnAtYi05MiB7cGFkZGluZy1ib3R0b206IDkycHg7fVxyXG4ucC1iLTkzIHtwYWRkaW5nLWJvdHRvbTogOTNweDt9XHJcbi5wLWItOTQge3BhZGRpbmctYm90dG9tOiA5NHB4O31cclxuLnAtYi05NSB7cGFkZGluZy1ib3R0b206IDk1cHg7fVxyXG4ucC1iLTk2IHtwYWRkaW5nLWJvdHRvbTogOTZweDt9XHJcbi5wLWItOTcge3BhZGRpbmctYm90dG9tOiA5N3B4O31cclxuLnAtYi05OCB7cGFkZGluZy1ib3R0b206IDk4cHg7fVxyXG4ucC1iLTk5IHtwYWRkaW5nLWJvdHRvbTogOTlweDt9XHJcbi5wLWItMTAwIHtwYWRkaW5nLWJvdHRvbTogMTAwcHg7fVxyXG4ucC1iLTEwMSB7cGFkZGluZy1ib3R0b206IDEwMXB4O31cclxuLnAtYi0xMDIge3BhZGRpbmctYm90dG9tOiAxMDJweDt9XHJcbi5wLWItMTAzIHtwYWRkaW5nLWJvdHRvbTogMTAzcHg7fVxyXG4ucC1iLTEwNCB7cGFkZGluZy1ib3R0b206IDEwNHB4O31cclxuLnAtYi0xMDUge3BhZGRpbmctYm90dG9tOiAxMDVweDt9XHJcbi5wLWItMTA2IHtwYWRkaW5nLWJvdHRvbTogMTA2cHg7fVxyXG4ucC1iLTEwNyB7cGFkZGluZy1ib3R0b206IDEwN3B4O31cclxuLnAtYi0xMDgge3BhZGRpbmctYm90dG9tOiAxMDhweDt9XHJcbi5wLWItMTA5IHtwYWRkaW5nLWJvdHRvbTogMTA5cHg7fVxyXG4ucC1iLTExMCB7cGFkZGluZy1ib3R0b206IDExMHB4O31cclxuLnAtYi0xMTEge3BhZGRpbmctYm90dG9tOiAxMTFweDt9XHJcbi5wLWItMTEyIHtwYWRkaW5nLWJvdHRvbTogMTEycHg7fVxyXG4ucC1iLTExMyB7cGFkZGluZy1ib3R0b206IDExM3B4O31cclxuLnAtYi0xMTQge3BhZGRpbmctYm90dG9tOiAxMTRweDt9XHJcbi5wLWItMTE1IHtwYWRkaW5nLWJvdHRvbTogMTE1cHg7fVxyXG4ucC1iLTExNiB7cGFkZGluZy1ib3R0b206IDExNnB4O31cclxuLnAtYi0xMTcge3BhZGRpbmctYm90dG9tOiAxMTdweDt9XHJcbi5wLWItMTE4IHtwYWRkaW5nLWJvdHRvbTogMTE4cHg7fVxyXG4ucC1iLTExOSB7cGFkZGluZy1ib3R0b206IDExOXB4O31cclxuLnAtYi0xMjAge3BhZGRpbmctYm90dG9tOiAxMjBweDt9XHJcbi5wLWItMTIxIHtwYWRkaW5nLWJvdHRvbTogMTIxcHg7fVxyXG4ucC1iLTEyMiB7cGFkZGluZy1ib3R0b206IDEyMnB4O31cclxuLnAtYi0xMjMge3BhZGRpbmctYm90dG9tOiAxMjNweDt9XHJcbi5wLWItMTI0IHtwYWRkaW5nLWJvdHRvbTogMTI0cHg7fVxyXG4ucC1iLTEyNSB7cGFkZGluZy1ib3R0b206IDEyNXB4O31cclxuLnAtYi0xMjYge3BhZGRpbmctYm90dG9tOiAxMjZweDt9XHJcbi5wLWItMTI3IHtwYWRkaW5nLWJvdHRvbTogMTI3cHg7fVxyXG4ucC1iLTEyOCB7cGFkZGluZy1ib3R0b206IDEyOHB4O31cclxuLnAtYi0xMjkge3BhZGRpbmctYm90dG9tOiAxMjlweDt9XHJcbi5wLWItMTMwIHtwYWRkaW5nLWJvdHRvbTogMTMwcHg7fVxyXG4ucC1iLTEzMSB7cGFkZGluZy1ib3R0b206IDEzMXB4O31cclxuLnAtYi0xMzIge3BhZGRpbmctYm90dG9tOiAxMzJweDt9XHJcbi5wLWItMTMzIHtwYWRkaW5nLWJvdHRvbTogMTMzcHg7fVxyXG4ucC1iLTEzNCB7cGFkZGluZy1ib3R0b206IDEzNHB4O31cclxuLnAtYi0xMzUge3BhZGRpbmctYm90dG9tOiAxMzVweDt9XHJcbi5wLWItMTM2IHtwYWRkaW5nLWJvdHRvbTogMTM2cHg7fVxyXG4ucC1iLTEzNyB7cGFkZGluZy1ib3R0b206IDEzN3B4O31cclxuLnAtYi0xMzgge3BhZGRpbmctYm90dG9tOiAxMzhweDt9XHJcbi5wLWItMTM5IHtwYWRkaW5nLWJvdHRvbTogMTM5cHg7fVxyXG4ucC1iLTE0MCB7cGFkZGluZy1ib3R0b206IDE0MHB4O31cclxuLnAtYi0xNDEge3BhZGRpbmctYm90dG9tOiAxNDFweDt9XHJcbi5wLWItMTQyIHtwYWRkaW5nLWJvdHRvbTogMTQycHg7fVxyXG4ucC1iLTE0MyB7cGFkZGluZy1ib3R0b206IDE0M3B4O31cclxuLnAtYi0xNDQge3BhZGRpbmctYm90dG9tOiAxNDRweDt9XHJcbi5wLWItMTQ1IHtwYWRkaW5nLWJvdHRvbTogMTQ1cHg7fVxyXG4ucC1iLTE0NiB7cGFkZGluZy1ib3R0b206IDE0NnB4O31cclxuLnAtYi0xNDcge3BhZGRpbmctYm90dG9tOiAxNDdweDt9XHJcbi5wLWItMTQ4IHtwYWRkaW5nLWJvdHRvbTogMTQ4cHg7fVxyXG4ucC1iLTE0OSB7cGFkZGluZy1ib3R0b206IDE0OXB4O31cclxuLnAtYi0xNTAge3BhZGRpbmctYm90dG9tOiAxNTBweDt9XHJcbi5wLWItMTUxIHtwYWRkaW5nLWJvdHRvbTogMTUxcHg7fVxyXG4ucC1iLTE1MiB7cGFkZGluZy1ib3R0b206IDE1MnB4O31cclxuLnAtYi0xNTMge3BhZGRpbmctYm90dG9tOiAxNTNweDt9XHJcbi5wLWItMTU0IHtwYWRkaW5nLWJvdHRvbTogMTU0cHg7fVxyXG4ucC1iLTE1NSB7cGFkZGluZy1ib3R0b206IDE1NXB4O31cclxuLnAtYi0xNTYge3BhZGRpbmctYm90dG9tOiAxNTZweDt9XHJcbi5wLWItMTU3IHtwYWRkaW5nLWJvdHRvbTogMTU3cHg7fVxyXG4ucC1iLTE1OCB7cGFkZGluZy1ib3R0b206IDE1OHB4O31cclxuLnAtYi0xNTkge3BhZGRpbmctYm90dG9tOiAxNTlweDt9XHJcbi5wLWItMTYwIHtwYWRkaW5nLWJvdHRvbTogMTYwcHg7fVxyXG4ucC1iLTE2MSB7cGFkZGluZy1ib3R0b206IDE2MXB4O31cclxuLnAtYi0xNjIge3BhZGRpbmctYm90dG9tOiAxNjJweDt9XHJcbi5wLWItMTYzIHtwYWRkaW5nLWJvdHRvbTogMTYzcHg7fVxyXG4ucC1iLTE2NCB7cGFkZGluZy1ib3R0b206IDE2NHB4O31cclxuLnAtYi0xNjUge3BhZGRpbmctYm90dG9tOiAxNjVweDt9XHJcbi5wLWItMTY2IHtwYWRkaW5nLWJvdHRvbTogMTY2cHg7fVxyXG4ucC1iLTE2NyB7cGFkZGluZy1ib3R0b206IDE2N3B4O31cclxuLnAtYi0xNjgge3BhZGRpbmctYm90dG9tOiAxNjhweDt9XHJcbi5wLWItMTY5IHtwYWRkaW5nLWJvdHRvbTogMTY5cHg7fVxyXG4ucC1iLTE3MCB7cGFkZGluZy1ib3R0b206IDE3MHB4O31cclxuLnAtYi0xNzEge3BhZGRpbmctYm90dG9tOiAxNzFweDt9XHJcbi5wLWItMTcyIHtwYWRkaW5nLWJvdHRvbTogMTcycHg7fVxyXG4ucC1iLTE3MyB7cGFkZGluZy1ib3R0b206IDE3M3B4O31cclxuLnAtYi0xNzQge3BhZGRpbmctYm90dG9tOiAxNzRweDt9XHJcbi5wLWItMTc1IHtwYWRkaW5nLWJvdHRvbTogMTc1cHg7fVxyXG4ucC1iLTE3NiB7cGFkZGluZy1ib3R0b206IDE3NnB4O31cclxuLnAtYi0xNzcge3BhZGRpbmctYm90dG9tOiAxNzdweDt9XHJcbi5wLWItMTc4IHtwYWRkaW5nLWJvdHRvbTogMTc4cHg7fVxyXG4ucC1iLTE3OSB7cGFkZGluZy1ib3R0b206IDE3OXB4O31cclxuLnAtYi0xODAge3BhZGRpbmctYm90dG9tOiAxODBweDt9XHJcbi5wLWItMTgxIHtwYWRkaW5nLWJvdHRvbTogMTgxcHg7fVxyXG4ucC1iLTE4MiB7cGFkZGluZy1ib3R0b206IDE4MnB4O31cclxuLnAtYi0xODMge3BhZGRpbmctYm90dG9tOiAxODNweDt9XHJcbi5wLWItMTg0IHtwYWRkaW5nLWJvdHRvbTogMTg0cHg7fVxyXG4ucC1iLTE4NSB7cGFkZGluZy1ib3R0b206IDE4NXB4O31cclxuLnAtYi0xODYge3BhZGRpbmctYm90dG9tOiAxODZweDt9XHJcbi5wLWItMTg3IHtwYWRkaW5nLWJvdHRvbTogMTg3cHg7fVxyXG4ucC1iLTE4OCB7cGFkZGluZy1ib3R0b206IDE4OHB4O31cclxuLnAtYi0xODkge3BhZGRpbmctYm90dG9tOiAxODlweDt9XHJcbi5wLWItMTkwIHtwYWRkaW5nLWJvdHRvbTogMTkwcHg7fVxyXG4ucC1iLTE5MSB7cGFkZGluZy1ib3R0b206IDE5MXB4O31cclxuLnAtYi0xOTIge3BhZGRpbmctYm90dG9tOiAxOTJweDt9XHJcbi5wLWItMTkzIHtwYWRkaW5nLWJvdHRvbTogMTkzcHg7fVxyXG4ucC1iLTE5NCB7cGFkZGluZy1ib3R0b206IDE5NHB4O31cclxuLnAtYi0xOTUge3BhZGRpbmctYm90dG9tOiAxOTVweDt9XHJcbi5wLWItMTk2IHtwYWRkaW5nLWJvdHRvbTogMTk2cHg7fVxyXG4ucC1iLTE5NyB7cGFkZGluZy1ib3R0b206IDE5N3B4O31cclxuLnAtYi0xOTgge3BhZGRpbmctYm90dG9tOiAxOThweDt9XHJcbi5wLWItMTk5IHtwYWRkaW5nLWJvdHRvbTogMTk5cHg7fVxyXG4ucC1iLTIwMCB7cGFkZGluZy1ib3R0b206IDIwMHB4O31cclxuLnAtYi0yMDEge3BhZGRpbmctYm90dG9tOiAyMDFweDt9XHJcbi5wLWItMjAyIHtwYWRkaW5nLWJvdHRvbTogMjAycHg7fVxyXG4ucC1iLTIwMyB7cGFkZGluZy1ib3R0b206IDIwM3B4O31cclxuLnAtYi0yMDQge3BhZGRpbmctYm90dG9tOiAyMDRweDt9XHJcbi5wLWItMjA1IHtwYWRkaW5nLWJvdHRvbTogMjA1cHg7fVxyXG4ucC1iLTIwNiB7cGFkZGluZy1ib3R0b206IDIwNnB4O31cclxuLnAtYi0yMDcge3BhZGRpbmctYm90dG9tOiAyMDdweDt9XHJcbi5wLWItMjA4IHtwYWRkaW5nLWJvdHRvbTogMjA4cHg7fVxyXG4ucC1iLTIwOSB7cGFkZGluZy1ib3R0b206IDIwOXB4O31cclxuLnAtYi0yMTAge3BhZGRpbmctYm90dG9tOiAyMTBweDt9XHJcbi5wLWItMjExIHtwYWRkaW5nLWJvdHRvbTogMjExcHg7fVxyXG4ucC1iLTIxMiB7cGFkZGluZy1ib3R0b206IDIxMnB4O31cclxuLnAtYi0yMTMge3BhZGRpbmctYm90dG9tOiAyMTNweDt9XHJcbi5wLWItMjE0IHtwYWRkaW5nLWJvdHRvbTogMjE0cHg7fVxyXG4ucC1iLTIxNSB7cGFkZGluZy1ib3R0b206IDIxNXB4O31cclxuLnAtYi0yMTYge3BhZGRpbmctYm90dG9tOiAyMTZweDt9XHJcbi5wLWItMjE3IHtwYWRkaW5nLWJvdHRvbTogMjE3cHg7fVxyXG4ucC1iLTIxOCB7cGFkZGluZy1ib3R0b206IDIxOHB4O31cclxuLnAtYi0yMTkge3BhZGRpbmctYm90dG9tOiAyMTlweDt9XHJcbi5wLWItMjIwIHtwYWRkaW5nLWJvdHRvbTogMjIwcHg7fVxyXG4ucC1iLTIyMSB7cGFkZGluZy1ib3R0b206IDIyMXB4O31cclxuLnAtYi0yMjIge3BhZGRpbmctYm90dG9tOiAyMjJweDt9XHJcbi5wLWItMjIzIHtwYWRkaW5nLWJvdHRvbTogMjIzcHg7fVxyXG4ucC1iLTIyNCB7cGFkZGluZy1ib3R0b206IDIyNHB4O31cclxuLnAtYi0yMjUge3BhZGRpbmctYm90dG9tOiAyMjVweDt9XHJcbi5wLWItMjI2IHtwYWRkaW5nLWJvdHRvbTogMjI2cHg7fVxyXG4ucC1iLTIyNyB7cGFkZGluZy1ib3R0b206IDIyN3B4O31cclxuLnAtYi0yMjgge3BhZGRpbmctYm90dG9tOiAyMjhweDt9XHJcbi5wLWItMjI5IHtwYWRkaW5nLWJvdHRvbTogMjI5cHg7fVxyXG4ucC1iLTIzMCB7cGFkZGluZy1ib3R0b206IDIzMHB4O31cclxuLnAtYi0yMzEge3BhZGRpbmctYm90dG9tOiAyMzFweDt9XHJcbi5wLWItMjMyIHtwYWRkaW5nLWJvdHRvbTogMjMycHg7fVxyXG4ucC1iLTIzMyB7cGFkZGluZy1ib3R0b206IDIzM3B4O31cclxuLnAtYi0yMzQge3BhZGRpbmctYm90dG9tOiAyMzRweDt9XHJcbi5wLWItMjM1IHtwYWRkaW5nLWJvdHRvbTogMjM1cHg7fVxyXG4ucC1iLTIzNiB7cGFkZGluZy1ib3R0b206IDIzNnB4O31cclxuLnAtYi0yMzcge3BhZGRpbmctYm90dG9tOiAyMzdweDt9XHJcbi5wLWItMjM4IHtwYWRkaW5nLWJvdHRvbTogMjM4cHg7fVxyXG4ucC1iLTIzOSB7cGFkZGluZy1ib3R0b206IDIzOXB4O31cclxuLnAtYi0yNDAge3BhZGRpbmctYm90dG9tOiAyNDBweDt9XHJcbi5wLWItMjQxIHtwYWRkaW5nLWJvdHRvbTogMjQxcHg7fVxyXG4ucC1iLTI0MiB7cGFkZGluZy1ib3R0b206IDI0MnB4O31cclxuLnAtYi0yNDMge3BhZGRpbmctYm90dG9tOiAyNDNweDt9XHJcbi5wLWItMjQ0IHtwYWRkaW5nLWJvdHRvbTogMjQ0cHg7fVxyXG4ucC1iLTI0NSB7cGFkZGluZy1ib3R0b206IDI0NXB4O31cclxuLnAtYi0yNDYge3BhZGRpbmctYm90dG9tOiAyNDZweDt9XHJcbi5wLWItMjQ3IHtwYWRkaW5nLWJvdHRvbTogMjQ3cHg7fVxyXG4ucC1iLTI0OCB7cGFkZGluZy1ib3R0b206IDI0OHB4O31cclxuLnAtYi0yNDkge3BhZGRpbmctYm90dG9tOiAyNDlweDt9XHJcbi5wLWItMjUwIHtwYWRkaW5nLWJvdHRvbTogMjUwcHg7fVxyXG4ucC1sLTAge3BhZGRpbmctbGVmdDogMHB4O31cclxuLnAtbC0xIHtwYWRkaW5nLWxlZnQ6IDFweDt9XHJcbi5wLWwtMiB7cGFkZGluZy1sZWZ0OiAycHg7fVxyXG4ucC1sLTMge3BhZGRpbmctbGVmdDogM3B4O31cclxuLnAtbC00IHtwYWRkaW5nLWxlZnQ6IDRweDt9XHJcbi5wLWwtNSB7cGFkZGluZy1sZWZ0OiA1cHg7fVxyXG4ucC1sLTYge3BhZGRpbmctbGVmdDogNnB4O31cclxuLnAtbC03IHtwYWRkaW5nLWxlZnQ6IDdweDt9XHJcbi5wLWwtOCB7cGFkZGluZy1sZWZ0OiA4cHg7fVxyXG4ucC1sLTkge3BhZGRpbmctbGVmdDogOXB4O31cclxuLnAtbC0xMCB7cGFkZGluZy1sZWZ0OiAxMHB4O31cclxuLnAtbC0xMSB7cGFkZGluZy1sZWZ0OiAxMXB4O31cclxuLnAtbC0xMiB7cGFkZGluZy1sZWZ0OiAxMnB4O31cclxuLnAtbC0xMyB7cGFkZGluZy1sZWZ0OiAxM3B4O31cclxuLnAtbC0xNCB7cGFkZGluZy1sZWZ0OiAxNHB4O31cclxuLnAtbC0xNSB7cGFkZGluZy1sZWZ0OiAxNXB4O31cclxuLnAtbC0xNiB7cGFkZGluZy1sZWZ0OiAxNnB4O31cclxuLnAtbC0xNyB7cGFkZGluZy1sZWZ0OiAxN3B4O31cclxuLnAtbC0xOCB7cGFkZGluZy1sZWZ0OiAxOHB4O31cclxuLnAtbC0xOSB7cGFkZGluZy1sZWZ0OiAxOXB4O31cclxuLnAtbC0yMCB7cGFkZGluZy1sZWZ0OiAyMHB4O31cclxuLnAtbC0yMSB7cGFkZGluZy1sZWZ0OiAyMXB4O31cclxuLnAtbC0yMiB7cGFkZGluZy1sZWZ0OiAyMnB4O31cclxuLnAtbC0yMyB7cGFkZGluZy1sZWZ0OiAyM3B4O31cclxuLnAtbC0yNCB7cGFkZGluZy1sZWZ0OiAyNHB4O31cclxuLnAtbC0yNSB7cGFkZGluZy1sZWZ0OiAyNXB4O31cclxuLnAtbC0yNiB7cGFkZGluZy1sZWZ0OiAyNnB4O31cclxuLnAtbC0yNyB7cGFkZGluZy1sZWZ0OiAyN3B4O31cclxuLnAtbC0yOCB7cGFkZGluZy1sZWZ0OiAyOHB4O31cclxuLnAtbC0yOSB7cGFkZGluZy1sZWZ0OiAyOXB4O31cclxuLnAtbC0zMCB7cGFkZGluZy1sZWZ0OiAzMHB4O31cclxuLnAtbC0zMSB7cGFkZGluZy1sZWZ0OiAzMXB4O31cclxuLnAtbC0zMiB7cGFkZGluZy1sZWZ0OiAzMnB4O31cclxuLnAtbC0zMyB7cGFkZGluZy1sZWZ0OiAzM3B4O31cclxuLnAtbC0zNCB7cGFkZGluZy1sZWZ0OiAzNHB4O31cclxuLnAtbC0zNSB7cGFkZGluZy1sZWZ0OiAzNXB4O31cclxuLnAtbC0zNiB7cGFkZGluZy1sZWZ0OiAzNnB4O31cclxuLnAtbC0zNyB7cGFkZGluZy1sZWZ0OiAzN3B4O31cclxuLnAtbC0zOCB7cGFkZGluZy1sZWZ0OiAzOHB4O31cclxuLnAtbC0zOSB7cGFkZGluZy1sZWZ0OiAzOXB4O31cclxuLnAtbC00MCB7cGFkZGluZy1sZWZ0OiA0MHB4O31cclxuLnAtbC00MSB7cGFkZGluZy1sZWZ0OiA0MXB4O31cclxuLnAtbC00MiB7cGFkZGluZy1sZWZ0OiA0MnB4O31cclxuLnAtbC00MyB7cGFkZGluZy1sZWZ0OiA0M3B4O31cclxuLnAtbC00NCB7cGFkZGluZy1sZWZ0OiA0NHB4O31cclxuLnAtbC00NSB7cGFkZGluZy1sZWZ0OiA0NXB4O31cclxuLnAtbC00NiB7cGFkZGluZy1sZWZ0OiA0NnB4O31cclxuLnAtbC00NyB7cGFkZGluZy1sZWZ0OiA0N3B4O31cclxuLnAtbC00OCB7cGFkZGluZy1sZWZ0OiA0OHB4O31cclxuLnAtbC00OSB7cGFkZGluZy1sZWZ0OiA0OXB4O31cclxuLnAtbC01MCB7cGFkZGluZy1sZWZ0OiA1MHB4O31cclxuLnAtbC01MSB7cGFkZGluZy1sZWZ0OiA1MXB4O31cclxuLnAtbC01MiB7cGFkZGluZy1sZWZ0OiA1MnB4O31cclxuLnAtbC01MyB7cGFkZGluZy1sZWZ0OiA1M3B4O31cclxuLnAtbC01NCB7cGFkZGluZy1sZWZ0OiA1NHB4O31cclxuLnAtbC01NSB7cGFkZGluZy1sZWZ0OiA1NXB4O31cclxuLnAtbC01NiB7cGFkZGluZy1sZWZ0OiA1NnB4O31cclxuLnAtbC01NyB7cGFkZGluZy1sZWZ0OiA1N3B4O31cclxuLnAtbC01OCB7cGFkZGluZy1sZWZ0OiA1OHB4O31cclxuLnAtbC01OSB7cGFkZGluZy1sZWZ0OiA1OXB4O31cclxuLnAtbC02MCB7cGFkZGluZy1sZWZ0OiA2MHB4O31cclxuLnAtbC02MSB7cGFkZGluZy1sZWZ0OiA2MXB4O31cclxuLnAtbC02MiB7cGFkZGluZy1sZWZ0OiA2MnB4O31cclxuLnAtbC02MyB7cGFkZGluZy1sZWZ0OiA2M3B4O31cclxuLnAtbC02NCB7cGFkZGluZy1sZWZ0OiA2NHB4O31cclxuLnAtbC02NSB7cGFkZGluZy1sZWZ0OiA2NXB4O31cclxuLnAtbC02NiB7cGFkZGluZy1sZWZ0OiA2NnB4O31cclxuLnAtbC02NyB7cGFkZGluZy1sZWZ0OiA2N3B4O31cclxuLnAtbC02OCB7cGFkZGluZy1sZWZ0OiA2OHB4O31cclxuLnAtbC02OSB7cGFkZGluZy1sZWZ0OiA2OXB4O31cclxuLnAtbC03MCB7cGFkZGluZy1sZWZ0OiA3MHB4O31cclxuLnAtbC03MSB7cGFkZGluZy1sZWZ0OiA3MXB4O31cclxuLnAtbC03MiB7cGFkZGluZy1sZWZ0OiA3MnB4O31cclxuLnAtbC03MyB7cGFkZGluZy1sZWZ0OiA3M3B4O31cclxuLnAtbC03NCB7cGFkZGluZy1sZWZ0OiA3NHB4O31cclxuLnAtbC03NSB7cGFkZGluZy1sZWZ0OiA3NXB4O31cclxuLnAtbC03NiB7cGFkZGluZy1sZWZ0OiA3NnB4O31cclxuLnAtbC03NyB7cGFkZGluZy1sZWZ0OiA3N3B4O31cclxuLnAtbC03OCB7cGFkZGluZy1sZWZ0OiA3OHB4O31cclxuLnAtbC03OSB7cGFkZGluZy1sZWZ0OiA3OXB4O31cclxuLnAtbC04MCB7cGFkZGluZy1sZWZ0OiA4MHB4O31cclxuLnAtbC04MSB7cGFkZGluZy1sZWZ0OiA4MXB4O31cclxuLnAtbC04MiB7cGFkZGluZy1sZWZ0OiA4MnB4O31cclxuLnAtbC04MyB7cGFkZGluZy1sZWZ0OiA4M3B4O31cclxuLnAtbC04NCB7cGFkZGluZy1sZWZ0OiA4NHB4O31cclxuLnAtbC04NSB7cGFkZGluZy1sZWZ0OiA4NXB4O31cclxuLnAtbC04NiB7cGFkZGluZy1sZWZ0OiA4NnB4O31cclxuLnAtbC04NyB7cGFkZGluZy1sZWZ0OiA4N3B4O31cclxuLnAtbC04OCB7cGFkZGluZy1sZWZ0OiA4OHB4O31cclxuLnAtbC04OSB7cGFkZGluZy1sZWZ0OiA4OXB4O31cclxuLnAtbC05MCB7cGFkZGluZy1sZWZ0OiA5MHB4O31cclxuLnAtbC05MSB7cGFkZGluZy1sZWZ0OiA5MXB4O31cclxuLnAtbC05MiB7cGFkZGluZy1sZWZ0OiA5MnB4O31cclxuLnAtbC05MyB7cGFkZGluZy1sZWZ0OiA5M3B4O31cclxuLnAtbC05NCB7cGFkZGluZy1sZWZ0OiA5NHB4O31cclxuLnAtbC05NSB7cGFkZGluZy1sZWZ0OiA5NXB4O31cclxuLnAtbC05NiB7cGFkZGluZy1sZWZ0OiA5NnB4O31cclxuLnAtbC05NyB7cGFkZGluZy1sZWZ0OiA5N3B4O31cclxuLnAtbC05OCB7cGFkZGluZy1sZWZ0OiA5OHB4O31cclxuLnAtbC05OSB7cGFkZGluZy1sZWZ0OiA5OXB4O31cclxuLnAtbC0xMDAge3BhZGRpbmctbGVmdDogMTAwcHg7fVxyXG4ucC1sLTEwMSB7cGFkZGluZy1sZWZ0OiAxMDFweDt9XHJcbi5wLWwtMTAyIHtwYWRkaW5nLWxlZnQ6IDEwMnB4O31cclxuLnAtbC0xMDMge3BhZGRpbmctbGVmdDogMTAzcHg7fVxyXG4ucC1sLTEwNCB7cGFkZGluZy1sZWZ0OiAxMDRweDt9XHJcbi5wLWwtMTA1IHtwYWRkaW5nLWxlZnQ6IDEwNXB4O31cclxuLnAtbC0xMDYge3BhZGRpbmctbGVmdDogMTA2cHg7fVxyXG4ucC1sLTEwNyB7cGFkZGluZy1sZWZ0OiAxMDdweDt9XHJcbi5wLWwtMTA4IHtwYWRkaW5nLWxlZnQ6IDEwOHB4O31cclxuLnAtbC0xMDkge3BhZGRpbmctbGVmdDogMTA5cHg7fVxyXG4ucC1sLTExMCB7cGFkZGluZy1sZWZ0OiAxMTBweDt9XHJcbi5wLWwtMTExIHtwYWRkaW5nLWxlZnQ6IDExMXB4O31cclxuLnAtbC0xMTIge3BhZGRpbmctbGVmdDogMTEycHg7fVxyXG4ucC1sLTExMyB7cGFkZGluZy1sZWZ0OiAxMTNweDt9XHJcbi5wLWwtMTE0IHtwYWRkaW5nLWxlZnQ6IDExNHB4O31cclxuLnAtbC0xMTUge3BhZGRpbmctbGVmdDogMTE1cHg7fVxyXG4ucC1sLTExNiB7cGFkZGluZy1sZWZ0OiAxMTZweDt9XHJcbi5wLWwtMTE3IHtwYWRkaW5nLWxlZnQ6IDExN3B4O31cclxuLnAtbC0xMTgge3BhZGRpbmctbGVmdDogMTE4cHg7fVxyXG4ucC1sLTExOSB7cGFkZGluZy1sZWZ0OiAxMTlweDt9XHJcbi5wLWwtMTIwIHtwYWRkaW5nLWxlZnQ6IDEyMHB4O31cclxuLnAtbC0xMjEge3BhZGRpbmctbGVmdDogMTIxcHg7fVxyXG4ucC1sLTEyMiB7cGFkZGluZy1sZWZ0OiAxMjJweDt9XHJcbi5wLWwtMTIzIHtwYWRkaW5nLWxlZnQ6IDEyM3B4O31cclxuLnAtbC0xMjQge3BhZGRpbmctbGVmdDogMTI0cHg7fVxyXG4ucC1sLTEyNSB7cGFkZGluZy1sZWZ0OiAxMjVweDt9XHJcbi5wLWwtMTI2IHtwYWRkaW5nLWxlZnQ6IDEyNnB4O31cclxuLnAtbC0xMjcge3BhZGRpbmctbGVmdDogMTI3cHg7fVxyXG4ucC1sLTEyOCB7cGFkZGluZy1sZWZ0OiAxMjhweDt9XHJcbi5wLWwtMTI5IHtwYWRkaW5nLWxlZnQ6IDEyOXB4O31cclxuLnAtbC0xMzAge3BhZGRpbmctbGVmdDogMTMwcHg7fVxyXG4ucC1sLTEzMSB7cGFkZGluZy1sZWZ0OiAxMzFweDt9XHJcbi5wLWwtMTMyIHtwYWRkaW5nLWxlZnQ6IDEzMnB4O31cclxuLnAtbC0xMzMge3BhZGRpbmctbGVmdDogMTMzcHg7fVxyXG4ucC1sLTEzNCB7cGFkZGluZy1sZWZ0OiAxMzRweDt9XHJcbi5wLWwtMTM1IHtwYWRkaW5nLWxlZnQ6IDEzNXB4O31cclxuLnAtbC0xMzYge3BhZGRpbmctbGVmdDogMTM2cHg7fVxyXG4ucC1sLTEzNyB7cGFkZGluZy1sZWZ0OiAxMzdweDt9XHJcbi5wLWwtMTM4IHtwYWRkaW5nLWxlZnQ6IDEzOHB4O31cclxuLnAtbC0xMzkge3BhZGRpbmctbGVmdDogMTM5cHg7fVxyXG4ucC1sLTE0MCB7cGFkZGluZy1sZWZ0OiAxNDBweDt9XHJcbi5wLWwtMTQxIHtwYWRkaW5nLWxlZnQ6IDE0MXB4O31cclxuLnAtbC0xNDIge3BhZGRpbmctbGVmdDogMTQycHg7fVxyXG4ucC1sLTE0MyB7cGFkZGluZy1sZWZ0OiAxNDNweDt9XHJcbi5wLWwtMTQ0IHtwYWRkaW5nLWxlZnQ6IDE0NHB4O31cclxuLnAtbC0xNDUge3BhZGRpbmctbGVmdDogMTQ1cHg7fVxyXG4ucC1sLTE0NiB7cGFkZGluZy1sZWZ0OiAxNDZweDt9XHJcbi5wLWwtMTQ3IHtwYWRkaW5nLWxlZnQ6IDE0N3B4O31cclxuLnAtbC0xNDgge3BhZGRpbmctbGVmdDogMTQ4cHg7fVxyXG4ucC1sLTE0OSB7cGFkZGluZy1sZWZ0OiAxNDlweDt9XHJcbi5wLWwtMTUwIHtwYWRkaW5nLWxlZnQ6IDE1MHB4O31cclxuLnAtbC0xNTEge3BhZGRpbmctbGVmdDogMTUxcHg7fVxyXG4ucC1sLTE1MiB7cGFkZGluZy1sZWZ0OiAxNTJweDt9XHJcbi5wLWwtMTUzIHtwYWRkaW5nLWxlZnQ6IDE1M3B4O31cclxuLnAtbC0xNTQge3BhZGRpbmctbGVmdDogMTU0cHg7fVxyXG4ucC1sLTE1NSB7cGFkZGluZy1sZWZ0OiAxNTVweDt9XHJcbi5wLWwtMTU2IHtwYWRkaW5nLWxlZnQ6IDE1NnB4O31cclxuLnAtbC0xNTcge3BhZGRpbmctbGVmdDogMTU3cHg7fVxyXG4ucC1sLTE1OCB7cGFkZGluZy1sZWZ0OiAxNThweDt9XHJcbi5wLWwtMTU5IHtwYWRkaW5nLWxlZnQ6IDE1OXB4O31cclxuLnAtbC0xNjAge3BhZGRpbmctbGVmdDogMTYwcHg7fVxyXG4ucC1sLTE2MSB7cGFkZGluZy1sZWZ0OiAxNjFweDt9XHJcbi5wLWwtMTYyIHtwYWRkaW5nLWxlZnQ6IDE2MnB4O31cclxuLnAtbC0xNjMge3BhZGRpbmctbGVmdDogMTYzcHg7fVxyXG4ucC1sLTE2NCB7cGFkZGluZy1sZWZ0OiAxNjRweDt9XHJcbi5wLWwtMTY1IHtwYWRkaW5nLWxlZnQ6IDE2NXB4O31cclxuLnAtbC0xNjYge3BhZGRpbmctbGVmdDogMTY2cHg7fVxyXG4ucC1sLTE2NyB7cGFkZGluZy1sZWZ0OiAxNjdweDt9XHJcbi5wLWwtMTY4IHtwYWRkaW5nLWxlZnQ6IDE2OHB4O31cclxuLnAtbC0xNjkge3BhZGRpbmctbGVmdDogMTY5cHg7fVxyXG4ucC1sLTE3MCB7cGFkZGluZy1sZWZ0OiAxNzBweDt9XHJcbi5wLWwtMTcxIHtwYWRkaW5nLWxlZnQ6IDE3MXB4O31cclxuLnAtbC0xNzIge3BhZGRpbmctbGVmdDogMTcycHg7fVxyXG4ucC1sLTE3MyB7cGFkZGluZy1sZWZ0OiAxNzNweDt9XHJcbi5wLWwtMTc0IHtwYWRkaW5nLWxlZnQ6IDE3NHB4O31cclxuLnAtbC0xNzUge3BhZGRpbmctbGVmdDogMTc1cHg7fVxyXG4ucC1sLTE3NiB7cGFkZGluZy1sZWZ0OiAxNzZweDt9XHJcbi5wLWwtMTc3IHtwYWRkaW5nLWxlZnQ6IDE3N3B4O31cclxuLnAtbC0xNzgge3BhZGRpbmctbGVmdDogMTc4cHg7fVxyXG4ucC1sLTE3OSB7cGFkZGluZy1sZWZ0OiAxNzlweDt9XHJcbi5wLWwtMTgwIHtwYWRkaW5nLWxlZnQ6IDE4MHB4O31cclxuLnAtbC0xODEge3BhZGRpbmctbGVmdDogMTgxcHg7fVxyXG4ucC1sLTE4MiB7cGFkZGluZy1sZWZ0OiAxODJweDt9XHJcbi5wLWwtMTgzIHtwYWRkaW5nLWxlZnQ6IDE4M3B4O31cclxuLnAtbC0xODQge3BhZGRpbmctbGVmdDogMTg0cHg7fVxyXG4ucC1sLTE4NSB7cGFkZGluZy1sZWZ0OiAxODVweDt9XHJcbi5wLWwtMTg2IHtwYWRkaW5nLWxlZnQ6IDE4NnB4O31cclxuLnAtbC0xODcge3BhZGRpbmctbGVmdDogMTg3cHg7fVxyXG4ucC1sLTE4OCB7cGFkZGluZy1sZWZ0OiAxODhweDt9XHJcbi5wLWwtMTg5IHtwYWRkaW5nLWxlZnQ6IDE4OXB4O31cclxuLnAtbC0xOTAge3BhZGRpbmctbGVmdDogMTkwcHg7fVxyXG4ucC1sLTE5MSB7cGFkZGluZy1sZWZ0OiAxOTFweDt9XHJcbi5wLWwtMTkyIHtwYWRkaW5nLWxlZnQ6IDE5MnB4O31cclxuLnAtbC0xOTMge3BhZGRpbmctbGVmdDogMTkzcHg7fVxyXG4ucC1sLTE5NCB7cGFkZGluZy1sZWZ0OiAxOTRweDt9XHJcbi5wLWwtMTk1IHtwYWRkaW5nLWxlZnQ6IDE5NXB4O31cclxuLnAtbC0xOTYge3BhZGRpbmctbGVmdDogMTk2cHg7fVxyXG4ucC1sLTE5NyB7cGFkZGluZy1sZWZ0OiAxOTdweDt9XHJcbi5wLWwtMTk4IHtwYWRkaW5nLWxlZnQ6IDE5OHB4O31cclxuLnAtbC0xOTkge3BhZGRpbmctbGVmdDogMTk5cHg7fVxyXG4ucC1sLTIwMCB7cGFkZGluZy1sZWZ0OiAyMDBweDt9XHJcbi5wLWwtMjAxIHtwYWRkaW5nLWxlZnQ6IDIwMXB4O31cclxuLnAtbC0yMDIge3BhZGRpbmctbGVmdDogMjAycHg7fVxyXG4ucC1sLTIwMyB7cGFkZGluZy1sZWZ0OiAyMDNweDt9XHJcbi5wLWwtMjA0IHtwYWRkaW5nLWxlZnQ6IDIwNHB4O31cclxuLnAtbC0yMDUge3BhZGRpbmctbGVmdDogMjA1cHg7fVxyXG4ucC1sLTIwNiB7cGFkZGluZy1sZWZ0OiAyMDZweDt9XHJcbi5wLWwtMjA3IHtwYWRkaW5nLWxlZnQ6IDIwN3B4O31cclxuLnAtbC0yMDgge3BhZGRpbmctbGVmdDogMjA4cHg7fVxyXG4ucC1sLTIwOSB7cGFkZGluZy1sZWZ0OiAyMDlweDt9XHJcbi5wLWwtMjEwIHtwYWRkaW5nLWxlZnQ6IDIxMHB4O31cclxuLnAtbC0yMTEge3BhZGRpbmctbGVmdDogMjExcHg7fVxyXG4ucC1sLTIxMiB7cGFkZGluZy1sZWZ0OiAyMTJweDt9XHJcbi5wLWwtMjEzIHtwYWRkaW5nLWxlZnQ6IDIxM3B4O31cclxuLnAtbC0yMTQge3BhZGRpbmctbGVmdDogMjE0cHg7fVxyXG4ucC1sLTIxNSB7cGFkZGluZy1sZWZ0OiAyMTVweDt9XHJcbi5wLWwtMjE2IHtwYWRkaW5nLWxlZnQ6IDIxNnB4O31cclxuLnAtbC0yMTcge3BhZGRpbmctbGVmdDogMjE3cHg7fVxyXG4ucC1sLTIxOCB7cGFkZGluZy1sZWZ0OiAyMThweDt9XHJcbi5wLWwtMjE5IHtwYWRkaW5nLWxlZnQ6IDIxOXB4O31cclxuLnAtbC0yMjAge3BhZGRpbmctbGVmdDogMjIwcHg7fVxyXG4ucC1sLTIyMSB7cGFkZGluZy1sZWZ0OiAyMjFweDt9XHJcbi5wLWwtMjIyIHtwYWRkaW5nLWxlZnQ6IDIyMnB4O31cclxuLnAtbC0yMjMge3BhZGRpbmctbGVmdDogMjIzcHg7fVxyXG4ucC1sLTIyNCB7cGFkZGluZy1sZWZ0OiAyMjRweDt9XHJcbi5wLWwtMjI1IHtwYWRkaW5nLWxlZnQ6IDIyNXB4O31cclxuLnAtbC0yMjYge3BhZGRpbmctbGVmdDogMjI2cHg7fVxyXG4ucC1sLTIyNyB7cGFkZGluZy1sZWZ0OiAyMjdweDt9XHJcbi5wLWwtMjI4IHtwYWRkaW5nLWxlZnQ6IDIyOHB4O31cclxuLnAtbC0yMjkge3BhZGRpbmctbGVmdDogMjI5cHg7fVxyXG4ucC1sLTIzMCB7cGFkZGluZy1sZWZ0OiAyMzBweDt9XHJcbi5wLWwtMjMxIHtwYWRkaW5nLWxlZnQ6IDIzMXB4O31cclxuLnAtbC0yMzIge3BhZGRpbmctbGVmdDogMjMycHg7fVxyXG4ucC1sLTIzMyB7cGFkZGluZy1sZWZ0OiAyMzNweDt9XHJcbi5wLWwtMjM0IHtwYWRkaW5nLWxlZnQ6IDIzNHB4O31cclxuLnAtbC0yMzUge3BhZGRpbmctbGVmdDogMjM1cHg7fVxyXG4ucC1sLTIzNiB7cGFkZGluZy1sZWZ0OiAyMzZweDt9XHJcbi5wLWwtMjM3IHtwYWRkaW5nLWxlZnQ6IDIzN3B4O31cclxuLnAtbC0yMzgge3BhZGRpbmctbGVmdDogMjM4cHg7fVxyXG4ucC1sLTIzOSB7cGFkZGluZy1sZWZ0OiAyMzlweDt9XHJcbi5wLWwtMjQwIHtwYWRkaW5nLWxlZnQ6IDI0MHB4O31cclxuLnAtbC0yNDEge3BhZGRpbmctbGVmdDogMjQxcHg7fVxyXG4ucC1sLTI0MiB7cGFkZGluZy1sZWZ0OiAyNDJweDt9XHJcbi5wLWwtMjQzIHtwYWRkaW5nLWxlZnQ6IDI0M3B4O31cclxuLnAtbC0yNDQge3BhZGRpbmctbGVmdDogMjQ0cHg7fVxyXG4ucC1sLTI0NSB7cGFkZGluZy1sZWZ0OiAyNDVweDt9XHJcbi5wLWwtMjQ2IHtwYWRkaW5nLWxlZnQ6IDI0NnB4O31cclxuLnAtbC0yNDcge3BhZGRpbmctbGVmdDogMjQ3cHg7fVxyXG4ucC1sLTI0OCB7cGFkZGluZy1sZWZ0OiAyNDhweDt9XHJcbi5wLWwtMjQ5IHtwYWRkaW5nLWxlZnQ6IDI0OXB4O31cclxuLnAtbC0yNTAge3BhZGRpbmctbGVmdDogMjUwcHg7fVxyXG4ucC1yLTAge3BhZGRpbmctcmlnaHQ6IDBweDt9XHJcbi5wLXItMSB7cGFkZGluZy1yaWdodDogMXB4O31cclxuLnAtci0yIHtwYWRkaW5nLXJpZ2h0OiAycHg7fVxyXG4ucC1yLTMge3BhZGRpbmctcmlnaHQ6IDNweDt9XHJcbi5wLXItNCB7cGFkZGluZy1yaWdodDogNHB4O31cclxuLnAtci01IHtwYWRkaW5nLXJpZ2h0OiA1cHg7fVxyXG4ucC1yLTYge3BhZGRpbmctcmlnaHQ6IDZweDt9XHJcbi5wLXItNyB7cGFkZGluZy1yaWdodDogN3B4O31cclxuLnAtci04IHtwYWRkaW5nLXJpZ2h0OiA4cHg7fVxyXG4ucC1yLTkge3BhZGRpbmctcmlnaHQ6IDlweDt9XHJcbi5wLXItMTAge3BhZGRpbmctcmlnaHQ6IDEwcHg7fVxyXG4ucC1yLTExIHtwYWRkaW5nLXJpZ2h0OiAxMXB4O31cclxuLnAtci0xMiB7cGFkZGluZy1yaWdodDogMTJweDt9XHJcbi5wLXItMTMge3BhZGRpbmctcmlnaHQ6IDEzcHg7fVxyXG4ucC1yLTE0IHtwYWRkaW5nLXJpZ2h0OiAxNHB4O31cclxuLnAtci0xNSB7cGFkZGluZy1yaWdodDogMTVweDt9XHJcbi5wLXItMTYge3BhZGRpbmctcmlnaHQ6IDE2cHg7fVxyXG4ucC1yLTE3IHtwYWRkaW5nLXJpZ2h0OiAxN3B4O31cclxuLnAtci0xOCB7cGFkZGluZy1yaWdodDogMThweDt9XHJcbi5wLXItMTkge3BhZGRpbmctcmlnaHQ6IDE5cHg7fVxyXG4ucC1yLTIwIHtwYWRkaW5nLXJpZ2h0OiAyMHB4O31cclxuLnAtci0yMSB7cGFkZGluZy1yaWdodDogMjFweDt9XHJcbi5wLXItMjIge3BhZGRpbmctcmlnaHQ6IDIycHg7fVxyXG4ucC1yLTIzIHtwYWRkaW5nLXJpZ2h0OiAyM3B4O31cclxuLnAtci0yNCB7cGFkZGluZy1yaWdodDogMjRweDt9XHJcbi5wLXItMjUge3BhZGRpbmctcmlnaHQ6IDI1cHg7fVxyXG4ucC1yLTI2IHtwYWRkaW5nLXJpZ2h0OiAyNnB4O31cclxuLnAtci0yNyB7cGFkZGluZy1yaWdodDogMjdweDt9XHJcbi5wLXItMjgge3BhZGRpbmctcmlnaHQ6IDI4cHg7fVxyXG4ucC1yLTI5IHtwYWRkaW5nLXJpZ2h0OiAyOXB4O31cclxuLnAtci0zMCB7cGFkZGluZy1yaWdodDogMzBweDt9XHJcbi5wLXItMzEge3BhZGRpbmctcmlnaHQ6IDMxcHg7fVxyXG4ucC1yLTMyIHtwYWRkaW5nLXJpZ2h0OiAzMnB4O31cclxuLnAtci0zMyB7cGFkZGluZy1yaWdodDogMzNweDt9XHJcbi5wLXItMzQge3BhZGRpbmctcmlnaHQ6IDM0cHg7fVxyXG4ucC1yLTM1IHtwYWRkaW5nLXJpZ2h0OiAzNXB4O31cclxuLnAtci0zNiB7cGFkZGluZy1yaWdodDogMzZweDt9XHJcbi5wLXItMzcge3BhZGRpbmctcmlnaHQ6IDM3cHg7fVxyXG4ucC1yLTM4IHtwYWRkaW5nLXJpZ2h0OiAzOHB4O31cclxuLnAtci0zOSB7cGFkZGluZy1yaWdodDogMzlweDt9XHJcbi5wLXItNDAge3BhZGRpbmctcmlnaHQ6IDQwcHg7fVxyXG4ucC1yLTQxIHtwYWRkaW5nLXJpZ2h0OiA0MXB4O31cclxuLnAtci00MiB7cGFkZGluZy1yaWdodDogNDJweDt9XHJcbi5wLXItNDMge3BhZGRpbmctcmlnaHQ6IDQzcHg7fVxyXG4ucC1yLTQ0IHtwYWRkaW5nLXJpZ2h0OiA0NHB4O31cclxuLnAtci00NSB7cGFkZGluZy1yaWdodDogNDVweDt9XHJcbi5wLXItNDYge3BhZGRpbmctcmlnaHQ6IDQ2cHg7fVxyXG4ucC1yLTQ3IHtwYWRkaW5nLXJpZ2h0OiA0N3B4O31cclxuLnAtci00OCB7cGFkZGluZy1yaWdodDogNDhweDt9XHJcbi5wLXItNDkge3BhZGRpbmctcmlnaHQ6IDQ5cHg7fVxyXG4ucC1yLTUwIHtwYWRkaW5nLXJpZ2h0OiA1MHB4O31cclxuLnAtci01MSB7cGFkZGluZy1yaWdodDogNTFweDt9XHJcbi5wLXItNTIge3BhZGRpbmctcmlnaHQ6IDUycHg7fVxyXG4ucC1yLTUzIHtwYWRkaW5nLXJpZ2h0OiA1M3B4O31cclxuLnAtci01NCB7cGFkZGluZy1yaWdodDogNTRweDt9XHJcbi5wLXItNTUge3BhZGRpbmctcmlnaHQ6IDU1cHg7fVxyXG4ucC1yLTU2IHtwYWRkaW5nLXJpZ2h0OiA1NnB4O31cclxuLnAtci01NyB7cGFkZGluZy1yaWdodDogNTdweDt9XHJcbi5wLXItNTgge3BhZGRpbmctcmlnaHQ6IDU4cHg7fVxyXG4ucC1yLTU5IHtwYWRkaW5nLXJpZ2h0OiA1OXB4O31cclxuLnAtci02MCB7cGFkZGluZy1yaWdodDogNjBweDt9XHJcbi5wLXItNjEge3BhZGRpbmctcmlnaHQ6IDYxcHg7fVxyXG4ucC1yLTYyIHtwYWRkaW5nLXJpZ2h0OiA2MnB4O31cclxuLnAtci02MyB7cGFkZGluZy1yaWdodDogNjNweDt9XHJcbi5wLXItNjQge3BhZGRpbmctcmlnaHQ6IDY0cHg7fVxyXG4ucC1yLTY1IHtwYWRkaW5nLXJpZ2h0OiA2NXB4O31cclxuLnAtci02NiB7cGFkZGluZy1yaWdodDogNjZweDt9XHJcbi5wLXItNjcge3BhZGRpbmctcmlnaHQ6IDY3cHg7fVxyXG4ucC1yLTY4IHtwYWRkaW5nLXJpZ2h0OiA2OHB4O31cclxuLnAtci02OSB7cGFkZGluZy1yaWdodDogNjlweDt9XHJcbi5wLXItNzAge3BhZGRpbmctcmlnaHQ6IDcwcHg7fVxyXG4ucC1yLTcxIHtwYWRkaW5nLXJpZ2h0OiA3MXB4O31cclxuLnAtci03MiB7cGFkZGluZy1yaWdodDogNzJweDt9XHJcbi5wLXItNzMge3BhZGRpbmctcmlnaHQ6IDczcHg7fVxyXG4ucC1yLTc0IHtwYWRkaW5nLXJpZ2h0OiA3NHB4O31cclxuLnAtci03NSB7cGFkZGluZy1yaWdodDogNzVweDt9XHJcbi5wLXItNzYge3BhZGRpbmctcmlnaHQ6IDc2cHg7fVxyXG4ucC1yLTc3IHtwYWRkaW5nLXJpZ2h0OiA3N3B4O31cclxuLnAtci03OCB7cGFkZGluZy1yaWdodDogNzhweDt9XHJcbi5wLXItNzkge3BhZGRpbmctcmlnaHQ6IDc5cHg7fVxyXG4ucC1yLTgwIHtwYWRkaW5nLXJpZ2h0OiA4MHB4O31cclxuLnAtci04MSB7cGFkZGluZy1yaWdodDogODFweDt9XHJcbi5wLXItODIge3BhZGRpbmctcmlnaHQ6IDgycHg7fVxyXG4ucC1yLTgzIHtwYWRkaW5nLXJpZ2h0OiA4M3B4O31cclxuLnAtci04NCB7cGFkZGluZy1yaWdodDogODRweDt9XHJcbi5wLXItODUge3BhZGRpbmctcmlnaHQ6IDg1cHg7fVxyXG4ucC1yLTg2IHtwYWRkaW5nLXJpZ2h0OiA4NnB4O31cclxuLnAtci04NyB7cGFkZGluZy1yaWdodDogODdweDt9XHJcbi5wLXItODgge3BhZGRpbmctcmlnaHQ6IDg4cHg7fVxyXG4ucC1yLTg5IHtwYWRkaW5nLXJpZ2h0OiA4OXB4O31cclxuLnAtci05MCB7cGFkZGluZy1yaWdodDogOTBweDt9XHJcbi5wLXItOTEge3BhZGRpbmctcmlnaHQ6IDkxcHg7fVxyXG4ucC1yLTkyIHtwYWRkaW5nLXJpZ2h0OiA5MnB4O31cclxuLnAtci05MyB7cGFkZGluZy1yaWdodDogOTNweDt9XHJcbi5wLXItOTQge3BhZGRpbmctcmlnaHQ6IDk0cHg7fVxyXG4ucC1yLTk1IHtwYWRkaW5nLXJpZ2h0OiA5NXB4O31cclxuLnAtci05NiB7cGFkZGluZy1yaWdodDogOTZweDt9XHJcbi5wLXItOTcge3BhZGRpbmctcmlnaHQ6IDk3cHg7fVxyXG4ucC1yLTk4IHtwYWRkaW5nLXJpZ2h0OiA5OHB4O31cclxuLnAtci05OSB7cGFkZGluZy1yaWdodDogOTlweDt9XHJcbi5wLXItMTAwIHtwYWRkaW5nLXJpZ2h0OiAxMDBweDt9XHJcbi5wLXItMTAxIHtwYWRkaW5nLXJpZ2h0OiAxMDFweDt9XHJcbi5wLXItMTAyIHtwYWRkaW5nLXJpZ2h0OiAxMDJweDt9XHJcbi5wLXItMTAzIHtwYWRkaW5nLXJpZ2h0OiAxMDNweDt9XHJcbi5wLXItMTA0IHtwYWRkaW5nLXJpZ2h0OiAxMDRweDt9XHJcbi5wLXItMTA1IHtwYWRkaW5nLXJpZ2h0OiAxMDVweDt9XHJcbi5wLXItMTA2IHtwYWRkaW5nLXJpZ2h0OiAxMDZweDt9XHJcbi5wLXItMTA3IHtwYWRkaW5nLXJpZ2h0OiAxMDdweDt9XHJcbi5wLXItMTA4IHtwYWRkaW5nLXJpZ2h0OiAxMDhweDt9XHJcbi5wLXItMTA5IHtwYWRkaW5nLXJpZ2h0OiAxMDlweDt9XHJcbi5wLXItMTEwIHtwYWRkaW5nLXJpZ2h0OiAxMTBweDt9XHJcbi5wLXItMTExIHtwYWRkaW5nLXJpZ2h0OiAxMTFweDt9XHJcbi5wLXItMTEyIHtwYWRkaW5nLXJpZ2h0OiAxMTJweDt9XHJcbi5wLXItMTEzIHtwYWRkaW5nLXJpZ2h0OiAxMTNweDt9XHJcbi5wLXItMTE0IHtwYWRkaW5nLXJpZ2h0OiAxMTRweDt9XHJcbi5wLXItMTE1IHtwYWRkaW5nLXJpZ2h0OiAxMTVweDt9XHJcbi5wLXItMTE2IHtwYWRkaW5nLXJpZ2h0OiAxMTZweDt9XHJcbi5wLXItMTE3IHtwYWRkaW5nLXJpZ2h0OiAxMTdweDt9XHJcbi5wLXItMTE4IHtwYWRkaW5nLXJpZ2h0OiAxMThweDt9XHJcbi5wLXItMTE5IHtwYWRkaW5nLXJpZ2h0OiAxMTlweDt9XHJcbi5wLXItMTIwIHtwYWRkaW5nLXJpZ2h0OiAxMjBweDt9XHJcbi5wLXItMTIxIHtwYWRkaW5nLXJpZ2h0OiAxMjFweDt9XHJcbi5wLXItMTIyIHtwYWRkaW5nLXJpZ2h0OiAxMjJweDt9XHJcbi5wLXItMTIzIHtwYWRkaW5nLXJpZ2h0OiAxMjNweDt9XHJcbi5wLXItMTI0IHtwYWRkaW5nLXJpZ2h0OiAxMjRweDt9XHJcbi5wLXItMTI1IHtwYWRkaW5nLXJpZ2h0OiAxMjVweDt9XHJcbi5wLXItMTI2IHtwYWRkaW5nLXJpZ2h0OiAxMjZweDt9XHJcbi5wLXItMTI3IHtwYWRkaW5nLXJpZ2h0OiAxMjdweDt9XHJcbi5wLXItMTI4IHtwYWRkaW5nLXJpZ2h0OiAxMjhweDt9XHJcbi5wLXItMTI5IHtwYWRkaW5nLXJpZ2h0OiAxMjlweDt9XHJcbi5wLXItMTMwIHtwYWRkaW5nLXJpZ2h0OiAxMzBweDt9XHJcbi5wLXItMTMxIHtwYWRkaW5nLXJpZ2h0OiAxMzFweDt9XHJcbi5wLXItMTMyIHtwYWRkaW5nLXJpZ2h0OiAxMzJweDt9XHJcbi5wLXItMTMzIHtwYWRkaW5nLXJpZ2h0OiAxMzNweDt9XHJcbi5wLXItMTM0IHtwYWRkaW5nLXJpZ2h0OiAxMzRweDt9XHJcbi5wLXItMTM1IHtwYWRkaW5nLXJpZ2h0OiAxMzVweDt9XHJcbi5wLXItMTM2IHtwYWRkaW5nLXJpZ2h0OiAxMzZweDt9XHJcbi5wLXItMTM3IHtwYWRkaW5nLXJpZ2h0OiAxMzdweDt9XHJcbi5wLXItMTM4IHtwYWRkaW5nLXJpZ2h0OiAxMzhweDt9XHJcbi5wLXItMTM5IHtwYWRkaW5nLXJpZ2h0OiAxMzlweDt9XHJcbi5wLXItMTQwIHtwYWRkaW5nLXJpZ2h0OiAxNDBweDt9XHJcbi5wLXItMTQxIHtwYWRkaW5nLXJpZ2h0OiAxNDFweDt9XHJcbi5wLXItMTQyIHtwYWRkaW5nLXJpZ2h0OiAxNDJweDt9XHJcbi5wLXItMTQzIHtwYWRkaW5nLXJpZ2h0OiAxNDNweDt9XHJcbi5wLXItMTQ0IHtwYWRkaW5nLXJpZ2h0OiAxNDRweDt9XHJcbi5wLXItMTQ1IHtwYWRkaW5nLXJpZ2h0OiAxNDVweDt9XHJcbi5wLXItMTQ2IHtwYWRkaW5nLXJpZ2h0OiAxNDZweDt9XHJcbi5wLXItMTQ3IHtwYWRkaW5nLXJpZ2h0OiAxNDdweDt9XHJcbi5wLXItMTQ4IHtwYWRkaW5nLXJpZ2h0OiAxNDhweDt9XHJcbi5wLXItMTQ5IHtwYWRkaW5nLXJpZ2h0OiAxNDlweDt9XHJcbi5wLXItMTUwIHtwYWRkaW5nLXJpZ2h0OiAxNTBweDt9XHJcbi5wLXItMTUxIHtwYWRkaW5nLXJpZ2h0OiAxNTFweDt9XHJcbi5wLXItMTUyIHtwYWRkaW5nLXJpZ2h0OiAxNTJweDt9XHJcbi5wLXItMTUzIHtwYWRkaW5nLXJpZ2h0OiAxNTNweDt9XHJcbi5wLXItMTU0IHtwYWRkaW5nLXJpZ2h0OiAxNTRweDt9XHJcbi5wLXItMTU1IHtwYWRkaW5nLXJpZ2h0OiAxNTVweDt9XHJcbi5wLXItMTU2IHtwYWRkaW5nLXJpZ2h0OiAxNTZweDt9XHJcbi5wLXItMTU3IHtwYWRkaW5nLXJpZ2h0OiAxNTdweDt9XHJcbi5wLXItMTU4IHtwYWRkaW5nLXJpZ2h0OiAxNThweDt9XHJcbi5wLXItMTU5IHtwYWRkaW5nLXJpZ2h0OiAxNTlweDt9XHJcbi5wLXItMTYwIHtwYWRkaW5nLXJpZ2h0OiAxNjBweDt9XHJcbi5wLXItMTYxIHtwYWRkaW5nLXJpZ2h0OiAxNjFweDt9XHJcbi5wLXItMTYyIHtwYWRkaW5nLXJpZ2h0OiAxNjJweDt9XHJcbi5wLXItMTYzIHtwYWRkaW5nLXJpZ2h0OiAxNjNweDt9XHJcbi5wLXItMTY0IHtwYWRkaW5nLXJpZ2h0OiAxNjRweDt9XHJcbi5wLXItMTY1IHtwYWRkaW5nLXJpZ2h0OiAxNjVweDt9XHJcbi5wLXItMTY2IHtwYWRkaW5nLXJpZ2h0OiAxNjZweDt9XHJcbi5wLXItMTY3IHtwYWRkaW5nLXJpZ2h0OiAxNjdweDt9XHJcbi5wLXItMTY4IHtwYWRkaW5nLXJpZ2h0OiAxNjhweDt9XHJcbi5wLXItMTY5IHtwYWRkaW5nLXJpZ2h0OiAxNjlweDt9XHJcbi5wLXItMTcwIHtwYWRkaW5nLXJpZ2h0OiAxNzBweDt9XHJcbi5wLXItMTcxIHtwYWRkaW5nLXJpZ2h0OiAxNzFweDt9XHJcbi5wLXItMTcyIHtwYWRkaW5nLXJpZ2h0OiAxNzJweDt9XHJcbi5wLXItMTczIHtwYWRkaW5nLXJpZ2h0OiAxNzNweDt9XHJcbi5wLXItMTc0IHtwYWRkaW5nLXJpZ2h0OiAxNzRweDt9XHJcbi5wLXItMTc1IHtwYWRkaW5nLXJpZ2h0OiAxNzVweDt9XHJcbi5wLXItMTc2IHtwYWRkaW5nLXJpZ2h0OiAxNzZweDt9XHJcbi5wLXItMTc3IHtwYWRkaW5nLXJpZ2h0OiAxNzdweDt9XHJcbi5wLXItMTc4IHtwYWRkaW5nLXJpZ2h0OiAxNzhweDt9XHJcbi5wLXItMTc5IHtwYWRkaW5nLXJpZ2h0OiAxNzlweDt9XHJcbi5wLXItMTgwIHtwYWRkaW5nLXJpZ2h0OiAxODBweDt9XHJcbi5wLXItMTgxIHtwYWRkaW5nLXJpZ2h0OiAxODFweDt9XHJcbi5wLXItMTgyIHtwYWRkaW5nLXJpZ2h0OiAxODJweDt9XHJcbi5wLXItMTgzIHtwYWRkaW5nLXJpZ2h0OiAxODNweDt9XHJcbi5wLXItMTg0IHtwYWRkaW5nLXJpZ2h0OiAxODRweDt9XHJcbi5wLXItMTg1IHtwYWRkaW5nLXJpZ2h0OiAxODVweDt9XHJcbi5wLXItMTg2IHtwYWRkaW5nLXJpZ2h0OiAxODZweDt9XHJcbi5wLXItMTg3IHtwYWRkaW5nLXJpZ2h0OiAxODdweDt9XHJcbi5wLXItMTg4IHtwYWRkaW5nLXJpZ2h0OiAxODhweDt9XHJcbi5wLXItMTg5IHtwYWRkaW5nLXJpZ2h0OiAxODlweDt9XHJcbi5wLXItMTkwIHtwYWRkaW5nLXJpZ2h0OiAxOTBweDt9XHJcbi5wLXItMTkxIHtwYWRkaW5nLXJpZ2h0OiAxOTFweDt9XHJcbi5wLXItMTkyIHtwYWRkaW5nLXJpZ2h0OiAxOTJweDt9XHJcbi5wLXItMTkzIHtwYWRkaW5nLXJpZ2h0OiAxOTNweDt9XHJcbi5wLXItMTk0IHtwYWRkaW5nLXJpZ2h0OiAxOTRweDt9XHJcbi5wLXItMTk1IHtwYWRkaW5nLXJpZ2h0OiAxOTVweDt9XHJcbi5wLXItMTk2IHtwYWRkaW5nLXJpZ2h0OiAxOTZweDt9XHJcbi5wLXItMTk3IHtwYWRkaW5nLXJpZ2h0OiAxOTdweDt9XHJcbi5wLXItMTk4IHtwYWRkaW5nLXJpZ2h0OiAxOThweDt9XHJcbi5wLXItMTk5IHtwYWRkaW5nLXJpZ2h0OiAxOTlweDt9XHJcbi5wLXItMjAwIHtwYWRkaW5nLXJpZ2h0OiAyMDBweDt9XHJcbi5wLXItMjAxIHtwYWRkaW5nLXJpZ2h0OiAyMDFweDt9XHJcbi5wLXItMjAyIHtwYWRkaW5nLXJpZ2h0OiAyMDJweDt9XHJcbi5wLXItMjAzIHtwYWRkaW5nLXJpZ2h0OiAyMDNweDt9XHJcbi5wLXItMjA0IHtwYWRkaW5nLXJpZ2h0OiAyMDRweDt9XHJcbi5wLXItMjA1IHtwYWRkaW5nLXJpZ2h0OiAyMDVweDt9XHJcbi5wLXItMjA2IHtwYWRkaW5nLXJpZ2h0OiAyMDZweDt9XHJcbi5wLXItMjA3IHtwYWRkaW5nLXJpZ2h0OiAyMDdweDt9XHJcbi5wLXItMjA4IHtwYWRkaW5nLXJpZ2h0OiAyMDhweDt9XHJcbi5wLXItMjA5IHtwYWRkaW5nLXJpZ2h0OiAyMDlweDt9XHJcbi5wLXItMjEwIHtwYWRkaW5nLXJpZ2h0OiAyMTBweDt9XHJcbi5wLXItMjExIHtwYWRkaW5nLXJpZ2h0OiAyMTFweDt9XHJcbi5wLXItMjEyIHtwYWRkaW5nLXJpZ2h0OiAyMTJweDt9XHJcbi5wLXItMjEzIHtwYWRkaW5nLXJpZ2h0OiAyMTNweDt9XHJcbi5wLXItMjE0IHtwYWRkaW5nLXJpZ2h0OiAyMTRweDt9XHJcbi5wLXItMjE1IHtwYWRkaW5nLXJpZ2h0OiAyMTVweDt9XHJcbi5wLXItMjE2IHtwYWRkaW5nLXJpZ2h0OiAyMTZweDt9XHJcbi5wLXItMjE3IHtwYWRkaW5nLXJpZ2h0OiAyMTdweDt9XHJcbi5wLXItMjE4IHtwYWRkaW5nLXJpZ2h0OiAyMThweDt9XHJcbi5wLXItMjE5IHtwYWRkaW5nLXJpZ2h0OiAyMTlweDt9XHJcbi5wLXItMjIwIHtwYWRkaW5nLXJpZ2h0OiAyMjBweDt9XHJcbi5wLXItMjIxIHtwYWRkaW5nLXJpZ2h0OiAyMjFweDt9XHJcbi5wLXItMjIyIHtwYWRkaW5nLXJpZ2h0OiAyMjJweDt9XHJcbi5wLXItMjIzIHtwYWRkaW5nLXJpZ2h0OiAyMjNweDt9XHJcbi5wLXItMjI0IHtwYWRkaW5nLXJpZ2h0OiAyMjRweDt9XHJcbi5wLXItMjI1IHtwYWRkaW5nLXJpZ2h0OiAyMjVweDt9XHJcbi5wLXItMjI2IHtwYWRkaW5nLXJpZ2h0OiAyMjZweDt9XHJcbi5wLXItMjI3IHtwYWRkaW5nLXJpZ2h0OiAyMjdweDt9XHJcbi5wLXItMjI4IHtwYWRkaW5nLXJpZ2h0OiAyMjhweDt9XHJcbi5wLXItMjI5IHtwYWRkaW5nLXJpZ2h0OiAyMjlweDt9XHJcbi5wLXItMjMwIHtwYWRkaW5nLXJpZ2h0OiAyMzBweDt9XHJcbi5wLXItMjMxIHtwYWRkaW5nLXJpZ2h0OiAyMzFweDt9XHJcbi5wLXItMjMyIHtwYWRkaW5nLXJpZ2h0OiAyMzJweDt9XHJcbi5wLXItMjMzIHtwYWRkaW5nLXJpZ2h0OiAyMzNweDt9XHJcbi5wLXItMjM0IHtwYWRkaW5nLXJpZ2h0OiAyMzRweDt9XHJcbi5wLXItMjM1IHtwYWRkaW5nLXJpZ2h0OiAyMzVweDt9XHJcbi5wLXItMjM2IHtwYWRkaW5nLXJpZ2h0OiAyMzZweDt9XHJcbi5wLXItMjM3IHtwYWRkaW5nLXJpZ2h0OiAyMzdweDt9XHJcbi5wLXItMjM4IHtwYWRkaW5nLXJpZ2h0OiAyMzhweDt9XHJcbi5wLXItMjM5IHtwYWRkaW5nLXJpZ2h0OiAyMzlweDt9XHJcbi5wLXItMjQwIHtwYWRkaW5nLXJpZ2h0OiAyNDBweDt9XHJcbi5wLXItMjQxIHtwYWRkaW5nLXJpZ2h0OiAyNDFweDt9XHJcbi5wLXItMjQyIHtwYWRkaW5nLXJpZ2h0OiAyNDJweDt9XHJcbi5wLXItMjQzIHtwYWRkaW5nLXJpZ2h0OiAyNDNweDt9XHJcbi5wLXItMjQ0IHtwYWRkaW5nLXJpZ2h0OiAyNDRweDt9XHJcbi5wLXItMjQ1IHtwYWRkaW5nLXJpZ2h0OiAyNDVweDt9XHJcbi5wLXItMjQ2IHtwYWRkaW5nLXJpZ2h0OiAyNDZweDt9XHJcbi5wLXItMjQ3IHtwYWRkaW5nLXJpZ2h0OiAyNDdweDt9XHJcbi5wLXItMjQ4IHtwYWRkaW5nLXJpZ2h0OiAyNDhweDt9XHJcbi5wLXItMjQ5IHtwYWRkaW5nLXJpZ2h0OiAyNDlweDt9XHJcbi5wLXItMjUwIHtwYWRkaW5nLXJpZ2h0OiAyNTBweDt9XHJcblxyXG4vKlsgTUFSR0lOIF1cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuKi9cclxuLm0tdC0wIHttYXJnaW4tdG9wOiAwcHg7fVxyXG4ubS10LTEge21hcmdpbi10b3A6IDFweDt9XHJcbi5tLXQtMiB7bWFyZ2luLXRvcDogMnB4O31cclxuLm0tdC0zIHttYXJnaW4tdG9wOiAzcHg7fVxyXG4ubS10LTQge21hcmdpbi10b3A6IDRweDt9XHJcbi5tLXQtNSB7bWFyZ2luLXRvcDogNXB4O31cclxuLm0tdC02IHttYXJnaW4tdG9wOiA2cHg7fVxyXG4ubS10LTcge21hcmdpbi10b3A6IDdweDt9XHJcbi5tLXQtOCB7bWFyZ2luLXRvcDogOHB4O31cclxuLm0tdC05IHttYXJnaW4tdG9wOiA5cHg7fVxyXG4ubS10LTEwIHttYXJnaW4tdG9wOiAxMHB4O31cclxuLm0tdC0xMSB7bWFyZ2luLXRvcDogMTFweDt9XHJcbi5tLXQtMTIge21hcmdpbi10b3A6IDEycHg7fVxyXG4ubS10LTEzIHttYXJnaW4tdG9wOiAxM3B4O31cclxuLm0tdC0xNCB7bWFyZ2luLXRvcDogMTRweDt9XHJcbi5tLXQtMTUge21hcmdpbi10b3A6IDE1cHg7fVxyXG4ubS10LTE2IHttYXJnaW4tdG9wOiAxNnB4O31cclxuLm0tdC0xNyB7bWFyZ2luLXRvcDogMTdweDt9XHJcbi5tLXQtMTgge21hcmdpbi10b3A6IDE4cHg7fVxyXG4ubS10LTE5IHttYXJnaW4tdG9wOiAxOXB4O31cclxuLm0tdC0yMCB7bWFyZ2luLXRvcDogMjBweDt9XHJcbi5tLXQtMjEge21hcmdpbi10b3A6IDIxcHg7fVxyXG4ubS10LTIyIHttYXJnaW4tdG9wOiAyMnB4O31cclxuLm0tdC0yMyB7bWFyZ2luLXRvcDogMjNweDt9XHJcbi5tLXQtMjQge21hcmdpbi10b3A6IDI0cHg7fVxyXG4ubS10LTI1IHttYXJnaW4tdG9wOiAyNXB4O31cclxuLm0tdC0yNiB7bWFyZ2luLXRvcDogMjZweDt9XHJcbi5tLXQtMjcge21hcmdpbi10b3A6IDI3cHg7fVxyXG4ubS10LTI4IHttYXJnaW4tdG9wOiAyOHB4O31cclxuLm0tdC0yOSB7bWFyZ2luLXRvcDogMjlweDt9XHJcbi5tLXQtMzAge21hcmdpbi10b3A6IDMwcHg7fVxyXG4ubS10LTMxIHttYXJnaW4tdG9wOiAzMXB4O31cclxuLm0tdC0zMiB7bWFyZ2luLXRvcDogMzJweDt9XHJcbi5tLXQtMzMge21hcmdpbi10b3A6IDMzcHg7fVxyXG4ubS10LTM0IHttYXJnaW4tdG9wOiAzNHB4O31cclxuLm0tdC0zNSB7bWFyZ2luLXRvcDogMzVweDt9XHJcbi5tLXQtMzYge21hcmdpbi10b3A6IDM2cHg7fVxyXG4ubS10LTM3IHttYXJnaW4tdG9wOiAzN3B4O31cclxuLm0tdC0zOCB7bWFyZ2luLXRvcDogMzhweDt9XHJcbi5tLXQtMzkge21hcmdpbi10b3A6IDM5cHg7fVxyXG4ubS10LTQwIHttYXJnaW4tdG9wOiA0MHB4O31cclxuLm0tdC00MSB7bWFyZ2luLXRvcDogNDFweDt9XHJcbi5tLXQtNDIge21hcmdpbi10b3A6IDQycHg7fVxyXG4ubS10LTQzIHttYXJnaW4tdG9wOiA0M3B4O31cclxuLm0tdC00NCB7bWFyZ2luLXRvcDogNDRweDt9XHJcbi5tLXQtNDUge21hcmdpbi10b3A6IDQ1cHg7fVxyXG4ubS10LTQ2IHttYXJnaW4tdG9wOiA0NnB4O31cclxuLm0tdC00NyB7bWFyZ2luLXRvcDogNDdweDt9XHJcbi5tLXQtNDgge21hcmdpbi10b3A6IDQ4cHg7fVxyXG4ubS10LTQ5IHttYXJnaW4tdG9wOiA0OXB4O31cclxuLm0tdC01MCB7bWFyZ2luLXRvcDogNTBweDt9XHJcbi5tLXQtNTEge21hcmdpbi10b3A6IDUxcHg7fVxyXG4ubS10LTUyIHttYXJnaW4tdG9wOiA1MnB4O31cclxuLm0tdC01MyB7bWFyZ2luLXRvcDogNTNweDt9XHJcbi5tLXQtNTQge21hcmdpbi10b3A6IDU0cHg7fVxyXG4ubS10LTU1IHttYXJnaW4tdG9wOiA1NXB4O31cclxuLm0tdC01NiB7bWFyZ2luLXRvcDogNTZweDt9XHJcbi5tLXQtNTcge21hcmdpbi10b3A6IDU3cHg7fVxyXG4ubS10LTU4IHttYXJnaW4tdG9wOiA1OHB4O31cclxuLm0tdC01OSB7bWFyZ2luLXRvcDogNTlweDt9XHJcbi5tLXQtNjAge21hcmdpbi10b3A6IDYwcHg7fVxyXG4ubS10LTYxIHttYXJnaW4tdG9wOiA2MXB4O31cclxuLm0tdC02MiB7bWFyZ2luLXRvcDogNjJweDt9XHJcbi5tLXQtNjMge21hcmdpbi10b3A6IDYzcHg7fVxyXG4ubS10LTY0IHttYXJnaW4tdG9wOiA2NHB4O31cclxuLm0tdC02NSB7bWFyZ2luLXRvcDogNjVweDt9XHJcbi5tLXQtNjYge21hcmdpbi10b3A6IDY2cHg7fVxyXG4ubS10LTY3IHttYXJnaW4tdG9wOiA2N3B4O31cclxuLm0tdC02OCB7bWFyZ2luLXRvcDogNjhweDt9XHJcbi5tLXQtNjkge21hcmdpbi10b3A6IDY5cHg7fVxyXG4ubS10LTcwIHttYXJnaW4tdG9wOiA3MHB4O31cclxuLm0tdC03MSB7bWFyZ2luLXRvcDogNzFweDt9XHJcbi5tLXQtNzIge21hcmdpbi10b3A6IDcycHg7fVxyXG4ubS10LTczIHttYXJnaW4tdG9wOiA3M3B4O31cclxuLm0tdC03NCB7bWFyZ2luLXRvcDogNzRweDt9XHJcbi5tLXQtNzUge21hcmdpbi10b3A6IDc1cHg7fVxyXG4ubS10LTc2IHttYXJnaW4tdG9wOiA3NnB4O31cclxuLm0tdC03NyB7bWFyZ2luLXRvcDogNzdweDt9XHJcbi5tLXQtNzgge21hcmdpbi10b3A6IDc4cHg7fVxyXG4ubS10LTc5IHttYXJnaW4tdG9wOiA3OXB4O31cclxuLm0tdC04MCB7bWFyZ2luLXRvcDogODBweDt9XHJcbi5tLXQtODEge21hcmdpbi10b3A6IDgxcHg7fVxyXG4ubS10LTgyIHttYXJnaW4tdG9wOiA4MnB4O31cclxuLm0tdC04MyB7bWFyZ2luLXRvcDogODNweDt9XHJcbi5tLXQtODQge21hcmdpbi10b3A6IDg0cHg7fVxyXG4ubS10LTg1IHttYXJnaW4tdG9wOiA4NXB4O31cclxuLm0tdC04NiB7bWFyZ2luLXRvcDogODZweDt9XHJcbi5tLXQtODcge21hcmdpbi10b3A6IDg3cHg7fVxyXG4ubS10LTg4IHttYXJnaW4tdG9wOiA4OHB4O31cclxuLm0tdC04OSB7bWFyZ2luLXRvcDogODlweDt9XHJcbi5tLXQtOTAge21hcmdpbi10b3A6IDkwcHg7fVxyXG4ubS10LTkxIHttYXJnaW4tdG9wOiA5MXB4O31cclxuLm0tdC05MiB7bWFyZ2luLXRvcDogOTJweDt9XHJcbi5tLXQtOTMge21hcmdpbi10b3A6IDkzcHg7fVxyXG4ubS10LTk0IHttYXJnaW4tdG9wOiA5NHB4O31cclxuLm0tdC05NSB7bWFyZ2luLXRvcDogOTVweDt9XHJcbi5tLXQtOTYge21hcmdpbi10b3A6IDk2cHg7fVxyXG4ubS10LTk3IHttYXJnaW4tdG9wOiA5N3B4O31cclxuLm0tdC05OCB7bWFyZ2luLXRvcDogOThweDt9XHJcbi5tLXQtOTkge21hcmdpbi10b3A6IDk5cHg7fVxyXG4ubS10LTEwMCB7bWFyZ2luLXRvcDogMTAwcHg7fVxyXG4ubS10LTEwMSB7bWFyZ2luLXRvcDogMTAxcHg7fVxyXG4ubS10LTEwMiB7bWFyZ2luLXRvcDogMTAycHg7fVxyXG4ubS10LTEwMyB7bWFyZ2luLXRvcDogMTAzcHg7fVxyXG4ubS10LTEwNCB7bWFyZ2luLXRvcDogMTA0cHg7fVxyXG4ubS10LTEwNSB7bWFyZ2luLXRvcDogMTA1cHg7fVxyXG4ubS10LTEwNiB7bWFyZ2luLXRvcDogMTA2cHg7fVxyXG4ubS10LTEwNyB7bWFyZ2luLXRvcDogMTA3cHg7fVxyXG4ubS10LTEwOCB7bWFyZ2luLXRvcDogMTA4cHg7fVxyXG4ubS10LTEwOSB7bWFyZ2luLXRvcDogMTA5cHg7fVxyXG4ubS10LTExMCB7bWFyZ2luLXRvcDogMTEwcHg7fVxyXG4ubS10LTExMSB7bWFyZ2luLXRvcDogMTExcHg7fVxyXG4ubS10LTExMiB7bWFyZ2luLXRvcDogMTEycHg7fVxyXG4ubS10LTExMyB7bWFyZ2luLXRvcDogMTEzcHg7fVxyXG4ubS10LTExNCB7bWFyZ2luLXRvcDogMTE0cHg7fVxyXG4ubS10LTExNSB7bWFyZ2luLXRvcDogMTE1cHg7fVxyXG4ubS10LTExNiB7bWFyZ2luLXRvcDogMTE2cHg7fVxyXG4ubS10LTExNyB7bWFyZ2luLXRvcDogMTE3cHg7fVxyXG4ubS10LTExOCB7bWFyZ2luLXRvcDogMTE4cHg7fVxyXG4ubS10LTExOSB7bWFyZ2luLXRvcDogMTE5cHg7fVxyXG4ubS10LTEyMCB7bWFyZ2luLXRvcDogMTIwcHg7fVxyXG4ubS10LTEyMSB7bWFyZ2luLXRvcDogMTIxcHg7fVxyXG4ubS10LTEyMiB7bWFyZ2luLXRvcDogMTIycHg7fVxyXG4ubS10LTEyMyB7bWFyZ2luLXRvcDogMTIzcHg7fVxyXG4ubS10LTEyNCB7bWFyZ2luLXRvcDogMTI0cHg7fVxyXG4ubS10LTEyNSB7bWFyZ2luLXRvcDogMTI1cHg7fVxyXG4ubS10LTEyNiB7bWFyZ2luLXRvcDogMTI2cHg7fVxyXG4ubS10LTEyNyB7bWFyZ2luLXRvcDogMTI3cHg7fVxyXG4ubS10LTEyOCB7bWFyZ2luLXRvcDogMTI4cHg7fVxyXG4ubS10LTEyOSB7bWFyZ2luLXRvcDogMTI5cHg7fVxyXG4ubS10LTEzMCB7bWFyZ2luLXRvcDogMTMwcHg7fVxyXG4ubS10LTEzMSB7bWFyZ2luLXRvcDogMTMxcHg7fVxyXG4ubS10LTEzMiB7bWFyZ2luLXRvcDogMTMycHg7fVxyXG4ubS10LTEzMyB7bWFyZ2luLXRvcDogMTMzcHg7fVxyXG4ubS10LTEzNCB7bWFyZ2luLXRvcDogMTM0cHg7fVxyXG4ubS10LTEzNSB7bWFyZ2luLXRvcDogMTM1cHg7fVxyXG4ubS10LTEzNiB7bWFyZ2luLXRvcDogMTM2cHg7fVxyXG4ubS10LTEzNyB7bWFyZ2luLXRvcDogMTM3cHg7fVxyXG4ubS10LTEzOCB7bWFyZ2luLXRvcDogMTM4cHg7fVxyXG4ubS10LTEzOSB7bWFyZ2luLXRvcDogMTM5cHg7fVxyXG4ubS10LTE0MCB7bWFyZ2luLXRvcDogMTQwcHg7fVxyXG4ubS10LTE0MSB7bWFyZ2luLXRvcDogMTQxcHg7fVxyXG4ubS10LTE0MiB7bWFyZ2luLXRvcDogMTQycHg7fVxyXG4ubS10LTE0MyB7bWFyZ2luLXRvcDogMTQzcHg7fVxyXG4ubS10LTE0NCB7bWFyZ2luLXRvcDogMTQ0cHg7fVxyXG4ubS10LTE0NSB7bWFyZ2luLXRvcDogMTQ1cHg7fVxyXG4ubS10LTE0NiB7bWFyZ2luLXRvcDogMTQ2cHg7fVxyXG4ubS10LTE0NyB7bWFyZ2luLXRvcDogMTQ3cHg7fVxyXG4ubS10LTE0OCB7bWFyZ2luLXRvcDogMTQ4cHg7fVxyXG4ubS10LTE0OSB7bWFyZ2luLXRvcDogMTQ5cHg7fVxyXG4ubS10LTE1MCB7bWFyZ2luLXRvcDogMTUwcHg7fVxyXG4ubS10LTE1MSB7bWFyZ2luLXRvcDogMTUxcHg7fVxyXG4ubS10LTE1MiB7bWFyZ2luLXRvcDogMTUycHg7fVxyXG4ubS10LTE1MyB7bWFyZ2luLXRvcDogMTUzcHg7fVxyXG4ubS10LTE1NCB7bWFyZ2luLXRvcDogMTU0cHg7fVxyXG4ubS10LTE1NSB7bWFyZ2luLXRvcDogMTU1cHg7fVxyXG4ubS10LTE1NiB7bWFyZ2luLXRvcDogMTU2cHg7fVxyXG4ubS10LTE1NyB7bWFyZ2luLXRvcDogMTU3cHg7fVxyXG4ubS10LTE1OCB7bWFyZ2luLXRvcDogMTU4cHg7fVxyXG4ubS10LTE1OSB7bWFyZ2luLXRvcDogMTU5cHg7fVxyXG4ubS10LTE2MCB7bWFyZ2luLXRvcDogMTYwcHg7fVxyXG4ubS10LTE2MSB7bWFyZ2luLXRvcDogMTYxcHg7fVxyXG4ubS10LTE2MiB7bWFyZ2luLXRvcDogMTYycHg7fVxyXG4ubS10LTE2MyB7bWFyZ2luLXRvcDogMTYzcHg7fVxyXG4ubS10LTE2NCB7bWFyZ2luLXRvcDogMTY0cHg7fVxyXG4ubS10LTE2NSB7bWFyZ2luLXRvcDogMTY1cHg7fVxyXG4ubS10LTE2NiB7bWFyZ2luLXRvcDogMTY2cHg7fVxyXG4ubS10LTE2NyB7bWFyZ2luLXRvcDogMTY3cHg7fVxyXG4ubS10LTE2OCB7bWFyZ2luLXRvcDogMTY4cHg7fVxyXG4ubS10LTE2OSB7bWFyZ2luLXRvcDogMTY5cHg7fVxyXG4ubS10LTE3MCB7bWFyZ2luLXRvcDogMTcwcHg7fVxyXG4ubS10LTE3MSB7bWFyZ2luLXRvcDogMTcxcHg7fVxyXG4ubS10LTE3MiB7bWFyZ2luLXRvcDogMTcycHg7fVxyXG4ubS10LTE3MyB7bWFyZ2luLXRvcDogMTczcHg7fVxyXG4ubS10LTE3NCB7bWFyZ2luLXRvcDogMTc0cHg7fVxyXG4ubS10LTE3NSB7bWFyZ2luLXRvcDogMTc1cHg7fVxyXG4ubS10LTE3NiB7bWFyZ2luLXRvcDogMTc2cHg7fVxyXG4ubS10LTE3NyB7bWFyZ2luLXRvcDogMTc3cHg7fVxyXG4ubS10LTE3OCB7bWFyZ2luLXRvcDogMTc4cHg7fVxyXG4ubS10LTE3OSB7bWFyZ2luLXRvcDogMTc5cHg7fVxyXG4ubS10LTE4MCB7bWFyZ2luLXRvcDogMTgwcHg7fVxyXG4ubS10LTE4MSB7bWFyZ2luLXRvcDogMTgxcHg7fVxyXG4ubS10LTE4MiB7bWFyZ2luLXRvcDogMTgycHg7fVxyXG4ubS10LTE4MyB7bWFyZ2luLXRvcDogMTgzcHg7fVxyXG4ubS10LTE4NCB7bWFyZ2luLXRvcDogMTg0cHg7fVxyXG4ubS10LTE4NSB7bWFyZ2luLXRvcDogMTg1cHg7fVxyXG4ubS10LTE4NiB7bWFyZ2luLXRvcDogMTg2cHg7fVxyXG4ubS10LTE4NyB7bWFyZ2luLXRvcDogMTg3cHg7fVxyXG4ubS10LTE4OCB7bWFyZ2luLXRvcDogMTg4cHg7fVxyXG4ubS10LTE4OSB7bWFyZ2luLXRvcDogMTg5cHg7fVxyXG4ubS10LTE5MCB7bWFyZ2luLXRvcDogMTkwcHg7fVxyXG4ubS10LTE5MSB7bWFyZ2luLXRvcDogMTkxcHg7fVxyXG4ubS10LTE5MiB7bWFyZ2luLXRvcDogMTkycHg7fVxyXG4ubS10LTE5MyB7bWFyZ2luLXRvcDogMTkzcHg7fVxyXG4ubS10LTE5NCB7bWFyZ2luLXRvcDogMTk0cHg7fVxyXG4ubS10LTE5NSB7bWFyZ2luLXRvcDogMTk1cHg7fVxyXG4ubS10LTE5NiB7bWFyZ2luLXRvcDogMTk2cHg7fVxyXG4ubS10LTE5NyB7bWFyZ2luLXRvcDogMTk3cHg7fVxyXG4ubS10LTE5OCB7bWFyZ2luLXRvcDogMTk4cHg7fVxyXG4ubS10LTE5OSB7bWFyZ2luLXRvcDogMTk5cHg7fVxyXG4ubS10LTIwMCB7bWFyZ2luLXRvcDogMjAwcHg7fVxyXG4ubS10LTIwMSB7bWFyZ2luLXRvcDogMjAxcHg7fVxyXG4ubS10LTIwMiB7bWFyZ2luLXRvcDogMjAycHg7fVxyXG4ubS10LTIwMyB7bWFyZ2luLXRvcDogMjAzcHg7fVxyXG4ubS10LTIwNCB7bWFyZ2luLXRvcDogMjA0cHg7fVxyXG4ubS10LTIwNSB7bWFyZ2luLXRvcDogMjA1cHg7fVxyXG4ubS10LTIwNiB7bWFyZ2luLXRvcDogMjA2cHg7fVxyXG4ubS10LTIwNyB7bWFyZ2luLXRvcDogMjA3cHg7fVxyXG4ubS10LTIwOCB7bWFyZ2luLXRvcDogMjA4cHg7fVxyXG4ubS10LTIwOSB7bWFyZ2luLXRvcDogMjA5cHg7fVxyXG4ubS10LTIxMCB7bWFyZ2luLXRvcDogMjEwcHg7fVxyXG4ubS10LTIxMSB7bWFyZ2luLXRvcDogMjExcHg7fVxyXG4ubS10LTIxMiB7bWFyZ2luLXRvcDogMjEycHg7fVxyXG4ubS10LTIxMyB7bWFyZ2luLXRvcDogMjEzcHg7fVxyXG4ubS10LTIxNCB7bWFyZ2luLXRvcDogMjE0cHg7fVxyXG4ubS10LTIxNSB7bWFyZ2luLXRvcDogMjE1cHg7fVxyXG4ubS10LTIxNiB7bWFyZ2luLXRvcDogMjE2cHg7fVxyXG4ubS10LTIxNyB7bWFyZ2luLXRvcDogMjE3cHg7fVxyXG4ubS10LTIxOCB7bWFyZ2luLXRvcDogMjE4cHg7fVxyXG4ubS10LTIxOSB7bWFyZ2luLXRvcDogMjE5cHg7fVxyXG4ubS10LTIyMCB7bWFyZ2luLXRvcDogMjIwcHg7fVxyXG4ubS10LTIyMSB7bWFyZ2luLXRvcDogMjIxcHg7fVxyXG4ubS10LTIyMiB7bWFyZ2luLXRvcDogMjIycHg7fVxyXG4ubS10LTIyMyB7bWFyZ2luLXRvcDogMjIzcHg7fVxyXG4ubS10LTIyNCB7bWFyZ2luLXRvcDogMjI0cHg7fVxyXG4ubS10LTIyNSB7bWFyZ2luLXRvcDogMjI1cHg7fVxyXG4ubS10LTIyNiB7bWFyZ2luLXRvcDogMjI2cHg7fVxyXG4ubS10LTIyNyB7bWFyZ2luLXRvcDogMjI3cHg7fVxyXG4ubS10LTIyOCB7bWFyZ2luLXRvcDogMjI4cHg7fVxyXG4ubS10LTIyOSB7bWFyZ2luLXRvcDogMjI5cHg7fVxyXG4ubS10LTIzMCB7bWFyZ2luLXRvcDogMjMwcHg7fVxyXG4ubS10LTIzMSB7bWFyZ2luLXRvcDogMjMxcHg7fVxyXG4ubS10LTIzMiB7bWFyZ2luLXRvcDogMjMycHg7fVxyXG4ubS10LTIzMyB7bWFyZ2luLXRvcDogMjMzcHg7fVxyXG4ubS10LTIzNCB7bWFyZ2luLXRvcDogMjM0cHg7fVxyXG4ubS10LTIzNSB7bWFyZ2luLXRvcDogMjM1cHg7fVxyXG4ubS10LTIzNiB7bWFyZ2luLXRvcDogMjM2cHg7fVxyXG4ubS10LTIzNyB7bWFyZ2luLXRvcDogMjM3cHg7fVxyXG4ubS10LTIzOCB7bWFyZ2luLXRvcDogMjM4cHg7fVxyXG4ubS10LTIzOSB7bWFyZ2luLXRvcDogMjM5cHg7fVxyXG4ubS10LTI0MCB7bWFyZ2luLXRvcDogMjQwcHg7fVxyXG4ubS10LTI0MSB7bWFyZ2luLXRvcDogMjQxcHg7fVxyXG4ubS10LTI0MiB7bWFyZ2luLXRvcDogMjQycHg7fVxyXG4ubS10LTI0MyB7bWFyZ2luLXRvcDogMjQzcHg7fVxyXG4ubS10LTI0NCB7bWFyZ2luLXRvcDogMjQ0cHg7fVxyXG4ubS10LTI0NSB7bWFyZ2luLXRvcDogMjQ1cHg7fVxyXG4ubS10LTI0NiB7bWFyZ2luLXRvcDogMjQ2cHg7fVxyXG4ubS10LTI0NyB7bWFyZ2luLXRvcDogMjQ3cHg7fVxyXG4ubS10LTI0OCB7bWFyZ2luLXRvcDogMjQ4cHg7fVxyXG4ubS10LTI0OSB7bWFyZ2luLXRvcDogMjQ5cHg7fVxyXG4ubS10LTI1MCB7bWFyZ2luLXRvcDogMjUwcHg7fVxyXG4ubS1iLTAge21hcmdpbi1ib3R0b206IDBweDt9XHJcbi5tLWItMSB7bWFyZ2luLWJvdHRvbTogMXB4O31cclxuLm0tYi0yIHttYXJnaW4tYm90dG9tOiAycHg7fVxyXG4ubS1iLTMge21hcmdpbi1ib3R0b206IDNweDt9XHJcbi5tLWItNCB7bWFyZ2luLWJvdHRvbTogNHB4O31cclxuLm0tYi01IHttYXJnaW4tYm90dG9tOiA1cHg7fVxyXG4ubS1iLTYge21hcmdpbi1ib3R0b206IDZweDt9XHJcbi5tLWItNyB7bWFyZ2luLWJvdHRvbTogN3B4O31cclxuLm0tYi04IHttYXJnaW4tYm90dG9tOiA4cHg7fVxyXG4ubS1iLTkge21hcmdpbi1ib3R0b206IDlweDt9XHJcbi5tLWItMTAge21hcmdpbi1ib3R0b206IDEwcHg7fVxyXG4ubS1iLTExIHttYXJnaW4tYm90dG9tOiAxMXB4O31cclxuLm0tYi0xMiB7bWFyZ2luLWJvdHRvbTogMTJweDt9XHJcbi5tLWItMTMge21hcmdpbi1ib3R0b206IDEzcHg7fVxyXG4ubS1iLTE0IHttYXJnaW4tYm90dG9tOiAxNHB4O31cclxuLm0tYi0xNSB7bWFyZ2luLWJvdHRvbTogMTVweDt9XHJcbi5tLWItMTYge21hcmdpbi1ib3R0b206IDE2cHg7fVxyXG4ubS1iLTE3IHttYXJnaW4tYm90dG9tOiAxN3B4O31cclxuLm0tYi0xOCB7bWFyZ2luLWJvdHRvbTogMThweDt9XHJcbi5tLWItMTkge21hcmdpbi1ib3R0b206IDE5cHg7fVxyXG4ubS1iLTIwIHttYXJnaW4tYm90dG9tOiAyMHB4O31cclxuLm0tYi0yMSB7bWFyZ2luLWJvdHRvbTogMjFweDt9XHJcbi5tLWItMjIge21hcmdpbi1ib3R0b206IDIycHg7fVxyXG4ubS1iLTIzIHttYXJnaW4tYm90dG9tOiAyM3B4O31cclxuLm0tYi0yNCB7bWFyZ2luLWJvdHRvbTogMjRweDt9XHJcbi5tLWItMjUge21hcmdpbi1ib3R0b206IDI1cHg7fVxyXG4ubS1iLTI2IHttYXJnaW4tYm90dG9tOiAyNnB4O31cclxuLm0tYi0yNyB7bWFyZ2luLWJvdHRvbTogMjdweDt9XHJcbi5tLWItMjgge21hcmdpbi1ib3R0b206IDI4cHg7fVxyXG4ubS1iLTI5IHttYXJnaW4tYm90dG9tOiAyOXB4O31cclxuLm0tYi0zMCB7bWFyZ2luLWJvdHRvbTogMzBweDt9XHJcbi5tLWItMzEge21hcmdpbi1ib3R0b206IDMxcHg7fVxyXG4ubS1iLTMyIHttYXJnaW4tYm90dG9tOiAzMnB4O31cclxuLm0tYi0zMyB7bWFyZ2luLWJvdHRvbTogMzNweDt9XHJcbi5tLWItMzQge21hcmdpbi1ib3R0b206IDM0cHg7fVxyXG4ubS1iLTM1IHttYXJnaW4tYm90dG9tOiAzNXB4O31cclxuLm0tYi0zNiB7bWFyZ2luLWJvdHRvbTogMzZweDt9XHJcbi5tLWItMzcge21hcmdpbi1ib3R0b206IDM3cHg7fVxyXG4ubS1iLTM4IHttYXJnaW4tYm90dG9tOiAzOHB4O31cclxuLm0tYi0zOSB7bWFyZ2luLWJvdHRvbTogMzlweDt9XHJcbi5tLWItNDAge21hcmdpbi1ib3R0b206IDQwcHg7fVxyXG4ubS1iLTQxIHttYXJnaW4tYm90dG9tOiA0MXB4O31cclxuLm0tYi00MiB7bWFyZ2luLWJvdHRvbTogNDJweDt9XHJcbi5tLWItNDMge21hcmdpbi1ib3R0b206IDQzcHg7fVxyXG4ubS1iLTQ0IHttYXJnaW4tYm90dG9tOiA0NHB4O31cclxuLm0tYi00NSB7bWFyZ2luLWJvdHRvbTogNDVweDt9XHJcbi5tLWItNDYge21hcmdpbi1ib3R0b206IDQ2cHg7fVxyXG4ubS1iLTQ3IHttYXJnaW4tYm90dG9tOiA0N3B4O31cclxuLm0tYi00OCB7bWFyZ2luLWJvdHRvbTogNDhweDt9XHJcbi5tLWItNDkge21hcmdpbi1ib3R0b206IDQ5cHg7fVxyXG4ubS1iLTUwIHttYXJnaW4tYm90dG9tOiA1MHB4O31cclxuLm0tYi01MSB7bWFyZ2luLWJvdHRvbTogNTFweDt9XHJcbi5tLWItNTIge21hcmdpbi1ib3R0b206IDUycHg7fVxyXG4ubS1iLTUzIHttYXJnaW4tYm90dG9tOiA1M3B4O31cclxuLm0tYi01NCB7bWFyZ2luLWJvdHRvbTogNTRweDt9XHJcbi5tLWItNTUge21hcmdpbi1ib3R0b206IDU1cHg7fVxyXG4ubS1iLTU2IHttYXJnaW4tYm90dG9tOiA1NnB4O31cclxuLm0tYi01NyB7bWFyZ2luLWJvdHRvbTogNTdweDt9XHJcbi5tLWItNTgge21hcmdpbi1ib3R0b206IDU4cHg7fVxyXG4ubS1iLTU5IHttYXJnaW4tYm90dG9tOiA1OXB4O31cclxuLm0tYi02MCB7bWFyZ2luLWJvdHRvbTogNjBweDt9XHJcbi5tLWItNjEge21hcmdpbi1ib3R0b206IDYxcHg7fVxyXG4ubS1iLTYyIHttYXJnaW4tYm90dG9tOiA2MnB4O31cclxuLm0tYi02MyB7bWFyZ2luLWJvdHRvbTogNjNweDt9XHJcbi5tLWItNjQge21hcmdpbi1ib3R0b206IDY0cHg7fVxyXG4ubS1iLTY1IHttYXJnaW4tYm90dG9tOiA2NXB4O31cclxuLm0tYi02NiB7bWFyZ2luLWJvdHRvbTogNjZweDt9XHJcbi5tLWItNjcge21hcmdpbi1ib3R0b206IDY3cHg7fVxyXG4ubS1iLTY4IHttYXJnaW4tYm90dG9tOiA2OHB4O31cclxuLm0tYi02OSB7bWFyZ2luLWJvdHRvbTogNjlweDt9XHJcbi5tLWItNzAge21hcmdpbi1ib3R0b206IDcwcHg7fVxyXG4ubS1iLTcxIHttYXJnaW4tYm90dG9tOiA3MXB4O31cclxuLm0tYi03MiB7bWFyZ2luLWJvdHRvbTogNzJweDt9XHJcbi5tLWItNzMge21hcmdpbi1ib3R0b206IDczcHg7fVxyXG4ubS1iLTc0IHttYXJnaW4tYm90dG9tOiA3NHB4O31cclxuLm0tYi03NSB7bWFyZ2luLWJvdHRvbTogNzVweDt9XHJcbi5tLWItNzYge21hcmdpbi1ib3R0b206IDc2cHg7fVxyXG4ubS1iLTc3IHttYXJnaW4tYm90dG9tOiA3N3B4O31cclxuLm0tYi03OCB7bWFyZ2luLWJvdHRvbTogNzhweDt9XHJcbi5tLWItNzkge21hcmdpbi1ib3R0b206IDc5cHg7fVxyXG4ubS1iLTgwIHttYXJnaW4tYm90dG9tOiA4MHB4O31cclxuLm0tYi04MSB7bWFyZ2luLWJvdHRvbTogODFweDt9XHJcbi5tLWItODIge21hcmdpbi1ib3R0b206IDgycHg7fVxyXG4ubS1iLTgzIHttYXJnaW4tYm90dG9tOiA4M3B4O31cclxuLm0tYi04NCB7bWFyZ2luLWJvdHRvbTogODRweDt9XHJcbi5tLWItODUge21hcmdpbi1ib3R0b206IDg1cHg7fVxyXG4ubS1iLTg2IHttYXJnaW4tYm90dG9tOiA4NnB4O31cclxuLm0tYi04NyB7bWFyZ2luLWJvdHRvbTogODdweDt9XHJcbi5tLWItODgge21hcmdpbi1ib3R0b206IDg4cHg7fVxyXG4ubS1iLTg5IHttYXJnaW4tYm90dG9tOiA4OXB4O31cclxuLm0tYi05MCB7bWFyZ2luLWJvdHRvbTogOTBweDt9XHJcbi5tLWItOTEge21hcmdpbi1ib3R0b206IDkxcHg7fVxyXG4ubS1iLTkyIHttYXJnaW4tYm90dG9tOiA5MnB4O31cclxuLm0tYi05MyB7bWFyZ2luLWJvdHRvbTogOTNweDt9XHJcbi5tLWItOTQge21hcmdpbi1ib3R0b206IDk0cHg7fVxyXG4ubS1iLTk1IHttYXJnaW4tYm90dG9tOiA5NXB4O31cclxuLm0tYi05NiB7bWFyZ2luLWJvdHRvbTogOTZweDt9XHJcbi5tLWItOTcge21hcmdpbi1ib3R0b206IDk3cHg7fVxyXG4ubS1iLTk4IHttYXJnaW4tYm90dG9tOiA5OHB4O31cclxuLm0tYi05OSB7bWFyZ2luLWJvdHRvbTogOTlweDt9XHJcbi5tLWItMTAwIHttYXJnaW4tYm90dG9tOiAxMDBweDt9XHJcbi5tLWItMTAxIHttYXJnaW4tYm90dG9tOiAxMDFweDt9XHJcbi5tLWItMTAyIHttYXJnaW4tYm90dG9tOiAxMDJweDt9XHJcbi5tLWItMTAzIHttYXJnaW4tYm90dG9tOiAxMDNweDt9XHJcbi5tLWItMTA0IHttYXJnaW4tYm90dG9tOiAxMDRweDt9XHJcbi5tLWItMTA1IHttYXJnaW4tYm90dG9tOiAxMDVweDt9XHJcbi5tLWItMTA2IHttYXJnaW4tYm90dG9tOiAxMDZweDt9XHJcbi5tLWItMTA3IHttYXJnaW4tYm90dG9tOiAxMDdweDt9XHJcbi5tLWItMTA4IHttYXJnaW4tYm90dG9tOiAxMDhweDt9XHJcbi5tLWItMTA5IHttYXJnaW4tYm90dG9tOiAxMDlweDt9XHJcbi5tLWItMTEwIHttYXJnaW4tYm90dG9tOiAxMTBweDt9XHJcbi5tLWItMTExIHttYXJnaW4tYm90dG9tOiAxMTFweDt9XHJcbi5tLWItMTEyIHttYXJnaW4tYm90dG9tOiAxMTJweDt9XHJcbi5tLWItMTEzIHttYXJnaW4tYm90dG9tOiAxMTNweDt9XHJcbi5tLWItMTE0IHttYXJnaW4tYm90dG9tOiAxMTRweDt9XHJcbi5tLWItMTE1IHttYXJnaW4tYm90dG9tOiAxMTVweDt9XHJcbi5tLWItMTE2IHttYXJnaW4tYm90dG9tOiAxMTZweDt9XHJcbi5tLWItMTE3IHttYXJnaW4tYm90dG9tOiAxMTdweDt9XHJcbi5tLWItMTE4IHttYXJnaW4tYm90dG9tOiAxMThweDt9XHJcbi5tLWItMTE5IHttYXJnaW4tYm90dG9tOiAxMTlweDt9XHJcbi5tLWItMTIwIHttYXJnaW4tYm90dG9tOiAxMjBweDt9XHJcbi5tLWItMTIxIHttYXJnaW4tYm90dG9tOiAxMjFweDt9XHJcbi5tLWItMTIyIHttYXJnaW4tYm90dG9tOiAxMjJweDt9XHJcbi5tLWItMTIzIHttYXJnaW4tYm90dG9tOiAxMjNweDt9XHJcbi5tLWItMTI0IHttYXJnaW4tYm90dG9tOiAxMjRweDt9XHJcbi5tLWItMTI1IHttYXJnaW4tYm90dG9tOiAxMjVweDt9XHJcbi5tLWItMTI2IHttYXJnaW4tYm90dG9tOiAxMjZweDt9XHJcbi5tLWItMTI3IHttYXJnaW4tYm90dG9tOiAxMjdweDt9XHJcbi5tLWItMTI4IHttYXJnaW4tYm90dG9tOiAxMjhweDt9XHJcbi5tLWItMTI5IHttYXJnaW4tYm90dG9tOiAxMjlweDt9XHJcbi5tLWItMTMwIHttYXJnaW4tYm90dG9tOiAxMzBweDt9XHJcbi5tLWItMTMxIHttYXJnaW4tYm90dG9tOiAxMzFweDt9XHJcbi5tLWItMTMyIHttYXJnaW4tYm90dG9tOiAxMzJweDt9XHJcbi5tLWItMTMzIHttYXJnaW4tYm90dG9tOiAxMzNweDt9XHJcbi5tLWItMTM0IHttYXJnaW4tYm90dG9tOiAxMzRweDt9XHJcbi5tLWItMTM1IHttYXJnaW4tYm90dG9tOiAxMzVweDt9XHJcbi5tLWItMTM2IHttYXJnaW4tYm90dG9tOiAxMzZweDt9XHJcbi5tLWItMTM3IHttYXJnaW4tYm90dG9tOiAxMzdweDt9XHJcbi5tLWItMTM4IHttYXJnaW4tYm90dG9tOiAxMzhweDt9XHJcbi5tLWItMTM5IHttYXJnaW4tYm90dG9tOiAxMzlweDt9XHJcbi5tLWItMTQwIHttYXJnaW4tYm90dG9tOiAxNDBweDt9XHJcbi5tLWItMTQxIHttYXJnaW4tYm90dG9tOiAxNDFweDt9XHJcbi5tLWItMTQyIHttYXJnaW4tYm90dG9tOiAxNDJweDt9XHJcbi5tLWItMTQzIHttYXJnaW4tYm90dG9tOiAxNDNweDt9XHJcbi5tLWItMTQ0IHttYXJnaW4tYm90dG9tOiAxNDRweDt9XHJcbi5tLWItMTQ1IHttYXJnaW4tYm90dG9tOiAxNDVweDt9XHJcbi5tLWItMTQ2IHttYXJnaW4tYm90dG9tOiAxNDZweDt9XHJcbi5tLWItMTQ3IHttYXJnaW4tYm90dG9tOiAxNDdweDt9XHJcbi5tLWItMTQ4IHttYXJnaW4tYm90dG9tOiAxNDhweDt9XHJcbi5tLWItMTQ5IHttYXJnaW4tYm90dG9tOiAxNDlweDt9XHJcbi5tLWItMTUwIHttYXJnaW4tYm90dG9tOiAxNTBweDt9XHJcbi5tLWItMTUxIHttYXJnaW4tYm90dG9tOiAxNTFweDt9XHJcbi5tLWItMTUyIHttYXJnaW4tYm90dG9tOiAxNTJweDt9XHJcbi5tLWItMTUzIHttYXJnaW4tYm90dG9tOiAxNTNweDt9XHJcbi5tLWItMTU0IHttYXJnaW4tYm90dG9tOiAxNTRweDt9XHJcbi5tLWItMTU1IHttYXJnaW4tYm90dG9tOiAxNTVweDt9XHJcbi5tLWItMTU2IHttYXJnaW4tYm90dG9tOiAxNTZweDt9XHJcbi5tLWItMTU3IHttYXJnaW4tYm90dG9tOiAxNTdweDt9XHJcbi5tLWItMTU4IHttYXJnaW4tYm90dG9tOiAxNThweDt9XHJcbi5tLWItMTU5IHttYXJnaW4tYm90dG9tOiAxNTlweDt9XHJcbi5tLWItMTYwIHttYXJnaW4tYm90dG9tOiAxNjBweDt9XHJcbi5tLWItMTYxIHttYXJnaW4tYm90dG9tOiAxNjFweDt9XHJcbi5tLWItMTYyIHttYXJnaW4tYm90dG9tOiAxNjJweDt9XHJcbi5tLWItMTYzIHttYXJnaW4tYm90dG9tOiAxNjNweDt9XHJcbi5tLWItMTY0IHttYXJnaW4tYm90dG9tOiAxNjRweDt9XHJcbi5tLWItMTY1IHttYXJnaW4tYm90dG9tOiAxNjVweDt9XHJcbi5tLWItMTY2IHttYXJnaW4tYm90dG9tOiAxNjZweDt9XHJcbi5tLWItMTY3IHttYXJnaW4tYm90dG9tOiAxNjdweDt9XHJcbi5tLWItMTY4IHttYXJnaW4tYm90dG9tOiAxNjhweDt9XHJcbi5tLWItMTY5IHttYXJnaW4tYm90dG9tOiAxNjlweDt9XHJcbi5tLWItMTcwIHttYXJnaW4tYm90dG9tOiAxNzBweDt9XHJcbi5tLWItMTcxIHttYXJnaW4tYm90dG9tOiAxNzFweDt9XHJcbi5tLWItMTcyIHttYXJnaW4tYm90dG9tOiAxNzJweDt9XHJcbi5tLWItMTczIHttYXJnaW4tYm90dG9tOiAxNzNweDt9XHJcbi5tLWItMTc0IHttYXJnaW4tYm90dG9tOiAxNzRweDt9XHJcbi5tLWItMTc1IHttYXJnaW4tYm90dG9tOiAxNzVweDt9XHJcbi5tLWItMTc2IHttYXJnaW4tYm90dG9tOiAxNzZweDt9XHJcbi5tLWItMTc3IHttYXJnaW4tYm90dG9tOiAxNzdweDt9XHJcbi5tLWItMTc4IHttYXJnaW4tYm90dG9tOiAxNzhweDt9XHJcbi5tLWItMTc5IHttYXJnaW4tYm90dG9tOiAxNzlweDt9XHJcbi5tLWItMTgwIHttYXJnaW4tYm90dG9tOiAxODBweDt9XHJcbi5tLWItMTgxIHttYXJnaW4tYm90dG9tOiAxODFweDt9XHJcbi5tLWItMTgyIHttYXJnaW4tYm90dG9tOiAxODJweDt9XHJcbi5tLWItMTgzIHttYXJnaW4tYm90dG9tOiAxODNweDt9XHJcbi5tLWItMTg0IHttYXJnaW4tYm90dG9tOiAxODRweDt9XHJcbi5tLWItMTg1IHttYXJnaW4tYm90dG9tOiAxODVweDt9XHJcbi5tLWItMTg2IHttYXJnaW4tYm90dG9tOiAxODZweDt9XHJcbi5tLWItMTg3IHttYXJnaW4tYm90dG9tOiAxODdweDt9XHJcbi5tLWItMTg4IHttYXJnaW4tYm90dG9tOiAxODhweDt9XHJcbi5tLWItMTg5IHttYXJnaW4tYm90dG9tOiAxODlweDt9XHJcbi5tLWItMTkwIHttYXJnaW4tYm90dG9tOiAxOTBweDt9XHJcbi5tLWItMTkxIHttYXJnaW4tYm90dG9tOiAxOTFweDt9XHJcbi5tLWItMTkyIHttYXJnaW4tYm90dG9tOiAxOTJweDt9XHJcbi5tLWItMTkzIHttYXJnaW4tYm90dG9tOiAxOTNweDt9XHJcbi5tLWItMTk0IHttYXJnaW4tYm90dG9tOiAxOTRweDt9XHJcbi5tLWItMTk1IHttYXJnaW4tYm90dG9tOiAxOTVweDt9XHJcbi5tLWItMTk2IHttYXJnaW4tYm90dG9tOiAxOTZweDt9XHJcbi5tLWItMTk3IHttYXJnaW4tYm90dG9tOiAxOTdweDt9XHJcbi5tLWItMTk4IHttYXJnaW4tYm90dG9tOiAxOThweDt9XHJcbi5tLWItMTk5IHttYXJnaW4tYm90dG9tOiAxOTlweDt9XHJcbi5tLWItMjAwIHttYXJnaW4tYm90dG9tOiAyMDBweDt9XHJcbi5tLWItMjAxIHttYXJnaW4tYm90dG9tOiAyMDFweDt9XHJcbi5tLWItMjAyIHttYXJnaW4tYm90dG9tOiAyMDJweDt9XHJcbi5tLWItMjAzIHttYXJnaW4tYm90dG9tOiAyMDNweDt9XHJcbi5tLWItMjA0IHttYXJnaW4tYm90dG9tOiAyMDRweDt9XHJcbi5tLWItMjA1IHttYXJnaW4tYm90dG9tOiAyMDVweDt9XHJcbi5tLWItMjA2IHttYXJnaW4tYm90dG9tOiAyMDZweDt9XHJcbi5tLWItMjA3IHttYXJnaW4tYm90dG9tOiAyMDdweDt9XHJcbi5tLWItMjA4IHttYXJnaW4tYm90dG9tOiAyMDhweDt9XHJcbi5tLWItMjA5IHttYXJnaW4tYm90dG9tOiAyMDlweDt9XHJcbi5tLWItMjEwIHttYXJnaW4tYm90dG9tOiAyMTBweDt9XHJcbi5tLWItMjExIHttYXJnaW4tYm90dG9tOiAyMTFweDt9XHJcbi5tLWItMjEyIHttYXJnaW4tYm90dG9tOiAyMTJweDt9XHJcbi5tLWItMjEzIHttYXJnaW4tYm90dG9tOiAyMTNweDt9XHJcbi5tLWItMjE0IHttYXJnaW4tYm90dG9tOiAyMTRweDt9XHJcbi5tLWItMjE1IHttYXJnaW4tYm90dG9tOiAyMTVweDt9XHJcbi5tLWItMjE2IHttYXJnaW4tYm90dG9tOiAyMTZweDt9XHJcbi5tLWItMjE3IHttYXJnaW4tYm90dG9tOiAyMTdweDt9XHJcbi5tLWItMjE4IHttYXJnaW4tYm90dG9tOiAyMThweDt9XHJcbi5tLWItMjE5IHttYXJnaW4tYm90dG9tOiAyMTlweDt9XHJcbi5tLWItMjIwIHttYXJnaW4tYm90dG9tOiAyMjBweDt9XHJcbi5tLWItMjIxIHttYXJnaW4tYm90dG9tOiAyMjFweDt9XHJcbi5tLWItMjIyIHttYXJnaW4tYm90dG9tOiAyMjJweDt9XHJcbi5tLWItMjIzIHttYXJnaW4tYm90dG9tOiAyMjNweDt9XHJcbi5tLWItMjI0IHttYXJnaW4tYm90dG9tOiAyMjRweDt9XHJcbi5tLWItMjI1IHttYXJnaW4tYm90dG9tOiAyMjVweDt9XHJcbi5tLWItMjI2IHttYXJnaW4tYm90dG9tOiAyMjZweDt9XHJcbi5tLWItMjI3IHttYXJnaW4tYm90dG9tOiAyMjdweDt9XHJcbi5tLWItMjI4IHttYXJnaW4tYm90dG9tOiAyMjhweDt9XHJcbi5tLWItMjI5IHttYXJnaW4tYm90dG9tOiAyMjlweDt9XHJcbi5tLWItMjMwIHttYXJnaW4tYm90dG9tOiAyMzBweDt9XHJcbi5tLWItMjMxIHttYXJnaW4tYm90dG9tOiAyMzFweDt9XHJcbi5tLWItMjMyIHttYXJnaW4tYm90dG9tOiAyMzJweDt9XHJcbi5tLWItMjMzIHttYXJnaW4tYm90dG9tOiAyMzNweDt9XHJcbi5tLWItMjM0IHttYXJnaW4tYm90dG9tOiAyMzRweDt9XHJcbi5tLWItMjM1IHttYXJnaW4tYm90dG9tOiAyMzVweDt9XHJcbi5tLWItMjM2IHttYXJnaW4tYm90dG9tOiAyMzZweDt9XHJcbi5tLWItMjM3IHttYXJnaW4tYm90dG9tOiAyMzdweDt9XHJcbi5tLWItMjM4IHttYXJnaW4tYm90dG9tOiAyMzhweDt9XHJcbi5tLWItMjM5IHttYXJnaW4tYm90dG9tOiAyMzlweDt9XHJcbi5tLWItMjQwIHttYXJnaW4tYm90dG9tOiAyNDBweDt9XHJcbi5tLWItMjQxIHttYXJnaW4tYm90dG9tOiAyNDFweDt9XHJcbi5tLWItMjQyIHttYXJnaW4tYm90dG9tOiAyNDJweDt9XHJcbi5tLWItMjQzIHttYXJnaW4tYm90dG9tOiAyNDNweDt9XHJcbi5tLWItMjQ0IHttYXJnaW4tYm90dG9tOiAyNDRweDt9XHJcbi5tLWItMjQ1IHttYXJnaW4tYm90dG9tOiAyNDVweDt9XHJcbi5tLWItMjQ2IHttYXJnaW4tYm90dG9tOiAyNDZweDt9XHJcbi5tLWItMjQ3IHttYXJnaW4tYm90dG9tOiAyNDdweDt9XHJcbi5tLWItMjQ4IHttYXJnaW4tYm90dG9tOiAyNDhweDt9XHJcbi5tLWItMjQ5IHttYXJnaW4tYm90dG9tOiAyNDlweDt9XHJcbi5tLWItMjUwIHttYXJnaW4tYm90dG9tOiAyNTBweDt9XHJcbi5tLWwtMCB7bWFyZ2luLWxlZnQ6IDBweDt9XHJcbi5tLWwtMSB7bWFyZ2luLWxlZnQ6IDFweDt9XHJcbi5tLWwtMiB7bWFyZ2luLWxlZnQ6IDJweDt9XHJcbi5tLWwtMyB7bWFyZ2luLWxlZnQ6IDNweDt9XHJcbi5tLWwtNCB7bWFyZ2luLWxlZnQ6IDRweDt9XHJcbi5tLWwtNSB7bWFyZ2luLWxlZnQ6IDVweDt9XHJcbi5tLWwtNiB7bWFyZ2luLWxlZnQ6IDZweDt9XHJcbi5tLWwtNyB7bWFyZ2luLWxlZnQ6IDdweDt9XHJcbi5tLWwtOCB7bWFyZ2luLWxlZnQ6IDhweDt9XHJcbi5tLWwtOSB7bWFyZ2luLWxlZnQ6IDlweDt9XHJcbi5tLWwtMTAge21hcmdpbi1sZWZ0OiAxMHB4O31cclxuLm0tbC0xMSB7bWFyZ2luLWxlZnQ6IDExcHg7fVxyXG4ubS1sLTEyIHttYXJnaW4tbGVmdDogMTJweDt9XHJcbi5tLWwtMTMge21hcmdpbi1sZWZ0OiAxM3B4O31cclxuLm0tbC0xNCB7bWFyZ2luLWxlZnQ6IDE0cHg7fVxyXG4ubS1sLTE1IHttYXJnaW4tbGVmdDogMTVweDt9XHJcbi5tLWwtMTYge21hcmdpbi1sZWZ0OiAxNnB4O31cclxuLm0tbC0xNyB7bWFyZ2luLWxlZnQ6IDE3cHg7fVxyXG4ubS1sLTE4IHttYXJnaW4tbGVmdDogMThweDt9XHJcbi5tLWwtMTkge21hcmdpbi1sZWZ0OiAxOXB4O31cclxuLm0tbC0yMCB7bWFyZ2luLWxlZnQ6IDIwcHg7fVxyXG4ubS1sLTIxIHttYXJnaW4tbGVmdDogMjFweDt9XHJcbi5tLWwtMjIge21hcmdpbi1sZWZ0OiAyMnB4O31cclxuLm0tbC0yMyB7bWFyZ2luLWxlZnQ6IDIzcHg7fVxyXG4ubS1sLTI0IHttYXJnaW4tbGVmdDogMjRweDt9XHJcbi5tLWwtMjUge21hcmdpbi1sZWZ0OiAyNXB4O31cclxuLm0tbC0yNiB7bWFyZ2luLWxlZnQ6IDI2cHg7fVxyXG4ubS1sLTI3IHttYXJnaW4tbGVmdDogMjdweDt9XHJcbi5tLWwtMjgge21hcmdpbi1sZWZ0OiAyOHB4O31cclxuLm0tbC0yOSB7bWFyZ2luLWxlZnQ6IDI5cHg7fVxyXG4ubS1sLTMwIHttYXJnaW4tbGVmdDogMzBweDt9XHJcbi5tLWwtMzEge21hcmdpbi1sZWZ0OiAzMXB4O31cclxuLm0tbC0zMiB7bWFyZ2luLWxlZnQ6IDMycHg7fVxyXG4ubS1sLTMzIHttYXJnaW4tbGVmdDogMzNweDt9XHJcbi5tLWwtMzQge21hcmdpbi1sZWZ0OiAzNHB4O31cclxuLm0tbC0zNSB7bWFyZ2luLWxlZnQ6IDM1cHg7fVxyXG4ubS1sLTM2IHttYXJnaW4tbGVmdDogMzZweDt9XHJcbi5tLWwtMzcge21hcmdpbi1sZWZ0OiAzN3B4O31cclxuLm0tbC0zOCB7bWFyZ2luLWxlZnQ6IDM4cHg7fVxyXG4ubS1sLTM5IHttYXJnaW4tbGVmdDogMzlweDt9XHJcbi5tLWwtNDAge21hcmdpbi1sZWZ0OiA0MHB4O31cclxuLm0tbC00MSB7bWFyZ2luLWxlZnQ6IDQxcHg7fVxyXG4ubS1sLTQyIHttYXJnaW4tbGVmdDogNDJweDt9XHJcbi5tLWwtNDMge21hcmdpbi1sZWZ0OiA0M3B4O31cclxuLm0tbC00NCB7bWFyZ2luLWxlZnQ6IDQ0cHg7fVxyXG4ubS1sLTQ1IHttYXJnaW4tbGVmdDogNDVweDt9XHJcbi5tLWwtNDYge21hcmdpbi1sZWZ0OiA0NnB4O31cclxuLm0tbC00NyB7bWFyZ2luLWxlZnQ6IDQ3cHg7fVxyXG4ubS1sLTQ4IHttYXJnaW4tbGVmdDogNDhweDt9XHJcbi5tLWwtNDkge21hcmdpbi1sZWZ0OiA0OXB4O31cclxuLm0tbC01MCB7bWFyZ2luLWxlZnQ6IDUwcHg7fVxyXG4ubS1sLTUxIHttYXJnaW4tbGVmdDogNTFweDt9XHJcbi5tLWwtNTIge21hcmdpbi1sZWZ0OiA1MnB4O31cclxuLm0tbC01MyB7bWFyZ2luLWxlZnQ6IDUzcHg7fVxyXG4ubS1sLTU0IHttYXJnaW4tbGVmdDogNTRweDt9XHJcbi5tLWwtNTUge21hcmdpbi1sZWZ0OiA1NXB4O31cclxuLm0tbC01NiB7bWFyZ2luLWxlZnQ6IDU2cHg7fVxyXG4ubS1sLTU3IHttYXJnaW4tbGVmdDogNTdweDt9XHJcbi5tLWwtNTgge21hcmdpbi1sZWZ0OiA1OHB4O31cclxuLm0tbC01OSB7bWFyZ2luLWxlZnQ6IDU5cHg7fVxyXG4ubS1sLTYwIHttYXJnaW4tbGVmdDogNjBweDt9XHJcbi5tLWwtNjEge21hcmdpbi1sZWZ0OiA2MXB4O31cclxuLm0tbC02MiB7bWFyZ2luLWxlZnQ6IDYycHg7fVxyXG4ubS1sLTYzIHttYXJnaW4tbGVmdDogNjNweDt9XHJcbi5tLWwtNjQge21hcmdpbi1sZWZ0OiA2NHB4O31cclxuLm0tbC02NSB7bWFyZ2luLWxlZnQ6IDY1cHg7fVxyXG4ubS1sLTY2IHttYXJnaW4tbGVmdDogNjZweDt9XHJcbi5tLWwtNjcge21hcmdpbi1sZWZ0OiA2N3B4O31cclxuLm0tbC02OCB7bWFyZ2luLWxlZnQ6IDY4cHg7fVxyXG4ubS1sLTY5IHttYXJnaW4tbGVmdDogNjlweDt9XHJcbi5tLWwtNzAge21hcmdpbi1sZWZ0OiA3MHB4O31cclxuLm0tbC03MSB7bWFyZ2luLWxlZnQ6IDcxcHg7fVxyXG4ubS1sLTcyIHttYXJnaW4tbGVmdDogNzJweDt9XHJcbi5tLWwtNzMge21hcmdpbi1sZWZ0OiA3M3B4O31cclxuLm0tbC03NCB7bWFyZ2luLWxlZnQ6IDc0cHg7fVxyXG4ubS1sLTc1IHttYXJnaW4tbGVmdDogNzVweDt9XHJcbi5tLWwtNzYge21hcmdpbi1sZWZ0OiA3NnB4O31cclxuLm0tbC03NyB7bWFyZ2luLWxlZnQ6IDc3cHg7fVxyXG4ubS1sLTc4IHttYXJnaW4tbGVmdDogNzhweDt9XHJcbi5tLWwtNzkge21hcmdpbi1sZWZ0OiA3OXB4O31cclxuLm0tbC04MCB7bWFyZ2luLWxlZnQ6IDgwcHg7fVxyXG4ubS1sLTgxIHttYXJnaW4tbGVmdDogODFweDt9XHJcbi5tLWwtODIge21hcmdpbi1sZWZ0OiA4MnB4O31cclxuLm0tbC04MyB7bWFyZ2luLWxlZnQ6IDgzcHg7fVxyXG4ubS1sLTg0IHttYXJnaW4tbGVmdDogODRweDt9XHJcbi5tLWwtODUge21hcmdpbi1sZWZ0OiA4NXB4O31cclxuLm0tbC04NiB7bWFyZ2luLWxlZnQ6IDg2cHg7fVxyXG4ubS1sLTg3IHttYXJnaW4tbGVmdDogODdweDt9XHJcbi5tLWwtODgge21hcmdpbi1sZWZ0OiA4OHB4O31cclxuLm0tbC04OSB7bWFyZ2luLWxlZnQ6IDg5cHg7fVxyXG4ubS1sLTkwIHttYXJnaW4tbGVmdDogOTBweDt9XHJcbi5tLWwtOTEge21hcmdpbi1sZWZ0OiA5MXB4O31cclxuLm0tbC05MiB7bWFyZ2luLWxlZnQ6IDkycHg7fVxyXG4ubS1sLTkzIHttYXJnaW4tbGVmdDogOTNweDt9XHJcbi5tLWwtOTQge21hcmdpbi1sZWZ0OiA5NHB4O31cclxuLm0tbC05NSB7bWFyZ2luLWxlZnQ6IDk1cHg7fVxyXG4ubS1sLTk2IHttYXJnaW4tbGVmdDogOTZweDt9XHJcbi5tLWwtOTcge21hcmdpbi1sZWZ0OiA5N3B4O31cclxuLm0tbC05OCB7bWFyZ2luLWxlZnQ6IDk4cHg7fVxyXG4ubS1sLTk5IHttYXJnaW4tbGVmdDogOTlweDt9XHJcbi5tLWwtMTAwIHttYXJnaW4tbGVmdDogMTAwcHg7fVxyXG4ubS1sLTEwMSB7bWFyZ2luLWxlZnQ6IDEwMXB4O31cclxuLm0tbC0xMDIge21hcmdpbi1sZWZ0OiAxMDJweDt9XHJcbi5tLWwtMTAzIHttYXJnaW4tbGVmdDogMTAzcHg7fVxyXG4ubS1sLTEwNCB7bWFyZ2luLWxlZnQ6IDEwNHB4O31cclxuLm0tbC0xMDUge21hcmdpbi1sZWZ0OiAxMDVweDt9XHJcbi5tLWwtMTA2IHttYXJnaW4tbGVmdDogMTA2cHg7fVxyXG4ubS1sLTEwNyB7bWFyZ2luLWxlZnQ6IDEwN3B4O31cclxuLm0tbC0xMDgge21hcmdpbi1sZWZ0OiAxMDhweDt9XHJcbi5tLWwtMTA5IHttYXJnaW4tbGVmdDogMTA5cHg7fVxyXG4ubS1sLTExMCB7bWFyZ2luLWxlZnQ6IDExMHB4O31cclxuLm0tbC0xMTEge21hcmdpbi1sZWZ0OiAxMTFweDt9XHJcbi5tLWwtMTEyIHttYXJnaW4tbGVmdDogMTEycHg7fVxyXG4ubS1sLTExMyB7bWFyZ2luLWxlZnQ6IDExM3B4O31cclxuLm0tbC0xMTQge21hcmdpbi1sZWZ0OiAxMTRweDt9XHJcbi5tLWwtMTE1IHttYXJnaW4tbGVmdDogMTE1cHg7fVxyXG4ubS1sLTExNiB7bWFyZ2luLWxlZnQ6IDExNnB4O31cclxuLm0tbC0xMTcge21hcmdpbi1sZWZ0OiAxMTdweDt9XHJcbi5tLWwtMTE4IHttYXJnaW4tbGVmdDogMTE4cHg7fVxyXG4ubS1sLTExOSB7bWFyZ2luLWxlZnQ6IDExOXB4O31cclxuLm0tbC0xMjAge21hcmdpbi1sZWZ0OiAxMjBweDt9XHJcbi5tLWwtMTIxIHttYXJnaW4tbGVmdDogMTIxcHg7fVxyXG4ubS1sLTEyMiB7bWFyZ2luLWxlZnQ6IDEyMnB4O31cclxuLm0tbC0xMjMge21hcmdpbi1sZWZ0OiAxMjNweDt9XHJcbi5tLWwtMTI0IHttYXJnaW4tbGVmdDogMTI0cHg7fVxyXG4ubS1sLTEyNSB7bWFyZ2luLWxlZnQ6IDEyNXB4O31cclxuLm0tbC0xMjYge21hcmdpbi1sZWZ0OiAxMjZweDt9XHJcbi5tLWwtMTI3IHttYXJnaW4tbGVmdDogMTI3cHg7fVxyXG4ubS1sLTEyOCB7bWFyZ2luLWxlZnQ6IDEyOHB4O31cclxuLm0tbC0xMjkge21hcmdpbi1sZWZ0OiAxMjlweDt9XHJcbi5tLWwtMTMwIHttYXJnaW4tbGVmdDogMTMwcHg7fVxyXG4ubS1sLTEzMSB7bWFyZ2luLWxlZnQ6IDEzMXB4O31cclxuLm0tbC0xMzIge21hcmdpbi1sZWZ0OiAxMzJweDt9XHJcbi5tLWwtMTMzIHttYXJnaW4tbGVmdDogMTMzcHg7fVxyXG4ubS1sLTEzNCB7bWFyZ2luLWxlZnQ6IDEzNHB4O31cclxuLm0tbC0xMzUge21hcmdpbi1sZWZ0OiAxMzVweDt9XHJcbi5tLWwtMTM2IHttYXJnaW4tbGVmdDogMTM2cHg7fVxyXG4ubS1sLTEzNyB7bWFyZ2luLWxlZnQ6IDEzN3B4O31cclxuLm0tbC0xMzgge21hcmdpbi1sZWZ0OiAxMzhweDt9XHJcbi5tLWwtMTM5IHttYXJnaW4tbGVmdDogMTM5cHg7fVxyXG4ubS1sLTE0MCB7bWFyZ2luLWxlZnQ6IDE0MHB4O31cclxuLm0tbC0xNDEge21hcmdpbi1sZWZ0OiAxNDFweDt9XHJcbi5tLWwtMTQyIHttYXJnaW4tbGVmdDogMTQycHg7fVxyXG4ubS1sLTE0MyB7bWFyZ2luLWxlZnQ6IDE0M3B4O31cclxuLm0tbC0xNDQge21hcmdpbi1sZWZ0OiAxNDRweDt9XHJcbi5tLWwtMTQ1IHttYXJnaW4tbGVmdDogMTQ1cHg7fVxyXG4ubS1sLTE0NiB7bWFyZ2luLWxlZnQ6IDE0NnB4O31cclxuLm0tbC0xNDcge21hcmdpbi1sZWZ0OiAxNDdweDt9XHJcbi5tLWwtMTQ4IHttYXJnaW4tbGVmdDogMTQ4cHg7fVxyXG4ubS1sLTE0OSB7bWFyZ2luLWxlZnQ6IDE0OXB4O31cclxuLm0tbC0xNTAge21hcmdpbi1sZWZ0OiAxNTBweDt9XHJcbi5tLWwtMTUxIHttYXJnaW4tbGVmdDogMTUxcHg7fVxyXG4ubS1sLTE1MiB7bWFyZ2luLWxlZnQ6IDE1MnB4O31cclxuLm0tbC0xNTMge21hcmdpbi1sZWZ0OiAxNTNweDt9XHJcbi5tLWwtMTU0IHttYXJnaW4tbGVmdDogMTU0cHg7fVxyXG4ubS1sLTE1NSB7bWFyZ2luLWxlZnQ6IDE1NXB4O31cclxuLm0tbC0xNTYge21hcmdpbi1sZWZ0OiAxNTZweDt9XHJcbi5tLWwtMTU3IHttYXJnaW4tbGVmdDogMTU3cHg7fVxyXG4ubS1sLTE1OCB7bWFyZ2luLWxlZnQ6IDE1OHB4O31cclxuLm0tbC0xNTkge21hcmdpbi1sZWZ0OiAxNTlweDt9XHJcbi5tLWwtMTYwIHttYXJnaW4tbGVmdDogMTYwcHg7fVxyXG4ubS1sLTE2MSB7bWFyZ2luLWxlZnQ6IDE2MXB4O31cclxuLm0tbC0xNjIge21hcmdpbi1sZWZ0OiAxNjJweDt9XHJcbi5tLWwtMTYzIHttYXJnaW4tbGVmdDogMTYzcHg7fVxyXG4ubS1sLTE2NCB7bWFyZ2luLWxlZnQ6IDE2NHB4O31cclxuLm0tbC0xNjUge21hcmdpbi1sZWZ0OiAxNjVweDt9XHJcbi5tLWwtMTY2IHttYXJnaW4tbGVmdDogMTY2cHg7fVxyXG4ubS1sLTE2NyB7bWFyZ2luLWxlZnQ6IDE2N3B4O31cclxuLm0tbC0xNjgge21hcmdpbi1sZWZ0OiAxNjhweDt9XHJcbi5tLWwtMTY5IHttYXJnaW4tbGVmdDogMTY5cHg7fVxyXG4ubS1sLTE3MCB7bWFyZ2luLWxlZnQ6IDE3MHB4O31cclxuLm0tbC0xNzEge21hcmdpbi1sZWZ0OiAxNzFweDt9XHJcbi5tLWwtMTcyIHttYXJnaW4tbGVmdDogMTcycHg7fVxyXG4ubS1sLTE3MyB7bWFyZ2luLWxlZnQ6IDE3M3B4O31cclxuLm0tbC0xNzQge21hcmdpbi1sZWZ0OiAxNzRweDt9XHJcbi5tLWwtMTc1IHttYXJnaW4tbGVmdDogMTc1cHg7fVxyXG4ubS1sLTE3NiB7bWFyZ2luLWxlZnQ6IDE3NnB4O31cclxuLm0tbC0xNzcge21hcmdpbi1sZWZ0OiAxNzdweDt9XHJcbi5tLWwtMTc4IHttYXJnaW4tbGVmdDogMTc4cHg7fVxyXG4ubS1sLTE3OSB7bWFyZ2luLWxlZnQ6IDE3OXB4O31cclxuLm0tbC0xODAge21hcmdpbi1sZWZ0OiAxODBweDt9XHJcbi5tLWwtMTgxIHttYXJnaW4tbGVmdDogMTgxcHg7fVxyXG4ubS1sLTE4MiB7bWFyZ2luLWxlZnQ6IDE4MnB4O31cclxuLm0tbC0xODMge21hcmdpbi1sZWZ0OiAxODNweDt9XHJcbi5tLWwtMTg0IHttYXJnaW4tbGVmdDogMTg0cHg7fVxyXG4ubS1sLTE4NSB7bWFyZ2luLWxlZnQ6IDE4NXB4O31cclxuLm0tbC0xODYge21hcmdpbi1sZWZ0OiAxODZweDt9XHJcbi5tLWwtMTg3IHttYXJnaW4tbGVmdDogMTg3cHg7fVxyXG4ubS1sLTE4OCB7bWFyZ2luLWxlZnQ6IDE4OHB4O31cclxuLm0tbC0xODkge21hcmdpbi1sZWZ0OiAxODlweDt9XHJcbi5tLWwtMTkwIHttYXJnaW4tbGVmdDogMTkwcHg7fVxyXG4ubS1sLTE5MSB7bWFyZ2luLWxlZnQ6IDE5MXB4O31cclxuLm0tbC0xOTIge21hcmdpbi1sZWZ0OiAxOTJweDt9XHJcbi5tLWwtMTkzIHttYXJnaW4tbGVmdDogMTkzcHg7fVxyXG4ubS1sLTE5NCB7bWFyZ2luLWxlZnQ6IDE5NHB4O31cclxuLm0tbC0xOTUge21hcmdpbi1sZWZ0OiAxOTVweDt9XHJcbi5tLWwtMTk2IHttYXJnaW4tbGVmdDogMTk2cHg7fVxyXG4ubS1sLTE5NyB7bWFyZ2luLWxlZnQ6IDE5N3B4O31cclxuLm0tbC0xOTgge21hcmdpbi1sZWZ0OiAxOThweDt9XHJcbi5tLWwtMTk5IHttYXJnaW4tbGVmdDogMTk5cHg7fVxyXG4ubS1sLTIwMCB7bWFyZ2luLWxlZnQ6IDIwMHB4O31cclxuLm0tbC0yMDEge21hcmdpbi1sZWZ0OiAyMDFweDt9XHJcbi5tLWwtMjAyIHttYXJnaW4tbGVmdDogMjAycHg7fVxyXG4ubS1sLTIwMyB7bWFyZ2luLWxlZnQ6IDIwM3B4O31cclxuLm0tbC0yMDQge21hcmdpbi1sZWZ0OiAyMDRweDt9XHJcbi5tLWwtMjA1IHttYXJnaW4tbGVmdDogMjA1cHg7fVxyXG4ubS1sLTIwNiB7bWFyZ2luLWxlZnQ6IDIwNnB4O31cclxuLm0tbC0yMDcge21hcmdpbi1sZWZ0OiAyMDdweDt9XHJcbi5tLWwtMjA4IHttYXJnaW4tbGVmdDogMjA4cHg7fVxyXG4ubS1sLTIwOSB7bWFyZ2luLWxlZnQ6IDIwOXB4O31cclxuLm0tbC0yMTAge21hcmdpbi1sZWZ0OiAyMTBweDt9XHJcbi5tLWwtMjExIHttYXJnaW4tbGVmdDogMjExcHg7fVxyXG4ubS1sLTIxMiB7bWFyZ2luLWxlZnQ6IDIxMnB4O31cclxuLm0tbC0yMTMge21hcmdpbi1sZWZ0OiAyMTNweDt9XHJcbi5tLWwtMjE0IHttYXJnaW4tbGVmdDogMjE0cHg7fVxyXG4ubS1sLTIxNSB7bWFyZ2luLWxlZnQ6IDIxNXB4O31cclxuLm0tbC0yMTYge21hcmdpbi1sZWZ0OiAyMTZweDt9XHJcbi5tLWwtMjE3IHttYXJnaW4tbGVmdDogMjE3cHg7fVxyXG4ubS1sLTIxOCB7bWFyZ2luLWxlZnQ6IDIxOHB4O31cclxuLm0tbC0yMTkge21hcmdpbi1sZWZ0OiAyMTlweDt9XHJcbi5tLWwtMjIwIHttYXJnaW4tbGVmdDogMjIwcHg7fVxyXG4ubS1sLTIyMSB7bWFyZ2luLWxlZnQ6IDIyMXB4O31cclxuLm0tbC0yMjIge21hcmdpbi1sZWZ0OiAyMjJweDt9XHJcbi5tLWwtMjIzIHttYXJnaW4tbGVmdDogMjIzcHg7fVxyXG4ubS1sLTIyNCB7bWFyZ2luLWxlZnQ6IDIyNHB4O31cclxuLm0tbC0yMjUge21hcmdpbi1sZWZ0OiAyMjVweDt9XHJcbi5tLWwtMjI2IHttYXJnaW4tbGVmdDogMjI2cHg7fVxyXG4ubS1sLTIyNyB7bWFyZ2luLWxlZnQ6IDIyN3B4O31cclxuLm0tbC0yMjgge21hcmdpbi1sZWZ0OiAyMjhweDt9XHJcbi5tLWwtMjI5IHttYXJnaW4tbGVmdDogMjI5cHg7fVxyXG4ubS1sLTIzMCB7bWFyZ2luLWxlZnQ6IDIzMHB4O31cclxuLm0tbC0yMzEge21hcmdpbi1sZWZ0OiAyMzFweDt9XHJcbi5tLWwtMjMyIHttYXJnaW4tbGVmdDogMjMycHg7fVxyXG4ubS1sLTIzMyB7bWFyZ2luLWxlZnQ6IDIzM3B4O31cclxuLm0tbC0yMzQge21hcmdpbi1sZWZ0OiAyMzRweDt9XHJcbi5tLWwtMjM1IHttYXJnaW4tbGVmdDogMjM1cHg7fVxyXG4ubS1sLTIzNiB7bWFyZ2luLWxlZnQ6IDIzNnB4O31cclxuLm0tbC0yMzcge21hcmdpbi1sZWZ0OiAyMzdweDt9XHJcbi5tLWwtMjM4IHttYXJnaW4tbGVmdDogMjM4cHg7fVxyXG4ubS1sLTIzOSB7bWFyZ2luLWxlZnQ6IDIzOXB4O31cclxuLm0tbC0yNDAge21hcmdpbi1sZWZ0OiAyNDBweDt9XHJcbi5tLWwtMjQxIHttYXJnaW4tbGVmdDogMjQxcHg7fVxyXG4ubS1sLTI0MiB7bWFyZ2luLWxlZnQ6IDI0MnB4O31cclxuLm0tbC0yNDMge21hcmdpbi1sZWZ0OiAyNDNweDt9XHJcbi5tLWwtMjQ0IHttYXJnaW4tbGVmdDogMjQ0cHg7fVxyXG4ubS1sLTI0NSB7bWFyZ2luLWxlZnQ6IDI0NXB4O31cclxuLm0tbC0yNDYge21hcmdpbi1sZWZ0OiAyNDZweDt9XHJcbi5tLWwtMjQ3IHttYXJnaW4tbGVmdDogMjQ3cHg7fVxyXG4ubS1sLTI0OCB7bWFyZ2luLWxlZnQ6IDI0OHB4O31cclxuLm0tbC0yNDkge21hcmdpbi1sZWZ0OiAyNDlweDt9XHJcbi5tLWwtMjUwIHttYXJnaW4tbGVmdDogMjUwcHg7fVxyXG4ubS1yLTAge21hcmdpbi1yaWdodDogMHB4O31cclxuLm0tci0xIHttYXJnaW4tcmlnaHQ6IDFweDt9XHJcbi5tLXItMiB7bWFyZ2luLXJpZ2h0OiAycHg7fVxyXG4ubS1yLTMge21hcmdpbi1yaWdodDogM3B4O31cclxuLm0tci00IHttYXJnaW4tcmlnaHQ6IDRweDt9XHJcbi5tLXItNSB7bWFyZ2luLXJpZ2h0OiA1cHg7fVxyXG4ubS1yLTYge21hcmdpbi1yaWdodDogNnB4O31cclxuLm0tci03IHttYXJnaW4tcmlnaHQ6IDdweDt9XHJcbi5tLXItOCB7bWFyZ2luLXJpZ2h0OiA4cHg7fVxyXG4ubS1yLTkge21hcmdpbi1yaWdodDogOXB4O31cclxuLm0tci0xMCB7bWFyZ2luLXJpZ2h0OiAxMHB4O31cclxuLm0tci0xMSB7bWFyZ2luLXJpZ2h0OiAxMXB4O31cclxuLm0tci0xMiB7bWFyZ2luLXJpZ2h0OiAxMnB4O31cclxuLm0tci0xMyB7bWFyZ2luLXJpZ2h0OiAxM3B4O31cclxuLm0tci0xNCB7bWFyZ2luLXJpZ2h0OiAxNHB4O31cclxuLm0tci0xNSB7bWFyZ2luLXJpZ2h0OiAxNXB4O31cclxuLm0tci0xNiB7bWFyZ2luLXJpZ2h0OiAxNnB4O31cclxuLm0tci0xNyB7bWFyZ2luLXJpZ2h0OiAxN3B4O31cclxuLm0tci0xOCB7bWFyZ2luLXJpZ2h0OiAxOHB4O31cclxuLm0tci0xOSB7bWFyZ2luLXJpZ2h0OiAxOXB4O31cclxuLm0tci0yMCB7bWFyZ2luLXJpZ2h0OiAyMHB4O31cclxuLm0tci0yMSB7bWFyZ2luLXJpZ2h0OiAyMXB4O31cclxuLm0tci0yMiB7bWFyZ2luLXJpZ2h0OiAyMnB4O31cclxuLm0tci0yMyB7bWFyZ2luLXJpZ2h0OiAyM3B4O31cclxuLm0tci0yNCB7bWFyZ2luLXJpZ2h0OiAyNHB4O31cclxuLm0tci0yNSB7bWFyZ2luLXJpZ2h0OiAyNXB4O31cclxuLm0tci0yNiB7bWFyZ2luLXJpZ2h0OiAyNnB4O31cclxuLm0tci0yNyB7bWFyZ2luLXJpZ2h0OiAyN3B4O31cclxuLm0tci0yOCB7bWFyZ2luLXJpZ2h0OiAyOHB4O31cclxuLm0tci0yOSB7bWFyZ2luLXJpZ2h0OiAyOXB4O31cclxuLm0tci0zMCB7bWFyZ2luLXJpZ2h0OiAzMHB4O31cclxuLm0tci0zMSB7bWFyZ2luLXJpZ2h0OiAzMXB4O31cclxuLm0tci0zMiB7bWFyZ2luLXJpZ2h0OiAzMnB4O31cclxuLm0tci0zMyB7bWFyZ2luLXJpZ2h0OiAzM3B4O31cclxuLm0tci0zNCB7bWFyZ2luLXJpZ2h0OiAzNHB4O31cclxuLm0tci0zNSB7bWFyZ2luLXJpZ2h0OiAzNXB4O31cclxuLm0tci0zNiB7bWFyZ2luLXJpZ2h0OiAzNnB4O31cclxuLm0tci0zNyB7bWFyZ2luLXJpZ2h0OiAzN3B4O31cclxuLm0tci0zOCB7bWFyZ2luLXJpZ2h0OiAzOHB4O31cclxuLm0tci0zOSB7bWFyZ2luLXJpZ2h0OiAzOXB4O31cclxuLm0tci00MCB7bWFyZ2luLXJpZ2h0OiA0MHB4O31cclxuLm0tci00MSB7bWFyZ2luLXJpZ2h0OiA0MXB4O31cclxuLm0tci00MiB7bWFyZ2luLXJpZ2h0OiA0MnB4O31cclxuLm0tci00MyB7bWFyZ2luLXJpZ2h0OiA0M3B4O31cclxuLm0tci00NCB7bWFyZ2luLXJpZ2h0OiA0NHB4O31cclxuLm0tci00NSB7bWFyZ2luLXJpZ2h0OiA0NXB4O31cclxuLm0tci00NiB7bWFyZ2luLXJpZ2h0OiA0NnB4O31cclxuLm0tci00NyB7bWFyZ2luLXJpZ2h0OiA0N3B4O31cclxuLm0tci00OCB7bWFyZ2luLXJpZ2h0OiA0OHB4O31cclxuLm0tci00OSB7bWFyZ2luLXJpZ2h0OiA0OXB4O31cclxuLm0tci01MCB7bWFyZ2luLXJpZ2h0OiA1MHB4O31cclxuLm0tci01MSB7bWFyZ2luLXJpZ2h0OiA1MXB4O31cclxuLm0tci01MiB7bWFyZ2luLXJpZ2h0OiA1MnB4O31cclxuLm0tci01MyB7bWFyZ2luLXJpZ2h0OiA1M3B4O31cclxuLm0tci01NCB7bWFyZ2luLXJpZ2h0OiA1NHB4O31cclxuLm0tci01NSB7bWFyZ2luLXJpZ2h0OiA1NXB4O31cclxuLm0tci01NiB7bWFyZ2luLXJpZ2h0OiA1NnB4O31cclxuLm0tci01NyB7bWFyZ2luLXJpZ2h0OiA1N3B4O31cclxuLm0tci01OCB7bWFyZ2luLXJpZ2h0OiA1OHB4O31cclxuLm0tci01OSB7bWFyZ2luLXJpZ2h0OiA1OXB4O31cclxuLm0tci02MCB7bWFyZ2luLXJpZ2h0OiA2MHB4O31cclxuLm0tci02MSB7bWFyZ2luLXJpZ2h0OiA2MXB4O31cclxuLm0tci02MiB7bWFyZ2luLXJpZ2h0OiA2MnB4O31cclxuLm0tci02MyB7bWFyZ2luLXJpZ2h0OiA2M3B4O31cclxuLm0tci02NCB7bWFyZ2luLXJpZ2h0OiA2NHB4O31cclxuLm0tci02NSB7bWFyZ2luLXJpZ2h0OiA2NXB4O31cclxuLm0tci02NiB7bWFyZ2luLXJpZ2h0OiA2NnB4O31cclxuLm0tci02NyB7bWFyZ2luLXJpZ2h0OiA2N3B4O31cclxuLm0tci02OCB7bWFyZ2luLXJpZ2h0OiA2OHB4O31cclxuLm0tci02OSB7bWFyZ2luLXJpZ2h0OiA2OXB4O31cclxuLm0tci03MCB7bWFyZ2luLXJpZ2h0OiA3MHB4O31cclxuLm0tci03MSB7bWFyZ2luLXJpZ2h0OiA3MXB4O31cclxuLm0tci03MiB7bWFyZ2luLXJpZ2h0OiA3MnB4O31cclxuLm0tci03MyB7bWFyZ2luLXJpZ2h0OiA3M3B4O31cclxuLm0tci03NCB7bWFyZ2luLXJpZ2h0OiA3NHB4O31cclxuLm0tci03NSB7bWFyZ2luLXJpZ2h0OiA3NXB4O31cclxuLm0tci03NiB7bWFyZ2luLXJpZ2h0OiA3NnB4O31cclxuLm0tci03NyB7bWFyZ2luLXJpZ2h0OiA3N3B4O31cclxuLm0tci03OCB7bWFyZ2luLXJpZ2h0OiA3OHB4O31cclxuLm0tci03OSB7bWFyZ2luLXJpZ2h0OiA3OXB4O31cclxuLm0tci04MCB7bWFyZ2luLXJpZ2h0OiA4MHB4O31cclxuLm0tci04MSB7bWFyZ2luLXJpZ2h0OiA4MXB4O31cclxuLm0tci04MiB7bWFyZ2luLXJpZ2h0OiA4MnB4O31cclxuLm0tci04MyB7bWFyZ2luLXJpZ2h0OiA4M3B4O31cclxuLm0tci04NCB7bWFyZ2luLXJpZ2h0OiA4NHB4O31cclxuLm0tci04NSB7bWFyZ2luLXJpZ2h0OiA4NXB4O31cclxuLm0tci04NiB7bWFyZ2luLXJpZ2h0OiA4NnB4O31cclxuLm0tci04NyB7bWFyZ2luLXJpZ2h0OiA4N3B4O31cclxuLm0tci04OCB7bWFyZ2luLXJpZ2h0OiA4OHB4O31cclxuLm0tci04OSB7bWFyZ2luLXJpZ2h0OiA4OXB4O31cclxuLm0tci05MCB7bWFyZ2luLXJpZ2h0OiA5MHB4O31cclxuLm0tci05MSB7bWFyZ2luLXJpZ2h0OiA5MXB4O31cclxuLm0tci05MiB7bWFyZ2luLXJpZ2h0OiA5MnB4O31cclxuLm0tci05MyB7bWFyZ2luLXJpZ2h0OiA5M3B4O31cclxuLm0tci05NCB7bWFyZ2luLXJpZ2h0OiA5NHB4O31cclxuLm0tci05NSB7bWFyZ2luLXJpZ2h0OiA5NXB4O31cclxuLm0tci05NiB7bWFyZ2luLXJpZ2h0OiA5NnB4O31cclxuLm0tci05NyB7bWFyZ2luLXJpZ2h0OiA5N3B4O31cclxuLm0tci05OCB7bWFyZ2luLXJpZ2h0OiA5OHB4O31cclxuLm0tci05OSB7bWFyZ2luLXJpZ2h0OiA5OXB4O31cclxuLm0tci0xMDAge21hcmdpbi1yaWdodDogMTAwcHg7fVxyXG4ubS1yLTEwMSB7bWFyZ2luLXJpZ2h0OiAxMDFweDt9XHJcbi5tLXItMTAyIHttYXJnaW4tcmlnaHQ6IDEwMnB4O31cclxuLm0tci0xMDMge21hcmdpbi1yaWdodDogMTAzcHg7fVxyXG4ubS1yLTEwNCB7bWFyZ2luLXJpZ2h0OiAxMDRweDt9XHJcbi5tLXItMTA1IHttYXJnaW4tcmlnaHQ6IDEwNXB4O31cclxuLm0tci0xMDYge21hcmdpbi1yaWdodDogMTA2cHg7fVxyXG4ubS1yLTEwNyB7bWFyZ2luLXJpZ2h0OiAxMDdweDt9XHJcbi5tLXItMTA4IHttYXJnaW4tcmlnaHQ6IDEwOHB4O31cclxuLm0tci0xMDkge21hcmdpbi1yaWdodDogMTA5cHg7fVxyXG4ubS1yLTExMCB7bWFyZ2luLXJpZ2h0OiAxMTBweDt9XHJcbi5tLXItMTExIHttYXJnaW4tcmlnaHQ6IDExMXB4O31cclxuLm0tci0xMTIge21hcmdpbi1yaWdodDogMTEycHg7fVxyXG4ubS1yLTExMyB7bWFyZ2luLXJpZ2h0OiAxMTNweDt9XHJcbi5tLXItMTE0IHttYXJnaW4tcmlnaHQ6IDExNHB4O31cclxuLm0tci0xMTUge21hcmdpbi1yaWdodDogMTE1cHg7fVxyXG4ubS1yLTExNiB7bWFyZ2luLXJpZ2h0OiAxMTZweDt9XHJcbi5tLXItMTE3IHttYXJnaW4tcmlnaHQ6IDExN3B4O31cclxuLm0tci0xMTgge21hcmdpbi1yaWdodDogMTE4cHg7fVxyXG4ubS1yLTExOSB7bWFyZ2luLXJpZ2h0OiAxMTlweDt9XHJcbi5tLXItMTIwIHttYXJnaW4tcmlnaHQ6IDEyMHB4O31cclxuLm0tci0xMjEge21hcmdpbi1yaWdodDogMTIxcHg7fVxyXG4ubS1yLTEyMiB7bWFyZ2luLXJpZ2h0OiAxMjJweDt9XHJcbi5tLXItMTIzIHttYXJnaW4tcmlnaHQ6IDEyM3B4O31cclxuLm0tci0xMjQge21hcmdpbi1yaWdodDogMTI0cHg7fVxyXG4ubS1yLTEyNSB7bWFyZ2luLXJpZ2h0OiAxMjVweDt9XHJcbi5tLXItMTI2IHttYXJnaW4tcmlnaHQ6IDEyNnB4O31cclxuLm0tci0xMjcge21hcmdpbi1yaWdodDogMTI3cHg7fVxyXG4ubS1yLTEyOCB7bWFyZ2luLXJpZ2h0OiAxMjhweDt9XHJcbi5tLXItMTI5IHttYXJnaW4tcmlnaHQ6IDEyOXB4O31cclxuLm0tci0xMzAge21hcmdpbi1yaWdodDogMTMwcHg7fVxyXG4ubS1yLTEzMSB7bWFyZ2luLXJpZ2h0OiAxMzFweDt9XHJcbi5tLXItMTMyIHttYXJnaW4tcmlnaHQ6IDEzMnB4O31cclxuLm0tci0xMzMge21hcmdpbi1yaWdodDogMTMzcHg7fVxyXG4ubS1yLTEzNCB7bWFyZ2luLXJpZ2h0OiAxMzRweDt9XHJcbi5tLXItMTM1IHttYXJnaW4tcmlnaHQ6IDEzNXB4O31cclxuLm0tci0xMzYge21hcmdpbi1yaWdodDogMTM2cHg7fVxyXG4ubS1yLTEzNyB7bWFyZ2luLXJpZ2h0OiAxMzdweDt9XHJcbi5tLXItMTM4IHttYXJnaW4tcmlnaHQ6IDEzOHB4O31cclxuLm0tci0xMzkge21hcmdpbi1yaWdodDogMTM5cHg7fVxyXG4ubS1yLTE0MCB7bWFyZ2luLXJpZ2h0OiAxNDBweDt9XHJcbi5tLXItMTQxIHttYXJnaW4tcmlnaHQ6IDE0MXB4O31cclxuLm0tci0xNDIge21hcmdpbi1yaWdodDogMTQycHg7fVxyXG4ubS1yLTE0MyB7bWFyZ2luLXJpZ2h0OiAxNDNweDt9XHJcbi5tLXItMTQ0IHttYXJnaW4tcmlnaHQ6IDE0NHB4O31cclxuLm0tci0xNDUge21hcmdpbi1yaWdodDogMTQ1cHg7fVxyXG4ubS1yLTE0NiB7bWFyZ2luLXJpZ2h0OiAxNDZweDt9XHJcbi5tLXItMTQ3IHttYXJnaW4tcmlnaHQ6IDE0N3B4O31cclxuLm0tci0xNDgge21hcmdpbi1yaWdodDogMTQ4cHg7fVxyXG4ubS1yLTE0OSB7bWFyZ2luLXJpZ2h0OiAxNDlweDt9XHJcbi5tLXItMTUwIHttYXJnaW4tcmlnaHQ6IDE1MHB4O31cclxuLm0tci0xNTEge21hcmdpbi1yaWdodDogMTUxcHg7fVxyXG4ubS1yLTE1MiB7bWFyZ2luLXJpZ2h0OiAxNTJweDt9XHJcbi5tLXItMTUzIHttYXJnaW4tcmlnaHQ6IDE1M3B4O31cclxuLm0tci0xNTQge21hcmdpbi1yaWdodDogMTU0cHg7fVxyXG4ubS1yLTE1NSB7bWFyZ2luLXJpZ2h0OiAxNTVweDt9XHJcbi5tLXItMTU2IHttYXJnaW4tcmlnaHQ6IDE1NnB4O31cclxuLm0tci0xNTcge21hcmdpbi1yaWdodDogMTU3cHg7fVxyXG4ubS1yLTE1OCB7bWFyZ2luLXJpZ2h0OiAxNThweDt9XHJcbi5tLXItMTU5IHttYXJnaW4tcmlnaHQ6IDE1OXB4O31cclxuLm0tci0xNjAge21hcmdpbi1yaWdodDogMTYwcHg7fVxyXG4ubS1yLTE2MSB7bWFyZ2luLXJpZ2h0OiAxNjFweDt9XHJcbi5tLXItMTYyIHttYXJnaW4tcmlnaHQ6IDE2MnB4O31cclxuLm0tci0xNjMge21hcmdpbi1yaWdodDogMTYzcHg7fVxyXG4ubS1yLTE2NCB7bWFyZ2luLXJpZ2h0OiAxNjRweDt9XHJcbi5tLXItMTY1IHttYXJnaW4tcmlnaHQ6IDE2NXB4O31cclxuLm0tci0xNjYge21hcmdpbi1yaWdodDogMTY2cHg7fVxyXG4ubS1yLTE2NyB7bWFyZ2luLXJpZ2h0OiAxNjdweDt9XHJcbi5tLXItMTY4IHttYXJnaW4tcmlnaHQ6IDE2OHB4O31cclxuLm0tci0xNjkge21hcmdpbi1yaWdodDogMTY5cHg7fVxyXG4ubS1yLTE3MCB7bWFyZ2luLXJpZ2h0OiAxNzBweDt9XHJcbi5tLXItMTcxIHttYXJnaW4tcmlnaHQ6IDE3MXB4O31cclxuLm0tci0xNzIge21hcmdpbi1yaWdodDogMTcycHg7fVxyXG4ubS1yLTE3MyB7bWFyZ2luLXJpZ2h0OiAxNzNweDt9XHJcbi5tLXItMTc0IHttYXJnaW4tcmlnaHQ6IDE3NHB4O31cclxuLm0tci0xNzUge21hcmdpbi1yaWdodDogMTc1cHg7fVxyXG4ubS1yLTE3NiB7bWFyZ2luLXJpZ2h0OiAxNzZweDt9XHJcbi5tLXItMTc3IHttYXJnaW4tcmlnaHQ6IDE3N3B4O31cclxuLm0tci0xNzgge21hcmdpbi1yaWdodDogMTc4cHg7fVxyXG4ubS1yLTE3OSB7bWFyZ2luLXJpZ2h0OiAxNzlweDt9XHJcbi5tLXItMTgwIHttYXJnaW4tcmlnaHQ6IDE4MHB4O31cclxuLm0tci0xODEge21hcmdpbi1yaWdodDogMTgxcHg7fVxyXG4ubS1yLTE4MiB7bWFyZ2luLXJpZ2h0OiAxODJweDt9XHJcbi5tLXItMTgzIHttYXJnaW4tcmlnaHQ6IDE4M3B4O31cclxuLm0tci0xODQge21hcmdpbi1yaWdodDogMTg0cHg7fVxyXG4ubS1yLTE4NSB7bWFyZ2luLXJpZ2h0OiAxODVweDt9XHJcbi5tLXItMTg2IHttYXJnaW4tcmlnaHQ6IDE4NnB4O31cclxuLm0tci0xODcge21hcmdpbi1yaWdodDogMTg3cHg7fVxyXG4ubS1yLTE4OCB7bWFyZ2luLXJpZ2h0OiAxODhweDt9XHJcbi5tLXItMTg5IHttYXJnaW4tcmlnaHQ6IDE4OXB4O31cclxuLm0tci0xOTAge21hcmdpbi1yaWdodDogMTkwcHg7fVxyXG4ubS1yLTE5MSB7bWFyZ2luLXJpZ2h0OiAxOTFweDt9XHJcbi5tLXItMTkyIHttYXJnaW4tcmlnaHQ6IDE5MnB4O31cclxuLm0tci0xOTMge21hcmdpbi1yaWdodDogMTkzcHg7fVxyXG4ubS1yLTE5NCB7bWFyZ2luLXJpZ2h0OiAxOTRweDt9XHJcbi5tLXItMTk1IHttYXJnaW4tcmlnaHQ6IDE5NXB4O31cclxuLm0tci0xOTYge21hcmdpbi1yaWdodDogMTk2cHg7fVxyXG4ubS1yLTE5NyB7bWFyZ2luLXJpZ2h0OiAxOTdweDt9XHJcbi5tLXItMTk4IHttYXJnaW4tcmlnaHQ6IDE5OHB4O31cclxuLm0tci0xOTkge21hcmdpbi1yaWdodDogMTk5cHg7fVxyXG4ubS1yLTIwMCB7bWFyZ2luLXJpZ2h0OiAyMDBweDt9XHJcbi5tLXItMjAxIHttYXJnaW4tcmlnaHQ6IDIwMXB4O31cclxuLm0tci0yMDIge21hcmdpbi1yaWdodDogMjAycHg7fVxyXG4ubS1yLTIwMyB7bWFyZ2luLXJpZ2h0OiAyMDNweDt9XHJcbi5tLXItMjA0IHttYXJnaW4tcmlnaHQ6IDIwNHB4O31cclxuLm0tci0yMDUge21hcmdpbi1yaWdodDogMjA1cHg7fVxyXG4ubS1yLTIwNiB7bWFyZ2luLXJpZ2h0OiAyMDZweDt9XHJcbi5tLXItMjA3IHttYXJnaW4tcmlnaHQ6IDIwN3B4O31cclxuLm0tci0yMDgge21hcmdpbi1yaWdodDogMjA4cHg7fVxyXG4ubS1yLTIwOSB7bWFyZ2luLXJpZ2h0OiAyMDlweDt9XHJcbi5tLXItMjEwIHttYXJnaW4tcmlnaHQ6IDIxMHB4O31cclxuLm0tci0yMTEge21hcmdpbi1yaWdodDogMjExcHg7fVxyXG4ubS1yLTIxMiB7bWFyZ2luLXJpZ2h0OiAyMTJweDt9XHJcbi5tLXItMjEzIHttYXJnaW4tcmlnaHQ6IDIxM3B4O31cclxuLm0tci0yMTQge21hcmdpbi1yaWdodDogMjE0cHg7fVxyXG4ubS1yLTIxNSB7bWFyZ2luLXJpZ2h0OiAyMTVweDt9XHJcbi5tLXItMjE2IHttYXJnaW4tcmlnaHQ6IDIxNnB4O31cclxuLm0tci0yMTcge21hcmdpbi1yaWdodDogMjE3cHg7fVxyXG4ubS1yLTIxOCB7bWFyZ2luLXJpZ2h0OiAyMThweDt9XHJcbi5tLXItMjE5IHttYXJnaW4tcmlnaHQ6IDIxOXB4O31cclxuLm0tci0yMjAge21hcmdpbi1yaWdodDogMjIwcHg7fVxyXG4ubS1yLTIyMSB7bWFyZ2luLXJpZ2h0OiAyMjFweDt9XHJcbi5tLXItMjIyIHttYXJnaW4tcmlnaHQ6IDIyMnB4O31cclxuLm0tci0yMjMge21hcmdpbi1yaWdodDogMjIzcHg7fVxyXG4ubS1yLTIyNCB7bWFyZ2luLXJpZ2h0OiAyMjRweDt9XHJcbi5tLXItMjI1IHttYXJnaW4tcmlnaHQ6IDIyNXB4O31cclxuLm0tci0yMjYge21hcmdpbi1yaWdodDogMjI2cHg7fVxyXG4ubS1yLTIyNyB7bWFyZ2luLXJpZ2h0OiAyMjdweDt9XHJcbi5tLXItMjI4IHttYXJnaW4tcmlnaHQ6IDIyOHB4O31cclxuLm0tci0yMjkge21hcmdpbi1yaWdodDogMjI5cHg7fVxyXG4ubS1yLTIzMCB7bWFyZ2luLXJpZ2h0OiAyMzBweDt9XHJcbi5tLXItMjMxIHttYXJnaW4tcmlnaHQ6IDIzMXB4O31cclxuLm0tci0yMzIge21hcmdpbi1yaWdodDogMjMycHg7fVxyXG4ubS1yLTIzMyB7bWFyZ2luLXJpZ2h0OiAyMzNweDt9XHJcbi5tLXItMjM0IHttYXJnaW4tcmlnaHQ6IDIzNHB4O31cclxuLm0tci0yMzUge21hcmdpbi1yaWdodDogMjM1cHg7fVxyXG4ubS1yLTIzNiB7bWFyZ2luLXJpZ2h0OiAyMzZweDt9XHJcbi5tLXItMjM3IHttYXJnaW4tcmlnaHQ6IDIzN3B4O31cclxuLm0tci0yMzgge21hcmdpbi1yaWdodDogMjM4cHg7fVxyXG4ubS1yLTIzOSB7bWFyZ2luLXJpZ2h0OiAyMzlweDt9XHJcbi5tLXItMjQwIHttYXJnaW4tcmlnaHQ6IDI0MHB4O31cclxuLm0tci0yNDEge21hcmdpbi1yaWdodDogMjQxcHg7fVxyXG4ubS1yLTI0MiB7bWFyZ2luLXJpZ2h0OiAyNDJweDt9XHJcbi5tLXItMjQzIHttYXJnaW4tcmlnaHQ6IDI0M3B4O31cclxuLm0tci0yNDQge21hcmdpbi1yaWdodDogMjQ0cHg7fVxyXG4ubS1yLTI0NSB7bWFyZ2luLXJpZ2h0OiAyNDVweDt9XHJcbi5tLXItMjQ2IHttYXJnaW4tcmlnaHQ6IDI0NnB4O31cclxuLm0tci0yNDcge21hcmdpbi1yaWdodDogMjQ3cHg7fVxyXG4ubS1yLTI0OCB7bWFyZ2luLXJpZ2h0OiAyNDhweDt9XHJcbi5tLXItMjQ5IHttYXJnaW4tcmlnaHQ6IDI0OXB4O31cclxuLm0tci0yNTAge21hcmdpbi1yaWdodDogMjUwcHg7fVxyXG4ubS1sLXItYXV0byB7bWFyZ2luLWxlZnQ6IGF1dG87XHRtYXJnaW4tcmlnaHQ6IGF1dG87fVxyXG4ubS1sLWF1dG8ge21hcmdpbi1sZWZ0OiBhdXRvO31cclxuLm0tci1hdXRvIHttYXJnaW4tcmlnaHQ6IGF1dG87fVxyXG5cclxuXHJcblxyXG4vKlsgVEVYVCBdXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiovXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4udGV4dC13aGl0ZSB7Y29sb3I6IHdoaXRlO31cclxuLnRleHQtYmxhY2sge2NvbG9yOiBibGFjazt9XHJcblxyXG4udGV4dC1ob3Ytd2hpdGU6aG92ZXIge2NvbG9yOiB3aGl0ZTt9XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLnRleHQtdXAge3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7fVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi50ZXh0LWNlbnRlciB7dGV4dC1hbGlnbjogY2VudGVyO31cclxuLnRleHQtbGVmdCB7dGV4dC1hbGlnbjogbGVmdDt9XHJcbi50ZXh0LXJpZ2h0IHt0ZXh0LWFsaWduOiByaWdodDt9XHJcbi50ZXh0LW1pZGRsZSB7dmVydGljYWwtYWxpZ246IG1pZGRsZTt9XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmxoLTEtMCB7bGluZS1oZWlnaHQ6IDEuMDt9XHJcbi5saC0xLTEge2xpbmUtaGVpZ2h0OiAxLjE7fVxyXG4ubGgtMS0yIHtsaW5lLWhlaWdodDogMS4yO31cclxuLmxoLTEtMyB7bGluZS1oZWlnaHQ6IDEuMzt9XHJcbi5saC0xLTQge2xpbmUtaGVpZ2h0OiAxLjQ7fVxyXG4ubGgtMS01IHtsaW5lLWhlaWdodDogMS41O31cclxuLmxoLTEtNiB7bGluZS1oZWlnaHQ6IDEuNjt9XHJcbi5saC0xLTcge2xpbmUtaGVpZ2h0OiAxLjc7fVxyXG4ubGgtMS04IHtsaW5lLWhlaWdodDogMS44O31cclxuLmxoLTEtOSB7bGluZS1oZWlnaHQ6IDEuOTt9XHJcbi5saC0yLTAge2xpbmUtaGVpZ2h0OiAyLjA7fVxyXG4ubGgtMi0xIHtsaW5lLWhlaWdodDogMi4xO31cclxuLmxoLTItMiB7bGluZS1oZWlnaHQ6IDIuMjt9XHJcbi5saC0yLTMge2xpbmUtaGVpZ2h0OiAyLjM7fVxyXG4ubGgtMi00IHtsaW5lLWhlaWdodDogMi40O31cclxuLmxoLTItNSB7bGluZS1oZWlnaHQ6IDIuNTt9XHJcbi5saC0yLTYge2xpbmUtaGVpZ2h0OiAyLjY7fVxyXG4ubGgtMi03IHtsaW5lLWhlaWdodDogMi43O31cclxuLmxoLTItOCB7bGluZS1oZWlnaHQ6IDIuODt9XHJcbi5saC0yLTkge2xpbmUtaGVpZ2h0OiAyLjk7fVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qWyBTSEFQRSBdXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiovXHJcblxyXG4vKlsgRGlzcGxheSBdXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbi5kaXMtbm9uZSB7ZGlzcGxheTogbm9uZTt9XHJcbi5kaXMtYmxvY2sge2Rpc3BsYXk6IGJsb2NrO31cclxuLmRpcy1pbmxpbmUge2Rpc3BsYXk6IGlubGluZTt9XHJcbi5kaXMtaW5saW5lLWJsb2NrIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG4uZGlzLWZsZXgge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4vKlsgUG9zaXRpb24gXVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG4ucG9zLXJlbGF0aXZlIHtwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4ucG9zLWFic29sdXRlIHtwb3NpdGlvbjogYWJzb2x1dGU7fVxyXG4ucG9zLWZpeGVkIHtwb3NpdGlvbjogZml4ZWQ7fVxyXG5cclxuLypbIGZsb2F0IF1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuLmZsb2F0LWwge2Zsb2F0OiBsZWZ0O31cclxuLmZsb2F0LXIge2Zsb2F0OiByaWdodDt9XHJcblxyXG5cclxuLypbIFdpZHRoICYgSGVpZ2h0IF1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuLnNpemVmdWxsIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnctZnVsbCB7d2lkdGg6IDEwMCU7fVxyXG4uaC1mdWxsIHtoZWlnaHQ6IDEwMCU7fVxyXG4ubWF4LXctZnVsbCB7bWF4LXdpZHRoOiAxMDAlO31cclxuLm1heC1oLWZ1bGwge21heC1oZWlnaHQ6IDEwMCU7fVxyXG4ubWluLXctZnVsbCB7bWluLXdpZHRoOiAxMDAlO31cclxuLm1pbi1oLWZ1bGwge21pbi1oZWlnaHQ6IDEwMCU7fVxyXG5cclxuLypbIFRvcCBCb3R0b20gTGVmdCBSaWdodCBdXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbi50b3AtMCB7dG9wOiAwO31cclxuLmJvdHRvbS0wIHtib3R0b206IDA7fVxyXG4ubGVmdC0wIHtsZWZ0OiAwO31cclxuLnJpZ2h0LTAge3JpZ2h0OiAwO31cclxuXHJcbi50b3AtYXV0byB7dG9wOiBhdXRvO31cclxuLmJvdHRvbS1hdXRvIHtib3R0b206IGF1dG87fVxyXG4ubGVmdC1hdXRvIHtsZWZ0OiBhdXRvO31cclxuLnJpZ2h0LWF1dG8ge3JpZ2h0OiBhdXRvO31cclxuXHJcblxyXG4vKlsgT3BhY2l0eSBdXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbi5vcC0wLTAge29wYWNpdHk6IDA7fVxyXG4ub3AtMC0xIHtvcGFjaXR5OiAwLjE7fVxyXG4ub3AtMC0yIHtvcGFjaXR5OiAwLjI7fVxyXG4ub3AtMC0zIHtvcGFjaXR5OiAwLjM7fVxyXG4ub3AtMC00IHtvcGFjaXR5OiAwLjQ7fVxyXG4ub3AtMC01IHtvcGFjaXR5OiAwLjU7fVxyXG4ub3AtMC02IHtvcGFjaXR5OiAwLjY7fVxyXG4ub3AtMC03IHtvcGFjaXR5OiAwLjc7fVxyXG4ub3AtMC04IHtvcGFjaXR5OiAwLjg7fVxyXG4ub3AtMC05IHtvcGFjaXR5OiAwLjk7fVxyXG4ub3AtMS0wIHtvcGFjaXR5OiAxO31cclxuXHJcbi8qWyBCYWNrZ3JvdW5kIF1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuLmJnd2hpdGUge2JhY2tncm91bmQtY29sb3I6IHdoaXRlO31cclxuLmJnYmxhY2sge2JhY2tncm91bmQtY29sb3I6IGJsYWNrO31cclxuXHJcblxyXG5cclxuLypbIFdyYXAgUGljdHVyZSBdXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbi53cmFwLXBpYy13IGltZyB7d2lkdGg6IDEwMCU7fVxyXG4ud3JhcC1waWMtbWF4LXcgaW1nIHttYXgtd2lkdGg6IDEwMCU7fVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi53cmFwLXBpYy1oIGltZyB7aGVpZ2h0OiAxMDAlO31cclxuLndyYXAtcGljLW1heC1oIGltZyB7bWF4LWhlaWdodDogMTAwJTt9XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLndyYXAtcGljLWNpciB7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLndyYXAtcGljLWNpciBpbWcge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qWyBIb3ZlciBdXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbi5ob3YtcG9pbnRlcjpob3ZlciB7Y3Vyc29yOiBwb2ludGVyO31cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uaG92LWltZy16b29tIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5ob3YtaW1nLXpvb20gaW1ne1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNnM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC42cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNnM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42cztcclxufVxyXG4uaG92LWltZy16b29tOmhvdmVyIGltZyB7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgXHQtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICBcdC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgXHQtby10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qWyAgXVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG4uYm8tY2lyIHtib3JkZXItcmFkaXVzOiA1MCU7fVxyXG5cclxuLm9mLWhpZGRlbiB7b3ZlcmZsb3c6IGhpZGRlbjt9XHJcblxyXG4udmlzaWJsZS1mYWxzZSB7dmlzaWJpbGl0eTogaGlkZGVuO31cclxuLnZpc2libGUtdHJ1ZSB7dmlzaWJpbGl0eTogdmlzaWJsZTt9XHJcblxyXG5cclxuXHJcblxyXG4vKlsgVHJhbnNpdGlvbiBdXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbi50cmFucy0wLTEge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4xcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcclxufVxyXG4udHJhbnMtMC0yIHtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuLnRyYW5zLTAtMyB7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcbi50cmFucy0wLTQge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxufVxyXG4udHJhbnMtMC01IHtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn1cclxuLnRyYW5zLTAtNiB7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC42cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjZzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC42cztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjZzO1xyXG59XHJcbi50cmFucy0wLTkge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuOXM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC45cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuOXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC45cztcclxufVxyXG4udHJhbnMtMS0wIHtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAxcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG59XHJcblxyXG5cclxuXHJcbi8qWyBMYXlvdXQgXVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4qL1xyXG5cclxuLypbIEZsZXggXVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmZsZXgtdyB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XHJcblx0LW1vei1mbGV4LXdyYXA6IHdyYXA7XHJcblx0LW1zLWZsZXgtd3JhcDogd3JhcDtcclxuXHQtby1mbGV4LXdyYXA6IHdyYXA7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmZsZXgtbCB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uZmxleC1yIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uZmxleC1jIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXgtc2Ege1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uZmxleC1zYiB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmZsZXgtdCB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LW1zLWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uZmxleC1iIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmZsZXgtbSB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXgtc3RyIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtbXMtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uZmxleC1yb3cge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHQtbW96LWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0LW8tZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uZmxleC1yb3ctcmV2IHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuXHQtbW96LWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuXHQtbXMtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG5cdC1vLWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuXHJcbi5mbGV4LWNvbCB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtby1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5mbGV4LWNvbC1yZXYge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5mbGV4LWMtbSB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0LW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXgtYy10IHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5mbGV4LWMtYiB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0LW1zLWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5mbGV4LWMtc3RyIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHQtbXMtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbi5mbGV4LWwtbSB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4LXItbSB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleC1zYS1tIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleC1zYi1tIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0LW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5mbGV4LWNvbC1sIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1vLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5mbGV4LWNvbC1yIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1vLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmZsZXgtY29sLWMge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4LWNvbC1sLW0ge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tcy1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXgtY29sLXItbSB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtby1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1zLWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4LWNvbC1jLW0ge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4LWNvbC1zdHIge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tcy1hbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG5cclxuLmZsZXgtY29sLXNiIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1vLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uZmxleC1jb2wtcmV2LWwge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5mbGV4LWNvbC1yZXYtciB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHQtby1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdC1tcy1hbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uZmxleC1jb2wtcmV2LWMge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleC1jb2wtcmV2LXN0ciB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHQtby1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdC1tcy1hbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG5cclxuXHJcbi8qWyBBYnNvbHV0ZSBdXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbi5hYi1jLW0ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDUwJTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBcdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgXHQtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmFiLWMtdCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMHB4O1xyXG5cdGxlZnQ6IDUwJTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBcdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBcdC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcbi5hYi1jLWIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3R0b206IDBweDtcclxuXHRsZWZ0OiA1MCU7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgXHQtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgXHQtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcblxyXG4uYWItbC1tIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMHB4O1xyXG5cdHRvcDogNTAlO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIFx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIFx0LW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuLmFiLXItbSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAwcHg7XHJcblx0dG9wOiA1MCU7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgXHQtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgXHQtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4uYWItdC1sIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMHB4O1xyXG5cdHRvcDogMHB4O1xyXG59XHJcblxyXG4uYWItdC1yIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDBweDtcclxuXHR0b3A6IDBweDtcclxufVxyXG5cclxuLmFiLWItbCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDBweDtcclxuXHRib3R0b206IDBweDtcclxufVxyXG5cclxuLmFiLWItciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAwcHg7XHJcblx0Ym90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmVudHJ5LXRpdGxle1xyXG5cdC8qIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTsgKi9cclxuXHQgICAgLyogbWFyZ2luLWxlZnQ6IDE3JSAqL1xyXG5cdC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTsgKi9cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI1O1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBwYWRkaW5nOiA0JSAwIDUlOyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiA3MiU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgLyogbWFyZ2luLXRvcDogMTAlOyAqL1xyXG4gICAgLyogbWFyZ2luOiAwIGF1dG87ICovXHJcbiAgIGNvbG9yOiAjZjNmZGY3O1xyXG4gdGV4dC1zaGFkb3c6ICAgNnB4IDRweCAyMHB4IHJnYmEoMTgsIDQwLCA3LCAwLjQpXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIC5kYXJrIHtcclxuXHQgYmFja2dyb3VuZDogIzI0MjUyYTtcclxufVxyXG5cclxuXHJcblxyXG4gYS5idHRuIHtcclxuXHQgY29sb3I6IzA3NTcyN2UzO1xyXG5cdCB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0IC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZTtcclxuXHQgdHJhbnNpdGlvbjogMC4zcyBlYXNlIGFsbDtcclxufVxyXG4gYS5idHRuOmhvdmVyIHtcclxuXHQgY29sb3I6ICNmZmY7XHJcbn1cclxuIGEuYnR0bjpmb2N1cyB7XHJcblx0IGNvbG9yOiAjZmZmO1xyXG59XHJcbiBcclxuIGEuYnR0bi1kYXJrOmhvdmVyIHtcclxuXHQgY29sb3I6ICNmZmY7XHJcbn1cclxuIGEuYnR0bi1kYXJrOmZvY3VzIHtcclxuXHQgY29sb3I6ICNmZmY7XHJcbn1cclxuIC5idHRuT3Bke1xyXG5cdCAgZm9udC1zaXplOiAzMHB4O1xyXG5cdCBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG5cdCB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdCBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0IHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHQgd2lkdGg6IDI3MHB4O1xyXG5cdCBmb250LXdlaWdodDogYm9sZDtcclxuXHQgcGFkZGluZzogMTRweCAwcHg7XHJcblx0IC8qIGJvcmRlcjogM3B4IHNvbGlkIzA3NTcyN2UzOyAqL1xyXG5cdCBib3JkZXItcmFkaXVzOiAycHg7XHJcblx0IHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG5cclxuLmJ0dG5sYWJ7XHJcblx0IGZvbnQtc2l6ZTogMzBweDtcclxuXHQgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuXHQgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHQgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdCB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0IHdpZHRoOiAyNzBweDtcclxuXHQgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0IHBhZGRpbmc6IDE0cHggMHB4O1xyXG5cdCAvKiBib3JkZXI6IDNweCBzb2xpZCMwNzViYmJlODsgKi9cclxuXHQgYm9yZGVyLXJhZGl1czogMnB4O1xyXG5cdCBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0IGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmJ0dG5QaGFybWFjeXtcclxuXHQgIGZvbnQtc2l6ZTogMzBweDtcclxuXHQgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuXHQgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHQgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdCB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0IHdpZHRoOiAyNzBweDtcclxuXHQgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0IHBhZGRpbmc6IDE0cHggMHB4O1xyXG5cdCAvKiBib3JkZXI6IDNweCBzb2xpZCMwNzU3MjdlMzsgKi9cclxuXHQgYm9yZGVyLXJhZGl1czogMnB4O1xyXG5cdCBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0IGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHJcbiAgICAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4ubWFrZUl0Q2VudGVye1xyXG4gICAgbWFyZ2luLXRvcDogMTYwcHg7XHJcbn1cclxuXHJcbi5idHRuUGhhcm1hY3ksLmJ0dG5PcGQsLmJ0dG5sYWJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk1MTI2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRib3gtc2hhZG93OiAxcHggM3B4IDIwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMzgpLCAxcHggM3B4IDIwcHggMjBweCByZ2JhKDAsMCwwLDAuMTkpO1xyXG4gICAgLyogYm9yZGVyLXJhZGl1czogODAlOyAqL1xyXG59XHJcblxyXG4uYnR0blBoYXJtYWN5OmhvdmVyLC5idHRuT3BkOmhvdmVyLC5idHRubGFiOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzoxcHggM3B4IDIwcHggMHB4IHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcbn0gXHJcbmhye1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuIC5idHRuUGhhcm1hY3kge1xyXG5cdFx0LyogbWFyZ2luLWxlZnQ6IDAlOyAqL1xyXG5cdFx0Y29sb3I6Z3JlZW47XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _my_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../my-service.service */ "./src/app/my-service.service.ts");







let LoginPageComponent = class LoginPageComponent {
    constructor(router, messageService, _location, service) {
        this.router = router;
        this.messageService = messageService;
        this._location = _location;
        this.service = service;
        this.showErrorMessage = false;
    }
    ngOnInit() {
        this.deleteAllHistory = this._location.isCurrentPathEqualTo('pharmacy');
        this.labUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].labUrl;
        this.opdUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].opdUrl;
        this.pharmacyUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].pharmacyUrl;
    }
    check(uname, p) {
        // var output = this.service.checkUserandPass(uname, p);
        this.service.checkUserandPass(uname, p).subscribe(res => {
            // console.log('toker', res);
            var getType = res.result.userType.toUpperCase();
            if (getType == "LAB" || getType == "PHARMACY") {
                this.errorMethod("Unauthorized for PHARMACY application");
                this.showErrorMessage = true;
            }
            else if (getType = "ADMIN" || false) {
                this.credentials(res);
                this.succesMethod();
                this.showErrorMessage = false;
                this.goToPharmacy();
            }
            else {
                this.showErrorMessage = true;
                this.errorMethod("Not Authorized");
            }
        }, error => {
            this.showErrorMessage = true;
            // console.log(error);
            this.errorMethod("Not Authorized");
        });
    }
    credentials(res) {
        sessionStorage.setItem('token', res.result.token);
        this.userName = sessionStorage.setItem('username', res.result.username);
        this.email = sessionStorage.setItem('email', res.result.email);
        this.userType = sessionStorage.setItem('userType', res.result.userType);
        this.getType = sessionStorage.getItem('userType').toUpperCase();
    }
    succesMethod() {
        this.messageService.add({
            severity: 'success',
            summary: 'Service Message',
            detail: 'Login Succesful'
        });
    }
    errorMethod(msg) {
        this.messageService.add({
            severity: 'error',
            summary: msg.toString(),
            detail: 'retry login'
        });
    }
    goToPharmacy() {
        setTimeout(() => {
            this.router.navigate(['/sales']);
        }, 1000);
    }
};
LoginPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _my_service_service__WEBPACK_IMPORTED_MODULE_6__["MyServiceService"] }
];
LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-page.component.css */ "./src/app/login-page/login-page.component.css")).default]
    })
], LoginPageComponent);



/***/ }),

/***/ "./src/app/my-service.service.ts":
/*!***************************************!*\
  !*** ./src/app/my-service.service.ts ***!
  \***************************************/
/*! exports provided: MyServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyServiceService", function() { return MyServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let MyServiceService = class MyServiceService {
    constructor(http) {
        this.http = http;
    }
    checkUserandPass(name, pwd) {
        let user = {
            username: name,
            password: pwd
        };
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].tokenURL + "token/generate-token", user);
    }
};
MyServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MyServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MyServiceService);



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.fa-2x {\r\nfont-size: 2em;\r\n}\r\n.fa {\r\nposition: relative;\r\ndisplay: table-cell;\r\nwidth: 60px;\r\nheight: 36px;\r\ntext-align: center;\r\nvertical-align: middle;\r\nfont-size:20px;\r\n}\r\n#nav_bar ul li a.active-page\r\n{\r\n  background-color:blue;\r\n}\r\n.main-menu:hover,nav.main-menu.expanded {\r\nwidth:250px;\r\noverflow:visible;\r\n}\r\n.main-menu {\r\nbackground:#479761;\r\nborder-right:1px solid #e5e5e5;\r\nposition:absolute;\r\ntop:0;\r\nbottom:0;\r\nheight:100%;\r\nleft:0;\r\nwidth:64px;\r\noverflow:hidden;\r\n/* -webkit-transition:width .05s linear; */\r\ntransition: .5s ;\r\n/* -webkit-transform:translateZ(0) scale(1,1); */\r\nz-index: 1;\r\n}\r\n.main-menu>ul {\r\nmargin:7px 0;\r\n}\r\n.main-menu li {\r\nposition:relative;\r\ndisplay:block;\r\nwidth:250px;\r\n}\r\n.main-menu li>a {\r\nposition:relative;\r\ndisplay:table;\r\nborder-collapse:collapse;\r\nborder-spacing:0;\r\ncolor:white;\r\n font-family: arial;\r\nfont-size: 14px;\r\ntext-decoration:none;\r\n/* -webkit-transform:translateZ(0) scale(1,1); */\r\n/* -webkit-transition:all .1s linear; */\r\ntransition:all .3s linear;\r\n  \r\n}\r\n.main-menu .nav-icon {\r\nposition:relative;\r\ndisplay:table-cell;\r\nwidth:60px;\r\nheight:36px;\r\ncolor: pink !important;\r\ntext-align:center;\r\nvertical-align:middle;\r\nfont-size:18px;\r\n}\r\n.main-menu .nav-text {\r\nposition:relative;\r\ndisplay:table-cell;\r\nvertical-align:middle;\r\nwidth:190px;\r\n  font-family: 'Titillium Web', sans-serif;\r\n\r\n}\r\n.main-menu>ul.logout {\r\n\r\nposition:relative;\r\nleft:0;\r\nbottom:0;\r\n}\r\n.no-touch .scrollable.hover {\r\noverflow-y:hidden;\r\n}\r\n.no-touch .scrollable.hover:hover {\r\noverflow-y:auto;\r\noverflow:visible;\r\n}\r\na:hover,a:focus {\r\ntext-decoration:none;\r\n}\r\nnav {\r\n-webkit-user-select:none;\r\n-moz-user-select:none;\r\n-ms-user-select:none;\r\n-o-user-select:none;\r\nuser-select:none;\r\n}\r\nnav ul,nav li {\r\noutline:0;\r\nmargin:0;\r\npadding:0;\r\n}\r\n.main-menu li:hover>a,nav.main-menu li.active>a,.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus,.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus,.no-touch .dashboard-page nav.dashboard-menu ul li:hover a,.dashboard-page nav.dashboard-menu ul li.active a {\r\ncolor:#fff;\r\nbackground-color:#5fa2db;\r\n}\r\n.area {\r\nfloat: left;\r\nbackground: #e2e2e2;\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n@font-face {\r\n  font-family: 'Titillium Web';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: local('Titillium WebLight'), local('TitilliumWeb-Light'), url(http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff) format('woff');\r\n}\r\n.imgClass{\r\n    width:58px;\r\n    height: 50px;\r\n    margin-left: 2px; \r\n}\r\n.nav li {\r\n    padding: 0px;\r\n    display: inline;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n.navbar-nav {\r\n    /* display: flex; */\r\n    flex-direction: row;\r\n}\r\n.navbarCss {\r\n    background-color: #479761 !important;\r\n}\r\n/* a.logout:hover {\r\n    border-color: teal;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n} */\r\n/* a.username:hover {\r\n    text-decoration: none;\r\n} */\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLFdBQVc7QUFDWCxZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0QixjQUFjO0FBQ2Q7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7QUFFQTtBQUNBLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEI7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQiw4QkFBOEI7QUFDOUIsaUJBQWlCO0FBQ2pCLEtBQUs7QUFDTCxRQUFRO0FBQ1IsV0FBVztBQUNYLE1BQU07QUFDTixVQUFVO0FBQ1YsZUFBZTtBQUNmLDBDQUEwQztBQUMxQyxnQkFBZ0I7QUFDaEIsZ0RBQWdEO0FBQ2hELFVBQVU7QUFDVjtBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBRUE7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYix3QkFBd0I7QUFDeEIsZ0JBQWdCO0FBQ2hCLFdBQVc7Q0FDVixrQkFBa0I7QUFDbkIsZUFBZTtBQUNmLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsdUNBQXVDO0FBQ3ZDLHlCQUF5Qjs7QUFFekI7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsVUFBVTtBQUNWLFdBQVc7QUFDWCxzQkFBc0I7QUFDdEIsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQixjQUFjO0FBQ2Q7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIscUJBQXFCO0FBQ3JCLFdBQVc7RUFDVCx3Q0FBd0M7O0FBRTFDO0FBRUE7O0FBRUEsaUJBQWlCO0FBQ2pCLE1BQU07QUFDTixRQUFRO0FBQ1I7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUVBO0FBQ0EsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQjtBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBRUE7QUFDQSx3QkFBd0I7QUFDeEIscUJBQXFCO0FBQ3JCLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCO0FBRUE7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSLFNBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBVTtBQUNWLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsV0FBVztBQUNYLG1CQUFtQjtBQUNuQixXQUFXO0FBQ1gsWUFBWTtBQUNaO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvTUFBb007QUFDdE07QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG9DQUFvQztBQUN4QztBQUdBOzs7O0dBSUc7QUFHSDs7R0FFRyIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mYS0yeCB7XHJcbmZvbnQtc2l6ZTogMmVtO1xyXG59XHJcbi5mYSB7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuZGlzcGxheTogdGFibGUtY2VsbDtcclxud2lkdGg6IDYwcHg7XHJcbmhlaWdodDogMzZweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5mb250LXNpemU6MjBweDtcclxufVxyXG5cclxuI25hdl9iYXIgdWwgbGkgYS5hY3RpdmUtcGFnZVxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpibHVlO1xyXG59XHJcblxyXG4ubWFpbi1tZW51OmhvdmVyLG5hdi5tYWluLW1lbnUuZXhwYW5kZWQge1xyXG53aWR0aDoyNTBweDtcclxub3ZlcmZsb3c6dmlzaWJsZTtcclxufVxyXG5cclxuLm1haW4tbWVudSB7XHJcbmJhY2tncm91bmQ6IzQ3OTc2MTtcclxuYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZTVlNWU1O1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjA7XHJcbmJvdHRvbTowO1xyXG5oZWlnaHQ6MTAwJTtcclxubGVmdDowO1xyXG53aWR0aDo2NHB4O1xyXG5vdmVyZmxvdzpoaWRkZW47XHJcbi8qIC13ZWJraXQtdHJhbnNpdGlvbjp3aWR0aCAuMDVzIGxpbmVhcjsgKi9cclxudHJhbnNpdGlvbjogLjVzIDtcclxuLyogLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKSBzY2FsZSgxLDEpOyAqL1xyXG56LWluZGV4OiAxO1xyXG59XHJcblxyXG4ubWFpbi1tZW51PnVsIHtcclxubWFyZ2luOjdweCAwO1xyXG59XHJcblxyXG4ubWFpbi1tZW51IGxpIHtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmRpc3BsYXk6YmxvY2s7XHJcbndpZHRoOjI1MHB4O1xyXG59XHJcblxyXG4ubWFpbi1tZW51IGxpPmEge1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuZGlzcGxheTp0YWJsZTtcclxuYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO1xyXG5ib3JkZXItc3BhY2luZzowO1xyXG5jb2xvcjp3aGl0ZTtcclxuIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuZm9udC1zaXplOiAxNHB4O1xyXG50ZXh0LWRlY29yYXRpb246bm9uZTtcclxuLyogLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKSBzY2FsZSgxLDEpOyAqL1xyXG4vKiAtd2Via2l0LXRyYW5zaXRpb246YWxsIC4xcyBsaW5lYXI7ICovXHJcbnRyYW5zaXRpb246YWxsIC4zcyBsaW5lYXI7XHJcbiAgXHJcbn1cclxuXHJcbi5tYWluLW1lbnUgLm5hdi1pY29uIHtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmRpc3BsYXk6dGFibGUtY2VsbDtcclxud2lkdGg6NjBweDtcclxuaGVpZ2h0OjM2cHg7XHJcbmNvbG9yOiBwaW5rICFpbXBvcnRhbnQ7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG52ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG59XHJcblxyXG4ubWFpbi1tZW51IC5uYXYtdGV4dCB7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5kaXNwbGF5OnRhYmxlLWNlbGw7XHJcbnZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxud2lkdGg6MTkwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuXHJcbi5tYWluLW1lbnU+dWwubG9nb3V0IHtcclxuXHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5sZWZ0OjA7XHJcbmJvdHRvbTowO1xyXG59XHJcblxyXG4ubm8tdG91Y2ggLnNjcm9sbGFibGUuaG92ZXIge1xyXG5vdmVyZmxvdy15OmhpZGRlbjtcclxufVxyXG5cclxuLm5vLXRvdWNoIC5zY3JvbGxhYmxlLmhvdmVyOmhvdmVyIHtcclxub3ZlcmZsb3cteTphdXRvO1xyXG5vdmVyZmxvdzp2aXNpYmxlO1xyXG59XHJcblxyXG5hOmhvdmVyLGE6Zm9jdXMge1xyXG50ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG5cclxubmF2IHtcclxuLXdlYmtpdC11c2VyLXNlbGVjdDpub25lO1xyXG4tbW96LXVzZXItc2VsZWN0Om5vbmU7XHJcbi1tcy11c2VyLXNlbGVjdDpub25lO1xyXG4tby11c2VyLXNlbGVjdDpub25lO1xyXG51c2VyLXNlbGVjdDpub25lO1xyXG59XHJcblxyXG5uYXYgdWwsbmF2IGxpIHtcclxub3V0bGluZTowO1xyXG5tYXJnaW46MDtcclxucGFkZGluZzowO1xyXG59XHJcbi5tYWluLW1lbnUgbGk6aG92ZXI+YSxuYXYubWFpbi1tZW51IGxpLmFjdGl2ZT5hLC5kcm9wZG93bi1tZW51PmxpPmE6aG92ZXIsLmRyb3Bkb3duLW1lbnU+bGk+YTpmb2N1cywuZHJvcGRvd24tbWVudT4uYWN0aXZlPmEsLmRyb3Bkb3duLW1lbnU+LmFjdGl2ZT5hOmhvdmVyLC5kcm9wZG93bi1tZW51Pi5hY3RpdmU+YTpmb2N1cywubm8tdG91Y2ggLmRhc2hib2FyZC1wYWdlIG5hdi5kYXNoYm9hcmQtbWVudSB1bCBsaTpob3ZlciBhLC5kYXNoYm9hcmQtcGFnZSBuYXYuZGFzaGJvYXJkLW1lbnUgdWwgbGkuYWN0aXZlIGEge1xyXG5jb2xvcjojZmZmO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiM1ZmEyZGI7XHJcbn1cclxuLmFyZWEge1xyXG5mbG9hdDogbGVmdDtcclxuYmFja2dyb3VuZDogI2UyZTJlMjtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMTAwJTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHNyYzogbG9jYWwoJ1RpdGlsbGl1bSBXZWJMaWdodCcpLCBsb2NhbCgnVGl0aWxsaXVtV2ViLUxpZ2h0JyksIHVybChodHRwOi8vdGhlbWVzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9zdGF0aWMvZm9udHMvdGl0aWxsaXVtd2ViL3YyL2FuTVV2Y05UMEgxWU40RklJOHdwcjI0Yk5DTkVvRlRwUzJCVGpGNkZCNUUud29mZikgZm9ybWF0KCd3b2ZmJyk7XHJcbn1cclxuXHJcbi5pbWdDbGFzc3tcclxuICAgIHdpZHRoOjU4cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4OyBcclxufVxyXG4ubmF2IGxpIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiB7XHJcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLm5hdmJhckNzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc5NzYxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKiBhLmxvZ291dDpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHRlYWw7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbn0gKi9cclxuXHJcblxyXG4vKiBhLnVzZXJuYW1lOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSAqL1xyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NavBarComponent = class NavBarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    routeToCompanylist() { this.router.navigate(['/companylist']); }
    routetoproductregistrationlist() { this.router.navigate(['/productregistrationlist']); }
    routetodrugformationList() { this.router.navigate(['/drugformationlist']); }
    routeToAddDrugs() { this.router.navigate(['/addDrugs']); }
    routeToSalesList() { this.router.navigate(['salesList']); }
    routeToDashboard() { this.router.navigate(['dashboard']); }
    routeToGrn() { this.router.navigate(['grnlist']); }
    routeToPrintProducts() { this.router.navigate(['printproduct']); }
    logout() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('userType');
        this.router.navigate(['']);
    }
};
NavBarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")).default]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/print-products/print-products.component.css":
/*!*************************************************************!*\
  !*** ./src/app/print-products/print-products.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaW50LXByb2R1Y3RzL3ByaW50LXByb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/print-products/print-products.component.ts":
/*!************************************************************!*\
  !*** ./src/app/print-products/print-products.component.ts ***!
  \************************************************************/
/*! exports provided: PrintProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintProductsComponent", function() { return PrintProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PrintProductsComponent = class PrintProductsComponent {
    constructor() { }
    ngOnInit() {
    }
};
PrintProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-print-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./print-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/print-products/print-products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./print-products.component.css */ "./src/app/print-products/print-products.component.css")).default]
    })
], PrintProductsComponent);



/***/ }),

/***/ "./src/app/product-details/product-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product-details/product-details.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/product-details/product-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product-details/product-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Services_product_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/product-registration.service */ "./src/app/Services/product-registration.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _product_registration_product_registration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-registration/product-registration */ "./src/app/product-registration/product-registration.ts");






let ProductDetailsComponent = class ProductDetailsComponent {
    constructor(route, activateRoute, service, _DomSanitizationService) {
        this.route = route;
        this.activateRoute = activateRoute;
        this.service = service;
        this._DomSanitizationService = _DomSanitizationService;
        this.product = new _product_registration_product_registration__WEBPACK_IMPORTED_MODULE_5__["productRegistration"]();
    }
    ngOnInit() {
        this.id = this.activateRoute.snapshot.params['id'];
        if (this.id)
            this.getProduct(this.id);
    }
    getProduct(id) {
        this.service.getbyid(id).subscribe((response) => {
            console.log(response);
            this.product = response;
            this.product.qrCode = "data:image/png;base64,";
            this.product.companyProd = response.companyProd.name;
            this.product.qrCode += response.qrcode;
            // this.grn = response;
        });
    }
    routeBack() {
        history.go(-1);
    }
};
ProductDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _Services_product_registration_service__WEBPACK_IMPORTED_MODULE_3__["ProductRegistrationService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-details.component.css */ "./src/app/product-details/product-details.component.css")).default]
    })
], ProductDetailsComponent);



/***/ }),

/***/ "./src/app/product-registration-list/product-registration-list.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/product-registration-list/product-registration-list.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hoverGrn:hover{\r\n    background-color:#479761 !important;\r\n    color: white;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1yZWdpc3RyYXRpb24tbGlzdC9wcm9kdWN0LXJlZ2lzdHJhdGlvbi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1yZWdpc3RyYXRpb24tbGlzdC9wcm9kdWN0LXJlZ2lzdHJhdGlvbi1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG92ZXJHcm46aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0Nzk3NjEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH0iXX0= */");

/***/ }),

/***/ "./src/app/product-registration-list/product-registration-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/product-registration-list/product-registration-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductRegistrationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRegistrationListComponent", function() { return ProductRegistrationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Services_product_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/product-registration.service */ "./src/app/Services/product-registration.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);





let ProductRegistrationListComponent = class ProductRegistrationListComponent {
    constructor(router, productregistrationservice, messageservice) {
        this.router = router;
        this.productregistrationservice = productregistrationservice;
        this.messageservice = messageservice;
        this.columns = [];
        this.printingDataArray = [];
    }
    ngOnInit() {
        this.showallproductregistration();
    }
    routertoproductregistration() {
        this.router.navigate(['productreg']);
    }
    goBack() {
        window.history.go(-1);
    }
    showallproductregistration() {
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'panelName', header: 'product name' },
            { field: 'panelType', header: 'formula' },
            { field: 'panelStartDate', header: 'box rate' },
        ];
        this.columns = [
            { field: 'id', header: 'ID' },
            { field: 'name', header: "Product Name" },
            { field: 'qrCode', header: 'QR code' }
        ];
        this.productRegistration = [];
        this.printingDataArray = [];
        this.productregistrationservice.getallproductregistration().subscribe(data => {
            console.log(data);
            data.map(p => {
                this.productRegistration.push({
                    id: p.id,
                    name: p.productName,
                    company: p.companyProd.name,
                    drugformation: p.drugFormation.type,
                    formula: p.formula,
                    packing: p.packing,
                    boxrate: p.boxRate,
                    minstock: p.minStock,
                    maxstock: p.maxStock,
                    unitprice: p.unitPrice.toFixed(2)
                });
                this.printingDataArray = [...this.printingDataArray, {
                        id: p.id,
                        name: p.companyProd.name,
                        qrCode: "data:image/png;base64," + p.qrcode
                    }];
            });
        });
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'name', header: 'Product Name' },
            { field: 'company', header: 'Company' },
            { field: 'drugformation', header: 'Drug Formation' },
            { field: 'formula', header: 'Formula' },
            { field: 'packing', header: 'Packing' },
            { field: 'boxrate', header: 'BoxRate' },
            { field: 'minstock', header: 'MinStock' },
            { field: 'maxstock', header: 'MaxStock' },
            { field: 'unitprice', header: 'Unit Price' }
        ];
    }
    backToMonitor() {
        history.go(-1);
    }
    deleteproductregistrationbyid(id) {
        this.productregistrationservice.deletebyid(id).subscribe(data => {
            // console.log(data);
            if (data) {
                this.showallproductregistration();
                this.messageservice.add({
                    severity: "success",
                    summary: "Succesfully",
                    detail: "company succesfully deleted!"
                });
            }
        }, error => {
            // console.log(error);
            this.messageservice.add({
                severity: "error",
                summary: "Error Found",
                detail: "Something went wrong check your internet connection "
            });
        });
    }
    updatebyid(id) {
        this.router.navigate(['productreg/' + id]);
    }
    gotoDetails(id) {
        console.log(id);
        this.router.navigate(['productdetail/' + id]);
    }
};
ProductRegistrationListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Services_product_registration_service__WEBPACK_IMPORTED_MODULE_3__["ProductRegistrationService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
];
ProductRegistrationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-registration-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-registration-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-registration-list/product-registration-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-registration-list.component.css */ "./src/app/product-registration-list/product-registration-list.component.css")).default]
    })
], ProductRegistrationListComponent);



/***/ }),

/***/ "./src/app/product-registration/product-registration.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/product-registration/product-registration.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heading{\r\n    text-align: center;\r\n    color: green;\r\n    font-weight: bold;\r\n    margin-top: 1%;\r\n}\r\n\r\n.makeBold{\r\n    font-weight: bold !important;\r\n    \r\n}\r\n\r\n.hoverGrn:hover{\r\n    background-color:#479761 !important;\r\n    color: white;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1yZWdpc3RyYXRpb24vcHJvZHVjdC1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSw0QkFBNEI7O0FBRWhDOztBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLFlBQVk7SUFDWiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtcmVnaXN0cmF0aW9uL3Byb2R1Y3QtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZ3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuXHJcbi5tYWtlQm9sZHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG4uaG92ZXJHcm46aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0Nzk3NjEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH0iXX0= */");

/***/ }),

/***/ "./src/app/product-registration/product-registration.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/product-registration/product-registration.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRegistrationComponent", function() { return ProductRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Services_company_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/company-service.service */ "./src/app/Services/company-service.service.ts");
/* harmony import */ var _Services_drugformation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/drugformation.service */ "./src/app/Services/drugformation.service.ts");
/* harmony import */ var _product_registration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-registration */ "./src/app/product-registration/product-registration.ts");
/* harmony import */ var _Services_product_registration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/product-registration.service */ "./src/app/Services/product-registration.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");









let ProductRegistrationComponent = class ProductRegistrationComponent {
    constructor(messageservice, router, activateroute, companyservice, drugformationservice, productRegistrationservice, _DomSanitizationService) {
        this.messageservice = messageservice;
        this.router = router;
        this.activateroute = activateroute;
        this.companyservice = companyservice;
        this.drugformationservice = drugformationservice;
        this.productRegistrationservice = productRegistrationservice;
        this._DomSanitizationService = _DomSanitizationService;
        this.productRegistration = new _product_registration__WEBPACK_IMPORTED_MODULE_5__["productRegistration"]();
        this.value1 = false;
        this.value2 = false;
        this.qrCodeUrl = "data:image/png;base64,";
        this.sellingBtn = false;
    }
    ngOnInit() {
        this.productid = this.activateroute.snapshot.params['id'];
        this.getcompaniesdropdown();
        this.getdrugFormationdropdown();
        if (this.productid != null) {
            this.getbyid(this.productid);
        }
    }
    changeStatus1() {
        this.productRegistration.state = "activeProduct";
    }
    changeStatus2() {
        this.productRegistration.state = "runningProduct";
    }
    onchangeUnitPrice() {
        this.productRegistration.unitPrice =
            this.productRegistration.boxRate / this.productRegistration.packing;
        this.unitprice = this.productRegistration.unitPrice;
        this.sellingBtn = (this.productRegistration.sellingPrice > this.unitprice) ? false : true;
    }
    routetoproductregistrationlist() {
        this.router.navigate(["productregistrationlist"]);
    }
    routetoaddcompany() {
        this.router.navigate(["addcompany"]);
    }
    routetoDrugFormation() {
        this.router.navigate(["drugformation"]);
    }
    getcompaniesdropdown() {
        this.company = [];
        this.companyservice.getallcompany().subscribe(data => {
            // console.log(data);
            if (data) {
                data.forEach(e => {
                    this.company.push({
                        label: e.name,
                        value: e
                    });
                });
            }
        });
    }
    getdrugFormationdropdown() {
        this.drugformation = [];
        this.drugformationservice.getallDrugFormation().subscribe(data => {
            if (data) {
                data.forEach(e => {
                    this.drugformation.push({
                        label: e.type,
                        value: e
                    });
                });
            }
        });
    }
    disableMaxAndMinStock() {
        if (this.productid != null) {
            if (this.productRegistration.packing && this.productRegistration.boxRate)
                return true;
            else
                return false;
        }
        else if (this.productRegistration.packing && this.productRegistration.boxRate) {
            return false;
        }
        else {
            return true;
        }
    }
    saveproductregistrtion() {
        // console.log(this.productRegistration);
        if (this.productid != null) {
            this.productRegistrationservice.updatebyid(this.productid, this.productRegistration).subscribe(data => {
                console.log(data);
                this.messageservice.add({
                    severity: "success",
                    summary: "Succesfully",
                    detail: "product Registration updated successfully!"
                });
            }, error => {
                // console.log(error);
                this.messageservice.add({
                    severity: "error",
                    summary: "Error Found",
                    detail: "Something went wrong check your internet connection "
                });
            });
        }
        else {
            this.productRegistrationservice
                .postproductregistration(this.productRegistration)
                .subscribe(data => {
                console.log(data);
                this.unitprice = 0;
                this.productRegistration.companyProd = "";
                // console.log(this.company);
                this.messageservice.add({
                    severity: "success",
                    summary: "Succesfully",
                    detail: "company successfully saved!"
                });
            }, error => {
                // console.log(error);
                this.messageservice.add({
                    severity: "error",
                    summary: "Error Found",
                    detail: "Something went wrong check your internet connection "
                });
            });
        }
    }
    numberOnly(event) {
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57 || charCode < 44)) {
            return false;
        }
        return true;
    }
    backToMonitor() {
        history.go(-1);
    }
    getbyid(id) {
        this.productRegistrationservice.getbyid(id).subscribe(data => {
            console.log(data);
            this.qrCodeUrl += data.qrcode;
            this.productRegistration.productName = data.productName;
            this.productRegistration.companyProd = data.companyProd;
            this.productRegistration.formula = data.formula;
            this.productRegistration.drugFormation = data.drugFormation;
            this.productRegistration.packing = data.packing;
            this.productRegistration.boxRate = data.boxRate;
            this.productRegistration.minStock = data.minStock;
            this.productRegistration.maxStock = data.maxStock;
            this.productRegistration.state = data.state;
            this.productRegistration.unitPrice = data.unitPrice;
            this.unitprice = data.unitPrice;
        });
    }
};
ProductRegistrationComponent.ctorParameters = () => [
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _Services_company_service_service__WEBPACK_IMPORTED_MODULE_3__["CompanyServiceService"] },
    { type: _Services_drugformation_service__WEBPACK_IMPORTED_MODULE_4__["DrugformationService"] },
    { type: _Services_product_registration_service__WEBPACK_IMPORTED_MODULE_6__["ProductRegistrationService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] }
];
ProductRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-product-registration",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-registration/product-registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-registration.component.css */ "./src/app/product-registration/product-registration.component.css")).default]
    })
], ProductRegistrationComponent);



/***/ }),

/***/ "./src/app/product-registration/product-registration.ts":
/*!**************************************************************!*\
  !*** ./src/app/product-registration/product-registration.ts ***!
  \**************************************************************/
/*! exports provided: productRegistration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productRegistration", function() { return productRegistration; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class productRegistration {
    constructor() {
        this.state = "activeProduct";
        this.sellingPrice = 0;
        this.qrCode = "data:image/png;base64,";
    }
}


/***/ }),

/***/ "./src/app/right-user-bar/right-user-bar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/right-user-bar/right-user-bar.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n    font-family: \"Lato\", sans-serif;\r\n  }\r\n  \r\n  .sidenav {\r\n    height: 100%;\r\n    width: 0%;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    right: 0;\r\n    background-color:#479761;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n  }\r\n  \r\n  .sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .sidenav a:hover {\r\n    color: #f1f1f1;\r\n  }\r\n  \r\n  @media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n  }\r\n  \r\n  .sidenav:hover{\r\n    width:250px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmlnaHQtdXNlci1iYXIvcmlnaHQtdXNlci1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLFlBQVk7SUFDWixTQUFTO0lBQ1QsZUFBZTtJQUNmLFVBQVU7SUFDVixNQUFNO0lBQ04sUUFBUTtJQUNSLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFJQTtJQUNFLFVBQVUsaUJBQWlCLENBQUM7SUFDNUIsWUFBWSxlQUFlLENBQUM7RUFDOUI7O0VBRUY7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9yaWdodC11c2VyLWJhci9yaWdodC11c2VyLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzQ3OTc2MTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGVuYXYgYSB7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICM4MTgxODE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlbmF2IGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAgIC5zaWRlbmF2IHtwYWRkaW5nLXRvcDogMTVweDt9XHJcbiAgICAuc2lkZW5hdiBhIHtmb250LXNpemU6IDE4cHg7fVxyXG4gIH1cclxuXHJcbi5zaWRlbmF2OmhvdmVye1xyXG4gICAgd2lkdGg6MjUwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/right-user-bar/right-user-bar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/right-user-bar/right-user-bar.component.ts ***!
  \************************************************************/
/*! exports provided: RightUserBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightUserBarComponent", function() { return RightUserBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RightUserBarComponent = class RightUserBarComponent {
    constructor() { }
    ngOnInit() {
        this.username = sessionStorage.getItem("username");
    }
    openNavBar() {
        this.sideBarWidth = "250px";
    }
    closeNavBar() {
        this.sideBarWidth = "0px";
    }
};
RightUserBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-right-user-bar",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./right-user-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/right-user-bar/right-user-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./right-user-bar.component.css */ "./src/app/right-user-bar/right-user-bar.component.css")).default]
    })
], RightUserBarComponent);



/***/ }),

/***/ "./src/app/sales-list/sales-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/sales-list/sales-list.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVzLWxpc3Qvc2FsZXMtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/sales-list/sales-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sales-list/sales-list.component.ts ***!
  \****************************************************/
/*! exports provided: SalesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesListComponent", function() { return SalesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Services_sales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/sales.service */ "./src/app/Services/sales.service.ts");
/* harmony import */ var _salesList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./salesList */ "./src/app/sales-list/salesList.ts");





let SalesListComponent = class SalesListComponent {
    constructor(router, salesService) {
        this.router = router;
        this.salesService = salesService;
        this.date = new Date();
        this.loader = true;
        this.bulksaveData = [];
        this.salesListObj = new _salesList__WEBPACK_IMPORTED_MODULE_4__["SalesList"]();
    }
    ngOnInit() {
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'createdAt', header: 'Created At' },
            { field: 'createdBy', header: 'Created By' },
            { field: 'total', header: 'Total' }
        ];
        this.getDefaultTodayBulkSales();
    }
    getDefaultTodayBulkSales() {
        this.salesListObj.from = this.convertDate(this.date);
        this.salesListObj.till = this.convertDate(this.date);
        console.log(this.salesListObj);
        this.bulksaveData = [];
        this.salesService.getFilteredDates(this.salesListObj).subscribe(response => {
            console.log("resp", response);
            this.loader = false;
            response.map(d => {
                this.bulksaveData.push({
                    id: d.id,
                    createdAt: new Date(d.createdAt).toDateString(),
                    createdBy: d.createdBy,
                    total: d.total
                });
            });
        });
        console.log("bulksave data", this.bulksaveData);
    }
    onfilter() {
        if (this.dateFrom == undefined || this.dateFrom == null) {
            this.salesListObj.from = this.convertDate(this.date);
            console.log("from date", this.salesListObj.from);
        }
        if (this.dateTill == undefined || this.dateTill == null) {
            this.salesListObj.till = this.convertDate(this.date);
            console.log("till date", this.salesListObj.till);
        }
        else {
            this.salesListObj.from = this.convertDate(this.dateFrom);
            this.salesListObj.till = this.convertDate(this.dateTill);
        }
        this.bulksaveData = [];
        this.salesService.getFilteredDates(this.salesListObj).subscribe(response => {
            console.log("resp", response);
            this.loader = false;
            response.map(d => {
                this.bulksaveData.push({
                    id: d.id,
                    createdAt: new Date(d.createdAt).toDateString(),
                    createdBy: d.createdBy,
                    total: d.total
                });
            });
        });
    }
    convertDate(date) {
        return this.convertedDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate());
    }
    // convertDateTill(date: Date){
    //   return this.convertedDate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + (date.getDate());
    // }
    routeToSales() {
        this.router.navigate(["sales"]);
    }
};
SalesListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Services_sales_service__WEBPACK_IMPORTED_MODULE_3__["SalesService"] }
];
SalesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sales-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sales-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sales-list/sales-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sales-list.component.css */ "./src/app/sales-list/sales-list.component.css")).default]
    })
], SalesListComponent);



/***/ }),

/***/ "./src/app/sales-list/salesList.ts":
/*!*****************************************!*\
  !*** ./src/app/sales-list/salesList.ts ***!
  \*****************************************/
/*! exports provided: SalesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesList", function() { return SalesList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SalesList {
}


/***/ }),

/***/ "./src/app/sales-mainscreen/qrcode/qrcode.component.css":
/*!**************************************************************!*\
  !*** ./src/app/sales-mainscreen/qrcode/qrcode.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVzLW1haW5zY3JlZW4vcXJjb2RlL3FyY29kZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/sales-mainscreen/qrcode/qrcode.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/sales-mainscreen/qrcode/qrcode.component.ts ***!
  \*************************************************************/
/*! exports provided: QrcodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrcodeComponent", function() { return QrcodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_sales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/sales.service */ "./src/app/Services/sales.service.ts");



let QrcodeComponent = class QrcodeComponent {
    constructor(service) {
        this.service = service;
        this.productEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onCodeResult(resultString, audio) {
        let code = parseInt(resultString);
        if (code) {
            this.service.getProductByQrCode(code).subscribe((response) => {
                if (response) {
                    this.productEmitter.emit(response);
                    audio.play();
                }
            });
        }
    }
};
QrcodeComponent.ctorParameters = () => [
    { type: _Services_sales_service__WEBPACK_IMPORTED_MODULE_2__["SalesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QrcodeComponent.prototype, "productEmitter", void 0);
QrcodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-qrcode',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./qrcode.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sales-mainscreen/qrcode/qrcode.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./qrcode.component.css */ "./src/app/sales-mainscreen/qrcode/qrcode.component.css")).default]
    })
], QrcodeComponent);



/***/ }),

/***/ "./src/app/sales-mainscreen/sales-mainscreen.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/sales-mainscreen/sales-mainscreen.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heading{\r\n    text-align: center;\r\n    color: green;\r\n    font-weight: bold;\r\n    margin-top: 1%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsZXMtbWFpbnNjcmVlbi9zYWxlcy1tYWluc2NyZWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2FsZXMtbWFpbnNjcmVlbi9zYWxlcy1tYWluc2NyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZ3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/sales-mainscreen/sales-mainscreen.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/sales-mainscreen/sales-mainscreen.component.ts ***!
  \****************************************************************/
/*! exports provided: SalesMainscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesMainscreenComponent", function() { return SalesMainscreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_sales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/sales.service */ "./src/app/Services/sales.service.ts");
/* harmony import */ var _sales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales */ "./src/app/sales-mainscreen/sales.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let SalesMainscreenComponent = class SalesMainscreenComponent {
    constructor(salesservice, mesgService, router) {
        this.salesservice = salesservice;
        this.mesgService = mesgService;
        this.router = router;
        this.neArray = [];
        this.dropdownData = [];
        this.salesObj = new _sales__WEBPACK_IMPORTED_MODULE_3__["Sales"]();
        this.tableData = [];
        this.productArray = [];
        this.output = [{ productName: String, unitPrice: Number }];
        this.printData = [];
        this.priceIntoQuantity = 1;
        this.disablesavebutton = true;
        this.disablePrintButton = true;
        this.disableAddToCartButton = true;
        this.index = 0;
        this.total = 0;
        this.printTotal = 0;
        this.productObj = new _sales__WEBPACK_IMPORTED_MODULE_3__["Products"]();
        this.addInTable = true;
        this.price = 0;
        this.showDiv = true;
        this.totalFieldInForm = 0;
    }
    ngOnInit() {
        this.populateCols();
        this.getProductsIndropdown();
        this.salesObj.productQuantity = 1;
    }
    disableSaveButton() {
        if (this.tableData.length > 0) {
            this.disablesavebutton = false;
        }
        else if (this.tableData.length == 0) {
            this.disablesavebutton = true;
        }
    }
    disableUnit() {
        if (this.salesObj.productRegistration)
            return false;
        else
            return true;
    }
    disableCost() {
        if (this.salesObj.productQuantity)
            return false;
        else
            return true;
    }
    disableDiscount() {
        if (this.salesObj.totalSellingPrice)
            return false;
        else
            return true;
    }
    resetForm(myForm) {
        myForm.reset();
    }
    populateCols() {
        this.cols = [
            { field: "name", header: "Product Name" },
            { field: "quantity", header: "quantity" },
            { field: "actualCost", header: "Actual Cost" },
            { field: "productPrice", header: "Product Price" },
            { field: "total", header: "Price" }
        ];
    }
    saveSales() {
        this.tableData = [];
        this.total = 0;
        this.salesservice.saveSales(this.neArray).subscribe(data => {
            this.disablePrintButton = false;
            this.disableSaveButton();
            this.disableAddToCartButton = true;
            this.neArray = [];
            this.mesgService.add({
                severity: "success",
                summary: "Successfull",
                detail: "Sales submitted successfully"
            });
        }, error => {
            this.mesgService.add({
                severity: "error",
                summary: "Error",
                detail: "Error submitting Sales"
            });
        });
    }
    emptyPrintDataArray() {
        this.printData = [];
        this.printTotal = 0;
        if (this.printData.length == 0) {
            this.disablePrintButton = true;
        }
    }
    getProductsIndropdown() {
        this.obj = [];
        this.salesservice.getProductRegistrations().subscribe(data => {
            data.map(d => {
                this.dropdownData.push({
                    label: d.productName,
                    value: d
                });
                this.obj.push(d);
            });
        });
        // console.log("i am object", this.obj);
    }
    onProductChange() {
        this.output = [];
        Object.values(this.obj).map(d => {
            this.output.push({
                productName: d["productName"],
                unitPrice: d["unitPrice"]
            });
        });
        this.productObj.id = this.salesObj.productRegistration["id"];
        this.productObj.maxStock = this.salesObj.productRegistration["maxStock"];
        this.calculatePriceQuantityProduct();
        this.getProductQuantity();
    }
    getProductQuantity() {
        this.productObj.productQuantity = this.salesObj.productQuantity;
        if (this.salesObj.productQuantity > this.productObj.maxStock)
            this.addInTable = false;
        else
            this.addInTable = true;
    }
    getDataInSalesTable() {
        // console.log("Product", this.productObj);
        this.output = [];
        this.total = this.total + this.totalFieldInForm;
        this.printTotal = this.total;
        this.disablesavebutton = false;
        let updatedObj = this.tableData.find(d => d.name == this.salesObj.productRegistration["productName"]);
        if (updatedObj) {
            updatedObj["quantity"] += this.salesObj.productQuantity;
            updatedObj["total"] += this.totalFieldInForm;
            this.tableData.map(t => {
                if (t.name == this.salesObj.productRegistration["productName"])
                    return updatedObj;
                else
                    t;
            });
        }
        //clear Form when there is data in table
        else {
            this.tableData.push({
                name: this.salesObj.productRegistration["productName"],
                quantity: this.salesObj.productQuantity,
                total: this.totalFieldInForm,
                productPrice: (this.salesObj.productRegistration['unitPrice']).toFixed(2),
                actualCost: (this.priceIntoQuantity).toFixed(2)
            });
        }
        this.neArray.push({
            productRegistration: this.salesObj.productRegistration,
            productQuantity: this.salesObj.productQuantity,
            productPrice: this.salesObj.productRegistration['unitPrice'],
            totalSellingPrice: this.totalFieldInForm,
            costPrice: this.salesObj.total
        });
        let updatedPrintSlipObj = this.printData.find(obj => obj["name"] == this.salesObj.productRegistration["productName"]);
        if (updatedPrintSlipObj) {
            updatedPrintSlipObj["quantity"] += this.salesObj.productQuantity;
            updatedPrintSlipObj["total"] += this.totalFieldInForm;
            this.printData.map(d => {
                if (d.name == this.salesObj.productRegistration["productName"]) {
                    return updatedPrintSlipObj;
                }
                else
                    return d;
            });
        }
        else {
            this.printData.push({
                name: this.salesObj.productRegistration["productName"],
                quantity: this.salesObj.productQuantity,
                total: this.totalFieldInForm
            });
        }
        this.printSlipDate = new Date();
        this.totalRecords = this.tableData.length;
    }
    calculatePriceQuantityProduct() {
        this.priceIntoQuantity = parseFloat((this.salesObj.productRegistration["unitPrice"] *
            this.salesObj.productQuantity).toFixed(2));
        // console.log(this.priceIntoQuantity);
        this.salesObj.total = parseFloat(this.priceIntoQuantity.toFixed(2));
    }
    deleteProduct(val, price) {
        this.salesservice.addMaxStocks(this.productObj).subscribe(d => {
            // console.log(d);
        });
        this.tableData.splice(val, 1);
        this.printData.splice(val, 1);
        this.neArray.splice(val, 1);
        this.total = this.total - price.toFixed(2);
        this.total = parseInt(this.total.toFixed(2));
        this.disableSaveButton();
    }
    productEmitter(product) {
        let selectedObj = this.obj.find((v) => v.id = product.id);
        this.salesObj.productRegistration = selectedObj;
        this.productObj = product;
        this.calculatePriceQuantityProduct();
        this.getProductQuantity();
    }
    clearForm() {
        this.salesObj.productRegistration = null;
        this.salesObj.total = 0;
        this.salesObj.productQuantity = 0;
    }
    callForChangeInProductStocks(myForm) {
        this.salesservice.postQuantity(this.productObj).subscribe(d => {
            let maxStock = Object.values(d).toString();
            if (maxStock == "MAXSTOCKUPDATED") {
                this.getDataInSalesTable();
                myForm.reset();
                this.salesObj.productQuantity = 1;
                this.mesgService.add({
                    severity: "success",
                    summary: "Successfull",
                    detail: "Sales submitted successfully"
                });
            }
            else if (maxStock == "PRODUCTOUTOFSTOCK") {
                myForm.reset();
                this.salesObj.productQuantity = 1;
                this.mesgService.add({
                    severity: "warn",
                    summary: "Out Of Stock",
                    detail: "Product Out Of Stock or You entered greater quantity than availaible stocks"
                });
            }
        }, error => {
            this.mesgService.add({
                severity: "error",
                summary: "Error",
                detail: "Error submitting Sales"
            });
        });
    }
    numberOnly(event) {
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57 || charCode < 44)) {
            return false;
        }
        return true;
    }
    routetoProductRegistration() {
        this.router.navigate(["productreg"]);
    }
    discountOnSellingPrice() {
        this.discount = this.discount ? this.discount : 0;
        console.log(this.price);
        if (this.discount < this.totalFieldInForm) {
            this.totalFieldInForm = this.price - this.discount;
            this.showDiv = true;
        }
        else {
            this.showDiv = false;
        }
    }
    addPrice() {
        this.totalFieldInForm = this.salesObj.totalSellingPrice;
        this.price = (this.totalFieldInForm) ? this.totalFieldInForm : 0;
        console.log(this.price);
    }
    restrictSellingPrice() {
        if (this.salesObj.total > this.salesObj.totalSellingPrice) {
            return false;
        }
        else {
            return true;
        }
    }
};
SalesMainscreenComponent.ctorParameters = () => [
    { type: _Services_sales_service__WEBPACK_IMPORTED_MODULE_2__["SalesService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SalesMainscreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sales-mainscreen",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sales-mainscreen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sales-mainscreen/sales-mainscreen.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sales-mainscreen.component.css */ "./src/app/sales-mainscreen/sales-mainscreen.component.css")).default]
    })
], SalesMainscreenComponent);



/***/ }),

/***/ "./src/app/sales-mainscreen/sales.ts":
/*!*******************************************!*\
  !*** ./src/app/sales-mainscreen/sales.ts ***!
  \*******************************************/
/*! exports provided: Sales, Products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sales", function() { return Sales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Products", function() { return Products; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Sales {
}
class Products {
}


/***/ }),

/***/ "./src/app/toast-service.service.ts":
/*!******************************************!*\
  !*** ./src/app/toast-service.service.ts ***!
  \******************************************/
/*! exports provided: ToastServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastServiceService", function() { return ToastServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);



let ToastServiceService = class ToastServiceService {
    constructor(messageService) {
        this.messageService = messageService;
    }
    succesMethod(summary, detail) {
        this.messageService.add({
            severity: 'success',
            summary: summary.toString(),
            detail: detail.toString()
        });
    }
    errorMethod(summary, detail) {
        this.messageService.add({
            severity: 'error',
            summary: summary.toString(),
            detail: detail.toString()
        });
    }
};
ToastServiceService.ctorParameters = () => [
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
ToastServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastServiceService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    tokenURL: 'https://192.168.1.120:8445/',
    baseUrl: 'https://192.168.1.120:8443/',
    opdUrl: 'https://192.168.1.120:8445/',
    labUrl: 'http://192.168.1.120:8081/',
    pharmacyUrl: 'https://192.168.1.120:8443/'
    // tokenURL: 'http://localhost:8080/',
    // baseUrl: 'http://localhost:8081/',
    // opdUrl: 'http://localhost:4200/',
    // labUrl: 'http://localhost:4201/',
    // pharmacyUrl: 'http://localhost:4202/'
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hp\Desktop\pharmacy\HMS-PHARMACY-UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map