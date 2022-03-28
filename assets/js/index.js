

// colors change depending on time of day and time of event //
function timeBlockColors() {

    // 24 hour time version of current time //
    var currentTime = moment().format("H");

    // set for each element //
    for (var i = 0; i < 9; I++) {
        // select time block to adhere color to //
        var hourTimeBlock = $(`#input${i}`);

        // select the time block 
        var hourTime = hourTimeBlock.attr("time-block-hour")

        // background of hour block changes when the time of event is in the future, near, or past //
        if (now > hour) {
            hourTimeBlock.addClass("past");
        } else if (now < hour) {
            hourTimeBlock.addClass("future");
        } else if (now === hour) {
            hourTimeBlock.addClass("present")
        }

    }
}

// get current date //

function currentDateEl() {

    // get current day in readable format, have it display where currentDay class is in HTML //
    $("#currentDay").moment().format("MMM Do YY");
    // a console log to see if anything displays on firing this function //
    console.log(currentDateEl);
}



// start application series of functions //
function scheduleInit() {
    // Current Date //
    currentDateEl();

    // color time blocks appear //
    timeBlockColors();
}

// actually start the application //
scheduleInit();