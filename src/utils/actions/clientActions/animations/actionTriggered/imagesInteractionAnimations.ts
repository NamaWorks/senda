import { gsap } from "gsap";

export function imageAnimationIn (item: EventTarget | Element | string) {
    let el: Element | null | EventTarget = null;

  if (typeof item === 'string') {
    el = document.querySelector(item);
  } else {
    el = item as Element;
  };

  if (!el) return;

    gsap.fromTo(el, {
    height: "0%",
    duration: 2,
    ease: "power3.out",
  }, {
    height: "100%",
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