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
  try {
    inputText = eval(commandStr);
      commandStr = inputText;
  } catch (e) {
    commandStr = "An error has occurd";
  } finally {
      $("#textHolder").text(commandStr);
  }
});
