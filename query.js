const db = require('./db.js');

const query = 'SELECT * FROM transactions';
db.all(query, function (err, rows) {
  if (err) {
    throw err;
  }
  rows.forEach(function (row) {
    console.log(row);
  });
});
