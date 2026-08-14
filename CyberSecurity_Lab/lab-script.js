// Lab Page Script - Interactive Gallery

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.thumbnail-card');
    
    // Add hover effect tracking
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            cards.forEach(c => c.style.opacity = '0.7');
            this.style.opacity = '1';
        });

        card.addEventListener('mouseleave', function() {
            cards.forEach(c => c.style.opacity = '1');
        });
    });
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
