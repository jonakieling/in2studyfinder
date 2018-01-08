define(["TYPO3/CMS/In2studyfinder/Utility/UiUtility","TYPO3/CMS/In2studyfinder/Utility/AjaxUtility"],function(e,t){"use strict";var n={selectedCoursesCount:0,coursesList:[]};return n.initialize=function(){n.addEventListenerToPropertyList(),n.addPaginationEventListener()},n.addPaginationEventListener=function(){var e=document.querySelector(".js-in2studyfinder-pagebrowser");e.addEventListener("click",n.callPagination)},n.callPagination=function(e){e.preventDefault();var t=e.target.href;"undefined"!=typeof t&&n.paginationAjaxCall(t)},n.paginationAjaxCall=function(e){t.ajaxCall(e,n.onPaginationCallStart,n.onPaginationCallSuccess)},n.onPaginationCallStart=function(){e.toggleClassForElement(document.querySelector(".in2js-in2studyfinder-loader"),"in2studyfinder-loader--active")},n.onPaginationCallSuccess=function(t){var i=document.createElement("div"),o="js-in2studyfinder-select-course-container";i.innerHTML=t.responseText,document.querySelector("."+o).innerHTML=i.querySelector("."+o).innerHTML,n.initialize(),n.updateSelectedCoursesCount(),e.toggleClassForElement(document.querySelector(".in2js-in2studyfinder-loader"),"in2studyfinder-loader--active")},n.addEventListenerToPropertyList=function(){var e=document.querySelector(".js-in2studyfinder-course-list");e.addEventListener("click",n.toggleCourseSelection)},n.toggleCourseSelection=function(e){var t=e.target;t.classList.contains("js-in2studyfinder-select-course")&&(t.checked?(n.addCourseToList(t.value),n.selectedCoursesCount++):(n.removeCourseFromList(t.value),n.selectedCoursesCount--),n.updateSelectedCoursesCount())},n.addCourseToList=function(e){n.coursesList.push(e)},n.removeCourseFromList=function(e){n.coursesList.push(e)},n.updateSelectedCoursesCount=function(){var e=document.querySelector(".js-in2studyfinder-selected-courses-count");e.innerHTML=n.selectedCoursesCount},n.getCourseList=function(){return n.coursesList},n.initialize(),n});