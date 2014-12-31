# Project Overview

this project tests the functionality of the site by 
1. looping through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
2. looping through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
3. ensureing the menu element is hidden by default. 
4. ensuring the menu changes visibility when the menu icon is clicked. 
5. ensuringhen the loadFeed function is called and completes its work
6. ensuring there is at least a single .entry element within the .feed container. 
7. ensuring when a new feed is loaded by the loadFeed function that the content actually changes. 


# How to run

Open the index.html in a web browser like chrome or internet explorer


Dependancies
* Jasmine 2.1.2 test suite


how it works

upon opening the index.html in a modern web browser the jasmine tests will begin
at the bottom of the page you will see the Jasmine 2.1.2 footer.
the green dots underneatht he footer indicates the tests being run.
Several tests are asynchronous  and require several seconds to complete.
you may notce the menu pop out and in as well as content being changed.
this indicates that the tests are runnin
once the tests have completed you should see a further break down of what was run.

A total of the tests that were run will be display underneat the Jasmine 2.1.2 hear
if there are any failures during the test you will see the count of failures as well as
exceptions encountered.
 if all tests succeed your page should have the following content
 
 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
16 specs, 0 failures


Jasmine__TopLevel__Suite
RSS Feeds
	are defined
	feed is defined
	feed URL:http://blog.udacity.com/feeds/posts/default?alt=rss is well formatted
	feed Name: Udacity Blog is defined
	feed is defined
	feed URL:http://css-tricks.com/feed is well formatted
	feed Name: CSS Tricks is defined
	feed is defined
	feed URL:http://feeds.feedburner.com/html5rocks is well formatted
	feed Name: HTML5 Rocks is defined
	feed is defined
	feed URL:http://feeds.feedburner.com/udacity-linear-digressions is well formatted
	feed Name: Linear Digressions is defined

The menu
	is hidden initially
	changes visibility when "3 bars" symbol is clicked

Initial Feed Entries
	feed is loaded with at least one article

New Feed Selection
	changes content when clicked from menu
