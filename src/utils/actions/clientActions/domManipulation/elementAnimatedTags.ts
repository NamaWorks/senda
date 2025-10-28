export const animatedElementTag = 'animated-item'

export function addAnimatedElementTag (element: Element) {
  element.setAttribute("data-animated", "true");
};

export function removeAnimatedElementTag (element: Element) {
  element.setAttribute("data-animated", "false");
};

export function animatedTagChecker (element: Element) {
  if(!element.getAttribute("data-animated")){
    return true
  } 
};