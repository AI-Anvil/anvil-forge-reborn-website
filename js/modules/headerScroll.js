
/**
 * Header scroll effect functionality
 * Adds 'scrolled' class to header when page is scrolled down
 */
export function initHeaderScroll() {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    console.log('Header scroll effect initialized');
}
