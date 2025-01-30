// Select all FAQ questions
document.querySelectorAll('.faq-question').forEach((item) => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;

        // Close other FAQ items
        document.querySelectorAll('.faq-item').forEach((child) => {
            if (child !== parent) {
                child.classList.remove('active');
            }
        });

        // Toggle current FAQ item
        parent.classList.toggle('active');
    });
});
