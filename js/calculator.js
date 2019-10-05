var commandStr = "";
var clearNext = false
function clearAll() {
  commandStr = "Enter text below";
  clearNext = false;
  document.getElementById("inputBox").value = commandStr
  commandStr = "";
}
$(".input").on("click", function() {
  if (clearNext == true) {
    clearAll();
  }
  var inputText = $(this).text();
  commandStr += inputText;
  document.getElementById("inputBox").value = commandStr
});
$(".clear").on("click", clearAll);
$(".equals").on("click", function() {
  try {
    evalText = document.getElementById("inputBox").value
    inputText = eval(evalText);
    commandStr = inputText;
  } catch (e) {
    commandStr = "An error has occurd";
  } finally {
      document.getElementById("inputBox").value = commandStr
      clearNext = true;
  }
});
