
/**
 * Animations initialization
 */
export function initAnimations() {
    // Animate elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe elements with animation classes
    document.querySelectorAll('.service-card, .section-title').forEach(el => {
        observer.observe(el);
    });
    
    console.log('Animations initialized');
}

// Function to toggle service details (kept for compatibility)
export function toggleServiceDetail(element) {
    element.classList.toggle('open');
}
