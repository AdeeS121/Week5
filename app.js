const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/greeting", function (req, res) {
  const msg = `Welcome to Wally'\s Hotdogs`;
  res.send(msg);
});

app.get("/options", function (req, res) {
  const options = {
    selectTransactionMessage: "Select an item:",
    startTransaction: "[1] - Start new transaction",
    currentTransaction: "[2] - Current running transactions",
    exitTransaction: "[3] - Exit",
  };
  res.send(options);
});

app.get("/food", function (req, res) {
  const foodOptions = {
    foodOptionSelectMsg: "Select one of these items",
    foodOption1: "[1] - Hotdog - $4.50",
    foodOption2: "[2] - Soda - $1.50",
    foodOption3: "[3] - Hotdog - $1.00",
    foodOption4: "[4] - Start Payment Process",
    foodAddedMsg: "~~ You added a ~~",
  };
  res.send(foodOptions);
});

app.post("/food", function (req, res) {
  const foodSelection = req.body;
  const foodItem = foodSelection.foodItem;
  const price = parseFloat(foodSelection.price);
  const foodItemAndPrice = {
    food: foodItem,
    price: price,
  };
  res.send(foodItemAndPrice);
});

app.post("/food", function (req, res) {
  const foodSelection = req.body;
  const foodItem = foodSelection.foodItem;
  const price = parseFloat(foodSelection.price);
  const foodItemAndPrice = {
    food: foodItem,
    price: price,
  };
  res.send(foodItemAndPrice);
});

app.get("/payment", function (req, res) {
  const paymentSection = {
    paymentSectionMsg: "Payment Section",
    startPayMsg: "~~ STARTING PAYMENT ~~",
    startPayMethod: "How would you like to pay:",
    paymentTotal: "Your total is: $0.00",
    paymentCash: "[1]Cash",
    paymentCredit: "[2]Credit",
    paymentChoiceSelection: "~~ You have selected cash/credit ~~",
    paymentSelectionMsg: "~~ Thank you for choosing Wally's ~~",
  };
  res.send(paymentSection);
});

app.post("/payment", function (req, res) {
  const paymentChoice = {
    payment1: "Cash",
    payment2: "Credit",
  };
  const paymentOption = `You selected: ${paymentChoice.payment1}`;
  res.send(paymentChoice);
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
