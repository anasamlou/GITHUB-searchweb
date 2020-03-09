$(document).ready(function(){
  jQuery.noConflict();
  console.log("Hola m!");
  var url = "https://api.github.com/users/anasamlou";
  $("#textboxEntry").keypress(function (event) {
    if (event.key === "Enter") {
        $("#boton").click();
    }
  }); 

  $("#boton").click(function(){
    id = $("#textboxEntry").val();
    console.log(id);
    var url = "https://api.github.com/users/"+id;

    requestJSON(url, function (json) {
      username = json.login;
      followers = json.followers;
      repos = json.repos_url;
      var output = {username,followers,repos};
      $('#dataid').html("<p>"+output.username+"</p>");
      $('#URLrepositories').html("<p>"+output.repos+"<p>");
      $('#followers').html("<p>"+output.followers+"<p>");
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
        

      });
      
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

    
    
    
    // var getJSON = function(url, callback) {
    //   var xhr = new XMLHttpRequest();
    //   xhr.open('GET', url, true);
    //   xhr.responseType = 'json';
    //   xhr.onload = function() {
    //     var status = xhr.status;
    //     if (status === 200) {
    //       callback(null, xhr.response);
    //       console.log(xhr.response);
    //     } else {
    //       callback(status, xhr.response);
    //     }
    //   };
    //   xhr.send();
    // };
    
    
    
    // document.getElementById("dataid").innerHTML= username;

