import express from "express";

const app = express();

app.get("/", function(request, response) {
	response.send("Hello");
});

app.get("/test", function(request, response) {
	response.send("Test received");
})

app.listen(3000, function() {
	console.log("Server started on port 3000");
});