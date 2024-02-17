document.addEventListener('DOMContentLoaded', function() {
    const scrollLeftButton = document.querySelector('.scroll-left');
    const scrollRightButton = document.querySelector('.scroll-right');
    const container = document.querySelector('.story-container');
  
    scrollLeftButton.addEventListener('click', function() {
      container.scrollBy({
        left: -200, // Adjust scroll distance as needed
        behavior: 'smooth'  // Smooth scrolling
      });
    });
  
    scrollRightButton.addEventListener('click', function() {
      container.scrollBy({
        left: 200, // Adjust scroll distance as needed
        behavior: 'smooth' // Smooth scrolling
      });
    });
  });
  