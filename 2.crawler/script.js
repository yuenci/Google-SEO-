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

        var loadingIcon = document.getElementById("loading-icon");
        var url = input.value;
        if (event.key === "Enter") {
            if (url.length == 0) return;
            if (!isValidUrl(url)) {
                alert("Invalid URL");
                return;
            }
            event.preventDefault();

            loadingIcon.style.opacity = 1;
            console.log("enter key pressed:", url);

            fetch("http://127.0.0.1:5000/index", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ url: url }),
            }).then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    document.getElementById("loading-icon").style.opacity = 0;
                    alert("Crawling completed");
                })
                .catch((error) => {
                    console.error("Error:", error);
                });

        }
    });
}

function addCloseIconEvent() {
    var closeIcon = document.getElementById("close-icon");
    var loadingIcon = document.getElementById("loading-icon");
    var input = document.getElementById("search-input");
    closeIcon.addEventListener("click", function () {
        input.value = "";
        loadingIcon.style.opacity = 0;
        closeIcon.style.opacity = 0;
        divider.classList.remove("divider-active");
    });
}


function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (err) {
        return false;
    }
}