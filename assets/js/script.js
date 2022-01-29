// Global Variables
const timeHour = Number(moment().format("H"));
let taskList = {}; // Makes empty tasklist
// functions
function loadTasks() {
    taskList = JSON.parse(localStorage.getItem("myTask"));

    if (!taskList) { // Only triggers if taskList is blank
        taskList = {
            "7 am": "", "8 am": "", "9 am": "",
            "10 am": "", "11 am": "", "noon": "",
            "1 pm": "", "2 pm": "", "3 pm": "",
            "4 pm": "", "5 pm": "", "6 pm": "",
        };
    }
}
loadTasks(); // SSaved to localStorage


// Moment JS to display
$("#currentDay").append(moment().format("dddd,MMMM Do"));