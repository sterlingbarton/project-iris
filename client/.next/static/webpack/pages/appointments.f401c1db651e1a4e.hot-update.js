"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/appointments",{

/***/ "./components/Add.jsx":
/*!****************************!*\
  !*** ./components/Add.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Add; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Dialog */ \"./node_modules/@mui/material/Dialog/index.js\");\n/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/DialogActions */ \"./node_modules/@mui/material/DialogActions/index.js\");\n/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/DialogContent */ \"./node_modules/@mui/material/DialogContent/index.js\");\n/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/DialogTitle */ \"./node_modules/@mui/material/DialogTitle/index.js\");\n/* harmony import */ var _mui_material_Slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Slide */ \"./node_modules/@mui/material/Slide/index.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var _mui_x_date_pickers_DateTimeField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/x-date-pickers/DateTimeField */ \"./node_modules/@mui/x-date-pickers/DateTimeField/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Transition = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(_c = function Transition(props, ref) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Slide__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        direction: \"up\",\n        ref: ref,\n        ...props\n    }, void 0, false, {\n        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n        lineNumber: 14,\n        columnNumber: 10\n    }, this);\n});\n_c1 = Transition;\nfunction Add(param) {\n    let { open , setOpen , type , taskData , setTaskData , appointmentData , setAppointmentData , financeData , setFinanceData  } = param;\n    _s();\n    const [formData, setFormData] = react__WEBPACK_IMPORTED_MODULE_1__.useState({\n        id: \"\",\n        name: \"\",\n        due_by: null\n    });\n    console.log(formData.due_by);\n    console.log(typeof formData.due_by);\n    function handleChange(e) {\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    }\n    const handleClose = ()=>{\n        setOpen(!open);\n        setFormData({\n            name: \"\",\n            due_by: null\n        });\n    };\n    function handleDateChange(e) {\n        if (!e._f) {\n            setFormData({\n                ...formData,\n                due_by: e._d.UTC()\n            });\n        }\n    }\n    function handleAdd(e) {\n        handleClose();\n        e.preventDefault();\n        console.log(formData);\n        if (formData.name != \"\" && formData.due_by != null) {\n            if (type == \"tasks\") {\n                console.log(type, formData);\n            // fetch(`/api/tasks`, {\n            //     method: 'POST',\n            //     headers: {'Content-Type': 'application/json'},\n            //     body: JSON.stringify(formData)\n            // })\n            // .then((r) => {\n            //   if (r.ok){\n            //     r.json()\n            //   }\n            //   else{\n            //     console.log('Failed to add task')\n            //   }\n            // })\n            // .then(data => setTaskData(...taskData, data))\n            } else if (type == \"finances\") {\n                console.log(type, formData);\n            // fetch(`/api/finances`, {\n            //     method: 'POST',\n            //     headers: {'Content-Type': 'application/json'},\n            //     body: JSON.stringify(formData)\n            // })\n            // .then((r) => {\n            //   if (r.ok){\n            //     r.json()\n            //   }\n            //   else{\n            //     console.log('Failed to add finance')\n            //   }\n            // })\n            // .then(data => setFinanceData(...financeData, data))\n            } else if (type == \"appointments\") {\n                console.log(type, formData);\n            // fetch(`/api/appointments`, {\n            //     method: 'POST',\n            //     headers: {'Content-Type': 'application/json'},\n            //     body: JSON.stringify(formData)\n            // })\n            // .then((r) => {\n            //   if (r.ok){\n            //     r.json()\n            //   }\n            //   else{\n            //     console.log('Failed to add appointment')\n            //   }\n            // })\n            // .then(data => setAppointmentData(...appointmentData, data))\n            }\n        } else {\n            console.log(\"empty field, figure out alert\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        open: open,\n        TransitionComponent: Transition,\n        keepMounted: true,\n        onClose: handleClose,\n        \"aria-describedby\": \"alert-dialog-slide-description\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                lineNumber: 126,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        autoFocus: true,\n                        margin: \"dense\",\n                        id: \"name\",\n                        label: \"Name\",\n                        name: \"name\",\n                        fullWidth: true,\n                        variant: \"standard\",\n                        value: formData.name,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                        lineNumber: 128,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers_DateTimeField__WEBPACK_IMPORTED_MODULE_7__.DateTimeField, {\n                        name: \"due_by\",\n                        format: \"YYYY/MM/DD hh:mm a\",\n                        value: formData.due_by,\n                        onChange: handleDateChange\n                    }, void 0, false, {\n                        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                        lineNumber: 139,\n                        columnNumber: 12\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                lineNumber: 127,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    onClick: handleAdd,\n                    children: \"Add\"\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                    lineNumber: 147,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n                lineNumber: 146,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/Add.jsx\",\n        lineNumber: 119,\n        columnNumber: 7\n    }, this);\n}\n_s(Add, \"IZJp73eI9C9YfYNUUYX8CJ4Pb24=\");\n_c2 = Add;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Transition$React.forwardRef\");\n$RefreshReg$(_c1, \"Transition\");\n$RefreshReg$(_c2, \"Add\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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K0RBQVNBO3dCQUNQMEMsU0FBUzt3QkFDVEMsUUFBTzt3QkFDUHJCLElBQUc7d0JBQ0hzQixPQUFNO3dCQUNOckIsTUFBSzt3QkFDTHNCLFNBQVM7d0JBQ1RDLFNBQVE7d0JBQ1JoQixPQUFPWCxTQUFTSTt3QkFDaEJ3QixVQUFVcEI7Ozs7OztrQ0FFWCw4REFBQzFCLDRFQUFhQTt3QkFDZHNCLE1BQUs7d0JBQ0xyQixRQUFPO3dCQUNONEIsT0FBT1gsU0FBU0s7d0JBQ2pCdUIsVUFBVWY7Ozs7Ozs7Ozs7OzswQkFHYiw4REFBQ3BDLG1FQUFhQTswQkFDWiw0RUFBQ0YsNERBQU1BO29CQUFDc0QsU0FBU1o7OEJBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXRDO0dBdEl3QjNCO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWRkLmpzeD9mNjlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbXVpL21hdGVyaWFsL0RpYWxvZyc7XG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tICdAbXVpL21hdGVyaWFsL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG11aS9tYXRlcmlhbC9EaWFsb2dDb250ZW50JztcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbXVpL21hdGVyaWFsL0RpYWxvZ1RpdGxlJztcbmltcG9ydCBTbGlkZSBmcm9tICdAbXVpL21hdGVyaWFsL1NsaWRlJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0RmllbGQnO1xuaW1wb3J0IHsgRGF0ZVRpbWVGaWVsZCB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvRGF0ZVRpbWVGaWVsZCc7XG5pbXBvcnQgeyBmb3JtYXQsIGlzQWZ0ZXIgfSBmcm9tICdkYXRlLWZucydcblxuXG5jb25zdCBUcmFuc2l0aW9uID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUcmFuc2l0aW9uKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIDxTbGlkZSBkaXJlY3Rpb249XCJ1cFwiIHJlZj17cmVmfSB7Li4ucHJvcHN9IC8+O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZCh7XG4gICAgb3BlbiwgXG4gICAgc2V0T3BlbiwgXG4gICAgdHlwZSxcbiAgICB0YXNrRGF0YSwgXG4gICAgc2V0VGFza0RhdGEsIFxuICAgIGFwcG9pbnRtZW50RGF0YSwgXG4gICAgc2V0QXBwb2ludG1lbnREYXRhLCBcbiAgICBmaW5hbmNlRGF0YSwgXG4gICAgc2V0RmluYW5jZURhdGFcbiAgfSkge1xuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgICAgICBpZDogXCJcIixcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgZHVlX2J5OiBudWxsLFxuICAgIH0pXG4gICAgY29uc29sZS5sb2coZm9ybURhdGEuZHVlX2J5KVxuICAgIGNvbnNvbGUubG9nKHR5cGVvZihmb3JtRGF0YS5kdWVfYnkpKVxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9IFxuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldE9wZW4oIW9wZW4pO1xuICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgZHVlX2J5OiBudWxsLFxuICAgIH0pXG4gIH07XG5cbiAgZnVuY3Rpb24gaGFuZGxlRGF0ZUNoYW5nZShlKXtcbiAgICBpZiAoIWUuX2Ype1xuICAgICAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgICAgIGR1ZV9ieTogZS5fZC5VVEMoKVxuICAgICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUFkZChlKXtcbiAgICBoYW5kbGVDbG9zZSgpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc29sZS5sb2coZm9ybURhdGEpXG4gICAgaWYgKGZvcm1EYXRhLm5hbWUgIT0gJycgJiYgZm9ybURhdGEuZHVlX2J5ICE9IG51bGwpe1xuICAgICAgICBpZiAodHlwZSA9PSAndGFza3MnKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGUsIGZvcm1EYXRhKVxuICAgICAgICAgICAgLy8gZmV0Y2goYC9hcGkvdGFza3NgLCB7XG4gICAgICAgICAgICAvLyAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAvLyAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgICAgICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIC8vIC50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAvLyAgIGlmIChyLm9rKXtcbiAgICAgICAgICAgIC8vICAgICByLmpzb24oKVxuICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAvLyAgIGVsc2V7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBhZGQgdGFzaycpXG4gICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAvLyAudGhlbihkYXRhID0+IHNldFRhc2tEYXRhKC4uLnRhc2tEYXRhLCBkYXRhKSlcbiAgICAgICAgfWVsc2UgaWYodHlwZSA9PSAnZmluYW5jZXMnKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGUsIGZvcm1EYXRhKVxuICAgICAgICAgICAgLy8gZmV0Y2goYC9hcGkvZmluYW5jZXNgLCB7XG4gICAgICAgICAgICAvLyAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAvLyAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgICAgICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIC8vIC50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAvLyAgIGlmIChyLm9rKXtcbiAgICAgICAgICAgIC8vICAgICByLmpzb24oKVxuICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAvLyAgIGVsc2V7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBhZGQgZmluYW5jZScpXG4gICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAvLyAudGhlbihkYXRhID0+IHNldEZpbmFuY2VEYXRhKC4uLmZpbmFuY2VEYXRhLCBkYXRhKSlcbiAgICAgICAgfWVsc2UgaWYodHlwZSA9PSAnYXBwb2ludG1lbnRzJyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlLCBmb3JtRGF0YSlcbiAgICAgICAgICAgIC8vIGZldGNoKGAvYXBpL2FwcG9pbnRtZW50c2AsIHtcbiAgICAgICAgICAgIC8vICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIC8vICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICAgICAgICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpXG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgLy8gLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgIC8vICAgaWYgKHIub2spe1xuICAgICAgICAgICAgLy8gICAgIHIuanNvbigpXG4gICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgIC8vICAgZWxzZXtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGFkZCBhcHBvaW50bWVudCcpXG4gICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAvLyAudGhlbihkYXRhID0+IHNldEFwcG9pbnRtZW50RGF0YSguLi5hcHBvaW50bWVudERhdGEsIGRhdGEpKVxuICAgICAgICB9XG4gICAgfWVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlbXB0eSBmaWVsZCwgZmlndXJlIG91dCBhbGVydCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICAgIDxEaWFsb2dcbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudD17VHJhbnNpdGlvbn1cbiAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJhbGVydC1kaWFsb2ctc2xpZGUtZGVzY3JpcHRpb25cIlxuICAgICAgPlxuICAgICAgICA8RGlhbG9nVGl0bGU+QWRkPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgbmFtZT0nbmFtZSdcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5uYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgICA8RGF0ZVRpbWVGaWVsZCBcbiAgICAgICAgICAgbmFtZT0nZHVlX2J5J1xuICAgICAgICAgICBmb3JtYXQ9J1lZWVkvTU0vREQgaGg6bW0gYSdcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5kdWVfYnl9XG4gICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEYXRlQ2hhbmdlfVxuICAgICAgICAgICAvPlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQWRkfT5BZGQ8L0J1dHRvbj5cbiAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgICAgPC9EaWFsb2c+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiRGlhbG9nIiwiRGlhbG9nQWN0aW9ucyIsIkRpYWxvZ0NvbnRlbnQiLCJEaWFsb2dUaXRsZSIsIlNsaWRlIiwiVGV4dEZpZWxkIiwiRGF0ZVRpbWVGaWVsZCIsImZvcm1hdCIsImlzQWZ0ZXIiLCJUcmFuc2l0aW9uIiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwiZGlyZWN0aW9uIiwiQWRkIiwib3BlbiIsInNldE9wZW4iLCJ0eXBlIiwidGFza0RhdGEiLCJzZXRUYXNrRGF0YSIsImFwcG9pbnRtZW50RGF0YSIsInNldEFwcG9pbnRtZW50RGF0YSIsImZpbmFuY2VEYXRhIiwic2V0RmluYW5jZURhdGEiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlU3RhdGUiLCJpZCIsIm5hbWUiLCJkdWVfYnkiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVEYXRlQ2hhbmdlIiwiX2YiLCJfZCIsIlVUQyIsImhhbmRsZUFkZCIsInByZXZlbnREZWZhdWx0IiwiVHJhbnNpdGlvbkNvbXBvbmVudCIsImtlZXBNb3VudGVkIiwib25DbG9zZSIsImFyaWEtZGVzY3JpYmVkYnkiLCJhdXRvRm9jdXMiLCJtYXJnaW4iLCJsYWJlbCIsImZ1bGxXaWR0aCIsInZhcmlhbnQiLCJvbkNoYW5nZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Add.jsx\n"));

/***/ })

});