const menuBar = document.querySelector('.icon-bar');
const nav = document.querySelector('.nav');
const closeBtn = document.querySelector('.close-menu');

menuBar.addEventListener('click', evt => {
	evt.stopPropagation();
	nav.classList.toggle('hidden');
});

window.addEventListener('click', function(evt) {
	if (evt.target !== nav || evt.target !== menuBar || evt.target === closeBtn) {
		nav.classList.toggle('hidden');
	}
});
