const {
  addBooksHandler,
  getAllBooksHandler,
  getBooksByIdHandler,
  editBooksByIdHandler,
  deleteBooksByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },

  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },

  {
    method: 'GET',
    path: '/books/{Id}',
    handler: getBooksByIdHandler,
  },

  {
    method: 'PUT',
    path: '/books/{Id}',
    handler: editBooksByIdHandler,
  },

  {
    method: 'DELETE',
    path: '/books/{Id}',
    handler: deleteBooksByIdHandler,
  },
];

module.exports = routes;
