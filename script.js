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


const timeofDay = moment().format();
const hour = $('.hour');
const saveAct= $('.saveBtn');

hour.each (function (i){
  let time =  parseInt($(this).attr('id'));
  console.log(time);
    if (time < timeofDay){ 
        $(this).next().addClass('past');
    }
    else if (time == timeofDay){
        $(this).next().addClass('present');

    }else{
        $(this).next().addClass('future');
    }
    });
