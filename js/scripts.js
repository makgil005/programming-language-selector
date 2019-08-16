$(document).ready(function(){
  $("form#program").submit(function(event){
    var name = $("input#user_name").val();

    var experience = parseInt($("input:radio[name=experience]:checked").val());
    var interests = $("select#interests").val();
    var color = $("#color").val();
    var transportation = $("input:radio[name=transportation]:checked").val();
    var abilities = $("select#abilities").val();
    var meals = $("select#meals").val();

    var resultOptions = ["Python", "Swift", "JavaScript", "C#"]
    var result;

    if (experience === 0 && abilities <= 2) {
      result = resultOptions[0];
    } else if (experience === 1 && abilities <= 2){
      result = resultOptions[1];
    } else if (experience === 2 && abilities >= 3){
      result = resultOptions[2];
    }else {
      result = resultOptions[Math.floor(Math.random() * resultOptions.length)];
    }
    $("#name").empty().append(name);
    $("#result").empty().append(result);
    $("#result-info").show();
    $("#program-pair").show();

    event.preventDefault();
    });
  });
