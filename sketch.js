var serial; //variable to hold an instance of the serial port library
var portName = '/dev/cu.usbmodem1411'; //fill in with YOUR port

function setup() {
  createCanvas(650, 300);

  serial = new p5.SerialPort(); //a new instance of serial port library

  //set up events for serial communication
  serial.on('connected', serverConnected);
  serial.on('open', portOpen);
  serial.on('data', serialEvent);
  serial.on('error', serialError);
  serial.on('close', portClose);

  //open our serial port
  serial.open(portName);

  //let's figure out what port we're on - useful for determining your port
  // serial.on('list', printList); //set a callback function for the serialport list event
  // serial.list(); //list the serial ports
}

function draw() {
  background('white');
  fill('black');
  rect(50,0,50,200);
  rect(150,0,50,200);
  rect(350,0,50,200);
  rect(450,0,50,200);
  rect(550,0,50,200);
  line(75,0,75,300);
  line(175,0,175,300);
  line(275,0,275,300);
  line(375,0,375,300);
  line(475,0,475,300);
  line(575,0,575,300);
  textSize(48);
  text("S",20, 265);
  text("D",110, 265);
  text("F",215, 265);
  text("G",305, 265);
  text("H",410, 265);
  text("J",510, 265);
  text("K",600, 265);
}

function keyPressed() {
      serial.write(key);             
      console.log(key);
    // }
}


//all my callback functions are down here:
//these are useful for giving feedback

function serverConnected(){
	console.log('connected to the server');
}

function portOpen(){
  console.log('the serial port opened!');
}

//THIS IS WHERE WE RECEIVE DATA!!!!!!
//make sure you're reading data based on how you're sending from arduino
function serialEvent(){
	//receive serial data here
  
}

function serialError(err){
  console.log('something went wrong with the port. ' + err);
}

function portClose(){
  console.log('the port was closed');
}

// get the list of ports:
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 print(i + " " + portList[i]);
 }
}