# Project 6 -- Feed Reader Testing

This project is hosted at: http://qqttss.github.io/Feed-Reader-Testing/

In this project, a web-based application that reads RSS feeds is given. A number of tests are written against the application using Jasmine. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

Tests are added in jasmine/spec/feedreader.js. The following tests are included:

1. RSS feeds are defined and not empty.

2. Each feed in the allFeeds has a defined and valid URL.

3. Each feed in the allFeeds has a defined and non-blank name

4. The menu element is hidden by default once the page is loaded.

5. The menu changes visibility (visible or hidden) when the menu icon is clicked.

6. The .feed container has at least a single .entry element.

7. The feed changes its content after selecting a new content.
