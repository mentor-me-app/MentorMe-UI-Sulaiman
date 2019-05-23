class Menu {
	constructor(menuBtn, nav, closeBtn) {
		this.menuBtn = menuBtn;
		this.nav = nav;
		this.closeBtn = closeBtn;

		this.menuBtn.addEventListener('click', () => this.toggleMenu());
		this.closeBtn.addEventListener('click', evt => {
			evt.preventDefault();
			this.toggleMenu();
		});
	}

	toggleMenu() {
		this.nav.classList.toggle('hidden');
	}
}

// Select menu button
const menuBar = document.querySelector('.icon-bar');
const nav = document.querySelector('.nav');
const closeBtn = document.querySelector('.close-menu');
new Menu(menuBar, nav, closeBtn);
