document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#tracker-form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(form);
            const userData = Object.fromEntries(formData.entries());

            // Send AJAX request to the server
            fetch('/recommendations', {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                // Display recommendations on the page
                const recommendationsContainer = document.getElementById('recommendations');
                recommendationsContainer.innerHTML = `<p>${data.recommendations}</p>`;
            })
            .catch(error => console.error('Error:', error));
        });
    }
});
