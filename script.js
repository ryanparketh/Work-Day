const time8 = document.getElementById ('eight');
const time9 = document.getElementById ('nine');
const time10 = document.getElementById ('ten');
const time11 = document.getElementById ('eleven');
const time12 = document.getElementById ('tweleve');
const time1 = document.getElementById ('one');
const time2 = document.getElementById ('two');
const time3 = document.getElementById ('three');
const time4 = document.getElementById ('four');
const time5 = document.getElementById ('five');
const saveBtnArr = document.querySelectorAll ('button');

var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));