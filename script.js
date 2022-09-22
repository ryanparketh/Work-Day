// const time8 = document.getElementById ('eight');
// const time9 = document.getElementById ('nine');
// const time10 = document.getElementById ('ten');
// const time11 = document.getElementById ('eleven');
// const time12 = document.getElementById ('tweleve');
// const time1 = document.getElementById ('one');
// const time2 = document.getElementById ('two');
// const time3 = document.getElementById ('three');
// const time4 = document.getElementById ('four');
// const time5 = document.getElementById ('five');
// const saveBtnArr = document.querySelectorAll ('button');

// added in the current date to display at the top of the page under h1
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
let saveButtonsEl = document.querySelectorAll('.saveBtn');
var notesEL = document.querySelectorAll('.note');


const timeofDay = moment().hours();
const hour = $('.hour');
const saveAct= $('.saveBtn');

hour.each (function (i){
  let time =  parseInt($(this).parent().attr('id'));

    if (time < timeofDay){ 
        $(this).next().addClass('past');
    }
    else if (time == timeofDay){
        $(this).next().addClass('present');

    }else{
        $(this).next().addClass('future');
    }
});

function saveNote(event){
    var parentNode = event.target.parentNode;
    var noteEl = parentNode.querySelector('.note');

    localStorage.setItem(parentNode.id, noteEl.value)
}


saveButtonsEl.forEach(function(button){
    button.addEventListener('click', saveNote);
});
