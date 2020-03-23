class Weather {
	constructor(city, state) {
		this.apiKey = 'c707f1c6ddd7ee7eea15f474b65802f9';
		this.city = city;
		this.state = state;
	}

	// Fetch weather from API
	async getWeather() {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}.json`
		);

		const responseData = await response.json();
		return responseData.weather;
	}
	// Change weather location
	changeLocation(city, state) {
		this.city = city;
		this.state = state;
	}
}
