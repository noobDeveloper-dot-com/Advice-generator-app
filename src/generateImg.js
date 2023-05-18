import patternDivider from "./images/pattern-divider-desktop.svg";
import diceIcon from "./images/icon-dice.svg";

const PATTERN_DIVIDER = document.querySelector("#pattern-divider");
const GENERATOR_BUTTON = document.querySelector("#adviceGeneratorBtn");

function imgGenerator(source, description) {
  const img = new Image();
  img.src = source;
  img.alt = description;

  return img;
}

PATTERN_DIVIDER.append(imgGenerator(patternDivider, "Pattern Divider"));
GENERATOR_BUTTON.append(imgGenerator(diceIcon, "Dice Icon"));
