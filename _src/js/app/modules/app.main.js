(function ($, window, document, undefined) {

	App.main = (function () {
		var elements = {
				
		};

		var settings = {
			
		};

		var pages = {
		};

		function _init() {	

			for(var key in pages){
				if(App.elements.$body.hasClass(key)){
					pages[key].init();
				}
			}
		}

		// Reveal public methods and global elements, settings
		return {
			elements       : elements,
			settings       : settings,
			init           : _init			
		};
	}());

}(jQuery, this, this.document));
