import getData from './getdata.js';
import adData from './adddata.js';

const courses = await getData();
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
	await adData(data);
}

signUpData.addEventListener('submit', addNewData);
