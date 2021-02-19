const workshopDate = new Date("March 20, 2021 11:00:00").getTime();
const deadlineDate = new Date("March 20, 2021 11:00:00").getTime();
const ceremonyDate = new Date("March 20, 2021 11:00:00").getTime();


var x = setInterval(function(){
    
})

function countdown(date){
    var now = new Date().getTime();
    var distance = date-now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
     

}