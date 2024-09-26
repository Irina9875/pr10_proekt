'use strict';
let newsArray = [];

function addNews() {
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let errortitle = document.getElementById('titleError');
    let errorcontent = document.getElementById('contentError');

    if(!title && !content) {
        errortitle.innerHTML = "Введите название новости";
        errorcontent.innerHTML = "Введите текст новости";
        return;
    } else if (title.length < 8) {
        errortitle.innerHTML = "Название должно быть не менее 8 символов!";
        return;
    }else if (content.length > 300) {
        errorcontent.innerHTML = "Текст новости должен быть не более 300 символов!";
        return;
    }
    errortitle.innerHTML = "";
    errorcontent.innerHTML = "";

    newsArray.push({ title, content });

    document.getElementById('title').value = '';
    document.getElementById('content').value = '';

    displayNews();
}
function displayNews() {
    let newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = '';

    newsArray.forEach((news, index) => {
        let newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `<h2>${news.title}</h2><p>${news.content}</p>`;
        newsContainer.appendChild(newsItem);
    });
}
document.getElementById('addButton').onclick = addNews;
document.addEventListener('keydown', function (event) {
  
});