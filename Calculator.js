let outputScreen = document.getElementById("outputscreen");

function display(num){
	debugger
	outputScreen.value +=num;
}

function Calculate(){
 	try{
		outputScreen.value = eval(outputScreen.value);
	}
	catch(err){
		alert("Invalid Number");
	}
}

function clear(){
	outputScreen.value = "";
}

function delete(){
	outputScreen.value = outputScreen.value.slice(0,-1);
}