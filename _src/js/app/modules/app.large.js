(function ($, window, document, undefined) {

	App.large = (function () {

		var elements = {

		};

		var settings = {
		};

		function _init() {
			console.log("Init Large");
			App.current.module = "large";
		}

		function _destroy() {
			console.log("Destroy Large");			
		}




		// Reveal public methods
		return {
			init    : _init,
			destroy : _destroy,
		};
	}());

}(jQuery, this, this.document));
