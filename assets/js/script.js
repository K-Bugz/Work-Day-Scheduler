//Moment.js code for current date and time
let dateEl = document.getElementById("currentDay");
let NoMo = moment().format('MMMM Do YYYY, h:mm:ss a');
dateEl.innerHTML = NoMo;
var curHour = moment().format("HH"); // get the current hour through moment
curHour = parseInt(curHour, 10); // Change hour string into hour number

// Compare each time with the current and update the box.  
$(".time-div").each(function () { // for each .time-div
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
// Save button adds task to local storage.
$('.saveBtn').click(function () {
    var hr7 = document.getElementById('7task').value;
    localStorage.setItem('text7', hr7);
    var hr8 = document.getElementById('8task').value;
    localStorage.setItem('text8', hr8);
    var hr9 = document.getElementById('9task').value;
    localStorage.setItem('text9', hr9);
    var hr10 = document.getElementById('10task').value;
    localStorage.setItem('text10', hr10);
    var hr11 = document.getElementById('11task').value;
    localStorage.setItem('text11', hr11);
    var hr12 = document.getElementById('12task').value;
    localStorage.setItem('text12', hr12);
    var hr13 = document.getElementById('13task').value;
    localStorage.setItem('text13', hr13);
    var hr14 = document.getElementById('14task').value;
    localStorage.setItem('text14', hr14);
    var hr15 = document.getElementById('15task').value;
    localStorage.setItem('text15', hr15);
    var hr16 = document.getElementById('16task').value;
    localStorage.setItem('text16', hr16);
    var hr17 = document.getElementById('17task').value;
    localStorage.setItem('text17', hr17);
    var hr18 = document.getElementById('18task').value;
    localStorage.setItem('text18', hr18);
    // If values are null or blank then populate them w/ task.
    taskList = [hr7, hr8, hr9, hr10, hr11, hr12, hr13, hr14, hr15, hr16, hr17, hr18];
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i] === "") {
            taskList[i] = "task";
        }
    }
});
// A $( document ).ready() block.
$(document).ready(function () {
    // Retrieve saved tasks
    var saved7 = localStorage.getItem('text7');
    // console.log(typeof (saved7)); (its a string)
    document.getElementById('7task').value = saved7;
    var saved8 = localStorage.getItem('text8');
    document.getElementById('8task').value = saved8;
    var saved9 = localStorage.getItem('text9');
    document.getElementById('9task').value = saved9;
    var saved10 = localStorage.getItem('text10');
    document.getElementById('10task').value = saved10;
    var saved11 = localStorage.getItem('text11');
    document.getElementById('11task').value = saved11;
    var saved12 = localStorage.getItem('text12'); //noon
    document.getElementById('12task').value = saved12; // noon
    var saved13 = localStorage.getItem('text13');
    document.getElementById('13task').value = saved13;
    var saved14 = localStorage.getItem('text14');
    document.getElementById('14task').value = saved14;
    var saved15 = localStorage.getItem('text15');
    document.getElementById('15task').value = saved15;
    var saved16 = localStorage.getItem('text16');
    document.getElementById('16task').value = saved16;
    var saved17 = localStorage.getItem('text17');
    document.getElementById('17task').value = saved17;
    var saved18 = localStorage.getItem('text18');
    document.getElementById('18task').value = saved18;
});
