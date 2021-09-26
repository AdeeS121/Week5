const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/wally_foodstand.db')
// db.run(`CREATE TABLE IF NOT EXISTS foods(
//     foodId INTEGER PRIMARY KEY AUTOINCREMENT,
//     foodName TEXT,
//     foodPrice REAL,
//     createdAt TEXT,
//     updatedAt TEXT)`)
// db.close();

// db.run(`CREATE TABLE IF NOT EXISTS transactions(
//     transactionId INTEGER PRIMARY KEY AUTOINCREMENT,
//     totalPurchase REAL,
//     paymentType TEXT,
//     itemsPurchased TEXT,
//     timePurchased TEXT,
//     runningTransactions REAL,
//     totalTransactions REAL,
//     totalSales REAL)`)


db.run(`CREATE TABLE IF NOT EXISTS foods_transactions(
    foodId INTEGER,
    transactionId INTEGER,
    PRIMARY KEY (foodId, transactionId),FOREIGN KEY (foodId)
       REFERENCES foods(foodId)
          ON DELETE CASCADE
          ON UPDATE NO ACTION,
    FOREIGN KEY (transactionId)
       REFERENCES transactions (transactionId)
          ON DELETE CASCADE
          ON UPDATE NO ACTION)`);


db.close();