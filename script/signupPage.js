import getData from './getdata.js';
import adData from './adStudentData.js';

const courses = await getData('course');
const selectCourse = document.querySelector('#courseSelection');
const option = document.createElement('option');
selectCourse.appendChild(option);

option.appendChild(document.createTextNode('select a course'));

courses.forEach((course) => {
	const option = document.createElement('option');
	option.setAttribute('value', course.id);
	option.appendChild(document.createTextNode(course.title));
	selectCourse.appendChild(option);
});

const signUpData = document.querySelector('#signUp');
async function addNewData(e) {
	e.preventDefault();
	const formData = new FormData(signUpData);
	const data = Object.fromEntries(formData.entries());

	// Hitta kursen baserat på det valda kurs-ID:t
	const selectedCourse = courses.find(
		(course) => course.id === data.courseSelection
	);
	if (selectedCourse) {
		// Lägg till kursens titel i data-objektet
		data.courseTitle = selectedCourse.title;
	}

	await adData(data);

	signUpData.reset();
}

signUpData.addEventListener('submit', addNewData);
