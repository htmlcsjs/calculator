var commandStr = "";
var clearNext = false
function clearAll() {
  commandStr = "Enter text below";
  clearNext = false;
  $("#textHolder").html(commandStr);
  commandStr = "";
}
$(".input").on("click", function() {
  if (clearNext == true) {
    clearAll();
  }
  var inputText = $(this).text();
  commandStr += inputText;
  $("#textHolder").text(commandStr);
});
$(".clear").on("click", clearAll);
$(".equals").on("click", function() {
  inputText = eval(commandStr);
  commandStr = inputText;
  $("#textHolder").text(commandStr);
});
