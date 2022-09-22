const counterDisplay = document.querySelector('h3');
let counter = 0;

const pop = new Audio('./assets/sound/pop.mp3');

const title = document.querySelector('h1');
setTimeout(() => {
	title.style.display = 'none';
}, 3000);

if (counter === '20') {
	setTimeout(() => {
		title.textContent = "You're good !!! 👍🏻👍🏻";
	}, 2000);
}

const bubbleMaker = () => {
	const bubble = document.createElement('span');
	bubble.classList.add('bubble');
	document.body.appendChild(bubble);

	const size = Math.random() * 200 + 100 + 'px';
	bubble.style.height = size;
	bubble.style.width = size;

	bubble.style.top = Math.random() * 100 + 50 + '%';
	bubble.style.left = Math.random() * 100 + '%';

	const plusMinus = Math.random() > 0.5 ? 1 : -1;
	bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + '%');

	bubble.addEventListener('click', () => {
		counter++;
		pop.play();

		const delayDisplay = () => {
			counterDisplay.classList.add('visible');
			setTimeout(() => {
				counterDisplay.classList.remove('visible');
			}, 700);
		};
		delayDisplay();
		counterDisplay.textContent = counter;
		bubble.remove();
	});

	setTimeout(() => {
		bubble.remove();
	}, 8000);
};

setInterval(bubbleMaker, 1000);
