function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }

/*herosection*/
  document.addEventListener("DOMContentLoaded", () => {
    const heroImage = document.querySelector(".hero-image");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heroImage.classList.add("animate");
          }
        });
      },
      { threshold: 0.5 }
    );
  
    observer.observe(heroImage);
  });
  

/*suscribe*/
function handleSubscription(event) {
  event.preventDefault(); // Prevent page reload

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  // Create a custom alert box
  const alertBox = document.createElement("div");
  alertBox.classList.add("custom-alert");
  alertBox.innerHTML = `
    <h3>Subscription Successful!</h3>
    <p>Thank you, ${name}, for subscribing to our newsletter.<br/>
    We will contact you at <strong>${email}</strong> and <strong>${phone}</strong>.</p>
  `;
  
  // Append alert to body
  document.body.appendChild(alertBox);

  // Remove alert after 3 seconds
  setTimeout(() => {
    alertBox.remove();
  }, 3000);
}

/*footer*/
document.addEventListener('DOMContentLoaded', () => {
  const socialIcons = document.querySelectorAll('.social-icon');

  socialIcons.forEach(icon => {
      icon.addEventListener('mouseover', () => {
          icon.style.transform = 'scale(1.3)';
      });

      icon.addEventListener('mouseout', () => {
          icon.style.transform = 'scale(1)';
      });
  });
});