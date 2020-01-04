/**
 * @file Contains the functionality associated with the about button.
 * @module about
 * @author Fredrik Bergstrand <frebe339@student.liu.se>
 */

/**
 * Add event handlers for the different possible ways to open/close the about
 * information pop-up.
 */
function initAbout() {
    var logo = $('#logo-wrapper');
    var aboutCloseBtn = $('#about-close-button');
    var about = $('#about-overlay');

    var aboutClickClose = function (event) {
        if (about.is(":visible") &&
            !$(event.target).closest('#about-overlay').length &&
            !$(event.target).is('#about-button')) {
            about.hide();
            $(document).unbind('click', aboutClickClose);
        }
    };

    logo.click(function () {
        about.show();
    });

    aboutCloseBtn.click(function () {
        about.hide();
        $(document).unbind('click', aboutClickClose);
    });

    // Hide about when escape is pressed
    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            about.hide();
            $(document).unbind('click', aboutClickClose);
        }
    });
}
