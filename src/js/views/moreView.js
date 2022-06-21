import View from './View';

class MoreView extends View {
	_parentElement = this._moreWindow;

	_generateMarkup() {
		this._changeStyle();
		return `
        <div class="more__info">
            <h3 class="heading-3">Current timezone</h3>
            <p class="paragraph paragraph--more">${this._data.time.timezone}</p>
        </div>

        <div class="more__info">
            <h3 class="heading-3">Day of the year</h3>
            <p class="paragraph paragraph--more">${this._data.time.dayOfYear}</p>
        </div>

        <div class="more__info">
            <h3 class="heading-3">Day of the week</h3>
            <p class="paragraph paragraph--more">${this._data.time.dayOfWeek}</p>
        </div>

        <div class="more__info">
            <h3 class="heading-3">Week number</h3>
            <p class="paragraph paragraph--more">${this._data.time.weekNum}</p>
        </div>

        <div class="more__bar"></div>`;
	}

	// adds night class to moreWindow based on hour
	_changeStyle() {
		const hour = this._data.time.hour;
		if (hour <= 3 || hour >= 19) this._parentElement.classList.add('night');
		else this._parentElement.classList.remove('night');
	}
}

export default new MoreView();
