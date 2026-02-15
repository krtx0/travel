// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initAnimations();
    //initNavigation();
    initSmoothScroll();
});


// GSAP Scroll Animations
function initAnimations() {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero Animation
    gsap.to('.hero-content', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2
    });
    
    // Parallax Hero Image
    gsap.to('#hero-image', {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });
    
    // Scroll Reveal Elements
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    revealElements.forEach((element, index) => {
        gsap.fromTo(element, 
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                delay: element.style.transitionDelay ? parseInt(element.style.transitionDelay) / 1000 : 0
            }
        );
    });
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 100; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('mobile-menu-icon');
    
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        // Change icon to X
        menuIcon.setAttribute('data-lucide', 'x');
    } else {
        mobileMenu.classList.add('hidden');
        // Change icon back to menu
        menuIcon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
}

// Modal Functions
function openModal() {
    const modal = document.getElementById('contact-modal');
    const modalContent = document.getElementById('modal-content');
    
    modal.classList.remove('hidden');
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Animate in
    setTimeout(() => {
        modalContent.style.transform = 'scale(1)';
        modalContent.style.opacity = '1';
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('contact-modal');
    const modalContent = document.getElementById('modal-content');
    
    // Animate out
    modalContent.style.transform = 'scale(0.95)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Form Submission Handler
function handleSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Show success message (in real implementation, send to server)
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <div class="text-center py-12">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="check" class="w-8 h-8 text-green-600"></i>
            </div>
            <h3 class="font-serif text-2xl text-brand-dark mb-2">Thank You!</h3>
            <p class="text-gray-600 mb-6">Leena will contact you within 24 hours to discuss your travel plans.</p>
            <button onclick="closeModal()" class="bg-brand-dark text-white px-8 py-3 rounded-xl font-medium hover:bg-brand-gold hover:text-brand-dark transition-all">
                Close
            </button>
        </div>
    `;
    lucide.createIcons();
}

// Intersection Observer for Fallback (if GSAP fails)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

// Observe all scroll-reveal elements
document.querySelectorAll('.scroll-reveal').forEach((el) => {
    observer.observe(el);
});

// Performance: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add to Calendar Functionality (for future use)
function addToCalendar(eventDetails) {
    // Implementation for adding consultation to calendar
    console.log('Adding to calendar:', eventDetails);
}

// Analytics Tracking (placeholder)
function trackEvent(eventName, eventData) {
    // Implementation for analytics
    console.log('Event tracked:', eventName, eventData);
}

// Track CTA clicks
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent || e.target.innerText;
        trackEvent('cta_click', { button: buttonText });
    });
});