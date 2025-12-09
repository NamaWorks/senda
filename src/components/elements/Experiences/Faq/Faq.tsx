"use client";

import { useEffect, useState } from "react";
import "./Faq.scss";
import { fetchComponent } from "@/utils/actions/serverActions/actions";
import { ComponentDataType, FaqDataType } from "@/utils/types";
import Image from "next/image";
import FaqItem from "@/components/ui/FaqItem/FaqItem";

export default function Faq() {

  const [ faqData, setFaqData ] = useState<ComponentDataType | undefined>(undefined);

  useEffect(()=>{
    const getData = async () => {
      const data = await fetchComponent('faq');
      setFaqData(data);
    }
    getData();
  }, [setFaqData])

  return (
   <>
   <div className="faq" id="faq">
    <div className="faq__mountains">
      <div className="faq__mountains__a">
        <Image src="https://moona.dev/senda/wp-content/uploads/2025/10/faq_blue.svg" alt="arrow image" fill={true}/>
      </div>
      <div className="faq__mountains__b">
        <Image src="https://moona.dev/senda/wp-content/uploads/2025/10/faq_white.svg" alt="arrow image" fill={true}/>
      </div>
    </div>
    <div className="faq__container">
    {
      faqData?.acf?.faq && 
      Object.keys(faqData?.acf.faq as FaqDataType).map((item, i) => {
        return (
          <FaqItem faqData={faqData} index={i} item={item} key={i}/>
        );
      })
    }
    </div>
   </div>
   </>
  );
}