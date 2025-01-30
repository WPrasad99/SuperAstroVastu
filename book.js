document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const consultForm = document.getElementById('consultForm');
    
    consultForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(consultForm);
        const formValues = Object.fromEntries(formData.entries());
        
        // Here you would typically send the data to a server
        console.log('Form submitted with values:', formValues);
        
        // Show success message (you can customize this)
        alert('Thank you for your consultation request. We will contact you soon!');
        
        // Optional: Reset form
        consultForm.reset();
    });

    // Consult Now button click handling
    const consultBtn = document.querySelector('.consult-btn');
    
    consultBtn.addEventListener('click', function() {
        // Scroll to form section
        const formSection = document.querySelector('.form-section');
        formSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Optional: Add input validation
    const mobileInput = consultForm.querySelector('input[type="tel"]');
    
    mobileInput.addEventListener('input', function() {
        // Remove non-numeric characters
        this.value = this.value.replace(/[^0-9]/g, '');
        
        // Limit to 10 digits
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
        }
    });
});