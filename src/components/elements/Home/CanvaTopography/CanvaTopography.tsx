"use client";

import createTopographicGrid from "@/utils/actions/clientActions/canvaElements/topographicGrid/topographicGrid";
import { useEffect, useRef } from "react";

export default function CanvaTopography () {

  const canvasRef = useRef(null);

  useEffect( () => {
    if(canvasRef.current){
      createTopographicGrid(canvasRef.current)
    }
  },[] )

  return (
    <>
      <canvas ref={canvasRef}>
        </canvas>
      <div></div>
    </>
  )
}