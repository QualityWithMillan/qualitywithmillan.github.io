var siteUrl = document.getElementById('site-url').getAttribute('data-site-url');

//formatter
let toolBox1 = document.getElementById("text-format");
toolBox1.addEventListener("click", launchTextFormatter);

// coinFlip 
let coinFlip = document.getElementById("coin-flip");
coinFlip.addEventListener("click", launchcoinFlip);

// events
let eventsSpeaking = document.getElementById("events-speaking");
eventsSpeaking.addEventListener("click", launchEvents);

// co-authors
let coAuthors = document.getElementById("co-authors");
coAuthors.addEventListener("click", launchCoAuthors);


function launchTextFormatter() {
  // window.open("https://qualitywithmillan.github.io/format/")
  window.open(siteUrl + '/format', '_blank');
}

function launchcoinFlip() {
  window.open(siteUrl + '/coin-flip', '_blank');
}

function launchEvents() {
  window.open(siteUrl + '/events', '_blank');
}

function launchCoAuthors() {
  window.open(siteUrl + '/co-authors', '_blank');
}

