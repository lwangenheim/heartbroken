$('div').find("span[class='favorite-image btn btn-grey left title favorited']").attr("id", "favbutton").css('color', '#85bf25');
$('div').find("span[class='favorite-image btn btn-grey left title']").attr("id", "favbutton");

$('#favbutton').click(function() {
  if ($("span[class='favorite-image btn btn-grey left title favorited']").length){
    $('#favbutton').css('color', '#85BF25');
  }else{
    $('#favbutton').css('color', '#ccc');
  }
});
