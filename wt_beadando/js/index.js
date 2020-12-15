$(document).ready(function(){
  $("#tartalom").load("lorem.html");

  $.each($(".menuButton"), function(mbIndex, mbValue) {

      $(mbValue).click(function (event){
        event.preventDefault();
        if($(this).find('a').attr("href") == "index.html"){
          open("index.html", "_self")
        }else {
          $("#tartalom").load($(this).find('a').attr("href"));
        }
      })
  })
});
