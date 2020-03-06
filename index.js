function fetchBooks() {
<<<<<<< HEAD
  return fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(json => getPosts(json));
=======
  fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(json => renderBooks(json));
>>>>>>> bc35d1004bf5c57266d0009a35fcf6e803a631e1
}

function renderBooks(json) {
  const main = document.querySelector('main');
  json.forEach(book => {
    const h2 = document.createElement('h2');
    const ul = document.createElement('ul');
    h2.innerHTML = `<h2>${book.name}</h2>`;
    ul.innerHTML = `<li> This book has ${book.numberOfPages} pages. </li>`;
<<<<<<< HEAD
    main.appendChild(h2);
    main.appendChild(ul);
  });
}

function getPosts(json) {
  renderBooks(json);
=======
    main.appendChild(h2)
    main.appendChild(ul)
  })
>>>>>>> bc35d1004bf5c57266d0009a35fcf6e803a631e1
}

function getPosts(json) {
  json.forEach(book => {
    document.querySelector('title').innerHTML = `${book.name}`;
  });
}
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
<<<<<<< HEAD
});

=======
});
>>>>>>> bc35d1004bf5c57266d0009a35fcf6e803a631e1
