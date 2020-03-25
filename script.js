// Button Variables
var save = document.querySelectorAll(".saveBtn");
var done = $(".doneBtn");
var clear = document.getElementById("deleteBtn");
var addNew = document.getElementById("addBtn")
var taskNum = ["1", "2", "3", "4", "5"];
var completeNum = ["done1", "done2", "done3", "done4", "done5"]
var taskCount = 5;


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
$("#tasksection").on("click", done, function (event) {
    event.preventDefault();
    var taskComplete = true;
    // console.log(event.target)
    var target = $(event.target)
    if (target.is(".doneBtn")){
        target.addClass("complete")
        target.attr("data-complete", "true")
    };



    // changing the class color once clicked
    // if (taskComplete == true) {
    //     $(this).addClass("complete");
    // };
    // (event.target).addClass("complete");
    console.log($(this));

    // trying to set a function call when all buttons are true
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
        var data = localStorage.getItem(taskNum[i])
        if (data == null){
            $("#" + taskNum[i]).text("")
        } else {
            $("#" + taskNum[i]).text(localStorage.getItem(taskNum[i]));

        }

        // if (taskNum[i] == "") {
        //     $("#" + taskNum[i]).text("")
        // }
    }
};
latestInfo();


// attempt to make new task blocks on click
$(addNew).on("click",function(){
    if(taskCount === 10){
        return;
    }
    taskCount++;
// Adding New Tasks
    var newTaskLine = $("<div>");
    newTaskLine.attr("id", "tasks");
    newTaskLine.addClass("columns");
// Style for Tasks
    var styleDiv = $("<div>");
    styleDiv.css("font-weight", "bolder");
    styleDiv.text(taskCount + ".");
    newTaskLine.append(styleDiv);
// Select Text Area
    var addTextArea = $("<textarea>");
    addTextArea.attr("id", taskCount);
    addTextArea.addClass("input");
    addTextArea.attr("type", "text");
    addTextArea.attr("placeholder", "Text Input");
    newTaskLine.append(addTextArea);
// Save Button
    var newAddBtn = $("<button>");
    newAddBtn.addClass("saveBtn button");
    newAddBtn.attr("data-task", taskCount);
    newAddBtn.text("Save");
    newTaskLine.append(newAddBtn);
// Done Button
    var newDoneBtn = $("<button>");
    newDoneBtn.attr("id", "done" + taskCount);
    newDoneBtn.addClass("doneBtn button");
    newDoneBtn.css("margin-right", "10px")
    newDoneBtn.text("Done");
    newTaskLine.append(newDoneBtn);



    $("#tasksection").append(newTaskLine);

});



/*   <div id="tasks" class="columns">
                    <div style="font-weight: bolder;">1.</div>
                    <textarea id="1" class="input" type="text" placeholder="Text input"></textarea>
                    <button class="saveBtn button" data-task="1">Save</button>
                    <button id="done1" class="doneBtn button" style="margin-right: 10px; ">Done</button>
                </div>
*/


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
            $("#jokebox").text(response.value[i].joke );
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