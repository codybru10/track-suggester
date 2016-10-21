
$(document).ready(function(){
  $("form").submit(function(event){
  var q1 = parseInt($("#q1").val());
  var q2 = parseInt($("#q2").val());
  var q3 = parseInt($("#q3").val());
  var q4 = parseInt($("#q4").val());
  var q5 = parseInt($("#q5").val());
  var result = q1 + q2 + q3 + q4 + q5

  if (result < 5){
    $(".ruby").show();
  } else if (result > 4 && result < 8){
    $(".c").show();
  } else if (result > 7){
    $(".design").show();
  }

  event.preventDefault();
  });


});
