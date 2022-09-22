//! Import des fichiers audio
const prepare = new Audio('./assets/sounds/prepare.mp3');
prepare.play();

const pop = new Audio('./assets/sounds/pop.mp3');
const firstblood = new Audio('./assets/sounds/firstblood.mp3');
const headshot = new Audio('./assets/sounds/headshot.mp3');
const killingspree = new Audio('./assets/sounds/killingspree.mp3');
const level2 = new Audio('./assets/sounds/level2.mp3');

const title = document.querySelector('h1');
setTimeout(() => {
	title.style.display = 'none';
}, 3000);

const counterDisplay = document.querySelector('h3');
let counter = 0;
//! Application de jeu

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

	//! Gestion des scores et interractions

	switch (counter) {
		case 5:
			firstblood.play();
			title.innerText = '5 points !';
			title.style.display = 'block';
			title.style.fontFamily = 'counter';
			setTimeout(() => {
				title.style.display = 'none';
			}, 1500);
			break;

		case 10:
			headshot.play();
			title.innerText = '10 points !';
			title.style.display = 'block';
			title.style.fontFamily = 'counter';
			setTimeout(() => {
				title.style.display = 'none';
			}, 1500);
			break;

		case 20:
			killingspree.play();
			title.innerText = '20 points !';
			title.style.display = 'block';
			title.style.fontFamily = 'counter';
			setTimeout(() => {
				title.style.display = 'none';
			}, 1500);
			break;

		case 30:
			level2.play();
			title.innerText = 'Level 2';
			title.style.color = 'red';
			title.style.display = 'block';
			title.style.fontFamily = 'counter';
			setTimeout(() => {
				title.style.display = 'none';
			}, 2000);
			bubble.style.animation = 'anim 5s forwards';
			break;
	}
};

setInterval(bubbleMaker, 1000);
