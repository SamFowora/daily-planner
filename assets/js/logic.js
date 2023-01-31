// create planner which contains:
    //header
        // 'work day scheduler' title
            // -> html
        // simple descriptive subtext
            // -> html
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

var clock = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
$("#clock").text(clock);