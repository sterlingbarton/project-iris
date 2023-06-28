"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/finances",{

/***/ "./components/Add.jsx":
/*!****************************!*\
  !*** ./components/Add.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Add; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Dialog */ \"./node_modules/@mui/material/Dialog/index.js\");\n/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/DialogActions */ \"./node_modules/@mui/material/DialogActions/index.js\");\n/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/DialogContent */ \"./node_modules/@mui/material/DialogContent/index.js\");\n/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/DialogTitle */ \"./node_modules/@mui/material/DialogTitle/index.js\");\n/* harmony import */ var _mui_material_Slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Slide */ \"./node_modules/@mui/material/Slide/index.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var _mui_x_date_pickers_DateTimeField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/x-date-pickers/DateTimeField */ \"./node_modules/@mui/x-date-pickers/DateTimeField/index.js\");\n/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Alert */ \"./node_modules/@mui/material/Alert/index.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst Transition = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(_c = function Transition(props, ref) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Slide__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        direction: \"up\",\n        ref: ref,\n        ...props\n    }, void 0, false, {\n        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n        lineNumber: 16,\n        columnNumber: 10\n    }, this);\n});\n_c1 = Transition;\nfunction Add(param) {\n    let { open , setOpen , type , taskData , setTaskData , appointmentData , setAppointmentData , financeData , setFinanceData  } = param;\n    _s();\n    const [formData, setFormData] = react__WEBPACK_IMPORTED_MODULE_1__.useState({\n        name: \"\",\n        due_by: null\n    });\n    function handleChange(e) {\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    }\n    const handleClose = ()=>{\n        setOpen(!open);\n        setFormData({\n            name: \"\",\n            due_by: null\n        });\n    };\n    function handleDateChange(e) {\n        setFormData({\n            ...formData,\n            due_by: e\n        });\n    }\n    function handleAdd(e) {\n        handleClose();\n        e.preventDefault();\n        if (formData.name != \"\" && formData.due_by != null) {\n            if (type == \"tasks\") {\n                const newObj = {\n                    name: formData.name,\n                    due_by: moment__WEBPACK_IMPORTED_MODULE_2___default()(formData.due_by).format(\"YYYY-MM-DD HH:mm\")\n                };\n                fetch(\"/api/tasks\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify(newObj)\n                }).then((r)=>{\n                    if (r.ok) {\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            severity: \"success\",\n                            children: \"Add task successful\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, this);\n                        return r.json();\n                    } else {\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            severity: \"error\",\n                            children: \"Failed to ask task.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 17\n                        }, this);\n                    }\n                }).then((data)=>setTaskData([\n                        ...taskData,\n                        data\n                    ]));\n            } else if (type == \"finances\") {\n                const newObj = {\n                    name: formData.name,\n                    due_by: moment__WEBPACK_IMPORTED_MODULE_2___default()(formData.due_by).format(\"YYYY-MM-DD HH:mm\")\n                };\n                fetch(\"/api/finances\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify(newObj)\n                }).then((r)=>{\n                    if (r.ok) {\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            severity: \"success\",\n                            children: \"Add finance successful\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 17\n                        }, this);\n                        return r.json();\n                    } else {\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            severity: \"error\",\n                            children: \"Failed to ask finance.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 17\n                        }, this);\n                    }\n                }).then((data)=>setFinanceData([\n                        ...financeData,\n                        data\n                    ]));\n            } else if (type == \"appointments\") {\n                const newObj = {\n                    name: formData.name,\n                    due_by: moment__WEBPACK_IMPORTED_MODULE_2___default()(formData.due_by).format(\"YYYY-MM-DD HH:mm\")\n                };\n                fetch(\"/api/appointments\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify(newObj)\n                }).then((r)=>{\n                    if (r.ok) {\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            severity: \"success\",\n                            children: \"Add appointment successful\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                            lineNumber: 114,\n                            columnNumber: 17\n                        }, this);\n                        return r.json();\n                    } else {\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            severity: \"error\",\n                            children: \"Failed to add appointment.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                            lineNumber: 118,\n                            columnNumber: 17\n                        }, this);\n                    }\n                }).then((data)=>setAppointmentData([\n                        ...appointmentData,\n                        data\n                    ]));\n            }\n        } else if (!formData.name) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                severity: \"error\",\n                children: \"Please enter a name.\"\n            }, void 0, false, {\n                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                lineNumber: 124,\n                columnNumber: 16\n            }, this);\n        } else if (!formData.due_by) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                severity: \"error\",\n                children: \"Enter a date in the format YYYY/MM/DD HH:MM AM/PM\"\n            }, void 0, false, {\n                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                lineNumber: 126,\n                columnNumber: 16\n            }, this);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        open: open,\n        TransitionComponent: Transition,\n        keepMounted: true,\n        onClose: handleClose,\n        \"aria-describedby\": \"alert-dialog-slide-description\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                lineNumber: 138,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        required: true,\n                        autoFocus: true,\n                        margin: \"dense\",\n                        id: \"name\",\n                        label: \"Name\",\n                        name: \"name\",\n                        fullWidth: true,\n                        variant: \"standard\",\n                        value: formData.name,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                        lineNumber: 140,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers_DateTimeField__WEBPACK_IMPORTED_MODULE_9__.DateTimeField, {\n                        required: true,\n                        name: \"due_by\",\n                        format: \"YYYY/MM/DD hh:mm a\",\n                        value: formData.due_by,\n                        onChange: handleDateChange\n                    }, void 0, false, {\n                        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                        lineNumber: 152,\n                        columnNumber: 12\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                lineNumber: 139,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    onClick: handleAdd,\n                    children: \"Add\"\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                    lineNumber: 161,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                lineNumber: 160,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n        lineNumber: 131,\n        columnNumber: 7\n    }, this);\n}\n_s(Add, \"eB6Fy2dxlGXUwSN22BT4HJb8JtI=\");\n_c2 = Add;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Transition$React.forwardRef\");\n$RefreshReg$(_c1, \"Transition\");\n$RefreshReg$(_c2, \"Add\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Szt3QkFDTHJCLFFBQU87d0JBQ1AwQixPQUFPUixTQUFTSTt3QkFDaEJpQyxVQUFVM0I7Ozs7Ozs7Ozs7OzswQkFHYiw4REFBQ25DLG9FQUFhQTswQkFDWiw0RUFBQ0YsNkRBQU1BO29CQUFDaUUsU0FBUzNCOzhCQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl0QztHQWxKd0JyQjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FkZC5qc3g/ZjY5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG11aS9tYXRlcmlhbC9EaWFsb2cnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG11aS9tYXRlcmlhbC9EaWFsb2dBY3Rpb25zJztcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG11aS9tYXRlcmlhbC9EaWFsb2dUaXRsZSc7XG5pbXBvcnQgU2xpZGUgZnJvbSAnQG11aS9tYXRlcmlhbC9TbGlkZSc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcbmltcG9ydCB7IERhdGVUaW1lRmllbGQgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0RhdGVUaW1lRmllbGQnO1xuaW1wb3J0IEFsZXJ0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWxlcnQnO1xuaW1wb3J0IHsgZm9ybWF0LCBpc0FmdGVyIH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cblxuY29uc3QgVHJhbnNpdGlvbiA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVHJhbnNpdGlvbihwcm9wcywgcmVmKSB7XG4gIHJldHVybiA8U2xpZGUgZGlyZWN0aW9uPVwidXBcIiByZWY9e3JlZn0gey4uLnByb3BzfSAvPjtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGQoe1xuICAgIG9wZW4sIFxuICAgIHNldE9wZW4sIFxuICAgIHR5cGUsXG4gICAgdGFza0RhdGEsIFxuICAgIHNldFRhc2tEYXRhLCBcbiAgICBhcHBvaW50bWVudERhdGEsIFxuICAgIHNldEFwcG9pbnRtZW50RGF0YSwgXG4gICAgZmluYW5jZURhdGEsIFxuICAgIHNldEZpbmFuY2VEYXRhXG4gIH0pIHtcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgZHVlX2J5OiBudWxsLFxuICAgIH0pXG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfSBcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRPcGVuKCFvcGVuKTtcbiAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIGR1ZV9ieTogbnVsbCxcbiAgICB9KVxuICB9O1xuXG4gIGZ1bmN0aW9uIGhhbmRsZURhdGVDaGFuZ2UoZSl7XG4gICAgICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgICAgICAgZHVlX2J5OiBlXG4gICAgICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVBZGQoZSl7XG4gICAgaGFuZGxlQ2xvc2UoKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmIChmb3JtRGF0YS5uYW1lICE9ICcnICYmIGZvcm1EYXRhLmR1ZV9ieSAhPSBudWxsKXtcbiAgICAgICAgaWYgKHR5cGUgPT0gJ3Rhc2tzJyl7XG4gICAgICAgICAgICBjb25zdCBuZXdPYmogPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogZm9ybURhdGEubmFtZSxcbiAgICAgICAgICAgICAgICBkdWVfYnk6IG1vbWVudChmb3JtRGF0YS5kdWVfYnkpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmZXRjaChgL2FwaS90YXNrc2AsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3T2JqKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHIub2spe1xuICAgICAgICAgICAgICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJzdWNjZXNzXCI+QWRkIHRhc2sgc3VjY2Vzc2Z1bDwvQWxlcnQ+XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByLmpzb24oKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwiZXJyb3JcIj5GYWlsZWQgdG8gYXNrIHRhc2suPC9BbGVydD5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gc2V0VGFza0RhdGEoWy4uLnRhc2tEYXRhLCBkYXRhXSkpXG4gICAgICAgIH1lbHNlIGlmKHR5cGUgPT0gJ2ZpbmFuY2VzJyl7XG4gICAgICAgICAgICBjb25zdCBuZXdPYmogPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogZm9ybURhdGEubmFtZSxcbiAgICAgICAgICAgICAgICBkdWVfYnk6IG1vbWVudChmb3JtRGF0YS5kdWVfYnkpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmZXRjaChgL2FwaS9maW5hbmNlc2AsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3T2JqKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyLm9rKXtcbiAgICAgICAgICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJzdWNjZXNzXCI+QWRkIGZpbmFuY2Ugc3VjY2Vzc2Z1bDwvQWxlcnQ+XG4gICAgICAgICAgICAgICAgcmV0dXJuIHIuanNvbigpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJlcnJvclwiPkZhaWxlZCB0byBhc2sgZmluYW5jZS48L0FsZXJ0PlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBzZXRGaW5hbmNlRGF0YShbLi4uZmluYW5jZURhdGEsIGRhdGFdKSlcblxuICAgICAgICB9ZWxzZSBpZih0eXBlID09ICdhcHBvaW50bWVudHMnKXtcbiAgICAgICAgICAgIGNvbnN0IG5ld09iaiA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBmb3JtRGF0YS5uYW1lLFxuICAgICAgICAgICAgICAgIGR1ZV9ieTogbW9tZW50KGZvcm1EYXRhLmR1ZV9ieSkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZldGNoKGAvYXBpL2FwcG9pbnRtZW50c2AsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3T2JqKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyLm9rKXtcbiAgICAgICAgICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJzdWNjZXNzXCI+QWRkIGFwcG9pbnRtZW50IHN1Y2Nlc3NmdWw8L0FsZXJ0PlxuICAgICAgICAgICAgICAgIHJldHVybiByLmpzb24oKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwiZXJyb3JcIj5GYWlsZWQgdG8gYWRkIGFwcG9pbnRtZW50LjwvQWxlcnQ+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHNldEFwcG9pbnRtZW50RGF0YShbLi4uYXBwb2ludG1lbnREYXRhLCBkYXRhXSkpXG4gICAgICAgIH1cbiAgICB9ZWxzZSBpZighZm9ybURhdGEubmFtZSl7XG4gICAgICAgIHJldHVybiA8QWxlcnQgc2V2ZXJpdHk9XCJlcnJvclwiPlBsZWFzZSBlbnRlciBhIG5hbWUuPC9BbGVydD5cbiAgICB9ZWxzZSBpZighZm9ybURhdGEuZHVlX2J5KXtcbiAgICAgICAgcmV0dXJuIDxBbGVydCBzZXZlcml0eT1cImVycm9yXCI+RW50ZXIgYSBkYXRlIGluIHRoZSBmb3JtYXQgWVlZWS9NTS9ERCBISDpNTSBBTS9QTTwvQWxlcnQ+XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICAgIDxEaWFsb2dcbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudD17VHJhbnNpdGlvbn1cbiAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJhbGVydC1kaWFsb2ctc2xpZGUtZGVzY3JpcHRpb25cIlxuICAgICAgPlxuICAgICAgICA8RGlhbG9nVGl0bGU+QWRkPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcbiAgICAgICAgICAgIG5hbWU9J25hbWUnXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICAgPERhdGVUaW1lRmllbGRcbiAgICAgICAgICAgcmVxdWlyZWQgXG4gICAgICAgICAgIG5hbWU9J2R1ZV9ieSdcbiAgICAgICAgICAgZm9ybWF0PSdZWVlZL01NL0REIGhoOm1tIGEnXG4gICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5kdWVfYnl9XG4gICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEYXRlQ2hhbmdlfVxuICAgICAgICAgICAvPlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQWRkfT5BZGQ8L0J1dHRvbj5cbiAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgICAgPC9EaWFsb2c+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiRGlhbG9nIiwiRGlhbG9nQWN0aW9ucyIsIkRpYWxvZ0NvbnRlbnQiLCJEaWFsb2dUaXRsZSIsIlNsaWRlIiwiVGV4dEZpZWxkIiwiRGF0ZVRpbWVGaWVsZCIsIkFsZXJ0IiwiZm9ybWF0IiwiaXNBZnRlciIsIm1vbWVudCIsIlRyYW5zaXRpb24iLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJkaXJlY3Rpb24iLCJBZGQiLCJvcGVuIiwic2V0T3BlbiIsInR5cGUiLCJ0YXNrRGF0YSIsInNldFRhc2tEYXRhIiwiYXBwb2ludG1lbnREYXRhIiwic2V0QXBwb2ludG1lbnREYXRhIiwiZmluYW5jZURhdGEiLCJzZXRGaW5hbmNlRGF0YSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJkdWVfYnkiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDbG9zZSIsImhhbmRsZURhdGVDaGFuZ2UiLCJoYW5kbGVBZGQiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld09iaiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInIiLCJvayIsInNldmVyaXR5IiwianNvbiIsImRhdGEiLCJUcmFuc2l0aW9uQ29tcG9uZW50Iiwia2VlcE1vdW50ZWQiLCJvbkNsb3NlIiwiYXJpYS1kZXNjcmliZWRieSIsInJlcXVpcmVkIiwiYXV0b0ZvY3VzIiwibWFyZ2luIiwiaWQiLCJsYWJlbCIsImZ1bGxXaWR0aCIsInZhcmlhbnQiLCJvbkNoYW5nZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Add.jsx\n"));

/***/ })

});