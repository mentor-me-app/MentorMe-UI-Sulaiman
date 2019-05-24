// mentors data
const mentorData = [
	{
		name: 'Bill gate',
		image: './img/mentors/businessman-718261.jpg',
		content:
			'William Henry Gates III is an American business magnate, investor, author, philanthropist, and humanitarian. He is best known as the principal founder of Microsoft Corporation.'
	},
	{
		name: 'Warren Buffet',
		image: './img/mentors/businessman-corporate-32976.jpg',
		content:
			'Warren Edward Buffett is an American business magnate, investor, speaker and philanthropist who serves as the chairman and CEO of Berkshire Hathaway.'
	},
	{
		name: 'Mark Cuban',
		image: './img/mentors/businessman-corporate-32976.jpg',
		content:
			'Mark Cuban is an American businessman and investor. He is the owner of the National Basketball Association"s Dallas Mavericks, co-owner of 2929 Entertainment and chairman of AXS TV. He is also one of the main "shark" investors on the ABC reality television series, Shark Tank.'
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
