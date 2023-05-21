const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time() {
    let dateToday = new Date();

    let hourNow = dateToday.getHours();
    let minutesNow = dateToday.getMinutes();
    let secondsNow = dateToday.getSeconds();

    hourNow < 10 ? hourNow = '0' + hourNow : hourNow;
    minutesNow < 10 ? minutesNow = '0' + minutesNow : minutesNow;
    secondsNow < 10 ? secondsNow = '0' + secondsNow : secondsNow;

    let morning = hourNow >= 6 && hourNow <= 11;
    let afternoon = hourNow >= 12 && hourNow <= 17;
    let evening = hourNow >= 18;

    if (morning)
        setBackgroungToMorning();
    
    if (afternoon)
        setBackgroungToAfternoon();

    if (evening)
        setBackgroungToEvening();

    hours.textContent = hourNow;
    minutes.textContent = minutesNow;
    seconds.textContent = secondsNow;
});

function setBackgroungToMorning() {
    var element = document.body
    element.classList.remove('afternoon', 'evening');
    element.classList.add('morning');
}

function setBackgroungToAfternoon() {
    var element = document.body;
    element.classList.remove('morning', 'evening');
    element.classList.add('afternoon');
}

function setBackgroungToEvening() {
    var element = document.body;
    element.classList.remove('morning', 'afternoon');
    element.classList.add('evening');
}
