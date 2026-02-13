# Weather Dashboard 🌤️

A simple and elegant weather application that provides current weather information for cities worldwide using the Weatherstack API.

## 📋 Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Current Weather Data**: Get real-time weather information for any city
- **Beautiful UI**: Clean, responsive design with gradient backgrounds
- **Detailed Information**: Temperature, humidity, wind speed, pressure, and more
- **Error Handling**: Graceful error messages for invalid inputs or API issues
- **Loading States**: User-friendly loading indicators
- **Mobile Responsive**: Works perfectly on all device sizes

## 🎯 Demo

![Weather Dashboard Screenshot](screenshot.png)

**Live Features:**
- Search for any city worldwide
- View current temperature with weather icons
- See detailed weather metrics
- Responsive design for mobile and desktop

## 🚀 Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Weatherstack API key (get free key at [weatherstack.com](https://weatherstack.com))

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/weather-dashboard.git
cd weather-dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
Create a `.env` file in the root directory:
```env
WEATHERSTACK_API_KEY=your_api_key_here
PORT=3000
```

4. **Start the application**
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

5. **Open your browser**
Navigate to `http://localhost:3000`

## 💡 Usage

### Basic Usage
1. Open the application in your web browser
2. Enter a city name in the search field
3. Click "Search" or press Enter
4. View the current weather information

### API Usage
The application also provides a REST API endpoint:
```bash
GET /api/weather?city=London
```

**Response:**
```json
{
  "success": true,
  "data": {
    "city": "London",
    "country": "United Kingdom",
    "temperature": 15,
    "weather_description": "Partly cloudy",
    "humidity": 65,
    "wind_speed": 12
  }
}
```

## 📚 API Reference

### Weather Endpoint

**GET** `/api/weather`

**Parameters:**
| Parameter | Type   | Required | Description        |
|-----------|--------|----------|--------------------|
| city      | string | Yes      | City name to search|

**Response Format:**
```json
{
  "success": boolean,
  "data": {
    "city": string,
    "country": string,
    "region": string,
    "localtime": string,
    "temperature": number,
    "feelslike": number,
    "weather_description": string,
    "weather_icon": string,
    "wind_speed": number,
    "wind_direction": string,
    "humidity": number,
    "pressure": number,
    "visibility": number,
    "uv_index": number,
    "cloudcover": number
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error message"
}
```


## 🛠️ Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - HTTPS module for API calls

- **Frontend:**
  - HTML5
  - CSS3 (with CSS Grid and Flexbox)
  - Vanilla JavaScript (ES6+)

- **API:**
  - Weatherstack API for weather data

- **Development Tools:**
  - Nodemon for development
  - Node.js built-in test runner
  - dotenv for environment management

## 📁 Project Structure
```
weather-app/
├── src/
│   ├── server.js              # Main server file
│   ├── routes/
│   │   └── weather.js         # Weather API routes
│   ├── services/
│   │   └── weatherService.js  # Weather API integration
│   └── public/
│       ├── index.html         # Frontend HTML
│       ├── style.css          # Styling
│       └── script.js          # Frontend JavaScript
├── tests/
│   └── weather.test.js        # Test suite
├── .env                       # Environment variables
├── .gitignore                 # Git ignore rules
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

## 🔧 Configuration

### Environment Variables
| Variable              | Description                    | Required |
|----------------------|--------------------------------|----------|
| WEATHERSTACK_API_KEY | Your Weatherstack API key      | Yes      |
| PORT                 | Server port (default: 3000)   | No       |




