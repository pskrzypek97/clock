import View from './View';

class QuoteView extends View {
	_parentElement = this._quote.querySelector('.quote__text');

	_generateMarkup() {
		return `
			<p class="paragraph paragraph--quote">
				${this._data.quote.quote}
			</p>
            <figcaption>${this._data.quote.author}</figcaption>`;
	}

	startOrStopSpin(start) {
		const btnRefresh = this._quote.querySelector('.quote__refresh');
		if (start) btnRefresh.classList.add('rotate');
		if (!start) btnRefresh.classList.remove('rotate');
	}

	addHandlerQuote(handler) {
		this._quote
			.querySelector('.quote__refresh')
			.addEventListener('click', handler);
	}
}

export default new QuoteView();
