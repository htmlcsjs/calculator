var commandStr = "";
var clearNext = false
var inputNodeList = document.getElementsByClassName("input")

function clearAll() {
  commandStr = "Enter text below";
  clearNext = false;
  document.getElementById("inputBox").value = commandStr
  commandStr = "";
}

function inputEvent() {
  if (clearNext == true) {
    clearAll();
  }
  var inputText = this.textContent;
  commandStr += inputText;
  document.getElementById("inputBox").value = commandStr;
}


for (var i = 0; i < inputNodeList.length; i++) {
  inputNodeList[i].addEventListener("click", inputEvent, false);
}

document.getElementById("clear").addEventListener("click", clearAll, false);
document.getElementById("equals").addEventListener("click", function() {
  try {
    evalText = document.getElementById("inputBox").value
    inputText = eval(evalText);
    commandStr = inputText;
  } catch (e) {
    commandStr = "An error has occured";
  } finally {
    document.getElementById("inputBox").value = commandStr
    clearNext = true;
  }
}, false);
