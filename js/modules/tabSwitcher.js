
/**
 * Tab switching functionality for services section
 */
export function initTabSwitcher() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show the corresponding tab panel
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            if (tabId === 'business') {
                document.getElementById('business-panel').classList.add('active');
            } else if (tabId === 'education') {
                document.getElementById('education-panel').classList.add('active');
            }
        });
    });
    
    console.log('Tab switcher initialized');
}
