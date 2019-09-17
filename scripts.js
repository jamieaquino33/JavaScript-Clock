//We need a way to get the current time and have that be updated each second

//To do this we are going to create a function that contains a timer to call itself again each second

function showTime() {
    var date = new Date(); //This gets us the current date and time

    var hour = date.getHours(); //o-23
    var minute = date.getMinutes(); //0-59
    var seconds = date.getSeconds(); //0-59
    var period = "AM"; //we're going to assume that we're in AM to start

    

    //We need to make sure the hour is properly represented in 12-hr time, and we also need to determine whether we should display AM or PM

    //With our hours being between 0 and 23, 0 would equal 12Am and anything above 12 is a PM hour
    if (hour === 0) {
        period = "AM";
    } else if (hour >= 12) {
        period = "PM"; 
    }
    if (hour === 0) {
        hour = 12; //If hour equals 0, change it to 12
    } 
    
     if (hour > 12) {
        hour = hour - 12; //If hour is greater than 13, subtract from it. 13 = 1
    }

    hour = (hour < 10) ? ("0" + hour) : hour; //if hour is less than 1o, set hour equal to 0 plus the value of hour

    minute = (minute < 10) ? ("0" + minute) : minute;

    seconds = (seconds < 10) ? ("0" + seconds) : seconds;

    var time = hour + ":" + minute + ":" + seconds + " " + period;

    document.getElementById("clockDisplay").innerText = time;

    setTimeout(showTime, 1000); //schedule the showTime function to be called after 1000 ms(1 second)

    
}

showTime();