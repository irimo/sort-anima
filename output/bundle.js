/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sortanima__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortanima */ \"./src/sortanima.ts\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    //カンバスをセット\n    var canvas = document.getElementById('canvas');\n    var sortanima = new _sortanima__WEBPACK_IMPORTED_MODULE_0__.SortAnima(canvas);\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/sortanima.ts":
/*!**************************!*\
  !*** ./src/sortanima.ts ***!
  \**************************/
/*! namespace exports */
/*! export SortAnima [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SortAnima\": () => /* binding */ SortAnima\n/* harmony export */ });\nvar SortAnima = /** @class */ (function () {\n    // const roulette = new Roulette(canvas, 500);\n    function SortAnima(canvas) {\n        this.canvas = document.getElementById('canvas');\n        //カンバスが使用できるかチェック\n        if (!canvas.getContext) {\n            console.log('[Roulette.constructor] カンバスが使用できません');\n            // this.enable = false;\n            return;\n        }\n        this.canvas = canvas;\n        this.ctx = canvas.getContext('2d');\n        // this.sub = new Sub();\n        // const body = document.getElementsByTagName('body');\n        // const element = body.item(0);\n        // const div = document.createElement('div');\n        // div.innerHTML = '「こんにちは」を他言語に変換します。<br>好きな言語を入れてください。<br>※ちなみに対応しているのは日本語、英語、スペイン語、ドイツ語です。<br>';\n        // const input = document.createElement('input');\n        // input.id = 'country'\n        // const button = document.createElement('button');\n        // button.textContent = '変換';\n        // button.addEventListener('click', () => {\n        //     this.transtrationGreeting(document.getElementById('country')['value']);\n        // });\n        // div.appendChild(input);\n        // div.appendChild(button);\n        // element.appendChild(div);\n    }\n    return SortAnima;\n}());\n\n// const main = new Main()\n\n\n//# sourceURL=webpack:///./src/sortanima.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;