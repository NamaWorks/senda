"use client";

import { ReactNode, useEffect } from 'react';
import { animateElements } from '../actions/clientActions/domManipulation/animateElements';


export default function AnimationsProvider ({children}: {children: ReactNode})  {

  useEffect(() => {
    // initial run
    animateElements();

    // debounce DOM mutation handling so we don't spam the animation setup
    let timeout: number | null = null;
    const observer = new MutationObserver(() => {
      if (timeout) window.clearTimeout(timeout);
      timeout = window.setTimeout(animateElements, 1000);
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      if (timeout) window.clearTimeout(timeout);
    };


  },[])

  return (
    <>
      {children}
    </>
  )
};