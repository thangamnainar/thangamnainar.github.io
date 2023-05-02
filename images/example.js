// get the navbar element
const navbar = document.querySelector('nav');

// listen for scroll events
window.addEventListener('scroll', () => {
  // get the current scroll position
  const scrollPosition = window.scrollY;

  // set the background color of the navbar based on the scroll position
  if (scrollPosition > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
