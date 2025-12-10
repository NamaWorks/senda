"use client";

import { ReactNode, useEffect } from 'react';
import { animateElements } from '../actions/clientActions/domManipulation/animateElements';
import { CustomEase, ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

export default function AnimationsProvider ({children}: {children: ReactNode})  {

  useEffect(() => {

    const checkWindowReady = setInterval(() => {

      if (typeof window !== 'undefined' && document.readyState === 'complete') {
        gsap.registerPlugin(ScrollTrigger, CustomEase);
      // initial run
        animateElements();
        // debounce DOM mutation handling so we don't spam the animation setup
        let timeout: number | null = null;
        const observer = new MutationObserver(() => {
          if (timeout) window.clearTimeout(timeout);
          timeout = window.setTimeout(animateElements, 300);
        });

        
        // Observe added nodes anywhere and attribute changes for data-animate-item
        observer.observe(document.body , {
          childList: true,
          subtree: true,
          characterData: true
        });
        
        clearInterval(checkWindowReady);

        return () => {
          observer.disconnect();
          if (timeout) window.clearTimeout(timeout);
        };
      }
    }, 2000);

  },[])

  return (
    <>
      {children}
    </>
  )
};



// useEffect(() => {
//   const onReady = () => {
//     gsap.registerPlugin(ScrollTrigger, CustomEase);
//     animateElements();

//     let timeout: number | null = null;
//     const observer = new MutationObserver(() => {
//       if (timeout) window.clearTimeout(timeout);
//       timeout = window.setTimeout(animateElements, 300);
//     });

//     observer.observe(document.body, {
//       childList: true,
//       subtree: true,
//     });

//     return () => {
//       observer.disconnect();
//       if (timeout) window.clearTimeout(timeout);
//     };
//   };

//   if (document.readyState === "complete") onReady();
//   else window.addEventListener("load", onReady);

//   return () => window.removeEventListener("load", onReady);
// }, []);
