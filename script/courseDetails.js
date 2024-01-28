import getData from './getdata.js';

export const renderCourseDetails = async () => {
	const courseListDiv = document.getElementById('courseList');

	// Funktion för att ladda och visa kurser
	async function loadCourses() {
		const courseSearch = location.search.split('=')[1];
		const course = await getData(`course/${courseSearch}`);

		const courseDiv = document.createElement('div');
		courseDiv.className = 'course-item';
		courseDiv.innerHTML = `
        <h3>${course.title}</h3>
        <div class="product-card">
          <img src="${
						course.imageUrl
					}" width="360px" height="360px" loading="lazy">
        </div>
        <div class="infoText">
          <div>Course Number: ${course.courseNumber}</div>
          <div>Duration: ${course.duration}</div>
          <div>Start Date: ${course.startDate}</div>
          <div>Available online: ${course.onlineCourse ? 'yes' : 'no'}</div>
          <div>Available on site: ${course.onSite}</div>
          <div>Cost: ${course.cost}</div>    
          <button id="book-${
						course.courseNumber
					}" class="book-course-btn">Book Course</button>
        </div>`;
		courseListDiv.appendChild(courseDiv);
	}

	courseListDiv.addEventListener('click', function (event) {
		if (event.target && event.target.classList.contains('book-course-btn')) {
			window.location.href = 'signUpPage.html';
		}
	});

	loadCourses();
};
