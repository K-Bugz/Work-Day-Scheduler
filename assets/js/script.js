//Moment.js code for current date and time
let dateEl = document.getElementById("currentDay");
let NoMo = moment().format('MMMM Do YYYY, h:mm:ss a');
dateEl.innerHTML = NoMo;
var curHour = moment().format("HH"); // get the current hour through moment
curHour = parseInt(curHour, 10); // Change hour string into hour number


// Compare each time with the current and update the box.  
$(".time-div").each(function () { // for each .time-div
    console.log($(this).attr("id"));
    var timeDiv = $(this).attr("id");
    if (curHour == timeDiv) {
        $(this).addClass("present");
        $(this).children(".description").addClass("white-text");
    } else if (curHour < timeDiv) {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    } else if (curHour > timeDiv) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
});
//
