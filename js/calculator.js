var commandStr = "";
var clearNext = false
$(".input").on("click", function() {
  if (clearNext == true) {
    commandStr = "<span class=\"gray\">Enter text below</span>"
    $("#textHolder").html(commandStr);
  }

  var inputText = $(this).text();
  commandStr += inputText;
  $("#textHolder").text(commandStr);
});
$(".clear").on("click", function() {
  commandStr = ""
  $("#textHolder").text(commandStr);
});
$(".equals").on("click", function() {

  commandStr = inputText;
  $("#textHolder").text(commandStr);
});
