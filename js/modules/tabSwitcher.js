
/**
 * Tab switching functionality for services section
 */
export function initTabSwitcher() {
    try {
        console.log('Initializing tab switcher...');
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabPanels = document.querySelectorAll('.tab-panel');
        
        if (!tabButtons || tabButtons.length === 0) {
            console.warn('Tab buttons not found in the document');
            return;
        }
        
        // Use a fallback approach to ensure tab panels are accessible
        let businessPanel = document.getElementById('business-panel');
        let educationPanel = document.getElementById('education-panel');
        
        // If we can't find the panels by ID, try to find them by class and data attributes
        if (!businessPanel || !educationPanel) {
            console.warn('One or more panels not found by ID, trying alternative selectors');
            const allPanels = document.querySelectorAll('.tab-panel');
            
            allPanels.forEach(panel => {
                if (panel.closest('#business-panel') || panel.classList.contains('business-panel')) {
                    businessPanel = panel;
                }
                if (panel.closest('#education-panel') || panel.classList.contains('education-panel')) {
                    educationPanel = panel;
                }
            });
        }
        
        // Log panel status for debugging
        console.log('Business panel found:', !!businessPanel);
        console.log('Education panel found:', !!educationPanel);
        
        tabButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                // Prevent default in case it's causing issues
                event.preventDefault();
                
                const tabId = button.getAttribute('data-tab');
                console.log('Tab clicked:', tabId, 'Button element:', button);
                
                // Update active tab button
                tabButtons.forEach(btn => {
                    console.log('Removing active class from:', btn);
                    btn.classList.remove('active');
                });
                
                console.log('Adding active class to clicked button');
                button.classList.add('active');
                
                // Show the corresponding tab panel
                tabPanels.forEach(panel => {
                    console.log('Removing active class from panel:', panel);
                    panel.classList.remove('active');
                });
                
                // Direct selector fallback if getElementById fails
                if (tabId === 'business') {
                    if (businessPanel) {
                        console.log('Adding active class to business panel');
                        businessPanel.classList.add('active');
                    } else {
                        console.error('Business panel not found for activation');
                    }
                } else if (tabId === 'education') {
                    if (educationPanel) {
                        console.log('Adding active class to education panel');
                        educationPanel.classList.add('active');
                    } else {
                        console.error('Education panel not found for activation');
                        // Last resort: try directly querying for the education panel again
                        const lastResortPanel = document.querySelector('.tab-panel#education-panel');
                        if (lastResortPanel) {
                            console.log('Found education panel with direct query selector');
                            lastResortPanel.classList.add('active');
                        }
                    }
                } else {
                    console.warn(`No matching panel found for tab: ${tabId}`);
                }
            });
        });
        
        // Manual tab initialization - ensure business tab is active by default if no other tab is active
        let anyTabActive = false;
        tabPanels.forEach(panel => {
            if (panel.classList.contains('active')) {
                anyTabActive = true;
            }
        });
        
        if (!anyTabActive && businessPanel) {
            console.log('No tab active, setting business panel as active by default');
            businessPanel.classList.add('active');
            tabButtons[0]?.classList.add('active');
        }
        
        console.log('Tab switcher initialized successfully');
    } catch (error) {
        console.error('Error initializing tab switcher:', error);
    }
}
