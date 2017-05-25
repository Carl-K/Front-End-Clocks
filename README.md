# Front-End-Clocks
An analog and digital clock showing the current time written in HTML, CSS, and JavaScript to add to your webpages.

Each of the two clocks contain an HTML, CSS, and JavaScript file.  Make sure you grab all three for each clock type.  The JavaScript is fully written and functional; it's not necessary to edit any of it except for adding additional functionality.  Any design changes can be made to the CSS and HTML files.  Altering the HTML IDs will break the JavaScript if it is not properly updated to match.

If you wish to change the pace for analog clock updates, go into the AnalogClock.js file, locate the "interval" variable towards the top of the file, and change its value.  The declaration is in milliseconds, so if you'd like the clock to step every 1 second the declaration is 1000.

Hard coding all the points for the polygons in DigitalClock.html is hard to work with later such as wanting to slant the numbers like on many digital clocks.  If you have any ideas on improving that go right ahead and make the change.  Building the polygons in JavaScript and adding them to the DOM tree is an option.  Just make sure the IDs match properly.
