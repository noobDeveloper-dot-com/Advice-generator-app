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
  fetchDATA()
    .then((parseDATA) => {
      // Generate random number between 0 - 1643
      const INDEX_NO = Math.round(Math.random() * 1643);
      const QUOTES_obj = parseDATA[INDEX_NO];

      DISPLAY_QUOTES.innerText = `"${QUOTES_obj.text}"`;
      QUOTE_NO.innerText = INDEX_NO;
      diceLoadingAnimation("completed");
    })
    .catch((error) => {
      DISPLAY_QUOTES.innerText = `"${error}"`;
    });
}

function fetchDATA() {
  return new Promise((resolve, reject) => {
    const URL = "https://type.fit/api/quotes";
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 3) {
        console.log(request.status, request);
        diceLoadingAnimation();
      } else if (request.readyState === 4 && request.status === 200) {
        //Converts json data into objects and pass it to resolve
        resolve(JSON.parse(request.responseText));
      } else if (request.readyState === 4) {
        reject("Sorry no quotes atm. Try again later my friend :)");
      }
    });
    request.open("GET", URL);
    request.send();
  });
}
