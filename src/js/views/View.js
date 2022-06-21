export default class View {
	_quote = document.querySelector('.quote');
	_moreWindow = document.querySelector('.more');
	_clock = document.querySelector('.clock');
	_data;

	// render markup in different parent elements
	render(data) {
		this._data = data;
		const markup = this._generateMarkup();
		this._clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	// load content when page opens
	addHandlerRender(handler) {
		window.addEventListener('load', handler);
	}

	// render error in different parent elements
	renderError(message = this._errorMessage) {
		const markup = `
		  <div class="error">
			<p>${message}</p>
		</div>`;

		this._clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	// clear parent element
	_clear() {
		this._parentElement.innerHTML = '';
	}

	// assign different value to _time statement based on an hour
	_getTimeOfDay(data) {
		if (data <= 11 || data >= 23) this._time = 'night';
		if (data >= 4 && data <= 11) this._time = 'morning';
		if (data >= 12 && data <= 18) this._time = 'afternoon';
		if (data >= 19 && data <= 22) this._time = 'evening';
	}
}
