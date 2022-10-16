// vanilla javaScript
// document.querySelector("h1").style.color = "red";

// jquery

// $("h1").css("color", "red");

// selecting elements with jQuery  //

$("h1");

// manipulating style with jQuery //

// $("h1").css("color", "blue");

// $("h1").addClass("customCss");

// $("h1").addClass("customCss customCss1");
// $("h1").removeClass("customCss customCss1");

// $("h1").css("font-size","5rem");

// $("h1").css("background", "blue");

// manipulating text with jQuery //

// $("h1").text("heading");

// document.querySelector("h1").innerHTML = "<em> header </em>";

// $("h1").html("<em> header </em>");

// manipulate  attribute  //


// console.log($("h1").attr("class"));

// $("a").attr("href", "https://www.google.com/?&bih=616&biw=1280&hl=en");

// adding eventListener  //

// $("h1").click(function () {
//     $("h1").css("color", "red");
// });

// $("h1").click(function () {
//     $("h1").css("background", "yellow");
// });

// vanilla javaScript

// for (let i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         document.querySelector("h1").style.background = "red";
//     });
// }

// jQuery
// $("button").click(function () {
//     $("h1").css("color", "blue");
// });

// $("input").keypress(function (event) {
//     console.log(event.key);
// })

// $("input").keypress(function (event) {
//     $("h1").text(event.key);
// });


// $("h1").on("mouseover", function () {
//     $("h1").css("color","red");
// })

// $("h1").on("mouseover", function () {
//     $("h1").text("heading");
// });

// adding and removing element

// $("h1").before("<button> click  </button>");
// $("h1").after("<button> click  </button>");
// $("h1").append("<button> click  </button>");
// $("h1").prepend("<button> click  </button>");

// $("button").remove();

