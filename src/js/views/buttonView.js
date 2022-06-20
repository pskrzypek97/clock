import View from './View';

class ButtonView extends View {
	#btn = document.querySelector('.btn');
	#deg = 0;

	handleButton() {
		this.#btn.addEventListener('click', this.#controlButton.bind(this));
	}

	#controlButton() {
		[this._clock, this._moreWindow, this._quote].forEach((obj) => {
			obj.classList.toggle('active');
		});

		this._quote.classList.toggle('disappear');

		this.#deg += 180;
		this.#btn.querySelector('svg').style = `transform: rotate(${this.#deg}deg)`;

		const btnText = this._moreWindow.classList.contains('active')
			? 'less'
			: 'more';
		this.#btn.firstChild.innerText = btnText;
	}
}

export default new ButtonView();
