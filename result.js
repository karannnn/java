/**
* Author: karanveer singh
* Target: assignment
* Purpose: Load data from session storage and submit to server
* Created: 26/04/2018
* Last updated: 
* 
*/
"use strict";

function validate(){
	var errMsg = "";								
	var result = true;						
	return result;    
}

//This should be really be calculated securely on the server! 


function getScore(){
	   
		document.getElementById("confirm_name").textContent = localStorage.firstname + " " + localStorage.lastname;
		document.getElementById("confirm_Student_ID").textContent =localStorage.Student_ID;
		document.getElementById("confirm_Q1").textContent =localStorage.Q1;
		document.getElementById("confirm_Q2").textContent =localStorage.Q2;
		document.getElementById("confirm_Q3").textContent =localStorage.Q3;
		document.getElementById("confirm_Q4").textContent =localStorage.Q4;
		document.getElementById("confirm_Q5").textContent =localStorage.Q5;
		
				document.getElementById("firstname").value = localStorage.firstname;


	}
function scr(){
	var getmrk=localStorage.getItem("getmarks");
	var strmarks=document.getElementById("confirm_score");
	strmarks.innerHTML=getmrk;
	var name=document.getElementById("confirm_Q5").value=localStorage.Q5;
	//var name=localStorage.Student_ID;
	console.log(localStorage.Q5);
}
function getq1(){

}

function cancelBooking(){
	window.location = "quiz.html";
}
function init () {
	
	//var regForm = document.getElementById("regForm");// link the variable to the HTML element
	//regForm.onsubmit = validate;          /* assigns functions to corresponding events */
	getScore();
	document.getElementById("cancelButton").onClick = cancelBooking;
scr();
 }

window.onload = init;
