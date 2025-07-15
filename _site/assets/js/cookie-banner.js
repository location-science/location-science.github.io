document.addEventListener('DOMContentLoaded', function() {
    // Check if user has already made a choice
    if (localStorage.getItem('cookieConsent')) {
        document.getElementById('cookie-banner').style.display = 'none';
        return;
    }

    // Get all the necessary elements
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptAllBtn = document.getElementById('accept-all');
    const acceptNecessaryBtn = document.getElementById('accept-necessary');
    const showDetailsBtn = document.getElementById('show-details');
    const savePreferencesBtn = document.getElementById('save-preferences');
    const cookieDetails = document.querySelector('.cookie-details');
    const analyticsCheckbox = document.getElementById('analytics');
    const preferencesCheckbox = document.getElementById('preferences');

    // Show details button click handler
    showDetailsBtn.addEventListener('click', function() {
        cookieDetails.style.display = cookieDetails.style.display === 'none' ? 'block' : 'none';
    });

    // Accept all button click handler
    acceptAllBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'all');
        localStorage.setItem('analyticsConsent', 'true');
        localStorage.setItem('preferencesConsent', 'true');
        cookieBanner.style.display = 'none';
        // Here you can initialize all tracking scripts
    });

    // Accept necessary only button click handler
    acceptNecessaryBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'necessary');
        localStorage.setItem('analyticsConsent', 'false');
        localStorage.setItem('preferencesConsent', 'false');
        cookieBanner.style.display = 'none';
        // Here you can initialize only necessary scripts
    });

    // Save preferences button click handler
    savePreferencesBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'custom');
        localStorage.setItem('analyticsConsent', analyticsCheckbox.checked.toString());
        localStorage.setItem('preferencesConsent', preferencesCheckbox.checked.toString());
        cookieBanner.style.display = 'none';
        
        // Initialize scripts based on preferences
        if (analyticsCheckbox.checked) {
            // Initialize analytics
        }
        if (preferencesCheckbox.checked) {
            // Initialize preferences
        }
    });
}); 