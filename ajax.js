function getJoke()
{
    $("#Jokebox").empty();
    console.log("getting joke");
    $.ajax({
        url: "http://api.icndb.com/jokes/random?firstName=Chuck&amp;exclude=[explicit]",
        dataType: "json",
        jsonpCallback: "cnj",
        success: function(data) {
        $("#Jokebox").append(
                             $("<p/>").text(data.value.joke),
                             );
        }
        });
}
