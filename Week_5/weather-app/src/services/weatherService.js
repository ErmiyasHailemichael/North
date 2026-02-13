const https = require('https');

class WeatherService {
    constructor() {
        this.baseUrl = 'api.weatherstack.com';
        this.apiKey = process.env.WEATHERSTACK_API_KEY;
    }

    // Main method to get current weather
    async getCurrentWeather(query) {
        if (!this.apiKey) {
            throw new Error('API key is missing. Please check your .env file');
        }

        if (!query || query.trim() === '') {
            throw new Error('City name is required');
        }

        const url = `/current?access_key=${this.apiKey}&query=${encodeURIComponent(query)}`;
        
        return new Promise((resolve, reject) => {
            const options = {
                hostname: this.baseUrl,
                port: 443,
                path: url,
                method: 'GET'
            };

            const req = https.request(options, (res) => {
                let data = '';

                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    try {
                        const weatherData = JSON.parse(data);
                        
                        // Check if API returned an error
                        if (weatherData.error) {
                            reject(new Error(weatherData.error.info || 'Failed to fetch weather data'));
                            return;
                        }

                        // Format the response to include only necessary data
                        const formattedData = this.formatWeatherData(weatherData);
                        resolve(formattedData);
                    } catch (error) {
                        reject(new Error('Failed to parse weather data'));
                    }
                });
            });

            req.on('error', (error) => {
                reject(new Error(`Network error: ${error.message}`));
            });

            req.setTimeout(5000, () => {
                req.destroy();
                reject(new Error('Request timeout'));
            });

            req.end();
        });
    }

    // Helper method to format weather data
    formatWeatherData(rawData) {
        const { request, location, current } = rawData;
        
        return {
            city: location.name,
            country: location.country,
            region: location.region,
            localtime: location.localtime,
            temperature: current.temperature,
            feelslike: current.feelslike,
            weather_description: current.weather_descriptions[0],
            weather_icon: current.weather_icons[0],
            wind_speed: current.wind_speed,
            wind_direction: current.wind_dir,
            humidity: current.humidity,
            pressure: current.pressure,
            visibility: current.visibility,
            uv_index: current.uv_index,
            cloudcover: current.cloudcover
        };
    }
}

module.exports = new WeatherService();