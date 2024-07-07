$(document).ready(function () {
  // Listen for save button clicks
  $('.save-button').on('click', function () {
    // Get nearby values
    var taskDescription = $(this).siblings('.task-input').val();
    var timeBlockId = $(this).parent().attr('id');

    // Save in localStorage
    localStorage.setItem(timeBlockId, taskDescription);

    // Show notification that item was saved to localStorage by adding class 'show'
    $('#notificationMessage').addClass('show');

    // Timeout to remove 'show' class after 5 seconds
    setTimeout(function () {
      $('#notificationMessage').removeClass('show');
    }, 5000);
  });

  function updateHourBlocks() {
    // Get current number of hours
    var currentHour = dayjs().hour();

    // Loop over time blocks
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);

      // Check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass('past');
        $(this).removeClass('present future');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past future');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past present');
        $(this).addClass('future');
      }
    });
  }

  updateHourBlocks();

  // Set up interval to check if current time needs to be updated
  setInterval(updateHourBlocks, 15000);

  // Load any saved data from localStorage
  $('#hour-9 .task-input').val(localStorage.getItem('hour-9'));
  $('#hour-10 .task-input').val(localStorage.getItem('hour-10'));
  $('#hour-11 .task-input').val(localStorage.getItem('hour-11'));
  $('#hour-12 .task-input').val(localStorage.getItem('hour-12'));
  $('#hour-13 .task-input').val(localStorage.getItem('hour-13'));
  $('#hour-14 .task-input').val(localStorage.getItem('hour-14'));
  $('#hour-15 .task-input').val(localStorage.getItem('hour-15'));
  $('#hour-16 .task-input').val(localStorage.getItem('hour-16'));
  $('#hour-17 .task-input').val(localStorage.getItem('hour-17'));

  // Display current day on page
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});
