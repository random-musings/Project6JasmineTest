/* 
* class URLTest 
* this class tests to see if the URL is valid
*
*/

/*
* @public constructor
* @param {url} the url to the news feed
* @description create a class to test the URL
*/
var URLTest = function(url)
{
	this.url = url;
	this.accessibleTestCompleted = false;
	this.isAccessible = false;
};


/*
* @returns true  if URl is properly formatted
* This function tests the url to ensure it is properly formatted
* it expects the url to start with  http or https
* and pass the Url.IsWellFormattedString
* Source: http://stackoverflow.com/questions/5629175/c-is-there-a-better-way-to-verify-url-formatting-than-iswellformeduristring
*/
URLTest.prototype.isValidFormat = function()
{
	try
	{
		return (this.url.length>0 && (this.url.indexOf("http")===0));
	}catch(exception)
	{
	console.log("exception "+exception);
		return false;
	}
};




