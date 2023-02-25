document.addEventListener("DOMContentLoaded", function () {
    addInputEvent();
    addCloseIconEvent();
});


function addInputEvent() {
    var input = document.getElementById("search-input");
    var divider = document.getElementById("divider");
    var closeIcon = document.getElementById("close-icon");
    input.addEventListener("input", function () {
        var value = input.value;
        if (value.length > 0) {
            divider.classList.add("divider-active");
            closeIcon.style.opacity = 1;
            closeIcon.style.cursor = "pointer";
        } else {
            divider.classList.remove("divider-active");
            closeIcon.style.opacity = 0;
        }
    });

    // enter key
    input.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            //console.log("enter key pressed:", input.value);
        }
    });
}

function addCloseIconEvent() {
    var closeIcon = document.getElementById("close-icon");
    var input = document.getElementById("search-input");
    closeIcon.addEventListener("click", function () {
        input.value = "";
        closeIcon.style.opacity = 0;
        divider.classList.remove("divider-active");
    });
}