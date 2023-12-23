let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// ChatGPT made this to calculate time between two dates
function getDateDifference(startDate, endDate) {
  // Calculate the difference in milliseconds
  var timeDifference = endDate.getTime() - startDate.getTime();

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}


let timer = setInterval(function() {
  let startDate = new Date(); // Current date and time
  let endDate = new Date('2024-06-24T00:00:00');

  let difference = getDateDifference(startDate, endDate);

  let days = document.getElementById('days')
  let hours = document.getElementById('hours')
  let minutes = document.getElementById('minutes')
  let seconds = document.getElementById('seconds')

  days.innerHTML = '<b>Päiviä: </b>' + difference.days
  hours.innerHTML = '<b>Tunteja: </b>' + difference.hours
  minutes.innerHTML = '<b>Minuutteja: </b>' + difference.minutes
  seconds.innerHTML = '<b>Sekunteja: </b>' + difference.seconds
}, 1000)