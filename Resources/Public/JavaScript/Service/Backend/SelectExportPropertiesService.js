define([],function(){"use strict";var e={selectedPropertiesCount:0,propertyList:[]};return e.initialize=function(){e.addEventListenerToPropertyList()},e.addEventListenerToPropertyList=function(){var t=document.querySelector(".js-in2studyfinder-property-list");t.addEventListener("click",e.togglePropertySelection)},e.togglePropertySelection=function(t){var r=t.target;"true"===r.getAttribute("data-in2studyfinder-is-selectable")&&("true"!==r.getAttribute("data-in2studyfinder-is-selected")?(e.addSelectionToProperty(r),e.addPropertyToList(r.getAttribute("data-in2studyfinder-property-path"))):(e.removeSelectionFromProperty(r),e.removePropertyFromList(r.getAttribute("data-in2studyfinder-property-path")))),e.updateSelectedPropertiesCount()},e.addSelectionToProperty=function(t){t.setAttribute("data-in2studyfinder-is-selected","true"),t.style.fontWeight="bold",e.selectedPropertiesCount++},e.removeSelectionFromProperty=function(t){t.setAttribute("data-in2studyfinder-is-selected","false"),t.style.fontWeight="normal",e.selectedPropertiesCount--},e.updateSelectedPropertiesCount=function(){var t=document.querySelector(".js-in2studyfinder-selected-properties-count");t.innerHTML=e.selectedPropertiesCount},e.addPropertyToList=function(t){e.propertyList.push(t)},e.removePropertyFromList=function(t){e.propertyList.pop(t)},e.getPropertyList=function(){return e.propertyList},e.initialize(),e});