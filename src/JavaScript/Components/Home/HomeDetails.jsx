// ---Dependencys
import React from 'react';
// ---Others
import { homePageData } from "../../Others/Global-Data";
// ------------------------------------------ COMPONENT-----------------------------------------
export default function HomeDetails (){
  return (
    <>
      <h2>{homePageData.title}</h2>
      <p>{homePageData.detail}</p>
    </>
  );
}

