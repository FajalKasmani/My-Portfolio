$(document).ready(function () {

  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function () {

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }

  });

  // smooth scrolling 
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top,
    },
      500,
      'linear'
    );
  });

  // Typed.js setup
  var typed = new Typed(".typing", {
    strings: ["Full-Stack Web Developer", "Freelance", "Programming Enthusiast"],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true
  });

  // ScrollReveal setup fast performance
  const sr = ScrollReveal({
    distance: '40px',
    duration: 600,
    delay: 0,
    reset: true
  });

  sr.reveal('.home h3', { origin: 'top' });
  sr.reveal('.home h1', { origin: 'left' });
  sr.reveal('.typing-container', { origin: 'right' });
  sr.reveal('.home p', { delay: 100 });
  sr.reveal('.home-buttons', { delay: 200, origin: 'bottom' });

  sr.reveal('.heading', { origin: 'top' });
  sr.reveal('.about-info', { origin: 'left' });
  sr.reveal('.education-timeline', { origin: 'right' });

  sr.reveal('.skills-box', { origin: 'bottom', interval: 100 });

  sr.reveal('.education .box', { origin: 'left', interval: 100 });
  sr.reveal('.work', { origin: 'bottom', interval: 100 });

  sr.reveal('.contact .content', { origin: 'left' });
  sr.reveal('.contact form', { origin: 'right' });

});

// Context Menu (Right-Click) Protection
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Developer Tools Key Shortcut Protection
document.addEventListener('keydown', function(e) {
  // Disable F12
  if(e.keyCode == 123) {
      e.preventDefault();
  }
  // Disable Ctrl+Shift+I (Chrome DevTools)
  if(e.ctrlKey && e.shiftKey && e.keyCode == 73) {
      e.preventDefault();
  }
  // Disable Ctrl+Shift+J (Console)
  if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
      e.preventDefault();
  }
  // Disable Ctrl+Shift+C (Inspect Element)
  if(e.ctrlKey && e.shiftKey && e.keyCode == 67) {
      e.preventDefault();
  }
  // Disable Ctrl+U (View Source)
  if(e.ctrlKey && e.keyCode == 85) {
      e.preventDefault();
  }
});

// Portfolio 1 Tab Logic
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(event, tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}