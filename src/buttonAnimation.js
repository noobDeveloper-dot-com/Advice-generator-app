import GENERATOR_BUTTON from "./main";

export default function diceLoadingAnimation(is_dataLoaded) {
  const DICE_ICON = GENERATOR_BUTTON.querySelector("img");
  DICE_ICON.classList.add("animate-spin");

  if (is_dataLoaded === "completed") {
    setTimeout(() => DICE_ICON.classList.remove("animate-spin"), 500);
  } else if (is_dataLoaded === "error") {
    DICE_ICON.classList.remove("animate-spin");
    DICE_ICON.classList.add("animate-pulse");
    setTimeout(() => DICE_ICON.classList.remove("animate-pulse"), 1000);
  }
}
