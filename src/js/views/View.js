export default class View {
	_quote = document.querySelector('.quote');
	_moreWindow = document.querySelector('.more');
	_clock = document.querySelector('.clock');
	_data;

	render(data) {
		this._data = data;
		const markup = this._generateMarkup();
		this._clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	addHandlerRender(handler) {
		window.addEventListener('load', handler);
	}

	_clear() {
		this._parentElement.innerHTML = '';
	}

	_getTimeOfDay(data) {
		if (data <= 3 || data >= 23) this._time = 'night';
		if (data >= 4 && data <= 11) this._time = 'morning';
		if (data >= 12 && data <= 18) this._time = 'afternoon';
		if (data >= 19 && data <= 22) this._time = 'evening';
	}
}
