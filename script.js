(function () {
  var slides = document.querySelectorAll('.slide');
  var dotsContainer = document.getElementById('carouselDots');
  var prevBtn = document.getElementById('prevBtn');
  var nextBtn = document.getElementById('nextBtn');
  var frame = document.getElementById('carouselFrame');
  if (!slides.length || !dotsContainer) return;

  var current = 0;
  var paused = false;
  var timer = null;

  slides.forEach(function (slide, i) {
    var dot = document.createElement('button');
    dot.setAttribute('aria-label', 'Zu Folie ' + (i + 1) + ' wechseln');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', function () { goTo(i); });
    dotsContainer.appendChild(dot);
  });

  var dots = dotsContainer.querySelectorAll('button');

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  if (nextBtn) nextBtn.addEventListener('click', next);
  if (prevBtn) prevBtn.addEventListener('click', prev);

  function startAutoplay() {
    timer = setInterval(function () {
      if (!paused) next();
    }, 5000);
  }

  if (frame) {
    frame.addEventListener('mouseenter', function () { paused = true; });
    frame.addEventListener('mouseleave', function () { paused = false; });
  }

  startAutoplay();
})();
