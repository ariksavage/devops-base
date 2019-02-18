/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n\n/**\n * BLOCK: moxy-link-image\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar editor = wp.editor;\nvar components = wp.components;\nvar element = wp.element;\nvar el = wp.element.createElement;\nvar InspectorControls = wp.editor.InspectorControls;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    MediaUpload = _wp$editor.MediaUpload,\n    PlainText = _wp$editor.PlainText;\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('moxy/block-moxy-link-image', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Moxy Link Image'), // Block title.\n\ticon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('moxy-link-image — CGB Block'), __('Moxy Link Image'), __('create-guten-block')],\n\n\tattributes: {\n\t\ttext: {\n\t\t\tsource: 'text',\n\t\t\tselector: '.moxy-li-text'\n\t\t},\n\t\turl: {\n\t\t\tsource: 'text',\n\t\t\tselector: '.moxy-li-link'\n\t\t},\n\t\tmediaURL: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'attribute',\n\t\t\tselector: 'img',\n\t\t\tattribute: 'src'\n\t\t}\n\t},\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    className = _ref.className,\n\t\t    setAttributes = _ref.setAttributes;\n\n\t\tvar onSelectImage = function onSelectImage(media) {\n\t\t\treturn setAttributes({\n\t\t\t\tmediaURL: media.url\n\t\t\t});\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'moxy-link-image-wrap' },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{\n\t\t\t\t\tclassName: 'moxy-link-image',\n\t\t\t\t\tstyle: {\n\t\t\t\t\t\tbackgroundImage: \"url(\" + (attributes.mediaURL || 'https://via.placeholder.com/300x300') + \")\"\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\twp.element.createElement(PlainText, {\n\t\t\t\t\tonChange: function onChange(content) {\n\t\t\t\t\t\treturn setAttributes({ text: content });\n\t\t\t\t\t},\n\t\t\t\t\tvalue: attributes.text,\n\t\t\t\t\tplaceholder: 'Link text',\n\t\t\t\t\tclassName: 'moxy-li-text'\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(PlainText, {\n\t\t\t\tonChange: function onChange(content) {\n\t\t\t\t\treturn setAttributes({ url: content });\n\t\t\t\t},\n\t\t\t\tvalue: attributes.url,\n\t\t\t\tplaceholder: 'link URL',\n\t\t\t\tclassName: 'moxy-li-link'\n\t\t\t}),\n\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\tonSelect: onSelectImage,\n\t\t\t\ttype: 'image',\n\t\t\t\tclassName: 'moxy-li-image edit',\n\t\t\t\trender: function render(obj) {\n\t\t\t\t\treturn el(components.Button, {\n\t\t\t\t\t\tclassName: 'components-icon-button image-block-btn is-button is-default is-large',\n\t\t\t\t\t\tonClick: obj.open\n\t\t\t\t\t}, el('svg', { className: 'dashicon dashicons-edit', width: '20', height: '20' }, el('path', { d: \"M2.25 1h15.5c.69 0 1.25.56 1.25 1.25v15.5c0 .69-.56 1.25-1.25 1.25H2.25C1.56 19 1 18.44 1 17.75V2.25C1 1.56 1.56 1 2.25 1zM17 17V3H3v14h14zM10 6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm3 5s0-6 3-6v10c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V8c2 0 3 4 3 4s1-3 3-3 3 2 3 2z\" })), el('span', {}, 'Select image'));\n\t\t\t\t}\n\t\t\t})\n\t\t);\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tsave: function save(_ref2) {\n\t\tvar attributes = _ref2.attributes;\n\n\t\treturn wp.element.createElement(\n\t\t\t'a',\n\t\t\t{ className: 'moxy-li-link', href: attributes.url },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{\n\t\t\t\t\tclassName: 'moxy-link-image',\n\t\t\t\t\tstyle: { backgroundImage: \"url(\" + attributes.mediaURL + \")\" }\n\t\t\t\t},\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\t{ className: 'moxy-li-text' },\n\t\t\t\t\tattributes.text\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBCTE9DSzogbW94eS1saW5rLWltYWdlXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxudmFyIGVkaXRvciA9IHdwLmVkaXRvcjtcbnZhciBjb21wb25lbnRzID0gd3AuY29tcG9uZW50cztcbnZhciBlbGVtZW50ID0gd3AuZWxlbWVudDtcbnZhciBlbCA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudDtcbnZhciBJbnNwZWN0b3JDb250cm9scyA9IHdwLmVkaXRvci5JbnNwZWN0b3JDb250cm9scztcbnZhciBfd3AkZWRpdG9yID0gd3AuZWRpdG9yLFxuICAgIFJpY2hUZXh0ID0gX3dwJGVkaXRvci5SaWNoVGV4dCxcbiAgICBNZWRpYVVwbG9hZCA9IF93cCRlZGl0b3IuTWVkaWFVcGxvYWQsXG4gICAgUGxhaW5UZXh0ID0gX3dwJGVkaXRvci5QbGFpblRleHQ7XG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnbW94eS9ibG9jay1tb3h5LWxpbmstaW1hZ2UnLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oJ01veHkgTGluayBJbWFnZScpLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogJ3NoaWVsZCcsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cblx0Y2F0ZWdvcnk6ICdjb21tb24nLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cblx0a2V5d29yZHM6IFtfXygnbW94eS1saW5rLWltYWdlIOKAlCBDR0IgQmxvY2snKSwgX18oJ01veHkgTGluayBJbWFnZScpLCBfXygnY3JlYXRlLWd1dGVuLWJsb2NrJyldLFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0ZXh0OiB7XG5cdFx0XHRzb3VyY2U6ICd0ZXh0Jyxcblx0XHRcdHNlbGVjdG9yOiAnLm1veHktbGktdGV4dCdcblx0XHR9LFxuXHRcdHVybDoge1xuXHRcdFx0c291cmNlOiAndGV4dCcsXG5cdFx0XHRzZWxlY3RvcjogJy5tb3h5LWxpLWxpbmsnXG5cdFx0fSxcblx0XHRtZWRpYVVSTDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzb3VyY2U6ICdhdHRyaWJ1dGUnLFxuXHRcdFx0c2VsZWN0b3I6ICdpbWcnLFxuXHRcdFx0YXR0cmlidXRlOiAnc3JjJ1xuXHRcdH1cblx0fSxcblxuXHQvKipcbiAgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG4gICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxuICAqXG4gICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKi9cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gX3JlZi5zZXRBdHRyaWJ1dGVzO1xuXG5cdFx0dmFyIG9uU2VsZWN0SW1hZ2UgPSBmdW5jdGlvbiBvblNlbGVjdEltYWdlKG1lZGlhKSB7XG5cdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdG1lZGlhVVJMOiBtZWRpYS51cmxcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogJ21veHktbGluay1pbWFnZS13cmFwJyB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNsYXNzTmFtZTogJ21veHktbGluay1pbWFnZScsXG5cdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyAoYXR0cmlidXRlcy5tZWRpYVVSTCB8fCAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHgzMDAnKSArIFwiKVwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUGxhaW5UZXh0LCB7XG5cdFx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGNvbnRlbnQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdGV4dDogY29udGVudCB9KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLnRleHQsXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6ICdMaW5rIHRleHQnLFxuXHRcdFx0XHRcdGNsYXNzTmFtZTogJ21veHktbGktdGV4dCdcblx0XHRcdFx0fSlcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUGxhaW5UZXh0LCB7XG5cdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShjb250ZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyB1cmw6IGNvbnRlbnQgfSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLnVybCxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICdsaW5rIFVSTCcsXG5cdFx0XHRcdGNsYXNzTmFtZTogJ21veHktbGktbGluaydcblx0XHRcdH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KE1lZGlhVXBsb2FkLCB7XG5cdFx0XHRcdG9uU2VsZWN0OiBvblNlbGVjdEltYWdlLFxuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRjbGFzc05hbWU6ICdtb3h5LWxpLWltYWdlIGVkaXQnLFxuXHRcdFx0XHRyZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihvYmopIHtcblx0XHRcdFx0XHRyZXR1cm4gZWwoY29tcG9uZW50cy5CdXR0b24sIHtcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogJ2NvbXBvbmVudHMtaWNvbi1idXR0b24gaW1hZ2UtYmxvY2stYnRuIGlzLWJ1dHRvbiBpcy1kZWZhdWx0IGlzLWxhcmdlJyxcblx0XHRcdFx0XHRcdG9uQ2xpY2s6IG9iai5vcGVuXG5cdFx0XHRcdFx0fSwgZWwoJ3N2ZycsIHsgY2xhc3NOYW1lOiAnZGFzaGljb24gZGFzaGljb25zLWVkaXQnLCB3aWR0aDogJzIwJywgaGVpZ2h0OiAnMjAnIH0sIGVsKCdwYXRoJywgeyBkOiBcIk0yLjI1IDFoMTUuNWMuNjkgMCAxLjI1LjU2IDEuMjUgMS4yNXYxNS41YzAgLjY5LS41NiAxLjI1LTEuMjUgMS4yNUgyLjI1QzEuNTYgMTkgMSAxOC40NCAxIDE3Ljc1VjIuMjVDMSAxLjU2IDEuNTYgMSAyLjI1IDF6TTE3IDE3VjNIM3YxNGgxNHpNMTAgNmMwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDIgLjkgMiAyIDIgMi0uOSAyLTJ6bTMgNXMwLTYgMy02djEwYzAgLjU1LS40NSAxLTEgMUg1Yy0uNTUgMC0xLS40NS0xLTFWOGMyIDAgMyA0IDMgNHMxLTMgMy0zIDMgMiAzIDJ6XCIgfSkpLCBlbCgnc3BhbicsIHt9LCAnU2VsZWN0IGltYWdlJykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH0sXG5cblx0LyoqXG4gICogVGhlIHNhdmUgZnVuY3Rpb24gZGVmaW5lcyB0aGUgd2F5IGluIHdoaWNoIHRoZSBkaWZmZXJlbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgY29tYmluZWRcbiAgKiBpbnRvIHRoZSBmaW5hbCBtYXJrdXAsIHdoaWNoIGlzIHRoZW4gc2VyaWFsaXplZCBieSBHdXRlbmJlcmcgaW50byBwb3N0X2NvbnRlbnQuXG4gICpcbiAgKiBUaGUgXCJzYXZlXCIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKi9cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShfcmVmMikge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gX3JlZjIuYXR0cmlidXRlcztcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnYScsXG5cdFx0XHR7IGNsYXNzTmFtZTogJ21veHktbGktbGluaycsIGhyZWY6IGF0dHJpYnV0ZXMudXJsIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAnbW94eS1saW5rLWltYWdlJyxcblx0XHRcdFx0XHRzdHlsZTogeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYXR0cmlidXRlcy5tZWRpYVVSTCArIFwiKVwiIH1cblx0XHRcdFx0fSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdwJyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ21veHktbGktdGV4dCcgfSxcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLnRleHRcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);