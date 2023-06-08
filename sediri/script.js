// API endpoint and API key
const apiUrl = 'https://app.ad4tube.com/api/v2';
const apiKey = 'pYniZBZci6DcIkye31Eyjy5Sz2wgBvJ7';

async function fetchServices() {
    try {
      const response = await fetch(`${apiUrl}?key=${apiKey}&action=services`);
      const data = await response.json();
  
      const servicesContainer = document.getElementById('services');
  
      data.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.classList.add('service');
  
        const serviceName = document.createElement('h3');
        serviceName.textContent = service.name;
  
        const serviceCategory = document.createElement('p');
        serviceCategory.textContent = `Category: ${service.category}`;
  
        const serviceRate = document.createElement('p');
        serviceRate.textContent = `Rate: ${service.rate}`;
  
        const serviceMin = document.createElement('p');
        serviceMin.textContent = `Min: ${service.min}`;
  
        const serviceMax = document.createElement('p');
        serviceMax.textContent = `Max: ${service.max}`;
  
        serviceElement.appendChild(serviceName);
        serviceElement.appendChild(serviceCategory);
        serviceElement.appendChild(serviceRate);
        serviceElement.appendChild(serviceMin);
        serviceElement.appendChild(serviceMax);
  
        servicesContainer.appendChild(serviceElement);
      });
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  }
  
  fetchServices();
  
  
