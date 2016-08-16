(function ($, window, document, undefined) {

	App.medium = (function () {

		var elements = {
		};

		var settings = {
		};

		function _init() {
			console.log("Init Medium");
			App.current.module = "medium";
		}

		function _destroy() {
			console.log("Destroy Medium");
		}

		// Reveal public methods
		return {
			init    : _init,
			destroy : _destroy
		};
	}());

}(jQuery, this, this.document));
