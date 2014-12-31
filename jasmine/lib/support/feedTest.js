/* 
* class URLTest 
* this class tests to see if the URL is valid
*
*/

/*
* @public constructor
* @param {elementId} the name used to reference the articles for the news feed
* @description create a class to hold the articles for a news feed
*/
var FeedTest = function(elementId)
{
	this.classid = elementId;
	this.articles =  new Array();
};


/*
* @public
* @returns int 
* @param {elementId} the element holding the articles for the news feed
* @description returns the number of articles that were loaded 
*  loadFeeds must be called first - in order for this to return an accurate answer
*/
FeedTest.prototype.hasArticles = function()
{
	return (this.articles.length>0);
};


/*
* @public 
* @returns void 
* @description scans the all html tags with this.classid.  the  value of the .href tag
*  is added to the articles array
*/
FeedTest.prototype.loadFeeds = function()
{
	var articles = new Array();
	
	//scroll through all html tags with the classId 	
	 $(this.classid).each(function(i, obj) {
		//we expect to find <a..?  tags and push the href tag into the array
		if(obj.href) {
			articles.push  (obj.href);
		}
	});
	this.articles = articles;
};


/*
* @public 
* @returns true if tags do not match the articles in the array
* @description scans the all html tags with this.classid.  the  value of the .href tag
*  comparse the scaned tags to the originalArticles array - if they don't match the articles have changed
* and true is returned
*/
FeedTest.prototype.hasFeedChanged =  function(classId, originalArticles)
{
	var  articleIx =0;
	$(classId).each(function(i, obj) {
		//if the original articles array has no entries but we have one now
		//indicate that we changed
		if(!originalArticles)
		{
			return true;
		}
		
		//test to see we have the same article in the same order
		var articleUri = originalArticles[articleIx];
		if(!articleUri)
		{
			return true;
		}
		
		//check to see if the URL tags match
		if(articleUri !== obj.href)
		{
			return true;
		}
	});
	
	return false;
};