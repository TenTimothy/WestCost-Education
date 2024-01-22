import getData from "./getdata.js";
import adData from "./adddata.js";


const courseListDiv = document.getElementById("courseList")

const courseList = await getData();
courseList.forEach((course) => {
    console.log(course.title);
    courseListDiv.innerHTML += `
    <h3>${course.title}</h3>
    <img src="${course.imageUrl}" width="360px" height="360px" loading="lazy">
    <div>Course Number: ${course.courseNumber}</div>
    <div>Duration: ${course.duration}</div>
    <div>Start Date: ${course.startDate}</div>
    <div>Available online: ${course.onlineCourse}</div>
    <div>Available on site: ${course.onSite}</div>
    <button id="book-${course.courseNumber}" class="book-course-btn">Book Course</button>
    `

    document.getElementById(`book-${course.courseNumber}`).addEventListener('click', function() {
   
        if (!isLoggedIn()) {
            window.location.href = 'signUpPage.html'; 
        } else {
            window.location.href = 'signUpPage.html';
        }
    });
});



console.log(await getData());



//const obj3 = {
    //title: "title New",
    //teacher: "Teacher New"
//};

//await adData(obj3);

//console.log(await adData());


  