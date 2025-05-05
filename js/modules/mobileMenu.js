
/**
 * Mobile menu toggle functionality
 * Handles opening/closing the mobile menu
 */
export function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        toggleMobileMenu(mainNav, menuToggle);
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        if (mainNav.classList.contains('active') && 
            !mainNav.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            toggleMobileMenu(mainNav, menuToggle, false);
        }
    });
    
    console.log('Mobile menu initialized');
}

/**
 * Toggle the mobile menu state
 * @param {Element} mainNav - The main navigation element
 * @param {Element} menuToggle - The menu toggle button
 * @param {boolean|undefined} forceState - Optional force state (true=open, false=close)
 */
function toggleMobileMenu(mainNav, menuToggle, forceState) {
    const shouldBeActive = forceState !== undefined ? forceState : !mainNav.classList.contains('active');
    
    if (shouldBeActive) {
        mainNav.classList.add('active');
        document.body.classList.add('menu-open');
    } else {
        mainNav.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
    
    // Change icon for toggle
    const icon = menuToggle.querySelector('i');
    if (shouldBeActive) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}
