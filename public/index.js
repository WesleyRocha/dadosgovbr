var CKAN = {
	
	getHost: function() {
		return "http://br.ckan.net/";
	},
	
	fillTags: function() {
		$.ajax({
			type: "GET",
			dataType: "jsonp",
			url: this.getHost() + "api/rest/tag",
			beforeSend: function(xhr) {
				xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
				xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, HEAD");
				$(".tag_list").html('<img src="loader.gif" />');
			},
			success: function(json) {
				$(".tag_list").html("");
				$(json).each(function(){
					$('<div class="tag">' + this.toString() + '</div>').appendTo($(".tag_list"));
				});
			}
		});
	}
	
}

jQuery(function($){
	CKAN.fillTags();
});