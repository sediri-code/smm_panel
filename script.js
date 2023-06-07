// API endpoint and API key
const apiUrl = 'https://easysmmpanel.com/api/v2';
const apiKey = '8a2e1bbee6246549051e5b0956a975a5';

async function getServices() {
    try {
        const response = await fetch(`${apiUrl}?key=${apiKey}&action=services`);
        const data = await response.json();

        // Process the data and update the HTML
        const servicesContainer = document.getElementById('services');
        servicesContainer.innerHTML = '<h2>Services:</h2>';

        data.forEach(service => {
            const serviceElement = document.createElement('div');
            serviceElement.classList.add('service');
            serviceElement.innerHTML = `
                <h3>${service.name}</h3>
                <p>Type: ${service.type}</p>
                <p>Category: ${service.category}</p>
                <p>Rate: ${service.rate}</p>
                <p>Min: ${service.min}</p>
                <p>Max: ${service.max}</p>
                <p>Refill: ${service.refill ? 'Yes' : 'No'}</p>
                <p>Cancel: ${service.cancel ? 'Yes' : 'No'}</p>
            `;
            servicesContainer.appendChild(serviceElement);
        });
    } catch (error) {
        console.error('Error retrieving services:', error);
    }
}

// Call the getServices function to retrieve and display the list of services
getServices();