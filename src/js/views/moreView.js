import View from './View';

class MoreView extends View {
	_parentElement = this._moreWindow;

	_generateMarkup() {
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
}

export default new MoreView();
