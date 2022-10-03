var currentDay = moment().format("dddd, MMMM Do, YYYY hh:mm");
$("#currentDay").text((currentDay));

var eightField = document.getElementById("8am");
var nineField = document.getElementById("9am");
var tenField = document.getElementById("10am");
var elevenField = document.getElementById("11am");
var twelveField = document.getElementById("12pm");
var oneField = document.getElementById("1pm");
var twoField = document.getElementById("2pm");
var threeField = document.getElementById("3pm");
var fourField = document.getElementById("4pm");
var fiveField = document.getElementById("5pm");

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