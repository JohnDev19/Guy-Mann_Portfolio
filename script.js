///////////////////////////////////////////////////////
//    Project: Guy Mann - Developer & UI/UX Designer
//    Description: A modern, responsive portfolio website 
//    showcasing web development, design skills, project 
//    and professional expertise.
//    Developer: JohnDev19 (https://github.com/JohnDev19)
//    Version: 1.0.0
//    Last Update: December 2024
////////////////////////////////////////////////////////   
//    Technologies Used:
//    - HTML5
//    - CSS3 (Custom Design)
//    - JavaScript (Vanilla JS)
//    - Font Awesome Icons
//    - AOS (Animate on Scroll) Library
//    - Google Fonts
///////////////////////////////////////////////////////
//    Color Scheme:
//    - Primary Color: #2563eb (Blue)
//    - Secondary Color: #1e40af
//    - Accent Color: #fbbf24
///////////////////////////////////////////////////////
//     Licensing: 
//    © 2024 JohnDev19. All Rights Reserved.
///////////////////////////////////////////////////////
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu - clicking outside
document.addEventListener('click', (e) => {
  if (!menuIcon.contains(e.target) && !navLinks.contains(e.target)) {
    menuIcon.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// Smooth scroll - navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
      menuIcon.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.skill-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  observer.observe(card);
});

const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Form submitted');
});

// Project card
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter',
    () => {
      const image = card.querySelector('.project-image');
      image.style.transform = 'scale(1.05)';
    });

  card.addEventListener('mouseleave',
    () => {
      const image = card.querySelector('.project-image');
      image.style.transform = 'scale(1)';
    });
});

// Header scroll behavior
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.style.transform = 'translateY(0)';
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
  } else if (currentScroll > lastScroll) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
    header.style.backgroundColor = 'rgba(255,255,255,0.387)';
  }
  lastScroll = currentScroll;
});

// Dropdown
document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
  const select = dropdown.querySelector('.dropdown-select');
  const list = dropdown.querySelector('.dropdown-list');
  const selectedOption = dropdown.querySelector('.selected-option');
  const hiddenInput = dropdown.querySelector('.dropdown-input');
  const dropdownWrapper = dropdown.querySelector('.dropdown-wrapper');

  // Toggle dropdown
  select.addEventListener('click', () => {
    dropdownWrapper.classList.toggle('active');
  });

  // Select option
  list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      list.querySelector('.selected')?.classList.remove('selected');

      e.target.classList.add('selected');

      selectedOption.textContent = e.target.textContent;

      hiddenInput.value = e.target.getAttribute('data-value');

      dropdownWrapper.classList.remove('active');
    }
  });

  // Close dropdown - clicking outside
  document.addEventListener('click',
    (e) => {
      if (!dropdown.contains(e.target)) {
        dropdownWrapper.classList.remove('active');
      }
    });
});

// Newsletter signup
const newsletterInput = document.querySelector('.newsletter-input');
const newsletterSubmit = document.querySelector('.newsletter-submit');

newsletterSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const email = newsletterInput.value.trim();

  if (email && validateEmail(email)) {
    console.log('Subscribing email:', email);
    newsletterInput.value = '';
    alert('Thanks for subscribing!');
  } else {
    alert('Please enter a valid email address');
  }
});

// Email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Go-to-top button
function createGoToTopButton() {
  const goToTopBtn = document.createElement('button');
  goToTopBtn.innerHTML = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 19V5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 12L12 5L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;
  goToTopBtn.id = 'go-to-top';

  goToTopBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s ease;
  z-index: 1000;
  outline: none;
  border: 2px solid rgba(255,255,255,0.2);
  `;

  document.body.appendChild(goToTopBtn);

  // Scroll event
  window.addEventListener('scroll',
    () => {
      // Show/hide button - on scroll position
      if (window.pageYOffset > 300) {
        goToTopBtn.style.opacity = '1';
        goToTopBtn.style.visibility = 'visible';
        goToTopBtn.style.transform = 'translateY(0)';
      } else {
        goToTopBtn.style.opacity = '0';
        goToTopBtn.style.visibility = 'hidden';
        goToTopBtn.style.transform = 'translateY(20px)';
      }
    });

  goToTopBtn.addEventListener('click',
    () => {
      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

  goToTopBtn.addEventListener('mouseenter',
    () => {
      goToTopBtn.style.transform = 'translateY(-5px)';
      goToTopBtn.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
    });

  goToTopBtn.addEventListener('mouseleave',
    () => {
      goToTopBtn.style.transform = 'translateY(0)';
      goToTopBtn.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    });
}

const goToTopStyles = `
#go-to-top {
position: fixed;
bottom: 20px;
right: 20px;
width: 50px;
height: 50px;
background: var(--primary-color);
color: white;
border: none;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
opacity: 0;
visibility: hidden;
transform: translateY(20px);
transition: all 0.3s ease;
z-index: 1000;
outline: none;
border: 2px solid rgba(255,255,255,0.2);
}

#go-to-top:hover {
background: var(--secondary-color);
transform: translateY(-5px);
box-shadow: 0 6px 20px rgba(0,0,0,0.3);
}

#go-to-top svg {
width: 24px;
height: 24px;
stroke: white;
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = goToTopStyles;
document.head.appendChild(styleSheet);

document.addEventListener('DOMContentLoaded', createGoToTopButton);

// testimonial
class TestimonialSlider {
  constructor(options = {}) {
    this.container = document.querySelector('.testimonials-slider');
    this.prevBtn = document.querySelector('.prev-btn');
    this.nextBtn = document.querySelector('.next-btn');
    this.dotsContainer = document.querySelector('.testimonial-dots');

    this.testimonials = [{
      text: "Exceptional work that exceeded our expectations. The attention to detail and commitment to quality is truly remarkable.",
      name: "Juan Dela Cruz",
      position: "CEO, Tech Innovations",
      image: "img/client1.jpg",
      rating: 4.5
    },
      {
        text: "A game-changing partnership that transformed our business strategy and digital presence.",
        name: "Jane Hernandez",
        position: "Founder, StartUp Hub",
        image: "img/client2.jpg",
        rating: 5
      },
      {
        text: "Innovative solutions and exceptional customer service. Highly recommended!",
        name: "Kevin Rodriguez",
        position: "Marketing Director",
        image: "img/client3.jpg",
        rating: 4.7
      }];

    this.currentIndex = 0;
    this.autoPlayInterval = null;

    this.options = {
      autoPlay: true,
      autoPlayInterval: 5000,
      ...options
    };

    this.init();
  }

  init() {
    this.createDots();
    this.bindEvents();
    this.renderTestimonial();

    if (this.options.autoPlay) {
      this.startAutoPlay();
    }
  }

  createDots() {
    this.testimonials.forEach((_, index) => {
      const dot = document.createElement('a');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.setAttribute('data-index', index);
      dot.addEventListener('click', () => this.goToTestimonial(index));
      this.dotsContainer.appendChild(dot);
    });
  }

  renderTestimonial() {
    const testimonial = this.testimonials[this.currentIndex];
    const testimonialCard = this.container.querySelector('.testimonial-card');

    // Fade out
    testimonialCard.classList.add('fade-out');

    setTimeout(() => {
      testimonialCard.querySelector('.testimonial-text').textContent = testimonial.text;
      testimonialCard.querySelector('.author-image img').src = testimonial.image;
      testimonialCard.querySelector('.author-info h4').textContent = testimonial.name;
      testimonialCard.querySelector('.author-info span').textContent = testimonial.position;

      this.updateRating(testimonialCard, testimonial.rating);

      this.updateDots();

      testimonialCard.classList.remove('fade-out');
      testimonialCard.classList.add('fade-in');
    },
      300);

    setTimeout(() => {
      testimonialCard.classList.remove('fade-in');
    },
      600);
  }

  updateRating(card,
    rating) {
    const starsContainer = card.querySelector('.stars');
    const ratingText = card.querySelector('.rating-text');

    starsContainer.innerHTML = '';

    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('i');
      star.classList.add('fas');

      if (i <= Math.floor(rating)) {
        star.classList.add('fa-star');
      } else if (i - 0.5 <= rating) {
        star.classList.add('fa-star-half-alt');
      } else {
        star.classList.add('fa-star');
        star.style.opacity = '0.3';
      }

      starsContainer.appendChild(star);
    }

    ratingText.textContent = `${rating}/5`;
  }

  updateDots() {
    const dots = this.dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentIndex);
    });
  }

  goToTestimonial(index) {
    this.currentIndex = index;
    this.renderTestimonial();
    this.resetAutoPlay();
  }

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.renderTestimonial();
    this.resetAutoPlay();
  }

  prevTestimonial() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.renderTestimonial();
    this.resetAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextTestimonial();
    }, this.options.autoPlayInterval);
  }

  resetAutoPlay() {
    if (this.options.autoPlay) {
      clearInterval(this.autoPlayInterval);
      this.startAutoPlay();
    }
  }

  bindEvents() {
    this.nextBtn.addEventListener('click', () => this.nextTestimonial());
    this.prevBtn.addEventListener('click', () => this.prevTestimonial());

    // Pause on hover
    this.container.addEventListener('mouseenter', () => {
      clearInterval(this.autoPlayInterval);
    });

    this.container.addEventListener('mouseleave', () => {
      if (this.options.autoPlay) {
        this.startAutoPlay();
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new TestimonialSlider();
});

// Personal stats - about section
document.addEventListener('DOMContentLoaded', () => {
  const statsSection = document.querySelector('.personal-stats');
  const statItems = document.querySelectorAll('.stat-item');
  let hasAnimated = false;

  const animateCounters = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        statItems.forEach(statItem => {
          const statNumber = statItem.querySelector('.stat-number');
          const target = parseInt(statItem.getAttribute('data-target'));
          let current = 0;

          const updateCounter = () => {
            const increment = target / 50;

            if (current < target) {
              current += increment;
              statNumber.textContent = Math.round(current);
              requestAnimationFrame(updateCounter);
            } else {
              statNumber.textContent = target;
            }
          };

          updateCounter();
        });

        hasAnimated = true;
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(animateCounters, {
    threshold: 0.1
  });

  observer.observe(statsSection);
});

// Blog
document.addEventListener('DOMContentLoaded', () => {
  // Blog carousel
  class BlogCarousel {
    constructor(carouselSelector, indicatorsSelector) {
      this.carousel = document.querySelector(carouselSelector);
      this.indicators = document.querySelector(indicatorsSelector);
      this.currentSlide = 0;
      this.touchStartX = 0;
      this.touchEndX = 0;

      this.init();
    }

    init() {
      this.setupEventListeners();
      this.createIndicators();
      this.updateCarousel();
      this.setupResponsiveness();
    }

    createIndicators() {
      this.indicators.innerHTML = '';

      const slides = this.carousel.querySelectorAll('.blog-card');

      slides.forEach((slide,
        index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        dot.setAttribute('data-slide',
          index);
        dot.addEventListener('click',
          () => this.goToSlide(index));
        this.indicators.appendChild(dot);
      });
    }

    setupEventListeners() {
      this.carousel.addEventListener('touchstart', (e) => {
        this.touchStartX = e.touches[0].clientX;
      });

      this.carousel.addEventListener('touchend', (e) => {
        this.touchEndX = e.changedTouches[0].clientX;
        this.handleSwipe();
      });

      // Optional: mouse drag - desktop
      let isDragging = false;
      let startX;

      this.carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - this.carousel.offsetLeft;
      });

      document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
      });

      document.addEventListener('mouseup',
        () => {
          isDragging = false;
        });
    }

    handleSwipe() {
      const slides = this.carousel.querySelectorAll('.blog-card');
      const swipeThreshold = 50; // swipe distance (minimum)

      if (this.touchStartX - this.touchEndX > swipeThreshold) {
        // Swipe left (next slide)
        this.nextSlide();
      } else if (this.touchEndX - this.touchStartX > swipeThreshold) {
        // Swipe right (previous slide)
        this.prevSlide();
      }
    }

    nextSlide() {
      const slides = this.carousel.querySelectorAll('.blog-card');
      this.currentSlide = (this.currentSlide + 1) % slides.length;
      this.updateCarousel();
    }

    prevSlide() {
      const slides = this.carousel.querySelectorAll('.blog-card');
      this.currentSlide = (this.currentSlide - 1 + slides.length) % slides.length;
      this.updateCarousel();
    }

    goToSlide(index) {
      this.currentSlide = index;
      this.updateCarousel();
    }

    updateCarousel() {
      const slides = this.carousel.querySelectorAll('.blog-card');
      const dots = this.indicators.querySelectorAll('.carousel-dot');

      // Update slide position
      const slideWidth = slides[0].offsetWidth;
      this.carousel.style.transform = `translateX(-${this.currentSlide * slideWidth}px)`;

      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === this.currentSlide);
      });
    }

    setupResponsiveness() {
      const handleResponsiveness = () => {
        const isMobile = window.innerWidth <= 768;
        const desktopBlogs = document.querySelector('.desktop-blogs');
        const mobileBlogs = document.querySelector('.blog-carousel');

        if (isMobile) {
          desktopBlogs.style.display = 'none';
          mobileBlogs.style.display = 'block';
        } else {
          desktopBlogs.style.display = 'grid';
          mobileBlogs.style.display = 'none';
        }

        this.createIndicators();
        this.updateCarousel();
      };

      handleResponsiveness();

      window.addEventListener('resize', handleResponsiveness);
    }

    startAutoPlay(interval = 5000) {
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
      }, interval);
    }

    stopAutoPlay() {
      clearInterval(this.autoPlayInterval);
    }
  }

  const blogCarousel = new BlogCarousel(
    '.blog-carousel .carousel-wrapper',
    '.carousel-indicators'
  );

  blogCarousel.startAutoPlay();
});