import "./Button.scss";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Button({copy, fnc, icon, round=true}: {copy?:string, fnc?: React.MouseEventHandler<HTMLButtonElement> | (()=>void) |undefined , icon?:string, round?:boolean}) {


  const [ iconSrc, setIconSrc ] = useState<string>();

  useEffect(()=>{
    if(icon==="up_arrow"){setIconSrc('https://moona.dev/senda/wp-content/uploads/2025/08/arrow_icon.svg')};
    if(icon==="right_arrow"){setIconSrc('https://moona.dev/senda/wp-content/uploads/2025/08/arrow-right_icon.svg')};
    if(icon==="down_arrow"){setIconSrc('https://moona.dev/senda/wp-content/uploads/2025/08/arrow-down_icon.svg')};
    if(icon==="left_arrow"){setIconSrc('https://moona.dev/senda/wp-content/uploads/2025/08/arrow-left_icon.svg')};
    if(icon==="logo"){setIconSrc('https://moona.dev/senda/wp-content/uploads/2025/08/senda_icon_white.svg')};
    if(icon==="play"){setIconSrc('https://moona.dev/senda/wp-content/uploads/2025/08/play_icon.svg')};
  },[icon])

  return (
    <>
      <button className={`button-general`} onClick={ fnc }>
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
            <p className="btn__copy__text">{ copy }</p>
          </div>
        }


      </button>
    </>
  );

};