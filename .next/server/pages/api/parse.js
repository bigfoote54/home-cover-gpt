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
exports.id = "pages/api/parse";
exports.ids = ["pages/api/parse"];
exports.modules = {

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("formidable");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/parse.ts":
/*!****************************!*\
  !*** ./pages/api/parse.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([formidable__WEBPACK_IMPORTED_MODULE_0__]);\nformidable__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// pages/api/parse.ts\n\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nfunction handler(req, res) {\n    const form = new formidable__WEBPACK_IMPORTED_MODULE_0__.IncomingForm({\n        multiples: true\n    });\n    form.parse(req, async (err, fields, files)=>{\n        if (err) {\n            console.error(\"Form parse error:\", err);\n            return res.status(500).json({\n                error: \"File upload failed\"\n            });\n        }\n        try {\n            const file = Array.isArray(files.file) ? files.file[0] : files.file;\n            if (!file || !file.filepath) {\n                throw new Error(\"No file path found in upload\");\n            }\n            const data = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(file.filepath, {\n                encoding: \"utf-8\"\n            });\n            const parsedText = data.slice(0, 1000); // TODO: replace with real parser if needed\n            res.status(200).json({\n                text: parsedText\n            });\n        } catch (e) {\n            console.error(\"Parse error:\", e);\n            res.status(500).json({\n                error: \"Could not read uploaded file\"\n            });\n        }\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGFyc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUI7QUFDcUI7QUFDdEI7QUFHYixNQUFNRSxTQUFTO0lBQ3BCQyxLQUFLO1FBQ0hDLFlBQVk7SUFDZDtBQUNGLEVBQUU7QUFFYSxTQUFTQyxRQUFRQyxHQUFtQixFQUFFQyxHQUFvQjtJQUN2RSxNQUFNQyxPQUFPLElBQUlSLG9EQUFZQSxDQUFDO1FBQUVTLFdBQVc7SUFBSztJQUVoREQsS0FBS0UsS0FBSyxDQUFDSixLQUFLLE9BQU9LLEtBQUtDLFFBQVFDO1FBQ2xDLElBQUlGLEtBQUs7WUFDUEcsUUFBUUMsS0FBSyxDQUFDLHFCQUFxQko7WUFDbkMsT0FBT0osSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUYsT0FBTztZQUFxQjtRQUM1RDtRQUVBLElBQUk7WUFDRixNQUFNRyxPQUFPQyxNQUFNQyxPQUFPLENBQUNQLE1BQU1LLElBQUksSUFBSUwsTUFBTUssSUFBSSxDQUFDLEVBQUUsR0FBR0wsTUFBTUssSUFBSTtZQUVuRSxJQUFJLENBQUNBLFFBQVEsQ0FBQ0EsS0FBS0csUUFBUSxFQUFFO2dCQUMzQixNQUFNLElBQUlDLE1BQU07WUFDbEI7WUFFQSxNQUFNQyxPQUFPdEIsc0RBQWUsQ0FBQ2lCLEtBQUtHLFFBQVEsRUFBRTtnQkFBRUksVUFBVTtZQUFRO1lBRWhFLE1BQU1DLGFBQWFILEtBQUtJLEtBQUssQ0FBQyxHQUFHLE9BQU8sMkNBQTJDO1lBQ25GcEIsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRVcsTUFBTUY7WUFBVztRQUMxQyxFQUFFLE9BQU9HLEdBQUc7WUFDVmYsUUFBUUMsS0FBSyxDQUFDLGdCQUFnQmM7WUFDOUJ0QixJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFRixPQUFPO1lBQStCO1FBQy9EO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWUtY292ZXIvLi9wYWdlcy9hcGkvcGFyc2UudHM/MjU1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvcGFyc2UudHNcbmltcG9ydCB7IEluY29taW5nRm9ybSB9IGZyb20gJ2Zvcm1pZGFibGUnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGk6IHtcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgY29uc3QgZm9ybSA9IG5ldyBJbmNvbWluZ0Zvcm0oeyBtdWx0aXBsZXM6IHRydWUgfSk7XG5cbiAgZm9ybS5wYXJzZShyZXEsIGFzeW5jIChlcnIsIGZpZWxkcywgZmlsZXMpID0+IHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGb3JtIHBhcnNlIGVycm9yOicsIGVycik7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ZpbGUgdXBsb2FkIGZhaWxlZCcgfSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZpbGUgPSBBcnJheS5pc0FycmF5KGZpbGVzLmZpbGUpID8gZmlsZXMuZmlsZVswXSA6IGZpbGVzLmZpbGU7XG5cbiAgICAgIGlmICghZmlsZSB8fCAhZmlsZS5maWxlcGF0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGZpbGUgcGF0aCBmb3VuZCBpbiB1cGxvYWQnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlLmZpbGVwYXRoLCB7IGVuY29kaW5nOiAndXRmLTgnIH0pO1xuXG4gICAgICBjb25zdCBwYXJzZWRUZXh0ID0gZGF0YS5zbGljZSgwLCAxMDAwKTsgLy8gVE9ETzogcmVwbGFjZSB3aXRoIHJlYWwgcGFyc2VyIGlmIG5lZWRlZFxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB0ZXh0OiBwYXJzZWRUZXh0IH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1BhcnNlIGVycm9yOicsIGUpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0NvdWxkIG5vdCByZWFkIHVwbG9hZGVkIGZpbGUnIH0pO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiSW5jb21pbmdGb3JtIiwiZnMiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImZvcm0iLCJtdWx0aXBsZXMiLCJwYXJzZSIsImVyciIsImZpZWxkcyIsImZpbGVzIiwiY29uc29sZSIsImVycm9yIiwic3RhdHVzIiwianNvbiIsImZpbGUiLCJBcnJheSIsImlzQXJyYXkiLCJmaWxlcGF0aCIsIkVycm9yIiwiZGF0YSIsInJlYWRGaWxlU3luYyIsImVuY29kaW5nIiwicGFyc2VkVGV4dCIsInNsaWNlIiwidGV4dCIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/parse.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/parse.ts"));
module.exports = __webpack_exports__;

})();