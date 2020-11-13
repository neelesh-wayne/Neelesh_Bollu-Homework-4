// this file will send input data to server

//sendData function shall be called when submit button is clicked
function sendData(){
	var data;
	if(document.getElementById(food)){
		data = {id: document.getElementById(id), name: document.getElementById(name), price: document.getElementById(price), calories: document.getElementById(cal), stadate: document.getElementById(sdate), enddate: document.getElementById(edate)};
		
		//call function at server to make a food object
	}
	if(document.getElementById(drink)){
		data = {id: document.getElementById(id), name: document.getElementById(name), price: document.getElementById(price), calories: document.getElementById(cal), stadate: document.getElementById(sdate), enddate: document.getElementById(edate), size document.getElementById(size)};
		
		//call function at server to make a drink object
	}
	// send the "data" variable to the server (other members are working on how to send to server, I do not know how yet)
}