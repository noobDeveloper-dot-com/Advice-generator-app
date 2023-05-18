import GENERATOR_BUTTON from "./main";

export default function diceLoadingAnimation(is_dataLoaded) {
  const DICE_ICON = GENERATOR_BUTTON.querySelector("img");
  DICE_ICON.classList.add("animate-spin");

  if (is_dataLoaded) {
    setTimeout(() => DICE_ICON.classList.remove("animate-spin"), 500);
  }
}
