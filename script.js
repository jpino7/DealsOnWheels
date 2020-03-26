
$(document).ready(function () {



    // Button Variables
    var joke = document.getElementById("joke");
    var quote = document.getElementById("quote");
    var save = document.querySelectorAll(".saveBtn");
    var done = $(".doneBtn");
    var clear = document.getElementById("deleteBtn");
    var addNew = document.getElementById("addBtn")
    var taskNum = ["1", "2", "3", "4", "5"];
    var completeNum = [document.querySelectorAll(".doneBtn")];
    var taskCount = 5;

    // Greensock Logo Animation
    gsap.to($("#logo"), {
        rotation: 360, height: 100, width: 100, duration: 12
    });

    // Variable to display current date
    var today = moment().format('dddd, MMMM Do YYYY, h:mm a');
    console.log(today);
    // Logs time to Hero area
    $("#date").text(today);


    // modal function buttons to choose joke or quote
    $(joke).on("click", function () {
        joke = true;
        $("#modal").removeClass("is-active");

    });
    // making the modal close when choice is made
    $(quote).on("click", function () {
        joke = false;
        $("#modal").removeClass("is-active");

    });


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
        var target = $(event.target)
        if (target.is(".doneBtn")) {
            target.addClass("complete")
            target.attr("data-complete", "true")
        };

        console.log($(done).attr("data-complete"));

        for (i = 0; i < completeNum.length; i++) {

            if ($(completeNum[i]).attr("data-complete") == "true") {
                if (joke == true) {
                    randJoke()
                }
                else {
                    randQuote()
                }
            }
            console.log($(completeNum[i]).attr("data-complete"));

        }


    });



    // code block to get the stored data on page refresh
    function latestInfo() {
        for (i = 0; i < taskNum.length; i++) {
            console.log(localStorage.getItem(taskNum[i]))
            var data = localStorage.getItem(taskNum[i])
            if (data == null) {
                $("#" + taskNum[i]).text("")
            } else {
                $("#" + taskNum[i]).text(localStorage.getItem(taskNum[i]));

            }

        }
    };
    latestInfo();


    // attempt to make new task blocks on click
    $(addNew).on("click", function () {
        if (taskCount === 10) {
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


    // joke generator function
    var randJoke = function () {

        // var jokeNum = $.trim($("#jokenumber").val());
        var queryUrl = "https://api.icndb.com/jokes/random/1";  //+ jokeNum
        $.ajax({
            url: queryUrl,
            method: "GET",

        }).then(function (response) {
            console.log(response)


            // for loop to append mutliple jokes
            for (var i = 0; i < response.value.length; i++) {
                $("#jokebox").text(response.value[i].joke);
            }

        })

    }

    // Inspirational Quotes Api Click Function
    var randQuote = function () {


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


    }

});