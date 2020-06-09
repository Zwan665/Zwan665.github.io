const COURSES = [
	{
		id: "program-1",
		//class:"prog",
		course_title: "America",
		course_subtitle: "One Semester Exchange",
		course_description: "A Semester Exchange, feel the world's cutting-edge technology and culture, makes your future plan clearer.The exchange program includes going to a local school for a whole semester, making new friends, living in a warm local family as a homestay to feel the local culture and family atmosphere, helping students understand the social conditions of the country, experience local customs. During weekends and school holidays, there will be interesting local travel arrangements, and guides will introduce the culture, religion and historical stories to learn more about the country.",
		image: "image/america.png",
		image_title: "America"
	},
	{
		id: "program-2",
		course_title: "China",
		course_subtitle: "One Semester Exchange",
		course_description: "China emerged as one of the world's first civilizations, in the fertile basin of the Yellow River in the North China Plain. For millennia, China's political system was based on hereditary monarchies, or dynasties, beginning with the semi-mythical Xia dynasty in the 21st century BCE. Since then, China has expanded, fractured, and re-unified numerous times. It is the world's most populous country, with a population of around 1.40005 billion in 2019. Covering approximately 9.6 million square kilometers (3.7 million mi2), it is the world's third or fourth-largest country by area.The exchange program includes going to a local school for a whole semester, making new friends, living in a warm local family as a homestay to feel the local culture and family atmosphere, helping students understand the social conditions of the country, experience local customs. During weekends and school holidays, there will be interesting local travel arrangements, and guides will introduce the culture, religion and historical stories to learn more about the country.",
		image: "image/China.jpg",
		image_title: "China"
	},
	{
		id: "program-3",
		course_title: "United Kindom",
		course_subtitle: "One Semester Exchange",
		course_description: "The United Kingdom is a unitary parliamentary democracy and constitutional monarchy. The current monarch is Queen Elizabeth II, who has reigned since 1952, making her the world's longest-serving current head of state. The United Kingdom's capital is London, a global city and financial center with an urban area population of 10.3 million.The exchange program includes going to a local school for a whole semester, making new friends, living in a warm local family as a homestay to feel the local culture and family atmosphere, helping students understand the social conditions of the country, experience local customs. During weekends and school holidays, there will be interesting local travel arrangements, and guides will introduce the culture, religion and historical stories to learn more about the country.",
		image: "image/UK.jpg",
		image_title: "UK"
	},
	{
		id: "program-4",
		course_title: "Switzerland",
		course_subtitle: "One Semester Exchange",
		course_description: "Switzerland, officially the Swiss Confederation, is a country situated in the confluence of Western, Central, and Southern Europe. While the Alps occupy the greater part of the territory, the Swiss population of approximately 8.5 million is concentrated mostly on the plateau, where the largest cities and economic centres are located, among them Zürich, Geneva and Basel, where multiple international organisations are domiciled (such as FIFA, the UN's second-largest Office, and the Bank for International Settlements) and where the main international airports of Switzerland are.Since the Reformation of the 16th century, Switzerland has maintained a strong policy of armed neutrality; it has not fought an international war since 1815 and did not join the United Nations until 2002. Nevertheless, it pursues an active foreign policy and is frequently involved in peace-building processes around the world.[11] Switzerland is the birthplace of the Red Cross, one of the world's oldest and best known humanitarian organisations, and is home to numerous international organisations, including the United Nations Office at Geneva, which is its second-largest in the world. The exchange program includes going to a local school for a whole semester, making new friends, living in a warm local family as a homestay to feel the local culture and family atmosphere, helping students understand the social conditions of the country, experience local customs. During weekends and school holidays, there will be interesting local travel arrangements, and guides will introduce the culture, religion and historical stories to learn more about the country.",
		image: "image/switzerland.jpg",
		image_title: "Switzerland"
	},
	{
		id: "program-5",
		course_title: "Japan",
		course_subtitle: "One Semester Exchange",
		course_description: "Japan is an island country in East Asia. Located in the northwest Pacific Ocean, it borders the Sea of Japan to the west and extends from the Sea of Okhotsk in the north to the East China Sea and Taiwan in the south. Archaeological finds indicate that the archipelago was inhabited as early as the Upper Paleolithic period, though the first written mentions of the islands appear in Chinese texts from the first century AD. Japan has since 1945 maintained a unitary parliamentary constitutional monarchy, with the Emperor as the head of state and an elected legislature known as the National Diet.The exchange program includes going to a local school for a whole semester, making new friends, living in a warm local family as a homestay to feel the local culture and family atmosphere, helping students understand the social conditions of the country, experience local customs. During weekends and school holidays, there will be interesting local travel arrangements, and guides will introduce the culture, religion and historical stories to learn more about the country.",
		image: "image/japan.jpeg",
		image_title: "Japan"
	},
 ];

/* Dynamic Display of HTML */

/* Creates the HTML required for display each course information */
function createCourseHTML(course) {
	let courseHTML = $("<article>");

	let figure = $("<figure>");
	let image = $("<img>", {src: course.image, alt: course.image_title});
	image.css('width', "50%");
	let caption = $("<figcaption>" + course.image_title + "</figcaption>");
	figure.append(image);
	figure.append(caption);
	courseHTML.append(figure);

	let title = $("<h2>" + course.course_title + "</h2>");
	courseHTML.append(title);

	let subtitle = $("<h3>" + course.course_subtitle + "</h3>");
	courseHTML.append(subtitle);

	let description = $("<p>" + course.course_description + "</p>");
	courseHTML.append(description);

	return courseHTML;
}

/* Displays all courses */
function displayCourses(courses) {
	let coursesList = $("#coursesList");

	coursesList.empty();
	for(let course of courses) {
		let courseHTML = createCourseHTML(course);
		coursesList.append(courseHTML);
		//$(".prog").css('width','10px');
	}
}

$(document).ready(function(){
	let mainCourses = [];

	displayCourses(mainCourses);

	// Registering the search event handler using event listeners (addEventListener)
	// $("#search").on("click", search);

	// Registering the search event handler using event handler properties (onevent properties)
	// let searchButton = document.getElementById('search');
	// searchButton.onclick = search;

	$("#searchText").on("keyup", search)
});

/* SEARCH FEATURE */

function search() {
		let query = $("#searchText").val();
		query = query.toLowerCase().trim();

		let matches = [];
		for(let course of COURSES) {
			let courseTitle = course.course_title.toLowerCase();
			if(courseTitle.includes(query)) {
				matches.push(course);
			}
		}

		displayCourses(matches);
}

/* END OF SEARCH FEATURE */
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "show less";
        moreText.style.display = "inline";
    }
}

function myFunction1() {
    var dots1 = document.getElementById("dots1");
    var moreText1 = document.getElementById("more1");
    var btnText1 = document.getElementById("myBtn1");
    if (dots1.style.display === "none") {
        dots1.style.display = "inline";
        btnText1.innerHTML = "Read more";
        moreText1.style.display = "none";
    } else {
        dots1.style.display = "none";
        btnText1.innerHTML = "show less";
        moreText1.style.display = "inline";
    }
}

function myFunction2() {
    var dots2 = document.getElementById("dots2");
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("myBtn2");
    if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        btnText2.innerHTML = "Read more";
        moreText2.style.display = "none";
    } else {
        dots2.style.display = "none";
        btnText2.innerHTML = "show less";
        moreText2.style.display = "inline";
    }
}

function myFunction3() {
    var dots3 = document.getElementById("dots3");
    var moreText3 = document.getElementById("more3");
    var btnText3 = document.getElementById("myBtn3");
    if (dots3.style.display === "none") {
        dots3.style.display = "inline";
        btnText3.innerHTML = "Read more";
        moreText3.style.display = "none";
    } else {
        dots3.style.display = "none";
        btnText3.innerHTML = "show less";
        moreText3.style.display = "inline";
    }
}

function myFunction4() {
    var dots4 = document.getElementById("dots4");
    var moreText4 = document.getElementById("more4");
    var btnText4 = document.getElementById("myBtn4");
    if (dots4.style.display === "none") {
        dots4.style.display = "inline";
        btnText4.innerHTML = "Read more";
        moreText4.style.display = "none";
    } else {
        dots4.style.display = "none";
        btnText4.innerHTML = "show less";
        moreText4.style.display = "inline";
    }
}