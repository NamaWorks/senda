"use client";

import { useEffect, useState } from "react";
import "./Faq.scss";
import { fetchComponent } from "@/utils/actions/serverActions/actions";
import { ComponentDataType, FaqDataType } from "@/utils/types";
import Image from "next/image";

export default function Faq() {

  const [ faqData, setFaqData] = useState<ComponentDataType | undefined>(undefined);

  useEffect(()=>{
    const getData = async () => {
      console.log('test')
      const data = await fetchComponent('faq');
      setFaqData(data);
    }
    getData();
  }, [setFaqData])

  return (
   <>
   <div className="faq" id="faq">
    <div className="faq__container">
    {
      faqData?.acf?.faq && 
      Object.keys(faqData?.acf.faq as FaqDataType).map((item, i) => {
        return (
          <div className={`faq__item`} key={`faq-item-${i}`}>
            <div className="faq__item__question">
              <p>{(faqData?.acf.faq as FaqDataType)[item as keyof FaqDataType].question}</p>
            </div>

            <div className="faq__item__answer">
              <p>{(faqData?.acf.faq as FaqDataType)[item as keyof FaqDataType].answer}</p>
            </div>

            <div className="faq__item__arrow">
              <Image src="https://moona.dev/senda/wp-content/uploads/2025/08/interface-arrows-left-circle-1-arrow-keyboard-circle-button-left.svg" alt="arrow image" fill={true}/>
            </div>
          </div>
        )
      })
    }
    </div>
   </div>
   </>
  );
}
