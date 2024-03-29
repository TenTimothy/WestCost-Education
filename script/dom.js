import getData from './getdata.js';

export const renderDom = async () => {
	const headerNav = document.getElementById('headerNav');
	const courseListDiv = document.getElementById('courseList');

	const adminBtn = document.createElement('button');
	adminBtn.className = 'admin-btn';
	adminBtn.textContent = 'Admin';
	adminBtn.onclick = () => (window.location.href = 'enrolledStudent.html');

	const bookCourseBtn = document.createElement('button');
	bookCourseBtn.className = 'book-course-btn';
	bookCourseBtn.textContent = 'Book Course';
	bookCourseBtn.onclick = () => (window.location.href = 'signUpPage.html');

	headerNav.appendChild(adminBtn);
	headerNav.appendChild(bookCourseBtn);

	async function loadCourses() {
		const courses = await getData('course');
		courses.forEach((course) => {
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
          <button id="book-${
						course.courseNumber
					}" class="book-course-btn">Book Course</button>
			<a href="courseDetails.html?id=${
				course.id
			}" class="more-detail-btn">More details</a>			
        </div>`;
			courseListDiv.appendChild(courseDiv);
		});
	}

	courseListDiv.addEventListener('click', function (event) {
		if (event.target && event.target.classList.contains('book-course-btn')) {
			window.location.href = 'signUpPage.html';
		}
	});

	loadCourses();
};
