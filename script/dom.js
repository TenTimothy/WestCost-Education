import getData from './getdata.js';

export const renderDom = async () => {
	const courseListDiv = document.getElementById('courseList');

	// Lägg till Admin-knappen här
	courseListDiv.innerHTML = `<button class="admin-btn">Admin</button>
    <button class="book-course-btn">Book Course</button>
    </div>
	<button class="enrolled-course-btn">enrolled</button>
    </div>`;

	const courseList = await getData('course');
	async function loadCourses() {
		const courseList = await getData('course');
		courseList.forEach((course) => {
			courseListDiv.innerHTML += `
                <div class="course.item">
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
                        <div>Available online: ${
													course.onlineCourse ? 'yes' : 'no'
												}</div>
                        <div>Available on site: ${course.onSite}</div>
                    </div>
					<div> Cost: ${course.cost}</div>    
                    <button id="book-${
											course.courseNumber
										}" class="book-course-btn">Book Course</button>
                </div>`;
		});
	}

	courseListDiv.addEventListener('click', function (event) {
		if (event.target && event.target.classList.contains('book-course-btn')) {
			window.location.href = 'signUpPage.html';
		} else if (event.target && event.target.classList.contains('admin-btn')) {
			window.location.href = 'admin.html';
		} else if (
			event.target &&
			event.target.classList.contains('enrolled-course-btn')
		) {
			window.location.href = 'enrolled.html';
		}
	});

	loadCourses();
};
