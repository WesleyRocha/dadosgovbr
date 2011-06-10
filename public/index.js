var CKAN = {
	
	getHost: function() {
		return "http://softwarepublico.gov.br:2580/";
	},
	
	fillTags: function() {
		$.ajax({
			type: "GET",
			dataType: "jsonp",
			url: this.getHost() + "api/tag_counts",
			beforeSend: function(xhr) {
				xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
				xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, HEAD");
				$(".tag_list").html('<img src="loader.gif" />');
			},
			success: function(json) {
				$(".tag_list").html("");
				$(json).each(function(){
					var tagName = this[0].toString();
					var tagCount = this[1];
					  
					var div = $('<div class="tag" rel="' + tagCount + '"></div>');
					div.append($('<a href="' + CKAN.getHost() + 'tag/' + tagName + '">'+ tagName +'</a>'));
					div.appendTo($(".tag_list"));
				});
			}
		});
	},
	
	searchPackage: function(query) {
		var queryUrl = this.getHost() + 'package/search?q=' + query;
		document.location = queryUrl;
	}
	
}

jQuery(function($){
	CKAN.fillTags();
	$(".btn_search").click(function(e){
		e.preventDefault();
		CKAN.searchPackage($("#search").prop("value"));
	});
	
	$("#search").focus();
});






















