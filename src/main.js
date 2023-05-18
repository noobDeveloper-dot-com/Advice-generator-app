import style from "./styles.css";
import diceLoadingAnimation from "./buttonAnimation";

//Selectors
const DISPLAY_QUOTES = document.querySelector("#displayQuotes");
const QUOTE_NO = document.querySelector("#adviceNumber");
const GENERATOR_BUTTON = document.querySelector("#adviceGeneratorBtn");

export default GENERATOR_BUTTON;

//events
GENERATOR_BUTTON.addEventListener("click", generateQuote);

//functions

function generateQuote() {
  const URL = "https://type.fit/api/quotes";
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 3) {
      diceLoadingAnimation();
    } else if (request.readyState === 4 && request.status === 200) {
      //Converts json data into objects
      const parseDATA = JSON.parse(request.responseText);
      // Generate random number between 0 - 1643
      const INDEX_NO = Math.round(Math.random() * 1643);
      const QUOTES_obj = parseDATA[INDEX_NO];

      DISPLAY_QUOTES.innerText = `"${QUOTES_obj.text}"`;
      QUOTE_NO.innerText = INDEX_NO;
      diceLoadingAnimation("disable");
    }
  });
  request.open("GET", URL);
  request.send();
}
