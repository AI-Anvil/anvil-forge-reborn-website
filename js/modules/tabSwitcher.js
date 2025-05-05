
/**
 * Tab switching functionality for services section
 */
export function initTabSwitcher() {
    console.log('Initializing tab switcher...');
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    if (!tabButtons || tabButtons.length === 0) {
        console.warn('Tab buttons not found in the document');
        return;
    }
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            console.log('Tab clicked:', tabId);
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show the corresponding tab panel
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            const businessPanel = document.getElementById('business-panel');
            const educationPanel = document.getElementById('education-panel');
            
            if (!businessPanel) {
                console.warn('Business panel element not found');
            }
            
            if (!educationPanel) {
                console.warn('Education panel element not found');
            }
            
            if (tabId === 'business' && businessPanel) {
                businessPanel.classList.add('active');
            } else if (tabId === 'education' && educationPanel) {
                educationPanel.classList.add('active');
            } else {
                console.warn(`No matching panel found for tab: ${tabId}`);
            }
        });
    });
    
    console.log('Tab switcher initialized successfully');
}
