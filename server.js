const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/customer.html", function(req, res) {
    res.sendFile(__dirname + "/customer.html");
});

app.get("/index.html", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

    res.send("thanks for sending your form");
});


app.listen(3000, function() {
    console.log("Server has started on port 3000");
});


let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);

   if (enterAmount > 5000) {
      alert("Insufficient Balance.")
   } else {
      var findUserBankAccount = enterName + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount
      document.getElementById("myAccountBalance").innerText = myAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`Successful Transaction !!  
      $${enterAmount} is sent to ${enterName}@email.com.`)

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`$${enterAmount} is sent to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}