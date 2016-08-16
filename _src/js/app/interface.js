(function() {

	App._init();

	$(window).on('changed.zf.mediaquery', function(event, name) {
		var doInit = false;

		if (App.current.state != name) {
			App._dispatchDestroy(App.current.state);
			doInit = true;	
		}
		
		App.current.state = name;

		if (doInit) {
			App._dispatchInit(App.current.state);
		}
	});

}());
