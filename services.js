// services.js

// Initialize AOS library
AOS.init({
    duration: 1200,
    once: true,
  });
  
  // Scroll-to-Top Button Functionality
  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
  
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  