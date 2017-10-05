var myJoke
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
    //var joke = $("#Jokebox");
   // console.log("Joke2: " + joke);
    joke = myJoke.replace(/ +/g, "-");
    var str = "Hello world!";
    //var searchString = myJoke.substring(1, (myJoke.length)/2);
    console.log("Joke " + myJoke);
    $.ajax({
            url: "http://api.giphy.com/v1/gifs/search?q=" + "Chuck-Norris" +  "&api_key=dc6zaTOxFJmzC",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(response) {
                //var giphyURL = 
                //Add random for array.length

           var imgURL = response.data[getRandomInt(0,response.data.length)].images.fixed_height.url;
            console.log("ImgURL: " + imgURL);
                //debugger

                $("#Gif").append(
                   "<img src=" + imgURL + "width=\"480\" height=\"262\"></img>"
                    );
                    // "<iframe src=" + imgURL + "width=\"480\" height=\"262\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>"
               // <iframe src="https://giphy.com/embed/Lx8lyPHGfdNjq" width="480" height="262" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/guy-chuck-punch-Lx8lyPHGfdNjq">via GIPHY</a></p>
                //$("#img_gif").attr("src", response.data[0].embed_url);
            }
        });
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
