$(document).ready(function(){
  $("form#program").submit(function(event){
    var name = $("input#name").val();

    var experience = $("input:radio[name=experience]:checked").val();
    var interests = $("select#interests").val();
    var color = $("#color").val();
    var transportation = $("input:radio[name=transportation]:checked").val();
    var abilities = $("select#abilities").val();
    var meals = $("select#meals").val();

    });

  });
