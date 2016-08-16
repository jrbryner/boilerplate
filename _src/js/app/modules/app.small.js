(function ($, window, document, undefined) {

	App.small = (function () {

		var elements = {			
		};

		var settings = {
		};

		function _init() {
			console.log("Init Small");
			App.current.module = "small";

		}

		function _destroy() {
			console.log("Destroy Small");
		}

		// Reveal public methods
		return {
			init    : _init,
			destroy : _destroy
		};
	}());

}(jQuery, this, this.document));
