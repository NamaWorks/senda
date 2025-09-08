"use client";

import { createContext } from "react";
import { ComponentsContextType, ExperiencesContextType } from "../types";

export const ExperiencesContext = createContext<ExperiencesContextType | undefined>(undefined);
export const ComponentsContext = createContext<ComponentsContextType | undefined>(undefined);