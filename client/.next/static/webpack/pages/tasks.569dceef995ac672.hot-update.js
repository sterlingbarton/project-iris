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

/***/ "./components/TaskCard.jsx":
/*!*********************************!*\
  !*** ./components/TaskCard.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TaskCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/List/index.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/ListItem */ \"./node_modules/@mui/material/ListItem/index.js\");\n/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ \"./node_modules/@mui/material/ListItemAvatar/index.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/ListItemText/index.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/index.js\");\n/* harmony import */ var _mui_icons_material_TaskRounded__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/TaskRounded */ \"./node_modules/@mui/icons-material/TaskRounded.js\");\n/* harmony import */ var _Add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add */ \"./components/Add.jsx\");\n/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edit */ \"./components/Edit.jsx\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction TaskCard(param) {\n    let { taskData , setTaskData , refetch  } = param;\n    _s();\n    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [openEdit, setOpenEdit] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [currentId, setCurrentId] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);\n    const handleOpenEdit = (id)=>{\n        setOpenEdit(!openEdit);\n        setCurrentId(id);\n    };\n    const tasks = taskData.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            sx: {\n                color: \"text.secondary\"\n            },\n            button: true,\n            secondaryAction: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {\n                edge: \"end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        variant: \"outlined\",\n                        size: \"small\",\n                        color: \"primary\",\n                        onClick: ()=>handleOpenEdit(task.id),\n                        children: \"Edit\"\n                    }, void 0, false, void 0, void 0),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        variant: \"outlined\",\n                        size: \"small\",\n                        color: \"primary\",\n                        onClick: ()=>handleDeleteTask(task.id),\n                        children: \"Delete\"\n                    }, void 0, false, void 0, void 0)\n                ]\n            }, void 0, true, void 0, void 0),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_TaskRounded__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    primary: task.name,\n                    secondary: moment__WEBPACK_IMPORTED_MODULE_4___default()(task.due_by).format(\"LLL\")\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, task.name, true, {\n            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, this));\n    function handleDeleteTask(id) {\n        fetch(\"/api/tasks/\".concat(id), {\n            method: \"DELETE\"\n        }).then(()=>refetch());\n    }\n    const handleClickOpen = ()=>{\n        setOpen(!open);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        justifyContent: \"space-between\",\n                        alignItems: \"center\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                            gutterBottom: true,\n                            variant: \"h5\",\n                            component: \"div\",\n                            children: \"Tasks\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            variant: \"outlined\",\n                            size: \"small\",\n                            color: \"primary\",\n                            onClick: handleClickOpen,\n                            children: \"+\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Add__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    open: open,\n                    setOpen: setOpen,\n                    type: \"tasks\",\n                    taskData: taskData,\n                    setTaskData: setTaskData\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Edit__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    openEdit: openEdit,\n                    setOpenEdit: setOpenEdit,\n                    type: \"tasks\",\n                    taskData: taskData,\n                    setTaskData: setTaskData,\n                    currentId: currentId\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n                    children: tasks\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n            lineNumber: 60,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(TaskCard, \"Zo4xaL8gz+9Adi6zC8pro1967r0=\");\n_c = TaskCard;\nvar _c;\n$RefreshReg$(_c, \"TaskCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rhc2tDYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ087QUFDYztBQUNGO0FBQ2Q7QUFDZ0I7QUFDZDtBQUNRO0FBQ1k7QUFDSjtBQUNaO0FBQ29CO0FBQ1o7QUFDMUI7QUFDQztBQUNHO0FBR2IsU0FBU2lCLFNBQVMsS0FBZ0M7UUFBaEMsRUFBQ0MsU0FBUSxFQUFFQyxZQUFXLEVBQUVDLFFBQU8sRUFBQyxHQUFoQzs7SUFDN0IsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUd0QiwyQ0FBY3VCLENBQUM7SUFDdkMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUd6QiwyQ0FBY3VCLENBQUM7SUFDL0MsTUFBTSxDQUFDRyxXQUFXQyxhQUFhLEdBQUczQiwyQ0FBY3VCLENBQUM7SUFFakQsTUFBTUssaUJBQWlCLENBQUNDO1FBQ3BCSixZQUFZLENBQUNEO1FBQ2JHLGFBQWFFO0lBQ2pCO0lBRUEsTUFBTUMsUUFBUVosU0FBU2EsSUFBSSxDQUFDQyxxQkFFcEIsOERBQUN4Qiw4REFBUUE7WUFBQ3lCLElBQUk7Z0JBQUNDLE9BQU07WUFBZ0I7WUFBbUJDLE1BQU07WUFBQ0MsK0JBQzNELDhEQUFDOUIsc0RBQVdBO2dCQUFDK0IsTUFBSzs7a0NBQ2QsOERBQUNoQyxpREFBTUE7d0JBQUNpQyxTQUFRO3dCQUFXQyxNQUFLO3dCQUFRTCxPQUFNO3dCQUFVTSxTQUFTLElBQU1aLGVBQWVJLEtBQUtIO2tDQUFLOztrQ0FDaEcsOERBQUN4QixpREFBTUE7d0JBQUNpQyxTQUFRO3dCQUFXQyxNQUFLO3dCQUFRTCxPQUFNO3dCQUFVTSxTQUFTLElBQU1DLGlCQUFpQlQsS0FBS0g7a0NBQUs7Ozs7OzhCQUcxRyw4REFBQ3BCLG9FQUFjQTs4QkFDYiw0RUFBQ0UsNERBQU1BO2tDQUNMLDRFQUFDQyx1RUFBZUE7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHcEIsOERBQUNGLG1FQUFZQTtvQkFBQ2dDLFNBQVNWLEtBQUtXO29CQUFNQyxXQUFXNUIsNkNBQU1BLENBQUNnQixLQUFLYSxRQUFRQyxPQUFPOzs7Ozs7O1dBWDNCZCxLQUFLVzs7Ozs7SUFnQjFELFNBQVNGLGlCQUFpQlosRUFBRTtRQUN4QmtCLE1BQU0sY0FBaUIsT0FBSGxCLEtBQU87WUFDdkJtQixRQUFRO1FBQ1osR0FDQ0MsS0FBSyxJQUFNN0I7SUFDaEI7SUFFQSxNQUFNOEIsa0JBQWtCO1FBQ3BCNUIsUUFBUSxDQUFDRDtJQUNYO0lBRUoscUJBQ0UsOERBQUNwQiwyREFBSUE7a0JBQ0QsNEVBQUNDLGtFQUFXQTs7OEJBQ1IsOERBQUNFLDBEQUFHQTtvQkFBQzZCLElBQUk7d0JBQ0xrQixTQUFTO3dCQUNUQyxnQkFBZ0I7d0JBQ2hCQyxZQUFZO29CQUNoQjs7c0NBQ0ksOERBQUNsRCxpRUFBVUE7NEJBQUNtRCxZQUFZOzRCQUFDaEIsU0FBUTs0QkFBS2lCLFdBQVU7c0NBQU07Ozs7OztzQ0FHdEQsOERBQUNsRCxpREFBTUE7NEJBQUNpQyxTQUFROzRCQUFXQyxNQUFLOzRCQUFRTCxPQUFNOzRCQUFVTSxTQUFTVTtzQ0FBaUI7Ozs7Ozs7Ozs7Ozs4QkFJdEYsOERBQUNwQyw0Q0FBR0E7b0JBQUNPLE1BQU1BO29CQUFNQyxTQUFTQTtvQkFBU2tDLE1BQU07b0JBQVN0QyxVQUFVQTtvQkFBVUMsYUFBYUE7Ozs7Ozs4QkFDbkYsOERBQUNKLDZDQUFJQTtvQkFBQ1MsVUFBVUE7b0JBQVVDLGFBQWFBO29CQUFhK0IsTUFBTTtvQkFBU3RDLFVBQVVBO29CQUFVQyxhQUFhQTtvQkFBYU8sV0FBV0E7Ozs7Ozs4QkFDOUgsOERBQUNuQiwyREFBSUE7OEJBQ0Z1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLYjtHQTlEd0JiO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGFza0NhcmQuanN4PzEzMWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcmQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uR3JvdXAgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbUF2YXRhcic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BdmF0YXInO1xuaW1wb3J0IFRhc2tSb3VuZGVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Rhc2tSb3VuZGVkJztcbmltcG9ydCBJbWFnZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9JbWFnZSc7XG5pbXBvcnQgQWRkIGZyb20gJy4vQWRkJztcbmltcG9ydCBFZGl0IGZyb20gJy4vRWRpdCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrQ2FyZCh7dGFza0RhdGEsIHNldFRhc2tEYXRhLCByZWZldGNofSkge1xuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbb3BlbkVkaXQsIHNldE9wZW5FZGl0XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbY3VycmVudElkLCBzZXRDdXJyZW50SWRdID0gUmVhY3QudXNlU3RhdGUobnVsbClcblxuICAgIGNvbnN0IGhhbmRsZU9wZW5FZGl0ID0gKGlkKSA9PiB7XG4gICAgICAgIHNldE9wZW5FZGl0KCFvcGVuRWRpdCk7XG4gICAgICAgIHNldEN1cnJlbnRJZChpZClcbiAgICB9O1xuXG4gICAgY29uc3QgdGFza3MgPSB0YXNrRGF0YS5tYXAoKHRhc2spID0+IFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgPExpc3RJdGVtIHN4PXt7Y29sb3I6XCJ0ZXh0LnNlY29uZGFyeVwifX0ga2V5PXt0YXNrLm5hbWV9IGJ1dHRvbiBzZWNvbmRhcnlBY3Rpb249e1xuICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cCBlZGdlPSdlbmQnPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5FZGl0KHRhc2suaWQpfT5FZGl0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlVGFzayh0YXNrLmlkKX0+RGVsZXRlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgICAgPEF2YXRhcj5cbiAgICAgICAgICAgICAgICA8VGFza1JvdW5kZWRJY29uIC8+XG4gICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGFzay5uYW1lfSBzZWNvbmRhcnk9e21vbWVudCh0YXNrLmR1ZV9ieSkuZm9ybWF0KCdMTEwnKX0gLz5cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICApXG4gICAgKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlVGFzayhpZCl7XG4gICAgICAgIGZldGNoKGAvYXBpL3Rhc2tzLyR7aWR9YCAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHJlZmV0Y2goKSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDbGlja09wZW4gPSAoKSA9PiB7XG4gICAgICAgIHNldE9wZW4oIW9wZW4pO1xuICAgICAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkID5cbiAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgPEJveCBzeD17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgIFRhc2tzXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQ2xpY2tPcGVufT5cbiAgICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8QWRkIG9wZW49e29wZW59IHNldE9wZW49e3NldE9wZW59IHR5cGU9eyd0YXNrcyd9IHRhc2tEYXRhPXt0YXNrRGF0YX0gc2V0VGFza0RhdGE9e3NldFRhc2tEYXRhfS8+XG4gICAgICAgICAgICA8RWRpdCBvcGVuRWRpdD17b3BlbkVkaXR9IHNldE9wZW5FZGl0PXtzZXRPcGVuRWRpdH0gdHlwZT17J3Rhc2tzJ30gdGFza0RhdGE9e3Rhc2tEYXRhfSBzZXRUYXNrRGF0YT17c2V0VGFza0RhdGF9IGN1cnJlbnRJZD17Y3VycmVudElkfS8+XG4gICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICB7dGFza3N9XG4gICAgICAgICAgPC9MaXN0PlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJUeXBvZ3JhcGh5IiwiQm94IiwiQnV0dG9uIiwiQnV0dG9uR3JvdXAiLCJMaXN0IiwiTGlzdEl0ZW0iLCJMaXN0SXRlbUF2YXRhciIsIkxpc3RJdGVtVGV4dCIsIkF2YXRhciIsIlRhc2tSb3VuZGVkSWNvbiIsIkltYWdlSWNvbiIsIkFkZCIsIkVkaXQiLCJtb21lbnQiLCJUYXNrQ2FyZCIsInRhc2tEYXRhIiwic2V0VGFza0RhdGEiLCJyZWZldGNoIiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsIm9wZW5FZGl0Iiwic2V0T3BlbkVkaXQiLCJjdXJyZW50SWQiLCJzZXRDdXJyZW50SWQiLCJoYW5kbGVPcGVuRWRpdCIsImlkIiwidGFza3MiLCJtYXAiLCJ0YXNrIiwic3giLCJjb2xvciIsImJ1dHRvbiIsInNlY29uZGFyeUFjdGlvbiIsImVkZ2UiLCJ2YXJpYW50Iiwic2l6ZSIsIm9uQ2xpY2siLCJoYW5kbGVEZWxldGVUYXNrIiwicHJpbWFyeSIsIm5hbWUiLCJzZWNvbmRhcnkiLCJkdWVfYnkiLCJmb3JtYXQiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJoYW5kbGVDbGlja09wZW4iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZ3V0dGVyQm90dG9tIiwiY29tcG9uZW50IiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TaskCard.jsx\n"));

/***/ })

});