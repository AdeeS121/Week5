const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/wally_foodstand.db');

// let sql = `INSERT INTO foods (foodName,foodPrice,createdAt,updatedAt)
// VALUES 
// ("Hotdog","4.50",datetime('now'),datetime('now','localtime'),
// ("Soda","1.50",datetime('now'),datetime('now','localtime')),
// ("Chips","1.00",datetime('now'),datetime('now','localtime'))`;

// db.run(sql,[], function (err) {
//   if (err) {
//     return console.log(err.message);
//   }
//   console.log(`Row ready ${this.lastID}`);
// });

// let sql = `INSERT INTO transactions(totalPurchase,paymentType,itemsPurchased,timePurchased,runningTransactions,totalTransactions,totalSales)
//     VALUES
//        ("25.25","Cash","Hotdog,Soda,Chips",datetime("now"),"45.95","80.20","375.40")`;

// db.run(sql,[], function (err) {
//   if (err) {
//     return console.log(err.message);
//   }
//   console.log(`Row ready ${this.lastID}`);
// });


db.close();
