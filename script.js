let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.style.background = `conic-gradient(#26a0cc  ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

$(".menu-toggle-btn").click(function () {
  $(this).toggleClass("fa-times");
  $(".navigation-menu").toggleClass("active");
});

// Smooth scroll animation for "to top" button
$("#progress").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
