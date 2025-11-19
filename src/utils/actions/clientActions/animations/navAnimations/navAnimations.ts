import { gsap } from "gsap";
import { CustomEase } from "gsap/all";

CustomEase.create("niceAndClean", ".25,.00,.00,.75");

export function navAnimationEnter () {
  const imageA = document.querySelector('#nav__toggle__half__image__a');
  const imageB = document.querySelector('#nav__toggle__half__image__b');
  const background = document.querySelector('.nav__toggle__bg')
  const navElements = document.querySelectorAll('.nav__toggle__half__side__links')

  navBackgroundAnimationIn(background as Element);
  
  navImageAnimationIn('top', (imageA as Element));
  navImageAnimationIn('bottom', (imageB as Element));

  setTimeout(() => {
    navElementsAnimationIn(navElements);
  }, 250);

};

export function navAnimationOut () {
  const imageA = document.querySelector('#nav__toggle__half__image__a');
  const imageB = document.querySelector('#nav__toggle__half__image__b');
  const background = document.querySelector('.nav__toggle__bg')
  const navElements = document.querySelectorAll('.nav__toggle__half__side__links')

  navBackgroundAnimationOut(background as Element);
  
  navImageAnimationOut('top', (imageA as Element));
  navImageAnimationOut('bottom', (imageB as Element));

  setTimeout(() => {
    navElementsAnimationOut(navElements);
  }, 250);

};

function navImageAnimationIn (from: string, el:Element) {

  gsap.from(el, {
    // height: "0%",
    // width: "0%",
    yPercent: from === 'top' ? -200 : 200,
    duration: 0.75,
    delay: 0.25,
    // ease: "circ.inOut",
    ease: "niceAndClean"
  });
};

function navBackgroundAnimationIn (el:Element) {
  gsap.from(el, {
    height: '0dvh',
    // xPercent: 200,
    // width: '0dvw',
    duration: 0.75,
    delay: 0,
    ease:  "niceAndClean"
  })
};

function navElementsAnimationIn (els: NodeListOf<Element>) {
  els.forEach((el, i) => {
    // setTimeout(() => {
    //   paragraphIn(el);
    // }, 100 * i);
    setTimeout(() => {
      gsap.to(el, {
        opacity: 1,
        duration: 0.75,
        ease: "niceAndClean",
      })
    }, 100 * i);
  });
};

function navImageAnimationOut (from: string, el:Element) {

  gsap.to(el, {
    // height: "0%",
    // width: "0%",
    yPercent: from === 'top' ? -200 : 200,
    duration: 0.75,
    delay: 0.125,
    // ease: "circ.inOut",
    ease: "niceAndClean"
  });
};

function navBackgroundAnimationOut (el:Element) {
  gsap.to(el, {
    height: '0dvh',
    // xPercent: 200,
    // width: '0dvw',
    duration: 1,
    delay: 0.25,
    ease: "niceAndClean",
  })
};

function navElementsAnimationOut (els: NodeListOf<Element>) {
  els.forEach((el, i) => {
    // setTimeout(() => {
    //   paragraphIn(el);
    // }, 100 * i);
    setTimeout(() => {
      gsap.to(el, {
        opacity: 0,
        duration: 0.25,
        ease: "niceAndClean",
      })
    }, 50 * i);
  });
};

