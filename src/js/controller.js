import '../sass/main.scss';

const btn = document.querySelector('.btn');
const quote = document.querySelector('.quote');
const moreWindow = document.querySelector('.more');
const clock = document.querySelector('.clock');

let deg = 0;

btn.addEventListener('click', function () {
	[clock, moreWindow, quote].forEach((obj) => obj.classList.toggle('active'));
	quote.classList.toggle('disappear');
	deg += 180;
	this.querySelector('svg').style = `transform: rotate(${deg}deg)`;

	const btnText = moreWindow.classList.contains('active') ? 'less' : 'more';

	this.firstChild.innerText = btnText;
});

quote.querySelector('.quote__refresh').addEventListener('click', function () {
	this.classList.add('rotate');
});
