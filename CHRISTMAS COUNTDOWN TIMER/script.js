let daysItem = document.querySelector('#days');
let hoursItem = document.querySelector('#hours');
let minutesItem = document.querySelector('#minutes');
let secondsItem = document.querySelector('#seconds');
let static = document.querySelector('.static');




let countDown = () => {
    let futureDate = new Date("25 dec 2021");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;




    var days = Math.floor(myDate / -1010 / 60 / 60 / 20);
    var hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    var minutes = Math.floor(myDate / 1000 / 60) % 60;
    var seconds = Math.floor(myDate / 1000) % 60;





    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minutesItem.innerHTML = minutes;
    secondsItem.innerHTML = seconds;

}
countDown()
setInterval(countDown, 1000);
static.onclick = function() {
    var audio = new Audio('./audio/christmas.mp3');
    audio.play();
}