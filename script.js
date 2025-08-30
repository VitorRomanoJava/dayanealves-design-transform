// DOM Elements
const header = document.getElementById('header');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const portfolioFilters = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselDots = document.getElementById('carouselDots');

// State
let currentTestimonial = 0;
let testimonialInterval;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeHeader();
    initializeMobileMenu();
    initializePortfolioFilters();
    initializeTestimonials();
    initializeWhatsAppButtons();
    initializeScrollAnimations();
    initializeSmoothScrolling();
});

// Header Scroll Effect
function initializeHeader() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Mobile Menu
function initializeMobileMenu() {
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        
        if (mobileMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking on links
    const mobileLinks = document.querySelectorAll('.nav-link-mobile');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        });
    });
}

// Portfolio Filters
function initializePortfolioFilters() {
    portfolioFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // Update active filter
            portfolioFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'todos' || category === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Testimonials Carousel
function initializeTestimonials() {
    // Create dots
    testimonialCards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToTestimonial(index));
        carouselDots.appendChild(dot);
    });

    // Navigation buttons
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', previousTestimonial);
        nextBtn.addEventListener('click', nextTestimonial);
    }

    // Auto-play
    startTestimonialAutoPlay();
}

function goToTestimonial(index) {
    // Update cards
    testimonialCards.forEach((card, i) => {
        card.classList.toggle('active', i === index);
    });

    // Update dots
    const dots = carouselDots.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    currentTestimonial = index;
}

function nextTestimonial() {
    const nextIndex = (currentTestimonial + 1) % testimonialCards.length;
    goToTestimonial(nextIndex);
}

function previousTestimonial() {
    const prevIndex = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    goToTestimonial(prevIndex);
}

function startTestimonialAutoPlay() {
    testimonialInterval = setInterval(nextTestimonial, 5000);
}

function stopTestimonialAutoPlay() {
    clearInterval(testimonialInterval);
}

// WhatsApp Integration
function initializeWhatsAppButtons() {
    const whatsappButtons = document.querySelectorAll('.btn-cta, .cta-header, .cta-mobile, .portfolio-btn');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            let message = 'Olá! Gostaria de agendar uma consultoria.';
            
            // Customize message based on button context
            if (this.textContent.includes('Orçamento')) {
                message = 'Olá! Gostaria de solicitar um orçamento para meu projeto de interiores.';
            } else if (this.textContent.includes('Consultoria')) {
                message = 'Olá! Gostaria de agendar uma consultoria inicial para discutir meu projeto de interiores.';
            } else if (this.classList.contains('portfolio-btn')) {
                message = 'Olá! Vi seus projetos no portfólio e gostaria de saber mais sobre seus serviços.';
            }
            
            const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    });

    // Portfolio specific WhatsApp buttons
    const portfolioCTABtn = document.querySelector('.portfolio-cta .btn');
    if (portfolioCTABtn) {
        portfolioCTABtn.addEventListener('click', function() {
            const message = 'Olá! Gostaria de ver mais projetos do seu portfólio.';
            const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile, .footer-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                scrollToSection(targetId.substring(1));
            }
        });
    });
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .process-step, .portfolio-item, .about-image, .about-text');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance Optimizations
window.addEventListener('scroll', debounce(function() {
    // Any scroll-based animations or effects can be added here
}, 16)); // 60fps

// Lazy Loading for Images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Form Handling (if contact forms are added)
function handleContactForm() {
    const contactForms = document.querySelectorAll('form');
    
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name') || '';
            const email = formData.get('email') || '';
            const message = formData.get('message') || '';
            
            // Create WhatsApp message
            const whatsappMessage = `Olá! Meu nome é ${name}. Email: ${email}. Mensagem: ${message}`;
            const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;
            
            window.open(whatsappUrl, '_blank');
        });
    });
}

// Accessibility Enhancements
function initializeAccessibility() {
    // Keyboard navigation for carousel
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            previousTestimonial();
        } else if (e.key === 'ArrowRight') {
            nextTestimonial();
        }
    });
    
    // Focus management for mobile menu
    mobileMenu.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.focus();
        }
    });
}

// Initialize accessibility features
initializeAccessibility();

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}