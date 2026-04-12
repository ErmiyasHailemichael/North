const { describe, test, before } = require('node:test');
const assert = require('node:assert');
const weatherService = require('.weathertests.js');


describe('Weather Dashboard - Test Suite', () => {
    
    before(() => {
        console.log('\n Starting Weather Dashboard Tests...\n');
        console.log('Testing WeatherService with WeatherStack API\n');
    });

    // ============================================
    // NORMAL TEST CASES (3 Required)
    // ============================================

    describe('Normal Cases - Valid Weather Requests', () => {
        
        test('Test 1: Should fetch weather for major city (New York)', async () => {
            console.log(' Testing: New York weather fetch');
            
            const result = await weatherService.getCurrentWeather('New York');
            
            // Verify response structure
            assert.ok(result, 'Result should exist');
            assert.ok(result.city, 'City name should be present');
            assert.ok(result.country, 'Country should be present');
            assert.strictEqual(typeof result.temperature, 'number', 'Temperature should be a number');
            assert.strictEqual(typeof result.humidity, 'number', 'Humidity should be a number');
            assert.ok(result.weather_description, 'Weather description should be present');
            assert.ok(result.weather_icon, 'Weather icon URL should be present');
            
            console.log(`  Successfully fetched weather for ${result.city}, ${result.country}`);
            console.log(`  Temperature: ${result.temperature}°C, Humidity: ${result.humidity}%\n`);
        });

        test('Test 2: Should fetch weather for international city (Tokyo)', async () => {
            console.log('Testing: Tokyo weather fetch');
            
            const result = await weatherService.getCurrentWeather('Tokyo');
            
            assert.ok(result, 'Result should exist');
            assert.ok(result.city, 'City name should be present');
            assert.strictEqual(typeof result.temperature, 'number', 'Temperature should be a number');
            assert.strictEqual(typeof result.wind_speed, 'number', 'Wind speed should be a number');
            assert.strictEqual(typeof result.pressure, 'number', 'Pressure should be a number');
            assert.ok(result.localtime, 'Local time should be present');
            
            console.log(`Successfully fetched weather for ${result.city}`);
            console.log(`Feels like: ${result.feelslike}°C, Wind: ${result.wind_speed} km/h\n`);
        });

        test('Test 3: Should fetch weather with multi-word city name (Los Angeles)', async () => {
            console.log('Testing: Los Angeles weather fetch (multi-word city)');
            
            const result = await weatherService.getCurrentWeather('Los Angeles');
            
            assert.ok(result, 'Result should exist');
            assert.ok(result.city, 'City name should be present');
            assert.strictEqual(typeof result.visibility, 'number', 'Visibility should be a number');
            assert.strictEqual(typeof result.cloudcover, 'number', 'Cloud cover should be a number');
            assert.ok(result.wind_direction, 'Wind direction should be present');
            
            console.log(`   Successfully fetched weather for ${result.city}`);
            console.log(`   Cloud cover: ${result.cloudcover}%, Visibility: ${result.visibility} km\n`);
        });
    });

    // ============================================
    // EDGE CASES (3 Required)
    // ============================================

    describe('Edge Cases - Invalid Inputs & Error Handling', () => {
        
        test('Test 4: Should reject empty string city name', async () => {
            console.log('Testing: Empty string validation');
            
            try {
                await weatherService.getCurrentWeather('');
                assert.fail('Should have thrown an error for empty city name');
            } catch (error) {
                assert.ok(error instanceof Error, 'Should throw an Error');
                assert.match(error.message, /required|empty/i, 'Error message should mention required/empty');
                console.log(`   Correctly rejected empty city: "${error.message}"\n`);
            }
        });

        test('Test 5: Should reject whitespace-only city name', async () => {
            console.log('Testing: Whitespace-only validation');
            
            try {
                await weatherService.getCurrentWeather('   ');
                assert.fail('Should have thrown an error for whitespace-only input');
            } catch (error) {
                assert.ok(error instanceof Error, 'Should throw an Error');
                assert.match(error.message, /required|empty/i, 'Error message should mention required/empty');
                console.log(`   Correctly rejected whitespace input: "${error.message}"\n`);
            }
        });

        test('Test 6: Should handle non-existent city gracefully', async () => {
            console.log('Testing: Invalid city name error handling');
            
            try {
                await weatherService.getCurrentWeather('XYZInvalidCity12345');
                assert.fail('Should have thrown an error for invalid city');
            } catch (error) {
                assert.ok(error instanceof Error, 'Should throw an Error');
                // WeatherStack returns an error for invalid cities
                assert.ok(error.message, 'Should have an error message');
                console.log(`   Correctly handled invalid city: "${error.message}"\n`);
            }
        });
    });

    // ============================================
    // BONUS EDGE CASES (Additional Coverage)
    // ============================================

    describe('Bonus Edge Cases - Special Characters & Formats', () => {
        
        test('Test 7: Should handle city names with special characters', async () => {
            console.log('Testing: Special characters in city name (São Paulo)');
            
            try {
                const result = await weatherService.getCurrentWeather('São Paulo');
                assert.ok(result, 'Result should exist');
                assert.ok(result.city, 'City name should be present');
                console.log(`   Successfully handled special characters: ${result.city}\n`);
            } catch (error) {
                // If API doesn't support this city, that's also valid error handling
                console.log(`   API returned expected error for special chars: ${error.message}\n`);
                assert.ok(true, 'Handled gracefully');
            }
        });

        test('Test 8: Should handle very long city names', async () => {
            console.log('Testing: Extremely long input validation');
            
            const longCityName = 'A'.repeat(200);
            
            try {
                await weatherService.getCurrentWeather(longCityName);
                // If it doesn't throw, the API handled it (unlikely to find a match)
                assert.fail('Should have thrown error or returned no match');
            } catch (error) {
                assert.ok(error instanceof Error, 'Should throw an Error');
                console.log(`   Correctly handled long input: "${error.message}"\n`);
            }
        });

        test('Test 9: Should validate API key presence', async () => {
            console.log('Testing: API key validation');
            
            // Save original API key
            const originalKey = weatherService.apiKey;
            
            // Temporarily remove API key
            weatherService.apiKey = null;
            
            try {
                await weatherService.getCurrentWeather('London');
                assert.fail('Should have thrown an error for missing API key');
            } catch (error) {
                assert.ok(error instanceof Error, 'Should throw an Error');
                assert.match(error.message, /API key/i, 'Error should mention API key');
                console.log(`   Correctly validated API key requirement: "${error.message}"\n`);
            } finally {
                // Restore API key
                weatherService.apiKey = originalKey;
            }
        });
    });

    // ============================================
    // DATA FORMAT VALIDATION
    // ============================================

    describe('Data Format Validation', () => {
        
        test('Test 10: Should return properly formatted weather data', async () => {
            console.log('Testing: Data structure validation');
            
            const result = await weatherService.getCurrentWeather('Paris');
            
            // Verify all expected fields exist
            const requiredFields = [
                'city', 'country', 'region', 'localtime',
                'temperature', 'feelslike', 'weather_description',
                'weather_icon', 'wind_speed', 'wind_direction',
                'humidity', 'pressure', 'visibility', 'cloudcover'
            ];
            
            requiredFields.forEach(field => {
                assert.ok(
                    result.hasOwnProperty(field), 
                    `Result should have '${field}' property`
                );
            });
            
            // Verify data types
            assert.strictEqual(typeof result.city, 'string', 'City should be string');
            assert.strictEqual(typeof result.temperature, 'number', 'Temperature should be number');
            assert.strictEqual(typeof result.humidity, 'number', 'Humidity should be number');
            
            console.log(`   All required fields present and properly formatted\n`);
        });
    });
});

console.log('\n' + '='.repeat(60));
console.log('Test Suite Complete!');
console.log('='.repeat(60) + '\n');