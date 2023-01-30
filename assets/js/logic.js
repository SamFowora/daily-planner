// create planner which contains:
    //header
        // 'work day scheduler' title
        // simple descriptive subtext
        // current time & date (or just date)
        // dividing line beneath header
    // planner which gets updated daily
        // includes time slots from 9-5
        // events spaces
            // colour change for past, present and future hours
            // save/lock button to be able to change event titles
        // [not required] can store information in local storage

var clock = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
$("#clock").text(clock);