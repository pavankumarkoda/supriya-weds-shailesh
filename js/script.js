/**
 * @author Gowtham <boddetigowtamkumar@gmail.com>
 */
(function ($) {
  "use strict";
  $(".Gowtham-falling").sakura("start", {
    blowAnimations: ["blow-soft-left"],
    className: "sakura",
    fallSpeed: 2.5,
    maxSize: 12,
    minSize: 9,
    newOn: 250,
  });
})(jQuery);

// Play background audio on click
$(document).on("click", function () {
  document.getElementById("my_audio").play();
  console.log("Shaadi me zaroor aana");
});

// Pause audio function
function pauseAudio(event) {
  document.getElementById("my_audio").pause();
  console.log("Shaadi me pakka aana");
  event.stopPropagation();
}

// Countdown Timer
var countDownDate = new Date("February 19, 2026 23:33:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var timeElement = document.getElementById("time");

  // Initialize structure if it doesn't exist
  if (!document.getElementById("timer-container")) {
    timeElement.innerHTML =
      "<div class='container' id='timer-container'>" +
      "<div class='block'><div class='card' id='days-val'>0</div><div class='label'>Days</div></div>" +
      "<div class='block'><div class='card' id='hours-val'>0</div><div class='label'>Hours</div></div>" +
      "<div class='block'><div class='card' id='minutes-val'>0</div><div class='label'>Minutes</div></div>" +
      "<div class='block'><div class='card' id='seconds-val'>0</div><div class='label'>Seconds</div></div>" +
      "</div>";
  }

  // Function to update value and trigger animation
  function updateTime(id, value) {
    var el = document.getElementById(id);
    if (el && el.innerText != value) {
      el.innerText = value;
      el.classList.remove("flip-animate");
      void el.offsetWidth; // Trigger reflow
      el.classList.add("flip-animate");
    }
  }

  updateTime("days-val", days);
  updateTime("hours-val", hours);
  updateTime("minutes-val", minutes);
  updateTime("seconds-val", seconds);

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "Wedding Completed !!";
  }
}, 1000);

// Styling console logs
var styles = [
  "background: linear-gradient(#D33106, #571402)",
  "border: 1px solid red",
  "color: white",
  "display: block",
  "text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)",
  "box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset",
  "line-height: 40px",
  "text-align: center",
  "font-weight: bold",
  "font-size: 32px",
].join(";");

console.log("\n\n%c SAVE THE DATE: 19th Feb, 2026", styles);

// Video and Audio Handling
document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".tile__video");
  const audio = document.getElementById("my_audio");

  if (video && audio) {
    // Observe when video enters/exits viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play();
          audio.pause(); // Stop background music when video starts
        } else {
          video.pause();
          audio.play(); // Resume background music when video is out of view
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of video is visible

    observer.observe(video);

    // Prevent video download
    video.setAttribute("controlsList", "nodownload");

    // Pause background audio when user manually plays video
    video.addEventListener("play", () => audio.pause());
    video.addEventListener("pause", () => audio.play());

    // Ensure video fits all screen sizes
    video.style.maxWidth = "100%";
    video.style.height = "auto";
  }
});

// Scroll Reveal Animation
document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -30px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach((el) => observer.observe(el));
});
