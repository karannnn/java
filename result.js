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
function calcScore(Q1){
	var score = 0;
	if (score("o1") != -1) score =+ 0;
	if (score("o2")!= -1) score += 2;
	if (score("o3")!= -1) score += 0;
	return score;
	
}

function getScore(){
	//Var score = 0;
	
	//   (localStorage.firstname != undefined){    
		document.getElementById("confirm_name").textContent = localStorage.firstname + " " + localStorage.lastname;
		document.getElementById("confirm_Student_ID").textContent =localStorage.Student_ID;
		document.getElementById("confirm_Q1").textContent =localStorage.Q1;
		document.getElementById("confirm_Q2").textContent =localStorage.Q2;
		document.getElementById("confirm_Q3").textContent =localStorage.Q3;
		document.getElementById("confirm_Q4").textContent =localStorage.Q4;
		document.getElementById("confirm_Q5").textContent =localStorage.Q5;
		
		score = calcScore(localStorage.Q1);
		document.getElementById("confirm_score").textContent = score;
	
		document.getElementById("firstname").value = localStorage.firstname;
			
		document.getElementById("score").value = score;
	}



function cancelBooking(){
	window.location = "quiz.html";
}
function init () {
	
	//var regForm = document.getElementById("regForm");// link the variable to the HTML element
	//regForm.onsubmit = validate;          /* assigns functions to corresponding events */
	getScore();
	document.getElementById("cancelButton").onclick = cancelBooking;
	
 }

window.onload = init;
