import { getJSON } from './helpers';
import { API_DATA, API_LOCATION, API_QUOTE, API_KEY } from './config';

class Data {
	constructor(time, location, quote) {
		this.time = time;
		this.location = location;
		this.quote = quote;
	}
}

export const state = { data: {} };

// assigns data from external API's into Data class
const createDataObject = (data) => {
	const {
		en,
		author,
		abbreviation,
		timezone,
		day_of_week,
		day_of_year,
		week_number,
		city,
		country_name,
	} = Object.assign({}, ...data);
	return new Data(
		{
			timezone,
			dayOfWeek: day_of_week,
			dayOfYear: day_of_year,
			weekNum: week_number,
			hour: '21',
			minute: '37',
			code: abbreviation,
		},
		{
			city,
			country: country_name,
		},
		{
			author,
			quote: en,
		}
	);
};

// loads data from external API's
export const loadData = async () => {
	try {
		const data = await Promise.all([
			getJSON(`${API_DATA}`),
			getJSON(`${API_QUOTE}`),
			getJSON(`${API_LOCATION}${API_KEY}`),
		]);
		console.log(data);
		state.data = createDataObject(data);
	} catch (err) {
		throw err;
	}
};

// loads new quote when user refreshes it
export const loadQoute = async () => {
	try {
		const data = await getJSON(`${API_QUOTE}`);
		const { author, en } = data;
		state.data.quote = { author, quote: en };
	} catch (err) {
		throw err;
	}
};

// gets time from Date object
export const loadTime = () => {
	const time = new Date();
	state.data.time.hour = time.getHours();
	state.data.time.minute = time.getMinutes();
};
