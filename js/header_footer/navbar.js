//  only execute when the document is ready
$(document).ready(function(){
    $(".navButton").click(function(){
        if($(".navButton").text() == "☰"){
        $(".navButton").text("🞬");
        }else{
        $(".navButton").text("☰");
        }
      
      $("li").toggle("slow");
    });  
});