"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./pages/signup.jsx":
/*!**************************!*\
  !*** ./pages/signup.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CardActions */ \"./node_modules/@mui/material/CardActions/index.js\");\n/* harmony import */ var _mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/ButtonGroup */ \"./node_modules/@mui/material/ButtonGroup/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction SignUp() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        first_name: \"\",\n        last_name: \"\",\n        email: \"\",\n        username: \"\",\n        password: \"\"\n    });\n    const globalState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.GlobalState);\n    function handleChange(e) {\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    }\n    function handleSignUp(e) {\n        e.preventDefault();\n        const newUser = {\n            first_name: formData.first_name,\n            last_name: formData.last_name,\n            email: formData.email,\n            username: formData.username,\n            password: formData.password\n        };\n        fetch(\"/api/signup\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(newUser)\n        }).then((r)=>r.json()).then((data)=>globalState.dispatch({\n                type: \"SIGNUP\",\n                payload: data\n            })).then(()=>router.push(\"/\"));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        sx: {\n            margin: \"3rem auto\",\n            maxWidth: \"700px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            component: \"form\",\n            sx: {\n                \"& .MuiTextField-root\": {\n                    m: 1,\n                    width: \"25ch\"\n                }\n            },\n            noValidate: true,\n            autoComplete: \"off\",\n            onSubmit: handleSignUp,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                sx: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        variant: \"div\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                required: true,\n                                id: \"standard-required-first-name\",\n                                label: \"First Name\",\n                                variant: \"standard\",\n                                name: \"first_name\",\n                                size: \"small\",\n                                value: formData.first_name,\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/signup.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                required: true,\n                                id: \"standard-required-last-name\",\n                                label: \"Last Name\",\n                                variant: \"standard\",\n                                name: \"last_name\",\n                                size: \"small\",\n                                value: formData.last_name,\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/signup.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/signup.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        variant: \"div\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                required: true,\n                                id: \"standard-required-username\",\n                                label: \"Username\",\n                                variant: \"standard\",\n                                name: \"username\",\n                                value: formData.username,\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/signup.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                required: true,\n                                id: \"standard-password-input\",\n                                label: \"Password\",\n                                type: \"password\",\n                                autoComplete: \"current-password\",\n                                variant: \"standard\",\n                                name: \"password\",\n                                value: formData.password,\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/signup.jsx\",\n                                lineNumber: 105,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/signup.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            variant: \"outlined\",\n                            \"aria-label\": \"outlined button group\",\n                            sx: {\n                                display: \"block\",\n                                margin: \"0 auto\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    variant: \"outlined\",\n                                    type: \"submit\",\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/signup.jsx\",\n                                    lineNumber: 126,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    variant: \"outlined\",\n                                    onClick: ()=>router.push(\"/login\"),\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/signup.jsx\",\n                                    lineNumber: 127,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/signup.jsx\",\n                            lineNumber: 118,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/signup.jsx\",\n                        lineNumber: 117,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/signup.jsx\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/signup.jsx\",\n            lineNumber: 57,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/pages/signup.jsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(SignUp, \"U8VbCJvfoXr6AjgYHFu6VWOc0B0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SignUp;\nvar _c;\n$RefreshReg$(_c, \"SignUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTs0QkFDUjs7OENBRUEsOERBQUNwQyw2REFBTUE7b0NBQUNnRCxTQUFRO29DQUFXaEIsTUFBSzs4Q0FBUzs7Ozs7OzhDQUN6Qyw4REFBQ2hDLDZEQUFNQTtvQ0FBQ2dELFNBQVE7b0NBQVdPLFNBQVMsSUFBTW5ELE9BQU84QixLQUFLOzhDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPMUY7R0F6SHdCL0I7O1FBQ0xELGtEQUFTQTs7O0tBREpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ251cC5qc3g/ZTQ5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcbmltcG9ydCBDYXJkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZCc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudCc7XG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkQWN0aW9ucyc7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b25Hcm91cCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCB7IEdsb2JhbFN0YXRlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25VcCgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID11c2VTdGF0ZSh7XG4gICAgICAgIGZpcnN0X25hbWU6IFwiXCIsXG4gICAgICAgIGxhc3RfbmFtZTogXCJcIixcbiAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgICAgICBwYXNzd29yZDogXCJcIlxuICAgIH0pXG5cbiAgICBjb25zdCBnbG9iYWxTdGF0ZSA9IHVzZUNvbnRleHQoR2xvYmFsU3RhdGUpXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9IFxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU2lnblVwKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgbmV3VXNlciA9IHtcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IGZvcm1EYXRhLmZpcnN0X25hbWUsXG4gICAgICAgICAgICBsYXN0X25hbWU6IGZvcm1EYXRhLmxhc3RfbmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiBmb3JtRGF0YS5lbWFpbCxcbiAgICAgICAgICAgIHVzZXJuYW1lOiBmb3JtRGF0YS51c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5wYXNzd29yZFxuICAgICAgICB9XG4gICAgICAgIGZldGNoKCcvYXBpL3NpZ251cCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3VXNlcilcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHIpID0+IHIuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IGdsb2JhbFN0YXRlLmRpc3BhdGNoKHsgdHlwZTogJ1NJR05VUCcsIHBheWxvYWQ6IGRhdGEgfSkpXG4gICAgICAgIC50aGVuKCgpID0+IHJvdXRlci5wdXNoKCcvJykpXG4gICAgfVxuXG4gIHJldHVybiAoXG4gICAgPENhcmQgc3g9e3tcbiAgICAgICAgbWFyZ2luOiAnM3JlbSBhdXRvJyxcbiAgICAgICAgbWF4V2lkdGg6ICc3MDBweCcsXG4gICAgICB9fT5cbiAgICAgICAgPEJveFxuICAgICAgICBjb21wb25lbnQ9XCJmb3JtXCJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgJyYgLk11aVRleHRGaWVsZC1yb290JzogeyBtOiAxLCB3aWR0aDogJzI1Y2gnIH0sXG4gICAgICAgIH19XG4gICAgICAgIG5vVmFsaWRhdGVcbiAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVNpZ25VcH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPENhcmRDb250ZW50IHN4PXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPEJveCB2YXJpYW50PSdkaXYnPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1yZXF1aXJlZC1maXJzdC1uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZmlyc3RfbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmZpcnN0X25hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXJlcXVpcmVkLWxhc3QtbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nbGFzdF9uYW1lJ1xuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubGFzdF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3ggdmFyaWFudD0nZGl2Jz5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtcmVxdWlyZWQtdXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0ndXNlcm5hbWUnXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtcGFzc3dvcmQtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPENhcmRBY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvdXRsaW5lZCBidXR0b24gZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiB0eXBlPSdzdWJtaXQnPlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2xvZ2luJyl9ID5Mb2dpbjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0JveD5cbiAgICA8L0NhcmQ+XG4gIClcbn1cblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIkJveCIsIlRleHRGaWVsZCIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRBY3Rpb25zIiwiQnV0dG9uR3JvdXAiLCJCdXR0b24iLCJHbG9iYWxTdGF0ZSIsInVzZVJvdXRlciIsIlNpZ25VcCIsInJvdXRlciIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZ2xvYmFsU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU2lnblVwIiwicHJldmVudERlZmF1bHQiLCJuZXdVc2VyIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwiciIsImpzb24iLCJkYXRhIiwiZGlzcGF0Y2giLCJ0eXBlIiwicGF5bG9hZCIsInB1c2giLCJzeCIsIm1hcmdpbiIsIm1heFdpZHRoIiwiY29tcG9uZW50IiwibSIsIndpZHRoIiwibm9WYWxpZGF0ZSIsImF1dG9Db21wbGV0ZSIsIm9uU3VibWl0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ2YXJpYW50IiwicmVxdWlyZWQiLCJpZCIsImxhYmVsIiwic2l6ZSIsIm9uQ2hhbmdlIiwiYXJpYS1sYWJlbCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/signup.jsx\n"));

/***/ })

});