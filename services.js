document.addEventListener("DOMContentLoaded", () => {
    // Navbar scroll effect
    const navbar = document.querySelector(".navbar")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.style.padding = "10px 0"
        navbar.style.backgroundColor = "rgba(12, 0, 32, 0.98)"
        navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.3)"
      } else {
        navbar.style.padding = "15px 0"
        navbar.style.backgroundColor = "rgba(12, 0, 32, 0.95)"
        navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)"
      }
    })
  
    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle")
    const navMenu = document.querySelector(".nav-menu")
  
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      menuToggle.classList.toggle("active")
    })
  
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll(".nav-menu a")
  
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        menuToggle.classList.remove("active")
      })
    })
  
    // Active nav link based on scroll position
    const sections = document.querySelectorAll("section")
  
    window.addEventListener("scroll", () => {
      let current = ""
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
  
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id")
        }
      })
  
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active")
        }
      })
    })
  
    // Testimonial slider
    const testimonialTrack = document.querySelector(".testimonial-track")
    const testimonialCards = document.querySelectorAll(".testimonial-card")
    const dots = document.querySelectorAll(".dot")
    const prevBtn = document.querySelector(".prev-btn")
    const nextBtn = document.querySelector(".next-btn")
  
    if (testimonialTrack) {
      let currentIndex = 0
      const cardWidth = 100 // 100%
  
      function goToSlide(index) {
        if (index < 0) {
          index = testimonialCards.length - 1
        } else if (index >= testimonialCards.length) {
          index = 0
        }
  
        currentIndex = index
        testimonialTrack.style.transform = `translateX(-${currentIndex * cardWidth}%)`
  
        // Update dots
        dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === currentIndex)
        })
      }
  
      // Initial setup
      goToSlide(0)
  
      // Event listeners for controls
      if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1))
        nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1))
  
        dots.forEach((dot, i) => {
          dot.addEventListener("click", () => goToSlide(i))
        })
  
        // Auto slide
        let slideInterval = setInterval(() => goToSlide(currentIndex + 1), 5000)
  
        // Pause on hover
        testimonialTrack.addEventListener("mouseenter", () => {
          clearInterval(slideInterval)
        })
  
        testimonialTrack.addEventListener("mouseleave", () => {
          slideInterval = setInterval(() => goToSlide(currentIndex + 1), 5000)
        })
      }
    }
  
    // Enhanced video interactions
    const videoCards = document.querySelectorAll(".video-card")
    const videoOverlays = document.querySelectorAll(".video-overlay")
  
    videoCards.forEach((card, index) => {
      const overlay = videoOverlays[index]
      const iframe = card.querySelector("iframe")
      const playButton = card.querySelector(".play-button")
  
      if (playButton) {
        // Add pulse animation to play button
        playButton.classList.add("pulse-animation")
  
        playButton.addEventListener("click", () => {
          // Get the current src
          let src = iframe.src
  
          // Add autoplay parameter if not already present
          if (src.indexOf("autoplay=1") === -1) {
            src += (src.indexOf("?") === -1 ? "?" : "&") + "autoplay=1"
            iframe.src = src
          }
  
          // Hide overlay with animation
          overlay.style.opacity = "0"
          setTimeout(() => {
            overlay.style.display = "none"
          }, 500)
        })
  
        // Show overlay on hover
        card.addEventListener("mouseenter", () => {
          overlay.style.opacity = "1"
          playButton.classList.add("pulse-animation")
        })
  
        card.addEventListener("mouseleave", () => {
          if (iframe.src.indexOf("autoplay=1") === -1) {
            overlay.style.opacity = "0"
          }
        })
      }
    })
  
    // Animate elements on scroll
    function animateOnScroll() {
      const elements = document.querySelectorAll(
        ".service-card, .about-image, .about-text, .contact-card, .video-card, .service-item",
      )
  
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const screenPosition = window.innerHeight / 1.3
  
        if (elementPosition < screenPosition) {
          element.classList.add("animate")
        }
      })
    }
  
    // Add animation class
    document
      .querySelectorAll(".service-card, .about-image, .about-text, .contact-card, .video-card, .service-item")
      .forEach((el) => {
        el.classList.add("scroll-animation")
      })
  
    // Call on scroll
    window.addEventListener("scroll", animateOnScroll)
  
    // Call once on load
    animateOnScroll()
  
    // Form submission with custom alert
    const consultationForm = document.getElementById("consultation-form")
    const customAlert = document.getElementById("custom-alert")
    const alertEmail = document.getElementById("alert-email")
    const alertClose = document.querySelector(".alert-close")
  
    if (consultationForm) {
      consultationForm.addEventListener("submit", function (e) {
        e.preventDefault()
  
        // Collect form data
        const formData = new FormData(this)
        const formValues = Object.fromEntries(formData.entries())
  
        // Here you would typically send the data to a server
        console.log("Form submitted with values:", formValues)
  
        // Show custom alert with email
        if (alertEmail) {
          alertEmail.textContent = formValues.email || "your email address"
        }
  
        // Show the custom alert with animation
        if (customAlert) {
          customAlert.classList.add("show")
  
          // Auto hide after 5 seconds
          setTimeout(() => {
            customAlert.classList.remove("show")
          }, 5000)
        }
  
        // Reset form
        this.reset()
      })
    }
  
    // Close alert when clicking the close button
    if (alertClose) {
      alertClose.addEventListener("click", () => {
        customAlert.classList.remove("show")
      })
    }
  
    // Close alert when clicking outside the alert content
    if (customAlert) {
      customAlert.addEventListener("click", (e) => {
        if (e.target === customAlert) {
          customAlert.classList.remove("show")
        }
      })
    }
  
    // Newsletter form
    const newsletterForm = document.querySelector(".newsletter-form")
  
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault()
  
        const email = this.querySelector("input").value
  
        // Here you would typically send the email to a server
        console.log("Newsletter subscription:", email)
  
        // Show success message
        alert("Thank you for subscribing to our newsletter!")
  
        // Reset form
        this.reset()
      })
    }
  
    // Create stars animation in hero section
    function createStars() {
      const starsContainer = document.querySelector(".stars")
      const starCount = 100
  
      if (!starsContainer) return
  
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div")
        star.classList.add("star")
  
        // Random position
        const posX = Math.random() * 100
        const posY = Math.random() * 100
  
        // Random size
        const size = Math.random() * 2 + 1
  
        // Random opacity
        const opacity = Math.random() * 0.5 + 0.3
  
        // Apply styles
        star.style.left = `${posX}%`
        star.style.top = `${posY}%`
        star.style.width = `${size}px`
        star.style.height = `${size}px`
        star.style.opacity = opacity
        star.style.animationDelay = `${Math.random() * 5}s`
  
        starsContainer.appendChild(star)
      }
    }
  
    // Call the function to create stars
    createStars()
  
    // Replace the existing floating animation for astrologer card with this:
    const astrologerCard = document.querySelector(".astrologer-card")
    if (astrologerCard) {
      window.addEventListener("mousemove", (e) => {
        const card = astrologerCard.getBoundingClientRect()
        const cardCenterX = card.left + card.width / 2
        const cardCenterY = card.top + card.height / 2
  
        const mouseX = e.clientX
        const mouseY = e.clientY
  
        // Calculate distance from mouse to card center
        const distX = mouseX - cardCenterX
        const distY = mouseY - cardCenterY
  
        // Calculate the glow position
        const glow = astrologerCard.querySelector(".card-glow")
        if (glow) {
          const x = (distX / card.width) * 100 + 50
          const y = (distY / card.height) * 100 + 50
          glow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(222, 172, 245, 0.3), transparent 70%)`
        }
      })
  
      // Add subtle floating animation
      const floatAnimation = () => {
        let startTime = null
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp
          const progress = timestamp - startTime
  
          // Subtle up and down movement
          const yOffset = Math.sin(progress / 1000) * 5
          astrologerCard.style.transform = `translateY(${yOffset}px)`
  
          requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
      }
  
      floatAnimation()
    }
  
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll(".faq-item")
    if (faqItems.length > 0) {
      faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question")
  
        question.addEventListener("click", () => {
          // Toggle active class on the clicked item
          item.classList.toggle("active")
  
          // Close other items
          faqItems.forEach((otherItem) => {
            if (otherItem !== item) {
              otherItem.classList.remove("active")
            }
          })
        })
      })
    }
  })
  
  // Add CSS for animations
  const style = document.createElement("style")
  style.textContent = `
      .scroll-animation {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      .scroll-animation.animate {
          opacity: 1;
          transform: translateY(0);
      }
      
      .star {
          position: absolute;
          background-color: white;
          border-radius: 50%;
          animation: twinkle 5s infinite;
      }
      
      @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
      }
      
      @keyframes fadeInUp {
          from {
              opacity: 0;
              transform: translateY(30px);
          }
          to {
              opacity: 1;
              transform: translateY(0);
          }
      }
      
      @keyframes pulse {
          0% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(151, 84, 203, 0.7);
          }
          70% {
              transform: scale(1.05);
              box-shadow: 0 0 0 10px rgba(151, 84, 203, 0);
          }
          100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(151, 84, 203, 0);
          }
      }
  `
  style.textContent += `
      .pulse-animation {
          animation: pulse 2s infinite;
      }
      
      @keyframes pulse {
          0% {
              transform: scale(0.95);
              box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
          }
          70% {
              transform: scale(1);
              box-shadow: 0 0 0 15px rgba(255, 255, 255, 0);
          }
          100% {
              transform: scale(0.95);
              box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
          }
      }
  `
  document.head.appendChild(style)
  
  