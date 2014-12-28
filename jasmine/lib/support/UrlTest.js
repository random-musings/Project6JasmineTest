
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
		return (this.url.length>0
			 && (this.url.indexOf("http")===0)
			);
	}catch(exception)
	{
	console.log("exception "+exception);
		return false;
	}
};


/*
* @public
* @returns void`
* @params{callBackFunc}  is called once the ajax request completes
*/
URLTest.prototype.isAvailable = function( )
{
	try{
	
		$.ajax({
				url: this.url,
				dataType: "jsonp",
				type: "GET",
				cache: true, //very very important disables the _=[timestamp] at the end of the request
				success: function(data){ this.isAccessible = true;  this.accessibleTestCompleted  = true; },
				jsonpCallback: this.callBack,
				error: function (xhr, status, errorThrown) {  this.isAccessible = false;  this.accessibleTestCompleted  = true;}
			});
	}catch(exception)
	{
		console.log("Exception encountered "+exception);
		this.accessibleTestCompleted  = true; 
		this.isAccessible = false;  
		return false;
	}
};


