import View from './View';

class ButtonView extends View {
	#btn = document.querySelector('.btn');
	#deg = 0;

	handleButton() {
		this.#btn.addEventListener('click', this.#controlButton.bind(this));
	}

	#controlButton() {
		// adds active class to clock, more and quote
		[this._clock, this._moreWindow, this._quote].forEach((obj) => {
			obj.classList.toggle('active');
		});

		// adds disappear class to quote
		this._quote.classList.toggle('disappear');

		// rotates arrow svg
		this.#deg += 180;
		this.#btn.querySelector('svg').style = `transform: rotate(${this.#deg}deg)`;

		// changes text inside button depending if there's active class or no
		const btnText = this._moreWindow.classList.contains('active')
			? 'less'
			: 'more';
		this.#btn.firstChild.innerText = btnText;
	}
}

export default new ButtonView();
