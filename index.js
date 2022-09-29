///get currency
/*
const currList = fetch("https://api.coinbase.com/v2/currencies")
  .then((response) => response.json())
  .then((data) => console.log(data.data));

const EOS = fetch("https://api.coinbase.com/v2/exchange-rates?currency=EOS")
  .then((response) => response.json())
  .then((data) => console.log(data.data));

const BTC = fetch("https://api.coinbase.com/v2/exchange-rates?currency=BTC")
  .then((response) => response.json())
  .then((data) => console.log(data.data));

const ETH = fetch("https://api.coinbase.com/v2/exchange-rates?currency=ETH")
  .then((response) => response.json())
  .then((data) => console.log(data.data));

const XRP = fetch("https://api.coinbase.com/v2/exchange-rates?currency=XRP")
  .then((response) => response.json())
  .then((data) => console.log(data.data));

const LTC = fetch("https://api.coinbase.com/v2/exchange-rates?currency=LTC")
  .then((response) => response.json())
  .then((data) => console.log(data.data));
*/
const selectCrypto = document.querySelector("#crypto");
const selectCurrency = document.querySelector("#currenecy");
const convert = document.querySelector("#convert");
const original = document.querySelector("#original");
const button = document.querySelector("#button");

const convertCurr = async () => {
  const url = `https://api.coinbase.com/v2/prices/${selectCrypto.value}-${selectCurrency.value}/spot`;

  const response = await fetch(url);
  const result = await response.json();
  convert.value = (Number(result.data.amount) * original.value).toFixed(2);
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  convertCurr();
});
