

$(document).ready(function(){
    $("button").click(function(){
      $(this).get();
    });
  });
texto = textboxentry 
url = "https://api.github.com/users/"+texto
  $.getJSON(url, function(data) {
        
        var text = `login: ${data.login}<br>
                    public_repos: ${data.public_repos}<br>
                    followers: ${data.followers}`
                    
        
                    $(".outname").html(text.login);
                    $(".followers").html(text.followers);
  }
$(document).ready(function() {
  $("#datos").hide();
  $("#submit").click(function () {
      $("#dataname").empty()
      $("#dataid").empty()
      $("#datafollowing").empty()
      $("#datafollowers").empty()
      $("#datalocation").empty()
      $("#datamail").empty()
      $("#foto").empty()
      var contentToRemove = document.querySelectorAll("#lineatabla");
      $(contentToRemove).remove();
      $.get("https://api.github.com/users/" + $("#gitname").val(), function (data) {
          $("#datos").show();0
          $("#dataname").append(data.name)
          $("#dataid").append(data.id)
          $("#datafollowing").append(data.following)
          $("#datafollowers").append(data.followers)
          $("#datalocation").append(data.location)
          $("#datamail").append(data.email)
          $("#foto").attr("src",data.avatar_url)
          $.get(data.repos_url, function (datarepos) {
              var content = "<tbody>"
              for(i=0; i<parseInt(data.public_repos); i++){
                  content += '<tr id ="lineatabla"><td>' + datarepos[i].name + '</td>'+'<td>' + datarepos[i].language +'</td><td>' + datarepos[i].html_url +'</td></tr>';
              }
              content += "</tbody>"

              $('#tablarepos').append(content);
          });
      });
  });
  $("#remove").click(function () {
      $("#datos").hide();
      $("#dataname").empty()
      $("#dataid").empty()
      $("#datafollowing").empty()
      $("#datafollowers").empty()
      $("#datalocation").empty()
      $("#datamail").empty()
      $("#foto").empty()
      var contentToRemove = document.querySelectorAll("#lineatabla");
      $(contentToRemove).remove();
  });
});

