/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["src_components_Application_tsx"],{

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

/***/ "./src/components/Application.tsx":
/*!****************************************!*\
  !*** ./src/components/Application.tsx ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Application\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _reducers_allReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/allReducer */ \"./src/reducers/allReducer.tsx\");\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar */ \"./src/components/Sidebar.tsx\");\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Main */ \"./src/components/Main.tsx\");\n/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Style */ \"./src/components/Style.tsx\");\n/* harmony import */ var _MediaStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MediaStyle */ \"./src/components/MediaStyle.tsx\");\n/* harmony import */ var _helper_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helper/constants */ \"./src/helper/constants.tsx\");\n\n\n\n\n\n\n\n\nvar DEFAULT_THEME = _helper_constants__WEBPACK_IMPORTED_MODULE_6__.default.DEFAULT_THEME;\nvar store = (0,redux__WEBPACK_IMPORTED_MODULE_7__.createStore)(_reducers_allReducer__WEBPACK_IMPORTED_MODULE_1__.default);\nfunction Application() {\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(localStorage.getItem('theme') || DEFAULT_THEME), theme = _a[0], setTheme = _a[1];\n    var sidebarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    var sidebarIconRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    function sidebarToggle() {\n        var sidebar = sidebarRef.current;\n        var sidebarIcon = sidebarIconRef.current;\n        sidebar === null || sidebar === void 0 ? void 0 : sidebar.classList.toggle('sidebar_shown');\n        sidebarIcon === null || sidebarIcon === void 0 ? void 0 : sidebarIcon.classList.toggle('main__sidebar-icon_closing');\n    }\n    function toggleTheme() {\n        var currentTheme;\n        setTheme(function (prevTheme) {\n            currentTheme = prevTheme === 'dark' ? 'light' : 'dark';\n            localStorage.setItem('theme', currentTheme);\n            return currentTheme;\n        });\n    }\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.default, { theme: theme }),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MediaStyle__WEBPACK_IMPORTED_MODULE_5__.default, null),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_2__.default, { ref: sidebarRef, onSidebarToggle: sidebarToggle }),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Main__WEBPACK_IMPORTED_MODULE_3__.default, { ref: sidebarIconRef, onToggleTheme: toggleTheme, onSidebarToggle: sidebarToggle })));\n}\n\n\n//# sourceURL=webpack://todo/./src/components/Application.tsx?");

/***/ }),

/***/ "./src/components/Main.tsx":
/*!*********************************!*\
  !*** ./src/components/Main.tsx ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _TaskContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskContainer */ \"./src/components/TaskContainer.tsx\");\n/* harmony import */ var _actions_taskActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/taskActions */ \"./src/actions/taskActions.tsx\");\n/* harmony import */ var _helper_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/constants */ \"./src/helper/constants.tsx\");\n\n\n\n\n\nvar createTask = _actions_taskActions__WEBPACK_IMPORTED_MODULE_3__.default.createTask;\nvar ALL_TASKS_CAT_ID = _helper_constants__WEBPACK_IMPORTED_MODULE_4__.default.ALL_TASKS_CAT_ID, IMPORTANT_CAT_ID = _helper_constants__WEBPACK_IMPORTED_MODULE_4__.default.IMPORTANT_CAT_ID;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (_a, ref) {\n    var onToggleTheme = _a.onToggleTheme, onSidebarToggle = _a.onSidebarToggle;\n    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), input = _b[0], setInput = _b[1];\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    var categories = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) { return state.categories; });\n    var tasks = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) { return state.tasks; });\n    var toggleContainerButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    var taskContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    var completedTaskContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    var currentCategory = categories.find(function (cat) { return cat.selected; }) || categories[0];\n    var activeTasks = tasks.filter(function (task) { return task.completed === false; });\n    var importantTasks = activeTasks.filter(function (task) { return task.important; });\n    var completedTasks = tasks.filter(function (task) { return task.completed; });\n    var currentTasks;\n    if (currentCategory.id === IMPORTANT_CAT_ID) {\n        currentTasks = importantTasks;\n    }\n    else if (currentCategory.id === ALL_TASKS_CAT_ID) {\n        currentTasks = activeTasks;\n    }\n    else {\n        currentTasks = activeTasks.filter(function (task) { return task.categoryId === currentCategory.id; });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n        var _a;\n        console.log(inputRef);\n        toggleTaskContainer();\n        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();\n    }, []);\n    function handleInput(e) {\n        setInput(e.target.value);\n    }\n    function handleCreateTask(e) {\n        e.preventDefault();\n        if (input) {\n            dispatch(createTask(input, currentCategory.id));\n            setInput('');\n        }\n    }\n    function toggleTaskContainer() {\n        var completedTaskContainer = completedTaskContainerRef.current;\n        var taskContainer = taskContainerRef.current;\n        var toggleContainerButton = toggleContainerButtonRef.current;\n        completedTaskContainer === null || completedTaskContainer === void 0 ? void 0 : completedTaskContainer.classList.toggle('completed-task-container_hidden');\n        taskContainer === null || taskContainer === void 0 ? void 0 : taskContainer.classList.toggle('task-container_hidden');\n        toggleContainerButton === null || toggleContainerButton === void 0 ? void 0 : toggleContainerButton.classList.toggle('completed-task-container__arrow_down');\n        toggleContainerButton === null || toggleContainerButton === void 0 ? void 0 : toggleContainerButton.classList.toggle('completed-task-container__arrow_right');\n    }\n    function handeSidebarToggle() {\n        onSidebarToggle();\n    }\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: 'main' },\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: 'main__sidebar-icon icon', onPointerDown: handeSidebarToggle, ref: ref }),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: 'main__title' },\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"main__title-icon sidebar__cat-icon_\" + currentCategory.icon + \" icon \" }),\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", { className: 'main__title-text' }, currentCategory.name),\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: 'main__theme-switcher', onPointerDown: onToggleTheme },\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: 'main__theme-switcher-icon' }))),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: 'active-task-container' },\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TaskContainer__WEBPACK_IMPORTED_MODULE_2__.default, { category: currentCategory, tasks: currentTasks })),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: 'completed-task-container', ref: completedTaskContainerRef },\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: 'completed-task-container__toggle', onPointerDown: toggleTaskContainer },\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: 'completed-task-container__arrow completed-task-container__arrow_down icon', ref: toggleContainerButtonRef }),\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", { className: 'completed-task-container__text' },\n                    \"Completed\",\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", { className: 'completed-task-container__tasks-number' }, completedTasks.length))),\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TaskContainer__WEBPACK_IMPORTED_MODULE_2__.default, { ref: taskContainerRef, tasks: completedTasks })),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: 'main__input input' },\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: 'main__icon icon' }),\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", { className: 'main__form', onSubmit: handleCreateTask },\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", { type: 'text', className: 'input-field main__input-field', placeholder: 'Add a task', value: input, onChange: handleInput, ref: inputRef })))));\n}));\n\n\n//# sourceURL=webpack://todo/./src/components/Main.tsx?");

/***/ }),

/***/ "./src/components/MediaStyle.tsx":
/*!***************************************!*\
  !*** ./src/components/MediaStyle.tsx ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ MediaStyle\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _img_star_hovered_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/star_hovered.svg */ \"./src/img/star_hovered.svg\");\n/* harmony import */ var _img_trash_hovered_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/trash_hovered.svg */ \"./src/img/trash_hovered.svg\");\n\n\n\nfunction MediaStyle(props) {\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"style\", null, \"\\n        @media (min-width: 651px){\\n          .application__trash-icon:hover {\\n            background-image: url('\" + _img_trash_hovered_svg__WEBPACK_IMPORTED_MODULE_2__.default + \"');\\n          }\\n          .task-container__task-star:hover {\\n            background-image: url('\" + _img_star_hovered_svg__WEBPACK_IMPORTED_MODULE_1__.default + \"');\\n            transition: 0.13s;\\n          }\\n        }\\n\\n        @media (max-height: 700px) {\\n          .sidebar {\\n            height: 100%;\\n          }\\n          .main{\\n            height: 100%;\\n          }\\n        }\\n\\n        @media (max-width: 650px) {\\n          .sidebar {\\n            width: 50%;\\n            height: 100%;\\n            position: absolute;\\n            transition: 0.2s ease-in;\\n            z-index: 15;\\n            left: 0;\\n            transform: translateX(-100%);\\n          }\\n        \\n          .sidebar__tasks-number {\\n            margin-right: 15px;\\n          }\\n        \\n          .sidebar_shown {\\n            transform: translateX(0%);\\n            transition: 0.2s ease-in;\\n            z-index: 15;\\n            width: 70%;\\n          }\\n        \\n          .main {\\n            height: 100%;\\n          }\\n        \\n          .main__sidebar-icon {\\n            display: inline-block;\\n            z-index: 20;\\n          }\\n        \\n          @keyframes icon-open-animation {\\n            from {\\n              transform: rotate(180deg) translateX(18px);\\n            }\\n        \\n            to {\\n              transform: rotate(180deg) translateX(18px) translateX(-70vw);\\n            }\\n          }\\n        \\n          .main__sidebar-icon_closing {\\n            animation: icon-open-animation 0.2s ease-in;\\n            animation-fill-mode: forwards;\\n          }\\n        }\\n        \\n      \"));\n}\n\n\n//# sourceURL=webpack://todo/./src/components/MediaStyle.tsx?");

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

/***/ }),

/***/ "./src/components/Style.tsx":
/*!**********************************!*\
  !*** ./src/components/Style.tsx ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Style\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _img_trash_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/trash.svg */ \"./src/img/trash.svg\");\n/* harmony import */ var _img_star_cat_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/star_cat_icon.svg */ \"./src/img/star_cat_icon.svg\");\n/* harmony import */ var _img_home_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/home.svg */ \"./src/img/home.svg\");\n/* harmony import */ var _img_icon_cat_default_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/icon_cat_default.svg */ \"./src/img/icon_cat_default.svg\");\n/* harmony import */ var _img_plus_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/plus.svg */ \"./src/img/plus.svg\");\n/* harmony import */ var _img_sidebar_icon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/sidebar_icon.svg */ \"./src/img/sidebar_icon.svg\");\n/* harmony import */ var _img_checkbox_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/checkbox.svg */ \"./src/img/checkbox.svg\");\n/* harmony import */ var _img_star_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/star.svg */ \"./src/img/star.svg\");\n/* harmony import */ var _img_star_acitve_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/star_acitve.svg */ \"./src/img/star_acitve.svg\");\n/* harmony import */ var _img_arrow_down_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/arrow_down.svg */ \"./src/img/arrow_down.svg\");\n/* harmony import */ var _img_arrow_right_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/arrow_right.svg */ \"./src/img/arrow_right.svg\");\n/* harmony import */ var _colorThemes_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../colorThemes.json */ \"./src/colorThemes.json\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Style(props) {\n    var _a = _colorThemes_json__WEBPACK_IMPORTED_MODULE_12__[props.theme], globalBackgroundColor = _a.globalBackgroundColor, mainBackgroundColor = _a.mainBackgroundColor, sidebarBackgroundColor = _a.sidebarBackgroundColor, backgroundActiveCatColor = _a.backgroundActiveCatColor, backgroundHoveredItemColor = _a.backgroundHoveredItemColor, defaultGrayColor = _a.defaultGrayColor, accentColor = _a.accentColor, splitterLineColor = _a.splitterLineColor, textColor = _a.textColor;\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"style\", null, \"\\n        * {\\n          box-sizing: border-box;\\n          margin: 0px;\\n          padding: 0px;\\n        }\\n        :root {\\n          --global-background-color: \" + globalBackgroundColor + \";\\n          --main-background-color: \" + mainBackgroundColor + \";\\n          --sidebar-backgroukd-color: \" + sidebarBackgroundColor + \";\\n          --background-active-cat-color: \" + backgroundActiveCatColor + \";\\n          --background-hovered-item-color: \" + backgroundHoveredItemColor + \";\\n          --default-gray-color: \" + defaultGrayColor + \";\\n          --accent-color: \" + accentColor + \";\\n          --splitter-line-color: \" + splitterLineColor + \";\\n          --text-color: \" + textColor + \";\\n        }\\n        html{\\n          touch-action: manipulation;\\n        }\\n        html,\\n        body {\\n          height: 100%;\\n        }\\n        input {\\n          color: var(--text-color);\\n        }\\n        .application {\\n          font-family: sans-serif;\\n          font-size: 16px;\\n          display: flex;\\n          height: 100%;\\n          justify-content: center;\\n          align-items: center;\\n          background-color: var(--global-background-color);\\n          color: var(--text-color);\\n        }\\n        .application__trash-icon {\\n          cursor: pointer;\\n          background-image: url('\" + _img_trash_svg__WEBPACK_IMPORTED_MODULE_1__.default + \"');\\n          width: 20px;\\n          height: 20px;\\n          margin-right: 10px;\\n        }\\n        .sidebar {\\n          background-color: var(--sidebar-backgroukd-color);\\n          padding: 25px 0px 0px 0px;\\n          border-right: 2px solid var(--splitter-line-color);\\n          width: 250px;\\n          height: 700px;\\n          border-top-left-radius: 5px;\\n          border-bottom-left-radius: 5px;\\n          position: relative;\\n        }\\n        .sidebar__title {\\n          display: flex;\\n          justify-content: flex-start;\\n          align-items: center;\\n          padding-left: 5px;\\n          height: 50px;\\n          color: var(--accent-color);\\n          vertical-align: center;\\n        }\\n        .sidebar__title-text {\\n          pointer-events: none;\\n        }\\n        .sidebar__categories {\\n          max-height: 550px;\\n          overflow-y: auto;\\n        }\\n        .sidebar__categories::-webkit-scrollbar {\\n          width: 0px;\\n        }\\n        .sidebar__category {\\n          display: flex;\\n          justify-content: flex-start;\\n          align-items: center;\\n          padding: 5px;\\n          height: 50px;\\n          width: 100%;\\n        }\\n        .sidebar__category:hover {\\n          background-color: var(--background-hovered-item-color);\\n        }\\n        .sidebar__category_active {\\n          background-color: var(--background-active-cat-color);\\n        }\\n        .icon {\\n          background-position: center;\\n          background-size: contain;\\n          background-repeat: no-repeat;\\n        }\\n        .sidebar__cat-icon {\\n          width: 20px;\\n          height: 20px;\\n          margin-right: 8px;\\n        }\\n        .sidebar__cat-icon_important {\\n          background-image: url('\" + _img_star_cat_icon_svg__WEBPACK_IMPORTED_MODULE_2__.default + \"');\\n        }\\n        .sidebar__cat-icon_all-tasks {\\n          background-image: url('\" + _img_home_svg__WEBPACK_IMPORTED_MODULE_3__.default + \"');\\n        }\\n        .sidebar__cat-icon_default {\\n          background-image: url('\" + _img_icon_cat_default_svg__WEBPACK_IMPORTED_MODULE_4__.default + \"');\\n        }\\n        .sidebar__cat-text {\\n          cursor: default;\\n          flex-grow: 1;\\n        }\\n        .sidebar__tasks-number {\\n          font-size: 12px;\\n          color: var(--default-gray-color);\\n        }\\n        .input {\\n          display: flex;\\n          justify-content: flex-start;\\n          align-items: center;\\n        }\\n        .sidebar__icon {\\n          background-image: url('\" + _img_plus_svg__WEBPACK_IMPORTED_MODULE_5__.default + \"');\\n          width: 20px;\\n          height: 20px;\\n        }\\n        .input-field {\\n          width: 100%;\\n          height: 40px;\\n          font-size: 16px;\\n          color: var(--text-color);\\n          background-color: var(--sidebar-backgroukd-color);\\n          border-radius: 5px;\\n          border: none;\\n          padding-left: 6px;\\n        }\\n        .input-field:focus,\\n        .input-field:active {\\n          outline: none;\\n        }\\n        .sidebar__input {\\n          margin: 3px;\\n          padding: 5px;\\n          height: 50px;\\n        }\\n        .main {\\n          display: flex;\\n          flex-direction: column;\\n          justify-content: flex-end;\\n          width: 720px;\\n          height: 700px;\\n          padding: 25px;\\n          border-top-right-radius: 5px;\\n          border-bottom-right-radius: 5px;\\n          background-color: var(--main-background-color);\\n          position: relative;\\n        }\\n\\n        .main__sidebar-icon {\\n          display: none;\\n          position: absolute;\\n          top: 40%;\\n          left: 0px;\\n          width: 18px;\\n          height: 100px;\\n          background-image: url('\" + _img_sidebar_icon_svg__WEBPACK_IMPORTED_MODULE_6__.default + \"');\\n        }\\n\\n        .main__title {\\n          margin-bottom: 10px;\\n          flex: 0 1 50px;\\n          display: flex;\\n          justify-content: flex-start;\\n          align-items: center;\\n        }\\n        .main__title-icon {\\n          width: 25px;\\n          height: 25px;\\n        }\\n        .main__title-text {\\n          pointer-events: none;\\n          font-size: 25px;\\n          font-weight: 500;\\n          margin-left: 10px;\\n          color: var(--accent-color);\\n        }\\n        .main__theme-switcher{\\n          display: flex;\\n          justify-content: center;\\n          align-items: center;\\n          height: 35px;\\n          width: 35px;\\n          margin-left: auto;\\n          border: none;\\n          cursor: pointer;\\n          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\\n        }\\n        .main__theme-switcher-icon{\\n          border-radius: 100%;\\n          background-color: var(--text-color);\\n          width: 20px;\\n          height: 20px;\\n        }\\n        .active-task-container {\\n          max-height: 77%;\\n          flex-grow: 1;\\n          overflow-y: hidden;\\n        }\\n        .task-container {\\n          display: flex;\\n          max-height: 100%;\\n          flex-direction: column;\\n          justify-content: flex-start;\\n          padding-bottom: 10px;\\n          overflow-y: scroll;\\n          transition: 0.13s;\\n        }\\n        .task-container_hidden {\\n          transition: 0.13s;\\n          opacity: 0;\\n        }\\n        /* hide scrollbar */\\n        .task-container::-webkit-scrollbar {\\n          width: 0;\\n        }\\n        /* checkbox field to click (complete task) */\\n        .task-container__pseudo-checkbox {\\n          width: 30px;\\n          height: 30px;\\n          background-color: transparent;\\n          position: absolute;\\n          top: 10px;\\n          left: 5px;\\n          z-index: 10;\\n          cursor: pointer;\\n        }\\n        .task-container__task {\\n          display: flex;\\n          justify-content: flex-start;\\n          align-items: center;\\n          background-color: var(--sidebar-backgroukd-color);\\n          min-height: 50px;\\n          color: var(--text-color);\\n          padding-left: 40px;\\n          padding-right: 5px;\\n          border-radius: 5px;\\n          margin-top: 5px;\\n          position: relative;\\n          transition: 0.13s;\\n        }\\n        .task-container__task:hover {\\n          background-color: var(--background-hovered-item-color);\\n        }\\n        .task-container__task_checked {\\n          color: var(--default-gray-color);\\n        }\\n        .task-container__task_checked::after {\\n          content: '';\\n          background-image: url('\" + _img_checkbox_svg__WEBPACK_IMPORTED_MODULE_7__.default + \"');\\n          background-position: center;\\n          background-size: contain;\\n          width: 19px;\\n          height: 19px;\\n          position: absolute;\\n          left: 10px;\\n          top: 33%;\\n        }\\n        .task-container__task::before {\\n          content: '';\\n          cursor: pointer;\\n          border: 1px solid var(--default-gray-color);\\n          width: 16px;\\n          height: 16px;\\n          position: absolute;\\n          left: 10px;\\n          top: 33%;\\n          border-radius: 50%;\\n        }\\n        /* hide original checkbox */\\n        .task-container__task-checkbox {\\n          display: none;\\n        }\\n        .task-container__task-text {\\n          background-color: inherit;\\n          border: none;\\n          font-size: 16px;\\n          flex-grow: 1;\\n        }\\n        .task-container__task-text:focus,\\n        .task-container__task-text:active {\\n          outline: none;\\n        }\\n        .task-container__task-star {\\n          background-image: url('\" + _img_star_svg__WEBPACK_IMPORTED_MODULE_8__.default + \"');\\n          cursor: pointer;\\n          width: 20px;\\n          height: 20px;\\n        }\\n\\n        /* mark task as important anmation */\\n        @keyframes star-activation {\\n          from {\\n          }\\n          50% {\\n            transform: scale(1.3);\\n          }\\n          to {\\n            transform: scale(1);\\n          }\\n        }\\n        /* unmark task as important animation */\\n        @keyframes star-deactivation {\\n          from {\\n          }\\n          50% {\\n            transform: scale(0.7);\\n          }\\n          to {\\n            transform: scale(1);\\n          }\\n        }\\n        .task-container__task-star_acitve {\\n          animation: star-activation 0.3s ease-in-out;\\n          background-image: url('\" + _img_star_acitve_svg__WEBPACK_IMPORTED_MODULE_9__.default + \"');\\n        }\\n        .completed-task-container {\\n          flex-basis: 30%;\\n          min-height: 230px;\\n          overflow-y: hidden;\\n          padding-bottom: 10px;\\n          padding-top: 10px;\\n          color: var(--default-gray-color);\\n        }\\n        .completed-task-container_hidden {\\n          min-height: unset;\\n          flex-basis: unset;\\n          height: 45px;\\n        }\\n        .completed-task-container__toggle {\\n          cursor: default;\\n          -webkit-user-select: none;\\n          display: flex;\\n          justify-content: flex-start;\\n          align-items: center;\\n          width: fit-content;\\n          border-radius: 5px;\\n          padding: 5px 10px 5px 10px;\\n          background-color: var(--sidebar-backgroukd-color);\\n        }\\n        .completed-task-container__toggle:hover {\\n          background-color: var(--background-hovered-item-color);\\n        }\\n        .completed-task-container__arrow {\\n          width: 18px;\\n          height: 18px;\\n        }\\n        .completed-task-container__arrow_down {\\n          background-image: url('\" + _img_arrow_down_svg__WEBPACK_IMPORTED_MODULE_10__.default + \"');\\n        }\\n        .completed-task-container__arrow_right {\\n          background-image: url('\" + _img_arrow_right_svg__WEBPACK_IMPORTED_MODULE_11__.default + \"');\\n        }\\n        .completed-task-container__text {\\n          flex-grow: 1;\\n          padding: 0px 10px;\\n          color: var(--accent-color);\\n        }\\n        .completed-task-container__tasks-number {\\n          color: var(--accent-color);\\n          font-size: 12px;\\n          padding-left: 10px;\\n        }\\n        .main__input {\\n          position: relative;\\n          min-height: 55px;\\n        }\\n        .main__icon {\\n          position: absolute;\\n          flex-shrink: 1;\\n          background-image: url('\" + _img_plus_svg__WEBPACK_IMPORTED_MODULE_5__.default + \"');\\n          width: 20px;\\n          height: 20px;\\n          left: 10px;\\n        }\\n        .main__form {\\n          width: 100%;\\n        }\\n        .main__input-field {\\n          padding-left: 35px;\\n        }\\n      \"));\n}\n\n\n//# sourceURL=webpack://todo/./src/components/Style.tsx?");

/***/ }),

/***/ "./src/components/TaskContainer.tsx":
/*!******************************************!*\
  !*** ./src/components/TaskContainer.tsx ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _actions_taskActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/taskActions */ \"./src/actions/taskActions.tsx\");\n\n\n\nvar deleteTask = _actions_taskActions__WEBPACK_IMPORTED_MODULE_2__.default.deleteTask, toggleCompleteTask = _actions_taskActions__WEBPACK_IMPORTED_MODULE_2__.default.toggleCompleteTask, toggleImportantTask = _actions_taskActions__WEBPACK_IMPORTED_MODULE_2__.default.toggleImportantTask, updateTask = _actions_taskActions__WEBPACK_IMPORTED_MODULE_2__.default.updateTask;\nfunction TaskContainer(props, taskContainerRef) {\n    var _a;\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    function handleDeleteTask(e) {\n        var id = e.target.parentElement.attributes['data-taskid'].value;\n        dispatch(deleteTask(id));\n    }\n    function handleToggleCompleteTask(e) {\n        var taskElement = e.currentTarget.parentElement;\n        taskElement === null || taskElement === void 0 ? void 0 : taskElement.classList.toggle('task-container__task_checked');\n        setTimeout(function () {\n            var id = taskElement === null || taskElement === void 0 ? void 0 : taskElement.attributes['data-taskid'].value;\n            dispatch(toggleCompleteTask(id));\n        }, 150);\n    }\n    function handleToggleImportantTask(e) {\n        var id = e.target.parentElement.attributes['data-taskid'].value;\n        dispatch(toggleImportantTask(id));\n    }\n    function enableTaskInput(e) {\n        e.target.disabled = false;\n    }\n    function disableTaskInput(e) {\n        e.target.disabled = true;\n    }\n    function handleInput(e) {\n        var id = e.currentTarget.attributes['data-taskid'].value;\n        var text = e.target.value;\n        dispatch(updateTask(id, text));\n    }\n    var taskElements = (_a = props.tasks) === null || _a === void 0 ? void 0 : _a.map(function (task, index) {\n        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"task-container__task \" + (task.completed ? 'task-container__task_checked' : ''), key: task.id, \"data-taskid\": task.id, onBlur: disableTaskInput, onChange: handleInput },\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: 'task-container__pseudo-checkbox', onPointerDown: handleToggleCompleteTask }),\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", { type: 'checkbox', className: 'task-container__task-checkbox' }),\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", { style: task.completed\n                    ? {\n                        color: '#939393',\n                        textDecoration: 'line-through',\n                    }\n                    : {}, onFocus: enableTaskInput, className: 'task-container__task-text', value: task.text, type: 'text', disabled: true }),\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: 'icon application__trash-icon', onPointerDown: handleDeleteTask }),\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"task-container__task-star \" + (task.important ? 'task-container__task-star_acitve' : '') + \" icon\", onPointerDown: handleToggleImportantTask })));\n    });\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: 'task-container', ref: taskContainerRef }, taskElements));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(TaskContainer));\n\n\n//# sourceURL=webpack://todo/./src/components/TaskContainer.tsx?");

/***/ }),

/***/ "./src/helper/CategoryClass.tsx":
/*!**************************************!*\
  !*** ./src/helper/CategoryClass.tsx ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\nvar Category = (function () {\n    function Category(name, icon, selected, deletable, id) {\n        if (icon === void 0) { icon = ''; }\n        if (selected === void 0) { selected = false; }\n        if (deletable === void 0) { deletable = false; }\n        if (id === void 0) { id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)(); }\n        this.name = name;\n        this.icon = icon;\n        this.selected = selected;\n        this.deletable = deletable;\n        this.id = id;\n    }\n    return Category;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);\n\n\n//# sourceURL=webpack://todo/./src/helper/CategoryClass.tsx?");

/***/ }),

/***/ "./src/helper/TaskClass.tsx":
/*!**********************************!*\
  !*** ./src/helper/TaskClass.tsx ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/helper/constants.tsx\");\n\n\nvar IMPORTANT_CAT_ID = _constants__WEBPACK_IMPORTED_MODULE_0__.default.IMPORTANT_CAT_ID;\nvar Task = (function () {\n    function Task(text, categoryId, completed, important, id) {\n        if (text === void 0) { text = ''; }\n        if (completed === void 0) { completed = false; }\n        if (important === void 0) { important = false; }\n        if (id === void 0) { id = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.default)(); }\n        this.text = text;\n        this.categoryId = categoryId;\n        this.completed = completed;\n        this.important = this.categoryId === IMPORTANT_CAT_ID ? true : important;\n        this.id = id;\n    }\n    return Task;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n\n//# sourceURL=webpack://todo/./src/helper/TaskClass.tsx?");

/***/ }),

/***/ "./src/helper/constants.tsx":
/*!**********************************!*\
  !*** ./src/helper/constants.tsx ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    ALL_TASKS_CAT_ID: '1',\n    IMPORTANT_CAT_ID: '2',\n    DEFAULT_THEME: 'dark',\n});\n\n\n//# sourceURL=webpack://todo/./src/helper/constants.tsx?");

/***/ }),

/***/ "./src/reducers/allReducer.tsx":
/*!*************************************!*\
  !*** ./src/reducers/allReducer.tsx ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _categoriesReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categoriesReducer */ \"./src/reducers/categoriesReducer.tsx\");\n/* harmony import */ var _tasksReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasksReducer */ \"./src/reducers/tasksReducer.tsx\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({\n    tasks: _tasksReducer__WEBPACK_IMPORTED_MODULE_1__.default,\n    categories: _categoriesReducer__WEBPACK_IMPORTED_MODULE_0__.default,\n}));\n\n\n//# sourceURL=webpack://todo/./src/reducers/allReducer.tsx?");

/***/ }),

/***/ "./src/reducers/categoriesReducer.tsx":
/*!********************************************!*\
  !*** ./src/reducers/categoriesReducer.tsx ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _helper_CategoryClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/CategoryClass */ \"./src/helper/CategoryClass.tsx\");\n/* harmony import */ var _helper_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/constants */ \"./src/helper/constants.tsx\");\n/* harmony import */ var _Categoies_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Categoies.json */ \"./src/Categoies.json\");\n\n\n\nvar ALL_TASKS_CAT_ID = _helper_constants__WEBPACK_IMPORTED_MODULE_1__.default.ALL_TASKS_CAT_ID;\nvar categoriesReducer = function (categories, action) {\n    var _a, _b;\n    if (categories === void 0) { categories = _Categoies_json__WEBPACK_IMPORTED_MODULE_2__; }\n    var id = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.id;\n    var name = (_b = action.payload) === null || _b === void 0 ? void 0 : _b.name;\n    switch (action.type) {\n        case 'CREATE_CATEGORY':\n            var newCat = new _helper_CategoryClass__WEBPACK_IMPORTED_MODULE_0__.default(name, 'default', false, true);\n            return categories.concat(newCat);\n        case 'DELETE_CATEGORY':\n            var catToDelete = categories.find(function (cat) { return cat.id === id; });\n            var newCategories = categories;\n            if (catToDelete === null || catToDelete === void 0 ? void 0 : catToDelete.selected) {\n                newCategories = categories.map(function (cat) {\n                    if (cat.id === ALL_TASKS_CAT_ID) {\n                        cat.selected = true;\n                        return cat;\n                    }\n                    return cat;\n                });\n            }\n            return newCategories.filter(function (cat) { return cat.id !== id; });\n        case 'SELECT_CATEGORY':\n            return categories.map(function (cat) {\n                cat.selected = cat.id === id ? true : false;\n                return cat;\n            });\n        default:\n            return categories;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categoriesReducer);\n\n\n//# sourceURL=webpack://todo/./src/reducers/categoriesReducer.tsx?");

/***/ }),

/***/ "./src/reducers/tasksReducer.tsx":
/*!***************************************!*\
  !*** ./src/reducers/tasksReducer.tsx ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _Tasks_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Tasks.json */ \"./src/Tasks.json\");\n/* harmony import */ var _helper_TaskClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/TaskClass */ \"./src/helper/TaskClass.tsx\");\n\n\nvar tasksReducer = function (tasks, action) {\n    var _a, _b, _c;\n    if (tasks === void 0) { tasks = _Tasks_json__WEBPACK_IMPORTED_MODULE_0__; }\n    var text = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.text;\n    var id = (_b = action.payload) === null || _b === void 0 ? void 0 : _b.id;\n    var categoryId = (_c = action.payload) === null || _c === void 0 ? void 0 : _c.categoryId;\n    switch (action.type) {\n        case 'CREATE_TASK':\n            var newTask = new _helper_TaskClass__WEBPACK_IMPORTED_MODULE_1__.default(text, categoryId);\n            return tasks.concat(newTask);\n        case 'DELETE_TASK':\n            return tasks.filter(function (task) { return id !== task.id; });\n        case 'TOGGLE_COMPLETE_TASK':\n            return tasks.map(function (task) {\n                task.completed = task.id === id ? !task.completed : task.completed;\n                return task;\n            });\n        case 'TOGGLE_IMPORTANT_TASK':\n            return tasks.map(function (task) {\n                task.important = task.id === id ? !task.important : task.important;\n                return task;\n            });\n        case 'UPDATE_TASK':\n            return tasks.map(function (task) {\n                task.text = task.id === id ? text : task.text;\n                return task;\n            });\n        default:\n            return tasks;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasksReducer);\n\n\n//# sourceURL=webpack://todo/./src/reducers/tasksReducer.tsx?");

/***/ }),

/***/ "./src/img/arrow_down.svg":
/*!********************************!*\
  !*** ./src/img/arrow_down.svg ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"6e96cd4fcfb2637eb734a91b575433b9.svg\");\n\n//# sourceURL=webpack://todo/./src/img/arrow_down.svg?");

/***/ }),

/***/ "./src/img/arrow_right.svg":
/*!*********************************!*\
  !*** ./src/img/arrow_right.svg ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"763917efe70a151c2ac5753935e32002.svg\");\n\n//# sourceURL=webpack://todo/./src/img/arrow_right.svg?");

/***/ }),

/***/ "./src/img/checkbox.svg":
/*!******************************!*\
  !*** ./src/img/checkbox.svg ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"408f492f866fb2ed18fc14ea5837e0c6.svg\");\n\n//# sourceURL=webpack://todo/./src/img/checkbox.svg?");

/***/ }),

/***/ "./src/img/home.svg":
/*!**************************!*\
  !*** ./src/img/home.svg ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"e4b27e82316509fc74f1ca9c17e4b6a0.svg\");\n\n//# sourceURL=webpack://todo/./src/img/home.svg?");

/***/ }),

/***/ "./src/img/icon_cat_default.svg":
/*!**************************************!*\
  !*** ./src/img/icon_cat_default.svg ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"da3fc0896e48b46ebd3c746f070195d1.svg\");\n\n//# sourceURL=webpack://todo/./src/img/icon_cat_default.svg?");

/***/ }),

/***/ "./src/img/plus.svg":
/*!**************************!*\
  !*** ./src/img/plus.svg ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"1ea279c98d92249d47421a67ab9b2811.svg\");\n\n//# sourceURL=webpack://todo/./src/img/plus.svg?");

/***/ }),

/***/ "./src/img/sidebar_icon.svg":
/*!**********************************!*\
  !*** ./src/img/sidebar_icon.svg ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"9245920397190e532ea29fc72d8a293a.svg\");\n\n//# sourceURL=webpack://todo/./src/img/sidebar_icon.svg?");

/***/ }),

/***/ "./src/img/star.svg":
/*!**************************!*\
  !*** ./src/img/star.svg ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"0cd50bb133d483a8181db7384593e009.svg\");\n\n//# sourceURL=webpack://todo/./src/img/star.svg?");

/***/ }),

/***/ "./src/img/star_acitve.svg":
/*!*********************************!*\
  !*** ./src/img/star_acitve.svg ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"94f23189f93a272badc6b2d3e75fc979.svg\");\n\n//# sourceURL=webpack://todo/./src/img/star_acitve.svg?");

/***/ }),

/***/ "./src/img/star_cat_icon.svg":
/*!***********************************!*\
  !*** ./src/img/star_cat_icon.svg ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"dfa0e9aa27f531cef592b23bf471da6a.svg\");\n\n//# sourceURL=webpack://todo/./src/img/star_cat_icon.svg?");

/***/ }),

/***/ "./src/img/star_hovered.svg":
/*!**********************************!*\
  !*** ./src/img/star_hovered.svg ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"e100c436b9b6a752e3dbccabfb3735a4.svg\");\n\n//# sourceURL=webpack://todo/./src/img/star_hovered.svg?");

/***/ }),

/***/ "./src/img/trash.svg":
/*!***************************!*\
  !*** ./src/img/trash.svg ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"d07449cb527353d4a033d608451ceb2e.svg\");\n\n//# sourceURL=webpack://todo/./src/img/trash.svg?");

/***/ }),

/***/ "./src/img/trash_hovered.svg":
/*!***********************************!*\
  !*** ./src/img/trash_hovered.svg ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"4df817758985f21153e2f8193880b850.svg\");\n\n//# sourceURL=webpack://todo/./src/img/trash_hovered.svg?");

/***/ }),

/***/ "./src/Categoies.json":
/*!****************************!*\
  !*** ./src/Categoies.json ***!
  \****************************/
/*! default exports */
/*! export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export deletable [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export icon [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export id [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export selected [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export deletable [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export icon [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export id [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export selected [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse(\"[{\\\"id\\\":\\\"1\\\",\\\"name\\\":\\\"All tasks\\\",\\\"deletable\\\":false,\\\"icon\\\":\\\"all-tasks\\\",\\\"selected\\\":true},{\\\"id\\\":\\\"2\\\",\\\"name\\\":\\\"Important\\\",\\\"deletable\\\":false,\\\"icon\\\":\\\"important\\\",\\\"selected\\\":false}]\");\n\n//# sourceURL=webpack://todo/./src/Categoies.json?");

/***/ }),

/***/ "./src/Tasks.json":
/*!************************!*\
  !*** ./src/Tasks.json ***!
  \************************/
/*! default exports */
/*! export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export categoryId [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export completed [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export id [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export important [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export text [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export categoryId [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export completed [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export id [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export important [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export text [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export categoryId [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export completed [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export id [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export important [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export text [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse(\"[{\\\"id\\\":\\\"1\\\",\\\"text\\\":\\\"first task\\\",\\\"important\\\":false,\\\"completed\\\":false,\\\"categoryId\\\":\\\"1\\\"},{\\\"id\\\":\\\"2\\\",\\\"text\\\":\\\"second task (important)\\\",\\\"important\\\":true,\\\"completed\\\":false,\\\"categoryId\\\":\\\"1\\\"},{\\\"id\\\":\\\"3\\\",\\\"text\\\":\\\"completed important todo\\\",\\\"important\\\":true,\\\"completed\\\":true,\\\"categoryId\\\":\\\"1\\\"}]\");\n\n//# sourceURL=webpack://todo/./src/Tasks.json?");

/***/ }),

/***/ "./src/colorThemes.json":
/*!******************************!*\
  !*** ./src/colorThemes.json ***!
  \******************************/
/*! default exports */
/*! export dark [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export accentColor [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export backgroundActiveCatColor [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export backgroundHoveredItemColor [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export defaultGrayColor [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export globalBackgroundColor [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mainBackgroundColor [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sidebarBackgroundColor [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export splitterLineColor [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export textColor [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export light [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export accentColor [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export backgroundActiveCatColor [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export backgroundHoveredItemColor [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export defaultGrayColor [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export globalBackgroundColor [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export mainBackgroundColor [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export sidebarBackgroundColor [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export splitterLineColor [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export textColor [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse(\"{\\\"dark\\\":{\\\"globalBackgroundColor\\\":\\\"#2d2f30\\\",\\\"mainBackgroundColor\\\":\\\"#1a1b1c\\\",\\\"sidebarBackgroundColor\\\":\\\"#212222\\\",\\\"backgroundActiveCatColor\\\":\\\"#2e2e36\\\",\\\"backgroundHoveredItemColor\\\":\\\"#292929\\\",\\\"defaultGrayColor\\\":\\\"#939393\\\",\\\"accentColor\\\":\\\"#788cde\\\",\\\"splitterLineColor\\\":\\\"#101011\\\",\\\"textColor\\\":\\\"#e1e1e1\\\"},\\\"light\\\":{\\\"globalBackgroundColor\\\":\\\"#E5E5E5\\\",\\\"mainBackgroundColor\\\":\\\"#FFFFFF\\\",\\\"sidebarBackgroundColor\\\":\\\"#F4F4F4\\\",\\\"backgroundActiveCatColor\\\":\\\"#EDEDED\\\",\\\"backgroundHoveredItemColor\\\":\\\"#EDEDED\\\",\\\"defaultGrayColor\\\":\\\"#767678\\\",\\\"accentColor\\\":\\\"#3E69DF\\\",\\\"splitterLineColor\\\":\\\"#EAEAEA\\\",\\\"textColor\\\":\\\"#34373D\\\"}}\");\n\n//# sourceURL=webpack://todo/./src/colorThemes.json?");

/***/ })

}]);