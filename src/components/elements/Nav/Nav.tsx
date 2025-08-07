"use client";

import "./Nav.scss";

import { useState } from "react";

export default function Nav(){

  const [ toggled, setToggled ] = useState(false);

  return (
    <nav>
      <p onClick={() => {setToggled(!toggled)}}>{toggled ? "toggled" : "not toggled"}</p>
    </nav>
  )
};