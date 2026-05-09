// Christian Life Church - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dark mode
    initDarkMode();
    
    // Initialize language selector
    initLanguageSelector();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Load daily verse
    loadDailyVerse();
});

function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    
    // Load saved preference
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }
    
    // Toggle event
    darkModeToggle.addEventListener('change', function() {
        body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', this.checked);
    });
}

function initLanguageSelector() {
    // Language switching logic will be implemented here
    console.log('Language selector initialized');
}

function initMobileMenu() {
    // Mobile menu toggle logic will be implemented here
    console.log('Mobile menu initialized');
}

function loadDailyVerse() {
    // Daily verse loading logic will be implemented here
    console.log('Loading daily verse...');
}