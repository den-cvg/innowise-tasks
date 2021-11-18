/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



(function smoothAnchor() {
  var anchors = document.querySelectorAll('a[href*="#"]');

  var _iterator = _createForOfIteratorHelper(anchors),
      _step;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var blockId = anchor.getAttribute('href').substr(1);
        document.getElementById(blockId).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
})();

(function changeNumberInForm() {
  //variables for work this form
  var formBlok = document.querySelector('.tickects__form-right');
  var formInputSenior = document.querySelector('.tickects__senior');
  var formInputBasic = document.querySelector('.tickects__basic'); //variables for work this form in popup

  var popupBlok = document.querySelector('.popup__ticket');
  var popupInputSenior = document.querySelector('.popup__senior');
  var popupInputBasic = document.querySelector('.popup__basic');
  formBlok.addEventListener('click', function (e) {
    changeValue(e, formInputBasic, formInputSenior);
  });
  popupBlok.addEventListener('click', function (e) {
    changeValue(e, popupInputBasic, popupInputSenior);
  });

  function changeValue(e, inputBasic, inputSenior) {
    if (e.target.className != 'tickects__input-button' && e.target.className != 'popup__input-button') return;
    var button = e.target;

    switch (button.name) {
      case 'basic':
        {
          if (button.value === '+') {
            inputBasic.value = +inputBasic.value + 1;
            break;
          } else {
            if (inputBasic.value > 0) {
              inputBasic.value = +inputBasic.value - 1;
            }

            break;
          }
        }

      case 'senior':
        {
          if (button.value === '+') {
            inputSenior.value = +inputSenior.value + 1;
            break;
          } else {
            if (inputSenior.value > 0) {
              inputSenior.value = +inputSenior.value - 1;
            }

            break;
          }
        }
    }
  }
})();

(function popup() {
  //variables for work this popup
  var popup = document.querySelector(".popup");
  var popupClose = document.querySelector('.close-popup');
  var contactButton = document.querySelector('.tickects__button');
  popupClose.addEventListener("click", hidePopup);
  contactButton.addEventListener("click", showPopup);

  function showPopup() {
    popup.style.display = "flex";
  }

  function hidePopup() {
    popup.style.display = "none";
  }

  window.addEventListener('click', function (e) {
    if (e.target === popup) {
      hidePopup();
    }
  });
})();

(function slider() {
  $(document).ready(function () {
    $('.welcome__slider').slick({
      arrows: true,
      dots: true,
      slidesToShow: 1
    });
    $('.video__first').slick({
      arrows: false,
      dots: false,
      slidesToShow: 1
    });
    $('.video__second').slick({
      arrows: true,
      dots: true,
      slidesToShow: 3,
      asNavFor: ".video__first",
      responsive: [{
        breakpoint: 770,
        settings: {
          slidesToShow: 2
        }
      }]
    });
  });
})();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map