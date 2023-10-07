// const fullscreenButton = document.getElementById("fullscreen-button");
// const contentDiv = document.querySelector(".content");

// fullscreenButton.addEventListener("click", () => {
//     console.log("first");
//     contentDiv.classList.toggle("fullscreen");
// });


$(".image").addClass("trasf");
$(".content").addClass("trasf");

$(".content").click(function (e) {
    $(this).toggleClass("fullscreen");
})  

// contentDiv.addEventListener("click", () => {
//     contentDiv.classList.remove("fullscreen");
// });