<!--Get each visual segment from the hours, minutes, and hands-->
var hourLeftTopLeft = document.querySelector("#Hour_Left_Top_Left");
var hourLeftBottomLeft = document.querySelector("#Hour_Left_Bottom_Left");
var hourLeftTopRight = document.querySelector("#Hour_Left_Top_Right");
var hourLeftBottomRight = document.querySelector("#Hour_Left_Bottom_Right");
var hourLeftTop = document.querySelector("#Hour_Left_Top");
var hourLeftMiddle = document.querySelector("#Hour_Left_Middle");
var hourLeftBottom = document.querySelector("#Hour_Left_Bottom");

var hourRightTopLeft = document.querySelector("#Hour_Right_Top_Left");
var hourRightBottomLeft = document.querySelector("#Hour_Right_Bottom_Left");
var hourRightTopRight = document.querySelector("#Hour_Right_Top_Right");
var hourRightBottomRight = document.querySelector("#Hour_Right_Bottom_Right");
var hourRightTop = document.querySelector("#Hour_Right_Top");
var hourRightMiddle = document.querySelector("#Hour_Right_Middle");
var hourRightBottom = document.querySelector("#Hour_Right_Bottom");



var minuteLeftTopLeft = document.querySelector("#Minute_Left_Top_Left");
var minuteLeftBottomLeft = document.querySelector("#Minute_Left_Bottom_Left");
var minuteLeftTopRight = document.querySelector("#Minute_Left_Top_Right");
var minuteLeftBottomRight = document.querySelector("#Minute_Left_Bottom_Right");
var minuteLeftTop = document.querySelector("#Minute_Left_Top");
var minuteLeftMiddle = document.querySelector("#Minute_Left_Middle");
var minuteLeftBottom = document.querySelector("#Minute_Left_Bottom");

var minuteRightTopLeft = document.querySelector("#Minute_Right_Top_Left");
var minuteRightBottomLeft = document.querySelector("#Minute_Right_Bottom_Left");
var minuteRightTopRight = document.querySelector("#Minute_Right_Top_Right");
var minuteRightBottomRight = document.querySelector("#Minute_Right_Bottom_Right");
var minuteRightTop = document.querySelector("#Minute_Right_Top");
var minuteRightMiddle = document.querySelector("#Minute_Right_Middle");
var minuteRightBottom = document.querySelector("#Minute_Right_Bottom");



var secondLeftTopLeft = document.querySelector("#Second_Left_Top_Left");
var secondLeftBottomLeft = document.querySelector("#Second_Left_Bottom_Left");
var secondLeftTopRight = document.querySelector("#Second_Left_Top_Right");
var secondLeftBottomRight = document.querySelector("#Second_Left_Bottom_Right");
var secondLeftTop = document.querySelector("#Second_Left_Top");
var secondLeftMiddle = document.querySelector("#Second_Left_Middle");
var secondLeftBottom = document.querySelector("#Second_Left_Bottom");

var secondRightTopLeft = document.querySelector("#Second_Right_Top_Left");
var secondRightBottomLeft = document.querySelector("#Second_Right_Bottom_Left");
var secondRightTopRight = document.querySelector("#Second_Right_Top_Right");
var secondRightBottomRight = document.querySelector("#Second_Right_Bottom_Right");
var secondRightTop = document.querySelector("#Second_Right_Top");
var secondRightMiddle = document.querySelector("#Second_Right_Middle");
var secondRightBottom = document.querySelector("#Second_Right_Bottom");

<!--Order them to later iterate through-->
var sections = 
    [
        [hourLeftTopLeft, hourLeftBottomLeft, hourLeftTopRight, hourLeftBottomRight, hourLeftTop, hourLeftMiddle, hourLeftBottom],
        [hourRightTopLeft, hourRightBottomLeft, hourRightTopRight, hourRightBottomRight, hourRightTop, hourRightMiddle, hourRightBottom],
        [minuteLeftTopLeft, minuteLeftBottomLeft, minuteLeftTopRight, minuteLeftBottomRight, minuteLeftTop, minuteLeftMiddle, minuteLeftBottom],
        [minuteRightTopLeft, minuteRightBottomLeft, minuteRightTopRight, minuteRightBottomRight, minuteRightTop, minuteRightMiddle, minuteRightBottom],
        [secondLeftTopLeft, secondLeftBottomLeft, secondLeftTopRight, secondLeftBottomRight, secondLeftTop, secondLeftMiddle, secondLeftBottom],
        [secondRightTopLeft, secondRightBottomLeft, secondRightTopRight, secondRightBottomRight, secondRightTop, secondRightMiddle, secondRightBottom]
    ];

<!--hours 12 through 11-->
var hours = [12,1,2,3,4,5,6,7,8,9,10,11];

function updateClock()
{
    var currentTime = new Date();

    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();
    
    <!--Convert military time to civilian time-->
    hour = hours[hour%12];
    
    <!--Pull out each single number from hour, minute, and second
    var hourRight = hour % 10;
    hour /= 10;
    hour = Math.floor(hour);
    var hourLeft = hour % 10;
    
    var minuteRight = minute % 10;
    minute /= 10;
    minute = Math.floor(minute);
    var minuteLeft = minute % 10;
    
    var secondRight = second % 10;
    second /= 10;
    second = Math.floor(second);
    var secondLeft = second % 10;
    
    <!--Order them to later iterate through-->
    var numbers = [hourLeft,hourRight,minuteLeft,minuteRight,secondLeft,secondRight];

    <!--For every number slot on the clock, change its visual appearance to match the appropriate number-->
    <!--For each number slot on the clock-->
    for (var i = 0; i < 6; i++)
    {
        <!--Change the number slot to match the appropriate digit from the current time-->
        switch (numbers[i])
        {
            case 0:
                sections[i][0].setAttribute("class", "Enabled");
                sections[i][1].setAttribute("class", "Enabled");
                sections[i][2].setAttribute("class", "Enabled");  
                sections[i][3].setAttribute("class", "Enabled");
                sections[i][4].setAttribute("class", "Enabled");
                sections[i][5].setAttribute("class", "Disabled");
                sections[i][6].setAttribute("class", "Enabled");
                break;
            case 1:
                sections[i][0].setAttribute("class", "Disabled");
                sections[i][1].setAttribute("class", "Disabled");
                sections[i][2].setAttribute("class", "Enabled");  
                sections[i][3].setAttribute("class", "Enabled");
                sections[i][4].setAttribute("class", "Disabled");
                sections[i][5].setAttribute("class", "Disabled");
                sections[i][6].setAttribute("class", "Disabled");
                break;
            case 2:
                sections[i][0].setAttribute("class", "Disabled");
                sections[i][1].setAttribute("class", "Enabled");
                sections[i][2].setAttribute("class", "Enabled");  
                sections[i][3].setAttribute("class", "Disabled");
                sections[i][4].setAttribute("class", "Enabled");
                sections[i][5].setAttribute("class", "Enabled");
                sections[i][6].setAttribute("class", "Enabled");
                break;
            case 3:
                sections[i][0].setAttribute("class", "Disabled");
                sections[i][1].setAttribute("class", "Disabled");
                sections[i][2].setAttribute("class", "Enabled");  
                sections[i][3].setAttribute("class", "Enabled");
                sections[i][4].setAttribute("class", "Enabled");
                sections[i][5].setAttribute("class", "Enabled");
                sections[i][6].setAttribute("class", "Enabled");
                break;
            case 4:
                sections[i][0].setAttribute("class", "Enabled");
                sections[i][1].setAttribute("class", "Disabled");
                sections[i][2].setAttribute("class", "Enabled");  
                sections[i][3].setAttribute("class", "Enabled");
                sections[i][4].setAttribute("class", "Disabled");
                sections[i][5].setAttribute("class", "Enabled");
                sections[i][6].setAttribute("class", "Disabled");
                break;
            case 5:
                sections[i][0].setAttribute("class", "Enabled");
                sections[i][1].setAttribute("class", "Disabled");
                sections[i][2].setAttribute("class", "Disabled");  
                sections[i][3].setAttribute("class", "Enabled");
                sections[i][4].setAttribute("class", "Enabled");
                sections[i][5].setAttribute("class", "Enabled");
                sections[i][6].setAttribute("class", "Enabled");
                break;
            case 6:
                sections[i][0].setAttribute("class", "Enabled");
                sections[i][1].setAttribute("class", "Enabled");
                sections[i][2].setAttribute("class", "Disabled");  
                sections[i][3].setAttribute("class", "Enabled");
                sections[i][4].setAttribute("class", "Enabled");
                sections[i][5].setAttribute("class", "Enabled");
                sections[i][6].setAttribute("class", "Enabled");
                break;
            case 7:
                sections[i][0].setAttribute("class", "Disabled");
                sections[i][1].setAttribute("class", "Disabled");
                sections[i][2].setAttribute("class", "Enabled");  
                sections[i][3].setAttribute("class", "Enabled");
                sections[i][4].setAttribute("class", "Enabled");
                sections[i][5].setAttribute("class", "Disabled");
                sections[i][6].setAttribute("class", "Disabled");
                break;
            case 8:
                sections[i][0].setAttribute("class", "Enabled");
                sections[i][1].setAttribute("class", "Enabled");
                sections[i][2].setAttribute("class", "Enabled");  
                sections[i][3].setAttribute("class", "Enabled");
                sections[i][4].setAttribute("class", "Enabled");
                sections[i][5].setAttribute("class", "Enabled");
                sections[i][6].setAttribute("class", "Enabled");
                break;
            case 9:
                sections[i][0].setAttribute("class", "Enabled");
                sections[i][1].setAttribute("class", "Disabled");
                sections[i][2].setAttribute("class", "Enabled");  
                sections[i][3].setAttribute("class", "Enabled");
                sections[i][4].setAttribute("class", "Enabled");
                sections[i][5].setAttribute("class", "Enabled");
                sections[i][6].setAttribute("class", "Disabled");
                break;
            default:
                break;
        }
    }
}

setInterval(updateClock, 0);