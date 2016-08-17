webpackHotUpdate(2,{

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(76);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(78)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(76, function() {
				var newContent = __webpack_require__(76);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(77)();
	// imports


	// module
	exports.push([module.id, "body {\n  background-image: url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./images/gplay.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ");\n}\n.no-border-radius {\n  border-radius: 0 !important;\n}\n.ui.menu {\n  background-color: #333;\n}\n.logo {\n  padding: 11px;\n}\n.logo img {\n  height: 28px;\n}\n.ui.menu .header.item.logo {\n  font-size: 16px;\n}\n.ui.inverted.menu .item:before {\n  background: rgba(255, 255, 255, 0);\n}\n#apps_container {\n  margin: 0 0 15px 0;\n}\n#apps_container .column {\n  padding: 5px;\n}\n#apps_container .app_title {\n  height: 28px;\n  font-size: 12px;\n  line-height: 14px;\n  overflow: hidden;\n  text-align: center;\n}\n#menu_user_info .point {\n  color: white;\n  line-height: 23px;\n  padding: 0 12px 0 8px;\n  border-radius: 4px;\n  background: #575648;\n  width: 80px;\n  margin-right: 13px;\n}\n#menu_user_info .point span {\n  float: right;\n}\n#menu_user_info img {\n  height: 28px;\n  width: 24px;\n}\n#btns_1 {\n  margin: 10px 0 20px 0;\n}\n#btns_1 button {\n  margin: 8px 0;\n  box-shadow: 1px 2px rgba(85, 85, 85, 0.38);\n}\n#btns_1 button:nth-child(2) {\n  background: white;\n}\n#navbar {\n  margin: 0;\n}\n#popular_app {\n  margin: 20px 0;\n}\n#top_menu {\n  border-radius: 0;\n  margin-top: 0;\n}\n#top_menu a.active {\n  background: url(https://www.transparenttextures.com/patterns/tree-bark.png);\n}\n.app_box {\n  width: 100%;\n  background-color: white;\n  box-shadow: 0px 1px 1px rgba(51, 51, 51, 0.34);\n  padding: 3px;\n  margin-top: 6px;\n}\n.app_box img {\n  width: 60px;\n  height: 60px;\n}\n#search .ui {\n  width: 100%;\n}\n.m-carousel {\n  margin: 10px 0;\n  width: 100%;\n}\n#footer {\n  font-size: 12px;\n  letter-spacing: 1px;\n  text-align: center;\n}\n#footer a {\n  color: white;\n}\n#footer .sep {\n  color: #9c9c9c;\n  margin: 0 5px;\n}\n#footer .rights {\n  display: inline-block;\n  color: #BFBFBF;\n}\n", ""]);

	// exports


/***/ }

})