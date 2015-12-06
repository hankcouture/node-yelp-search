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
  search(term, loc);
});



