/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */
$(function() {
    /* first test suite. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* a test that loops through each feed in the allFeeds object and
         * ensures it has a URL defined and that the URL is not empty.
         */
        it('have URL defined and they are not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* a test that loops through each feed in the allFeeds object and
         * ensures it has a name defined and that the name is not empty.
         */
        it('have a name defined and it is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });

    });

    /* a new test suite named "The menu" */
    /* a test that ensures the menu changes visibility when the menu icon is clicked.
     * This test have two expectations: does the menu display when clicked
     * and does it hide when clicked again.
     */
    describe('The menu', function() {
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('is hidden or displayed when the menu ion is clicked', function() {
            menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy(); // checked if the menu is displayed when clicked
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy(); // checked if the menu is hidden when is clicked
        });
    });


    /* new test suite named "Initial Entries" */
    /* a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('has at least a single .entry element within the .feed container', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /* a new test suite named "New Feed Selection"
    /* a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     */
    describe('New Feed Selection', function() {
        var initFeedContent,
            updatedFeedContent;

        beforeEach(function(done) {
            loadFeed(0, function() {
                initFeedContent = $('.feed').html();
                done();
            });
        });

        it('changes the content after loadFeed function has been invoked', function(done) {
            loadFeed(1, function() {
                updatedFeedContent = $('.feed').html();
                expect(updatedFeedContent).not.toBe(initFeedContent);
                done();
            });
        });
    });

}());
