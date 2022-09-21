function CheckStatus() {
	// var box1, box2, box3;
	// var box1 = document.getElementsById("box1").value;
	// var box2 = document.getElementsById("box2").value;
	// var box3 = document.getElementsById("box3").value;
	// // // var b4 = document.getElementsById("box4").value;
	// // // var b6 = document.getElementsById("box6").value;
	// // // var b7 = document.getElementsById("box7").value;
	// // // var b8 = document.getElementsById("box8").value;
	// // // var b9 = document.getElementsById("box9").value;

	// if ((box1 == "X") && (box2 == "X") && (box3 == "X")){
	// 	document.getElementById('result').innerHTML = "yaay";
	// 	document.getElementById('result').innerHTML = "yaay";
	// }
	if (flag)
		document.getElementById('result').innerHTML = "Player X turn";
	else
		document.getElementById('result').innerHTML = "Player O turn";
}

flag = 1

function BoxOne() {
	if (flag){
		document.getElementById("box1").value = 'X';
		document.getElementById("box1").disabled = true;
		flag = 0;
	}
	else{
		document.getElementById("box1").value = 'O';
		document.getElementById("box1").disabled = true;
		flag = 1;
	}
}

function BoxTwo() {
	if (flag){
		document.getElementById("box2").value = 'X';
		document.getElementById("box2").disabled = true;
		flag = 0;
	}
	else{
		document.getElementById("box2").value = 'O';
		document.getElementById("box2").disabled = true;
		flag = 1;
	}
}

function BoxThree() {
	if (flag){
		document.getElementById("box3").value = 'X';
		document.getElementById("box3").disabled = true;
		flag = 0;
	}
	else{
		document.getElementById("box3").value = 'O';
		document.getElementById("box3").disabled = true;
		flag = 1;
	}
}

function BoxFour() {
	if (flag){
		document.getElementById("box4").value = 'X';
		document.getElementById("box4").disabled = true;
		flag = 0;
	}
	else{
		document.getElementById("box4").value = 'O';
		document.getElementById("box4").disabled = true;
		flag = 1;
	}
}

function BoxFive() {
	if (flag){
		document.getElementById("box5").value = 'X';
		document.getElementById("box5").disabled = true;
		flag = 0;
	}
	else{
		document.getElementById("box5").value = 'O';
		document.getElementById("box5").disabled = true;
		flag = 1;
	}
}

function BoxSix() {
	if (flag){
		document.getElementById("box6").value = 'X';
		document.getElementById("box6").disabled = true;
		flag = 0;
	}
	else{
		document.getElementById("box6").value = 'O';
		document.getElementById("box6").disabled = true;
		flag = 1;
	}
}

function BoxSeven() {
	if (flag){
		document.getElementById("box7").value = 'X';
		document.getElementById("box7").disabled = true;
		flag = 0;
	}
	else{
		document.getElementById("box7").value = 'O';
		document.getElementById("box7").disabled = true;
		flag = 1;
	}
}

function BoxEight() {
	if (flag){
		document.getElementById("box8").value = 'X';
		document.getElementById("box8").disabled = true;
		flag = 0;
	}
	else{
		document.getElementById("box8").value = 'O';
		document.getElementById("box8").disabled = true;
		flag = 1;
	}
}

function BoxNine() {
	if (flag){
		document.getElementById("box9").value = 'X';
		document.getElementById("box9").disabled = true;
		flag = 0;
	}
	else{
		document.getElementById("box9").value = 'O';
		document.getElementById("box9").disabled = true;
		flag = 1;
	}
}