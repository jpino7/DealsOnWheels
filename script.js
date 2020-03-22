





// joke generator function
$("#testbtn").on("click", function () {

    // var jokeNum = $.trim($("#jokenumber").val());

    var queryUrl = "https://api.icndb.com/jokes/random/2";  //+ jokeNum
    $.ajax({
        url: queryUrl,
        method: "GET",

    }).then(function (response) {
        console.log(response)


        // for loop to append mutliple jokes
        for (var i = 0; i < response.value.length; i++) {
            $("#jokebox").append("<li>" + response.value[i].joke + "</li>");
        }




    })

})