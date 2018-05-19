	/**
	* Author: Karanveer 101881934
	* Target: Assignment
	* Purpose: This file is for
	* Created: 26/04/18
	* Last updated: ..
	* Credits: (no credits)
	*/

	"use strict";
    function displayDetails(){
		var Student_ID = document.getElementById("Student_ID");
		var studentId=document.getElementById("getid");
		studentId.innerHTML= Student_ID.value;
		var Student_Name=document.getElementById("firstname");
		var studentName= document.getElementById("getname");
		studentName.innerHTML=Student_Name.value;
		var lastname = document.getElementById("lastname");
		var lastName=document.getElementById("lastNameS");
		lastName.innerHTML=lastname.value;
	}
	var score = 0;
	var marks=0;
	function validate(){
		var errMsg = "";
		var result = true;
	var Student_ID = document.getElementById("Student_ID").value; 
	var firstname = document.getElementById("firstname"). value;
	var lastname = document.getElementById("lastname"). value;
    var radio1 = document.getElementById("o1");
    var radio2 = document.getElementById("o2");
    var radio3 = document.getElementById("o3");
	var isOption1 = document.getElementById("Option1").checked;
	var isOption2 = document.getElementById("Option2").checked;
	var isOption3 = document.getElementById("Option3").checked;
	var isOption4 = document.getElementById("Option4").checked;
	var Q4 = document.getElementById("Q4"). value;
	var Q5 = document.getElementById("Q5"). value;
	
	
	//var getValueO3=document.getElementById("o3").value;
	
		if (!firstname.match(/^[a-zA-Z]+$/)){
		errMsg = errMsg + "your first name must only contain alpha characters\n"
		result = false;
		}
	    if(firstname == ("")){
		errMsg = errMsg + "it cant be empty\n"
		result = false;
        }
		if (!lastname.match(/^[a-zA-Z]+$/)){
		errMsg = errMsg + "Last name must contain alpha characters only\n"
		}
		
		if ((radio1=="")&&(radio2=="")&&(radio3=="")){
				   errMsg = errMsg + "please select 1 option from q1\n"
				   result = false;
        }
	/*atleast 1 option is selected */
		if (!(isOption1 || isOption2 || isOption3 || isOption4)) {
					errMsg = errMsg + "Please select one option from q3\n"
					result = false;
		}
			
	if (isNaN(Q5)){
		errMsg = errMsg + "error\	n"
		result = false;	
	
	}	else if  (Q5 < 0) {
		errMsg = errMsg + "Noobs not allowed \n"		
			result = false;
		}
		else if (Q5 >= 10000) {
			errMsg = errMsg + "now that's enough\n"
			result = false; 
		}
		
	if (errMsg != ""){
		alert(errMsg);
	}
	if (result) { storeBooking(Student_ID, firstname, lastname, radio1, radio2, radio3, isOption1, isOption2, isOption3, isOption4, Q4, Q5,score);
	}
	return result;
	}
	
	function getTime() {
		var getTime = "Unknown";
	var TimeArray = document.getElementById("Q2").getElementsByTagName("input");
	for (var i = 0; i < TimeArray.length; i++) {
		if (TimeArray[i].checked) {
			getTime = TimeArray[i].value;
		}
	}
	return getTime;
	}	
	function calcScore(){
		
		var radio3 = document.getElementById("o3");
		var isOption3 = document.getElementById("Option3");
		var Q5 = document.getElementById("Q5"). value;
	var score=0;
	if( radio3.checked ){
	   
		++score;
		marks=score;
	}

		if(isOption3.checked){
			++score;
			marks=score;
		}
		if(Q5>70)
		{
			++score;
			marks=score;
		}

		var getScore=document.getElementById("getscore");
		getScore.innerHTML=marks;
			localStorage.setItem("getmarks",marks);
			localStorage.setItem("Ques",Q5.value);
	}



	function storeBooking(Student_ID, firstname, lastname, radio1, radio2, radio3, isOption1, isOption2, isOption3, isOption4, Q4, Q5){ 	
	var Q1 = "";
	if(radio1){
		Q1 = "radio1";
		localStorage.radio1 = true;
	}
	if(radio2){
		Q1 = "radio2";
		localStorage.radio2 = true;
	}
	if(radio3){
		Q1 = "radio3";
		localStorage.radio3 = true;
	}

	var Q3 =  "";
	if(isOption1){
		Q3 = "isOption1";
		localStorage.isOption1 = true;
	}
	if(isOption2){
		Q3 = "isOption2";
		localStorage.isOption2 = true;
	}
	
	if(isOption3){
		Q3 = "isOption3";
		localStorage.isOption3 = true;
	}
	
	if(isOption4){
		Q3 = "isOption4";
		localStorage.isOption4 = true;
	}
	localStorage.Student_ID = Student_ID;
	localStorage.firstname = firstname;
	localStorage.lastname = lastname;
	localStorage.Q1 = document.getElementById("Q1").value
	localStorage.Q2 = document.getElementById("Q2").value
	localStorage.Q3 = document.getElementById("Q3").value
	localStorage.Q4 = document.getElementById("Q4").value;
	localStorage.Q5 = document.getElementById("Q5").value;

	}

	function prefill_form(){
		
	if(localStorage.Student_ID != undefined){
		document.getElementById("Student_ID").value = localStorage.Student_ID;
	}	
	if(localStorage.firstname != undefined){
		document.getElementById("firstname").value = localStorage.firstname;
	}
	if(localStorage.lastname != undefined){
		document.getElementById("lastname").value = localStorage.lastname;
	}
	if(localStorage.Option1 != undefined){
		document.getElementById("Option1").checked = localStorage.Option1;
	}
	if(localStorage.Option2 != undefined){
		document.getElementById("Option2").checked = localStorage.Option2;
	}
	if(localStorage.Option3 != undefined){
		document.getElementById("Option3").checked = localStorage.Option3;
	}
	if(localStorage.Option4 != undefined){
		document.getElementById("Option4").checked = localStorage.Option4;
	}	
	if(localStorage.Q4 != undefined){
		document.getElementById("Q4").value = localStorage.Q4;
	}
	if(localStorage.Q5 != undefined){
		document.getElementById("Q5").value = localStorage.Q5;
	}

	switch(localStorage.Q1){
		case "o1":
		document.getElementById("o1").checked = true;
		break;
		case "o2":
		document.getElementById("o2").checked = true;
		break;
		case "o3":
		document.getElementById("o3").checked = true;
		break;
	}
	}
		
		
	
	
	function init() {
				
		var regForm = document.getElementById("regForm")
		regForm.onsubmit = validate;
		prefill_form();
		displayDetails();
		calcScore();
	}

	window.onload = init;
