// added in the current date to display at the top of the page under h1
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
let saveButtonsEl = document.querySelectorAll('.saveBtn');
var notesEL = document.querySelectorAll('.note');

//added time of day
const timeofDay = moment().hours();
const hour = $('.hour');
const saveAct= $('.saveBtn');

// function abc(){
// for(i=8; i< 18; i++){
//     var currentNote = localStorage.getItem(`${i}`);
//     if(currentNote){

//     }
// }

// }
// abc()

//added to allow the time dictate what the color of each box will be
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

//added local storage
function saveNote(event){
    var parentNode = event.target.parentNode;
    var noteEl = parentNode.querySelector('.note');

    localStorage.setItem(parentNode.id, noteEl.value)
}

//added the ability to add
saveButtonsEl.forEach(function(button){
    button.addEventListener('click', saveNote);
});
