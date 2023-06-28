"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/TaskCard.jsx":
/*!*********************************!*\
  !*** ./components/TaskCard.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TaskCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _Add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add */ \"./components/Add.jsx\");\n/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edit */ \"./components/Edit.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction TaskCard(param) {\n    let { taskData , setTaskData  } = param;\n    _s();\n    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [openEdit, setOpenEdit] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [currentId, setCurrentId] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);\n    const handleOpenEdit = (id)=>{\n        setOpenEdit(!openEdit);\n        setCurrentId(id);\n    };\n    const tasks = taskData.map((task)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            variant: \"li\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    variant: \"h4\",\n                    children: task.due_by\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    variant: \"p\",\n                    children: task.name\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            variant: \"outlined\",\n                            size: \"small\",\n                            color: \"primary\",\n                            onClick: ()=>handleOpenEdit(task.id),\n                            children: \"Edit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            variant: \"outlined\",\n                            size: \"small\",\n                            color: \"primary\",\n                            onClick: ()=>handleDeleteTask(task.id),\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, task.id, true, {\n            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n            lineNumber: 22,\n            columnNumber: 16\n        }, this);\n    });\n    function handleDeleteTask(id) {\n        fetch(\"/api/tasks/\".concat(id), {\n            method: \"DELETE\"\n        }).then(setTaskData(...taskData));\n    }\n    const handleClickOpen = ()=>{\n        setOpen(!open);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        sx: {\n            maxWidth: 345\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    gutterBottom: true,\n                    variant: \"h5\",\n                    component: \"div\",\n                    children: \"Tasks\"\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    variant: \"outlined\",\n                    size: \"small\",\n                    color: \"primary\",\n                    onClick: handleClickOpen,\n                    children: \"+\"\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Add__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    open: open,\n                    setOpen: setOpen,\n                    type: \"tasks\"\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Edit__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    openEdit: openEdit,\n                    setOpenEdit: setOpenEdit,\n                    type: \"tasks\",\n                    taskData: taskData,\n                    setTaskData: setTaskData,\n                    currentId: currentId\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    variant: \"ul\",\n                    color: \"text.secondary\",\n                    children: tasks\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n            lineNumber: 45,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(TaskCard, \"Zo4xaL8gz+9Adi6zC8pro1967r0=\");\n_c = TaskCard;\nvar _c;\n$RefreshReg$(_c, \"TaskCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rhc2tDYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNPO0FBQ2M7QUFDRjtBQUNkO0FBQ2dCO0FBQzVCO0FBQ0M7QUFHVixTQUFTUyxTQUFTLEtBQXVCO1FBQXZCLEVBQUNDLFNBQVEsRUFBRUMsWUFBVyxFQUFDLEdBQXZCOztJQUM3QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2IsMkNBQWNjLENBQUM7SUFDdkMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdoQiwyQ0FBY2MsQ0FBQztJQUMvQyxNQUFNLENBQUNHLFdBQVdDLGFBQWEsR0FBR2xCLDJDQUFjYyxDQUFDO0lBRWpELE1BQU1LLGlCQUFpQixDQUFDQztRQUNwQkosWUFBWSxDQUFDRDtRQUNiRyxhQUFhRTtJQUNqQjtJQUVBLE1BQU1DLFFBQVFYLFNBQVNZLElBQUksQ0FBQ0M7UUFDeEIscUJBQU8sOERBQUNuQix5REFBR0E7WUFBQ29CLFNBQVE7OzhCQUNwQiw4REFBQ3JCLGdFQUFVQTtvQkFBQ3FCLFNBQVE7OEJBQU1ELEtBQUtFOzs7Ozs7OEJBQy9CLDhEQUFDdEIsZ0VBQVVBO29CQUFDcUIsU0FBUTs4QkFBS0QsS0FBS0c7Ozs7Ozs4QkFDOUIsOERBQUNwQixzREFBV0E7O3NDQUNSLDhEQUFDRCxpREFBTUE7NEJBQUNtQixTQUFROzRCQUFXRyxNQUFLOzRCQUFRQyxPQUFNOzRCQUFVQyxTQUFTLElBQU1WLGVBQWVJLEtBQUtIO3NDQUFLOzs7Ozs7c0NBQ2hHLDhEQUFDZixpREFBTUE7NEJBQUNtQixTQUFROzRCQUFXRyxNQUFLOzRCQUFRQyxPQUFNOzRCQUFVQyxTQUFTLElBQU1DLGlCQUFpQlAsS0FBS0g7c0NBQUs7Ozs7Ozs7Ozs7Ozs7V0FMeEVHLEtBQUtIOzs7OztJQVF2QztJQUVBLFNBQVNVLGlCQUFpQlYsRUFBRTtRQUN4QlcsTUFBTSxjQUFpQixPQUFIWCxLQUFPO1lBQ3ZCWSxRQUFRO1FBQ1osR0FDQ0MsS0FBS3RCLGVBQWVEO0lBQ3pCO0lBRUEsTUFBTXdCLGtCQUFrQjtRQUNwQnJCLFFBQVEsQ0FBQ0Q7SUFDWDtJQUVKLHFCQUNFLDhEQUFDWCwwREFBSUE7UUFBQ2tDLElBQUk7WUFBRUMsVUFBVTtRQUFJO2tCQUN0Qiw0RUFBQ2xDLGlFQUFXQTs7OEJBQ1YsOERBQUNDLGdFQUFVQTtvQkFBQ2tDLFlBQVk7b0JBQUNiLFNBQVE7b0JBQUtjLFdBQVU7OEJBQU07Ozs7Ozs4QkFHcEQsOERBQUNqQyxpREFBTUE7b0JBQUNtQixTQUFRO29CQUFXRyxNQUFLO29CQUFRQyxPQUFNO29CQUFVQyxTQUFTSzs4QkFBaUI7Ozs7Ozs4QkFHbEYsOERBQUMzQiw0Q0FBR0E7b0JBQUNLLE1BQU1BO29CQUFNQyxTQUFTQTtvQkFBUzBCLE1BQU07Ozs7Ozs4QkFDekMsOERBQUMvQiw2Q0FBSUE7b0JBQUNPLFVBQVVBO29CQUFVQyxhQUFhQTtvQkFBYXVCLE1BQU07b0JBQVM3QixVQUFVQTtvQkFBVUMsYUFBYUE7b0JBQWFNLFdBQVdBOzs7Ozs7OEJBQzlILDhEQUFDZCxnRUFBVUE7b0JBQUNxQixTQUFRO29CQUFLSSxPQUFNOzhCQUM1QlA7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2I7R0FqRHdCWjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Rhc2tDYXJkLmpzeD8xMzFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZCc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgeyBCdXR0b24sIEJ1dHRvbkdyb3VwIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgQWRkIGZyb20gJy4vQWRkJztcbmltcG9ydCBFZGl0IGZyb20gJy4vRWRpdCdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrQ2FyZCh7dGFza0RhdGEsIHNldFRhc2tEYXRhfSkge1xuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbb3BlbkVkaXQsIHNldE9wZW5FZGl0XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbY3VycmVudElkLCBzZXRDdXJyZW50SWRdID0gUmVhY3QudXNlU3RhdGUobnVsbClcblxuICAgIGNvbnN0IGhhbmRsZU9wZW5FZGl0ID0gKGlkKSA9PiB7XG4gICAgICAgIHNldE9wZW5FZGl0KCFvcGVuRWRpdCk7XG4gICAgICAgIHNldEN1cnJlbnRJZChpZClcbiAgICB9O1xuXG4gICAgY29uc3QgdGFza3MgPSB0YXNrRGF0YS5tYXAoKHRhc2spID0+IHtcbiAgICAgICAgcmV0dXJuIDxCb3ggdmFyaWFudD0nbGknIGtleT17dGFzay5pZH0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0Jz57dGFzay5kdWVfYnl9PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdwJz57dGFzay5uYW1lfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPEJ1dHRvbkdyb3VwPlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcGVuRWRpdCh0YXNrLmlkKX0+RWRpdDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVUYXNrKHRhc2suaWQpfT5EZWxldGU8L0J1dHRvbj5cbiAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgPC9Cb3g+XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZVRhc2soaWQpe1xuICAgICAgICBmZXRjaChgL2FwaS90YXNrcy8ke2lkfWAgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihzZXRUYXNrRGF0YSguLi50YXNrRGF0YSkpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPcGVuID0gKCkgPT4ge1xuICAgICAgICBzZXRPcGVuKCFvcGVuKTtcbiAgICAgIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBzeD17eyBtYXhXaWR0aDogMzQ1IH19PlxuICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgICAgVGFza3NcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrT3Blbn0+XG4gICAgICAgICAgICArXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxBZGQgb3Blbj17b3Blbn0gc2V0T3Blbj17c2V0T3Blbn0gdHlwZT17J3Rhc2tzJ30vPlxuICAgICAgICAgICAgPEVkaXQgb3BlbkVkaXQ9e29wZW5FZGl0fSBzZXRPcGVuRWRpdD17c2V0T3BlbkVkaXR9IHR5cGU9eyd0YXNrcyd9IHRhc2tEYXRhPXt0YXNrRGF0YX0gc2V0VGFza0RhdGE9e3NldFRhc2tEYXRhfSBjdXJyZW50SWQ9e2N1cnJlbnRJZH0vPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ1bFwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIHt0YXNrc31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgPC9DYXJkPlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJDYXJkQ29udGVudCIsIlR5cG9ncmFwaHkiLCJCb3giLCJCdXR0b24iLCJCdXR0b25Hcm91cCIsIkFkZCIsIkVkaXQiLCJUYXNrQ2FyZCIsInRhc2tEYXRhIiwic2V0VGFza0RhdGEiLCJvcGVuIiwic2V0T3BlbiIsInVzZVN0YXRlIiwib3BlbkVkaXQiLCJzZXRPcGVuRWRpdCIsImN1cnJlbnRJZCIsInNldEN1cnJlbnRJZCIsImhhbmRsZU9wZW5FZGl0IiwiaWQiLCJ0YXNrcyIsIm1hcCIsInRhc2siLCJ2YXJpYW50IiwiZHVlX2J5IiwibmFtZSIsInNpemUiLCJjb2xvciIsIm9uQ2xpY2siLCJoYW5kbGVEZWxldGVUYXNrIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwiaGFuZGxlQ2xpY2tPcGVuIiwic3giLCJtYXhXaWR0aCIsImd1dHRlckJvdHRvbSIsImNvbXBvbmVudCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TaskCard.jsx\n"));

/***/ })

});