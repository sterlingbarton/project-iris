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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalState: function() { return /* binding */ GlobalState; },\n/* harmony export */   Layout: function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ \"./components/Nav.jsx\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideBar */ \"./components/SideBar.jsx\");\n/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Drawer */ \"./node_modules/@mui/material/Drawer/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst GlobalState = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);\nfunction Layout(param) {\n    let { children  } = param;\n    _s();\n    const reducer = (state, action)=>{\n        switch(action.type){\n            case \"LOGIN\":\n                return {\n                    ...state,\n                    isLoggedIn: true,\n                    user: action.payload\n                };\n            case \"LOGOUT\":\n                return {\n                    isLoggedIn: false,\n                    user: {}\n                };\n            case \"CHECK\":\n                return {\n                    user: action.payload\n                };\n            case \"SIGNUP\":\n                return {\n                    ...state,\n                    isLoggedIn: true,\n                    user: action.payload\n                };\n            case \"DELETE\":\n                return {\n                    isLoggedIn: false,\n                    user: {}\n                };\n            case \"EDIT\":\n                return {\n                    isLoggedIn: true,\n                    user: action.payload\n                };\n            case \"OPEN-SNACKBAR\":\n                return {\n                    ...state,\n                    snackbarState: {\n                        ...state.alertState,\n                        ...action.payload,\n                        open: true\n                    }\n                };\n            case \"CLOSE-SNACKBAR\":\n                {\n                    state.snackbarState.open = false;\n                    return {\n                        ...state\n                    };\n                }\n            default:\n                return {\n                    ...state\n                };\n        }\n    };\n    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_1__.useReducer(reducer, {\n        isLoggedIn: false,\n        user: {},\n        snackbarState: {\n            open: false,\n            alertState: \"\",\n            message: \"\"\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalState.Provider, {\n        value: {\n            state,\n            dispatch\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            sx: {\n                flex: 1\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Layout.jsx\",\n                    lineNumber: 91,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Layout.jsx\",\n                    lineNumber: 93,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    variant: \"permanent\",\n                    anchor: \"right\",\n                    width: 240,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            children: \"Hello\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Layout.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            children: \"Hello\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Layout.jsx\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            children: \"Hello\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Layout.jsx\",\n                            lineNumber: 101,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            children: \"Hello\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Layout.jsx\",\n                            lineNumber: 102,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Layout.jsx\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Layout.jsx\",\n                    lineNumber: 94,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Snackbar, {\n                    anchorOrigin: {\n                        vertical: \"bottom\",\n                        horizontal: \"right\"\n                    },\n                    open: state.snackbarState.open,\n                    message: state.snackbarState.message,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Alert, {\n                        severity: state.snackbarState.alertState ? state.snackbarState.alertState : undefined,\n                        children: state.snackbarState.message\n                    }, void 0, false, {\n                        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Layout.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Layout.jsx\",\n                    lineNumber: 106,\n                    columnNumber: 13\n                }, this),\n                children\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Layout.jsx\",\n            lineNumber: 88,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Layout.jsx\",\n        lineNumber: 87,\n        columnNumber: 9\n    }, this);\n}\n_s(Layout, \"sq9pa833jLu0WKGBbk0yJ/UKQfw=\");\n_c = Layout;\n\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1A7QUFDdUI7QUFDZjtBQUNFO0FBQ1E7QUFDUDtBQUNpQjtBQUNSO0FBQ047QUFDWTtBQUNOO0FBQ0U7QUFDWTtBQUNKO0FBQ0E7QUFDRTtBQUNSO0FBRWhELE1BQU1tQiw0QkFBY25CLGdEQUFtQm9CLENBQUM7QUFFeEMsU0FBU0MsT0FBTyxLQUFZO1FBQVosRUFBRUMsU0FBUSxFQUFFLEdBQVo7O0lBRVosTUFBTUMsVUFBVSxDQUFDQyxPQUFPQztRQUNwQixPQUFRQSxPQUFPQztZQUNYLEtBQUs7Z0JBQ0QsT0FBTztvQkFDSCxHQUFHRixLQUFLO29CQUNSRyxZQUFZO29CQUNaQyxNQUFNSCxPQUFPSTtnQkFDakI7WUFDSixLQUFLO2dCQUNELE9BQU07b0JBQ0ZGLFlBQVk7b0JBQ1pDLE1BQU0sQ0FBQztnQkFDWDtZQUNKLEtBQUs7Z0JBQ0QsT0FBTTtvQkFDRkEsTUFBTUgsT0FBT0k7Z0JBQ2pCO1lBQ0osS0FBSztnQkFDRCxPQUFNO29CQUNGLEdBQUdMLEtBQUs7b0JBQ1JHLFlBQVk7b0JBQ1pDLE1BQU1ILE9BQU9JO2dCQUNqQjtZQUNKLEtBQUs7Z0JBQ0QsT0FBTTtvQkFDRkYsWUFBWTtvQkFDWkMsTUFBTSxDQUFDO2dCQUNYO1lBQ0osS0FBSztnQkFDRCxPQUFNO29CQUNGRCxZQUFZO29CQUNaQyxNQUFNSCxPQUFPSTtnQkFDakI7WUFDSixLQUFLO2dCQUNELE9BQU87b0JBQ0gsR0FBR0wsS0FBSztvQkFDUk0sZUFBZTt3QkFDWCxHQUFHTixNQUFNTyxVQUFVO3dCQUNuQixHQUFHTixPQUFPSSxPQUFPO3dCQUNqQkcsTUFBTTtvQkFDVjtnQkFDSjtZQUNKLEtBQUs7Z0JBQWtCO29CQUNuQlIsTUFBTU0sY0FBY0UsT0FBTztvQkFDM0IsT0FBTzt3QkFBRSxHQUFHUixLQUFLO29CQUFDO2dCQUN0QjtZQUNBO2dCQUNJLE9BQU87b0JBQUMsR0FBR0EsS0FBSztnQkFBQTtRQUN4QjtJQUNKO0lBRUEsTUFBTSxDQUFDQSxPQUFPUyxTQUFTLEdBQUdqQyw2Q0FBZ0JrQyxDQUFDWCxTQUFTO1FBQ2hESSxZQUFZO1FBQ1pDLE1BQU0sQ0FBQztRQUNQRSxlQUFlO1lBQ1hFLE1BQU07WUFDTkQsWUFBWTtZQUNaSSxTQUFTO1FBQ1g7SUFFTjtJQUVBLHFCQUNJLDhEQUFDaEIsWUFBWWlCO1FBQVNDLE9BQU87WUFBQ2I7WUFBT1M7UUFBUTtrQkFDekMsNEVBQUMxQix5REFBR0E7WUFBQytCLElBQUk7Z0JBQ0xDLE1BQU07WUFDVjs7OEJBQ0EsOERBQUMvQixpRUFBV0E7Ozs7OzhCQUVaLDhEQUFDUCw0Q0FBR0E7Ozs7OzhCQUNKLDhEQUFDSyw0REFBTUE7b0JBQ1RrQyxTQUFRO29CQUNSQyxRQUFPO29CQUNQQyxPQUFPOztzQ0FFTCw4REFBQ25DLHlEQUFHQTtzQ0FBQzs7Ozs7O3NDQUNMLDhEQUFDQSx5REFBR0E7c0NBQUM7Ozs7OztzQ0FDTCw4REFBQ0EseURBQUdBO3NDQUFDOzs7Ozs7c0NBQ0wsOERBQUNBLHlEQUFHQTtzQ0FBQzs7Ozs7O3NDQUNMLDhEQUFDRSw2REFBT0E7Ozs7Ozs7Ozs7OzhCQUdSLDhEQUFDUCxtREFBUUE7b0JBQ0x5QyxjQUFjO3dCQUFFQyxVQUFVO3dCQUFVQyxZQUFZO29CQUFRO29CQUN4RGIsTUFBTVIsTUFBTU0sY0FBY0U7b0JBQzFCRyxTQUFTWCxNQUFNTSxjQUFjSzs4QkFFakMsNEVBQUNoQyxnREFBS0E7d0JBQ0YyQyxVQUNBdEIsTUFBTU0sY0FBY0MsYUFBYVAsTUFBTU0sY0FBY0MsYUFBYWdCO2tDQUdyRXZCLE1BQU1NLGNBQWNLOzs7Ozs7Ozs7OztnQkFHbkJiOzs7Ozs7Ozs7Ozs7QUFJZDtHQXJHU0Q7S0FBQUE7QUF1R21CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzeD9jNjFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXYgZnJvbSBcIi4vTmF2XCI7XG5pbXBvcnQgeyBTbmFja2JhciwgQWxlcnQgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IFNpZGVCYXIgZnJvbSBcIi4vU2lkZUJhclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94J1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EaXZpZGVyJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbUJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtQnV0dG9uJztcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbUljb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgSW5ib3hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW92ZVRvSW5ib3gnO1xuaW1wb3J0IE1haWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWFpbCc7XG5cbmNvbnN0IEdsb2JhbFN0YXRlID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuXG4gICAgY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0xPR0lOJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdMT0dPVVQnOlxuICAgICAgICAgICAgICAgIHJldHVybnsgXG4gICAgICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0NIRUNLJzpcbiAgICAgICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnU0lHTlVQJzpcbiAgICAgICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0RFTEVURSc6XG4gICAgICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlcjoge31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdFRElUJzpcbiAgICAgICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnT1BFTi1TTkFDS0JBUic6IFxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBzbmFja2JhclN0YXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5hbGVydFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdDTE9TRS1TTkFDS0JBUic6IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zbmFja2JhclN0YXRlLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKHJlZHVjZXIsIHtcbiAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgIHVzZXI6IHt9LFxuICAgICAgICBzbmFja2JhclN0YXRlOiB7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGFsZXJ0U3RhdGU6ICcnLFxuICAgICAgICAgICAgbWVzc2FnZTogJydcbiAgICAgICAgICB9XG5cbiAgICB9KVxuXG4gICAgcmV0dXJuICggXG4gICAgICAgIDxHbG9iYWxTdGF0ZS5Qcm92aWRlciB2YWx1ZT17e3N0YXRlLCBkaXNwYXRjaH19PlxuICAgICAgICAgICAgPEJveCBzeD17e1xuICAgICAgICAgICAgICAgIGZsZXg6IDFcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG5cbiAgICAgICAgICAgIDxOYXYgLz5cbiAgICAgICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcbiAgICAgICAgICBhbmNob3I9XCJyaWdodFwiXG4gICAgICAgICAgd2lkdGg9ezI0MH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94PkhlbGxvPC9Cb3g+XG4gICAgICAgICAgICA8Qm94PkhlbGxvPC9Cb3g+XG4gICAgICAgICAgICA8Qm94PkhlbGxvPC9Cb3g+XG4gICAgICAgICAgICA8Qm94PkhlbGxvPC9Cb3g+XG4gICAgICAgICAgICA8VG9vbGJhciAvPlxuICAgICAgICA8L0RyYXdlcj5cbiAgICAgICAgICAgIHsvKiA8U2lkZUJhciAvPiAqL31cbiAgICAgICAgICAgIDxTbmFja2JhclxuICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ2JvdHRvbScsIGhvcml6b250YWw6ICdyaWdodCcgfX1cbiAgICAgICAgICAgICAgICBvcGVuPXtzdGF0ZS5zbmFja2JhclN0YXRlLm9wZW59XG4gICAgICAgICAgICAgICAgbWVzc2FnZT17c3RhdGUuc25hY2tiYXJTdGF0ZS5tZXNzYWdlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPEFsZXJ0XG4gICAgICAgICAgICAgICAgc2V2ZXJpdHk9e1xuICAgICAgICAgICAgICAgIHN0YXRlLnNuYWNrYmFyU3RhdGUuYWxlcnRTdGF0ZSA/IHN0YXRlLnNuYWNrYmFyU3RhdGUuYWxlcnRTdGF0ZSA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIHtzdGF0ZS5zbmFja2JhclN0YXRlLm1lc3NhZ2V9XG4gICAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICAgICAgPC9TbmFja2Jhcj5cbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvR2xvYmFsU3RhdGUuUHJvdmlkZXI+XG4gICAgICk7XG59XG5cbmV4cG9ydCB7R2xvYmFsU3RhdGUsIExheW91dH1cblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJOYXYiLCJTbmFja2JhciIsIkFsZXJ0IiwiU2lkZUJhciIsInVzZUVmZmVjdCIsIkRyYXdlciIsIkJveCIsIkNzc0Jhc2VsaW5lIiwiVG9vbGJhciIsIkxpc3QiLCJUeXBvZ3JhcGh5IiwiRGl2aWRlciIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJJbmJveEljb24iLCJNYWlsSWNvbiIsIkdsb2JhbFN0YXRlIiwiY3JlYXRlQ29udGV4dCIsIkxheW91dCIsImNoaWxkcmVuIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwicGF5bG9hZCIsInNuYWNrYmFyU3RhdGUiLCJhbGVydFN0YXRlIiwib3BlbiIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsIm1lc3NhZ2UiLCJQcm92aWRlciIsInZhbHVlIiwic3giLCJmbGV4IiwidmFyaWFudCIsImFuY2hvciIsIndpZHRoIiwiYW5jaG9yT3JpZ2luIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwic2V2ZXJpdHkiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.jsx\n"));

/***/ })

});