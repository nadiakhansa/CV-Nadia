document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const enterButton = document.getElementById('enter-btn');
    const bottomNav = document.querySelector('.bottom-nav');
    const navButtons = document.querySelectorAll('.nav-btn');

    // Function to show a page and update nav button state
    const showPage = (pageId) => {
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
        });
        // Show the target page
        const newPage = document.getElementById(pageId);
        if (newPage) {
            newPage.classList.add('active');
        }

        // Animate timeline items if the education page is shown
        if (pageId === 'education') {
            const timelineItems = document.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.2}s`;
                item.classList.add('visible');
            });
        } else {
            // Reset timeline animation when leaving the page
            const timelineItems = document.querySelectorAll('.timeline-item');
            timelineItems.forEach(item => {
                item.classList.remove('visible');
            });
        }

        // Update active state for nav buttons
        navButtons.forEach(btn => {
            if (btn.getAttribute('data-target') === pageId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    };

    // Event listener for the first button on the landing page
    if (enterButton) {
        enterButton.addEventListener('click', () => {
            const targetPageId = enterButton.getAttribute('data-target');
            showPage(targetPageId);
            // Make the bottom nav bar visible
            if (bottomNav) {
                bottomNav.classList.add('visible');
            }
        });
    }

    // Event listeners for the main navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetPageId = button.getAttribute('data-target');
            showPage(targetPageId);
        });
    });

    // Initially, show the landing page and hide the nav bar
    showPage('landing');
});