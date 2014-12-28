
var FeedTest = function(elementId,currentFeed)
{
	this.classid = elementId;
	this.articles =  new Array();
	this.currentFeed = currentFeed;
};

FeedTest.prototype.hasArticles = function()
{
	return (this.articles.length>0);
};

FeedTest.prototype.loadFeeds = function()
{
	var articles = new Array();
	
	 $(this.classid).each(function(i, obj) {
		 articles.push  (obj.href);
	});
	this.articles = articles;
};

FeedTest.prototype.hasFeedChanged =  function()
{
	var  articleIx =0;
	$(this.classid).each(function(i, obj) {
		if(!this.articles)
		{
			return true;
		}
		
		var articleUri = this.articles[articleIx];
		if(!articleUri)
		{
			return true;
		}
		
		if(articleUri !== obj.href)
		{
			return true;
		}
	});
	
	return false;
};