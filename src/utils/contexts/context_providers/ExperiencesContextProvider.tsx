"use client";

import React, { useState } from "react";
import { ExperiencesContext } from "../contexts";
import { ExperienceDataType } from "@/utils/types";

export default function ExperiencesContextProvider({ children }: Readonly<{ children: React.ReactNode }>) {

  const [ experiencesData, setExperiencesData ] = useState<Array<ExperienceDataType|undefined>|undefined>();
  const [ selectedExperience, setSelectedExperience] = useState<string|undefined>('hiking');

  return (
    <ExperiencesContext.Provider value={{ experiencesData, setExperiencesData, selectedExperience, setSelectedExperience }}>
      {children}
    </ExperiencesContext.Provider>
  )
};