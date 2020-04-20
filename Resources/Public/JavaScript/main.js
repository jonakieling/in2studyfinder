/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./JavaScript/Frontend/Components/Loader.js":
/*!**************************************************!*\
  !*** ./JavaScript/Frontend/Components/Loader.js ***!
  \**************************************************/
/*! exports provided: loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loader\", function() { return loader; });\n/* harmony import */ var _Utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility */ \"./JavaScript/Frontend/Utility/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Loader =\n/*#__PURE__*/\nfunction () {\n  function Loader() {\n    _classCallCheck(this, Loader);\n\n    this.identifiers = {\n      loader: '.in2studyfinder-loader',\n      loaderActive: '.in2studyfinder-loader--active'\n    };\n  }\n  /**\n   *\n   */\n\n\n  _createClass(Loader, [{\n    key: \"enableLoader\",\n    value: function enableLoader() {\n      _Utility__WEBPACK_IMPORTED_MODULE_0__[\"UiUtility\"].toggleClassForElement(document.querySelector(this.identifiers.loader), this.identifiers.loaderActive.substr(1));\n    }\n  }, {\n    key: \"disableLoader\",\n\n    /**\n     *\n     */\n    value: function disableLoader() {\n      if (document.querySelector(this.identifiers.loaderActive) !== null) {\n        _Utility__WEBPACK_IMPORTED_MODULE_0__[\"UiUtility\"].toggleClassForElement(document.querySelector(this.identifiers.loaderActive), this.identifiers.loaderActive.substr(1));\n      }\n    }\n  }]);\n\n  return Loader;\n}();\n\nvar loader = new Loader();\n\n//# sourceURL=webpack:///./JavaScript/Frontend/Components/Loader.js?");

/***/ }),

/***/ "./JavaScript/Frontend/Frontend.js":
/*!*****************************************!*\
  !*** ./JavaScript/Frontend/Frontend.js ***!
  \*****************************************/
/*! exports provided: frontend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"frontend\", function() { return frontend; });\n/* harmony import */ var _Utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility */ \"./JavaScript/Frontend/Utility/index.js\");\n/* harmony import */ var _Modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules */ \"./JavaScript/Frontend/Modules/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Frontend =\n/*#__PURE__*/\nfunction () {\n  function Frontend() {\n    _classCallCheck(this, Frontend);\n\n    this.identifiers = {\n      in2studyfinderContainer: '.in2studyfinder'\n    };\n  }\n\n  _createClass(Frontend, [{\n    key: \"initialize\",\n    value: function initialize() {\n      var in2studyfinderContainer = document.querySelector(this.identifiers.in2studyfinderContainer);\n\n      if (in2studyfinderContainer !== null) {\n        _Utility__WEBPACK_IMPORTED_MODULE_0__[\"UiUtility\"].removeClass(in2studyfinderContainer, 'no-js');\n        _Utility__WEBPACK_IMPORTED_MODULE_0__[\"UiUtility\"].addClass(in2studyfinderContainer, 'js');\n        _Modules__WEBPACK_IMPORTED_MODULE_1__[\"filterModule\"].initialize(); // SelectModule.initialize();\n\n        _Modules__WEBPACK_IMPORTED_MODULE_1__[\"paginationModule\"].initialize();\n      }\n    }\n  }]);\n\n  return Frontend;\n}();\n\nvar frontend = new Frontend();\n\n//# sourceURL=webpack:///./JavaScript/Frontend/Frontend.js?");

/***/ }),

/***/ "./JavaScript/Frontend/Modules/FilterModule.js":
/*!*****************************************************!*\
  !*** ./JavaScript/Frontend/Modules/FilterModule.js ***!
  \*****************************************************/
/*! exports provided: filterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterModule\", function() { return filterModule; });\n/* harmony import */ var _Utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility */ \"./JavaScript/Frontend/Utility/index.js\");\n/* harmony import */ var _Components_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Loader */ \"./JavaScript/Frontend/Components/Loader.js\");\n/* harmony import */ var _Frontend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Frontend */ \"./JavaScript/Frontend/Frontend.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar FilterModule =\n/*#__PURE__*/\nfunction () {\n  function FilterModule() {\n    _classCallCheck(this, FilterModule);\n\n    this.identifiers = {\n      in2studyfinderContainer: '.in2studyfinder',\n      filterForm: '.js-in2studyfinder-filter',\n      filterContainer: '.js-in2studyfinder-filter-options',\n      filterFieldset: '.js-in2studyfinder-filter-section',\n      filterLegend: '.js-in2studyfinder-filter-legend',\n      filterCheckbox: '.in2studyfinder-js-checkbox',\n      filterCheckboxAll: '.in2studyfinder-js-checkbox-all',\n      showFilterButton: '.js-in2studyfinder-filter-button-show',\n      hideFilterButton: '.js-in2studyfinder-filter-button-reset',\n      hideElement: '.u-in2studyfinder-hide',\n      isHidden: '.is-hidden'\n    };\n    this.filter = [];\n  }\n  /**\n   * initialize function\n   *\n   * @return {void}\n   */\n\n\n  _createClass(FilterModule, [{\n    key: \"initialize\",\n    value: function initialize() {\n      if (document.querySelector(this.identifiers.filterForm)) {\n        this.setEventListener();\n        this.prepareFilter();\n      }\n    }\n  }, {\n    key: \"prepareFilter\",\n\n    /**\n     *\n     */\n    value: function prepareFilter() {\n      this.prepareCheckboxes(); // trigger filter update by hash arguments\n\n      var hashArguments = _Utility__WEBPACK_IMPORTED_MODULE_0__[\"UrlUtility\"].getHashArgumentsFromUrl();\n\n      if (hashArguments.length > 0 && document.querySelector('[data-in2studyfinder-isAjax=\"1\"]') === null) {\n        this.updateFilterByHashArguments(hashArguments);\n      } // open selected filter sections\n\n\n      if (this.filter.length > 0) {\n        this.toggleFilterVisibility();\n\n        for (var i = 0; i < this.filter.length; i++) {\n          var filterFieldset = document.querySelector('[data-filtergroup=\"' + this.filter[i] + '\"]');\n          var filter = filterFieldset.querySelector(this.identifiers.filterContainer);\n          _Utility__WEBPACK_IMPORTED_MODULE_0__[\"UiUtility\"].toggleClassForElement(filter, this.identifiers.isHidden.substr(1));\n        }\n      }\n    }\n  }, {\n    key: \"prepareCheckboxes\",\n\n    /**\n     * removes checked value from checkboxes where not needed\n     */\n    value: function prepareCheckboxes() {\n      var filterContainer = document.querySelectorAll(this.identifiers.filterContainer);\n\n      for (var i = 0; i < filterContainer.length; i++) {\n        var filterStatus = this.isFilterSet(filterContainer[i]);\n\n        if (filterStatus) {\n          if (this.filter.indexOf(filterContainer[i].parentNode.getAttribute('data-filtergroup')) === -1) {\n            this.filter.push(filterContainer[i].parentNode.getAttribute('data-filtergroup'));\n          }\n\n          var showAllCheckbox = filterContainer[i].querySelector(this.identifiers.filterCheckboxAll);\n          showAllCheckbox.checked = false;\n          showAllCheckbox.disabled = false;\n        }\n      }\n    }\n  }, {\n    key: \"updateFilterByHashArguments\",\n\n    /**\n     *\n     * @param hashArguments\n     */\n    value: function updateFilterByHashArguments(hashArguments) {\n      for (var i = 0; i < hashArguments.length; i++) {\n        var page = 1; // if argument page is set\n\n        if (hashArguments[i].name === 'page') {\n          page = hashArguments[i].values[0];\n        } else {\n          if (document.querySelector('[data-filtergroup=\"' + hashArguments[i].name + '\"]') !== null) {\n            // set the selected filters\n            var filterFieldset = document.querySelector('[data-filtergroup=\"' + hashArguments[i].name + '\"]');\n            var checkboxes = filterFieldset.querySelectorAll('input[type=checkbox]');\n            var status = false;\n\n            for (var j = 0; j < checkboxes.length; j++) {\n              if (_Utility__WEBPACK_IMPORTED_MODULE_0__[\"ArrayUtility\"].isInArray(checkboxes[j].value, hashArguments[i].values)) {\n                checkboxes[j].checked = true;\n                status = true;\n              }\n            }\n\n            if (status) {\n              filterFieldset.querySelector(this.identifiers.filterCheckboxAll).checked = false;\n            }\n          }\n        }\n      }\n\n      this.updateFilter(page);\n    }\n  }, {\n    key: \"setEventListener\",\n\n    /**\n     * sets event listeners\n     */\n    value: function setEventListener() {\n      // hide filter button\n      var hideFilter = document.querySelector(this.identifiers.hideFilterButton);\n      hideFilter.addEventListener('click', this.resetAllFilter); // show filter button\n\n      var showFilter = document.querySelector(this.identifiers.showFilterButton);\n      showFilter.addEventListener('click', this.toggleFilterVisibility); // toggle filter section visibility\n\n      this.setFilterVisibilityEventListener(); // set eventListener for filter checkboxes\n\n      this.setFilterCheckboxEventListener();\n    }\n  }, {\n    key: \"setFilterCheckboxEventListener\",\n\n    /**\n     * add checkbox event listener\n     */\n    value: function setFilterCheckboxEventListener() {\n      var filterModule = this;\n      document.querySelector('.c-in2studyfinder-filter__sections').addEventListener('click', function (evt) {\n        var target = evt.target;\n\n        if (target.tagName === 'INPUT') {\n          // if an show all checkbox is clicked\n          if (target.classList.contains(filterModule.identifiers.filterCheckboxAll.substr(1))) {\n            var filterContainer = target.parentNode;\n            filterModule.resetFilter(filterContainer);\n          } // if an specific filter checkbox is clicked\n\n\n          if (target.classList.contains(filterModule.identifiers.filterCheckbox.substr(1))) {\n            var showAllCheckbox = target.parentNode.querySelector(filterModule.identifiers.filterCheckboxAll);\n            showAllCheckbox.checked = false;\n            showAllCheckbox.disabled = false;\n          }\n\n          filterModule.updateFilter();\n        }\n      });\n    }\n  }, {\n    key: \"resetAllFilter\",\n\n    /**\n     * reset all filter\n     */\n    value: function resetAllFilter() {\n      if (filterModule.filter.length === 0) {\n        filterModule.toggleFilterVisibility();\n      } else {\n        var filterContainers = document.querySelectorAll(filterModule.identifiers.filterContainer);\n        filterModule.toggleFilterVisibility();\n\n        for (var i = 0; i < filterContainers.length; i++) {\n          filterModule.resetFilter(filterContainers[i]);\n        }\n\n        filterModule.updateFilter();\n      }\n    }\n  }, {\n    key: \"resetFilter\",\n\n    /**\n     * resets an given filter\n     *\n     * @param filterContainer\n     */\n    value: function resetFilter(filterContainer) {\n      var showAllCheckbox = filterContainer.querySelector(this.identifiers.filterCheckboxAll);\n      var filterCheckboxes = filterContainer.querySelectorAll(this.identifiers.filterCheckbox);\n      showAllCheckbox.checked = true;\n      showAllCheckbox.disabled = true;\n\n      for (var i = 0; i < filterCheckboxes.length; i++) {\n        filterCheckboxes[i].checked = false;\n      }\n\n      var index = this.filter.indexOf(filterContainer.parentNode.getAttribute('data-filtergroup'));\n\n      if (index !== -1) {\n        this.filter.splice(index, 1);\n      }\n    }\n  }, {\n    key: \"updateFilter\",\n\n    /**\n     * main function\n     *\n     * update the filtering\n     */\n    value: function updateFilter(paginationPage) {\n      var in2studyfinderContainer = document.querySelector(this.identifiers.in2studyfinderContainer);\n      var filterForm = document.querySelector(this.identifiers.filterForm);\n      var pluginUid = in2studyfinderContainer.getAttribute('data-plugin-uid');\n      var pid = in2studyfinderContainer.getAttribute('data-pid');\n      var sysLanguageUid = in2studyfinderContainer.getAttribute('data-in2studyfinder-language');\n      var pluginUidArgument = '',\n          languageArgument = '',\n          paginationArgument = '',\n          url = '';\n      console.log(sysLanguageUid);\n\n      if (typeof paginationPage === 'undefined') {\n        paginationPage = 1;\n      }\n\n      if (typeof pluginUid !== 'undefined') {\n        pluginUidArgument = '&ce=' + pluginUid;\n      }\n\n      if (typeof sysLanguageUid !== 'undefined' && sysLanguageUid !== null) {\n        languageArgument = '&L=' + sysLanguageUid;\n      }\n\n      if (typeof paginationPage !== 'undefined') {\n        paginationArgument = '&tx_in2studyfinder_pi1[@widget_0][currentPage]=' + paginationPage;\n      }\n\n      if (typeof pid !== 'undefined' && pid !== null) {\n        url = '/index.php?id=' + pid + '&type=1308171055&studyFinderAjaxRequest=1' + pluginUidArgument + languageArgument + paginationArgument;\n      } else {\n        url = '/?type=1308171055&studyFinderAjaxRequest=1' + pluginUidArgument + languageArgument + paginationArgument;\n      }\n\n      var xhttp = new XMLHttpRequest();\n      var filterModule = this;\n\n      xhttp.onreadystatechange = function () {\n        if (this.readyState === 1) {\n          _Components_Loader__WEBPACK_IMPORTED_MODULE_1__[\"loader\"].enableLoader();\n        }\n\n        if (this.readyState === 4 && this.status === 200) {\n          filterModule.setSelectedFilterToUrl(paginationPage);\n          var tempElement = document.createElement('div');\n          tempElement.innerHTML = xhttp.responseText;\n          document.querySelector(filterModule.identifiers.in2studyfinderContainer).parentNode.replaceChild(tempElement.querySelector(filterModule.identifiers.in2studyfinderContainer), document.querySelector(filterModule.identifiers.in2studyfinderContainer));\n          _Frontend__WEBPACK_IMPORTED_MODULE_2__[\"frontend\"].initialize();\n          _Components_Loader__WEBPACK_IMPORTED_MODULE_1__[\"loader\"].disableLoader();\n        }\n      };\n\n      xhttp.open('POST', url, true);\n      xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');\n      xhttp.send(_Utility__WEBPACK_IMPORTED_MODULE_0__[\"UrlUtility\"].serialize(filterForm));\n    }\n  }, {\n    key: \"setSelectedFilterToUrl\",\n\n    /**\n     * Save Selected Options to Url\n     */\n    value: function setSelectedFilterToUrl(paginationPage) {\n      var selectionString = '';\n      var form = document.querySelector(this.identifiers.filterForm);\n      var fieldsetNodeList = form.querySelectorAll(this.identifiers.filterFieldset);\n\n      for (var i = 0; i < fieldsetNodeList.length; i++) {\n        var selectedOptions = fieldsetNodeList[i].querySelectorAll(this.identifiers.filterCheckbox + ':checked');\n\n        if (selectedOptions.length > 0) {\n          selectionString += fieldsetNodeList[i].getAttribute('data-filtergroup') + '=';\n\n          for (var j = 0; j < selectedOptions.length; j++) {\n            selectionString += selectedOptions[j].value + '+';\n          }\n\n          if (selectedOptions.length >= 1) {\n            selectionString = selectionString.substring(0, selectionString.length - 1);\n          }\n\n          selectionString += '&';\n        }\n      }\n\n      if (paginationPage) {\n        selectionString += 'page=' + paginationPage;\n      }\n\n      window.location = location.protocol + '//' + location.host + location.pathname + (location.search ? location.search : '') + '#' + selectionString;\n    }\n  }, {\n    key: \"setFilterVisibilityEventListener\",\n\n    /**\n     * initialize the eventListener for the filter sections.\n     *\n     *\n     * WORKAROUND:\n     * At this point we only refactor the javascript.\n     * We do not add breaking changes at this point.\n     *\n     * We do this with an forEach because the parent container\n     * has only an style class yet. Later an js class will be added\n     * to the container.\n     */\n    value: function setFilterVisibilityEventListener() {\n      var fieldsets = document.querySelectorAll(filterModule.identifiers.filterFieldset);\n\n      for (var i = 0; i < fieldsets.length; i++) {\n        fieldsets[i].querySelector(filterModule.identifiers.filterLegend).addEventListener('click', function () {\n          var targetFilter = this.parentNode;\n          var filter = targetFilter.querySelector(filterModule.identifiers.filterContainer);\n          _Utility__WEBPACK_IMPORTED_MODULE_0__[\"UiUtility\"].toggleClassForElement(filter, filterModule.identifiers.isHidden.substr(1));\n        });\n      }\n    }\n  }, {\n    key: \"toggleFilterVisibility\",\n\n    /**\n     * Toggles the filter fieldset visibility\n     */\n    value: function toggleFilterVisibility() {\n      // toggle fieldset Visibility\n      var filterFieldSets = document.querySelectorAll(filterModule.identifiers.filterFieldset);\n\n      for (var i = 0; i < filterFieldSets.length; i++) {\n        _Utility__WEBPACK_IMPORTED_MODULE_0__[\"UiUtility\"].toggleClassForElement(filterFieldSets[i], filterModule.identifiers.hideElement.substr(1));\n      } // toggle button Visibility\n\n\n      var showFilterButton = document.querySelector(filterModule.identifiers.showFilterButton);\n      var hideFilterButton = document.querySelector(filterModule.identifiers.hideFilterButton);\n      _Utility__WEBPACK_IMPORTED_MODULE_0__[\"UiUtility\"].toggleClassForElement(showFilterButton, filterModule.identifiers.hideElement.substr(1));\n      _Utility__WEBPACK_IMPORTED_MODULE_0__[\"UiUtility\"].toggleClassForElement(hideFilterButton, filterModule.identifiers.hideElement.substr(1));\n    }\n  }, {\n    key: \"isFilterSet\",\n\n    /**\n     * checks if an given filter element is set\n     *\n     * @param filterContainer\n     * @returns {boolean}\n     */\n    value: function isFilterSet(filterContainer) {\n      var status = false;\n      var filterCheckboxes = filterContainer.querySelectorAll(this.identifiers.filterCheckbox);\n\n      for (var i = 0; i < filterCheckboxes.length; i++) {\n        if (filterCheckboxes[i].checked) {\n          status = true;\n        }\n      }\n\n      return status;\n    }\n  }]);\n\n  return FilterModule;\n}();\n\nvar filterModule = new FilterModule();\n\n//# sourceURL=webpack:///./JavaScript/Frontend/Modules/FilterModule.js?");

/***/ }),

/***/ "./JavaScript/Frontend/Modules/PaginationModule.js":
/*!*********************************************************!*\
  !*** ./JavaScript/Frontend/Modules/PaginationModule.js ***!
  \*********************************************************/
/*! exports provided: paginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paginationModule\", function() { return paginationModule; });\n/* harmony import */ var _Utility_UrlUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/UrlUtility */ \"./JavaScript/Frontend/Utility/UrlUtility.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar PaginationModule =\n/*#__PURE__*/\nfunction () {\n  function PaginationModule() {\n    _classCallCheck(this, PaginationModule);\n\n    this.identifiers = {\n      in2studyfinderContainer: '.in2studyfinder',\n      paginationLink: '.js-get-by-ajax',\n      paginationContainer: '.js-in2studyfinder-pagebrowser',\n      loader: '.in2studyfinder-loader',\n      loaderActive: '.in2studyfinder-loader--active'\n    };\n  }\n  /**\n   * initialize function\n   *\n   * @return {void}\n   */\n\n\n  _createClass(PaginationModule, [{\n    key: \"initialize\",\n    value: function initialize() {\n      if (document.querySelector(this.identifiers.paginationContainer) !== null) {\n        var paginationList = document.querySelector(this.identifiers.paginationContainer);\n        paginationList.addEventListener('click', this.callPagination);\n      }\n    }\n  }, {\n    key: \"callPagination\",\n    value: function callPagination(event) {\n      event.preventDefault();\n      var targetPage = 1;\n      var url = event.target.href;\n\n      if (_Utility_UrlUtility__WEBPACK_IMPORTED_MODULE_0__[\"UrlUtility\"].getParameterFromUrl(url, 'tx_in2studyfinder_pi1[@widget_0][currentPage]') !== '') {\n        targetPage = _Utility_UrlUtility__WEBPACK_IMPORTED_MODULE_0__[\"UrlUtility\"].getParameterFromUrl(url, 'tx_in2studyfinder_pi1[@widget_0][currentPage]');\n      }\n\n      _Utility_UrlUtility__WEBPACK_IMPORTED_MODULE_0__[\"UrlUtility\"].addOrUpdateHash('page', [targetPage]); //FilterModule.updateFilter(targetPage);\n    }\n  }]);\n\n  return PaginationModule;\n}();\n\nvar paginationModule = new PaginationModule();\n\n//# sourceURL=webpack:///./JavaScript/Frontend/Modules/PaginationModule.js?");

/***/ }),

/***/ "./JavaScript/Frontend/Modules/index.js":
/*!**********************************************!*\
  !*** ./JavaScript/Frontend/Modules/index.js ***!
  \**********************************************/
/*! exports provided: paginationModule, filterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PaginationModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginationModule */ \"./JavaScript/Frontend/Modules/PaginationModule.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"paginationModule\", function() { return _PaginationModule__WEBPACK_IMPORTED_MODULE_0__[\"paginationModule\"]; });\n\n/* harmony import */ var _FilterModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterModule */ \"./JavaScript/Frontend/Modules/FilterModule.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterModule\", function() { return _FilterModule__WEBPACK_IMPORTED_MODULE_1__[\"filterModule\"]; });\n\n// Dynamic interface\n\n //export {selectModule} from './SelectModule';\n\n//# sourceURL=webpack:///./JavaScript/Frontend/Modules/index.js?");

/***/ }),

/***/ "./JavaScript/Frontend/Utility/AjaxUtility.js":
/*!****************************************************!*\
  !*** ./JavaScript/Frontend/Utility/AjaxUtility.js ***!
  \****************************************************/
/*! exports provided: AjaxUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AjaxUtility\", function() { return AjaxUtility; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar AjaxUtility =\n/*#__PURE__*/\nfunction () {\n  function AjaxUtility() {\n    _classCallCheck(this, AjaxUtility);\n  }\n\n  _createClass(AjaxUtility, null, [{\n    key: \"ajaxCall\",\n\n    /**\n     * @param url\n     * @param onStartCallback\n     * @param onSuccessCallback\n     */\n    value: function ajaxCall(url, onStartCallback, onSuccessCallback) {\n      var xhttp = new XMLHttpRequest();\n\n      xhttp.onreadystatechange = function () {\n        if (this.readyState === 1) {\n          onStartCallback();\n        }\n\n        if (this.readyState === 4 && this.status === 200) {\n          onSuccessCallback(this);\n        }\n      };\n\n      xhttp.open('GET', url, true);\n      xhttp.send();\n    }\n  }]);\n\n  return AjaxUtility;\n}();\n\n\n\n//# sourceURL=webpack:///./JavaScript/Frontend/Utility/AjaxUtility.js?");

/***/ }),

/***/ "./JavaScript/Frontend/Utility/ArrayUtility.js":
/*!*****************************************************!*\
  !*** ./JavaScript/Frontend/Utility/ArrayUtility.js ***!
  \*****************************************************/
/*! exports provided: ArrayUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ArrayUtility\", function() { return ArrayUtility; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ArrayUtility =\n/*#__PURE__*/\nfunction () {\n  function ArrayUtility() {\n    _classCallCheck(this, ArrayUtility);\n  }\n\n  _createClass(ArrayUtility, null, [{\n    key: \"isInArray\",\n\n    /**\n     *\n     * @param value\n     * @param array\n     * @returns {boolean}\n     */\n    value: function isInArray(value, array) {\n      return array.indexOf(value) > -1;\n    }\n  }, {\n    key: \"containsObjectWithKey\",\n\n    /**\n     *\n     * @param array\n     * @param key\n     * @param value\n     * @returns {int} the array key of the object. -1 if no match is found\n     */\n    value: function containsObjectWithKey(array, key, value) {\n      if (Array.isArray(array)) {\n        for (var i = 0; i <= array.length - 1; i++) {\n          if (array[i] instanceof Object) {\n            if (array[i].hasOwnProperty(key) && array[i][key] === value) {\n              return i;\n            }\n          }\n        }\n      }\n\n      return -1;\n    }\n  }]);\n\n  return ArrayUtility;\n}();\n\n\n\n//# sourceURL=webpack:///./JavaScript/Frontend/Utility/ArrayUtility.js?");

/***/ }),

/***/ "./JavaScript/Frontend/Utility/UiUtility.js":
/*!**************************************************!*\
  !*** ./JavaScript/Frontend/Utility/UiUtility.js ***!
  \**************************************************/
/*! exports provided: UiUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UiUtility\", function() { return UiUtility; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar UiUtility =\n/*#__PURE__*/\nfunction () {\n  function UiUtility() {\n    _classCallCheck(this, UiUtility);\n  }\n\n  _createClass(UiUtility, null, [{\n    key: \"toggleClassForElement\",\n\n    /**\n     * toggle class for element\n     */\n    value: function toggleClassForElement(element, className) {\n      if (element.classList.contains(className)) {\n        element.classList.remove(className);\n      } else {\n        element.classList.add(className);\n      }\n    }\n  }, {\n    key: \"removeClass\",\n\n    /**\n     * remove class from element\n     *\n     * @param element\n     * @param className\n     */\n    value: function removeClass(element, className) {\n      if (element.classList.contains(className)) {\n        element.classList.remove(className);\n      }\n    }\n  }, {\n    key: \"addClass\",\n\n    /**\n     * add class to element\n     *\n     * @param element\n     * @param className\n     */\n    value: function addClass(element, className) {\n      if (!element.classList.contains(className)) {\n        element.classList.add(className);\n      }\n    }\n  }, {\n    key: \"hideElement\",\n\n    /**\n     * @param element\n     * @return void\n     */\n    value: function hideElement(element) {\n      element.style.display = 'none';\n    }\n  }, {\n    key: \"showElement\",\n\n    /**\n     * @param element\n     * @return void\n     */\n    value: function showElement(element) {\n      element.style.display = 'inline-block';\n    }\n  }, {\n    key: \"showElementAsBlock\",\n\n    /**\n     * @param element\n     * @return void\n     */\n    value: function showElementAsBlock(element) {\n      element.style.display = 'block';\n    }\n  }, {\n    key: \"removeStyles\",\n\n    /**\n     * @param element\n     * @return void\n     */\n    value: function removeStyles(element) {\n      element.removeAttribute('style');\n    }\n  }]);\n\n  return UiUtility;\n}();\n\n\n\n//# sourceURL=webpack:///./JavaScript/Frontend/Utility/UiUtility.js?");

/***/ }),

/***/ "./JavaScript/Frontend/Utility/UrlUtility.js":
/*!***************************************************!*\
  !*** ./JavaScript/Frontend/Utility/UrlUtility.js ***!
  \***************************************************/
/*! exports provided: UrlUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UrlUtility\", function() { return UrlUtility; });\n/* harmony import */ var _ArrayUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrayUtility */ \"./JavaScript/Frontend/Utility/ArrayUtility.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar UrlUtility =\n/*#__PURE__*/\nfunction () {\n  function UrlUtility() {\n    _classCallCheck(this, UrlUtility);\n  }\n\n  _createClass(UrlUtility, null, [{\n    key: \"removeParameterFromUrl\",\n\n    /**\n     * initialized all functions\n     *\n     * @return {void}\n     */\n    value: function removeParameterFromUrl(url, parameter) {\n      var urlParts = url.split('?');\n\n      if (urlParts.length >= 2) {\n        var prefix = encodeURIComponent(parameter) + '=';\n        var pars = urlParts[1].split(/[&;]/g); //reverse iteration as may be destructive\n\n        for (var i = pars.length; i-- > 0;) {\n          //idiom for string.startsWith\n          if (pars[i].lastIndexOf(prefix, 0) !== -1) {\n            pars.splice(i, 1);\n          }\n        }\n\n        url = urlParts[0] + (pars.length > 0 ? '?' + pars.join('&') : \"\");\n        return url;\n      } else {\n        return url;\n      }\n    }\n  }, {\n    key: \"getParameterFromUrl\",\n    value: function getParameterFromUrl(url, parameter) {\n      var parts = url.split('?'),\n          value = '';\n\n      if (parts.length >= 2) {\n        var queryString = parts[1];\n        queryString = '&' + queryString;\n        var prefix = encodeURIComponent(parameter) + '=';\n        var parameters = queryString.split(/[&;]/g);\n\n        for (var i = parameters.length; i-- > 0;) {\n          if (parameters[i].lastIndexOf(prefix, 0) !== -1) {\n            value = parameters[i].split('=')[1];\n            break;\n          }\n        }\n      }\n\n      return value;\n    }\n  }, {\n    key: \"addOrUpdateHash\",\n\n    /**\n     *\n     * @param {string} attribute\n     * @param {array} values\n     */\n    value: function addOrUpdateHash(attribute, values) {\n      var hashArguments = this.getHashArgumentsFromUrl();\n\n      if (hashArguments.length > 0) {\n        var key = _ArrayUtility__WEBPACK_IMPORTED_MODULE_0__[\"ArrayUtility\"].containsObjectWithKey(hashArguments, 'name', attribute);\n\n        if (key >= 0) {\n          hashArguments[key]['values'] = values;\n        }\n      } else {\n        hashArguments[0] = {\n          name: attribute,\n          values: values\n        };\n      }\n\n      var hash = '#'; // write hash\n\n      for (var i = 0; i <= hashArguments.length - 1; i++) {\n        hash += hashArguments[i].name + '=' + hashArguments[i].values.join();\n      }\n\n      window.location.hash = hash;\n    }\n  }, {\n    key: \"addAttributeToUrl\",\n\n    /**\n     *\n     * @param url\n     * @param attribute\n     * @param value\n     * @returns {string|*}\n     */\n    value: function addAttributeToUrl(url, attribute, value) {\n      var divider = '?';\n\n      if (url.indexOf('?') !== -1) {\n        divider = '&';\n      }\n\n      url += divider + attribute + '=' + value;\n      return url;\n    }\n  }, {\n    key: \"serialize\",\n\n    /**\n     * Serialize an given Form\n     *\n     * @param form\n     * @returns {string}\n     */\n    value: function serialize(form) {\n      var field,\n          s = [];\n\n      if (_typeof(form) === 'object' && form.nodeName === 'FORM') {\n        var len = form.elements.length;\n\n        for (var i = 0; i < len; i++) {\n          field = form.elements[i];\n\n          if (field.name && !field.disabled && field.type !== 'file' && field.type !== 'reset' && field.type !== 'submit' && field.type !== 'button') {\n            if (field.type === 'select-multiple') {\n              for (var j = form.elements[i].options.length - 1; j >= 0; j--) {\n                if (field.options[j].selected) {\n                  s[s.length] = encodeURIComponent(field.name) + '=' + encodeURIComponent(field.options[j].value);\n                }\n              }\n            } else if (field.type !== 'checkbox' && field.type !== 'radio' || field.checked) {\n              s[s.length] = encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value);\n            }\n          }\n        }\n      }\n\n      return s.join('&').replace(/%20/g, '+');\n    }\n  }, {\n    key: \"getHashArgumentsFromUrl\",\n\n    /**\n     * @return array\n     */\n    value: function getHashArgumentsFromUrl() {\n      if (window.location.hash) {\n        var hash = window.location.hash.split('#')[1];\n        var argumentArray = hash.split(/[&;]/g);\n        var hashArguments = [];\n\n        for (var i = 0; i < argumentArray.length; i++) {\n          var singleArgument = argumentArray[i].split(/[=;]/g);\n          var values = singleArgument[1].split(/[+;]/g);\n          hashArguments[i] = {\n            name: singleArgument[0],\n            values: values\n          };\n        }\n\n        return hashArguments;\n      }\n\n      return [];\n    }\n  }]);\n\n  return UrlUtility;\n}();\n\n\n\n//# sourceURL=webpack:///./JavaScript/Frontend/Utility/UrlUtility.js?");

/***/ }),

/***/ "./JavaScript/Frontend/Utility/index.js":
/*!**********************************************!*\
  !*** ./JavaScript/Frontend/Utility/index.js ***!
  \**********************************************/
/*! exports provided: ArrayUtility, AjaxUtility, UiUtility, UrlUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ArrayUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrayUtility */ \"./JavaScript/Frontend/Utility/ArrayUtility.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ArrayUtility\", function() { return _ArrayUtility__WEBPACK_IMPORTED_MODULE_0__[\"ArrayUtility\"]; });\n\n/* harmony import */ var _AjaxUtility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AjaxUtility */ \"./JavaScript/Frontend/Utility/AjaxUtility.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AjaxUtility\", function() { return _AjaxUtility__WEBPACK_IMPORTED_MODULE_1__[\"AjaxUtility\"]; });\n\n/* harmony import */ var _UiUtility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UiUtility */ \"./JavaScript/Frontend/Utility/UiUtility.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"UiUtility\", function() { return _UiUtility__WEBPACK_IMPORTED_MODULE_2__[\"UiUtility\"]; });\n\n/* harmony import */ var _UrlUtility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UrlUtility */ \"./JavaScript/Frontend/Utility/UrlUtility.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"UrlUtility\", function() { return _UrlUtility__WEBPACK_IMPORTED_MODULE_3__[\"UrlUtility\"]; });\n\n// Dynamic interface\n\n\n\n\n\n//# sourceURL=webpack:///./JavaScript/Frontend/Utility/index.js?");

/***/ }),

/***/ "./JavaScript/Frontend/main.js":
/*!*************************************!*\
  !*** ./JavaScript/Frontend/main.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Frontend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Frontend */ \"./JavaScript/Frontend/Frontend.js\");\n\n_Frontend__WEBPACK_IMPORTED_MODULE_0__[\"frontend\"].initialize();\n\n//# sourceURL=webpack:///./JavaScript/Frontend/main.js?");

/***/ }),

/***/ "./Sass/backend.scss":
/*!***************************!*\
  !*** ./Sass/backend.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"../Public/Css/backend.css\");\n\n//# sourceURL=webpack:///./Sass/backend.scss?");

/***/ }),

/***/ "./Sass/demo.scss":
/*!************************!*\
  !*** ./Sass/demo.scss ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"../Public/Css/demo.css\");\n\n//# sourceURL=webpack:///./Sass/demo.scss?");

/***/ }),

/***/ "./Sass/style.scss":
/*!*************************!*\
  !*** ./Sass/style.scss ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"../Public/Css/style.css\");\n\n//# sourceURL=webpack:///./Sass/style.scss?");

/***/ }),

/***/ 0:
/*!**************************************************************************************************!*\
  !*** multi ./JavaScript/Frontend/main.js ./Sass/backend.scss ./Sass/demo.scss ./Sass/style.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./JavaScript/Frontend/main.js */\"./JavaScript/Frontend/main.js\");\n__webpack_require__(/*! ./Sass/backend.scss */\"./Sass/backend.scss\");\n__webpack_require__(/*! ./Sass/demo.scss */\"./Sass/demo.scss\");\nmodule.exports = __webpack_require__(/*! ./Sass/style.scss */\"./Sass/style.scss\");\n\n\n//# sourceURL=webpack:///multi_./JavaScript/Frontend/main.js_./Sass/backend.scss_./Sass/demo.scss_./Sass/style.scss?");

/***/ })

/******/ });