document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Toggle menu
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        // Optional: Change icon from menu to x
        const icon = mobileMenuBtn.querySelector('i');
        // Note: In a real React/Vue app this is state-driven, here simple class toggle logic is fine
    });

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md');
            navbar.classList.add('bg-white/95');
        } else {
            navbar.classList.remove('shadow-md');
        }
    });

    // Contact Form Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            
            // Simulate loading state
            btn.disabled = true;
            btn.innerText = 'Отправка...';
            btn.classList.add('opacity-75');

            // Simulate API call
            setTimeout(() => {
                alert('Спасибо! Ваша заявка принята. Мы перезвоним вам в ближайшее время.');
                contactForm.reset();
                
                // Restore button
                btn.disabled = false;
                btn.innerText = originalText;
                btn.classList.remove('opacity-75');
            }, 1500);
        });
    }

    // Smooth Scroll for Anchors (Polyfill for older browsers/Safari if needed, 
    // though CSS scroll-behavior: smooth covers most modern cases)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80; // height of fixed header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});