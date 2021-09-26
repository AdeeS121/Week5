const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const db = require('./db.js');

app.use(cors());
app.use(express.json());


const query = "SELECT * FROM transactions";
db.all(query, function(err,rows) {
    if(err){
        throw err;
    }
    rows.forEach(function(row){
        console.log(row);
    })
})


app.get("/greeting", function (req, res) {
  const greeting = {
    welcome: "Welcome to Wally's Hotdogs",
  };
  res.send(greeting);
});

app.get("/options", function (req, res) {
  const options = [
    {
      selectTransactionMessage: "Select an item:",
    },

    {
      startTransaction: "[1] - Start new transaction",
    },

    {
      currentTransaction: "[2] - Current running transactions",
    },

    {
      exitTransaction: "[3] - Exit"
    },
  ]; db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  }); db.all(query, function (err, rows) {
    if (err) {
      throw err;
    }
    res.json({ status: rows });
  });

  res.send(options);
});

app.get("/foodmsg", function (req, res) {
  foodSelection = {
    foodOptionMessage: "Select One Of These Items",
  };
  res.send(foodSelection);
});

app.get("/food", function (req, res) {
  const foodOptions = [
    { item: "[1]", food: "Hotdog", price: "4.50" },

    { item: "[2]", food: "Soda", price: "1.50" },

    { item: "[3]", food: "Chips", price: "1.00" },
    {item: "[4]", foodMsg: "Start Payment Process"}
  ];

  res.send(foodOptions);
});

app.post("/food", function (req, res) {
  const foodSelection = req.body;

  let foodItem = foodSelection.food;
  let foodPrice = foodSelection.price;

  let foodItemAndPrice = {
    food: foodItem,
    price: foodPrice,
  };
  res.send(foodItemAndPrice);
});

app.get("/paymentMessages", function (req, res) {
  const payMessages = [
    { paymentSectionMsg: "Payment Section" },
    { startPayMsg: "~~ STARTING PAYMENT ~~" },
    { startPayMethod: "How would you like to pay:" },
    { paymentTotal: "Your total is: $0.00" },
    { paymentChoiceSelection: "~~ You have selected cash/credit ~~" },
    { paymentSelectionMsg: "~~ Thank you for choosing Wally's ~~" },
    {paymentOptionCash: "Cash"},
    {paymentOptionCredit: "Credit"}
  ];
  res.send(payMessages);
});

app.get("/payment", function (req, res) {
  const paymentSection = [
    {
      choice: "[1]",
      method: "Cash",
      total: 0,
    },

    {
      choice: "[2]",
      method: "Credit",
      total: 0
    },
  ];

  res.send(paymentSection);
});

app.post("/payment", function (req, res) {
  const paymentSelection = req.body;

  let paymentChoice = paymentSelection.paymentMethod;

  let paymentCashOrCredit = {
    paymentMethod: paymentChoice,
  };

  const paymentOption = `You selected: ${paymentChoice.payment1}`;
  res.send(paymentCashOrCredit);
});

app.get("/runningTransactions", function (req, res) {
  const currentRunningTransactions = {
    currentTransactionsMsg: "~~ Here are the current transactions so far ~~",
    currentTotalAndCashOrCreditPay: "$0.00 Cash/Credit",
  };
  res.send(currentRunningTransactions);
});

app.get("/endingTransactions", function (req, res) {
  const finalTransactions = {
    endingDayIsOverMsg: "~~ WOO HOO! Day is over ~~",
    endingCongratsMsg: "Great Job Today:",
    endingNumberOfTransactions: "Transactions:",
    endingTotalSales: "Total Sales: $0.00",
    endingFarewell: "~~~ GOODBYE ~~~",
  };
  res.send(finalTransactions);
});

app.listen(port, function (err) {
  if (err) console.log(err);
  console.log(`Listening on ${port}`);
});

