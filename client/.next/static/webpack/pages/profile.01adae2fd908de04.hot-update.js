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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/ButtonGroup */ \"./node_modules/@mui/material/ButtonGroup/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_EditProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/EditProfile */ \"./components/EditProfile.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction UserPage() {\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const globalState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.GlobalState);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    function handleClickOpen() {\n        setOpen(!open);\n    }\n    function deleteProfile() {\n        fetch(\"/api/users/\".concat(globalState.state.user.id), {\n            method: \"DELETE\"\n        }).then((data)=>globalState.dispatch({\n                type: \"DELETE\",\n                payload: data\n            })).then(()=>router.push(\"/signup\"));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            mt: \"3rem\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"h5\",\n                children: [\n                    globalState.state.user.first_name,\n                    \"\\xa0\",\n                    globalState.state.user.last_name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/profile.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"h6\",\n                children: [\n                    \"@\",\n                    globalState.state.user.username\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/profile.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"p\",\n                sx: {\n                    mb: \".5rem\"\n                },\n                children: globalState.state.user.email\n            }, void 0, false, {\n                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/profile.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"outlined\",\n                \"aria-label\": \"outlined button group\",\n                sx: {\n                    display: \"block\"\n                },\n                children: [\n                    !open ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        variant: \"outlined\",\n                        onClick: handleClickOpen,\n                        children: \"Edit Profile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/profile.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EditProfile__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        open: open,\n                        setOpen: setOpen\n                    }, void 0, false, {\n                        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/profile.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        variant: \"outlined\",\n                        onClick: deleteProfile,\n                        children: \"Delete Profile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/profile.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/profile.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/profile.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(UserPage, \"HXHNtXiYpUeFJ4i0gkAsIqdbgO4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = UserPage;\nvar _c;\n$RefreshReg$(_c, \"UserPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDTjtBQUNnQjtBQUNWO0FBQ1E7QUFDQztBQUNkO0FBQ2U7QUFHckMsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNVyxjQUFjWixpREFBVUEsQ0FBQ00sMkRBQVdBO0lBRTFDLE1BQU1PLFNBQVNOLHNEQUFTQTtJQUV4QixTQUFTTztRQUNQSCxRQUFRLENBQUNEO0lBQ1g7SUFFQSxTQUFTSztRQUNQQyxNQUFNLGNBQXdDLE9BQTFCSixZQUFZSyxNQUFNQyxLQUFLQyxLQUFPO1lBQzlDQyxRQUFRO1FBQ1osR0FDQ0MsS0FBS0MsQ0FBQUEsT0FBUVYsWUFBWVcsU0FBUztnQkFBRUMsTUFBTTtnQkFBVUMsU0FBU0g7WUFBSSxJQUNqRUQsS0FBSyxJQUFNUixPQUFPYSxLQUFLO0lBQzVCO0lBRUUscUJBQ0UsOERBQUN4Qix5REFBR0E7UUFBQ3lCLElBQUk7WUFDUEMsU0FBUztZQUNUQyxlQUFlO1lBQ2ZDLGdCQUFnQjtZQUNoQkMsWUFBWTtZQUNaQyxJQUFJO1FBQ047OzBCQUNFLDhEQUFDM0IsZ0VBQVVBO2dCQUFDNEIsU0FBUTs7b0JBQU1yQixZQUFZSyxNQUFNQyxLQUFLZ0I7b0JBQVc7b0JBQU90QixZQUFZSyxNQUFNQyxLQUFLaUI7Ozs7Ozs7MEJBQzFGLDhEQUFDOUIsZ0VBQVVBO2dCQUFDNEIsU0FBUTs7b0JBQUs7b0JBQUVyQixZQUFZSyxNQUFNQyxLQUFLa0I7Ozs7Ozs7MEJBQ2xELDhEQUFDL0IsZ0VBQVVBO2dCQUFDNEIsU0FBUTtnQkFBSU4sSUFBSTtvQkFBQ1UsSUFBRztnQkFBTzswQkFBSXpCLFlBQVlLLE1BQU1DLEtBQUtvQjs7Ozs7OzBCQUNsRSw4REFBQ25DLGlFQUFXQTtnQkFDVjhCLFNBQVE7Z0JBQ1JNLGNBQVc7Z0JBQ1haLElBQUk7b0JBQ0ZDLFNBQVM7Z0JBQ1g7O29CQUVHLENBQUNsQixxQkFDRiw4REFBQ04sNERBQU1BO3dCQUFDNkIsU0FBUTt3QkFBV08sU0FBUzFCO2tDQUFpQjs7Ozs7NkNBRXJELDhEQUFDTiwrREFBV0E7d0JBQUNFLE1BQU1BO3dCQUFNQyxTQUFTQTs7Ozs7O2tDQUVwQyw4REFBQ1AsNERBQU1BO3dCQUFDNkIsU0FBUTt3QkFBV08sU0FBU3pCO2tDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0Q7R0E3Q3dCTjs7UUFJUEYsa0RBQVNBOzs7S0FKRkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qc3g/M2QyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uR3JvdXAnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgR2xvYmFsU3RhdGUgfSBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgRWRpdFByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9FZGl0UHJvZmlsZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclBhZ2UoKSB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgZ2xvYmFsU3RhdGUgPSB1c2VDb250ZXh0KEdsb2JhbFN0YXRlKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrT3Blbigpe1xuICAgIHNldE9wZW4oIW9wZW4pXG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVQcm9maWxlKCkge1xuICAgIGZldGNoKGAvYXBpL3VzZXJzLyR7Z2xvYmFsU3RhdGUuc3RhdGUudXNlci5pZH1gICwge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIH0pXG4gICAgLnRoZW4oZGF0YSA9PiBnbG9iYWxTdGF0ZS5kaXNwYXRjaCh7IHR5cGU6ICdERUxFVEUnLCBwYXlsb2FkOiBkYXRhfSkpXG4gICAgLnRoZW4oKCkgPT4gcm91dGVyLnB1c2goJy9zaWdudXAnKSlcbn1cblxuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3tcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBtdDogJzNyZW0nXG4gICAgfX0+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNSc+e2dsb2JhbFN0YXRlLnN0YXRlLnVzZXIuZmlyc3RfbmFtZX0mbmJzcDt7Z2xvYmFsU3RhdGUuc3RhdGUudXNlci5sYXN0X25hbWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnPkB7Z2xvYmFsU3RhdGUuc3RhdGUudXNlci51c2VybmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdwJyBzeD17e21iOicuNXJlbSd9fT57Z2xvYmFsU3RhdGUuc3RhdGUudXNlci5lbWFpbH08L1R5cG9ncmFwaHk+XG4gICAgICA8QnV0dG9uR3JvdXAgXG4gICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIFxuICAgICAgICBhcmlhLWxhYmVsPVwib3V0bGluZWQgYnV0dG9uIGdyb3VwXCJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7IW9wZW4gPyBcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrT3Blbn0+RWRpdCBQcm9maWxlPC9CdXR0b24+IFxuICAgICAgICAgIDogXG4gICAgICAgICAgPEVkaXRQcm9maWxlIG9wZW49e29wZW59IHNldE9wZW49e3NldE9wZW59Lz5cbiAgICAgICAgICB9IFxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e2RlbGV0ZVByb2ZpbGV9PkRlbGV0ZSBQcm9maWxlPC9CdXR0b24+XG4gICAgICA8L0J1dHRvbkdyb3VwPlxuICAgIDwvQm94PlxuICApXG59XG5cbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJCb3giLCJCdXR0b25Hcm91cCIsIkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJHbG9iYWxTdGF0ZSIsInVzZVJvdXRlciIsIkVkaXRQcm9maWxlIiwiVXNlclBhZ2UiLCJvcGVuIiwic2V0T3BlbiIsImdsb2JhbFN0YXRlIiwicm91dGVyIiwiaGFuZGxlQ2xpY2tPcGVuIiwiZGVsZXRlUHJvZmlsZSIsImZldGNoIiwic3RhdGUiLCJ1c2VyIiwiaWQiLCJtZXRob2QiLCJ0aGVuIiwiZGF0YSIsImRpc3BhdGNoIiwidHlwZSIsInBheWxvYWQiLCJwdXNoIiwic3giLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm10IiwidmFyaWFudCIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJ1c2VybmFtZSIsIm1iIiwiZW1haWwiLCJhcmlhLWxhYmVsIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/profile.jsx\n"));

/***/ })

});