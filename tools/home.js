function boldMe() { //f1
	//function to make the text bold using DOM method
	document.getElementById("textarea1").style.fontWeight = "bold";
}

function italicMe() {
	//function to make the text italic using DOM method
	document.getElementById("textarea1").style.fontStyle = "italic";
}

function strikeMe() { //todo
	//function to make the text strike through using DOM method
// 	document.getElementById("textarea1").style.textDecoration ="line-through";
	
	document.getElementById("textarea1").insertAdjacentHTML("beforebegin",'<s>html data</s>');
	document.getElementById("textarea1").insertAdjacentHTML("afterend",'<s>html data</s>');

}

// function f3() {
// 	//function to make the text alignment left using DOM method
// 	document.getElementById("textarea1").style.textAlign = "left";
// }

// function f4() {
// 	//function to make the text alignment center using DOM method
// 	document.getElementById("textarea1").style.textAlign = "center";
// }

// function f5() {
// 	//function to make the text alignment right using DOM method
// 	document.getElementById("textarea1").style.textAlign = "right";
// }

function upperMe() {
	//function to make the text in Uppercase using DOM method
	document.getElementById("textarea1").style.textTransform = "uppercase";
}

function lowerMe() {
	//function to make the text in Lowercase using DOM method
	document.getElementById("textarea1").style.textTransform = "lowercase";
}

function camelMe() {
	//function to make the text capitalize using DOM method
	document.getElementById("textarea1").style.textTransform = "capitalize";
}

function clearMe() {
	//function to make the text back to normal by removing all the methods applied
	//using DOM method
	document.getElementById("textarea1").style.fontWeight = "normal";
	document.getElementById("textarea1").style.textAlign = "left";
	document.getElementById("textarea1").style.fontStyle = "normal";
	document.getElementById("textarea1").style.textTransform = "capitalize";
	document.getElementById("textarea1").value = " ";
}
