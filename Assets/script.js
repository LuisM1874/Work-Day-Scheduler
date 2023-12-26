// Global variables
var localeSettings = {};
dayjs.locale(localeSettings);

// Date and time in header
function dateAndTime() {
  var dateElement = $('#date');
  var timeElement = $('#time');
  var currentDate = dayjs().format('dddd, MMMM D, YYYY');
  var currentTime = dayjs().format('HH:mm:ss');
  dateElement.text(currentDate);
  timeElement.text(currentTime);
}
setInterval(dateAndTime, 1000);

// Main function - local storage , save button , colour changes .
$(function () {
  var currentHour = dayjs().format('H');

  function colorBlock() {  
    $('.time-block').each(function() {  
      var blockHour = $(this).attr("id").split("hour-")[1]; 
      console.log("currentHour" + currentHour)
      console.log("blockHour" + blockHour)
      if (blockHour == currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
       } else if (blockHour < currentHour) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
      } else if (blockHour > currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
  });
  
  // Function to save input to local storage , when save button is clicked
  $('.saveBtn').on('click', function() {
    var key = $(this).parent().attr('id');
    var value = $(this).siblings('.description').val();
    localStorage.setItem(key, value);
  });

  $('.time-block').each(function() {
    var key = $(this).attr('id');
    var value = localStorage.getItem(key);
    $(this).children('.description').val(value);
  });
}

// Colour Changing
 
colorBlock();

});
