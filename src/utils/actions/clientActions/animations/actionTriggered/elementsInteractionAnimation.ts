import { gsap } from "gsap";

export function toggleBoxExpand (item: EventTarget | Element | string) {
  if (!item) return;
  const el = item as Element;

  gsap.to(el, {
    height: Math.round(window.innerWidth * 0.075),
    ease: "sine.inOut",
    duration: 0.25,
  });
}

export function toggleBoxShrink (item: EventTarget | Element | string) {
  if (!item) return;
  const el = item as Element;

  console.log(el);
  gsap.to(el, {
    height: Math.round(window.innerWidth * 0.021),
    ease: "sine.inOut",
    duration: 0.25,
  });
}