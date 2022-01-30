
//Moment.js code for current date and time
let dateEl = document.getElementById("currentDay");
let NoMo = moment().format('MMMM Do YYYY, h:mm:ss a');
dateEl.innerHTML = NoMo;
var curHour = moment().format("HH");
// window.localStorage.setItem("date", curHour);
// console.log(curHour);
// console.log(moment());

// Compare each time with the current. 
$(".time-div").each(function () { // for each .time-div
    console.log($(this).attr("id"));
    var timeDiv = $(this).attr("id");
    if (curHour == timeDiv) {
        $(this).addClass("present");
        $(this).children(".description").addClass("white-text");
    } else if (curHour < timeDiv) {
        $(this).removeClass("present");
        $(this).addClass("future");
    } else if (curHour > timeDiv) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});