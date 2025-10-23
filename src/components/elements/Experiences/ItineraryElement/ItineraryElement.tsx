import "./ItineraryElement.scss";import { useEffect, useState } from "react";

import Image from "next/image";
import { fetchMedia } from "@/utils/actions/serverActions/actions";
import { WPImage } from "@/utils/interfaces";
;;

export default function ItineraryElement({ data }: { data: {heading: string, description: string, icon: string | number | boolean | undefined} }) {

  const [ iconData, setIconData ] = useState<WPImage | undefined>(undefined)

  useEffect(()=>{
    if(data.icon){
      getMedia()
    }
    async function getMedia () {
      const mediaData = await fetchMedia(data.icon as number);
      setIconData(mediaData);
    };
  },[setIconData, data])

  return (
    iconData &&
    <>
     <div className="itinerary__element">
      <div className="itinerary__element__icon">
        <Image src={iconData?.guid.rendered as string} fill={true} alt={iconData?.alt_text as string}/>
      </div>
      <div className="itinerary__element__title">
        <p>{data.heading}</p>
      </div>
      <div className="itinerary__element__copy">
        <p>{data.description}</p>
      </div>
     </div>
    </>
  )
}