/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {




    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

		
		var feedIx;
		for(feedIx in allFeeds)
		{
			var feed = allFeeds[feedIx];
			it('feed is defined',function() {
				expect(feed).toBeDefined();
			});
			var uriTest = new URLTest(feed.url);
			
			 /* TODO: Write a test that loops through each feed
			 * in the allFeeds object and ensures it has a URL defined
			 * and that the URL is not empty.
			 */
			it('feed URL:'+feed.url+' is well formatted', function(){
				expect(uriTest.isValidFormat()).toBe(true);
			});
			
			/*
			* Ensure that we can get to this URL (returns 200)
			*/
			//uriTest.isAvailable();
			
			
			 /* TODO: Write a test that loops through each feed
			 * in the allFeeds object and ensures it has a name defined
			 * and that the name is not empty.
			 */
			it('feed Name: '+feed.name+' is defined',function() {
				expect(feed.name).toBeDefined();
				expect(feed.name.length>0).toBe(true);
			});
		}	
		 
    });


    /* TODO: Write a new test suite named "The menu" */
	describe('The menu', function() 
	{
		
		var menuTester = new MenuTest('body');
		var menuIcon = $('.menu-icon-link');
		 
		  
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
		describe('is hidden initially', function()
		{
			it('changes visibility when "3 bars" symbol is clicked',function(done)
			{
				setTimeout(function(){expect(menuTester.hasClass('menu-hidden')).toBe(true);},1);
				setTimeout(function(){menuIcon.click();},100);
				setTimeout(function(){expect(menuTester.hasClass('menu-hidden')).toBe(false);},500);
				setTimeout(function(){menuIcon.click();},700);
				setTimeout(function(){expect(menuTester.hasClass('menu-hidden')).toBe(true);done();},1000);
			});
		
		});
	});
		
		
	
    /* TODO: Write a new test suite named "Initial Entries" */
	describe("Initial Feed Entries",function()
	{
		
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
		 beforeEach(function(done){ loadFeed(0,done); });
		 it('feed is loaded with at least one article', 
				function(){
					var container = $('.feed');
					expect(container["0"].children.length).not.toBe(0);
					}
		);
		 
	});
		

    // TODO: Write a new test suite named "New Feed Selection"
        //TODO: Write a test that ensures when a new feed is loaded
         // by the loadFeed function that the content actually changes.
         // Remember, loadFeed() is asynchronous.
         //
	describe("New Feed Selection",function()
	{
		var initialFeed =0;
		var feedTest = new FeedTest('.entry-link',initialFeed);
		feedTest.loadFeeds();
		//load initial entries
		beforeEach(
			function(done){ 
				loadFeed(initialFeed+1,done); 
				
			}
		);
		
	
		
		it('changes content when clicked from menu',function(){ 
			//loadFeed(2,done); 
			var callFunc = function()
				{	var  articleIx =0;
					var retValue = false;
					$('.entry-link').each(function(i, obj) {
						if(!feedTest.articles){retValue = true;}					
						var articleUri = feedTest.articles[articleIx];
						if(!articleUri){retValue = true;}
						if(articleUri !== obj.href){retValue = true;}
						articleIx++;
					});
					return retValue;
				}
			expect(callFunc()).toBe(true);
		});
		
		
		
	});
	
}());
