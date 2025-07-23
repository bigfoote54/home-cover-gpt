"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/analyze";
exports.ids = ["pages/api/analyze"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("openai");;

/***/ }),

/***/ "(api)/./lib/openai.ts":
/*!***********************!*\
  !*** ./lib/openai.ts ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([openai__WEBPACK_IMPORTED_MODULE_0__]);\nopenai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// lib/openai.ts\n\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    apiKey: process.env.OPENAI_API_KEY || \"\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openai);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvb3BlbmFpLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsZ0JBQWdCO0FBRVk7QUFFNUIsTUFBTUMsU0FBUyxJQUFJRCw4Q0FBTUEsQ0FBQztJQUN4QkUsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjLElBQUk7QUFDeEM7QUFFQSxpRUFBZUosTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWUtY292ZXIvLi9saWIvb3BlbmFpLnRzPzAwZDgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL29wZW5haS50c1xuXG5pbXBvcnQgT3BlbkFJIGZyb20gJ29wZW5haSc7XG5cbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUkoe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZIHx8ICcnLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG9wZW5haTtcbiJdLCJuYW1lcyI6WyJPcGVuQUkiLCJvcGVuYWkiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/openai.ts\n");

/***/ }),

/***/ "(api)/./pages/api/analyze.ts":
/*!******************************!*\
  !*** ./pages/api/analyze.ts ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/openai */ \"(api)/./lib/openai.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_openai__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_openai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    const { text } = req.body;\n    if (!text) {\n        return res.status(400).json({\n            error: \"No text provided for analysis.\"\n        });\n    }\n    try {\n        const completion = await _lib_openai__WEBPACK_IMPORTED_MODULE_0__[\"default\"].chat.completions.create({\n            model: \"gpt-4o\",\n            messages: [\n                {\n                    role: \"system\",\n                    content: \"You are a homeowners insurance policy expert. Your job is to review and explain policies in clear and concise language for consumers.\"\n                },\n                {\n                    role: \"user\",\n                    content: `Please analyze the following policy text:\\n\\n${text}`\n                }\n            ]\n        });\n        const analysis = completion.choices[0]?.message?.content;\n        if (!analysis) {\n            throw new Error(\"No response from OpenAI.\");\n        }\n        res.status(200).json({\n            analysis\n        });\n    } catch (err) {\n        console.error(\"Analysis error:\", err);\n        res.status(500).json({\n            error: \"Analysis failed. Check server logs for details.\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYW5hbHl6ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNzQztBQUV2QixlQUFlQyxRQUFRQyxHQUFtQixFQUFFQyxHQUFvQjtJQUM3RSxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHRixJQUFJRyxJQUFJO0lBRXpCLElBQUksQ0FBQ0QsTUFBTTtRQUNULE9BQU9ELElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFpQztJQUN4RTtJQUVBLElBQUk7UUFDRixNQUFNQyxhQUFhLE1BQU1ULHdEQUFXLENBQUNXLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDO1lBQ3REQyxPQUFPO1lBQ1BDLFVBQVU7Z0JBQ1I7b0JBQ0VDLE1BQU07b0JBQ05DLFNBQVM7Z0JBQ1g7Z0JBQ0E7b0JBQ0VELE1BQU07b0JBQ05DLFNBQVMsQ0FBQyw2Q0FBNkMsRUFBRVosS0FBSyxDQUFDO2dCQUNqRTthQUNEO1FBQ0g7UUFFQSxNQUFNYSxXQUFXUixXQUFXUyxPQUFPLENBQUMsRUFBRSxFQUFFQyxTQUFTSDtRQUVqRCxJQUFJLENBQUNDLFVBQVU7WUFDYixNQUFNLElBQUlHLE1BQU07UUFDbEI7UUFFQWpCLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRVU7UUFBUztJQUNsQyxFQUFFLE9BQU9JLEtBQVU7UUFDakJDLFFBQVFkLEtBQUssQ0FBQyxtQkFBbUJhO1FBQ2pDbEIsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQWtEO0lBQ2xGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLWNvdmVyLy4vcGFnZXMvYXBpL2FuYWx5emUudHM/OGIwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBvcGVuYWkgZnJvbSAnLi4vLi4vbGliL29wZW5haSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgY29uc3QgeyB0ZXh0IH0gPSByZXEuYm9keTtcblxuICBpZiAoIXRleHQpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ05vIHRleHQgcHJvdmlkZWQgZm9yIGFuYWx5c2lzLicgfSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY2hhdC5jb21wbGV0aW9ucy5jcmVhdGUoe1xuICAgICAgbW9kZWw6ICdncHQtNG8nLFxuICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHJvbGU6ICdzeXN0ZW0nLFxuICAgICAgICAgIGNvbnRlbnQ6ICdZb3UgYXJlIGEgaG9tZW93bmVycyBpbnN1cmFuY2UgcG9saWN5IGV4cGVydC4gWW91ciBqb2IgaXMgdG8gcmV2aWV3IGFuZCBleHBsYWluIHBvbGljaWVzIGluIGNsZWFyIGFuZCBjb25jaXNlIGxhbmd1YWdlIGZvciBjb25zdW1lcnMuJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHJvbGU6ICd1c2VyJyxcbiAgICAgICAgICBjb250ZW50OiBgUGxlYXNlIGFuYWx5emUgdGhlIGZvbGxvd2luZyBwb2xpY3kgdGV4dDpcXG5cXG4ke3RleHR9YCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBhbmFseXNpcyA9IGNvbXBsZXRpb24uY2hvaWNlc1swXT8ubWVzc2FnZT8uY29udGVudDtcblxuICAgIGlmICghYW5hbHlzaXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gcmVzcG9uc2UgZnJvbSBPcGVuQUkuJyk7XG4gICAgfVxuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBhbmFseXNpcyB9KTtcbiAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKCdBbmFseXNpcyBlcnJvcjonLCBlcnIpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdBbmFseXNpcyBmYWlsZWQuIENoZWNrIHNlcnZlciBsb2dzIGZvciBkZXRhaWxzLicgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJvcGVuYWkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidGV4dCIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb21wbGV0aW9uIiwiY2hhdCIsImNvbXBsZXRpb25zIiwiY3JlYXRlIiwibW9kZWwiLCJtZXNzYWdlcyIsInJvbGUiLCJjb250ZW50IiwiYW5hbHlzaXMiLCJjaG9pY2VzIiwibWVzc2FnZSIsIkVycm9yIiwiZXJyIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/analyze.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/analyze.ts"));
module.exports = __webpack_exports__;

})();