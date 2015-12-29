# Project 6 -- Feed Reader Testing

This project is hosted at: http://qqttss.github.io/Feed-Reader-Testing/

In this project, a web-based application that reads RSS feeds is given.
A number of tests are written against the application using Jasmine. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

How will I complete this project?

1. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.

2. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
3. Write a new test suite named "The menu".

4. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.

5. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.

6. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function.

7. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.
