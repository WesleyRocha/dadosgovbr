var CKAN = {
	
	getHost: function() {
		return "http://br.ckan.net/";
	},
	
	getPackage: function() {
		$.ajax({
			type: "GET",
			dataType: "jsonp",
			url: this.getHost() + "api/rest/package",
			beforeSend: function(xhr) {
				xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
				xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, HEAD");
			},
			success: function(json) {
				console.log(json);
			}
		});
	}
	
}

jQuery(function($){
	CKAN.getPackage();
});