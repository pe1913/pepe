const btn = document.querySelector("button.more-button");
const blankArea = document.querySelector("div.blankArea");
const menu = document.querySelector(".more-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

blankArea.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

const aboutLink = document.querySelector('#aboutLink');
const aboutLinkMobile = document.querySelector('#aboutLinkMobile');
const about = document.querySelector('#about');

aboutLink.addEventListener("click", ()=>{
    about.scrollIntoView({ behavior: "smooth"});
}, false);

aboutLinkMobile.addEventListener("click", ()=>{
    about.scrollIntoView({ behavior: "smooth"});
    menu.classList.toggle("hidden");
}, false);

const upLink = document.querySelector('#upLink');
const upLinkMobile = document.querySelector('#upLinkMobile');
const up = document.querySelector('#up');
const upMobile = document.querySelector('#upMobile');    

upLink.addEventListener("click", ()=>{
    up.scrollIntoView({ behavior: "smooth"});
}, false);

upLinkMobile.addEventListener("click", ()=>{
    upMobile.scrollIntoView({ behavior: "smooth"});
    menu.classList.toggle("hidden");
}, false);

const faqLink = document.querySelector('#faqLink');
const faqLinkMobile = document.querySelector('#faqLinkMobile');
const faq = document.querySelector('#faq');

faqLink.addEventListener("click", ()=>{
    faq.scrollIntoView({ behavior: "smooth"});
}, false);

faqLinkMobile.addEventListener("click", ()=>{
    faq.scrollIntoView({ behavior: "smooth"});
    menu.classList.toggle("hidden");
}, false);

const donateLink = document.querySelector('#donateLink');
const donateMobile = document.querySelector('#donateMobile');
const donate = document.querySelector('#donate');

donateLink.addEventListener("click", ()=>{
    donate.scrollIntoView({ behavior: "smooth"});
}, false);

donateMobile.addEventListener("click", ()=>{
    donate.scrollIntoView({ behavior: "smooth"});
    menu.classList.toggle("hidden");
}, false);

const startButton = document.querySelectorAll("#startButton");
startButton[0].addEventListener("click", ()=>{
    up.scrollIntoView({ behavior: "smooth"});
}, false);
startButton[1].addEventListener("click", ()=>{
    up.scrollIntoView({ behavior: "smooth"});
}, false);

const startButtonMobile = document.querySelector("#startButtonMobile");
startButtonMobile.addEventListener("click", ()=>{
    upMobile.scrollIntoView({ behavior: "smooth"});
}, false);

const home = document.querySelector("#home");
home.addEventListener("click", ()=>{
    document.body.scrollIntoView({ behavior: "smooth"});
}, false);

function setCookie(count) {
    let dateToday = new Date();
    let dateTomorrow =  new Date();
    dateTomorrow.setDate(dateToday.getDate() + 1);
    const unixTimeStamp = Date.parse(dateTomorrow.toLocaleDateString());
    
    const expireDate = new Date();
    expireDate.setTime(unixTimeStamp);
    let expires = "expires="+ expireDate.toUTCString();
    document.cookie = 'count=' + count + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

let count = getCookie('count') ? getCookie('count') : 7;
if (!getCookie('count')) {
    setCookie(count);
}
if (count == 0) {
    disabled();
    document.getElementById("count-area").classList.add('text-red-500', 'font-bold');
}
document.getElementById("count").innerHTML = count;
let times = 0;
let currentText = '';
const randomCards = [
    "<span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span>",
    "<span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span>",
    "<span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span>",
    "<span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span>",
    "<span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span>",
    "<span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span>",
    "<span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span>",
    "<span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span>",
    "<span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span>",
    "<span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span>",
    "<span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span>",
    "<span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span>",
    "<span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span>",
    "<span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span>",
    "<span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span>",
    "<span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span>",
    "<span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span>",
    "<span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span>",
    "<span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span>",
    "<span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span>",
    "<span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span>",
    "<span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span>",
    "<span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span>",
    "<span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span>",
    "<span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span>",
    "<span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span>",
    "<span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span>",
    "<span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span>",
    "<span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span>",
    "<span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span>",
    "<span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span>",
    "<span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span><span class='text-red-500 font-bold'>莊</span><span class='text-red-500 font-bold'>莊</span><span class='text-blue-500 font-bold'>閒</span>",
];

function player() {
    if (times == 0) {
        document.getElementById("currentTextArea").innerHTML = '';
    }
    times++;
    currentText += '閒';
    document.getElementById("currentTextArea").insertAdjacentHTML("beforeend", "<span class='text-blue-500 text-4xl font-bold'>閒</span>");
    if (times == 4) {
        shuffle();
    }
}

function tie() {
    if (times == 0) {
        document.getElementById("currentTextArea").innerHTML = '';
    }
    times++;
    currentText += '和';
    document.getElementById("currentTextArea").insertAdjacentHTML("beforeend", "<span class='text-green-500 text-4xl font-bold'>和</span>");
    if (times == 4) {
        shuffle();
    }
}

function banker() {
    if (times == 0) {
        document.getElementById("currentTextArea").innerHTML = '';
    }
    times++;
    currentText += '莊';
    document.getElementById("currentTextArea").insertAdjacentHTML("beforeend", "<span class='text-red-500 text-4xl font-bold'>莊</span>");
    if (times == 4) {
        shuffle();
    }
}

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function shuffle() {
    disabled();
    times = 0;
    count--;
    setCookie(count);
    for (let i = 1; i < randomCards.length; i++) {
        document.getElementById("result").innerHTML = randomCards[i];
        await sleep(50);
    }
    cardIndex = 0;
    let randomNumber = Math.floor(Math.random() * 32);
    document.getElementById("result").innerHTML = randomCards[randomNumber];
    document.getElementById("count").innerHTML = count;
    enable();
    if (count == 0) {
        disabled();
        document.getElementById("count-area").classList.add('text-red-500', 'font-bold');
    }
}

function disabled() {
    document.getElementById("banker").disabled = true;
    document.getElementById("banker").classList.add('bg-red-600');
    document.getElementById("tie").disabled = true;
    document.getElementById("tie").classList.add('bg-green-600');
    document.getElementById("player").disabled = true;
    document.getElementById("player").classList.add('bg-blue-600');
}

function enable() {
    document.getElementById("banker").disabled = false;
    document.getElementById("banker").classList.remove('bg-red-600');
    document.getElementById("tie").disabled = false;
    document.getElementById("tie").classList.remove('bg-green-600');
    document.getElementById("player").disabled = false;
    document.getElementById("player").classList.remove('bg-blue-600');
}