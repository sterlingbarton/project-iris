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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Add; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Dialog */ \"./node_modules/@mui/material/Dialog/index.js\");\n/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/DialogActions */ \"./node_modules/@mui/material/DialogActions/index.js\");\n/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/DialogContent */ \"./node_modules/@mui/material/DialogContent/index.js\");\n/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/DialogTitle */ \"./node_modules/@mui/material/DialogTitle/index.js\");\n/* harmony import */ var _mui_material_Slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Slide */ \"./node_modules/@mui/material/Slide/index.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var _mui_x_date_pickers_DateTimeField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/x-date-pickers/DateTimeField */ \"./node_modules/@mui/x-date-pickers/DateTimeField/index.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst Transition = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(_c = function Transition(props, ref) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Slide__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        direction: \"up\",\n        ref: ref,\n        ...props\n    }, void 0, false, {\n        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n        lineNumber: 16,\n        columnNumber: 10\n    }, this);\n});\n_c1 = Transition;\nfunction Add(param) {\n    let { open , setOpen , type , taskData , setTaskData , appointmentData , setAppointmentData , financeData , setFinanceData  } = param;\n    _s();\n    const [formData, setFormData] = react__WEBPACK_IMPORTED_MODULE_1__.useState({\n        name: \"\",\n        due_by: null\n    });\n    function handleChange(e) {\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    }\n    const handleClose = ()=>{\n        setOpen(!open);\n        setFormData({\n            name: \"\",\n            due_by: null\n        });\n    };\n    function handleDateChange(e) {\n        console.log(e);\n        setFormData({\n            ...formData,\n            due_by: e\n        });\n    }\n    function handleAdd(e) {\n        handleClose();\n        e.preventDefault();\n        if (formData.name != \"\" && formData.due_by != null) {\n            if (type == \"tasks\") {\n                console.log(type, formData);\n                const newObj = {\n                    name: formData.name,\n                    due_by: moment__WEBPACK_IMPORTED_MODULE_2___default()(formData.due_by).format(\"YYYY-MM-DD HH:mm\")\n                };\n            // fetch(`/api/tasks`, {\n            //     method: 'POST',\n            //     headers: {'Content-Type': 'application/json'},\n            //     body: JSON.stringify(formData)\n            // })\n            // .then((r) => {\n            //   if (r.ok){\n            //     r.json()\n            //   }\n            //   else{\n            //     console.log('Failed to add task')\n            //   }\n            // })\n            // .then(data => setTaskData(...taskData, data))\n            // .then(<Alert severity=\"success\">Add task successful</Alert>)\n            } else if (type == \"finances\") {\n                console.log(type, formData);\n                console.log(moment__WEBPACK_IMPORTED_MODULE_2___default()(formData.due_by).format(\"YYYY-MM-DD HH:mm\"));\n                const newObj = {\n                    name: formData.name,\n                    due_by: moment__WEBPACK_IMPORTED_MODULE_2___default()(formData.due_by).format(\"YYYY-MM-DD HH:mm\")\n                };\n                fetch(\"/api/finances\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify(newObj)\n                }).then((r)=>{\n                    if (r.ok) {\n                        r.json();\n                    } else {\n                        console.log(\"Failed to add finance\");\n                    }\n                }).then((data)=>console.log(data));\n            // .then(<Alert severity=\"success\">Add finance successful</Alert>)\n            } else if (type == \"appointments\") {\n                console.log(type, formData);\n                const newObj = {\n                    name: formData.name,\n                    due_by: moment__WEBPACK_IMPORTED_MODULE_2___default()(formData.due_by).format(\"YYYY-MM-DD HH:mm\")\n                };\n            // fetch(`/api/appointments`, {\n            //     method: 'POST',\n            //     headers: {'Content-Type': 'application/json'},\n            //     body: JSON.stringify(formData)\n            // })\n            // .then((r) => {\n            //   if (r.ok){\n            //     r.json()\n            //   }\n            //   else{\n            //     console.log('Failed to add appointment')\n            //   }\n            // })\n            // .then(data => setAppointmentData(...appointmentData, data))\n            // .then(<Alert severity=\"success\">Add appointment successful</Alert>)\n            }\n        } else {\n            console.log(\"empty field, figure out alert\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        open: open,\n        TransitionComponent: Transition,\n        keepMounted: true,\n        onClose: handleClose,\n        \"aria-describedby\": \"alert-dialog-slide-description\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                lineNumber: 142,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        autoFocus: true,\n                        margin: \"dense\",\n                        id: \"name\",\n                        label: \"Name\",\n                        name: \"name\",\n                        fullWidth: true,\n                        variant: \"standard\",\n                        value: formData.name,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                        lineNumber: 144,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers_DateTimeField__WEBPACK_IMPORTED_MODULE_8__.DateTimeField, {\n                        name: \"due_by\",\n                        format: \"YYYY/MM/DD hh:mm a\",\n                        value: formData.due_by,\n                        onChange: handleDateChange\n                    }, void 0, false, {\n                        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                        lineNumber: 155,\n                        columnNumber: 12\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                lineNumber: 143,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    onClick: handleAdd,\n                    children: \"Add\"\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                    lineNumber: 163,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                lineNumber: 162,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n        lineNumber: 135,\n        columnNumber: 7\n    }, this);\n}\n_s(Add, \"eB6Fy2dxlGXUwSN22BT4HJb8JtI=\");\n_c2 = Add;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Transition$React.forwardRef\");\n$RefreshReg$(_c1, \"Transition\");\n$RefreshReg$(_c2, \"Add\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDVztBQUNBO0FBQ2M7QUFDQTtBQUNKO0FBQ1o7QUFDUTtBQUNrQjtBQUMxQjtBQUNFO0FBQ2Q7QUFHNUIsTUFBTWEsMkJBQWFiLDZDQUFnQmMsTUFBQyxTQUFTRCxXQUFXRSxLQUFLLEVBQUVDLEdBQUc7SUFDaEUscUJBQU8sOERBQUNWLDJEQUFLQTtRQUFDVyxXQUFVO1FBQUtELEtBQUtBO1FBQU0sR0FBR0QsS0FBSzs7Ozs7O0FBQ2xEOztBQUVlLFNBQVNHLElBQUksS0FVekI7UUFWeUIsRUFDeEJDLEtBQUksRUFDSkMsUUFBTyxFQUNQQyxLQUFJLEVBQ0pDLFNBQVEsRUFDUkMsWUFBVyxFQUNYQyxnQkFBZSxFQUNmQyxtQkFBa0IsRUFDbEJDLFlBQVcsRUFDWEMsZUFBYyxFQUNmLEdBVnlCOztJQVd4QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBRzdCLDJDQUFjOEIsQ0FBQztRQUMzQ0MsTUFBTTtRQUNOQyxRQUFRO0lBQ1o7SUFFRixTQUFTQyxhQUFhQyxDQUFDO1FBQ3JCTCxZQUFZO1lBQ1IsR0FBR0QsUUFBUTtZQUNYLENBQUNNLEVBQUVDLE9BQU9KLEtBQUssRUFBRUcsRUFBRUMsT0FBT0M7UUFDOUI7SUFDRjtJQUVBLE1BQU1DLGNBQWM7UUFDbEJqQixRQUFRLENBQUNEO1FBQ1RVLFlBQVk7WUFDUkUsTUFBTTtZQUNOQyxRQUFRO1FBQ1o7SUFDRjtJQUVBLFNBQVNNLGlCQUFpQkosQ0FBQztRQUN6QkssUUFBUUMsSUFBSU47UUFDUkwsWUFBWTtZQUNSLEdBQUdELFFBQVE7WUFDWEksUUFBUUU7UUFDWjtJQUNOO0lBRUEsU0FBU08sVUFBVVAsQ0FBQztRQUNsQkc7UUFDQUgsRUFBRVE7UUFDRixJQUFJZCxTQUFTRyxRQUFRLE1BQU1ILFNBQVNJLFVBQVUsTUFBSztZQUMvQyxJQUFJWCxRQUFRLFNBQVE7Z0JBQ2hCa0IsUUFBUUMsSUFBSW5CLE1BQU1PO2dCQUNsQixNQUFNZSxTQUFTO29CQUNYWixNQUFNSCxTQUFTRztvQkFDZkMsUUFBUXBCLDZDQUFNQSxDQUFDZ0IsU0FBU0ksUUFBUXRCLE9BQU87Z0JBQzNDO1lBQ0Esd0JBQXdCO1lBQ3hCLHNCQUFzQjtZQUN0QixxREFBcUQ7WUFDckQscUNBQXFDO1lBQ3JDLEtBQUs7WUFDTCxpQkFBaUI7WUFDakIsZUFBZTtZQUNmLGVBQWU7WUFDZixNQUFNO1lBQ04sVUFBVTtZQUNWLHdDQUF3QztZQUN4QyxNQUFNO1lBQ04sS0FBSztZQUNMLGdEQUFnRDtZQUNoRCwrREFBK0Q7WUFDbkUsT0FBTSxJQUFHVyxRQUFRLFlBQVc7Z0JBQ3hCa0IsUUFBUUMsSUFBSW5CLE1BQU1PO2dCQUNsQlcsUUFBUUMsSUFBSTVCLDZDQUFNQSxDQUFDZ0IsU0FBU0ksUUFBUXRCLE9BQU87Z0JBQzNDLE1BQU1pQyxTQUFTO29CQUNYWixNQUFNSCxTQUFTRztvQkFDZkMsUUFBUXBCLDZDQUFNQSxDQUFDZ0IsU0FBU0ksUUFBUXRCLE9BQU87Z0JBQzNDO2dCQUNBa0MsTUFBTyxpQkFBZ0I7b0JBQ25CQyxRQUFRO29CQUNSQyxTQUFTO3dCQUFDLGdCQUFnQjtvQkFBa0I7b0JBQzVDQyxNQUFNQyxLQUFLQyxVQUFVTjtnQkFDekIsR0FDQ08sS0FBSyxDQUFDQztvQkFDTCxJQUFJQSxFQUFFQyxJQUFHO3dCQUNQRCxFQUFFRTtvQkFDSixPQUNJO3dCQUNGZCxRQUFRQyxJQUFJO29CQUNkO2dCQUNGLEdBQ0NVLEtBQUtJLENBQUFBLE9BQVFmLFFBQVFDLElBQUljO1lBQzlCLGtFQUFrRTtZQUVsRSxPQUFNLElBQUdqQyxRQUFRLGdCQUFlO2dCQUM1QmtCLFFBQVFDLElBQUluQixNQUFNTztnQkFDbEIsTUFBTWUsU0FBUztvQkFDWFosTUFBTUgsU0FBU0c7b0JBQ2ZDLFFBQVFwQiw2Q0FBTUEsQ0FBQ2dCLFNBQVNJLFFBQVF0QixPQUFPO2dCQUMzQztZQUNBLCtCQUErQjtZQUMvQixzQkFBc0I7WUFDdEIscURBQXFEO1lBQ3JELHFDQUFxQztZQUNyQyxLQUFLO1lBQ0wsaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixlQUFlO1lBQ2YsTUFBTTtZQUNOLFVBQVU7WUFDViwrQ0FBK0M7WUFDL0MsTUFBTTtZQUNOLEtBQUs7WUFDTCw4REFBOEQ7WUFDOUQsc0VBQXNFO1lBRTFFO1FBQ0osT0FBSztZQUNENkIsUUFBUUMsSUFBSTtRQUNoQjtJQUNGO0lBRUEscUJBQ0ksOERBQUN0Qyw0REFBTUE7UUFDTGlCLE1BQU1BO1FBQ05vQyxxQkFBcUIxQztRQUNyQjJDLFdBQVc7UUFDWEMsU0FBU3BCO1FBQ1RxQixvQkFBaUI7OzBCQUVqQiw4REFBQ3JELGlFQUFXQTswQkFBQzs7Ozs7OzBCQUNiLDhEQUFDRCxtRUFBYUE7O2tDQUNiLDhEQUFDRywrREFBU0E7d0JBQ1BvRCxTQUFTO3dCQUNUQyxRQUFPO3dCQUNQQyxJQUFHO3dCQUNIQyxPQUFNO3dCQUNOL0IsTUFBSzt3QkFDTGdDLFNBQVM7d0JBQ1RDLFNBQVE7d0JBQ1I1QixPQUFPUixTQUFTRzt3QkFDaEJrQyxVQUFVaEM7Ozs7OztrQ0FFWCw4REFBQ3pCLDRFQUFhQTt3QkFDZHVCLE1BQUs7d0JBQ0xyQixRQUFPO3dCQUNQMEIsT0FBT1IsU0FBU0k7d0JBQ2hCaUMsVUFBVTNCOzs7Ozs7Ozs7Ozs7MEJBR2IsOERBQUNuQyxtRUFBYUE7MEJBQ1osNEVBQUNGLDZEQUFNQTtvQkFBQ2lFLFNBQVN6Qjs4QkFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEM7R0FwSndCdkI7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGQuanN4P2Y2OWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGlhbG9nVGl0bGUnO1xuaW1wb3J0IFNsaWRlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU2xpZGUnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XG5pbXBvcnQgeyBEYXRlVGltZUZpZWxkIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9EYXRlVGltZUZpZWxkJztcbmltcG9ydCBBbGVydCBmcm9tICdAbXVpL21hdGVyaWFsL0FsZXJ0JztcbmltcG9ydCB7IGZvcm1hdCwgaXNBZnRlciB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5cbmNvbnN0IFRyYW5zaXRpb24gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRyYW5zaXRpb24ocHJvcHMsIHJlZikge1xuICByZXR1cm4gPFNsaWRlIGRpcmVjdGlvbj1cInVwXCIgcmVmPXtyZWZ9IHsuLi5wcm9wc30gLz47XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkKHtcbiAgICBvcGVuLCBcbiAgICBzZXRPcGVuLCBcbiAgICB0eXBlLFxuICAgIHRhc2tEYXRhLCBcbiAgICBzZXRUYXNrRGF0YSwgXG4gICAgYXBwb2ludG1lbnREYXRhLCBcbiAgICBzZXRBcHBvaW50bWVudERhdGEsIFxuICAgIGZpbmFuY2VEYXRhLCBcbiAgICBzZXRGaW5hbmNlRGF0YVxuICB9KSB7XG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIGR1ZV9ieTogbnVsbCxcbiAgICB9KVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH0gXG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0T3Blbighb3Blbik7XG4gICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICBkdWVfYnk6IG51bGwsXG4gICAgfSlcbiAgfTtcblxuICBmdW5jdGlvbiBoYW5kbGVEYXRlQ2hhbmdlKGUpe1xuICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgICAgICAgZHVlX2J5OiBlXG4gICAgICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVBZGQoZSl7XG4gICAgaGFuZGxlQ2xvc2UoKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmIChmb3JtRGF0YS5uYW1lICE9ICcnICYmIGZvcm1EYXRhLmR1ZV9ieSAhPSBudWxsKXtcbiAgICAgICAgaWYgKHR5cGUgPT0gJ3Rhc2tzJyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlLCBmb3JtRGF0YSlcbiAgICAgICAgICAgIGNvbnN0IG5ld09iaiA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBmb3JtRGF0YS5uYW1lLFxuICAgICAgICAgICAgICAgIGR1ZV9ieTogbW9tZW50KGZvcm1EYXRhLmR1ZV9ieSkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGZldGNoKGAvYXBpL3Rhc2tzYCwge1xuICAgICAgICAgICAgLy8gICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgLy8gICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICAgICAgICAgIC8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSlcbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAvLyAudGhlbigocikgPT4ge1xuICAgICAgICAgICAgLy8gICBpZiAoci5vayl7XG4gICAgICAgICAgICAvLyAgICAgci5qc29uKClcbiAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgLy8gICBlbHNle1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gYWRkIHRhc2snKVxuICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgLy8gLnRoZW4oZGF0YSA9PiBzZXRUYXNrRGF0YSguLi50YXNrRGF0YSwgZGF0YSkpXG4gICAgICAgICAgICAvLyAudGhlbig8QWxlcnQgc2V2ZXJpdHk9XCJzdWNjZXNzXCI+QWRkIHRhc2sgc3VjY2Vzc2Z1bDwvQWxlcnQ+KVxuICAgICAgICB9ZWxzZSBpZih0eXBlID09ICdmaW5hbmNlcycpe1xuICAgICAgICAgICAgY29uc29sZS5sb2codHlwZSwgZm9ybURhdGEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtb21lbnQoZm9ybURhdGEuZHVlX2J5KS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW0nKSlcbiAgICAgICAgICAgIGNvbnN0IG5ld09iaiA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBmb3JtRGF0YS5uYW1lLFxuICAgICAgICAgICAgICAgIGR1ZV9ieTogbW9tZW50KGZvcm1EYXRhLmR1ZV9ieSkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZldGNoKGAvYXBpL2ZpbmFuY2VzYCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdPYmopXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHIub2spe1xuICAgICAgICAgICAgICAgIHIuanNvbigpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGFkZCBmaW5hbmNlJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG4gICAgICAgIC8vIC50aGVuKDxBbGVydCBzZXZlcml0eT1cInN1Y2Nlc3NcIj5BZGQgZmluYW5jZSBzdWNjZXNzZnVsPC9BbGVydD4pXG5cbiAgICAgICAgfWVsc2UgaWYodHlwZSA9PSAnYXBwb2ludG1lbnRzJyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlLCBmb3JtRGF0YSlcbiAgICAgICAgICAgIGNvbnN0IG5ld09iaiA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBmb3JtRGF0YS5uYW1lLFxuICAgICAgICAgICAgICAgIGR1ZV9ieTogbW9tZW50KGZvcm1EYXRhLmR1ZV9ieSkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGZldGNoKGAvYXBpL2FwcG9pbnRtZW50c2AsIHtcbiAgICAgICAgICAgIC8vICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIC8vICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICAgICAgICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpXG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgLy8gLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgIC8vICAgaWYgKHIub2spe1xuICAgICAgICAgICAgLy8gICAgIHIuanNvbigpXG4gICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgIC8vICAgZWxzZXtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGFkZCBhcHBvaW50bWVudCcpXG4gICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAvLyAudGhlbihkYXRhID0+IHNldEFwcG9pbnRtZW50RGF0YSguLi5hcHBvaW50bWVudERhdGEsIGRhdGEpKVxuICAgICAgICAgICAgLy8gLnRoZW4oPEFsZXJ0IHNldmVyaXR5PVwic3VjY2Vzc1wiPkFkZCBhcHBvaW50bWVudCBzdWNjZXNzZnVsPC9BbGVydD4pXG5cbiAgICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgICBjb25zb2xlLmxvZygnZW1wdHkgZmllbGQsIGZpZ3VyZSBvdXQgYWxlcnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgICA8RGlhbG9nXG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIFRyYW5zaXRpb25Db21wb25lbnQ9e1RyYW5zaXRpb259XG4gICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYWxlcnQtZGlhbG9nLXNsaWRlLWRlc2NyaXB0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPERpYWxvZ1RpdGxlPkFkZDwvRGlhbG9nVGl0bGU+XG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcbiAgICAgICAgICAgIG5hbWU9J25hbWUnXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICAgPERhdGVUaW1lRmllbGQgXG4gICAgICAgICAgIG5hbWU9J2R1ZV9ieSdcbiAgICAgICAgICAgZm9ybWF0PSdZWVlZL01NL0REIGhoOm1tIGEnXG4gICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5kdWVfYnl9XG4gICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEYXRlQ2hhbmdlfVxuICAgICAgICAgICAvPlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQWRkfT5BZGQ8L0J1dHRvbj5cbiAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgICAgPC9EaWFsb2c+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiRGlhbG9nIiwiRGlhbG9nQWN0aW9ucyIsIkRpYWxvZ0NvbnRlbnQiLCJEaWFsb2dUaXRsZSIsIlNsaWRlIiwiVGV4dEZpZWxkIiwiRGF0ZVRpbWVGaWVsZCIsIkFsZXJ0IiwiZm9ybWF0IiwiaXNBZnRlciIsIm1vbWVudCIsIlRyYW5zaXRpb24iLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJkaXJlY3Rpb24iLCJBZGQiLCJvcGVuIiwic2V0T3BlbiIsInR5cGUiLCJ0YXNrRGF0YSIsInNldFRhc2tEYXRhIiwiYXBwb2ludG1lbnREYXRhIiwic2V0QXBwb2ludG1lbnREYXRhIiwiZmluYW5jZURhdGEiLCJzZXRGaW5hbmNlRGF0YSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJkdWVfYnkiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDbG9zZSIsImhhbmRsZURhdGVDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQWRkIiwicHJldmVudERlZmF1bHQiLCJuZXdPYmoiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyIiwib2siLCJqc29uIiwiZGF0YSIsIlRyYW5zaXRpb25Db21wb25lbnQiLCJrZWVwTW91bnRlZCIsIm9uQ2xvc2UiLCJhcmlhLWRlc2NyaWJlZGJ5IiwiYXV0b0ZvY3VzIiwibWFyZ2luIiwiaWQiLCJsYWJlbCIsImZ1bGxXaWR0aCIsInZhcmlhbnQiLCJvbkNoYW5nZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Add.jsx\n"));

/***/ })

});