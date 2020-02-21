$(document).ready(function() {
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});

const clock = document.querySelector('.clock');
const showClock = ( ) => clock.innerText = (new Date()).toLocaleTimeString();
setInterval(showClock, 1000);
