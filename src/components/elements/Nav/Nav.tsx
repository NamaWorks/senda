"use client";

import { ComponentDataType } from "@/utils/types";
import "./Nav.scss";

import React, { useEffect, useState } from "react";
import { fetchComponent } from "@/utils/actions/serverActions/actions";
import Button from "@/components/ui/Button/Button";

export default function Nav(){

  const [ toggled, setToggled ] = useState<boolean>(false);
  const [ navData, setNavData ] = useState<null | undefined | ComponentDataType>(null)

  useEffect(()=>{
    const getData = async () => {setNavData(await fetchComponent('nav_bar'))};
    getData();
  },[])

  return (
    <nav>
      <div className="nav__permanent">
        <div className="nav__permanent__logo">
          <Button  
            fnc={test} 
            icon={`logo`}
          />
        </div>
        <div className="nav__permanent__btn">
          <Button 
            copy={toggled ? "close" : "menu"} 
            fnc={()=>{setToggled(!toggled)}}
            // icon={`none`}
          />
        </div>
      </div>
    </nav>
  )
};

function test ():void {
  console.log('test');
};