const workshopDate = new Date("March 20, 2021 11:00:00").getTime();
const deadlineDate = new Date("June 11, 2021 00:00:00").getTime();
const ceremonyDate = new Date("June 18, 2021 14:00:00").getTime();


var x = setInterval(function(){
    countdown(workshopDate, "workshopTimer");
    countdown(deadlineDate, "deadlineTimer");
    countdown(ceremonyDate, "ceremonyTimer");
}, 1000);

function countdown(date, place){
    var now = new Date().getTime();
    var distance = date-now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById(place).innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
    if(distance < 0){
        clearInterval(x);
        document.getElementById(date).innerHTML = "EXPIRED";
    }
}