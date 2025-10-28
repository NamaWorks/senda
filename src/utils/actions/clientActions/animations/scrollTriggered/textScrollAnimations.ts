import { addAnimatedElementTag, animatedTagChecker } from "../../domManipulation/elementAnimatedTags";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function addTextScrollAnimations () {
  // register all text/heading related scroll animations
  homeHeadingScrollAnimation();
};

function homeHeadingScrollAnimation () {
  const el = document.querySelector('.home__hero__texts__heading');
  if(el && animatedTagChecker(el)) {
    gsap.from(el, {
      opacity: 0,
      // duration: 0.5,
      scrollTrigger: {
        trigger: el,          // the element that triggers the animation
        start: "top 80%",     // when top of el hits 80% of viewport
        end: "bottom 20%",    // optional — when bottom hits 20%
        toggleActions: "play none none reverse", // onEnter, onLeave, onEnterBack, onLeaveBack
        markers: false,       // set true to debug start/end
        scrub: true // possible values true, false ,1 , 2, 3 ...
      },
    },
  );

  addAnimatedElementTag(el);
  } else {
    console.warn('element already animated or null', el)
  }
};