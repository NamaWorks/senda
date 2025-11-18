import { addElementsScrollAnimations } from "../animations/scrollTriggered/elementsScrollAnimations";
import { addTextScrollAnimations } from "../animations/scrollTriggered/textScrollAnimations";

export function animateElements () {
  addTextScrollAnimations();
  addElementsScrollAnimations();
};