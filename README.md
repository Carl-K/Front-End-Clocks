# Front-End-Clocks
An analog and digital clock showing the current time written in HTML, CSS, and JavaScript to add to your webpages.

Each of the two clocks contains HTML, CSS, and JavaScript files.  Make sure you grab all three for each clock type.  The JavaScript is fully written and functional; it's not necessary to edit any of it except for adding additional functionality.  Any design changes can be made to the CSS and HTML files.  Altering the HTML IDs will break the JavaScript if it is not properly updated to match.

The analog clock has 4 different JavaScript files but only one is needed based on your needs:

AnalogClockAlways - The clock will always show the most accurate time.  The main function updateClock() always executes to get the most accurate time.  The hands do not step but just move into place.  This is the more intense script out of the 4 based on resources used.

AnalogClockStepAlways - The clock will always show the most accurate time.  The main function updateClock() always executes to get the most accurate time.  The hands do step.  To adjust the step rate, change the variable interval in the JavaScript file.  For example, a step every half second is "interval = 500", a step of 1 second is "interval = 1000".  This is the more intense script out of the 4 based on resources used.

AnalogClockStepAccurate - The main function updateClock() updates in intervals.  The hands do step.  To adjust the step rate AND update rate together, change the variable interval in the JavaScript file.  For example, a step every half second is "interval = 500", a step of 1 second is "interval = 1000".  This script "blocks" to sync up the time appropriately, albeit it blocks for up to 999 milliseconds in the worst case scenario.  The standard script: not too intense on resources but still does well to keep time even if the script throttles.

AnalogClockStepRelaxed - The main function updateClock() updates in intervals.  The hands do step.  To adjust the step rate AND update rate together, change the variable interval in the JavaScript file.  For example, a step every half second is "interval = 500", a step of 1 second is "interval = 1000".  This script "blocks" to sync up the time appropriately, albeit it blocks for up to 1 second in the worst case scenario.  This is the less intense script out of the 4 based on resources used and good to use if the clock is not essentially to keep it always perfectly synced.  May not display the exact time if the JavaScript is throttled.

Hard coding all the points for the polygons in DigitalClock.html is hard to work with later such as wanting to slant the numbers like on many digital clocks.  If you have any ideas on improving that go right ahead and make the change.  Building the polygons in JavaScript and adding them to the DOM tree is an option.  Just make sure the IDs match properly.
