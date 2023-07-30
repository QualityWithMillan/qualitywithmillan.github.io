let toolBox1 = document.getElementById("tool-box1");
toolBox1.addEventListener("click", launchTextFormatter);

function launchTextFormatter() {
  // window.open("https://qualitywithmillan.github.io/tools/format/")
  // Get the site URL from the data attribute
  var siteUrl = document.getElementById('site-url').getAttribute('data-site-url');

  // Now you can use the siteUrl variable in your JavaScript code
  window.open(siteUrl + '/tools/format/', '_blank');

}

