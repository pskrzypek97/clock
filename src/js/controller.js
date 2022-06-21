import '../sass/main.scss';
import * as model from './model';
import buttonView from './views/buttonView';
import quoteView from './views/quoteView';
import clockView from './views/clockView';
import moreView from './views/moreView';

const controlData = async () => {
	try {
		// 1. Load data (time, location, quote)
		await model.loadData();
		model.loadTime();

		// 2. Render the data
		[clockView, quoteView, moreView].forEach((view) =>
			view.render(model.state.data)
		);
	} catch (err) {
		clockView.renderError();
	}
};

const controlQuote = async () => {
	try {
		// 0. Spin button refresh
		quoteView.startOrStopSpin();

		// 1.Load quote
		await model.loadQoute();

		// 2. Render quote
		quoteView.render(model.state.data);

		// 3. Stop spinning
		quoteView.startOrStopSpin(false);
	} catch (err) {
		quoteView.renderError();
	}
};

const init = () => {
	buttonView.handleButton();
	moreView.addHandlerRender(controlData);
	quoteView.addHandlerQuote(controlQuote);
};

init();
