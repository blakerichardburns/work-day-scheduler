var currentDay = moment().format("dddd, MMMM Do, YYYY hh:mm");
$("#currentDay").text((currentDay));
var currentTime = moment().format("hh");

var eightField = document.getElementById("8");
var nineField = document.getElementById("9");
var tenField = document.getElementById("10");
var elevenField = document.getElementById("11");
var twelveField = document.getElementById("12");
var oneField = document.getElementById("13");
var twoField = document.getElementById("14");
var threeField = document.getElementById("15");
var fourField = document.getElementById("16");
var fiveField = document.getElementById("17");

var eightButton = document.getElementById("8button");
var nineButton = document.getElementById("9button");
var tenButton = document.getElementById("10button");
var elevenButton = document.getElementById("11button");
var twelveButton = document.getElementById("12button");
var oneButton = document.getElementById("1button");
var twoButton = document.getElementById("2button");
var threeButton = document.getElementById("3button");
var fourButton = document.getElementById("4button");
var fiveButton = document.getElementById("5button");

function box8() {
    if (eightField.id < currentTime) {
        eightField.setAttribute("class", "past");
    } else if (eightField.id == currentTime) {
        eightField.setAttribute("class", "present");
    } else {
        eightField.setAttribute("class", "future");
    }
} 

function box9() {
    if (nineField.id < currentTime) {
        nineField.setAttribute("class", "past");
    } else if (nineField.id == currentTime) {
        nineField.setAttribute("class", "present");
    } else {
        nineField.setAttribute("class", "future");
    }
} 

function box10() {
    if (tenField.id < currentTime) {
        tenField.setAttribute("class", "past");
    } else if (tenField.id == currentTime) {
        tenField.setAttribute("class", "present");
    } else {
        tenField.setAttribute("class", "future");
    }
} 

function box11() {
    if (elevenField.id < currentTime) {
        elevenField.setAttribute("class", "past");
    } else if (elevenField.id == currentTime) {
        elevenField.setAttribute("class", "present");
    } else {
        elevenField.setAttribute("class", "future");
    }
} 

function box12() {
    if (twelveField.id < currentTime) {
        twelveField.setAttribute("class", "past");
    } else if (twelveField.id == currentTime) {
        twelveField.setAttribute("class", "present");
    } else {
        twelveField.setAttribute("class", "future");
    }
} 

function box1() {
    if (oneField.id < currentTime) {
        oneField.setAttribute("class", "past");
    } else if (oneField.id == currentTime) {
        oneField.setAttribute("class", "present");
    } else {
        oneField.setAttribute("class", "future");
    }
} 

function box2() {
    if (twoField.id < currentTime) {
        twoField.setAttribute("class", "past");
    } else if (twoField.id == currentTime) {
        twoField.setAttribute("class", "present");
    } else {
        twoField.setAttribute("class", "future");
    }
} 

function box3() {
    if (threeField.id < currentTime) {
        threeField.setAttribute("class", "past");
    } else if (threeField.id == currentTime) {
        threeField.setAttribute("class", "present");
    } else {
        threeField.setAttribute("class", "future");
    }
} 

function box4() {
    if (fourField.id < currentTime) {
        fourField.setAttribute("class", "past");
    } else if (fourField.id == currentTime) {
        fourField.setAttribute("class", "present");
    } else {
        fourField.setAttribute("class", "future");
    }
} 

function box5() {
    if (fiveField.id < currentTime) {
        fiveField.setAttribute("class", "past");
    } else if (fiveField.id == currentTime) {
        fiveField.setAttribute("class", "present");
    } else {
        fiveField.setAttribute("class", "future");
    }
} 


function loadPlanner() {
var eightInput = localStorage.getItem("eight");
eightField.textContent = eightInput;

var nineInput = localStorage.getItem("nine");
nineField.textContent = nineInput;

var tenInput = localStorage.getItem("ten");
tenField.textContent = tenInput;

var elevenInput = localStorage.getItem("eleven");
elevenField.textContent = elevenInput;

var twelveInput = localStorage.getItem("twelve");
twelveField.textContent = twelveInput;

var oneInput = localStorage.getItem("one");
oneField.textContent = oneInput;

var twoInput = localStorage.getItem("two");
twoField.textContent = twoInput;

var threeInput = localStorage.getItem("three");
threeField.textContent = threeInput;

var fourInput = localStorage.getItem("four");
fourField.textContent = fourInput;

var fiveInput = localStorage.getItem("five");
fiveField.textContent = fiveInput;
}

eightButton.addEventListener("click", function(event) {
    event.preventDefault();
    var eightInput = eightField.value;
    localStorage.setItem("eight", eightInput)
});

nineButton.addEventListener("click", function(event) {
    event.preventDefault();
    var nineInput = nineField.value;
    localStorage.setItem("nine", nineInput)
});

tenButton.addEventListener("click", function(event) {
    event.preventDefault();
    var tenInput = tenField.value;
    localStorage.setItem("ten", tenInput)
});

elevenButton.addEventListener("click", function(event) {
    event.preventDefault();
    var elevenInput = elevenField.value;
    localStorage.setItem("eleven", elevenInput)
});

twelveButton.addEventListener("click", function(event) {
    event.preventDefault();
    var twelveInput = twelveField.value;
    localStorage.setItem("twelve", twelveInput)
});

oneButton.addEventListener("click", function(event) {
    event.preventDefault();
    var oneInput = oneField.value;
    localStorage.setItem("one", oneInput)
});

twoButton.addEventListener("click", function(event) {
    event.preventDefault();
    var twoInput = twoField.value;
    localStorage.setItem("two", twoInput)
});

threeButton.addEventListener("click", function(event) {
    event.preventDefault();
    var threeInput = threeField.value;
    localStorage.setItem("three", threeInput)
});

fourButton.addEventListener("click", function(event) {
    event.preventDefault();
    var fourInput = fourField.value;
    localStorage.setItem("four", fourInput)
});

fiveButton.addEventListener("click", function(event) {
    event.preventDefault();
    var fiveInput = fiveField.value;
    localStorage.setItem("five", fiveInput)
});

loadPlanner();

box8();
box9();
box10();
box11();
box12();
box1();
box2();
box3();
box4();
box5();