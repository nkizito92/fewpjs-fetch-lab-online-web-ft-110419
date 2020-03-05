function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(json => getPosts(json));
}

function renderBooks(json) {
  const main = document.querySelector('main');
  json.forEach(book => {
    const h2 = document.createElement('h2');
    const ul = document.createElement('ul');
    h2.innerHTML = `<h2>${book.name}</h2>`;
    ul.innerHTML = `<li> This book has ${book.numberOfPages} pages. </li>`;
    main.appendChild(h2);
    main.appendChild(ul);
  });
}

function getPosts(json) {
  renderBooks(json);
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

