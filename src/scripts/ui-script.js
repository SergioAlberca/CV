import $ from "jquery";
import jquery from "jquery";

export function showLoading() {
  $("#loader")
    .delay(1000)
    .fadeIn("slow", function () {
      $("#preloader").delay(1000).fadeIn("slow");
    });
}

export function hideLoading() {
  $("#loader")
    .delay(300)
    .fadeOut("slow", function () {
      $("#preloader").delay(300).fadeOut("slow");
    });
}

export function showButtonGoTop() {
  /*----------------------------------------------------- */
  /* Back to top
   ------------------------------------------------------- */
  var pxShow = 300; // height on which the button will show
  var fadeInTime = 400; // how slow/fast you want the button to show
  var fadeOutTime = 400; // how slow/fast you want the button to hide
  var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

  // Show or hide the sticky footer button
  jquery(window).scroll(function () {
    if (!$("#header-search").hasClass("is-visible")) {
      if (jquery(window).scrollTop() >= pxShow) {
        jquery("#go-top").fadeIn(fadeInTime);
      } else {
        jquery("#go-top").fadeOut(fadeOutTime);
      }
    }
  });
}
