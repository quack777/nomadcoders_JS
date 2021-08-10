const quotes = [
  {
    quote: "만원을 천원처럼",
    author : "조은총",
  },
  {
    quote: "천원을 백원처럼",
    author : "조은총",
  },
  {
    quote: "십만원을을 만원처럼",
    author : "조은총",
  },
  {
    quote: "백만원을 십만원처럼",
    author : "조은총",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;