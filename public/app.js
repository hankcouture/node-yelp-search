
var displayResults = function(searchTerm, location, data) {
  var biz = data.businesses;
  var header = '<div><h1 style="float:none">Best '+searchTerm+' in '+location+'</h1></div>'
  $('.results').append(header);  
  for (var i = 0; i < biz.length; i++) {
    var name = biz[i].name;
    var rating = biz[i].rating_img_url;
    var img = biz[i].image_url;
    var neighborhood = biz[i].location.neighborhoods;
    var html = '<div class="business"><img src="'+img+'"><h1>'+name+'</h1><img src="'+rating+'"></div>';
    console.log(neighborhood);
    $('.results').append(html);  
  }
}

var search = function(searchTerm, location){
  var data = {
      "term": searchTerm,
      "location": location
    };
  $.ajax({
    type: "POST",
    url: 'http://127.0.0.1:3000',
    data: JSON.stringify(data),
    success: function(data){
      console.log('search sent');
      console.log(data);
      displayResults(searchTerm, location, data);
    },
    error: function(err){
      console.log(err);
    },
    dataType: 'json'
  });
}

$( ".test" ).on( "click", function() {
  var term = $("#search-term").val();
  var loc = $("#location").val();
  $('#search-term').val('');
  $('#location').val('');
  $('.results').text('');
  search(term, loc);
});



