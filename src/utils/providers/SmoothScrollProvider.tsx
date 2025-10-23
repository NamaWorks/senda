"use client";

import { ReactNode, useEffect } from 'react';
import { smoothScroll } from "../actions/clientActions/animations/scrollTriggered/smoothScroll";

export default function SmoothScrollProvider ({children}: {children: ReactNode})  {

  useEffect(() => {
    smoothScroll()
  },[])

  return (
    <>
      {children}
    </>
  )
};