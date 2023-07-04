"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tasks",{

/***/ "./components/Edit.jsx":
/*!*****************************!*\
  !*** ./components/Edit.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Edit; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Dialog */ \"./node_modules/@mui/material/Dialog/index.js\");\n/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/DialogActions */ \"./node_modules/@mui/material/DialogActions/index.js\");\n/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/DialogContent */ \"./node_modules/@mui/material/DialogContent/index.js\");\n/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/DialogTitle */ \"./node_modules/@mui/material/DialogTitle/index.js\");\n/* harmony import */ var _mui_material_Slide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Slide */ \"./node_modules/@mui/material/Slide/index.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var _mui_x_date_pickers_DateTimeField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/x-date-pickers/DateTimeField */ \"./node_modules/@mui/x-date-pickers/DateTimeField/index.js\");\n/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Alert */ \"./node_modules/@mui/material/Alert/index.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst Transition = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(_c = function Transition(props, ref) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Slide__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        direction: \"up\",\n        ref: ref,\n        ...props\n    }, void 0, false, {\n        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Edit.jsx\",\n        lineNumber: 17,\n        columnNumber: 10\n    }, this);\n});\n_c1 = Transition;\nfunction Edit(param) {\n    let { openEdit , setOpenEdit , type , taskData , setTaskData , appointmentData , setAppointmentData , financeData , setFinanceData , currentId , refetch  } = param;\n    _s();\n    const globalState = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.GlobalState);\n    const [formData, setFormData] = react__WEBPACK_IMPORTED_MODULE_1__.useState({\n        name: \"\",\n        due_by: null\n    });\n    const handleClose = ()=>{\n        setOpenEdit(!openEdit);\n        setFormData({\n            name: \"\",\n            due_by: null\n        });\n    };\n    function handleChange(e) {\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    }\n    function handleDateChange(e) {\n        setFormData({\n            ...formData,\n            due_by: e\n        });\n    }\n    function handleEdit(e) {\n        handleClose();\n        e.preventDefault();\n        if (formData.name != \"\" && formData.due_by != null) {\n            if (type == \"tasks\") {\n                console.log(type, formData);\n                const newObj = {\n                    name: formData.name,\n                    due_by: moment__WEBPACK_IMPORTED_MODULE_2___default()(formData.due_by).format(\"YYYY-MM-DD HH:mm\")\n                };\n                fetch(\"/api/tasks/\".concat(currentId), {\n                    method: \"PATCH\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify(newObj)\n                }).then((r)=>{\n                    if (r.ok) {\n                        globalState.dispatch({\n                            type: \"OPEN-SNACKBAR\",\n                            payload: {\n                                message: \"Hello, there!\",\n                                alertState: \"success\"\n                            }\n                        }).then(globalState.dispatch({\n                            type: \"CLOSE-SNACKBAR\"\n                        }));\n                        return r.json();\n                    } else {\n                        globalState.dispatch({\n                            type: \"OPEN-SNACKBAR\",\n                            payload: {\n                                message: \"Hello, there!\",\n                                alertState: \"success\"\n                            }\n                        });\n                    }\n                }).then(()=>refetch());\n            } else if (type == \"finances\") {\n                console.log(type, formData);\n                const newObj = {\n                    name: formData.name,\n                    due_by: moment__WEBPACK_IMPORTED_MODULE_2___default()(formData.due_by).format(\"YYYY-MM-DD HH:mm\")\n                };\n                fetch(\"/api/finances/\".concat(currentId), {\n                    method: \"PATCH\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify(newObj)\n                }).then((r)=>{\n                    if (r.ok) {\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            severity: \"success\",\n                            children: \"Update finance successful.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Edit.jsx\",\n                            lineNumber: 103,\n                            columnNumber: 17\n                        }, this);\n                        return r.json();\n                    } else {\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            severity: \"error\",\n                            children: \"Failed to update finance.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Edit.jsx\",\n                            lineNumber: 107,\n                            columnNumber: 17\n                        }, this);\n                    }\n                }).then(()=>refetch());\n            } else if (type == \"appointments\") {\n                console.log(type, formData);\n                const newObj = {\n                    name: formData.name,\n                    due_by: moment__WEBPACK_IMPORTED_MODULE_2___default()(formData.due_by).format(\"YYYY-MM-DD HH:mm\")\n                };\n                fetch(\"/api/appointments/\".concat(currentId), {\n                    method: \"PATCH\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify(newObj)\n                }).then((r)=>{\n                    if (r.ok) {\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            severity: \"success\",\n                            children: \"Update appointment successful.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Edit.jsx\",\n                            lineNumber: 124,\n                            columnNumber: 17\n                        }, this);\n                        return r.json();\n                    } else {\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            severity: \"error\",\n                            children: \"Failed to update appointment.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Edit.jsx\",\n                            lineNumber: 128,\n                            columnNumber: 17\n                        }, this);\n                    }\n                }).then(()=>refetch());\n            }\n        } else if (!formData.name) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                severity: \"error\",\n                children: \"Please enter a name.\"\n            }, void 0, false, {\n                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Edit.jsx\",\n                lineNumber: 134,\n                columnNumber: 16\n            }, this);\n        } else if (!formData.due_by) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                severity: \"error\",\n                children: \"Enter a date in the format YYYY/MM/DD HH:MM AM/PM.\"\n            }, void 0, false, {\n                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Edit.jsx\",\n                lineNumber: 136,\n                columnNumber: 16\n            }, this);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        open: openEdit,\n        TransitionComponent: Transition,\n        keepMounted: true,\n        onClose: handleClose,\n        \"aria-describedby\": \"alert-dialog-slide-description\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                children: \"Edit\"\n            }, void 0, false, {\n                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Edit.jsx\",\n                lineNumber: 148,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        required: true,\n                        autoFocus: true,\n                        margin: \"dense\",\n                        id: \"name\",\n                        label: \"Name\",\n                        name: \"name\",\n                        fullWidth: true,\n                        variant: \"standard\",\n                        value: formData.name,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Edit.jsx\",\n                        lineNumber: 150,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers_DateTimeField__WEBPACK_IMPORTED_MODULE_10__.DateTimeField, {\n                        required: true,\n                        name: \"due_by\",\n                        format: \"YYYY/MM/DD hh:mm a\",\n                        value: formData.due_by,\n                        onChange: handleDateChange\n                    }, void 0, false, {\n                        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Edit.jsx\",\n                        lineNumber: 162,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Edit.jsx\",\n                lineNumber: 149,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                    onClick: handleEdit,\n                    children: \"Save\"\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Edit.jsx\",\n                    lineNumber: 171,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Edit.jsx\",\n                lineNumber: 170,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Edit.jsx\",\n        lineNumber: 141,\n        columnNumber: 7\n    }, this);\n}\n_s(Edit, \"U08m27shtMM/gMLyf8D3BdKupM4=\");\n_c2 = Edit;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Transition$React.forwardRef\");\n$RefreshReg$(_c1, \"Transition\");\n$RefreshReg$(_c2, \"Edit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDViw4REFBQ0csK0RBQVNBO3dCQUNONkQsUUFBUTt3QkFDUkMsU0FBUzt3QkFDVEMsUUFBTzt3QkFDUEMsSUFBRzt3QkFDSEMsT0FBTTt3QkFDTnRDLE1BQUs7d0JBQ0x1QyxTQUFTO3dCQUNUQyxTQUFRO3dCQUNSbEMsT0FBT1QsU0FBU0c7d0JBQ2hCeUMsVUFBVXRDOzs7Ozs7a0NBRWQsOERBQUM3Qiw2RUFBYUE7d0JBQ1Y0RCxRQUFRO3dCQUNSbEMsTUFBSzt3QkFDTGEsUUFBTzt3QkFDUFAsT0FBT1QsU0FBU0k7d0JBQ2hCd0MsVUFBVWxDOzs7Ozs7Ozs7Ozs7MEJBR2xCLDhEQUFDdEMsb0VBQWFBOzBCQUNaLDRFQUFDRiw2REFBTUE7b0JBQUMyRSxTQUFTbEM7OEJBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXZDO0dBM0p3QnpCO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRWRpdC5qc3g/ZjFkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG11aS9tYXRlcmlhbC9EaWFsb2cnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG11aS9tYXRlcmlhbC9EaWFsb2dBY3Rpb25zJztcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG11aS9tYXRlcmlhbC9EaWFsb2dUaXRsZSc7XG5pbXBvcnQgU2xpZGUgZnJvbSAnQG11aS9tYXRlcmlhbC9TbGlkZSc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcbmltcG9ydCB7IERhdGVUaW1lRmllbGQgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0RhdGVUaW1lRmllbGQnO1xuaW1wb3J0IEFsZXJ0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWxlcnQnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgR2xvYmFsU3RhdGUgfSBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5cblxuXG5jb25zdCBUcmFuc2l0aW9uID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUcmFuc2l0aW9uKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIDxTbGlkZSBkaXJlY3Rpb249XCJ1cFwiIHJlZj17cmVmfSB7Li4ucHJvcHN9IC8+O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXQoe1xuICAgIG9wZW5FZGl0LCBcbiAgICBzZXRPcGVuRWRpdCwgXG4gICAgdHlwZSwgXG4gICAgdGFza0RhdGEsIFxuICAgIHNldFRhc2tEYXRhLCBcbiAgICBhcHBvaW50bWVudERhdGEsIFxuICAgIHNldEFwcG9pbnRtZW50RGF0YSwgXG4gICAgZmluYW5jZURhdGEsIFxuICAgIHNldEZpbmFuY2VEYXRhLFxuICAgIGN1cnJlbnRJZCxcbiAgICByZWZldGNoXG4gIH0pIHtcblxuICAgIGNvbnN0IGdsb2JhbFN0YXRlID0gUmVhY3QudXNlQ29udGV4dChHbG9iYWxTdGF0ZSlcblxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICBkdWVfYnk6IG51bGwsXG4gICAgfSlcblxuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldE9wZW5FZGl0KCFvcGVuRWRpdCk7XG4gICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICBkdWVfYnk6IG51bGwsXG4gICAgfSlcbiAgfTtcblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9IFxuXG4gIGZ1bmN0aW9uIGhhbmRsZURhdGVDaGFuZ2UoZSl7XG4gICAgICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgICAgICAgZHVlX2J5OiBlXG4gICAgICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVFZGl0KGUpe1xuICAgIGhhbmRsZUNsb3NlKClcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAoZm9ybURhdGEubmFtZSAhPSAnJyAmJiBmb3JtRGF0YS5kdWVfYnkgIT0gbnVsbCl7XG4gICAgICAgIGlmKHR5cGUgPT0gJ3Rhc2tzJyApe1xuICAgICAgICAgICAgY29uc29sZS5sb2codHlwZSwgZm9ybURhdGEpXG4gICAgICAgICAgICBjb25zdCBuZXdPYmogPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogZm9ybURhdGEubmFtZSxcbiAgICAgICAgICAgICAgICBkdWVfYnk6IG1vbWVudChmb3JtRGF0YS5kdWVfYnkpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmZXRjaChgL2FwaS90YXNrcy8ke2N1cnJlbnRJZH1gLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdPYmopXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHIub2spe1xuICAgICAgICAgICAgICAgIGdsb2JhbFN0YXRlLmRpc3BhdGNoKHsgdHlwZTogJ09QRU4tU05BQ0tCQVInLCBwYXlsb2FkOiB7bWVzc2FnZTogJ0hlbGxvLCB0aGVyZSEnLCBhbGVydFN0YXRlOiAnc3VjY2Vzcyd9IH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZ2xvYmFsU3RhdGUuZGlzcGF0Y2goeyB0eXBlOiAnQ0xPU0UtU05BQ0tCQVInIH0pKVxuICAgICAgICAgICAgICAgIHJldHVybiByLmpzb24oKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgZ2xvYmFsU3RhdGUuZGlzcGF0Y2goeyB0eXBlOiAnT1BFTi1TTkFDS0JBUicsIHBheWxvYWQ6IHttZXNzYWdlOiAnSGVsbG8sIHRoZXJlIScsIGFsZXJ0U3RhdGU6ICdzdWNjZXNzJ30gfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHJlZmV0Y2goKSlcbiAgICAgICAgfWVsc2UgaWYodHlwZSA9PSAnZmluYW5jZXMnKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGUsIGZvcm1EYXRhKVxuICAgICAgICAgICAgY29uc3QgbmV3T2JqID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IGZvcm1EYXRhLm5hbWUsXG4gICAgICAgICAgICAgICAgZHVlX2J5OiBtb21lbnQoZm9ybURhdGEuZHVlX2J5KS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW0nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmV0Y2goYC9hcGkvZmluYW5jZXMvJHtjdXJyZW50SWR9YCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3T2JqKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyLm9rKXtcbiAgICAgICAgICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJzdWNjZXNzXCI+VXBkYXRlIGZpbmFuY2Ugc3VjY2Vzc2Z1bC48L0FsZXJ0PlxuICAgICAgICAgICAgICAgIHJldHVybiByLmpzb24oKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwiZXJyb3JcIj5GYWlsZWQgdG8gdXBkYXRlIGZpbmFuY2UuPC9BbGVydD5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHJlZmV0Y2goKSlcbiAgICAgICAgfWVsc2UgaWYodHlwZSA9PSAnYXBwb2ludG1lbnRzJyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlLCBmb3JtRGF0YSlcbiAgICAgICAgICAgIGNvbnN0IG5ld09iaiA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBmb3JtRGF0YS5uYW1lLFxuICAgICAgICAgICAgICAgIGR1ZV9ieTogbW9tZW50KGZvcm1EYXRhLmR1ZV9ieSkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZldGNoKGAvYXBpL2FwcG9pbnRtZW50cy8ke2N1cnJlbnRJZH1gLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdPYmopXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHIub2spe1xuICAgICAgICAgICAgICAgIDxBbGVydCBzZXZlcml0eT1cInN1Y2Nlc3NcIj5VcGRhdGUgYXBwb2ludG1lbnQgc3VjY2Vzc2Z1bC48L0FsZXJ0PlxuICAgICAgICAgICAgICAgIHJldHVybiByLmpzb24oKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwiZXJyb3JcIj5GYWlsZWQgdG8gdXBkYXRlIGFwcG9pbnRtZW50LjwvQWxlcnQ+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiByZWZldGNoKCkpXG4gICAgICAgIH1cbiAgICB9ZWxzZSBpZighZm9ybURhdGEubmFtZSl7XG4gICAgICAgIHJldHVybiA8QWxlcnQgc2V2ZXJpdHk9XCJlcnJvclwiPlBsZWFzZSBlbnRlciBhIG5hbWUuPC9BbGVydD5cbiAgICB9ZWxzZSBpZighZm9ybURhdGEuZHVlX2J5KXtcbiAgICAgICAgcmV0dXJuIDxBbGVydCBzZXZlcml0eT1cImVycm9yXCI+RW50ZXIgYSBkYXRlIGluIHRoZSBmb3JtYXQgWVlZWS9NTS9ERCBISDpNTSBBTS9QTS48L0FsZXJ0PlxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgICA8RGlhbG9nXG4gICAgICAgIG9wZW49e29wZW5FZGl0fVxuICAgICAgICBUcmFuc2l0aW9uQ29tcG9uZW50PXtUcmFuc2l0aW9ufVxuICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImFsZXJ0LWRpYWxvZy1zbGlkZS1kZXNjcmlwdGlvblwiXG4gICAgICA+XG4gICAgICAgIDxEaWFsb2dUaXRsZT5FZGl0PC9EaWFsb2dUaXRsZT5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgICAgIG5hbWU9J25hbWUnXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxEYXRlVGltZUZpZWxkXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQgXG4gICAgICAgICAgICAgICAgbmFtZT0nZHVlX2J5J1xuICAgICAgICAgICAgICAgIGZvcm1hdD0nWVlZWS9NTS9ERCBoaDptbSBhJ1xuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5kdWVfYnl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlRWRpdH0+U2F2ZTwvQnV0dG9uPlxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICA8L0RpYWxvZz5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJEaWFsb2ciLCJEaWFsb2dBY3Rpb25zIiwiRGlhbG9nQ29udGVudCIsIkRpYWxvZ1RpdGxlIiwiU2xpZGUiLCJUZXh0RmllbGQiLCJEYXRlVGltZUZpZWxkIiwiQWxlcnQiLCJtb21lbnQiLCJHbG9iYWxTdGF0ZSIsIlRyYW5zaXRpb24iLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJkaXJlY3Rpb24iLCJFZGl0Iiwib3BlbkVkaXQiLCJzZXRPcGVuRWRpdCIsInR5cGUiLCJ0YXNrRGF0YSIsInNldFRhc2tEYXRhIiwiYXBwb2ludG1lbnREYXRhIiwic2V0QXBwb2ludG1lbnREYXRhIiwiZmluYW5jZURhdGEiLCJzZXRGaW5hbmNlRGF0YSIsImN1cnJlbnRJZCIsInJlZmV0Y2giLCJnbG9iYWxTdGF0ZSIsInVzZUNvbnRleHQiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlU3RhdGUiLCJuYW1lIiwiZHVlX2J5IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVEYXRlQ2hhbmdlIiwiaGFuZGxlRWRpdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIm5ld09iaiIsImZvcm1hdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInIiLCJvayIsImRpc3BhdGNoIiwicGF5bG9hZCIsIm1lc3NhZ2UiLCJhbGVydFN0YXRlIiwianNvbiIsInNldmVyaXR5Iiwib3BlbiIsIlRyYW5zaXRpb25Db21wb25lbnQiLCJrZWVwTW91bnRlZCIsIm9uQ2xvc2UiLCJhcmlhLWRlc2NyaWJlZGJ5IiwicmVxdWlyZWQiLCJhdXRvRm9jdXMiLCJtYXJnaW4iLCJpZCIsImxhYmVsIiwiZnVsbFdpZHRoIiwidmFyaWFudCIsIm9uQ2hhbmdlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Edit.jsx\n"));

/***/ })

});