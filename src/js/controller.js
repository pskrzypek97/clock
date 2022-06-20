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
		[clockView, quoteView, moreView].forEach((cl) =>
			cl.render(model.state.data)
		);
	} catch (err) {
		console.error(err);
	}
};

const controlQuote = async () => {
	try {
		// 0. Spin button refresh
		quoteView.startOrStopSpin(true);

		// 1.Load quote
		await model.loadQoute();

		// 2. Render quote
		quoteView.render(model.state.data);

		// 3. Stop spinning
		quoteView.startOrStopSpin(false);
	} catch (err) {
		console.error(err);
	}
};

const init = () => {
	buttonView.handleButton();
	moreView.addHandlerRender(controlData);
	quoteView.addHandlerQuote(controlQuote);
};

init();
