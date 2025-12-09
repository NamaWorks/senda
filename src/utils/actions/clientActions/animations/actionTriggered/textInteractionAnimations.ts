// import { addAnimatedElementTag, animatedTagChecker } from "../../domManipulation/elementAnimatedTags";

import { gsap } from "gsap";
import { SplitText } from "gsap/all";

export function paragraphOut (item: EventTarget | Element | string) {

  let el: Element | null = null;

  if (typeof item === 'string') {
    el = document.querySelector(item);
  } else {
    el = item as Element;
  }

  if (!el) return; // nothing to animate

  const split = new SplitText(el as HTMLElement, {
    type: "words",
    autoSplit: true,
    deepSlice: true,
  })

  gsap.to(split.words, {
    opacity: 0,
    xPercent: -15,
    duration: 0.05,
    stagger: 0.025,
    ease: "sine.in",
    scrollTrigger: {
      trigger: el,          
      start: "top 90%",
      end: "bottom 0%",    
      toggleActions: "play none none none",
    },
  });

  if (el && el instanceof HTMLElement) {
    setTimeout(() => {
      el.style.opacity = '0';
    }, 1000);
  }
};

export function paragraphIn (item: EventTarget | Element | string) {

  let el: Element | null = null;

  if (typeof item === 'string') {
    el = document.querySelector(item);
  } else {
    el = item as Element;
  }

  if (!el) return;

  (el as HTMLElement).style.opacity = '1';

  const split = new SplitText(el as HTMLElement, {
    type: "words",
    autoSplit: true,
    deepSlice: true,
  })

  gsap.from(split.words, {
    opacity: 0,
    xPercent: -15,
    duration: 0.1,
    stagger: 0.025,
    ease: "sine.in",
    scrollTrigger: {
      trigger: el,          
      start: "top 90%",
      end: "bottom 0%",    
      toggleActions: "play none none none",

    },
  });
};

export function titleOut (item: EventTarget | Element | string) {

  let el: Element | null = null;

  if (typeof item === 'string') {
    el = document.querySelector(item);
  } else {
    el = item as Element;
  }

  if (!el) return; // nothing to animate

  const split = new SplitText(el as HTMLElement, {
    type: "words",
    autoSplit: true,
    deepSlice: true,
  })

  gsap.to(split.words, {
    opacity: 0,
    xPercent: -15,
    duration: 0.05,
    stagger: 0.025,
    ease: "sine.in",
    scrollTrigger: {
      trigger: el,          
      start: "top 90%",
      end: "bottom 0%",    
      toggleActions: "play none none none",
    },
  });

  if (el && el instanceof HTMLElement) {
    setTimeout(() => {
      el.style.opacity = '0';
    }, 1000);
  }
};

export function titleIn (item: EventTarget | Element | string) {

  let el: Element | null = null;

  if (typeof item === 'string') {
    el = document.querySelector(item);
  } else {
    el = item as Element;
  }

  if (!el) return;

  (el as HTMLElement).style.opacity = '1';

  const split = new SplitText(el as HTMLElement, {
    type: "words",
    autoSplit: true,
    deepSlice: true,
  })

  gsap.from(split.words, {
    opacity: 0,
    xPercent: -15,
    duration: 0.1,
    stagger: 0.025,
    ease: "sine.in",
    scrollTrigger: {
      trigger: el,          
      start: "top 90%",
      end: "bottom 0%",    
      toggleActions: "play none none none",

    },
  });
};

export function btnTextOut (item: EventTarget | Element | string) {
  let el: Element | null | EventTarget = null;

  if (typeof item === 'string') {
    el = document.querySelector(item);
  } else {
    el = item as Element;
  }

  if (!el) return;
  (el as HTMLElement).style.opacity = '1';

  const split = new SplitText(el as HTMLElement, {
    type: "chars",
    autoSplit: true,
    deepSlice: true,
  })

  gsap.to(split.chars, {
    // opacity: 0,
    yPercent: 200,
    duration: 0.1,
    stagger: 0.01,
    ease: "sine.in",
  });
};

export function btnTextIn (item: EventTarget | Element | string) {
  let el: Element | null | EventTarget = null;

  if (typeof item === 'string') {
    el = document.querySelector(item);
  } else {
    el = item as Element;
  }

  if (!el) return;

  (el as HTMLElement).style.opacity = '1';
  (el as HTMLElement).style.position = '0, 200%';

  const split = new SplitText(el as HTMLElement, {
    type: "chars",
    autoSplit: true,
    deepSlice: true,
  })

  gsap.from(split.chars, {
    yPercent: -200,
    duration: 0.1,
    stagger: 0.01,
    ease: "sine.in",
  });
};

export function toggleTextExpand (item: EventTarget | Element | string) {
  let el: Element | null | EventTarget = null;

  if(typeof item === 'string'){
    el = document.querySelector(item);
  } else {
    el = item as Element
  }

  if (!el) return;

  (el as HTMLElement).style.opacity = '1';
  (el as HTMLElement).style.position = '0, 200%';

  const split = new SplitText(el as HTMLElement, {
    type: "chars",
    autoSplit: true,
    deepSlice: true,
  })

  gsap.from(split.chars, {
    yPercent: -200,
    duration: 0.1,
    stagger: 0.01,
    ease: "sine.in",
  });
};