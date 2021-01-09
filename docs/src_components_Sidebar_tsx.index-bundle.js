/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["src_components_Sidebar_tsx"],{

/***/ "./src/actions/categoryActions.tsx":
/*!*****************************************!*\
  !*** ./src/actions/categoryActions.tsx ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    createCategory: function (name) {\n        return {\n            type: 'CREATE_CATEGORY',\n            payload: {\n                name: name,\n            },\n        };\n    },\n    deleteCategory: function (id) {\n        return {\n            type: 'DELETE_CATEGORY',\n            payload: { id: id },\n        };\n    },\n    selectCategory: function (id) {\n        return {\n            type: 'SELECT_CATEGORY',\n            payload: { id: id },\n        };\n    },\n});\n\n\n//# sourceURL=webpack://todo/./src/actions/categoryActions.tsx?");

/***/ }),

/***/ "./src/actions/taskActions.tsx":
/*!*************************************!*\
  !*** ./src/actions/taskActions.tsx ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    createTask: function (text, categoryId) {\n        return {\n            type: 'CREATE_TASK',\n            payload: {\n                text: text,\n                categoryId: categoryId,\n            },\n        };\n    },\n    deleteTask: function (id) {\n        return {\n            type: 'DELETE_TASK',\n            payload: {\n                id: id,\n            },\n        };\n    },\n    toggleCompleteTask: function (id) {\n        return {\n            type: 'TOGGLE_COMPLETE_TASK',\n            payload: {\n                id: id,\n            },\n        };\n    },\n    toggleImportantTask: function (id) {\n        return {\n            type: 'TOGGLE_IMPORTANT_TASK',\n            payload: {\n                id: id,\n            },\n        };\n    },\n    updateTask: function (id, text) {\n        return {\n            type: 'UPDATE_TASK',\n            payload: {\n                id: id,\n                text: text,\n            },\n        };\n    },\n});\n\n\n//# sourceURL=webpack://todo/./src/actions/taskActions.tsx?");

/***/ }),

/***/ "./src/components/Sidebar.tsx":
/*!************************************!*\
  !*** ./src/components/Sidebar.tsx ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _helper_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/constants */ \"./src/helper/constants.tsx\");\n/* harmony import */ var _actions_categoryActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/categoryActions */ \"./src/actions/categoryActions.tsx\");\n/* harmony import */ var _actions_taskActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/taskActions */ \"./src/actions/taskActions.tsx\");\n\n\n\n\n\nvar ALL_TASKS_CAT_ID = _helper_constants__WEBPACK_IMPORTED_MODULE_2__.default.ALL_TASKS_CAT_ID, IMPORTANT_CAT_ID = _helper_constants__WEBPACK_IMPORTED_MODULE_2__.default.IMPORTANT_CAT_ID;\nvar createCategory = _actions_categoryActions__WEBPACK_IMPORTED_MODULE_3__.default.createCategory, deleteCategory = _actions_categoryActions__WEBPACK_IMPORTED_MODULE_3__.default.deleteCategory, selectCategory = _actions_categoryActions__WEBPACK_IMPORTED_MODULE_3__.default.selectCategory;\nvar deleteTask = _actions_taskActions__WEBPACK_IMPORTED_MODULE_4__.default.deleteTask;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (_a, ref) {\n    var _b;\n    var onSidebarToggle = _a.onSidebarToggle;\n    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), input = _c[0], setInput = _c[1];\n    var categories = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) { return state.categories; });\n    var tasks = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) { return state.tasks; });\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    function handleCreateCategory(e) {\n        e.preventDefault();\n        if (input)\n            dispatch(createCategory(input));\n        setInput('');\n    }\n    function handleSelectCategory(e) {\n        var id = e.currentTarget.attributes['data-catid'].value;\n        dispatch(selectCategory(id));\n        onSidebarToggle();\n    }\n    function handleDeleteCategory(e) {\n        e.stopPropagation();\n        var id = e.target.parentElement.attributes['data-catid'].value;\n        dispatch(deleteCategory(id));\n        tasks.forEach(function (task) {\n            if (task.categoryId === id)\n                dispatch(deleteTask(task.id));\n        });\n    }\n    function handleInput(e) {\n        setInput(e.target.value);\n    }\n    var activeTasks = tasks.filter(function (task) { return task.completed === false; });\n    var importantTasks = activeTasks.filter(function (task) { return task.important; });\n    var tasksNumbers = Object.create(null);\n    tasksNumbers = (_b = {},\n        _b[IMPORTANT_CAT_ID] = importantTasks.length,\n        _b[ALL_TASKS_CAT_ID] = activeTasks.length,\n        _b);\n    categories.forEach(function (cat) {\n        if (![ALL_TASKS_CAT_ID, IMPORTANT_CAT_ID].includes(cat.id))\n            tasksNumbers[cat.id] = activeTasks.filter(function (task) { return task.categoryId === cat.id; }).length;\n    });\n    var categoryElements = categories.map(function (cat) {\n        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"sidebar__category \" + (cat.selected ? 'sidebar__category_active' : ''), key: cat.id, onPointerDown: handleSelectCategory, \"data-catid\": cat.id },\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"sidebar__cat-icon sidebar__cat-icon_\" + cat.icon + \" icon\" }),\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", { className: 'sidebar__cat-text' }, cat.name),\n            cat.deletable ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: 'icon application__trash-icon', onPointerDown: handleDeleteCategory })) : null,\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", { className: 'sidebar__tasks-number' }, tasksNumbers[cat.id])));\n    });\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: 'sidebar', ref: ref },\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: 'sidebar__title' },\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: 'sidebar__title-text' }, \"Category list\")),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: 'sidebar__categories' }, categoryElements),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: 'sidebar__input input' },\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: 'sidebar__icon icon' }),\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", { onSubmit: handleCreateCategory },\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", { type: 'text', className: 'input-field', placeholder: 'New category', onChange: handleInput, value: input })))));\n}));\n\n\n//# sourceURL=webpack://todo/./src/components/Sidebar.tsx?");

/***/ })

}]);