import View from './View';
import icons from '../../images/desktop/sprite.svg';
import dayImg from '../../images/desktop/bg-image-daytime.jpg';
import nightImg from '../../images/desktop/bg-image-nighttime.jpg';

class ClockView extends View {
	_parentElement = this._clock.querySelector('.clock__main');
	#mainContainer = document.querySelector('.container');

	_generateMarkup() {
		this._getTimeOfDay(this._data.time.hour);
		this.#changeBackgroundPicture();

		return `
        <div class="clock__welcome">
            <svg class="clock__icon">
                <use xlink:href="${icons}#icon-${
			this._time === 'morning' || this._time === 'afternoon' ? 'sun' : 'moon'
		}"></use>
            </svg>
            <p class="paragraph paragraph--clock">Good ${this._time}</p>
        </div>
        <div class="clock__time">
            <h1 class="heading-1">
                ${this.#getCorrectTimeFormat(
									this._data.time.hour
								)}:${this.#getCorrectTimeFormat(
			this._data.time.minute
		)}<span class="clock__timezone"> ${this._data.time.code}</span>
            </h1>
        </div>
        <div class="clock__location">
            <h2 class="heading-2">In ${this._data.location.city}, ${
			this._data.location.country
		}</h2>
        </div>`;
	}

	#changeBackgroundPicture() {
		if (this._time === 'morning' || this._time === 'afternoon')
			this.#mainContainer.style.backgroundImage = `url(${dayImg})`;
		if (this._time === 'evening' || this._time === 'night')
			this.#mainContainer.style.backgroundImage = `url(${nightImg})`;
	}

	#getCorrectTimeFormat(time) {
		return time.length === 2 ? time : time.toString().padStart(2, '0');
	}
}

export default new ClockView();
