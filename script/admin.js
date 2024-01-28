import addCourse from './addCourse.js';

document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('newCourseForm');

	form.addEventListener('submit', async function (event) {
		event.preventDefault();

		// Samla in data från formuläret
		const courseTitle = document.getElementById('newCourseTitle').value;
		const courseNumber = document.getElementById('courseNumber').value;
		const duration = document.getElementById('duration').value;
		const startDate = document.getElementById('startDate').value;
		const onlineCourse = document.getElementById('onlineCourse').value;
		const onSite = document.getElementById('onSite').value;
		const cost = document.getElementById('cost').value;

		// Skapa kursobjekt
		const newCourse = {
			title: courseTitle,
			courseNumber: courseNumber,
			duration: duration,
			startDate: startDate,
			onlineCourse: onlineCourse,
			onSite: onSite,
			cost: cost,
		};

		// Lägg till kursen via addCourse funktionen
		try {
			const response = await addCourse(newCourse, 'course');
			console.log('New course added:', response);
		} catch (error) {
			console.error('Something went wrong:', error);
		}
	});
});
