const PROJECTS = [
	{
		title: "ConnectedCycle Fleet Management",
		slug: "connected-cycle",
		thumbnail: "images/thumbnail-connected-cycle.jpg",
		stack: "Angular",
		video: "https://www.youtube.com/embed/qkM76A4jpM8",
		description:
			'<p>For my Masters project I worked at ConnectedCycle, a startup at an incubator located in Paris.</p><p>Thanks to the ConnectedCycle solution, users can attach small geo-locating tracking devices onto their bikes or (the most recent evolution in the company) any kind of valuable in order to always have its location on hand in the case of theft. My project involved building a web platform in which users can see in real time the location of their trackers. The essence of the platform is an administrative portal which requires authentication and in which a user can quickly get an overview of the state of their fleet as well as organize and edit any details. If a bike gets stolen, for example, they would be able to go on the platform, search for the bike, and be able to retrieve its last location using the real time tracker map. Other features include a display of all the additional information of each of the trackers, a space to view and edit other users belonging to the client, and a space to organize and sort the trackers into subgroups.</p><p>I followed the traditional iterative design cycle of 1) analyzing requirements and user needs through users, scenarios, and personas, 2) visualizing and planning the initial concept with the objectives and goals in mind, 3) designing for usability by prototyping, 4) constructing and implementing the design, and 5) evaluating the design for the next iteration.</p><p>The first part I carried out by conducting a survey of the users of the currently released version of the Fleet Management web platform. The survey aimed to get a general profile of each user, their experience and comfort with technology, their current usage of the Fleet Management platform, their goals when they went on the platform, and any functionalities that they wished to see. From their responses (people mainly used the periodically updating Map functionality and were concerned with theft), I created a central persona that embodied the average user, which was a manager of a hotel in Paris that provided bike rentals and that needed to locate and keep track of each bike. The persona had a moderate competency with technology. With this persona, I create some use case scenarios that embodied the usage of what the responses of the survey were. One of the scenarios was having to locate a bike that was reported stolen and the steps that one would take when signing into the web platform.</p><p>From there I made two tiers of mockups: one low-fidelity with paper and pencil to sketch out myinitial ideas and then I moved to a higher-fidelity prototype using Balsamiq, a popular wireframing software, and mapped out in detail each interaction and each screen, which I then based my final implementation on.</p><p align="center"><img src="images/connectedcycle-1.png" /><br />Sample mockup of the Maps page</p><p>The final implementation was done with Angular, the final product of which can be found in the demo above.</p>',
	},
	{
		title: "The Silver Islands",
		slug: "the-silver-islands",
		thumbnail: "images/thumbnail-silver-islands.jpg",
		stack: "React",
		github: "https://github.com/katchao/poke",
		link: "http://www.silver-islands.com",
		description:
			"Pokemon art website that I used to develop in my free time. I created it in 2006 and therefore represents the origin of my interest in computers and coding. From maintaining this website I've learned about design, ways to create interactive/useful content, SEO, how to manage a small community of ~100 members, and much, much more. I used to maintain it almost daily throughout middle school and high school, although sadly, since the beginning of college and beyond, it's fallen off my radar. The last revamp was in 2020 but otherwise it is not under active development.",
	},
	{
		title: "Good Vibes",
		slug: "good-vibes",
		thumbnail: "images/thumbnail-good-vibes.jpg",
		stack: "Android",
		description:
			'<p>Built as a team of 5 for a class project, the Good Vibes phone and smartwatch applications provide a supportive, anonymous community for teenagers, ages 13-19, who are suffering from depression.</p><p>In the mobile application, teenagers can enter their daily mood and browse through updates from their community. The mobile application also has a Beat Lab where a teen can compose a custom vibration pattern to send to a peer in need.</p><p>With Good Vibes, if a user is having a bad day, they can ask for help with a tap of a button. Once a cry for help is sent, nearby teens will receive a notification that a user is requesting support and can send personal messages with a custom vibration to the user. The teen in need can then directly feel the vibrations and read the notifications on their smartwatch without having to reach for their mobile device.</p><p>Sample screenshots:</p><p><img src="images/goodvibes-1.png" /> <img src="images/goodvibes-2.png" /> <img src="images/goodvibes-3.png" /> <img src="images/goodvibes-4.png" /></p>',
	},
	{
		title: "Top 100 Movies Visualization",
		slug: "top-100-movies",
		thumbnail: "images/thumbnail-top-100.jpg",
		banner: "http://via.placeholder.com/600x300",
		stack: "d3",
		github: "https://github.com/katchao/infovis",
		description:
			'In a team of 4, we built a visualization using d3 using the IMBD Top 100 movies dataset to show the relationship between the movies and their movie critics. The size of the circles represents the ranking of the movie (the bigger, the higher the ranking), the colors represent the genre of the movie, and a link between a film and a critic represents the the fact that a critic included the film on their top 100 list.<p align="center"><img src="images/top100-1.png" /><br />Hovering over a circle brings up details about the film</p><p align="center"><img src="images/top100-2.png" /><br />Double clicking a circle singles out the film and shows its connection with the film critics</p><p align="center"><img src="images/top100-3.png" /><br />Options to filter/color the circles</p>',
	},
	{
		title: "Poisson Image Stitcher",
		slug: "poisson-image-stitcher",
		thumbnail: "images/thumbnail-poisson.jpg",
		stack: "Flask, Redis",
		github: "https://github.com/katchao/poisson",
		video: "https://www.youtube.com/embed/Ic-RuPlb7M0",
		description:
			"<p>This was a personal project inspired by a school assignment, in which we implemented a tool that created seamless composites of 2 images using a discrete Poisson solver with Matlab (for example, selecting Nicolas Cage's face and putting it on an apple). I decided to create a user and web-friendly version of this tool using Python because I was having so much fun creating random image composites. I used Flask as the web framework with Redis running side by side to for persistant image storage. View the demo to see it in action!</p>",
	},
	{
		title: "Angry Charmander Game",
		slug: "angry-charmander",
		thumbnail: "images/thumbnail-angry-charmander.jpg",
		stack: "Flash",
		description:
			'<p>I wanted to explore animation and the art of creating Flash games. Using the helpful Kongregate shootorials as reference, I created Shooting Charmander.</p><object width="400" height="500" data="Game.swf"></object><h2>Instructions</h2><strong>Arrow Keys</strong> to move.<br /><strong>Spacebar</strong> to shoot.<p style="color: aaaaaa">Aside from the illustration in the main screen, all artwork is from the official Pokemon games and I do not own any of it.</p>',
	},
];

const ABOUT_LINK = {
	name: "About",
	link: document.getElementById("about-link"),
	section: document.getElementById("about-section"),
};
const PROJECTS_LINK = {
	name: "Projects",
	link: document.getElementById("projects-link"),
	section: document.getElementById("projects-section"),
};
const SINGLE_PROJECT_LINK = {
	name: "Single Project",
	link: document.getElementById("projects-link"),
	section: document.getElementById("single-project-section"),
};
const CONTACT_LINK = {
	name: "Contact",
	link: document.getElementById("contact-link"),
	section: document.getElementById("contact-section"),
};
export {
	PROJECTS,
	ABOUT_LINK,
	PROJECTS_LINK,
	SINGLE_PROJECT_LINK,
	CONTACT_LINK,
};
