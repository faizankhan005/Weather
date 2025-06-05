// const cityInput = document.querySelector('.city-input')
// const searchBtn = document.querySelector('.search-btn')
// const weatherInfoSection = document.querySelector('.weather-info')
// const notFoundSection = document.querySelector('.not-found')
// const searchCitySection = document.querySelector('.search-city')
// const countryTxt = document.querySelector('.country-text')
// const tempTxt = document.querySelector('.temp-txt')
// const cnditionTxt = document.querySelector('.condition-txt')
// const humidityValueTxt = document.querySelector('.humidity-value-txt')
// const windValueTxt = document.querySelector('.wind-value-txt')
// const weaterSummaryImg = document.querySelector('.weather-summary-img')
// const currentDateTxt = document.querySelector('.current-date-txt')
// const forecasteItemContainer = document.querySelector('.forecastt-item-container')
// const apikey = `477cfe77d118120d13e3f5bf85d9c96a`
// searchBtn.addEventListener('click', () => {
// 	if (cityInput.value.trim() !== '') {
// 		updateWeatherInfo(cityInput.value)
// 		cityInput.value = ''
// 		cityInput.blur()
// 	}
// })
// cityInput.addEventListener('keydown', (event) => {
// 	if (event.key == 'Enter' &&
// 		cityInput.value.trim() != ''
// 	) {
// 		updateWeatherInfo(cityInput.value)
// 		cityInput.value = ''
// 		cityInput.blur()
// 	}
// })
// async function getFetchData(endPoint, city) {
// 	const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apikey}&units=metric`
// 	const response = await fetch(apiUrl)
// 	return response.json()
// }
// function getweatherIcon(id) {
// 	if (id <= 232) return `thunderstrom.svg`
// 	if (id <= 321) return `drizzing.svg`
// 	if (id <= 531) return `rain.svg`
// 	if (id <= 622) return `snow.svg`
// 	if (id <= 781) return `atmoshphare.svg`
// 	if (id == 800) return `clear.svg`
// 	else return `clouds.svg`
// }
// function getCurrentDate() {
// 	const currentDate = new Date()
// 	const options = {
// 		weekday: `short`,
// 		day: `2 digit`,
// 		month: `short`
// 	}
// 	return getCurrentDate.toLocaleDateString(`en-GB`, options)
// }
// async function updateWeatherInfo(city) {
// 	const weatherData = await getFetchData('weather', city)
// 	if (weatherData.cod !== 200) {
// 		showDisplaySection(notFoundSection)
// 		return
// 	}
// 	// console.log(weatherData)
// 	const {
// 		name: country,
// 		main: { temp, humidity },
// 		weather: [{ id, main }],
// 		wind: { speed }
// 	} = weatherData
// 	countryTxt.textContent = country
// 	tempTxt.textContent = `${Math.round(temp)} + °C`
// 	cnditionTxt.textContent = main
// 	humidityValueTxt.textContent = humidity + '%'
// 	windValueTxt.textContent = speed + 'm/s'
// 	currentDateTxt.textContent = getCurrentDate()
// 	// console.log(getCurrentDate())
// 	weaterSummaryImg.src = `imgage/${getweatherIcon(id)}`
// 	updateWeatherInfo(city)
// 	showDisplaySection(weatherInfoSection)
// }
// async function updateForecasteInfo(city) {
// 	const forecastData = await getFetchData(`forecast`, city)
// 	const timeTaken = `12:00:00`
// 	const todayDate = new Date().toISOString().split(`T`)[0]
// 	forecasteItemContainer.innerHTML = ''
// 	forecastData.list.forEach(forecastWeather => {
// 		if (forecastWeather.dt_txt.includes(timeTaken) &&
// 			!forecastWeather.dt_txt.includes(todayDate)) {
// 			updateForecasteItems(forecastWeather)
// 		}
// 	})
// 	// console.log(todayDate)
// }
// function updateForecasteItems(weatherData) {
// 	console.log(weatherData)
// 	const {
// 		dt_txt: date,
// 		weather: [{ id }],
// 		main: { temp }
// 	} = weatherData
// 	const dateTaken = new Date(date)
// 	const dateOption = {
// 		day: `2-digit`,
// 		month: 'short'
// 	}
// 	const dateResult = dateTaken.toLocaleDateString('en-US', dateOption)
// 	const forecasteItem = `
// 	    <div class="forcast-item">
//             <h5 class="forcast-item-date" regular-txt>${dateTaken}</h5>
//             <img src="image/${getweatherIcon(id)}" class="forcast-item-img"></img>
//             <h5 class="forcast-item-temp">${Math.round(temp)} °C</h5>
//     	</div>
// 	`
// 	forecasteItemContainer.insertAdjacentHTML('beforeend', forecasteItem)
// }
// function showDisplaySection(section) {
// 	[weatherInfoSection, searchCitySection, notFoundSection]
// 		.forEach(section => section.style.display = 'none')
// 	section.style.display = 'flex'
// }



const cityInput = document.querySelector('.city-input');
const searchBtn = document.querySelector('.search-btn');
const weatherInfoSection = document.querySelector('.weather-info');
const notFoundSection = document.querySelector('.not-found');
const searchCitySection = document.querySelector('.search-city');
const countryTxt = document.querySelector('.country-text');
const tempTxt = document.querySelector('.temp-txt');
const conditionTxt = document.querySelector('.condition-txt');
const humidityValueTxt = document.querySelector('.humidity-value-txt');
const windValueTxt = document.querySelector('.wind-value-txt');
const weaterSummaryImg = document.querySelector('.weather-summary-img');
const currentDateTxt = document.querySelector('.current-date-text');
const forecastItemContainer = document.querySelector('.forcast-item-container');
const apikey = `477cfe77d118120d13e3f5bf85d9c96a`;

searchBtn.addEventListener('click', () => {
	if (cityInput.value.trim() !== '') {
		updateWeatherInfo(cityInput.value);
		cityInput.value = '';
		cityInput.blur();
	}
});

cityInput.addEventListener('keydown', (event) => {
	if (event.key === 'Enter' && cityInput.value.trim() !== '') {
		updateWeatherInfo(cityInput.value);
		cityInput.value = '';
		cityInput.blur();
	}
});

async function getFetchData(endPoint, city) {
	const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apikey}&units=metric`;
	const response = await fetch(apiUrl);
	return response.json();
}

function getweatherIcon(id) {
	if (id <= 232) return `thunderstorm.svg`;
	if (id <= 321) return `drizzle.svg`;
	if (id <= 531) return `rain.svg`;
	if (id <= 622) return `snow.svg`;
	if (id <= 781) return `atmosphere.svg`;
	if (id === 800) return `clear.svg`;
	else return `clouds.svg`;
}

function getCurrentDate() {
	const currentDate = new Date();
	const options = {
		weekday: 'short',
		day: '2-digit',
		month: 'short'
	};
	return currentDate.toLocaleDateString('en-GB', options);
}

async function updateWeatherInfo(city) {
	const weatherData = await getFetchData('weather', city);
	if (weatherData.cod !== 200) {
		showDisplaySection(notFoundSection);
		return;
	}
	const {
		name: country,
		main: { temp, humidity },
		weather: [{ id, main }],
		wind: { speed }
	} = weatherData;

	countryTxt.textContent = country;
	tempTxt.textContent = `${Math.round(temp)} °C`;
	conditionTxt.textContent = main;
	humidityValueTxt.textContent = `${humidity}%`;
	windValueTxt.textContent = `${speed} m/s`;
	currentDateTxt.textContent = getCurrentDate();
	weaterSummaryImg.src = `image/${getweatherIcon(id)}`;
	showDisplaySection(weatherInfoSection);
}

async function updateForecastInfo(city) {
	const forecastData = await getFetchData(`forecast`, city);
	const timeTaken = '12:00:00';
	const todayDate = new Date().toISOString().split('T')[0];
	forecastItemContainer.innerHTML = '';

	forecastData.list.forEach(forecastWeather => {
		if (forecastWeather.dt_txt.includes(timeTaken) && !forecastWeather.dt_txt.includes(todayDate)) {
			updateForecastItems(forecastWeather);
		}
	});
}

function updateForecastItems(weatherData) {
	const { dt_txt: date, weather: [{ id }], main: { temp } } = weatherData;
	const dateTaken = new Date(date);
	const dateOptions = { day: '2-digit', month: 'short' };
	const dateResult = dateTaken.toLocaleDateString('en-GB', dateOptions);

	const forecastItem = `
	    <div class="forcast-item">
            <h5 class="forcast-item-date">${dateResult}</h5>
            <img src="image/${getweatherIcon(id)}" class="forcast-item-img"></img>
            <h5 class="forcast-item-temp">${Math.round(temp)} °C</h5>
    	</div>
	`;
	forecastItemContainer.insertAdjacentHTML('beforeend', forecastItem);
}

function showDisplaySection(section) {
	[weatherInfoSection, searchCitySection, notFoundSection].forEach(sec => sec.style.display = 'none');
	section.style.display = 'flex';
}
