import { gsap } from "gsap";
import { addAnimatedElementTag, animatedTagChecker } from "../../domManipulation/elementAnimatedTags";

export function addElementsScrollAnimations () {
  homeExperienceTabsScrollAnimations();
  aboutTabsScrollAnimations();
  aboutValuesTabsScrollAnimations();
};


function homeExperienceTabsScrollAnimations () {
  const tabs = document.querySelectorAll('.home__experiences__tabs__tab');
  if(tabs.length>=0) {

  gsap.to(".home__experiences__tabs__tab", {
    yPercent: (i) => -50 + i * -10, // each item slightly higher than previous
    // opacity: 1,
    // duration: 1,
    // ease: "power2.out",
    stagger: 0.05,
    scrollTrigger: {
      trigger: ".home__experiences__tabs",
      start: "top 120%",
      end: "bottom 90%",
      toggleActions: "play none none reverse",
      scrub: 2   // <— enable if you want scroll-linked movement
    },
  });


    tabs.forEach((el, i, parent) => {
      if(animatedTagChecker(el)) {
        addAnimatedElementTag(el);
      } else {
        // console.warn('element already animated or null', el)
      }
    })
  }
};

function aboutTabsScrollAnimations () {
  const tabs = document.querySelectorAll('.about__images__item');
  if(tabs.length>=0) {

  gsap.to(".about__images__item", {
    yPercent: (i) => -10 + i * -10, // each item slightly higher than previous
    // opacity: 1,
    // duration: 1,
    // ease: "power2.out",
    stagger: 0.05,
    scrollTrigger: {
      trigger: ".about__images",
      start: "top 100%",
      end: "top 50%",
      toggleActions: "play none none reverse",
      scrub: 2   // <— enable if you want scroll-linked movement
    },
  });


    tabs.forEach((el, i, parent) => {
      if(animatedTagChecker(el)) {
        addAnimatedElementTag(el);
      } else {
        // console.warn('element already animated or null', el)
      }
    })
  }
};

function aboutValuesTabsScrollAnimations () {
  const tabs = document.querySelectorAll('.about__values__value');
  if(tabs.length>=0) {

  gsap.to(".about__values__value", {
    yPercent: (i) => i * -25, // each item slightly higher than previous
    // opacity: 1,
    // duration: 1,
    // ease: "power2.out",
    stagger: 0.05,
    scrollTrigger: {
      trigger: ".about__values__value",
      start: "top 110%",
      end: "top 85%",
      toggleActions: "play none none reverse",
      scrub: 2   // <— enable if you want scroll-linked movement
    },
  });


    tabs.forEach((el, i, parent) => {
      if(animatedTagChecker(el)) {
        addAnimatedElementTag(el);
      } else {
        // console.warn('element already animated or null', el)
      }
    })
  }
};