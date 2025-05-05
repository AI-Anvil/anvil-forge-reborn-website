
/**
 * Smooth scrolling functionality for navigation links
 */
export function initSmoothScroll() {
    const menuLinks = document.querySelectorAll('.menu-link');
    const mainNav = document.querySelector('.main-nav');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Close mobile menu if open
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    document.body.classList.remove('menu-open');
                    
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
                
                // Scroll to the section
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active link
                menuLinks.forEach(item => item.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    console.log('Smooth scroll initialized');
}
