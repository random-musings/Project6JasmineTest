

var MenuTest = function(elementId)
{
	this.element = elementId;
};



MenuTest.prototype.hasClass = function(className)
{
	var classFound = false;
	var classList =$(this.element).attr('class').split(/\s+/);
	$.each( classList, function(index, item){
		if (item ===  className) 
		{
			classFound=true;//do something
		}
	});
	return classFound;
};