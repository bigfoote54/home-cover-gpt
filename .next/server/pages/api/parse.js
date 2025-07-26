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

/***/ "pdf-parse":
/*!****************************!*\
  !*** external "pdf-parse" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("pdf-parse");

/***/ }),

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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var pdf_parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdf-parse */ \"pdf-parse\");\n/* harmony import */ var pdf_parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdf_parse__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([formidable__WEBPACK_IMPORTED_MODULE_0__]);\nformidable__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// pages/api/parse.ts\n\n\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nasync function handler(req, res) {\n    try {\n        // wrap form.parse in a Promise so we can await it\n        const { fields, files } = await new Promise((resolve, reject)=>{\n            const form = (0,formidable__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n                multiples: false,\n                keepExtensions: true\n            });\n            form.parse(req, (err, fields, files)=>{\n                if (err) return reject(err);\n                resolve({\n                    fields,\n                    files\n                });\n            });\n        });\n        // grab the uploaded file (your <input name=\"file\" />)\n        const uploaded = Array.isArray(files.file) ? files.file[0] : files.file;\n        if (!uploaded) {\n            return res.status(400).json({\n                error: \"No file uploaded.\"\n            });\n        }\n        // read it off disk and extract text\n        const buffer = await fs__WEBPACK_IMPORTED_MODULE_1___default().promises.readFile(uploaded.filepath);\n        const { text } = await pdf_parse__WEBPACK_IMPORTED_MODULE_2___default()(buffer);\n        return res.status(200).json({\n            text\n        });\n    } catch (err) {\n        console.error(\"❌ parse.ts error:\", err);\n        return res.status(500).json({\n            error: \"Failed to parse PDF.\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGFyc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUFxQjtBQUVlO0FBQ2hCO0FBQ2E7QUFFMUIsTUFBTUcsU0FBUztJQUNwQkMsS0FBSztRQUNIQyxZQUFZO0lBQ2Q7QUFDRixFQUFFO0FBRWEsZUFBZUMsUUFBUUMsR0FBbUIsRUFBRUMsR0FBb0I7SUFDN0UsSUFBSTtRQUNGLGtEQUFrRDtRQUNsRCxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTSxJQUFJQyxRQUdqQyxDQUFDQyxTQUFTQztZQUNYLE1BQU1DLE9BQU9kLHNEQUFVQSxDQUFDO2dCQUN0QmUsV0FBVztnQkFDWEMsZ0JBQWdCO1lBQ2xCO1lBQ0FGLEtBQUtHLEtBQUssQ0FBQ1YsS0FBSyxDQUFDVyxLQUFLVCxRQUFRQztnQkFDNUIsSUFBSVEsS0FBSyxPQUFPTCxPQUFPSztnQkFDdkJOLFFBQVE7b0JBQUVIO29CQUFRQztnQkFBTTtZQUMxQjtRQUNGO1FBRUEsc0RBQXNEO1FBQ3RELE1BQU1TLFdBQVdDLE1BQU1DLE9BQU8sQ0FBQ1gsTUFBTVksSUFBSSxJQUFJWixNQUFNWSxJQUFJLENBQUMsRUFBRSxHQUFHWixNQUFNWSxJQUFJO1FBQ3ZFLElBQUksQ0FBQ0gsVUFBVTtZQUNiLE9BQU9YLElBQUllLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBb0I7UUFDM0Q7UUFFQSxvQ0FBb0M7UUFDcEMsTUFBTUMsU0FBUyxNQUFNekIsa0RBQVcsQ0FBQzJCLFFBQVEsQ0FBQ1QsU0FBU1UsUUFBUTtRQUMzRCxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU01QixnREFBUUEsQ0FBQ3dCO1FBRWhDLE9BQU9sQixJQUFJZSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVNO1FBQUs7SUFDckMsRUFBRSxPQUFPWixLQUFLO1FBQ1phLFFBQVFOLEtBQUssQ0FBQyxxQkFBcUJQO1FBQ25DLE9BQU9WLElBQUllLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF1QjtJQUM5RDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1jb3Zlci8uL3BhZ2VzL2FwaS9wYXJzZS50cz8yNTVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9wYXJzZS50c1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgZm9ybWlkYWJsZSBmcm9tICdmb3JtaWRhYmxlJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGRmUGFyc2UgZnJvbSAncGRmLXBhcnNlJztcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgYm9keVBhcnNlcjogZmFsc2UsICAvLyBkaXNhYmxlIE5leHTigJlzIGJ1aWx04oCRaW4gcGFyc2VyIHNvIGZvcm1pZGFibGUgY2FuIHRha2Ugb3ZlclxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICB0cnkge1xuICAgIC8vIHdyYXAgZm9ybS5wYXJzZSBpbiBhIFByb21pc2Ugc28gd2UgY2FuIGF3YWl0IGl0XG4gICAgY29uc3QgeyBmaWVsZHMsIGZpbGVzIH0gPSBhd2FpdCBuZXcgUHJvbWlzZTx7XG4gICAgICBmaWVsZHM6IGZvcm1pZGFibGUuRmllbGRzO1xuICAgICAgZmlsZXM6IGZvcm1pZGFibGUuRmlsZXM7XG4gICAgfT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgZm9ybSA9IGZvcm1pZGFibGUoe1xuICAgICAgICBtdWx0aXBsZXM6IGZhbHNlLFxuICAgICAgICBrZWVwRXh0ZW5zaW9uczogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgZm9ybS5wYXJzZShyZXEsIChlcnIsIGZpZWxkcywgZmlsZXMpID0+IHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICByZXNvbHZlKHsgZmllbGRzLCBmaWxlcyB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gZ3JhYiB0aGUgdXBsb2FkZWQgZmlsZSAoeW91ciA8aW5wdXQgbmFtZT1cImZpbGVcIiAvPilcbiAgICBjb25zdCB1cGxvYWRlZCA9IEFycmF5LmlzQXJyYXkoZmlsZXMuZmlsZSkgPyBmaWxlcy5maWxlWzBdIDogZmlsZXMuZmlsZTtcbiAgICBpZiAoIXVwbG9hZGVkKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ05vIGZpbGUgdXBsb2FkZWQuJyB9KTtcbiAgICB9XG5cbiAgICAvLyByZWFkIGl0IG9mZiBkaXNrIGFuZCBleHRyYWN0IHRleHRcbiAgICBjb25zdCBidWZmZXIgPSBhd2FpdCBmcy5wcm9taXNlcy5yZWFkRmlsZSh1cGxvYWRlZC5maWxlcGF0aCk7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSBhd2FpdCBwZGZQYXJzZShidWZmZXIpO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdGV4dCB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcign4p2MIHBhcnNlLnRzIGVycm9yOicsIGVycik7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gcGFyc2UgUERGLicgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJmb3JtaWRhYmxlIiwiZnMiLCJwZGZQYXJzZSIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZmllbGRzIiwiZmlsZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZvcm0iLCJtdWx0aXBsZXMiLCJrZWVwRXh0ZW5zaW9ucyIsInBhcnNlIiwiZXJyIiwidXBsb2FkZWQiLCJBcnJheSIsImlzQXJyYXkiLCJmaWxlIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiYnVmZmVyIiwicHJvbWlzZXMiLCJyZWFkRmlsZSIsImZpbGVwYXRoIiwidGV4dCIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/parse.ts\n");

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