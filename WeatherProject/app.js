import express from 'express';
import https from 'https';
import { weatherApiKey } from './secret/apiKey.js';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("This is the root of the website");

	const baseWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
	const cityName = 'London';
	const fullWeatherUrl = `${baseWeatherUrl}?q=${cityName}&appid=${weatherApiKey}`;

	https.get(fullWeatherUrl, (weatherResponse) => {
		console.log(weatherResponse.statusCode);

		weatherResponse.on('data', (weatherData) => {
			const parsedData = JSON.parse(weatherData);
			console.log(parsedData);
		})
	})
})

app.listen(port, () => {
	console.log(`Server started on ${port}`);
});