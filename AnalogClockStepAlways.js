//Get element objects for the three hands
var hourHand = document.querySelector("#HourHand");
var minuteHand = document.querySelector("#MinuteHand");
var secondHand = document.querySelector("#SecondHand");

//How many milliseconds for the clock to step by
var interval = 200;

//Get element object for the clock center
var clockCenter = document.querySelector("#ClockCenter");
var clockCenterX = clockCenter.getAttribute("cx");
var clockCenterY = clockCenter.getAttribute("cy");

var time;

var step;

var timeHourInMilliseconds;
var timeMinuteInMilliseconds;
var timeSecondInMilliseconds;
var timeMilliseconds;

var hourRotation;
var minuteRotation;
var secondRotation;

function updateClock()
{
    //Start off the clock at current time
    time = new Date();

    step = stepBefore(time.getMilliseconds());

    //Convert each timepiece (hour, hand, second) to millisecond; used for exact hand positioning
    timeHourInMilliseconds = time.getHours() * 3.6e6;
    timeMinuteInMilliseconds = time.getMinutes() * 60000;
    timeSecondInMilliseconds = time.getSeconds() * 1000;
    timeMilliseconds = step;

    //Get the exact rotation for each hand at startTime; e.g. at 6:30 the hour hand will sit between 6 and 7, not just on 6
    hourRotation = ((timeHourInMilliseconds + timeMinuteInMilliseconds + timeSecondInMilliseconds + timeMilliseconds)/3.6e6) * 30;
    minuteRotation = ((timeMinuteInMilliseconds + timeSecondInMilliseconds + timeMilliseconds)/60000) * 6;
    secondRotation = ((timeSecondInMilliseconds + timeMilliseconds)/1000) * 6;

    //Clamp values to sit within a full circle; guard against overflow
    hourRotation %= 360.0;
    minuteRotation %= 360.0;
    secondRotation %= 360.0;

    //Apply rotation
    hourHand.setAttribute("transform", "rotate(" + hourRotation + "," + clockCenterX + "," + clockCenterY + ")");
    minuteHand.setAttribute("transform", "rotate(" + minuteRotation + "," + clockCenterX + "," + clockCenterY + ")");
    secondHand.setAttribute("transform", "rotate(" + secondRotation + "," + clockCenterX + "," + clockCenterY + ")");
}

function stepBefore(millisecondsIn)
{
    var step = parseInt(millisecondsIn/interval);
    return step * interval;
}

setInterval(updateClock, 0);