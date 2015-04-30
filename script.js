var main = function() {
  $('form').submit(function() {
  	var comment = $('#comment').val()
  console.log(comment)
    if(comment !== "") {
      var html = $('<li>').text(comment);
      $(html).prependTo('.comments');
      	$('#comment').val("")
    }

    return false;
  });
};

$(document).ready(main);