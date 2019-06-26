var string = "";
$(".input").on("click", function() {
  var inputText = $(this).text();
  string += inputText
  $("#textHolder").text(string)
});
