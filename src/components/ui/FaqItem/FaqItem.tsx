"use client";

import { ComponentDataType, FaqDataType } from "@/utils/types";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import './FaqItem.scss';
import { toggleBoxExpand, toggleBoxShrink } from "@/utils/actions/clientActions/animations/actionTriggered/elementsInteractionAnimation";

export default function FaqItem({ faqData, index, item }: {faqData: ComponentDataType, index: number, item: string}) {

  const [ toggleState, setToggleState ] = useState<boolean>(true);

  const containerRef = useRef(null);

  useEffect(()=>{
    if(containerRef.current) {
      if(toggleState){
        toggleBoxShrink(containerRef.current)
      } else if (!toggleState){
        toggleBoxExpand(containerRef.current)
      }
    }
  },[toggleState])

  return (
    <div
      className={`faq__item`}
      key={`faq-item-${index}`}
      ref={containerRef}
      onClick={(e) => {
        handleToggleClick(e.target, toggleState);
        setToggleState(!toggleState);
      }}
    >
      <div className="faq__item__question">
        <p>
          {
            (faqData?.acf.faq as FaqDataType)[item as keyof FaqDataType]
              .question
          }
        </p>
      </div>

      <div className="faq__item__answer">
        <p>
          {(faqData?.acf.faq as FaqDataType)[item as keyof FaqDataType].answer}
        </p>
      </div>

      <div className="faq__item__arrow" style={{rotate:`${toggleState ? 270 : 90}deg`}}>
        <Image
          src="https://moona.dev/senda/wp-content/uploads/2025/08/interface-arrows-left-circle-1-arrow-keyboard-circle-button-left.svg"
          alt="arrow image"
          fill={true}
        />
      </div>
    </div>
  );
}

function handleToggleClick (target:Element | EventTarget, state: boolean) {

  // const question = (target as HTMLElement).querySelector('.faq__item__question')?.children[0];
  // const answer = (target as HTMLElement).querySelector('.faq__item__answer');

  console.log(target)

  if(state){
    toggleBoxShrink(target)
  } else if (!state){
    toggleBoxExpand(target)
  }

};