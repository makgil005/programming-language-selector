$(document).ready(function(){
  $("form#program").submit(function(event){
    var name = $("input#name").val();

    var experience = $("input:radio[name=experience]:checked").val();
    var interests = $("select#interests").val();
    var transportation = $("input:radio[name=transportation]:checked").val();
    $(':checkbox').map(function(){
      return this.id;
    }); alert(transportation).get().join(); 

    //var expectations = $('input:checked')
  });
  //alert(transportation);
});
