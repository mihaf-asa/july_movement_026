document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('agency-section');
    const serviceCards = document.querySelectorAll('.service-card');

    // Handle background swap interaction
    serviceCards.forEach(card => {
        const index = card.getAttribute('data-index');

        // Toggle Specific Hover State
        card.addEventListener('mouseenter', () => {
            section.classList.add(`hover-${index}`);
        });

        card.addEventListener('mouseleave', () => {
            section.classList.remove(`hover-${index}`);
        });

        // Mouse tracking for spotlight effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });
    });

    // Optional: Log for visual confirmation
    console.log('Cinematic Section logic initialized.');
});
