import express from 'express';
import https from 'https';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { weatherApiKey } from './secret/apiKey.js';

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
	res.sendFile(`${__dirname}/index.html`);
})

app.post("/", (req, res) => {
	const baseWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
	const cityName = req.body.cityName;
	console.log(cityName);
	const fullWeatherUrl = `${baseWeatherUrl}?q=${cityName}&appid=${weatherApiKey}`;

	https.get(fullWeatherUrl, (weatherResponse) => {
		console.log(weatherResponse.statusCode);

		weatherResponse.on('data', (weatherData) => {
			const parsedData = JSON.parse(weatherData);
			console.log(parsedData);
			res.write(`<h1>${cityName}</h1>`);
			res.write(`<p>${parsedData.weather[0].description}</p>`);
			res.write(`<p>Current temperate in ${cityName}: ${parsedData.main.temp-273.15} degrees Celsius</p>`);
			const iconUrl = `http://openweathermap.org/img/wn/${parsedData.weather[0].icon}@2x.png`;
			res.write(`<img src=${iconUrl}>`);
			res.send();
		});
	})
})



app.listen(port, () => {
	console.log(`Server started on ${port}`);
});