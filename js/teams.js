class Team {
	constructor(container, data) {
		this.container = container;
		this.data = data;

		this.createCard();
	}

	createCard() {
		this.data.forEach(team => {
			const singleTeam = document.createElement('div');
			singleTeam.classList.add('team-member');

			const details = document.createElement('div');
			details.classList.add('team-details');

			this.createImage(team, singleTeam);

			this.createHeading(team, details);
			this.createParagraph(team, details, 'role');
			this.createAnchor(team, details, 'github', ['fab', 'fa-github-square'], team.github);
			this.createAnchor(team, details, 'linkedin', ['fab', 'fa-linkedin'], team.linkedin);
			this.createAnchor(team, details, 'location', ['fas', 'fa-map-marker-alt'], team.location);

			singleTeam.appendChild(details);
			this.container.appendChild(singleTeam);
		});
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

	createHeading(data, parent) {
		const heading = document.createElement('h5');
		heading.classList.add('name');
		heading.textContent = data.name;
		parent.appendChild(heading);
	}

	createParagraph(data, parent, className) {
		const paragraph = document.createElement('p');
		paragraph.classList.add(className);
		paragraph.textContent = data.role;
		parent.appendChild(paragraph);
	}

	createAnchor(data, parent, className, iconClass, href) {
		const anchor = document.createElement('a');
		anchor.classList.add(className);
		anchor.setAttribute('title', data.location);
		anchor.setAttribute('href', href);

		const iTag = document.createElement('i');

		iconClass.forEach(currClass => {
			iTag.classList.add(currClass);
		});

		anchor.appendChild(iTag);
		parent.appendChild(anchor);
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
