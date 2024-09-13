console.log("I'm connected!");
// TODO: Set an initial value for the clicker
var sum = 0;
var value = document.querySelector("#value");
var btns = document.querySelectorAll(".btn");

// TODO: Select the correct elements from the HTML to be able to increase, decrease, and reset
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        var targeting = e.currentTarget.classList;

        if (targeting.contains("increase")) {
            sum++;
        } else if (targeting.contains("decrease")) {
            sum--;
        } else {
            sum = 0;
        }
        value.textContent = sum;
    })
});

// TODO: Create the functionality for the buttons here. Try to write some pseudocode to help you