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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sortanima__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortanima */ \"./src/sortanima.ts\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    //カンバスをセット\n    var canvas = document.getElementById('canvas');\n    var sortanima = new _sortanima__WEBPACK_IMPORTED_MODULE_0__.SortAnima(canvas);\n    //スタート\n    document.getElementById('button').addEventListener('click', function () {\n        var piece = sortanima.drawLoop();\n    });\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SortAnima\": () => /* binding */ SortAnima\n/* harmony export */ });\nvar SortAnima = /** @class */ (function () {\n    // const roulette = new Roulette(canvas, 500);\n    function SortAnima(canvas) {\n        this.canvas = document.getElementById('canvas');\n        this.p = 0;\n        this.base = 0;\n        this.watching = 0;\n        this.fontsize = 15;\n        this.sorting = [\"8\", \"2\", \"4\", \"6\", \"5\"];\n        //カンバスが使用できるかチェック\n        if (!canvas.getContext) {\n            console.log('[Roulette.constructor] カンバスが使用できません');\n            // this.enable = false;\n            return;\n        }\n        this.canvas = canvas;\n        this.ctx = canvas.getContext('2d');\n        this.ctx.font = \"bold 15px '游ゴシック'\";\n        this.ctx.textAlign = 'center';\n        this.ctx.shadowBlur = 2;\n        this.enable = true;\n        // this.sub = new Sub();\n        // const body = document.getElementsByTagName('body');\n        // const element = body.item(0);\n        // const div = document.createElement('div');\n        // div.innerHTML = '「こんにちは」を他言語に変換します。<br>好きな言語を入れてください。<br>※ちなみに対応しているのは日本語、英語、スペイン語、ドイツ語です。<br>';\n        // const input = document.createElement('input');\n        // input.id = 'country'\n        // const button = document.createElement('button');\n        // button.textContent = '変換';\n        // button.addEventListener('click', () => {\n        //     this.transtrationGreeting(document.getElementById('country')['value']);\n        // });\n        // div.appendChild(input);\n        // div.appendChild(button);\n        // element.appendChild(div);\n    }\n    SortAnima.prototype.drawLoop = function () {\n        var _this = this;\n        //描画可能状態か判定\n        if (!this.enable) {\n            console.log('[Roulette.start] 描画不可状態です');\n            return;\n        }\n        //duration をミリ秒に変換\n        var duration = 1000;\n        //duration 秒間描画不可状態にする\n        this.enable = false; // ??\n        setTimeout(function () {\n            _this.enable = true;\n        }, duration);\n        this._draw();\n        var loop = function () {\n            var animation = requestAnimationFrame(loop);\n            if (_this.sorting[_this.watching].charCodeAt(0) > _this.sorting[_this.watching + 1].charCodeAt(0)) {\n                var work = _this.sorting[_this.watching];\n                _this.sorting[_this.watching] = _this.sorting[_this.watching + 1];\n                _this.sorting[_this.watching + 1] = work;\n                console.log(\"入れ替わってる〜！？\" + _this.sorting[_this.watching] + \"<->\" + _this.sorting[_this.watching + 1]);\n            }\n            _this._drawWithSorting(_this.watching, _this.watching + 1);\n            if (_this.watching + 1 < _this.sorting.length - 1) {\n                _this.watching++;\n            }\n            else {\n                _this.base++;\n                _this.watching = _this.base;\n            }\n            if (_this.base < _this.sorting.length - 1) {\n                return;\n            }\n            cancelAnimationFrame(animation);\n        };\n        loop();\n    };\n    SortAnima.prototype._drawWithSorting = function (var1, var2) {\n        if (var1 === void 0) { var1 = 0; }\n        if (var2 === void 0) { var2 = 1; }\n        this._draw();\n    };\n    SortAnima.prototype._draw = function (sorting_flag) {\n        if (sorting_flag === void 0) { sorting_flag = false; }\n        // if (this.i % 2 == 0) {\n        //     this.ctx.fillStyle = '#fff';\n        //     this.ctx.fillRect(50,50,50,50);\n        // } else {\n        //     this.ctx.fillStyle = '#000';\n        //     this.ctx.fillRect(50,50,50,50);\n        // }\n        this.ctx.clearRect(0, 0, 800, 600);\n        this.ctx.fillStyle = '#000';\n        for (var i = 0; i < this.sorting.length; i++) {\n            this.ctx.fillText(this.sorting[i], 50, 50 + this.fontsize * i);\n        }\n    };\n    return SortAnima;\n}());\n\n// const main = new Main()\n\n\n//# sourceURL=webpack:///./src/sortanima.ts?");

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