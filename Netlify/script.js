document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.email-signup');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.querySelector('#email').value;
        const submitButton = form.querySelector('button');
        const originalButtonText = submitButton.textContent;
        
        try {
            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Subscribing...';
            
            const response = await fetch('https://script.google.com/macros/s/AKfycbxN86rsiaRDULK8E-5fcIxRcDtKYUpgHXlV8eyKBrXAzJ4m_pq2xzA5kR9AIrqS1Cn_IA/exec', {
                method: 'POST',
                mode: 'no-cors', // Required for Google Apps Script
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `email=${encodeURIComponent(email)}`
            });

            // Clear the form
            form.reset();
            
            // Show success message
            submitButton.textContent = 'Subscribed!';
            submitButton.style.backgroundColor = '#22c55e'; // Green color for success
            
            // Reset button after 2 seconds
            setTimeout(() => {
                submitButton.textContent = originalButtonText;
                submitButton.style.backgroundColor = '';
                submitButton.disabled = false;
            }, 2000);

        } catch (error) {
            console.error('Error:', error);
            
            // Show error state
            submitButton.textContent = 'Error - Try Again';
            submitButton.style.backgroundColor = '#ef4444'; // Red color for error
            
            // Reset button after 2 seconds
            setTimeout(() => {
                submitButton.textContent = originalButtonText;
                submitButton.style.backgroundColor = '';
                submitButton.disabled = false;
            }, 2000);
        }
    });
});
