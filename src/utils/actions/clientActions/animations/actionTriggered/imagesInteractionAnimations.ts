import { gsap } from "gsap";

export function imageAnimationIn (item: EventTarget | Element | string) {
    let el: Element | null | EventTarget = null;

  if (typeof item === 'string') {
    el = document.querySelector(item);
  } else {
    el = item as Element;
  };

  if (!el) return;

    gsap.to(el, {
    height: "100%",
    duration: 2,
    ease: "power3.out",
  });
};

export function imageAnimationOut (item: EventTarget | Element | string) {
      let el: Element | null | EventTarget = null;

  if (typeof item === 'string') {
    el = document.querySelector(item);
  } else {
    el = item as Element;
  };

  if (!el) return;

    gsap.to(el, {
      transformOrigin: "bottom",
      height: "0%",
      duration: 2,
      ease: "power3.in",
  });
};