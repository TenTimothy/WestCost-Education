// Funktion för att visa kurser i HTML från din JSON-databas
async function displayCoursesFromDatabase() {
	try {
		const db = await fetch('http://localhost:3000/course');
		const courses = await db.json();

		const courseList = document.getElementById('course-list');
		courseList.innerHTML = ''; // Rensa tidigare innehåll

		courses.forEach((course) => {
			const listItem = document.createElement('li');
			listItem.textContent = `Kurs: ${course.title}, Lärare: ${course.teacher}`;
			courseList.appendChild(listItem);
		});
	} catch (error) {
		throw new Error(error);
	}
}

// Visa kurser när sidan laddas
displayCoursesFromDatabase();

//const obj3 = {
//title: "title New",
//teacher: "Teacher New"
//};

//await adData(obj3);

//console.log(await adData());
