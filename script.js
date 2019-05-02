$("button").click(function() {
    var name = $(".name").val();
    var game = $(".game").val();
    var get = $(".get").val();
    var spend = $(".spend").val();

    console.log(name);
    console.log(game);
    console.log(get);
    console.log(spend);
    $(".answer").text(name+","+" "+"your favorite game is"+" "+game+","+" "+"you get"+" "+get*120+" "+"you spend"+" "+spend*120+" "+
    "in ten years.");
});