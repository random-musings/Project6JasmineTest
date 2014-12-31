
/* 
* class menuTest 
* this class tests to see if the URL is valid
*
*/

/*
* @public constructor
* @param {elementId} the html element we will look at for in our tests
* @description creates a class to test the URL and its properties
*/
var MenuTest = function(elementId)
{
	this.element = elementId;
};


/*
* @public  void  
* @param {className} the class id we will search for in this test
* @description returns true if className is in the classList on element
*/
MenuTest.prototype.hasClass = function(className)
{
	var classFound = false;
	//get a list of classes on this tag
	var classList =$(this.element).attr('class').split(/\s+/);
	$.each( classList, function(index, item) {
		//match the classes against the one we want to find
		if (item ===  className) 
		{
			classFound=true;//do something
		}
	});
	//return the results of our search;
	return classFound;
};