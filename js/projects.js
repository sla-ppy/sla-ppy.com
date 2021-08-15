// project.html, sidebar, button click event
function buttonClick() {
// First lets select the element and put it in a variable..
    let getElement = document.getElementById("sidebar-button-1");

// Let's get the button as well
    let theButton = document.getElementById("sidebar-button-1")

    theButton.addEventListener('click', function(e) {
        getElement.style.backgroundColor = "blue";
    });
}




