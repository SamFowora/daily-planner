// create planner which contains:
    //header
        // 'work day scheduler' title
        // simple descriptive subtext
        // current time & date (or just date)
            // -> html container + moment.js
        // dividing line beneath header
            // -> css or html line break
    // planner which gets updated daily
      // -> need planner to keep data throughout the day even when the app is closed
        // includes time slots from 9-5
        // events spaces
        // -> check bootstrap, if not, html+css
            // colour change for past, present and future hours
            // save/lock button to be able to change event titles
        // [not required] can store information in local storage

// DOM elements
// var currentDayEl = ('#currentDay');

// function displayTime() {
//     var rightNow = moment().format('DD MMM YYYY [at] hh:mm:ss a');
//     currentDayEl.text(rightNow);
// }

// var today = moment().format('DD MM YYYY , HH:mm');
//     currentDayEl.textContent(today);
// } 1000;

const date = moment().format("DD MMMM YYYY" , "HH:mm");
$("#currentDay").text(date);
const CurrentTime = moment().hour().minute;
//console.log(CurrentTime);