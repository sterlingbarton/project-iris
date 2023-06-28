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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TaskCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/List/index.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/ListItem */ \"./node_modules/@mui/material/ListItem/index.js\");\n/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ \"./node_modules/@mui/material/ListItemAvatar/index.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/ListItemText/index.js\");\n/* harmony import */ var _mui_icons_material_TaskRounded__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/TaskRounded */ \"./node_modules/@mui/icons-material/TaskRounded.js\");\n/* harmony import */ var _Add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Add */ \"./components/Add.jsx\");\n/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Edit */ \"./components/Edit.jsx\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction TaskCard(param) {\n    let { taskData , setTaskData , refetch  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [openEdit, setOpenEdit] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [currentId, setCurrentId] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);\n    const handleOpenEdit = (id)=>{\n        setOpenEdit(!openEdit);\n        setCurrentId(id);\n    };\n    const tasks = taskData.map((task, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            sx: {\n                color: \"text.secondary\"\n            },\n            button: true,\n            secondaryAction: router.pathname === \"/tasks\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.ButtonGroup, {\n                edge: \"end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        variant: \"outlined\",\n                        size: \"small\",\n                        color: \"primary\",\n                        onClick: ()=>handleOpenEdit(task.id),\n                        children: \"Edit\"\n                    }, void 0, false, void 0, void 0),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        variant: \"outlined\",\n                        size: \"small\",\n                        color: \"primary\",\n                        onClick: ()=>handleDeleteTask(task.id),\n                        children: \"Delete\"\n                    }, void 0, false, void 0, void 0)\n                ]\n            }, void 0, true, void 0, void 0),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_TaskRounded__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    primary: task.name,\n                    secondary: moment__WEBPACK_IMPORTED_MODULE_5___default()(task.due_by).format(\"LLL\")\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, index, true, {\n            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, this));\n    function handleDeleteTask(id) {\n        fetch(\"/api/tasks/\".concat(id), {\n            method: \"DELETE\"\n        }).then(()=>refetch());\n    }\n    const handleClickOpen = ()=>{\n        setOpen(!open);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        justifyContent: \"space-between\",\n                        alignItems: \"center\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                            gutterBottom: true,\n                            variant: \"h5\",\n                            component: \"div\",\n                            children: \"Tasks\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 17\n                        }, this),\n                        router.pathname === \"/tasks\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            variant: \"outlined\",\n                            size: \"small\",\n                            color: \"primary\",\n                            onClick: handleClickOpen,\n                            children: \"+\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Add__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    open: open,\n                    setOpen: setOpen,\n                    type: \"tasks\",\n                    taskData: taskData,\n                    setTaskData: setTaskData\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Edit__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    openEdit: openEdit,\n                    setOpenEdit: setOpenEdit,\n                    type: \"tasks\",\n                    taskData: taskData,\n                    setTaskData: setTaskData,\n                    currentId: currentId\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                    lineNumber: 76,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n                    children: tasks\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n            lineNumber: 60,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/TaskCard.jsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(TaskCard, \"mURHe3lRtvCGnj2RcXjUdxwv64Q=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = TaskCard;\nvar _c;\n$RefreshReg$(_c, \"TaskCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rhc2tDYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNPO0FBQ0E7QUFDYztBQUNGO0FBQ2Q7QUFDZ0I7QUFDZDtBQUNRO0FBQ1k7QUFDSjtBQUNRO0FBQ3RDO0FBQ0M7QUFDRztBQUdiLFNBQVNnQixTQUFTLEtBQWdDO1FBQWhDLEVBQUNDLFNBQVEsRUFBRUMsWUFBVyxFQUFFQyxRQUFPLEVBQUMsR0FBaEM7O0lBQzdCLE1BQU1DLFNBQVNuQixzREFBU0E7SUFFeEIsTUFBTSxDQUFDb0IsTUFBTUMsUUFBUSxHQUFHdEIsMkNBQWN1QixDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHekIsMkNBQWN1QixDQUFDO0lBQy9DLE1BQU0sQ0FBQ0csV0FBV0MsYUFBYSxHQUFHM0IsMkNBQWN1QixDQUFDO0lBRWpELE1BQU1LLGlCQUFpQixDQUFDQztRQUNwQkosWUFBWSxDQUFDRDtRQUNiRyxhQUFhRTtJQUNqQjtJQUVBLE1BQU1DLFFBQVFiLFNBQVNjLElBQUksQ0FBQ0MsTUFBTUMsc0JBRTFCLDhEQUFDeEIsOERBQVFBO1lBQUN5QixJQUFJO2dCQUFDQyxPQUFNO1lBQWdCO1lBQWVDLE1BQU07WUFBQ0MsaUJBQ3ZEakIsT0FBT2tCLGFBQWEsMEJBQ25CLDhEQUFDL0Isc0RBQVdBO2dCQUFDZ0MsTUFBSzs7a0NBQ2YsOERBQUNqQyxpREFBTUE7d0JBQUNrQyxTQUFRO3dCQUFXQyxNQUFLO3dCQUFRTixPQUFNO3dCQUFVTyxTQUFTLElBQU1kLGVBQWVJLEtBQUtIO2tDQUFLOztrQ0FDaEcsOERBQUN2QixpREFBTUE7d0JBQUNrQyxTQUFRO3dCQUFXQyxNQUFLO3dCQUFRTixPQUFNO3dCQUFVTyxTQUFTLElBQU1DLGlCQUFpQlgsS0FBS0g7a0NBQUs7Ozs7OzhCQUcxRyw4REFBQ25CLG9FQUFjQTs4QkFDWCw0RUFBQ0UsdUVBQWVBOzs7Ozs7Ozs7OzhCQUVwQiw4REFBQ0QsbUVBQVlBO29CQUFDaUMsU0FBU1osS0FBS2E7b0JBQU1DLFdBQVcvQiw2Q0FBTUEsQ0FBQ2lCLEtBQUtlLFFBQVFDLE9BQU87Ozs7Ozs7V0FWM0JmOzs7OztJQWVyRCxTQUFTVSxpQkFBaUJkLEVBQUU7UUFDeEJvQixNQUFNLGNBQWlCLE9BQUhwQixLQUFPO1lBQ3ZCcUIsUUFBUTtRQUNaLEdBQ0NDLEtBQUssSUFBTWhDO0lBQ2hCO0lBRUEsTUFBTWlDLGtCQUFrQjtRQUNwQjlCLFFBQVEsQ0FBQ0Q7SUFDWDtJQUVKLHFCQUNFLDhEQUFDbkIsMkRBQUlBO2tCQUNELDRFQUFDQyxrRUFBV0E7OzhCQUNSLDhEQUFDRSwwREFBR0E7b0JBQUM2QixJQUFJO3dCQUNMbUIsU0FBUzt3QkFDVEMsZ0JBQWdCO3dCQUNoQkMsWUFBWTtvQkFDaEI7O3NDQUNJLDhEQUFDbkQsaUVBQVVBOzRCQUFDb0QsWUFBWTs0QkFBQ2hCLFNBQVE7NEJBQUtpQixXQUFVO3NDQUFNOzs7Ozs7d0JBR3JEckMsT0FBT2tCLGFBQWEsMEJBQ2pCLDhEQUFDaEMsaURBQU1BOzRCQUFDa0MsU0FBUTs0QkFBV0MsTUFBSzs0QkFBUU4sT0FBTTs0QkFBVU8sU0FBU1U7c0NBQWlCOzs7Ozs7Ozs7Ozs7OEJBSzFGLDhEQUFDdkMsNENBQUdBO29CQUFDUSxNQUFNQTtvQkFBTUMsU0FBU0E7b0JBQVNvQyxNQUFNO29CQUFTekMsVUFBVUE7b0JBQVVDLGFBQWFBOzs7Ozs7OEJBQ25GLDhEQUFDSiw2Q0FBSUE7b0JBQUNVLFVBQVVBO29CQUFVQyxhQUFhQTtvQkFBYWlDLE1BQU07b0JBQVN6QyxVQUFVQTtvQkFBVUMsYUFBYUE7b0JBQWFRLFdBQVdBOzs7Ozs7OEJBQzlILDhEQUFDbEIsMkRBQUlBOzhCQUNGc0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2I7R0FqRXdCZDs7UUFDTGYsa0RBQVNBOzs7S0FESmUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYXNrQ2FyZC5qc3g/MTMxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IENhcmQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uR3JvdXAgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbUF2YXRhcic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBUYXNrUm91bmRlZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9UYXNrUm91bmRlZCc7XG5pbXBvcnQgQWRkIGZyb20gJy4vQWRkJztcbmltcG9ydCBFZGl0IGZyb20gJy4vRWRpdCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrQ2FyZCh7dGFza0RhdGEsIHNldFRhc2tEYXRhLCByZWZldGNofSkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW29wZW5FZGl0LCBzZXRPcGVuRWRpdF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2N1cnJlbnRJZCwgc2V0Q3VycmVudElkXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXG5cbiAgICBjb25zdCBoYW5kbGVPcGVuRWRpdCA9IChpZCkgPT4ge1xuICAgICAgICBzZXRPcGVuRWRpdCghb3BlbkVkaXQpO1xuICAgICAgICBzZXRDdXJyZW50SWQoaWQpXG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2tzID0gdGFza0RhdGEubWFwKCh0YXNrLCBpbmRleCkgPT4gXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICA8TGlzdEl0ZW0gc3g9e3tjb2xvcjpcInRleHQuc2Vjb25kYXJ5XCJ9fSBrZXk9e2luZGV4fSBidXR0b24gc2Vjb25kYXJ5QWN0aW9uPXtcbiAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09ICcvdGFza3MnICYmIFxuICAgICAgICAgICAgICAgICg8QnV0dG9uR3JvdXAgZWRnZT0nZW5kJz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcGVuRWRpdCh0YXNrLmlkKX0+RWRpdDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZVRhc2sodGFzay5pZCl9PkRlbGV0ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+KVxuICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICAgIDxUYXNrUm91bmRlZEljb24gLz5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3Rhc2submFtZX0gc2Vjb25kYXJ5PXttb21lbnQodGFzay5kdWVfYnkpLmZvcm1hdCgnTExMJyl9IC8+XG4gICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgKVxuICAgIClcblxuICAgIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZVRhc2soaWQpe1xuICAgICAgICBmZXRjaChgL2FwaS90YXNrcy8ke2lkfWAgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiByZWZldGNoKCkpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPcGVuID0gKCkgPT4ge1xuICAgICAgICBzZXRPcGVuKCFvcGVuKTtcbiAgICAgIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZD5cbiAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgPEJveCBzeD17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgIFRhc2tzXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09ICcvdGFza3MnICYmIFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrT3Blbn0+XG4gICAgICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8QWRkIG9wZW49e29wZW59IHNldE9wZW49e3NldE9wZW59IHR5cGU9eyd0YXNrcyd9IHRhc2tEYXRhPXt0YXNrRGF0YX0gc2V0VGFza0RhdGE9e3NldFRhc2tEYXRhfS8+XG4gICAgICAgICAgICA8RWRpdCBvcGVuRWRpdD17b3BlbkVkaXR9IHNldE9wZW5FZGl0PXtzZXRPcGVuRWRpdH0gdHlwZT17J3Rhc2tzJ30gdGFza0RhdGE9e3Rhc2tEYXRhfSBzZXRUYXNrRGF0YT17c2V0VGFza0RhdGF9IGN1cnJlbnRJZD17Y3VycmVudElkfS8+XG4gICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICB7dGFza3N9XG4gICAgICAgICAgPC9MaXN0PlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJUeXBvZ3JhcGh5IiwiQm94IiwiQnV0dG9uIiwiQnV0dG9uR3JvdXAiLCJMaXN0IiwiTGlzdEl0ZW0iLCJMaXN0SXRlbUF2YXRhciIsIkxpc3RJdGVtVGV4dCIsIlRhc2tSb3VuZGVkSWNvbiIsIkFkZCIsIkVkaXQiLCJtb21lbnQiLCJUYXNrQ2FyZCIsInRhc2tEYXRhIiwic2V0VGFza0RhdGEiLCJyZWZldGNoIiwicm91dGVyIiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsIm9wZW5FZGl0Iiwic2V0T3BlbkVkaXQiLCJjdXJyZW50SWQiLCJzZXRDdXJyZW50SWQiLCJoYW5kbGVPcGVuRWRpdCIsImlkIiwidGFza3MiLCJtYXAiLCJ0YXNrIiwiaW5kZXgiLCJzeCIsImNvbG9yIiwiYnV0dG9uIiwic2Vjb25kYXJ5QWN0aW9uIiwicGF0aG5hbWUiLCJlZGdlIiwidmFyaWFudCIsInNpemUiLCJvbkNsaWNrIiwiaGFuZGxlRGVsZXRlVGFzayIsInByaW1hcnkiLCJuYW1lIiwic2Vjb25kYXJ5IiwiZHVlX2J5IiwiZm9ybWF0IiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwiaGFuZGxlQ2xpY2tPcGVuIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImd1dHRlckJvdHRvbSIsImNvbXBvbmVudCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TaskCard.jsx\n"));

/***/ })

});