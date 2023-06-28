"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./pages/profile.jsx":
/*!***************************!*\
  !*** ./pages/profile.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CardActions */ \"./node_modules/@mui/material/CardActions/index.js\");\n/* harmony import */ var _mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/ButtonGroup */ \"./node_modules/@mui/material/ButtonGroup/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_EditProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/EditProfile */ \"./components/EditProfile.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Profile() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const globalState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.GlobalState);\n    function handleClickOpen() {\n        setOpen(!open);\n    }\n    function deleteProfile() {\n        fetch(\"/api/users/\".concat(globalState.state.user.id), {\n            method: \"DELETE\"\n        }).then((data)=>globalState.dispatch({\n                type: \"DELETE\",\n                payload: data\n            })).then(()=>router.push(\"/signup\"));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            mt: \"3rem\",\n            maxWidth: \"800px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    variant: \"h5\",\n                    sx: {\n                        mb: \".5rem\"\n                    },\n                    children: [\n                        globalState.state.user.first_name,\n                        \"\\xa0\",\n                        globalState.state.user.last_name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/profile.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    variant: \"h6\",\n                    sx: {\n                        mb: \".75rem\"\n                    },\n                    children: [\n                        \"@\",\n                        globalState.state.user.username\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/profile.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    variant: \"p\",\n                    sx: {\n                        mb: \"1.5rem\"\n                    },\n                    children: globalState.state.user.email\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/profile.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        variant: \"outlined\",\n                        \"aria-label\": \"outlined button group\",\n                        sx: {\n                            display: \"block\"\n                        },\n                        children: [\n                            !open ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                variant: \"outlined\",\n                                onClick: handleClickOpen,\n                                children: \"Edit Profile\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/profile.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EditProfile__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                open: open,\n                                setOpen: setOpen\n                            }, void 0, false, {\n                                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/profile.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                variant: \"outlined\",\n                                onClick: deleteProfile,\n                                children: \"Delete Profile\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/profile.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/profile.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/profile.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/profile.jsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/profile.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Profile, \"2NJfobaECUlf7srcEW/lHaFHFcA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNOO0FBQ0U7QUFDYztBQUNBO0FBQ0E7QUFDVjtBQUNRO0FBQ0M7QUFDZDtBQUNlO0FBR3JDLFNBQVNZOztJQUN0QixNQUFNQyxTQUFTSCxzREFBU0E7SUFFeEIsTUFBTSxDQUFDSSxNQUFNQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU1lLGNBQWNoQixpREFBVUEsQ0FBQ1MsMkRBQVdBO0lBRTFDLFNBQVNRO1FBQ1BGLFFBQVEsQ0FBQ0Q7SUFDWDtJQUVBLFNBQVNJO1FBQ1BDLE1BQU0sY0FBd0MsT0FBMUJILFlBQVlJLE1BQU1DLEtBQUtDLEtBQU87WUFDOUNDLFFBQVE7UUFDWixHQUNDQyxLQUFLQyxDQUFBQSxPQUFRVCxZQUFZVSxTQUFTO2dCQUFFQyxNQUFNO2dCQUFVQyxTQUFTSDtZQUFJLElBQ2pFRCxLQUFLLElBQU1YLE9BQU9nQixLQUFLO0lBQzVCO0lBRUUscUJBQ0UsOERBQUMxQiwwREFBSUE7UUFBQzJCLElBQUk7WUFDUkMsU0FBUztZQUNUQyxlQUFlO1lBQ2ZDLGdCQUFnQjtZQUNoQkMsWUFBWTtZQUNaQyxJQUFJO1lBQ0pDLFVBQVU7UUFFWjtrQkFDRSw0RUFBQ2hDLGlFQUFXQTs7OEJBQ1YsOERBQUNJLGdFQUFVQTtvQkFBQzZCLFNBQVE7b0JBQUlQLElBQUk7d0JBQUNRLElBQUc7b0JBQU87O3dCQUFJdEIsWUFBWUksTUFBTUMsS0FBS2tCO3dCQUFXO3dCQUFPdkIsWUFBWUksTUFBTUMsS0FBS21COzs7Ozs7OzhCQUMzRyw4REFBQ2hDLGdFQUFVQTtvQkFBQzZCLFNBQVE7b0JBQUlQLElBQUk7d0JBQUNRLElBQUc7b0JBQVE7O3dCQUFHO3dCQUFFdEIsWUFBWUksTUFBTUMsS0FBS29COzs7Ozs7OzhCQUNwRSw4REFBQ2pDLGdFQUFVQTtvQkFBQzZCLFNBQVE7b0JBQUlQLElBQUk7d0JBQUNRLElBQUc7b0JBQVE7OEJBQUl0QixZQUFZSSxNQUFNQyxLQUFLcUI7Ozs7Ozs4QkFDbkUsOERBQUNyQyxpRUFBV0E7OEJBQ1YsNEVBQUNDLGlFQUFXQTt3QkFDVitCLFNBQVE7d0JBQ1JNLGNBQVc7d0JBQ1hiLElBQUk7NEJBQ0ZDLFNBQVM7d0JBQ1g7OzRCQUVHLENBQUNqQixxQkFDRiw4REFBQ1AsNkRBQU1BO2dDQUFDOEIsU0FBUTtnQ0FBV08sU0FBUzNCOzBDQUFpQjs7Ozs7cURBRXJELDhEQUFDTiwrREFBV0E7Z0NBQUNHLE1BQU1BO2dDQUFNQyxTQUFTQTs7Ozs7OzBDQUVwQyw4REFBQ1IsNkRBQU1BO2dDQUFDOEIsU0FBUTtnQ0FBV08sU0FBUzFCOzBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTS9EO0dBbkR3Qk47O1FBQ1BGLGtEQUFTQTs7O0tBREZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2ZpbGUuanN4PzNkMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBDYXJkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZCc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudCc7XG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkQWN0aW9ucyc7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b25Hcm91cCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBHbG9iYWxTdGF0ZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBFZGl0UHJvZmlsZSBmcm9tICcuLi9jb21wb25lbnRzL0VkaXRQcm9maWxlJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGdsb2JhbFN0YXRlID0gdXNlQ29udGV4dChHbG9iYWxTdGF0ZSlcblxuICBmdW5jdGlvbiBoYW5kbGVDbGlja09wZW4oKXtcbiAgICBzZXRPcGVuKCFvcGVuKVxuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlUHJvZmlsZSgpIHtcbiAgICBmZXRjaChgL2FwaS91c2Vycy8ke2dsb2JhbFN0YXRlLnN0YXRlLnVzZXIuaWR9YCAsIHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICB9KVxuICAgIC50aGVuKGRhdGEgPT4gZ2xvYmFsU3RhdGUuZGlzcGF0Y2goeyB0eXBlOiAnREVMRVRFJywgcGF5bG9hZDogZGF0YX0pKVxuICAgIC50aGVuKCgpID0+IHJvdXRlci5wdXNoKCcvc2lnbnVwJykpXG59XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBzeD17e1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIG10OiAnM3JlbScsXG4gICAgICBtYXhXaWR0aDogJzgwMHB4JyxcblxuICAgIH19PlxuICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNSdzeD17e21iOicuNXJlbSd9fT57Z2xvYmFsU3RhdGUuc3RhdGUudXNlci5maXJzdF9uYW1lfSZuYnNwO3tnbG9iYWxTdGF0ZS5zdGF0ZS51c2VyLmxhc3RfbmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2J3N4PXt7bWI6Jy43NXJlbSd9fT5Ae2dsb2JhbFN0YXRlLnN0YXRlLnVzZXIudXNlcm5hbWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdwJyBzeD17e21iOicxLjVyZW0nfX0+e2dsb2JhbFN0YXRlLnN0YXRlLnVzZXIuZW1haWx9PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICAgICAgPEJ1dHRvbkdyb3VwIFxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCIgXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwib3V0bGluZWQgYnV0dG9uIGdyb3VwXCJcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHshb3BlbiA/IFxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrT3Blbn0+RWRpdCBQcm9maWxlPC9CdXR0b24+IFxuICAgICAgICAgICAgICA6IFxuICAgICAgICAgICAgICA8RWRpdFByb2ZpbGUgb3Blbj17b3Blbn0gc2V0T3Blbj17c2V0T3Blbn0vPlxuICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXtkZWxldGVQcm9maWxlfT5EZWxldGUgUHJvZmlsZTwvQnV0dG9uPlxuICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKVxufVxuXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiQm94IiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEFjdGlvbnMiLCJCdXR0b25Hcm91cCIsIkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJHbG9iYWxTdGF0ZSIsInVzZVJvdXRlciIsIkVkaXRQcm9maWxlIiwiUHJvZmlsZSIsInJvdXRlciIsIm9wZW4iLCJzZXRPcGVuIiwiZ2xvYmFsU3RhdGUiLCJoYW5kbGVDbGlja09wZW4iLCJkZWxldGVQcm9maWxlIiwiZmV0Y2giLCJzdGF0ZSIsInVzZXIiLCJpZCIsIm1ldGhvZCIsInRoZW4iLCJkYXRhIiwiZGlzcGF0Y2giLCJ0eXBlIiwicGF5bG9hZCIsInB1c2giLCJzeCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibXQiLCJtYXhXaWR0aCIsInZhcmlhbnQiLCJtYiIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJ1c2VybmFtZSIsImVtYWlsIiwiYXJpYS1sYWJlbCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profile.jsx\n"));

/***/ })

});