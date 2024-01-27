import getData from './getdata.js';

const getCourse = await getData('course');

const studenCourseEnrollment = async (courseId) => {
	const students = await getData('students');
	const course = await getData(`course/${courseId}`);
	const list = [];
	students.forEach((student) => {
		const courseSelection = student.courseSelection;

		if (course.id === courseSelection) {
			const studentInfo = {
				namn: student.customerName,
				mail: student.mail,
			};
			list.push(studentInfo);
		}
	});
	return list;
};

getCourse.forEach(async (course) => {
	const list = await studenCourseEnrollment(course.id);
	console.log(course.title);

	if (list.length > 0) {
		list.forEach((person) => {
			console.log(person.namn, person.mail);
		});
	} else {
		console.log('finns inga studenter');
	}
});
