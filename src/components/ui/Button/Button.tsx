import { btnTextIn, btnTextOut } from "@/utils/actions/clientActions/animations/actionTriggered/textInteractionAnimations";
import "./Button.scss";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HtmlContext } from "next/dist/server/route-modules/pages/vendored/contexts/entrypoints";

export default function Button({copy, fnc, icon, round=true}: {copy?:string, fnc?: React.MouseEventHandler<HTMLButtonElement> | (()=>void) |undefined , icon?:string, round?:boolean}) {


  const [ iconSrc, setIconSrc ] = useState<string>();
  const [ newCopy, setNewCopy ] = useState<string | undefined>(copy);
  const buttonTextRef = useRef(null)

  useEffect(()=>{
    if(icon==="up_arrow"){setIconSrc('https://moona.dev/senda/wp-content/uploads/2025/08/arrow_icon.svg')};
    if(icon==="right_arrow"){setIconSrc('https://moona.dev/senda/wp-content/uploads/2025/08/arrow-right_icon.svg')};
    if(icon==="down_arrow"){setIconSrc('https://moona.dev/senda/wp-content/uploads/2025/08/arrow-down_icon.svg')};
    if(icon==="left_arrow"){setIconSrc('https://moona.dev/senda/wp-content/uploads/2025/08/arrow-left_icon.svg')};
    if(icon==="logo"){setIconSrc('https://moona.dev/senda/wp-content/uploads/2025/08/senda_icon_white.svg')};
    if(icon==="play"){setIconSrc('https://moona.dev/senda/wp-content/uploads/2025/08/play_icon.svg')};
  },[icon])

  useEffect(()=>{
      if(buttonTextRef.current) {
        btnTextOut(buttonTextRef.current);
      };

      setTimeout(() => {
        setNewCopy(copy);
        if(buttonTextRef.current) {(buttonTextRef.current as HTMLElement).style.opacity = '0'};
        setTimeout(() => {
          if(buttonTextRef.current) {
            btnTextIn(buttonTextRef.current);
            (buttonTextRef.current as HTMLElement).style.opacity = '1';
            };
        }, 50);

      }, 250);
  },[copy])

  return (
    <>
      <button className={`button-general`} onClick={ (e) => { if(fnc) {fnc(e)} }}>
        { icon &&
          <div className={`btn__icon btn ${icon === "logo" && 'logo-icon'} ${round ? 'rounded-button' : 'squared-button'}`}>
            <Image 
              fill={true}
              src={ typeof iconSrc === 'string' ? iconSrc : 'null' } 
              alt={`button ${icon} icon`} />
          </div>
        }

        { copy &&
          <div className={`btn__copy btn ${round ? 'rounded-button' : 'squared-button'}`}>
            <p ref={buttonTextRef} className="btn__copy__text">{ newCopy }</p>
          </div>
        }
      </button>
    </>
  );

};