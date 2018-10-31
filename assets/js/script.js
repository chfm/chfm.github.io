// scrollspy function minified; idk why but the separate file isn't loading :(
  (function(n,t){n.fn.extend({scrollspy:function(i){var u={namespace:"scrollspy",activeClass:"active",animated:!1,offset:0,container:t};i=n.extend({},u,i);var r=function(n,t){return parseInt(n,10)+parseInt(t,10)},f=function(t){for(var u,o,f=[],r=0;r<t.length;r++){var s=t[r],e=n(s).attr("href"),i=n(e);i.length>0&&(u=Math.floor(i.offset().top),o=u+Math.floor(i.outerHeight()),f.push({element:i,hash:e,top:u,bottom:o}))}return f},e=function(t,i){for(var u,r=0;r<t.length;r++)if(u=n(t[r]),u.attr("href")===i)return u},o=function(t){for(var u,r=0;r<t.length;r++)u=n(t[r]),u.parent().removeClass(i.activeClass)};return this.each(function(){for(var l,c,s=this,a=n(i.container),u=n(s).find("a"),h=0;h<u.length;h++){l=u[h];n(l).on("click",function(u){var o=n(this).attr("href"),e=n(o),f;e.length>0&&(f=r(e.offset().top,i.offset),i.animate?n("html, body").animate({scrollTop:f},1e3):t.scrollTo(0,f),u.preventDefault())})}c=f(u);a.bind("scroll."+i.namespace,function(){for(var t,a,f={top:r(n(this).scrollTop(),Math.abs(i.offset)),left:n(this).scrollLeft()},h,l=0;l<c.length;l++)if(t=c[l],f.top>=t.top&&f.top<t.bottom&&(a=t.hash,h=e(u,a),h)){if(i.onChange)i.onChange(t.element,n(s),f);o(u);h.parent().addClass(i.activeClass);break}if(!h&&i.onExit)i.onExit(n(s),f)})})}})})(jQuery,window,document,undefined);

// swap out the slogan
$(function () {
  var slogans = {
    0: "Quakers!",
    1: "we hope your visit to our site was intentional",
    2: "gluten free",
    3: "funded by viewers like you, thank you",
    4: "the best thing since sliced bread",
    5: "not affiliated with the oats",
    6: "since 1937",
    7: "Quakers founded Pennsylvania",
    8: "Quakers won the 1947 Nobel Peace Prize",
    9: "part of the Religious Society of Friends",
    10: "Quakerism was founded by George Fox",
    11: "locally sourced",
    12: "assembled in the U.S., designed by George Fox in England",
    13: "not the same as Amish",
    14: "not the same as Mormon",
    15: "not the same as Mennonite, but they used to meet here too",
    16: "go to Forum!",
    17: "follow our insta",
    18: "who said Quakers are humorless?",
    19: "click my name at the bottom of the page",
    20: "our old website looked like it was made in the 90s",
    21: "likely not seen on tv",
    22: "our favorite is Integrity Spice",
    23: "there aren't a lot of good ‘quaker’ puns",
    24: "this site written by hand by yours truly",
    25: "go Heels!",
    26: "the official site of the legendary CHFM",
    27: "we love NPR",
    28: "from WBEZ and public radio international",
    29: "the Upper Pod recommends Sufjan Stevens’ Carrie & Lowell",
    30: "war is not an answer",
    31: "Quakers!!! Where?",
    32: "the development name for this website was ‘pink-dandelion’",
    33: "this Friend speaks my mind",
    34: "who says Quakers never get anything done?",
    35: "<3",
    36: "the favicon is a monocolor version of the official quaker symbol",
    37: "stop by for tea!",
    38: "we were pacifists before it was cool",
    39: "go CFS Fighting Quakers!",
    40: "don't blame me, I just wrote the website",
  };
  var x = Math.floor(Math.random() * (Object.keys(slogans).length));
  // var x = 40; // for bug testing
  $("#slogan").html(slogans[x]);
});

// diversity and contact tooltips
$(function () {
  $('#diversityPop').tooltip({
    title: diversityPop,
    placement: 'bottom',
    trigger: 'hover focus'
  });
  $('#contactPop').tooltip({
    title: contactPop,
    html: true,
    placement: 'bottom',
    trigger: 'hover focus',
  });
});

// this one displays the tooltips on entering the site
/*
$( function () {
  if ($(window).width() >= 720) {
    setTimeout(() => {
      $('#contactPop').tooltip('show');
      $('#diversityPop').tooltip('show');
    }, 400);
    setTimeout(() => {
      $('#diversityPop').tooltip('hide');
      $('#contactPop').tooltip('hide');
    }, 1800);
  }
});
*/


// underline nav items
$(function () {
  $('.navElement').append('<div class="hilight"></div>'); // make the nav item underlines
  var aniTimeIn = 250;
  var aniTimeOut = 250;
  var easeInType = "easeOutExpo";
  var easeOutType = "easeOutExpo";
  var originalMarginTop = $('div.hilight').css('margin-top');

  // TODO: make this work again :/
  // make the current page's hilight always shown
  $(".navElement").each(function (i, obj) {
    if ($(this).children("a").hasClass('currentPage')) {
      $(this).children('div.hilight').css({ "height": originalMarginTop, "margin-top": "0px" });
    }
  });

  if ($(window).width() >= 720) { // makes things less irritating on mobile
    $('.navElement').mouseover(function () {
      // make the current page not animate
      if (!($(this).children("a").hasClass('currentPage'))) {
        $(this).children('div.hilight').stop().animate({ height: originalMarginTop, marginTop: "0px" }, aniTimeIn, easeInType);
      }
    });
    $('.navElement').mouseout(function () {
      // make the current page not animate
      if (!($(this).children("a").hasClass('currentPage'))) {
        $(this).children('div.hilight').stop().animate({ height: "0px", marginTop: originalMarginTop }, aniTimeOut, easeOutType);
      }
    });
  }
});

$(function () {
  $("#subnav").scrollspy({offset: -90});
});

// make the navbar snap to the top
$(function () {
  var headerHeight = $('#header').height() - $('#navbar').height();
  var sidebarWidth = $('#content').width() - $('.pagecontent').width();

  if ($(window).width() <= 575) {
    $('#subnav').css({ "position": "relative"}); // make the subnav not be sticky on small screens
  } else {
    $('#subnav').css({ "width": sidebarWidth}); // make the subnav not too wide
  }

  var collapseNav = function (direction) {
    if (direction) {
      $('#content').css({ "margin-top": $('#navbar').height() });
      $('#navbar').css({ "position": "fixed", "margin-top": "0px" });
      $('#subnav').css({ "position": "fixed", "margin-top": -headerHeight}); // subnav sticky on large screens
    } else {
      $('#navbar').css({ "position": "relative", "margin-top": "0px" });
      $('#content').css({ "margin-top": "0px" });
      $('#subnav').css({ "position": "absolute", "margin-top": "0px"});
    }
  }

  $(window).scroll(function () {
    if ($(window).width() > 575) {

      // make the navbar snap to the top when scrolled past it
      if ($(window).scrollTop() >= headerHeight) {
        collapseNav(1);
      } else {
        collapseNav(0);
      }

      // make the shadow be dependent on how far scrolled
      var shadowHeight = Math.log(headerHeight + 100 - headerHeight) * 2;
      if ($(window).scrollTop() < $('#header').height()) {
        shadowHeight = 0;
      } else if ($(window).scrollTop() <= (headerHeight + 100)) {
        shadowHeight = (Math.log($(window).scrollTop() - headerHeight) * 2);
      }
      var shadowValue = "0px " + shadowHeight * .3 + "px " + shadowHeight * 1 + "px rgba(0, 0, 0, " + (shadowHeight * .04) + ")";
      $('#navbar').css({ "box-shadow": shadowValue });
    }
  });
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
          $('#submit-email').html('<img class="icon" src="/assets/images/icons/checkmark-light.svg" alt="check" />Submitted!')
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

// makes the credits appear when you click my name
$(function () {
  var originalHeight = $('#credits').height();
  $('#creditsReveal').css({ "height": originalHeight });
  var state = true;

  $('#copyright').click(function () {
    if (state) {
      $('#creditsReveal').stop().animate({ height: 0 }, 500, 'easeOutExpo');
    } else {
      $('#creditsReveal').animate({ height: originalHeight }, 500, 'easeOutExpo');
    }
    state = !state;
  });
});

// end o' the jQuery
