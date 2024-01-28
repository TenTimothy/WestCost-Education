import getData from './getdata.js';
import adData from './adStudentData.js';

const courses = await getData('course');
const selectCourse = document.querySelector('#courseSelection');
const option = document.createElement('option');
selectCourse.appendChild(option);

option.appendChild(document.createTextNode('Select a course'));

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

	const selectedCourse = courses.find(
		(course) => course.id === data.courseSelection
	);
	if (selectedCourse) {
		data.courseTitle = selectedCourse.title;
	}

	if (Object.values(data).some((value) => value.trim() === '')) {
		alert('Please fill in all fields.');
		return;
	}

	await adData(data);

	signUpData.reset();
}

signUpData.addEventListener('submit', addNewData);

const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function () {
	alert('The button was clicked!');
});
