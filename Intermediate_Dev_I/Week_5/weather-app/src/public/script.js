// Weather App JavaScript
class WeatherApp {
    constructor() {
        this.initializeElements();
        this.attachEventListeners();
        this.isLoading = false;
    }

    // Initialize DOM elements
    initializeElements() {
        // Form elements
        this.form = document.getElementById('weather-form');
        this.cityInput = document.getElementById('city-input');
        this.searchBtn = document.getElementById('search-btn');

        // Display elements
        this.loadingDiv = document.getElementById('loading');
        this.errorDiv = document.getElementById('error-message');
        this.errorText = document.getElementById('error-text');
        this.retryBtn = document.getElementById('retry-btn');
        this.weatherDisplay = document.getElementById('weather-display');

        // Weather info elements
        this.cityName = document.getElementById('city-name');
        this.locationDetails = document.getElementById('location-details');
        this.localTime = document.getElementById('local-time');
        this.weatherIcon = document.getElementById('weather-icon');
        this.temperature = document.getElementById('temperature');
        this.weatherDescription = document.getElementById('weather-description');
        this.feelsLike = document.getElementById('feels-like');
        this.humidity = document.getElementById('humidity');
        this.wind = document.getElementById('wind');
        this.pressure = document.getElementById('pressure');
        this.visibility = document.getElementById('visibility');
        this.cloudcover = document.getElementById('cloudcover');
    }

    // Attach event listeners
    attachEventListeners() {
        this.form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        this.retryBtn.addEventListener('click', () => this.hideError());
        this.cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.handleFormSubmit(e);
            }
        });
    }

    // Handle form submission
    async handleFormSubmit(e) {
        e.preventDefault();
        
        const city = this.cityInput.value.trim();
        
        if (!city) {
            this.showError('Please enter a city name');
            return;
        }

        if (this.isLoading) {
            return; // Prevent multiple simultaneous requests
        }

        await this.searchWeather(city);
    }

    // Main weather search function
    async searchWeather(city) {
        try {
            this.showLoading();
            
            const response = await this.fetchWeatherData(city);
            
            if (response.success) {
                this.displayWeatherData(response.data);
                this.hideLoading();
            } else {
                throw new Error(response.error || 'Failed to fetch weather data');
            }
            
        } catch (error) {
            this.hideLoading();
            this.showError(error.message);
            console.error('Weather search error:', error);
        }
    }

    // Fetch weather data from API
    async fetchWeatherData(city) {
        const encodedCity = encodeURIComponent(city);
        const url = `/api/weather?city=${encodedCity}`;
        
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    }

    // Display weather data in the UI
    displayWeatherData(data) {
        // Location information
        this.cityName.textContent = data.city;
        this.locationDetails.textContent = `${data.region}, ${data.country}`;
        this.localTime.textContent = `Local time: ${this.formatDateTime(data.localtime)}`;

        // Main weather info
        this.weatherIcon.src = data.weather_icon;
        this.weatherIcon.alt = data.weather_description;
        this.temperature.textContent = data.temperature;
        this.weatherDescription.textContent = data.weather_description;

        // Weather details
        this.feelsLike.textContent = `${data.feelslike}°C`;
        this.humidity.textContent = `${data.humidity}%`;
        this.wind.textContent = `${data.wind_speed} km/h ${data.wind_direction}`;
        this.pressure.textContent = `${data.pressure} mb`;
        this.visibility.textContent = `${data.visibility} km`;
        this.cloudcover.textContent = `${data.cloudcover}%`;

        // Show weather display
        this.showWeatherDisplay();
    }

    // Format date and time
    formatDateTime(dateTimeString) {
        try {
            const date = new Date(dateTimeString);
            return date.toLocaleString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            });
        } catch (error) {
            return dateTimeString; // Return original string if formatting fails
        }
    }

    // Show loading state
    showLoading() {
        this.isLoading = true;
        this.searchBtn.disabled = true;
        this.searchBtn.textContent = 'Searching...';
        
        this.hideError();
        this.hideWeatherDisplay();
        this.loadingDiv.classList.remove('hidden');
    }

    // Hide loading state
    hideLoading() {
        this.isLoading = false;
        this.searchBtn.disabled = false;
        this.searchBtn.textContent = 'Search';
        
        this.loadingDiv.classList.add('hidden');
    }

    // Show error message
    showError(message) {
        this.errorText.textContent = message;
        this.errorDiv.classList.remove('hidden');
        this.hideWeatherDisplay();
    }

    // Hide error message
    hideError() {
        this.errorDiv.classList.add('hidden');
    }

    // Show weather display
    showWeatherDisplay() {
        this.weatherDisplay.classList.remove('hidden');
        // Scroll to weather display on mobile
        if (window.innerWidth <= 600) {
            this.weatherDisplay.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    }

    // Hide weather display
    hideWeatherDisplay() {
        this.weatherDisplay.classList.add('hidden');
    }
}

// Initialize the weather app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WeatherApp();
    console.log('Weather App initialized successfully!');
});

// Add some helpful console information for debugging
console.log('Weather App script loaded');