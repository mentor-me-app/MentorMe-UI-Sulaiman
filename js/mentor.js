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
