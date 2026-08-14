// Q&A Page Script - Interactive Gallery with Difficulty Filter

document.addEventListener('DOMContentLoaded', function() {
    // Initialize difficulty buttons
    const difficultyButtons = document.querySelectorAll('.difficulty-btn');
    const qaCards = document.querySelectorAll('.qa-card');

    // Add click event listeners to difficulty buttons
    difficultyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const difficulty = this.getAttribute('data-difficulty');
            filterQuestions(difficulty, difficultyButtons);
        });
    });

    // Add hover effect tracking
    const cards = document.querySelectorAll('.qa-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (this.style.display !== 'none') {
                cards.forEach(c => {
                    if (c.style.display !== 'none') {
                        c.style.opacity = '0.7';
                    }
                });
                this.style.opacity = '1';
            }
        });

        card.addEventListener('mouseleave', function() {
            cards.forEach(c => {
                if (c.style.display !== 'none') {
                    c.style.opacity = '1';
                }
            });
        });
    });
});

function filterQuestions(difficulty, buttons) {
    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Get sections
    const easySection = document.getElementById('easy-section');
    const hardSection = document.getElementById('hard-section');

    // Filter sections based on difficulty
    if (difficulty === 'all') {
        easySection.style.display = 'block';
        hardSection.style.display = 'block';
    } else if (difficulty === 'easy') {
        easySection.style.display = 'block';
        hardSection.style.display = 'none';
        // Scroll to easy section
        easySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (difficulty === 'hard') {
        easySection.style.display = 'none';
        hardSection.style.display = 'block';
        // Scroll to hard section
        hardSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

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
