document.addEventListener('DOMContentLoaded', function() {
    // Check if user has already made a choice
    if (!localStorage.getItem('cookieConsent')) {
        // Create cookie banner
        const banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.innerHTML = `
            <div class="cookie-content">
                <p>We use cookies to enhance your experience on our website. Some cookies are necessary for the website to function, while others help us understand how you interact with our site.</p>
                <div class="cookie-buttons">
                    <button id="accept-all" class="cookie-button">Accept All</button>
                    <button id="accept-necessary" class="cookie-button">Necessary Only</button>
                    <button id="show-details" class="cookie-button">Show Details</button>
                </div>
                <div id="cookie-details" class="cookie-details" style="display: none;">
                    <h3>Cookie Settings</h3>
                    <div class="cookie-option">
                        <input type="checkbox" id="necessary" checked disabled>
                        <label for="necessary">Necessary Cookies</label>
                        <p>Required for the website to function properly. Cannot be disabled.</p>
                    </div>
                    <div class="cookie-option">
                        <input type="checkbox" id="analytics">
                        <label for="analytics">Analytics Cookies</label>
                        <p>Help us understand how visitors interact with our website.</p>
                    </div>
                    <div class="cookie-option">
                        <input type="checkbox" id="preferences">
                        <label for="preferences">Preference Cookies</label>
                        <p>Remember your settings and preferences.</p>
                    </div>
                    <button id="save-preferences" class="cookie-button">Save Preferences</button>
                </div>
            </div>
        `;
        document.body.appendChild(banner);

        // Add event listeners
        document.getElementById('accept-all').addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'all');
            document.getElementById('cookie-banner').style.display = 'none';
        });

        document.getElementById('accept-necessary').addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'necessary');
            document.getElementById('cookie-banner').style.display = 'none';
        });

        document.getElementById('show-details').addEventListener('click', function() {
            document.getElementById('cookie-details').style.display = 'block';
        });

        document.getElementById('save-preferences').addEventListener('click', function() {
            const analytics = document.getElementById('analytics').checked;
            const preferences = document.getElementById('preferences').checked;
            localStorage.setItem('cookieConsent', JSON.stringify({
                analytics: analytics,
                preferences: preferences
            }));
            document.getElementById('cookie-banner').style.display = 'none';
        });
    }
}); 