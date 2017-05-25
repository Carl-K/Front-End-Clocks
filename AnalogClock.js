<!--Start off the clock at current time-->
var startTime = new Date();

<!--Sets up how often to update the clock in milliseconds, also used to alter milliseconds which will help positions hands accurately
var interval = 200;

<!--Convert each timepiece (hour, hand, second) to millisecond; used for exact hand positioning-->
var startTimeHourInMilliseconds = startTime.getHours() * 3.6e6;
var startTimeMinuteInMilliseconds = startTime.getMinutes() * 60000;
var startTimeSecondInMilliseconds = startTime.getSeconds() * 1000;
var startTimeMilliseconds = clampMilliseconds(startTime.getMilliseconds());

<!--Get element objects for the three hands-->
var hourHand = document.querySelector("#HourHand");
var minuteHand = document.querySelector("#MinuteHand");
var secondHand = document.querySelector("#SecondHand");

<!--Get element object for the clock center-->
var clockCenter = document.querySelector("#ClockCenter");
var clockCenterX = clockCenter.getAttribute("cx");
var clockCenterY = clockCenter.getAttribute("cy");

<!--Get the exact rotation for each hand at startTime; e.g. at 6:30 the hour hand will sit between 6 and 7, not just on 6-->
var hourRotation = ((startTimeHourInMilliseconds + startTimeMinuteInMilliseconds + startTimeSecondInMilliseconds + startTimeMilliseconds)/3.6e6) * 30;
var minuteRotation = ((startTimeMinuteInMilliseconds + startTimeSecondInMilliseconds + startTimeMilliseconds)/60000) * 6;
var secondRotation = ((startTimeSecondInMilliseconds + startTimeMilliseconds)/1000) * 6;
 
<!--Clamp values to sit within a full circle; guard against overflow-->
hourRotation %= 360.0;
minuteRotation %= 360.0;
secondRotation %= 360.0;
    
<!--Apply rotation-->
hourHand.setAttribute("transform", "rotate(" + hourRotation + "," + clockCenterX + "," + clockCenterY + ")");
minuteHand.setAttribute("transform", "rotate(" + minuteRotation + "," + clockCenterX + "," + clockCenterY + ")");
secondHand.setAttribute("transform", "rotate(" + secondRotation + "," + clockCenterX + "," + clockCenterY + ")");

function updateClock()
{
    <!--Get new current time-->
    var newTime = new Date();
    
    <!--Get time change since the last clock update-->
    var timeChange = newTime.getTime() - startTime.getTime();
    
    <!--Update last clock update time to this new time-->
    startTime = newTime;
    
    <!--Get how much more the hands will rotate-->
    var hourChangeRotation = (timeChange/3.6e6) * 30;
    var minuteChangeRotation = (timeChange/60000) * 6;
    var secondChangeRotation = (timeChange/1000) * 6;
    
    <!--Apply additional rotation since last clock update-->
    hourRotation += hourChangeRotation;
    minuteRotation += minuteChangeRotation;
    secondRotation += secondChangeRotation;
    
    <!--Clamp values to sit within a full circle; guard against overflow-->
    hourRotation %= 360.0;
    minuteRotation %= 360.0;
    secondRotation %= 360.0;
    
    <!--Apply new rotation-->
    hourHand.setAttribute("transform", "rotate(" + hourRotation + "," + clockCenterX + "," + clockCenterY + ")");
    minuteHand.setAttribute("transform", "rotate(" + minuteRotation + "," + clockCenterX + "," + clockCenterY + ")");
    secondHand.setAttribute("transform", "rotate(" + secondRotation + "," + clockCenterX + "," + clockCenterY + ")");
}

function clampMilliseconds(millisecondsIn)
{
    var numSteps = (1000 / interval) + 1;
    var finalAnswer = millisecondsIn;
    var distance = Number.MAX_SAFE_INTEGER;
    
    for (var i = 0; i < numSteps; i++)
    {
        if ( Math.abs( millisecondsIn - (i * interval) ) < distance )
        {
            finalAnswer = (i * interval);
            distance = millisecondsIn - (i * interval);
        }
    }
    
    return finalAnswer;
}

setInterval(updateClock,interval);