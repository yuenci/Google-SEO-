window.onload = function () {
    loadArticles()
};

function loadArticles() {
    // set get request fetch
    fetch('http://127.0.0.1:5000/articles')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderAricles(data);
        })
}


function renderAricles(data) {

    let articleTitles = document.getElementsByClassName('article-title');
    let articleContents = document.getElementsByClassName('article-content');
    let keys = Object.keys(data);

    for (let i = 0; i < keys.length; i++) {
        articleTitles[i].innerHTML = data[keys[i]].title;
        articleContents[i].innerHTML = data[keys[i]].content;
    }
}