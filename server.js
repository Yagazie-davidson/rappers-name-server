const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

let rappers = {
	nf: {
		age: 31,
		name: "Nathan John Feuerstein",
		birthCountry: "Gladwin, Michigan",
	},
	"j cole": {
		age: 38,
		name: "Jermaine Lamarr Cole",
		birthCountry: "Frankfurt, West Germany",
	},
	"kanye west": {
		age: 45,
		name: "Kanye Omari West",
		birthCountry: "Atlanta, Georgia, U.S",
	},
	dave: {
		age: 24,
		name: "David Orobosa Omoregie",
		birthCountry: "Brixton, London, England",
	},
	dylan: {
		age: 38,
		name: "Dylan",
		birthCountry: "Dylan",
	},
};

app.use(cors());
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
	const rapperName = req.params.name.toLowerCase();
	if (rappers[rapperName]) {
		res.json(rappers[rapperName]);
	} else {
		res.json(rappers["dylan"]);
	}
	// res.json(rappers);
});
app.get("/api", (req, res) => {
	res.json(rappers);
});

app.listen(process.env.PORT || PORT, () => {
	console.log(`The server is running on port ${PORT}. you better go catch it`);
});
