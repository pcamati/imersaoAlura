// This document is the exercise of the lecture of day 1
document.write("<p>Convert between BRL and USD</p>");
document.write("<input type='text' id='inputBRL' placeholder='Amount in BRL'>");
document.write("<button onclick='BRLtoUSD()'>Convert</button>");
document.write("<br>");
document.write("<input type='text' id='inputUSD' placeholder='Amount in USD'>");
document.write("<button onclick='USDtoBRL()'>Convert</button>");

// var test = prompt("What is your name? ");
var exchangeBRLtoUSD = 0.21;
var exchangeUSDtoBRL = 4.84;

function BRLtoUSD() {
  var amountBRL = document.getElementById("inputBRL").value;
  var exchanged = amountBRL * exchangeBRLtoUSD;
  document.getElementById("inputBRL").value = "";
  alert("The converted amount is " + exchanged.toFixed(2));
}

function USDtoBRL() {
  var amountUSD = document.getElementById("inputUSD").value;
  var exchanged = amountUSD * exchangeUSDtoBRL;
  document.getElementById("inputUSD").value = "";
  alert("The converted amount is " + exchanged.toFixed(2));
}