(function($){
	function update_votes(){
		$('.new-vote-bar').remove();

		var urlParts = window.location.href.split('/'),
			id = urlParts.pop();

		$.getJSON('https://api.imgur.com/3/gallery/'+id, function(json){
			if(json.data.ups && json.data.downs){
				$('#options-btn').after('<div class="new-vote-bar"><div class="upvotes"></div></div>');
				$('.new-vote-bar .upvotes').css('width', (json.data.ups / (json.data.ups + json.data.downs) * 100) + '%');
				$('.new-vote-bar').attr('title', json.data.ups + ' / ' + json.data.downs)
			}
		});
	}

	$(function(){
		var css = '<style>.favorite-image.favorited, .favorite-image:active { color: #85BF25 !important; } .new-vote-bar {  float: right; height: 9px; width: 80px; background: red; border-radius: 2px; margin-top: 16px; margin-right: 13px; } .new-vote-bar .upvotes {  transition: 1s width; height: 9px; background: green; width: 20%; }</style>';
		$('head').append(css);

		update_votes();
	})

	chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
		update_votes();
	});
})(jQuery)