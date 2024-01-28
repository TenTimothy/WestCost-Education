import { renderDom } from './dom.js';
import { renderCourseDetails } from './courseDetails.js';

const locationPath = location.pathname;
if (locationPath === '/courseDetails.html') {
	renderCourseDetails();
} else {
	renderDom();
}
