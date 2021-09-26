const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/wally_foodstand.db');
module.exports = db;