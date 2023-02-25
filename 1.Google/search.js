
document.addEventListener("DOMContentLoaded", function () {
    // AddNewResult(
    //     "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    //     "Google",
    //     "https://www.google.com",
    //     "Google",
    //     "Google is a search engine"
    // )
    AddInputListener();
});

function AddInputListener() {
    const input = document.getElementById("search-input");
    // enter key
    input.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendQuery(input.value)
        }
    });
}

function sendQuery(keyword) {
    console.log("sendQuery");
    fetch(`http://127.0.0.1:5000/search?q=${keyword}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            AddNewResult(
                data.logoUrl,
                data.website,
                data.url,
                data.title,
                data.description
            )
        });
}


function AddNewResult(logoUrl, website, url, title, description) {
    let result = document.createElement("div");
    result.classList.add("result__container");
    result.innerHTML = `
        <div class="result__title">
            <div class="result__title__upper">
                <div class="result__title__left">
                    <img src="${logoUrl}" alt="logo" class="result-logo">
                </div>
                <div class="result__title__right">
                    <div class="result__website">${website}</div>
                    <div class="result__url">${url}</div>
                </div>
            </div>
            <div class="result__title__lower">
                <div class="result__title__lower_title">${title}</div>
            </div>
        </div>

        <div class="result__description">${description}</div>
    `;
    result.onclick = function () {
        window.open(url, "_blank");
    };
    document.getElementById("serch__resault").appendChild(result);
}