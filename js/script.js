
// Import modules
import { initHeaderScroll } from './modules/headerScroll.js';
import { initMobileMenu } from './modules/mobileMenu.js';
import { initSmoothScroll } from './modules/smoothScroll.js';
import { initTabSwitcher } from './modules/tabSwitcher.js';
import { initScrollSpy } from './modules/scrollSpy.js';
import { initAnimations, toggleServiceDetail } from './modules/animations.js';

// Make toggleServiceDetail available globally (for inline onclick handlers)
window.toggleServiceDetail = toggleServiceDetail;

// Initialize all modules when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('AI Anvil website initialized');
    
    // Initialize all modules
    initHeaderScroll();
    initMobileMenu();
    initSmoothScroll();
    initTabSwitcher();
    initScrollSpy();
    initAnimations();
});
