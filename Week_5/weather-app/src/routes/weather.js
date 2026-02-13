const express = require('express');
const weatherService = require('../services/weatherService');
const router = express.Router();

// GET /api/weather?city=cityname
router.get('/', async (req, res) => {
    try {
        const { city } = req.query;

        // Validate input
        if (!city) {
            return res.status(400).json({
                success: false,
                error: 'City parameter is required'
            });
        }

        // Get weather data
        const weatherData = await weatherService.getCurrentWeather(city);

        // Send successful response
        res.json({
            success: true,
            data: weatherData
        });

    } catch (error) {
        console.error('Weather API Error:', error.message);
        
        // Send error response
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router;