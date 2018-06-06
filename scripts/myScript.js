$(document).ready(function() {

  var usernames = ["stopgameru", "freecodecamp", "ESL_SC2", "cretetion", "vsl_cs",  "habathcx", "RobotCaleb", "OgamingSC2", "noobs2ninjas", "brunofin",  "comster404"]

  $.each(usernames, function(i) {

    $("#holder").append("<div class=\"well wellNumber" + i + "\"><i class=\"fa fa-spinner fa-pulse fa-3x fa-fw\"></i></div>");

    var url = 'https://wind-bow.glitch.me/twitch-api/users/' + usernames[i];
    var streamUrl = 'https://wind-bow.glitch.me/twitch-api/streams/' + usernames[i];

    $.getJSON(url, function(data, status) {
console.log(data);
      $(".wellNumber" + i).each(function() {

        if (data.error === "Not Found" || data.error === "Unprocessable Entity") {
          $(this).html(data.message);
        } else {

          //make a var online = ??

          $(this).html("<tr><td><img class=\" img-responsive img-circle\" src=\"" + data.logo + "\" alt=\"" + data.name + " logo\" /></td><td><h3>" + data.display_name + "</h3></td></tr>");

          $(this).attr("id", data.name);
        };
      });

      $.getJSON(streamUrl, function(streamData) {

        if (data.error === "Not Found" || data.error === "Unprocessable Entity") {
          //do nothing
        } else {

          $(".wellNumber" + i).wrap("<a href=\"https://www.twitch.tv/" + data.name + "\" target=\"_blank\"></a>").append("<div class=\"streamData\">Currently streaming: " + streamData.stream.game + "</div>");

        };


        $(".wellNumber" + i).each(function() {

          if (streamData.stream) {
            $(this).addClass("online");
          }
        });

        $("#all").click(function() {
          $(".well").show();
        });

        $("#on").click(function() {
          $(".well").hide();
          $(".online").show();
        });

        $("#off").click(function() {
          $(".well").show();
          $(".online").hide();
        });

        /* var txt = $("#input").val();
        $("#input").keypress(function(txt) {
          if (txt !== "") {
            $(".well").hide();
            if($(".well").attr("id").toUpperCase().indexOf(txt.toUpperCase())){
       $(this).show();

          }
        } else if (txt !== "") {
            $(".well").show();
          }

        }); */
      });

    });

  });

/* $('.well').each(function(){
  $(this).hide();
   if($(this).html().toUpperCase().indexOf(txt.toUpperCase()) != -1){
       $(this).show();
   // */

//});

  });
//});