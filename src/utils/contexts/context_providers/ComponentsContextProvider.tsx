"use client";

import { ComponentDataType } from "@/utils/types";
import React, { useState } from "react";
import { ComponentsContext } from "../contexts";

export default function ComponentsContextProvider({ children }: Readonly<{ children: React.ReactNode }>) {

  const [ footerData, setFooterData ] = useState<ComponentDataType | undefined>(undefined); 
  const [ faqData, setFaqData ] = useState<ComponentDataType | undefined>(undefined); 
  const [ navData, setNavData ] = useState<ComponentDataType | undefined>(undefined); 

  return (
    <ComponentsContext.Provider value={{ footerData, setFooterData, faqData, setFaqData, navData, setNavData}}>
      {children}
    </ComponentsContext.Provider>
  )
};