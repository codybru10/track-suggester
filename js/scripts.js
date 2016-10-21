
var survey = function(answer){
  debugger;
  if (answer < 9){
    return "Ruby";
  } else if (answer > 8 && answer < 12){
    return "C#";
  } else if (answer > 11){
    return "Design";
  }
}


$(document).ready(function(){
  $("form").submit(function(event){
  debugger;
  var name = $("input#name").val();
  var q1 = parseInt($("#q1").val());
  var q2 = parseInt($("#q2").val());
  var q3 = parseInt($("#q3").val());
  var q4 = parseInt($("#q4").val());
  var q5 = parseInt($("#q5").val());
  var result = q1 + q2 + q3 + q4 + q5

  var answer = survey(result);

  $(".read").text(answer);

  $(".name").text(name);
  $("#confirm").show();
  event.preventDefault();
  });
});
