var myJoke;
function getJoke()
{
    $("#Jokebox").empty();
    $("#Gif").empty();
    console.log("getting joke");
    $.ajax({
        url: "http://api.icndb.com/jokes/random?firstName=Chuck&amp;exclude=[explicit]",
        dataType: "json",
        jsonpCallback: "cnj",
        success: function(data) {
        var joke = data.value.joke.replace(/&quot;/g,'"');
        if (joke.includes("sex"||"gay")) {
            getJoke();
            return;
        } else {    
            
        }
        myJoke = joke;
        getGif();
        console.log("Here is my Joke " + myJoke);
        $("#Jokebox").append(
            $("<p/>").text(joke),
                             );
        }
        });  
}

function getGif()
{ 
    joke = myJoke.replace(/ +/g, "-");
    console.log("Joke " + myJoke);
    $.ajax({
            url: "http://api.giphy.com/v1/gifs/search?q=" + "Chuck-Norris" +  "&api_key=dc6zaTOxFJmzC",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(response) {
          
           var imgURL = response.data[getRandomInt(0,response.data.length)].images.fixed_height.url;
            console.log("ImgURL: " + imgURL);

                $("#Gif").append(
                   "<img src=" + imgURL + "width=\"480\" height=\"262\"></img>"
                    );
            }
        });
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
