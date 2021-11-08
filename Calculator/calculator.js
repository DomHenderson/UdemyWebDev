import express from "express";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res) {
	res.sendFile(__dirname+"/index.html")
});

app.post("/", function(req, res) {
	const total = Number(req.body.num1) + Number(req.body.num2);
	res.send(`The result of the calculation is ${total}`);
});

app.get("/bmicalculator", function(req, res) {
	res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
	const height = req.body.height;
	const weight = req.body.weight;
	const bmi = weight/(height*height);

	res.send(`You BMI is ${bmi}`);
})

app.listen(3000, function() {
	console.log("Server started on port 3000");
});