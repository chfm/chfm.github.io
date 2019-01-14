// swap out the slogan
$(function () {
  var slogans = [
    "Quakers!!",
    "we hope your visit to our site was intentional",
    "gluten free",
    "funded by viewers like you, thank you",
    "the best thing since sliced bread",
    "not affiliated with the oats",
    "since 1937",
    "Quakers founded Pennsylvania",
    "Quakers won the 1947 Nobel Peace Prize",
    "part of the Religious Society of Friends",
    "Quakerism was founded by George Fox",
    "locally sourced",
    "assembled in the U.S., designed by George Fox in England",
    "we're not the same as Amish",
    "we're not the same as Mormon",
    "we're not the same as Mennonite, but they used to meet here too",
    "go to Forum!",
    "follow our insta",
    "who said Quakers are humorless?",
    "be sure to stay for snacks",
    "our old website looked like it was made in the 90s",
    "likely not seen on tv",
    "our favorite is Integrity Spice",
    "there aren't a lot of good ‘quaker’ puns",
    "this site written by hand by yours truly",
    "go Heels!",
    "the official site of the legendary CHFM",
    "we love NPR",
    "from WBEZ and public radio international",
    "the Upper Pod recommends Sufjan Stevens’ Carrie & Lowell",
    "war is not an answer",
    "Quakers!!! Where?",
    "the development name for this website was ‘pink-dandelion’",
    "this Friend speaks my mind",
    "who says Quakers never get anything done?",
    "<3",
    "the favicon is a monocolor version of the official quaker symbol",
    "stop by for tea!",
    "we were pacifists before it was cool",
    "go CFS Fighting Quakers!",
    "don't blame me, I just wrote the website"
  ];
  var x = Math.floor(Math.random() * (slogans.length));
  $("#slogan").html(slogans[x]);
});

// sign up popover
$(function () {
  $("#newsPop").click(function () {
    return false; // prevent default browser refresh on "#" link
  });

  $('#newsPop').popover({
    title: 'Newsletter Sign Up',
    html: true,
    content: newsletterPop,
    container: 'body',
  });

  $(document).on("click", "#closeNewsPop", function () {
    $(this).parents(".popover").popover('hide');
    return false;
  });
});

// function that verifies the input is an email address
function validEmail(v) {
  var r = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
  return (v.match(r) == null) ? false : true;
}

// sends the form info to the Google Sheet
$(function () {
  $(document).on('click', "#submit-email", function (e) {

    var formResults = $('#emailForm')
    var url = 'https://script.google.com/macros/s/AKfycbx_t17zYdn_52lq_k4SsJT8VuIHOOUeoz-mmSWtilsTKQz__hg/exec'

    if (validEmail(decodeURIComponent(formResults.serialize()).substring(14))) {
      $('#emailError').addClass('d-none'); //hide the error message if it is shown
      e.preventDefault();

      var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: formResults.serialize(),
      }).done(
        $(function () {
          $('#submit-email').html('<span class="fas fa-check"></span> Submitted!')
          $('#submit-email').attr('disabled', true)
        })
      );
    } else {
      // show the error message
      $('#emailError').removeClass('d-none');
    }
    return false;
  });
});

// make the accordion scroll (thanks Michael Coxon!)
$(function () {
  $('.autoScroll').on('shown.bs.collapse', function(e) {
    var $card = $(this).closest('.card');
    $('html,body').animate({
      scrollTop: $card.offset().top - 70
    }, 300);
  });
});

// fullcalendar initialization & configs and whatnot
$(function() {
  let defaultView = "month";
  if ($(window).width() < 768) {
    defaultView = "listWeek";
  }
  $('#calendar').fullCalendar( {
    // connects to the google calendar
    googleCalendarApiKey: "AIzaSyCpWuzzATotT12RpMay0rSW_Mh2P2Irugg",
    events: {
      googleCalendarId: "chapelhillfriends@gmail.com",
      className: 'gcal-event'
    },
    themeSystem: "bootstrap4", // bootstrapifies it
    defaultView: defaultView, // month view on default
    minTime: "06:00:00", // start at 6am
    eventBackgroundColor: "#7BC679", // $color3
    eventBorderColor: "#6A9669", //color4
    contentHeight: "auto", // removes internal scrollbars
    header: { // formats the calendar header
      left:   'close title',
      center: '',
      right:  'month,listWeek,agendaDay today prev,next'
    },
    bootstrapFontAwesome: { // fontawesome for the buttons
      close: 'fa-times',
      month: 'fa-calendar-alt',
      listWeek: 'fa-calendar-week',
      agendaDay: 'fa-calendar-day',
      today: 'fa-map-marker-alt',
      prev: 'fa-chevron-left',
      next: 'fa-chevron-right',
    },
    eventRender: function(eventObj, $el) { // makes the popovers for the events
      if ($(window).width() >= 768) {
        $el.popover({
          title: eventObj.title,
          content: eventObj.start.calendar(null, {sameElse: "dddd, MMMM Do [at] h:mm a"}),
          trigger: 'hover',
          placement: 'auto',
          container: 'body'
        });
      }
    },
    // removing this bit for mobile users; a more real bug fix may be in order
    /* windowResize: function() {
      if ($(window).width() < 768) {
        $('#calendar').fullCalendar('changeView', 'listWeek');
      } else {
        $('#calendar').fullCalendar('changeView', 'month');
      }
    }, */
  })
});

// end o' the jQuery
