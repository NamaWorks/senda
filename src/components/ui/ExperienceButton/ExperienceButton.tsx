import { useContext } from "react";
import "./ExperienceButton.scss";
import { ExperiencesContext } from "@/utils/contexts/contexts";
import { ExperiencesContextType } from "@/utils/types";

export default function ExperienceButton ({ experience }: {experience: string}) {

  const { setSelectedExperience } = useContext(ExperiencesContext) as ExperiencesContextType;

  return (
    <button className="experience__button" onClick={()=>{if(setSelectedExperience) setSelectedExperience(experience)}}>
      <p>
        + {experience}
      </p>
    </button>
  )
};

// We need to prepare the redirection to the experiences page