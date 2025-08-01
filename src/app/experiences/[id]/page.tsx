"use client";

import { use } from "react";

export default function Experience({ params }) {

  const { id } = use(params);

  return (
   <>
   <h1> {id} </h1>
   </>
  );
}
