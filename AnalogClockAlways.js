//Get element objects for the three hands
var hourHand = document.querySelector("#HourHand");
var minuteHand = document.querySelector("#MinuteHand");
var secondHand = document.querySelector("#SecondHand");

//Get element object for the clock center
var clockCenter = document.querySelector("#ClockCenter");
var clockCenterX = clockCenter.getAttribute("cx");
var clockCenterY = clockCenter.getAttribute("cy");

function updateClock()
{
    //Start off the clock at current time
    var time = new Date();

    //Convert each timepiece (hour, hand, second) to millisecond; used for exact hand positioning
    var timeHourInMilliseconds = time.getHours() * 3.6e6;
    var timeMinuteInMilliseconds = time.getMinutes() * 60000;
    var timeSecondInMilliseconds = time.getSeconds() * 1000;
    var timeMilliseconds = time.getMilliseconds();

    //Get the exact rotation for each hand at startTime; e.g. at 6:30 the hour hand will sit between 6 and 7, not just on 6
    var hourRotation = ((timeHourInMilliseconds + timeMinuteInMilliseconds + timeSecondInMilliseconds + timeMilliseconds)/3.6e6) * 30;
    var minuteRotation = ((timeMinuteInMilliseconds + timeSecondInMilliseconds + timeMilliseconds)/60000) * 6;
    var secondRotation = ((timeSecondInMilliseconds + timeMilliseconds)/1000) * 6;

    //Clamp values to sit within a full circle; guard against overflow
    hourRotation %= 360.0;
    minuteRotation %= 360.0;
    secondRotation %= 360.0;

    //Apply rotation
    hourHand.setAttribute("transform", "rotate(" + hourRotation + "," + clockCenterX + "," + clockCenterY + ")");
    minuteHand.setAttribute("transform", "rotate(" + minuteRotation + "," + clockCenterX + "," + clockCenterY + ")");
    secondHand.setAttribute("transform", "rotate(" + secondRotation + "," + clockCenterX + "," + clockCenterY + ")");
}

setInterval(updateClock,0);