import getData from "./getdata.js";
import adData from "./adddata.js";


const courseListDiv = document.getElementById("courseList")

const courseList = await getData();
async function loadCourses() {
    const courseList = await getData();
    courseList.forEach((course) => {
        courseListDiv.innerHTML += `
        <div class="course.item">
            <h3>${course.title}</h3>
            <div class="product-card">
                <img src="${course.imageUrl}" width="360px" height="360px" loading="lazy">
            </div>
            <div class="infoText">
                <div>Course Number: ${course.courseNumber}</div>
                <div>Duration: ${course.duration}</div>
                <div>Start Date: ${course.startDate}</div>
                <div>Available online: ${course.onlineCourse}</div>
                <div>Available on site: ${course.onSite}</div>
            </div>    
            <button id="book-${course.courseNumber}" class="book-course-btn">Book Course</button>
        </div>`;
    });
}

courseListDiv.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains("book-course-btn")) {
        window.location.href = 'signUpPage.html';
    }
});

loadCourses();




console.log(await getData());



//const obj3 = {
    //title: "title New",
    //teacher: "Teacher New"
//};

//await adData(obj3);

//console.log(await adData());


  