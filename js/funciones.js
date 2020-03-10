$(document).ready(function(){
  jQuery.noConflict();
  console.log("Hola m!");
  $("#textboxEntry").keypress(function (event) {
    if (event.key === "Enter") {
        $("#GObutton").click();
    }
  }); 

  $("#GObutton").click(function(){
    id = $("#textboxEntry").val();
    console.log(id);
    var url = "https://api.github.com/users/"+id;

    requestJSON(url, function (json) {
      username = json.login;
      followers = json.followers;
      repos = json.repos_url;
      serialID = json.id;
      foto = json.avatar_url;
      var output = {username,followers,repos,serialID};
      $('#dataid').html("<p>"+output.username+"</p>");
      $('#URLrepositories').html("<p>"+output.repos+"<p>");
      $('#followers').html("<p>"+output.followers+"<p>");
      $('#serialID').html("<p>"+output.serialID+"<p>");
      $("#foto").attr("src",foto);
      $("#foto").show();
      var namerepo = [];
      $.getJSON(repos, function (result) {
        $.each(result, function (i, field) {
            var number = i + 1;
            namerepo.push(result[i].name);
            //console.log(number+namerepo); 
           $('#repositories').html("<p>"+namerepo+"</p>");
           $('#numrepos').html("Total repos: "+i)
          
          });

        });
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const image = document.getElementById('source');

        image.addEventListener('load', e => {
        ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
        });
      });
        

    });



    $("#remove").click(function () {
      $("#dataid").empty()
      $("#repositories").empty()
      $("#followers").empty()
      $("#foto").hide()
    });
      

    $("#buttonFB").click(function(){
      $("#buttonFB").attr("href", "https://www.facebook.com");
    });
    $("#buttonTW").click(function(){
      $("#buttonTW").attr("href", "https://www.twitter.com");
    });
    $("#buttonLI").click(function(){
      $("#buttonLI").attr("href", "https://www.linkedin.com");
    });
                 



  
    function requestJSON(url,callback) {
      $.ajax({
          url: url,
          complete: function (xhr) {
              callback.call(null, xhr.responseJSON);
          }
      });
      

    }

  });     

