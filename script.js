// Button Variables
var save = document.querySelectorAll(".saveBtn");
var done = document.querySelectorAll(".doneBtn");
var clear = document.getElementById("deleteBtn");
var addNew = document.getElementById("addBtn")
var taskNum = ["1", "2", "3", "4", "5"];
var completeNum = ["done1", "done2", "done3", "done4", "done5"]

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



// button to clear the local storage
$(clear).on("click", function () {
    localStorage.clear()
});

// button to mark if task is completed
$(done).on("click", function (event) {
    event.preventDefault();
    var taskComplete = true;
    console.log(taskComplete)

    // changing the class color once clicked
    if (taskComplete == true) {
        $(this).addClass("complete");
    };

    // trying to set a function call when all bottons are true
    for (i = 0; i < completeNum.length; i++) {
        var finished = completeNum[i];
        if ("#" + completeNum[i] == true) {
            console.log("all finished");
        }
    }
});



// code block to get the stored data on page refresh
function latestInfo() {
    for (i = 0; i < taskNum.length; i++) {
        console.log(localStorage.getItem(taskNum[i]))
        $("#" + taskNum[i]).text(localStorage.getItem(taskNum[i]));

        if (taskNum[i] == "") {
            $("#" + taskNum[i]).text("")
        }
    }
};
latestInfo();


// attempt to make new task blocks on click
// $(addNew),on("click",function(){

//     $("#tasksection").append("");

// });


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

// Inspirational Quotes Api Click Function

$("#testbtn2").on("click", function (event) {
    event.preventDefault();

    $.ajax({
        async: true,
        crossDomain: true,
        url: "https://type.fit/api/quotes",
        method: "GET",

    }).then(function (response) {
        const array = JSON.parse(response);
        console.log(array);

        var randomQuote = Math.floor(Math.random() * (array.length - 1));
      
            console.log(array[randomQuote].text);
            $("#jokebox").text("\"" + array[randomQuote].text + "\"");

            console.log(array[randomQuote].author);
            $("#quoteAuthor").text("-" + array[randomQuote].author);
        
            
           
    })

    
})
// Advice Slip click function

// $("#testbtn2").on("click", function (event) {
//     event.preventDefault();

//     $.ajax({
//         url: "https://api.adviceslip.com/advice",
//         method: "GET",

//     }).then(function (response) {
//         var adviceText= JSON.parse(response);
       
//         $("#jokebox").text(adviceText.slip.advice);
//         console.log(adviceText);

        


//     })

    
// })