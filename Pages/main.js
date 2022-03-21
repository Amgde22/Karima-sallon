const showcases = $(".showcase")
$(function(){

console.log("lol")
$(".showcase").each(function( index , element ){
 if (index === 0 || index === 2) {
     $(this).addClass("gomiddle")
 }
else {
    $(this).addClass("gomiddle")
}
});

// DARK MODE
$("#DMtoggle").click(function(){
    $(".DM span").toggleClass("dark") ;
    $("div.Navcontainer div").toggleClass("dark") ;
    $("#content").toggleClass("dark") ;
    $("body").toggleClass("dark") ;
    $(".makeup").toggleClass("dark")


});

});


