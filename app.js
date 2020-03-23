// Initialize weather object
const weather = new Weather('Annandale', 'VA');
weather
	.getWeather()
	.then(results => {
		console.log(results);
	})
	.catch(err => console.log(err));
