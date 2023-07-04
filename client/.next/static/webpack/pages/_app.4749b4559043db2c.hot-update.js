"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalState: function() { return /* binding */ GlobalState; },\n/* harmony export */   Layout: function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ \"./components/Nav.jsx\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideBar */ \"./components/SideBar.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst GlobalState = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);\nfunction Layout(param) {\n    let { children  } = param;\n    _s();\n    const reducer = (state, action)=>{\n        switch(action.type){\n            case \"LOGIN\":\n                return {\n                    ...state,\n                    isLoggedIn: true,\n                    user: action.payload\n                };\n            case \"LOGOUT\":\n                return {\n                    isLoggedIn: false,\n                    user: {}\n                };\n            case \"CHECK\":\n                return {\n                    user: action.payload\n                };\n            case \"SIGNUP\":\n                return {\n                    ...state,\n                    isLoggedIn: true,\n                    user: action.payload\n                };\n            case \"DELETE\":\n                return {\n                    isLoggedIn: false,\n                    user: {}\n                };\n            case \"EDIT\":\n                return {\n                    isLoggedIn: true,\n                    user: action.payload\n                };\n            case \"OPEN-SNACKBAR\":\n                return {\n                    ...state,\n                    snackbarState: {\n                        ...state.alertState,\n                        ...action.payload,\n                        open: true\n                    }\n                };\n            case \"CLOSE-SNACKBAR\":\n                {\n                    state.snackbarState.open = false;\n                    return {\n                        ...state\n                    };\n                }\n            default:\n                return {\n                    ...state\n                };\n        }\n    };\n    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_1__.useReducer(reducer, {\n        isLoggedIn: false,\n        user: {},\n        snackbarState: {\n            open: false,\n            alertState: \"\",\n            message: \"\"\n        }\n    });\n    function handleClose() {\n        state.snackbarState.open(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalState.Provider, {\n        value: {\n            state,\n            dispatch\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Layout.jsx\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Snackbar, {\n                autoHideDuration: 2000,\n                anchorOrigin: {\n                    vertical: \"bottom\",\n                    horizontal: \"right\"\n                },\n                open: state.snackbarState.open,\n                onClose: handleClose,\n                message: state.snackbarState.message,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Alert, {\n                    severity: state.snackbarState.alertState ? state.snackbarState.alertState : undefined,\n                    children: state.snackbarState.message\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Layout.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Layout.jsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Layout.jsx\",\n        lineNumber: 77,\n        columnNumber: 9\n    }, this);\n}\n_s(Layout, \"sq9pa833jLu0WKGBbk0yJ/UKQfw=\");\n_c = Layout;\n\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDUDtBQUN1QjtBQUNmO0FBRWhDLE1BQU1LLDRCQUFjTCxnREFBbUJNLENBQUM7QUFFeEMsU0FBU0MsT0FBTyxLQUFZO1FBQVosRUFBRUMsU0FBUSxFQUFFLEdBQVo7O0lBRVosTUFBTUMsVUFBVSxDQUFDQyxPQUFPQztRQUNwQixPQUFRQSxPQUFPQztZQUNYLEtBQUs7Z0JBQ0QsT0FBTztvQkFDSCxHQUFHRixLQUFLO29CQUNSRyxZQUFZO29CQUNaQyxNQUFNSCxPQUFPSTtnQkFDakI7WUFDSixLQUFLO2dCQUNELE9BQU07b0JBQ0ZGLFlBQVk7b0JBQ1pDLE1BQU0sQ0FBQztnQkFDWDtZQUNKLEtBQUs7Z0JBQ0QsT0FBTTtvQkFDRkEsTUFBTUgsT0FBT0k7Z0JBQ2pCO1lBQ0osS0FBSztnQkFDRCxPQUFNO29CQUNGLEdBQUdMLEtBQUs7b0JBQ1JHLFlBQVk7b0JBQ1pDLE1BQU1ILE9BQU9JO2dCQUNqQjtZQUNKLEtBQUs7Z0JBQ0QsT0FBTTtvQkFDRkYsWUFBWTtvQkFDWkMsTUFBTSxDQUFDO2dCQUNYO1lBQ0osS0FBSztnQkFDRCxPQUFNO29CQUNGRCxZQUFZO29CQUNaQyxNQUFNSCxPQUFPSTtnQkFDakI7WUFDSixLQUFLO2dCQUNELE9BQU87b0JBQ0gsR0FBR0wsS0FBSztvQkFDUk0sZUFBZTt3QkFDWCxHQUFHTixNQUFNTyxVQUFVO3dCQUNuQixHQUFHTixPQUFPSSxPQUFPO3dCQUNqQkcsTUFBTTtvQkFDVjtnQkFDSjtZQUNKLEtBQUs7Z0JBQWtCO29CQUNuQlIsTUFBTU0sY0FBY0UsT0FBTztvQkFDM0IsT0FBTzt3QkFBRSxHQUFHUixLQUFLO29CQUFDO2dCQUN0QjtZQUNBO2dCQUNJLE9BQU87b0JBQUMsR0FBR0EsS0FBSztnQkFBQTtRQUN4QjtJQUNKO0lBRUEsTUFBTSxDQUFDQSxPQUFPUyxTQUFTLEdBQUduQiw2Q0FBZ0JvQixDQUFDWCxTQUFTO1FBQ2hESSxZQUFZO1FBQ1pDLE1BQU0sQ0FBQztRQUNQRSxlQUFlO1lBQ1hFLE1BQU07WUFDTkQsWUFBWTtZQUNaSSxTQUFTO1FBQ1g7SUFFTjtJQUVBLFNBQVNDO1FBQ0xaLE1BQU1NLGNBQWNFLEtBQUs7SUFDN0I7SUFFQSxxQkFDSSw4REFBQ2IsWUFBWWtCO1FBQVNDLE9BQU87WUFBQ2Q7WUFBT1M7UUFBUTs7MEJBQ3pDLDhEQUFDbEIsNENBQUdBOzs7OzswQkFFSiw4REFBQ0MsbURBQVFBO2dCQUNMdUIsa0JBQWtCO2dCQUNsQkMsY0FBYztvQkFBRUMsVUFBVTtvQkFBVUMsWUFBWTtnQkFBUTtnQkFDeERWLE1BQU1SLE1BQU1NLGNBQWNFO2dCQUMxQlcsU0FBU1A7Z0JBQ1RELFNBQVNYLE1BQU1NLGNBQWNLOzBCQUVqQyw0RUFBQ2xCLGdEQUFLQTtvQkFDRjJCLFVBQ0FwQixNQUFNTSxjQUFjQyxhQUFhUCxNQUFNTSxjQUFjQyxhQUFhYzs4QkFHckVyQixNQUFNTSxjQUFjSzs7Ozs7Ozs7Ozs7WUFHbkJiOzs7Ozs7O0FBR2Q7R0ExRlNEO0tBQUFBO0FBNEZtQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5qc3g/YzYxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2IGZyb20gXCIuL05hdlwiO1xuaW1wb3J0IHsgU25hY2tiYXIsIEFsZXJ0IH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuL1NpZGVCYXJcIjtcblxuY29uc3QgR2xvYmFsU3RhdGUgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG5cbiAgICBjb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnTE9HSU4nOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0xPR09VVCc6XG4gICAgICAgICAgICAgICAgcmV0dXJueyBcbiAgICAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnQ0hFQ0snOlxuICAgICAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdTSUdOVVAnOlxuICAgICAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnREVMRVRFJzpcbiAgICAgICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0VESVQnOlxuICAgICAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdPUEVOLVNOQUNLQkFSJzogXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHNuYWNrYmFyU3RhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmFsZXJ0U3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW46IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0NMT1NFLVNOQUNLQkFSJzoge1xuICAgICAgICAgICAgICAgIHN0YXRlLnNuYWNrYmFyU3RhdGUub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGV9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIocmVkdWNlciwge1xuICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICAgICAgdXNlcjoge30sXG4gICAgICAgIHNuYWNrYmFyU3RhdGU6IHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICAgICAgYWxlcnRTdGF0ZTogJycsXG4gICAgICAgICAgICBtZXNzYWdlOiAnJ1xuICAgICAgICAgIH1cblxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDbG9zZSgpe1xuICAgICAgICBzdGF0ZS5zbmFja2JhclN0YXRlLm9wZW4oZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuICggXG4gICAgICAgIDxHbG9iYWxTdGF0ZS5Qcm92aWRlciB2YWx1ZT17e3N0YXRlLCBkaXNwYXRjaH19PlxuICAgICAgICAgICAgPE5hdiAvPlxuICAgICAgICAgICAgey8qIDxTaWRlQmFyIC8+ICovfVxuICAgICAgICAgICAgPFNuYWNrYmFyXG4gICAgICAgICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MjAwMH1cbiAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6ICdib3R0b20nLCBob3Jpem9udGFsOiAncmlnaHQnIH19XG4gICAgICAgICAgICAgICAgb3Blbj17c3RhdGUuc25hY2tiYXJTdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgIG1lc3NhZ2U9e3N0YXRlLnNuYWNrYmFyU3RhdGUubWVzc2FnZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxBbGVydFxuICAgICAgICAgICAgICAgIHNldmVyaXR5PXtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zbmFja2JhclN0YXRlLmFsZXJ0U3RhdGUgPyBzdGF0ZS5zbmFja2JhclN0YXRlLmFsZXJ0U3RhdGUgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICB7c3RhdGUuc25hY2tiYXJTdGF0ZS5tZXNzYWdlfVxuICAgICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgICAgIDwvU25hY2tiYXI+XG4gICAgICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgICAgPC9HbG9iYWxTdGF0ZS5Qcm92aWRlcj5cbiAgICAgKTtcbn1cblxuZXhwb3J0IHtHbG9iYWxTdGF0ZSwgTGF5b3V0fVxuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdiIsIlNuYWNrYmFyIiwiQWxlcnQiLCJTaWRlQmFyIiwiR2xvYmFsU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiaXNMb2dnZWRJbiIsInVzZXIiLCJwYXlsb2FkIiwic25hY2tiYXJTdGF0ZSIsImFsZXJ0U3RhdGUiLCJvcGVuIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwibWVzc2FnZSIsImhhbmRsZUNsb3NlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImF1dG9IaWRlRHVyYXRpb24iLCJhbmNob3JPcmlnaW4iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJvbkNsb3NlIiwic2V2ZXJpdHkiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.jsx\n"));

/***/ })

});