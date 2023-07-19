const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

const week = ['San', 'Man', 'Tue', 'Wen', 'Sou', 'Fri', 'Set'];


const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const boxLeft = document.querySelector("#box-left");
const boxRight = document.querySelector("#box-right");


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
    boxRight.innerHTML = `${month[monthNum]} 23`


});

