
window.onload = function () {
    AddNewResult(
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        "Google",
        "https://www.google.com",
        "Google",
        "Google is a search engine"
    )
};





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
    document.getElementById("serch__resault").appendChild(result);
}