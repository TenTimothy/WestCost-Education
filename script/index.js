import getData from "./http.js";


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
    `
})

console.log(await getData());



// Lägga till ny DATA 
async function adData(data) {
    try {
        const url = "http://localhost:3000/course"
        const db = await fetch(url, {
            method: "POST", //add new data
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });
        const response = await db.json();

        return await response;
    } catch (error) {
        throw new Error(error);
        
    }
} 

//const obj3 = {
    //title: "title New",
    //teacher: "Teacher New"
//};

//await adData(obj3);

//console.log(await adData());


  