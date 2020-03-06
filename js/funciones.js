

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
        