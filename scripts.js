$(function(){

  var redditData = {};
  
  $.get('https://www.reddit.com/r/aww/.json', function(data){
    console.log(data);
    
    redditData = data;




    for (var i = 0; i<10; i++){
		var root = redditData.data.children[i].data;
     
     // console.log(root.title);
     // console.log(root.author;
     // console.log(root.thumbnail);
     // console.log(root.num_comments);
    
		$("#container").append('<div class="listing">' 
			+ '<img src="' + root.thumbnail + '">' 
			+ '<div class = "text">'
				  + '<h3 class="title">' + root.title + '</h3>' 
				  + '<p class="author">' + "Author: " + root.author + '</p>' 
				  + '<p class="comments">' + root.num_comments + " comments" + '</p>' 
			+ '</div>'
		+ '</div>');
	}
    


  });  
  
});