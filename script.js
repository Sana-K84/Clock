const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

const week = ['San', 'Man', 'Tue', 'Wen', 'Sou', 'Fri', 'Set'];
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const boxLeft = document.querySelector("#box-left");
const boxRight = document.querySelector("#box-right");

const dayTo = document.querySelector(".count_day_value");
const hoursTo = document.querySelector(".count_hours_value");
const minutesTo = document.querySelector(".count_min_value");
const secondsTo = document.querySelector(".count_sec_value");


setInterval(() => {
    let date = new Date();
    let hourClock = new Date().getHours() * 30;
    let minClock = date.getMinutes() * deg;
    let secClock = date.getSeconds() * deg;

    let weekNum = date.getDay();
    boxLeft.innerHTML = `${week[weekNum]} ${date.getDate()}`;

    hr.style.transform = `rotateZ(${hourClock + (minClock / 12)}deg)`;
    mn.style.transform = `rotateZ(${(minClock)}deg)`;
    sc.style.transform = `rotateZ(${(secClock)}deg)`;
    let monthNum = date.getMonth();
    let year = date.getFullYear();
    boxRight.innerHTML = `${month[monthNum]} ${year - 2000}`

    const tisDay = new Date('May 04 2024') - date;
    console.log(tisDay)
    let valueDay = Math.floor(tisDay / 1000 / 60 / 60 / 24);
    let valueHours = Math.floor(tisDay / 1000 / 60 / 60 % 24);
    let valueMinutes = Math.floor(tisDay / 1000 / 60 % 60);
    let valueSeconds = Math.floor(tisDay / 1000 % 60);
    dayTo.innerHTML = valueDay < 10 ? '0' + valueDay : valueDay;
    hoursTo.innerHTML = valueHours < 10 ? '0' + valueHours : valueHours;
    minutesTo.innerHTML = valueMinutes < 10 ? '0' + valueMinutes : valueMinutes;
    secondsTo.innerHTML = valueSeconds < 10 ? '0' + valueSeconds : valueSeconds;
});

