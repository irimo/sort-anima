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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sortanima__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortanima */ \"./src/sortanima.ts\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    //カンバスをセット\n    var canvas = document.getElementById('canvas');\n    var sortanima = new _sortanima__WEBPACK_IMPORTED_MODULE_0__.SortAnima(canvas);\n    var numberlist = document.getElementById('numberlist');\n    // button.textContent = \"ボタン\";\n    // button.onclick = function() {\n    //   alert('yes');\n    // }\n    // document.body.appendChild(button);\n    //スタート\n    document.getElementById('button').addEventListener('click', function () {\n        var piece = sortanima.drawLoop();\n    });\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SortAnima\": () => /* binding */ SortAnima\n/* harmony export */ });\nvar SortAnima = /** @class */ (function () {\n    // const roulette = new Roulette(canvas, 500);\n    function SortAnima(canvas) {\n        // canvas = <HTMLCanvasElement>document.getElementById('canvas');\n        this.p = 0;\n        this.base = 0;\n        this.watching = 0;\n        // readonly ctx: CanvasRenderingContext2D;\n        // readonly fontsize = 15;\n        this.sorting = [\"8\", \"2\", \"4\", \"6\", \"5\"];\n        this.sortingelems = [HTMLElement];\n        //カンバスが使用できるかチェック\n        // if (!canvas.getContext) {\n        //     console.log('[Roulette.constructor] カンバスが使用できません');\n        //     // this.enable = false;\n        //     return;\n        // }\n        // this.canvas = canvas;\n        // this.ctx = canvas.getContext('2d');\n        // this.ctx.font = \"bold 15px '游ゴシック'\";\n        // this.ctx.textAlign = 'center';\n        // this.ctx.shadowBlur  = 2;\n        this.enable = true;\n        for (var i = 0; i < this.sorting.length; i++) {\n            var sortingelem = document.createElement('div');\n            sortingelem.id = \"sorting\" + i;\n            sortingelem.className = \"di-sorting-elem\";\n            sortingelem.textContent = this.sorting[i];\n            var rect = sortingelem.getBoundingClientRect();\n            document.body.appendChild(sortingelem);\n            this.sortingelems.push(sortingelem);\n        }\n        // this.sub = new Sub();\n        // const body = document.getElementsByTagName('body');\n        // const element = body.item(0);\n        // const div = document.createElement('div');\n        // div.innerHTML = '「こんにちは」を他言語に変換します。<br>好きな言語を入れてください。<br>※ちなみに対応しているのは日本語、英語、スペイン語、ドイツ語です。<br>';\n        // const input = document.createElement('input');\n        // input.id = 'country'\n        // const button = document.createElement('button');\n        // button.textContent = '変換';\n        // button.addEventListener('click', () => {\n        //     this.transtrationGreeting(document.getElementById('country')['value']);\n        // });\n        // div.appendChild(input);\n        // div.appendChild(button);\n        // element.appendChild(div);\n    }\n    SortAnima.prototype.drawLoop = function () {\n        var _this = this;\n        //描画可能状態か判定\n        if (!this.enable) {\n            console.log('[Roulette.start] 描画不可状態です');\n            return;\n        }\n        //duration をミリ秒に変換\n        var duration = 1000;\n        //duration 秒間描画不可状態にする\n        this.enable = false; // ??\n        setTimeout(function () {\n            _this.enable = true;\n        }, duration);\n        // this._draw();\n        while (this.base < this.sorting.length - 1) {\n            // const loop = () => {\n            // const animation = requestAnimationFrame(loop);\n            if (this.sorting[this.watching].charCodeAt(0) > this.sorting[this.watching + 1].charCodeAt(0)) {\n                console.log(\"入れ替わってる〜！？\" + this.sorting[this.watching] + \"<->\" + this.sorting[this.watching + 1]);\n                this._drawWithSorting(this.watching, this.watching + 1);\n                var work = this.sorting[this.watching];\n                this.sorting[this.watching] = this.sorting[this.watching + 1];\n                this.sorting[this.watching + 1] = work;\n            }\n            if (this.watching + 1 < this.sorting.length - 1) {\n                this.watching++;\n            }\n            else {\n                this.base++;\n                this.watching = this.base;\n            }\n            this._draw();\n            // if (this.base < this.sorting.length - 1) {\n            //     return;\n            // }\n            // cancelAnimationFrame(animation);\n            // loop();\n        }\n    };\n    // timer = 0;\n    SortAnima.prototype._drawWithSorting = function (var1, var2) {\n        console.log(\"_drawWithSorting\");\n        // gsap.to(this.sortingelems[var1], {\n        //     duration: 2, // 右側に2秒かけて移動するモーションを指定する\n        //     x: 800,\n        //     rotate: 360,\n        //     repeat: -1,\n        // });\n        // gsap.to(this.sortingelems[var2], {\n        //     duration: 2, // 右側に2秒かけて移動するモーションを指定する\n        //     x: 0,\n        //     rotate: 360,\n        //     repeat: -1,\n        // });\n        // this.ctx.clearRect(0,0,800,600);\n        // this.ctx.fillStyle = '#000';\n        // for (var i = 0; i < this.sorting.length; i++) {\n        //     if (i == var1) {\n        //         this.ctx.fillText(this.sorting[i],50,50+this.fontsize*i);\n        //     } else if (i == var2) {\n        //         this.ctx.fillText(this.sorting[i],50,50+this.fontsize*i);\n        //     } else {\n        //         this.ctx.fillText(this.sorting[i],50,50+this.fontsize*i);\n        //     }\n        // }\n        // this.timer++;\n    };\n    SortAnima.prototype._draw = function () {\n        // if (this.i % 2 == 0) {\n        //     this.ctx.fillStyle = '#fff';\n        //     this.ctx.fillRect(50,50,50,50);\n        // } else {\n        //     this.ctx.fillStyle = '#000';\n        //     this.ctx.fillRect(50,50,50,50);\n        // }\n        // this.ctx.clearRect(0,0,800,600);\n        // this.ctx.fillStyle = '#000';\n        // for (var i = 0; i < this.sorting.length; i++) {\n        //     this.ctx.fillText(this.sorting[i],50,50+this.fontsize*i);\n        // }\n        for (var i = 0; i < this.sorting.length; i++) {\n            var elem = this.sortingelems[i];\n            // sortingelem.id = \"sorting[\"+i+\"]\";\n            // sortingelem.className=\"di-sorting-elem\";\n            // sortingelem.textContent = this.sorting[i];\n            // document.body.appendChild(sortingelem);\n            // this.sortingelems.push(sortingelem);\n            elem.textContent = this.sorting[i];\n            console.log(\"this.sortingelems[i].textContext\" + this.sortingelems[i].textContext);\n        }\n    };\n    return SortAnima;\n}());\n\n// const main = new Main()\n\n\n//# sourceURL=webpack:///./src/sortanima.ts?");

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