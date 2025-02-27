//
$(document).ready(function() {
    $("#toggleBtn").click(function() {
        $("#content").toggle();
    });
});
//  Change Text on Button Click
$(document).ready(function() {
    $("#changeTextBtn").click(function() {
        $("#text").text("Text has been changed!");
    });
});
// Change CSS Styles Dynamically 
$(document).ready(function() {
    $("#changeColorBtn").click(function() {
        $("#box").css("background-color", "orange");
    });
});
// Animate an Element
$(document).ready(function() {
    $("#animateBtn").click(function() {
        $("#box").animate({left: '250px'}, 1000);
    });
});
// Event Binding with Mouse Hover
$(document).ready(function() {
    $("#hoverElement").hover(function() {
        $(this).css("background-color", "green");
    }, function() {
        $(this).css("background-color", "pink");
    });
});
// Slide Up and Slide DowN
$(document).ready(function() {
    $("#slideUpBtn").click(function() {
        $("#content").slideUp();
    });
    $("#slideDownBtn").click(function() {
        $("#content").slideDown();
    });
});
// Fade In and Fade Out
$(document).ready(function() {
    $("#fadeOutBtn").click(function() {
        $("#content").fadeOut();
    });
    $("#fadeInBtn").click(function() {
        $("#content").fadeIn();
    });
});
// Append or Prepend Content 
$(document).ready(function() {
    $("#appendBtn").click(function() {
        $("#content").append("<p>Text appended to the end!</p>");
    });
    $("#prependBtn").click(function() {
        $("#content").prepend("<p>Text prepended to the beginning!</p>");
    });
});
//  Form Input Validation
$(document).ready(function() {
    $("#myForm").submit(function(event) {
        var name = $("#name").val();
        if (name === "") {
            event.preventDefault();
            $("#error").text("Name cannot be empty.");
        }
    });
});
//  Display Alert on Button Click 
$(document).ready(function() {
    $("#alertBtn").click(function() {
        alert("Hello! You clicked the button.");
    });
});

// if else statement 1
let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
// if else statement 2
let temperature = 25;

if (temperature > 30) {
    console.log("It's a hot day.");
} else if (temperature > 20 && temperature <= 30) {
    console.log("The weather is nice.");
} else {
    console.log("It's a cold day.");
}