
// Import the tweets
$(document).ready(function(){

	getTweets();
	doTimer(); 
	

function getTweets()
	{
	twitterlib.search('sciencehackday',{limit:10}, function (tweets, options) {
	//	console.log(tweets);
		
		for(x=0;x<tweets.length;x++)
		{
			var container = document.querySelector('#tweets').innerHTML; 
			container+=twitterlib.render(tweets[x]);
			document.querySelector('#tweets').innerHTML=container;
			//console.log('This is page ' + options.page);
	  
		}
	
	});
 }

function doTimer()
{
	$("#tweets").fadeOut("slow",function(){ getTweets(); });
	$("#tweets").fadeIn("slow",function(){});
	//var tweetUpdate = setTimeout(doTimer,10000);
}

});