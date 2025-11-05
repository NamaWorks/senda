import { addAnimatedElementTag, animatedTagChecker } from "../../domManipulation/elementAnimatedTags";

import { gsap } from "gsap";
import { SplitText } from "gsap/all";

export function addTextScrollAnimations () {
  // ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // cleanup
  paragraphScrollWordsAnimation();
};

function paragraphScrollWordsAnimation () {
  // const el = document.querySelector('.home__hero__texts__heading');
  const els = document.querySelectorAll('[data-animation=paragraph]');
  if(els.length>=0) {
    els.forEach((el) => {
      if(animatedTagChecker(el)) {

        const split = new SplitText(el, {
          type: "words",
          // mask: "words",
          // wordsClass: "word++",
          autoSplit: true,
          deepSlice: true,
        })

        gsap.from(split.words, {
        // gsap.from(el, {
        opacity: 0,
        // yPercent: 100,
        xPercent: -15,
        // scale:0.7,
        // transformOrigin: "left top",
        // letterSpacing: 8,
        duration: 0.1,
        stagger: 0.05,
        ease: "sine.out",
        // ease: "custom",
        // CustomEase: "cubic-bezier(.28,-0.01,.18,.98)",
        scrollTrigger: {
          trigger: el,          
          start: "top 90%",
          end: "bottom 0%",    
          toggleActions: "play reverse play reverse", // onEnter, onLeave, onEnterBack, onLeaveBack
          // markers: true, 
          // scrub: 1 // possible values true, false ,1 , 2, 3 ...
        },
      },
    );

    addAnimatedElementTag(el);
      } else {
        // console.warn('element already animated or null', el)
      }
    })
  }
};