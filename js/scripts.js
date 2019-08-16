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
    var resultInfoOptions = ["https://www.python.org/", "https://developer.apple.com/swift/", "https://www.javascript.com/", "https://docs.microsoft.com/en-us/dotnet/csharp/"]
    var result;

    if (experience === 0 && abilities <= 2) {
      result = resultOptions[0];
    } else if (experience === 1 && abilities <= 2){
      result = resultOptions[1];
    } else if (experience === 2 && abilities >= 3){
      result = resultOptions[2];
    }else {
      result = resultOptions[Math.floor(Math.random() * resultOptions.length)];
    };

    if (result === "Python"){
      $(#result-info).empty.append(<a href=resultInfoOptions[0]>resultInfoOptions[0]</a>);
    }else if (result === "Swift"){
      $(#result-info).empty.append(resultInfoOptions[1]);
    }else if (result === "JavaScript"){
      $(#result-info).empty.append(resultInfoOptions[2]);
    }else if (result === "C#"){
      $(#result-info).empty.append(resultInfoOptions[3]);
    }else {

    }
    $("#name").empty().append(name);
    $("#result").empty().append(result);
    $("#program-pair").show();

    event.preventDefault();
    });
  });
