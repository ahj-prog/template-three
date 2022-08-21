let smalls = document.querySelectorAll('.progres small');
let ourSkils = document.querySelector('.our-skils');

window.addEventListener('scroll', function(){
    if(this.scrollY >= ourSkils.offsetTop) {
        smalls.forEach(small => startProgres(small));
    }
});

function startProgres(el) {
    el.style.width = el.dataset.width;
};



// latest events
let latestEvents = document.querySelector('.latest-events');
let day = document.getElementById('days');
let hour = document.getElementById('hours');
let minute = document.getElementById('minutes');
let second = document.getElementById('seconds');


let targetDate = new Date('31 dec, 2022 23:59:59').getTime();

let counter = setInterval(() => {
    let nowDate = new Date().getTime();
    let dateDif = targetDate - nowDate;
    let days = Math.floor(dateDif / (1000 * 60 * 60 * 24));
    day.innerHTML = days < 10 ? `0${days}`: days; days < 100? `0${days}`: days;
    let hours = Math.floor(dateDif % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    hour.innerHTML = hours < 10 ? `0${hours}`: hours;
    
    let minutes =  Math.floor(dateDif % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) / (1000 * 60));
    minute.innerHTML = minutes < 10? `0${minutes}`: minutes;
    let seconds = Math.floor(dateDif % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) % (1000 * 60) / 1000);
    second.innerHTML = seconds < 10? `0${seconds}`: seconds;
}, 1000);
        



// stats
let stats = document.querySelector('.stats');
let spns = document.querySelectorAll('.stats #num');
let started = false;


window.addEventListener('scroll', function() {
    if(window.scrollY >= stats.offsetTop - 200){
        if(!started) {
            spns.forEach(spn => startcount(spn))
        }
        started = true;
    }
});

function startcount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() =>{
            el.textContent++;
            if(el.textContent == goal) {
                clearInterval(count);
            }
        }, 2000 / goal)
};