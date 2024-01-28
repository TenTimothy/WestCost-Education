import getData from './getdata.js';

const getCourse = await getData('course');
const coursesContainer = document.getElementById('coursesContainer');

const studentCourseEnrollment = async (courseId) => {
	const students = await getData('students');
	const course = await getData(`course/${courseId}`);
	const list = [];
	students.forEach((student) => {
		const courseSelection = student.courseSelection;
		if (course.id === courseSelection) {
			const studentInfo = {
				namn: student.customerName,
				mail: student.mail,
				number: student.mobileNumber,
			};
			list.push(studentInfo);
		}
	});
	return list;
};

for (const course of getCourse) {
	const list = await studentCourseEnrollment(course.id);
	const courseElement = document.createElement('div');
	courseElement.classList.add('course');
	courseElement.innerHTML = `<h3>${course.title}</h3>`;

	if (list.length > 0) {
		const studentsList = document.createElement('ul');
		list.forEach((person) => {
			const studentItem = document.createElement('li');
			studentItem.textContent = `name: ${person.namn} email: ${person.mail} mobil: ${person.number}`;
			studentsList.appendChild(studentItem);
		});
		courseElement.appendChild(studentsList);
	} else {
		courseElement.innerHTML += '<p>No students enrolled</p>';
	}

	coursesContainer.appendChild(courseElement);
}

const addCourseButton = document.getElementById('addCourseButton');
const addCoursButton = document.getElementById('addCours'); // Ändrade id till "addCours"
addCoursButton.addEventListener('click', () => {
	// Skicka användaren till admin.html när knappen klickas
	window.location.href = 'admin.html';
});
