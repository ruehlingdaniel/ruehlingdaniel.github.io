// Funktion für das mobile Menü
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}

navSlide();

// Cookie Consent Logic
document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('cookie-accept');
    const declineButton = document.getElementById('cookie-decline');
    const formPlaceholder = document.getElementById('contact-form-placeholder');
    const acceptForFormButton = document.getElementById('accept-cookies-for-form');

    // WICHTIG: Ersetzen Sie dies mit Ihrer Formspree ID
    const formspreeId = 'xandkelg';

    const loadContactForm = () => {
        formPlaceholder.innerHTML = `
            <form action="https://formspree.io/f/${formspreeId}" method="POST" class="contact-form">
                <input type="text" name="name" placeholder="Ihr Name" required>
                <input type="email" name="email" placeholder="Ihre E-Mail-Adresse" required>
                <textarea name="message" rows="5" placeholder="Ihre Nachricht" required></textarea>
                <button type="submit" class="cta-button">Nachricht senden</button>
            </form>
            <p class="form-notice">Durch das Senden des Formulars stimmen Sie der Verarbeitung Ihrer Daten durch Formspree zu.</p>
        `;
    };

    const cookieConsent = localStorage.getItem('cookie_consent');

    if (cookieConsent === 'accepted') {
        loadContactForm();
    } else if (!cookieConsent) {
        cookieBanner.style.display = 'block';
    }

    acceptButton.addEventListener('click', () => {
        localStorage.setItem('cookie_consent', 'accepted');
        cookieBanner.style.display = 'none';
        loadContactForm();
    });
    
    acceptForFormButton.addEventListener('click', () => {
        localStorage.setItem('cookie_consent', 'accepted');
        cookieBanner.style.display = 'none';
        loadContactForm();
    });

    declineButton.addEventListener('click', () => {
        localStorage.setItem('cookie_consent', 'declined');
        cookieBanner.style.display = 'none';
    });
});
