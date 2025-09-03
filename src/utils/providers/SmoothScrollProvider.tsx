"use client";

import { ReactNode, useEffect } from 'react';
import { smoothScroll } from "../actions/clientActions/animations/smoothScroll";

const SmoothScrollProvider = ({children}: {children: ReactNode}) => {

  useEffect(() => {
    smoothScroll()
  },[])

  return (
    <>
    {children}
    </>
  )
};

export default SmoothScrollProvider;