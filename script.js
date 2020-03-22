var save = document.querySelectorAll(".saveBtn");
var done = document.querySelectorAll(".doneBtn");
var taskNum = ["1", "2", "3", "4", "5"];

// Variable to display current date
var today = moment().format('dddd, MMMM Do YYYY, h:mm a');
console.log(today);

// Logs time to Hero area
$("#date").text(today);




//  code block to store data when pushing submit button
$(save).on("click", function () {
    var task = $(this).attr("data-task")
    var inputBox = $("#" + task);
    var details = inputBox.val();

    localStorage.setItem(task, details);


});

// added class colors based on if statement 
$(done).on("click", function () {

    console.log(done)
    $(this).addClass("complete");


});

// code block to get the stored data on page refresh
function latestInfo() {
    for (i = 0; i < taskNum.length; i++) {
        console.log(localStorage.getItem(taskNum[i]))
        $("#" + taskNum[i]).text(localStorage.getItem(taskNum[i]));

        if(null){
            $("#" + taskNum[i]).text("")
        }
    }
};
latestInfo();



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