/**
 * SCROLL NAVIGATION ENHANCEMENTS
 * Professional navigation and scroll experience
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Create Back to Top Button
    createBackToTopButton();
    
    // Create Scroll Progress Bar
    createScrollProgressBar();
    
    // Create Section Navigation
    createSectionNavigation();
    
    // Initialize Smooth Navigation
    initializeSmoothNavigation();
    
    // Handle scroll events
    handleScrollEvents();
});

/**
 * Create and inject back to top button
 */
function createBackToTopButton() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    backToTopBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(backToTopBtn);
}

/**
 * Create scroll progress bar
 */
function createScrollProgressBar() {
    const progressContainer = document.createElement('div');
    progressContainer.className = 'scroll-progress';
    
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    
    progressContainer.appendChild(progressBar);
    document.body.appendChild(progressContainer);
}

/**
 * Create section navigation dots
 */
function createSectionNavigation() {
    const sections = document.querySelectorAll('section[id]');
    if (sections.length === 0) return;
    
    const sectionNav = document.createElement('div');
    sectionNav.className = 'section-nav';
    
    const navList = document.createElement('ul');
    
    sections.forEach(section => {
        const sectionId = section.getAttribute('id');
        const sectionTitle = getSectionTitle(section);
        
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        
        link.href = '#' + sectionId;
        link.setAttribute('data-tooltip', sectionTitle);
        link.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection(sectionId);
        });
        
        listItem.appendChild(link);
        navList.appendChild(listItem);
    });
    
    sectionNav.appendChild(navList);
    document.body.appendChild(sectionNav);
}

/**
 * Get section title for navigation
 */
function getSectionTitle(section) {
    const sectionId = section.getAttribute('id');
    const titleMap = {
        'hero': 'Home',
        'what-i-do': 'Services',
        'featured-projects': 'Projects',
        'experience': 'Experience',
        'cta': 'Contact'
    };
    
    return titleMap[sectionId] || sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
}

/**
 * Scroll to specific section
 */
function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

/**
 * Initialize smooth navigation for menu links
 */
function initializeSmoothNavigation() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active navigation
                updateActiveNavigation(this);
            }
        });
    });
}

/**
 * Handle all scroll-related events
 */
function handleScrollEvents() {
    let ticking = false;
    
    function updateScrollElements() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        // Update progress bar
        const progressBar = document.querySelector('.scroll-progress-bar');
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }
        
        // Show/hide back to top button
        const backToTopBtn = document.querySelector('.back-to-top');
        if (backToTopBtn) {
            if (scrollTop > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }
        
        // Show/hide section navigation
        const sectionNav = document.querySelector('.section-nav');
        if (sectionNav) {
            if (scrollTop > 500) {
                sectionNav.classList.add('show');
            } else {
                sectionNav.classList.remove('show');
            }
        }
        
        // Update active navigation based on scroll position
        updateActiveNavigationOnScroll();
        updateActiveSectionNav();
        
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollElements);
            ticking = true;
        }
    });
}

/**
 * Update active navigation item
 */
function updateActiveNavigation(activeLink) {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

/**
 * Update active navigation based on current scroll position
 */
function updateActiveNavigationOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
    
    let currentSection = '';
    const scrollTop = window.pageYOffset + 100; // Offset for better detection
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Update navigation
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

/**
 * Update active section navigation dots
 */
function updateActiveSectionNav() {
    const sections = document.querySelectorAll('section[id]');
    const sectionNavLinks = document.querySelectorAll('.section-nav a');
    
    let currentSection = '';
    const scrollTop = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Update section navigation dots
    sectionNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

/**
 * Add subtle animations to elements when they come into view
 */
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.service-card, .project-card, .hero-stats .stat-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeScrollAnimations, 500); // Small delay for better performance
});

/**
 * Keyboard navigation support
 */
document.addEventListener('keydown', function(e) {
    // Home key - scroll to top
    if (e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // End key - scroll to bottom
    if (e.key === 'End') {
        e.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
});