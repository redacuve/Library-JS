const myLibrary = [];

function Book(title = null, author = null,
  publisher = null, numberOfPages = null, year = null, readed = null) {
  this.title = title;
  this.author = author;
  this.publisher = publisher;
  this.numberOfPages = numberOfPages;
  this.year = year;
  this.readed = readed;
}


function toggleForm() {
  const form = document.getElementById('first-form');
  form.classList.toggle('hide');
}

function render() {
  const root = document.querySelector('#content');
  root.innerHTML = `<tr>
            <th class="thead">ID</th>
            <th class="thead">Title</th>
            <th class="thead">Author</th>
            <th class="thead">Publisher</th>
            <th class="thead">N° Pages</th>
            <th class="thead">Year</th>
            <th class="thead">Readed</th>                    
            <th class="thead">Delete</th>                    
            <th class="thead">Read Action</th>                    
        </tr>`;

  for (let i = 0; i < myLibrary.length; i += 1) {
    root.innerHTML += `<tr>
                                                 <td>${i + 1}</td>
                                                 <td>${myLibrary[i].title}</td>
                                                 <td>${myLibrary[i].author}</td>
                                                 <td>${myLibrary[i].publisher}</td>
                                                 <td>${myLibrary[i].numberOfPages}</td>
                                                 <td>${myLibrary[i].year}</td>
                                                 <td>${myLibrary[i].readed ? 'Yes' : 'No'}</td>
                                                 <td><a class="button is-danger" onclick="removeBook(${i})">Remove</a></td>
                                                 <td><a class="button is-warning" onclick="toggleRead(${i})">Readed</a></td>
                                                 </tr>`;
  }
}

const removeBook = (i) => { // eslint-disable-line no-unused-vars
  const confirmDel = window.confirm(`Are you sure you want to remove  '${myLibrary[i].title}'?`); // eslint-disable-line no-alert
  if (confirmDel) {
    alert(`Deleted: ${myLibrary[i].title}`); // eslint-disable-line no-alert
    myLibrary.splice(i, 1);
    render();
  }
};

const toggleRead = (i) => { // eslint-disable-line no-unused-vars
  const confirmRead = window.confirm(`Change read status for  '${myLibrary[i].title}?'`); // eslint-disable-line no-alert
  if (confirmRead) {
    myLibrary[i].readed = !myLibrary[i].readed;
    render();
  }
};


function addBookToTheLibrary(title = null, author = null,
  publisher = null, numberOfPages = null, year = null, readed = null) {
  const book = new Book(title, author, publisher, numberOfPages, year, readed);
  myLibrary.push(book);
}

function fillArray() {
  addBookToTheLibrary('One Hundred Years of Solitude',
    'Gabriel García Márquez',
    'Editorial Sudamericana',
    '417',
    '1967',
    false);
  addBookToTheLibrary('Harry Potter and the Goblet of Fire',
    'J. K. Rowling',
    'Bloomsbury',
    '636',
    '2000',
    true);
  addBookToTheLibrary('Unlimited Power',
    'Tony Robbins',
    'Ballantine Books',
    '452',
    '1987',
    false);
  addBookToTheLibrary('The Bible',
    'Jesus',
    'Zondervan',
    '1200',
    '1973',
    false);
  addBookToTheLibrary('Jonathan Livingston Seagull',
    'Richard Bach',
    'Macmillan Inc.',
    '144',
    '1970',
    true);
}

const cleanForm = () => {
  document.getElementById('title-danger').innerHTML = '';
  document.getElementById('author-danger').innerHTML = '';
  document.getElementById('title').value = '';
  document.getElementById('title').classList.remove('is-danger');
  document.getElementById('author').value = '';
  document.getElementById('author').classList.remove('is-danger');
  document.getElementById('publisher').value = '';
  document.getElementById('number-of-pages').value = '';
  document.getElementById('year').value = '';
  document.getElementById('readed').checked = false;
};

document.getElementById('first-form-button').addEventListener('click', (event) => {
  event.preventDefault();
  let node = null;
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const publisher = document.getElementById('publisher');
  const numberOfPages = document.getElementById('number-of-pages');
  const year = document.getElementById('year');
  const readed = document.getElementById('readed');
  if (title.value === '') {
    node = document.getElementById('title');
    node.classList.add('is-danger');
    document.getElementById('title-danger').innerHTML = "The Title can't be blank";
  }
  if (author.value === '') {
    node = document.getElementById('author');
    node.classList.add('is-danger');
    document.getElementById('author-danger').innerHTML = "Author can't be blank";
  }
  if (author.value !== '' && title.value !== '') {
    addBookToTheLibrary(title.value, author.value,
      publisher.value, numberOfPages.value, year.value, readed.checked);
    render();
    cleanForm();
    toggleForm();
  }
});

fillArray();
render();