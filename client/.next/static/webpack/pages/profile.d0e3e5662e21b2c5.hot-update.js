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

/***/ "./components/EditProfile.jsx":
/*!************************************!*\
  !*** ./components/EditProfile.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditProfile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Dialog */ \"./node_modules/@mui/material/Dialog/index.js\");\n/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/DialogActions */ \"./node_modules/@mui/material/DialogActions/index.js\");\n/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/DialogContent */ \"./node_modules/@mui/material/DialogContent/index.js\");\n/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/DialogTitle */ \"./node_modules/@mui/material/DialogTitle/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _mui_icons_material_CloseRounded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/CloseRounded */ \"./node_modules/@mui/icons-material/CloseRounded.js\");\n/* harmony import */ var _mui_material_Slide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Slide */ \"./node_modules/@mui/material/Slide/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst Transition = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(_c = function Transition(props, ref) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Slide__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        direction: \"up\",\n        ref: ref,\n        ...props\n    }, void 0, false, {\n        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/EditProfile.jsx\",\n        lineNumber: 15,\n        columnNumber: 10\n    }, this);\n});\n_c1 = Transition;\nfunction EditProfile(param) {\n    let { open , setOpen  } = param;\n    _s();\n    const globalState = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.GlobalState);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [formData, setFormData] = react__WEBPACK_IMPORTED_MODULE_1__.useState({\n        first_name: globalState.state.user.first_name,\n        last_name: globalState.state.user.last_name,\n        email: globalState.state.user.email,\n        username: globalState.state.user.username\n    });\n    function handleClose() {\n        setOpen(false);\n    }\n    ;\n    function handleChange(e) {\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    }\n    function handleProfileChange(e) {\n        handleClose();\n        e.preventDefault();\n        fetch(\"/api/users/\".concat(globalState.state.user.id), {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(formData)\n        }).then((r)=>{\n            if (r.ok) {\n                return r.json();\n            } else {\n                console.log(\"Failed to update profile\");\n            }\n        }).then((data)=>globalState.dispatch({\n                type: \"EDIT\",\n                payload: data\n            })).then(()=>router.push(\"/profile\"));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            open: open,\n            TransitionComponent: Transition,\n            keepMounted: true,\n            onClose: handleClose,\n            \"aria-describedby\": \"alert-dialog-slide-description\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    \"aria-label\": \"close\",\n                    size: \"small\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_CloseRounded__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        fontSize: \"inherit\",\n                        onClick: handleClose\n                    }, void 0, false, {\n                        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/EditProfile.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/EditProfile.jsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    children: \"Edit Profile\"\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/EditProfile.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        justifyContent: \"center\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            autoFocus: true,\n                            id: \"standard-first-name\",\n                            label: \"First Name\",\n                            variant: \"standard\",\n                            name: \"first_name\",\n                            size: \"small\",\n                            value: formData.first_name,\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/EditProfile.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 12\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            id: \"standard-last-name\",\n                            label: \"Last Name\",\n                            variant: \"standard\",\n                            name: \"last_name\",\n                            size: \"small\",\n                            value: formData.last_name,\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/EditProfile.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            id: \"standard-username\",\n                            label: \"Username\",\n                            fullWidth: true,\n                            variant: \"standard\",\n                            name: \"username\",\n                            size: \"small\",\n                            value: formData.username,\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/EditProfile.jsx\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            id: \"standard-email\",\n                            label: \"Email Address\",\n                            type: \"email\",\n                            fullWidth: true,\n                            variant: \"standard\",\n                            name: \"email\",\n                            size: \"small\",\n                            value: formData.email,\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/EditProfile.jsx\",\n                            lineNumber: 108,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/EditProfile.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                        onClick: handleProfileChange,\n                        children: \"Save\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/EditProfile.jsx\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/EditProfile.jsx\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/EditProfile.jsx\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sterlingbarton/Desktop/project-iris/client/components/EditProfile.jsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(EditProfile, \"y9hxkOoN7TVBeMpYrlNz1uHvSFQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c2 = EditProfile;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Transition$React.forwardRef\");\n$RefreshReg$(_c1, \"Transition\");\n$RefreshReg$(_c2, \"EditProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7c0NBRVosOERBQUMvQixnRUFBU0E7NEJBQ1J1QyxJQUFHOzRCQUNIOEIsT0FBTTs0QkFDTmhCLE1BQUs7NEJBQ0xtQixTQUFTOzRCQUNURixTQUFROzRCQUNScEMsTUFBSzs0QkFDTDRCLE1BQUs7NEJBQ0wzQixPQUFPZCxTQUFTTzs0QkFDaEIyQyxVQUFVeEM7Ozs7Ozs7Ozs7Ozs4QkFHaEIsOERBQUM3QixvRUFBYUE7OEJBQ1osNEVBQUNILDZEQUFNQTt3QkFBQ2lFLFNBQVM1QjtrQ0FBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEQ7R0E1R3dCckI7O1FBRVBOLGtEQUFTQTs7O01BRkZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRWRpdFByb2ZpbGUuanN4PzJiN2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG11aS9tYXRlcmlhbC9EaWFsb2cnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG11aS9tYXRlcmlhbC9EaWFsb2dBY3Rpb25zJztcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG11aS9tYXRlcmlhbC9EaWFsb2dUaXRsZSc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xuaW1wb3J0IENsb3NlUm91bmRlZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZVJvdW5kZWQnO1xuaW1wb3J0IFNsaWRlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU2xpZGUnO1xuaW1wb3J0IHsgR2xvYmFsU3RhdGUgfSBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IFRyYW5zaXRpb24gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRyYW5zaXRpb24ocHJvcHMsIHJlZikge1xuICByZXR1cm4gPFNsaWRlIGRpcmVjdGlvbj1cInVwXCIgcmVmPXtyZWZ9IHsuLi5wcm9wc30gLz47XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdFByb2ZpbGUoe29wZW4sIHNldE9wZW59KSB7XG4gIGNvbnN0IGdsb2JhbFN0YXRlID0gUmVhY3QudXNlQ29udGV4dChHbG9iYWxTdGF0ZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIGZpcnN0X25hbWU6IGdsb2JhbFN0YXRlLnN0YXRlLnVzZXIuZmlyc3RfbmFtZSxcbiAgICBsYXN0X25hbWU6IGdsb2JhbFN0YXRlLnN0YXRlLnVzZXIubGFzdF9uYW1lLFxuICAgIGVtYWlsOiBnbG9iYWxTdGF0ZS5zdGF0ZS51c2VyLmVtYWlsLFxuICAgIHVzZXJuYW1lOiBnbG9iYWxTdGF0ZS5zdGF0ZS51c2VyLnVzZXJuYW1lLFxuICB9KVxuXG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xvc2UoKSB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfSBcblxuICBmdW5jdGlvbiBoYW5kbGVQcm9maWxlQ2hhbmdlKGUpe1xuICAgIGhhbmRsZUNsb3NlKClcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBmZXRjaChgL2FwaS91c2Vycy8ke2dsb2JhbFN0YXRlLnN0YXRlLnVzZXIuaWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpXG4gICAgfSlcbiAgICAudGhlbigocikgPT4ge1xuICAgICAgaWYgKHIub2spe1xuICAgICAgICByZXR1cm4gci5qc29uKClcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGUnKVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oZGF0YSA9PiBnbG9iYWxTdGF0ZS5kaXNwYXRjaCh7IHR5cGU6ICdFRElUJywgcGF5bG9hZDogZGF0YSB9KSlcbiAgICAudGhlbigoKSA9PiByb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKSlcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPERpYWxvZ1xuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBUcmFuc2l0aW9uQ29tcG9uZW50PXtUcmFuc2l0aW9ufVxuICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImFsZXJ0LWRpYWxvZy1zbGlkZS1kZXNjcmlwdGlvblwiXG4gICAgICA+XG4gICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJjbG9zZVwiIHNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgIDxDbG9zZVJvdW5kZWRJY29uIGZvbnRTaXplPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfS8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPERpYWxvZ1RpdGxlPntcIkVkaXQgUHJvZmlsZVwifTwvRGlhbG9nVGl0bGU+XG4gICAgICAgIDxEaWFsb2dDb250ZW50IHN4PXt7XG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgICAgICB9fT5cbiAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1maXJzdC1uYW1lXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcbiAgICAgICAgICAgICAgbmFtZT0nZmlyc3RfbmFtZSdcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmZpcnN0X25hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLWxhc3QtbmFtZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcbiAgICAgICAgICAgICAgbmFtZT0nbGFzdF9uYW1lJ1xuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubGFzdF9uYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC11c2VybmFtZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcbiAgICAgICAgICAgICAgbmFtZT0ndXNlcm5hbWUnXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS51c2VybmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtZW1haWxcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcbiAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQcm9maWxlQ2hhbmdlfT5TYXZlPC9CdXR0b24+XG4gICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIlRleHRGaWVsZCIsIkRpYWxvZyIsIkRpYWxvZ0FjdGlvbnMiLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nVGl0bGUiLCJJY29uQnV0dG9uIiwiQ2xvc2VSb3VuZGVkSWNvbiIsIlNsaWRlIiwiR2xvYmFsU3RhdGUiLCJ1c2VSb3V0ZXIiLCJUcmFuc2l0aW9uIiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwiZGlyZWN0aW9uIiwiRWRpdFByb2ZpbGUiLCJvcGVuIiwic2V0T3BlbiIsImdsb2JhbFN0YXRlIiwidXNlQ29udGV4dCIsInJvdXRlciIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ1c2VTdGF0ZSIsImZpcnN0X25hbWUiLCJzdGF0ZSIsInVzZXIiLCJsYXN0X25hbWUiLCJlbWFpbCIsInVzZXJuYW1lIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlUHJvZmlsZUNoYW5nZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJpZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyIiwib2siLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJkaXNwYXRjaCIsInR5cGUiLCJwYXlsb2FkIiwicHVzaCIsImRpdiIsIlRyYW5zaXRpb25Db21wb25lbnQiLCJrZWVwTW91bnRlZCIsIm9uQ2xvc2UiLCJhcmlhLWRlc2NyaWJlZGJ5IiwiYXJpYS1sYWJlbCIsInNpemUiLCJmb250U2l6ZSIsIm9uQ2xpY2siLCJzeCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImF1dG9Gb2N1cyIsImxhYmVsIiwidmFyaWFudCIsIm9uQ2hhbmdlIiwiZnVsbFdpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/EditProfile.jsx\n"));

/***/ })

});