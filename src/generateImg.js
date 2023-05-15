import { PATTERN_DIVIDER, GENERATOR_BUTTON } from "./main";
import patternDivider from "./images/pattern-divider-desktop.svg";
import diceIcon from "./images/icon-dice.svg";

console.log(PATTERN_DIVIDER);

function imgGenerator(source, description) {
  const img = new Image();
  img.src = source;
  img.alt = description;

  return img;
}

PATTERN_DIVIDER.append(imgGenerator(patternDivider, "Pattern Divider"));
GENERATOR_BUTTON.append(imgGenerator(diceIcon, "Dice Icon"));
