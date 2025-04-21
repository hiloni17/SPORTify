document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    if (hamburger && mobileMenu) {
        // Toggle mobile menu
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target) && mobileMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.style.overflow = '';
            }
        });

        // Close mobile menu when clicking on a mobile menu link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.style.overflow = '';
            });
        });

        // Close mobile menu when window is resized above mobile breakpoint
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.style.overflow = '';
            }
        });
    }

    // Function to handle scroll with offset
    const scrollToElementWithOffset = (element, offset = 100) => {
        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Sports page search
    const sportsSearchInput = document.querySelector('.main-search input');
    if (sportsSearchInput) {
        sportsSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const searchResults = document.querySelector('.sports-results');
                scrollToElementWithOffset(searchResults);
            }
        });
    }

    // Career page search
    const careerSearchInput = document.querySelector('#careerSearch');
    if (careerSearchInput) {
        careerSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const searchResults = document.querySelector('.career-results');
                scrollToElementWithOffset(searchResults);
            }
        });
    }

    // News page search
    const newsSearchInput = document.querySelector('#newsSearch');
    if (newsSearchInput) {
        newsSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const searchResults = document.querySelector('.cards-container');
                scrollToElementWithOffset(searchResults);
            }
        });
    }
}); 

//Carousel

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    let autoSlideInterval;
    let isTransitioning = false;
    
    // Clone first slide and append it to the end for smooth transition
    const firstSlideClone = slides[0].cloneNode(true);
    carousel.appendChild(firstSlideClone);
    
    // Set initial position
    updateCarousel();
    
    // Start auto-sliding
    startAutoSlide();
    
    // Pause auto-sliding when hovering over carousel
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
    
    // Handle transition end
    carousel.addEventListener('transitionend', function() {
        if (currentSlide === slideCount) {
            // Reset to first slide without animation
            carousel.style.transition = 'none';
            currentSlide = 0;
            updateCarousel();
            // Force reflow
            carousel.offsetHeight;
            // Restore transition
            carousel.style.transition = 'transform 0.5s ease-in-out';
        }
    });
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            if (!isTransitioning) {
                currentSlide++;
                updateCarousel();
            }
        }, 2000);
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    function updateCarousel() {
        isTransitioning = true;
        const offset = -currentSlide * 100;
        carousel.style.transform = `translateX(${offset}%)`;
        
        // Update active state for slides
        slides.forEach((slide, index) => {
            if (index === currentSlide % slideCount) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        
        // Reset transitioning flag after animation
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }
}); 