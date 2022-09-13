var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

var timeDisplayEl = document.querySelector("#time-display");

timeDisplayEl.textContent = moment();


$(document).ready(function () {
    $(".saveBtn").on("click", function () {

        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        var timeNow = moment().hour();


    $("rows").val(localStorage.getItem());

