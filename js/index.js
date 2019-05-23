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

// mentors data
const mentorData = [
	{
		name: 'Bill gate',
		image: './img/mentors/businessman-718261.jpg',
		content:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nesciunt, excepturi suscipit ullam incidunt quia? Est quod exercitationem excepturi velit. Earum fugit accusamus omnis corporis deserunt obcaecati voluptatum maiores iure!'
	},
	{
		name: 'Warren Buffet',
		image: './img/mentors/businessman-corporate-32976.jpg',
		content:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nesciunt, excepturi suscipit ullam incidunt quia? Est quod exercitationem excepturi velit. Earum fugit accusamus omnis corporis deserunt obcaecati voluptatum maiores iure!'
	},
	{
		name: 'Warren Buffet',
		image: './img/mentors/businessman-corporate-32976.jpg',
		content:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nesciunt, excepturi suscipit ullam incidunt quia? Est quod exercitationem excepturi velit. Earum fugit accusamus omnis corporis deserunt obcaecati voluptatum maiores iure!'
	}
];

class Mentor {
	constructor(container, data) {
		this.container = container;
		this.data = data;
		this.createCard();
	}

	createCard() {
		this.data.forEach(mentor => {
			const singleMentor = document.createElement('div');
			singleMentor.classList.add('mentor');

			this.createHeading(mentor, singleMentor);
			this.createImage(mentor, singleMentor);
			this.createParagraph(mentor, singleMentor);

			this.container.appendChild(singleMentor);
		});
	}

	createHeading(data, parent) {
		const heading = document.createElement('h3');
		heading.textContent = data.name;
		parent.appendChild(heading);
	}

	createImage(data, parent) {
		const imgContainer = document.createElement('div');
		imgContainer.classList.add('img-container');

		const image = document.createElement('img');
		image.setAttribute('src', data.image);
		image.setAttribute('alt', data.name);

		imgContainer.appendChild(image);
		parent.appendChild(imgContainer);
	}

	createParagraph(data, parent) {
		const paragraph = document.createElement('p');
		paragraph.textContent = data.content;
		parent.appendChild(paragraph);
	}
}

// Generate mentors card
const container = document.querySelector('.mentors');
const mentor = new Mentor(container, mentorData);

class Team {
	constructor(container, data) {
		this.container = container;
		this.data = data;
	}
}

const teamsData = [
	{
		name: 'Joe Alfaro',
		role: 'Full Stack Web Developer',
		github: 'https://github.com/Joe-Alfaro',
		linkedin: 'https://www.linkedin.com/in/joe-alfaro/',
		location: 'SF Bay Area, California',
		image: './img/teams/joe_alfaro.png'
	},
	{
		name: 'Katie Rose Felten',
		role: 'Full Stack Web Developer',
		github: 'https://github.com/katie-rose',
		linkedin: 'https://www.linkedin.com/in',
		location: 'Atlanta, GA',
		image: './img/teams/katie_rose_felten.jpg'
	},
	{
		name: 'Mark La Monica',
		role: 'UI/UX Designer',
		github: 'https://github.com',
		linkedin: 'linkedin.com/in/mark-la-monica-11155b181',
		location: 'Los Angeles, California',
		image: './img/teams/mark.jpeg'
	},
	{
		name: 'Shane Gooch',
		role: 'Full Stack Web Developer',
		github: 'https://github.com/shane-gooch',
		linkedin: 'https://www.linkedin.com/in/shane-gooch-62b1b987/',
		location: 'San Jose, California',
		image: './img/teams/shane_gooch.jpg'
	},
	{
		name: 'Sulaiman Yemi',
		role: 'Full Stack Web Developer',
		github: 'https://github.com/abidex4yemi',
		linkedin: 'linkedin.com/in/sulaiman-abidemi-15516092',
		location: 'Lagos, Nigeria',
		image: './img/teams/yemi.jpeg'
	},
	{
		name: 'Aruna Benjamin',
		role: 'Full Stack Web Developer',
		github: 'https://github.com/arunabenji29',
		linkedin: 'linkedin.com/in/',
		location: 'San Jose, California',
		image: './img/teams/aruna_benjamin.jpg'
	}
];

//Generate teams card
const teamsContainer = document.querySelector('.teams');
const teams = new Team(teamsContainer, teamsData);
