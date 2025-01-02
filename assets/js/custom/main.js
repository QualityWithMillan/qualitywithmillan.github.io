var siteUrl = document.getElementById('site-url').getAttribute('data-site-url');

//formatter
let toolBox1 = document.getElementById("text-format");
toolBox1.addEventListener("click", launchTextFormatter);

// coinFlip 
let coinFlip = document.getElementById("coin-flip");
coinFlip.addEventListener("click", launchcoinFlip);


// events
let eventsSpeaking = document.getElementById("events-speaking");
eventsSpeaking.addEventListener("click", launchcoinEvents);



function launchTextFormatter() {
  // window.open("https://qualitywithmillan.github.io/format/")
  // Get the site URL from the data attribute
  var siteUrl = document.getElementById('site-url').getAttribute('data-site-url');

  // Now you can use the siteUrl variable in your JavaScript code
  window.open(siteUrl + '/format/', '_blank');
}

function launchcoinFlip() {
  // Now you can use the siteUrl variable in your JavaScript code
  window.open(siteUrl + '/coin-flip/', '_blank');
}

function launchcoinEvents() {
  // Now you can use the siteUrl variable in your JavaScript code
  window.open(siteUrl + '/events/', '_blank');
}

