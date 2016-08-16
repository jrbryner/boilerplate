(function ($, window, document, undefined) {

	window.App = {};

	App.current = {
		module : null,
		state  : null
	}; 

	App.elements = {
		$win      : $(window),
		$doc      : $(document),
		$html     : $('html'),
		$body     : $('body')			
	};

	App._init = function() {
		this._initFoundation();	
		this.current.state = Foundation.MediaQuery.current;
		this.main.init();
		this._dispatchInit(this.current.state);		
	};

	App._dispatchInit = function(name) {
		if (App[name] !== undefined && this.current.module !== name) {
			App[name].init();
		}
	};

	App._dispatchDestroy = function(name) {
		if (App[name] !== undefined) {
			App[name].destroy();
		}
	};

	App._initFoundation = function() {
		this.elements.$doc.foundation();
	};
	
	// window.App = {};

	// App = function() {

	// 	var current = {
	// 		module : null,
	// 		state  : null
	// 	};

	// 	var elements = {
	// 		$win      : $(window),
	// 		$doc      : $(document),
	// 		$body     : $('body')			
	// 	};

	// 	return {
	// 		current  : current,
	// 		elements : elements
	// 	};
	// };

	// App.prototype._init = function() {
	// 	this._initFoundation();
	// 	App.current.state = Foundation.MediaQuery.current;
	// 	this._dispatchInit(App.current.state);		
	// };

	// App.prototype._dispatchInit = function(name) {
	// 	if (App[name] !== undefined && current.module !== name) {
	// 		App[name].init();
	// 	}
	// };

	// App.prototype._dispatchDestroy = function(name) {
	// 	if (App[name] !== undefined) {
	// 		App[name].destroy();
	// 	}
	// };

	// App.prototype._initFoundation = function(){
	// 	this.elements.$doc.foundation();
	// };

}(jQuery, this, this.document));