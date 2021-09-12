// ---Dependencys
import React from 'react';
// ---CommonComps
import TextBlogContainer from '../commonComps/TextBlogContainer';
import TextBlogContent from '../commonComps/TextBlogContent'
// ---Other
import { prevencionPageData } from '../Others/Global-Data'

// ------------------------------------------ COMPONENT-----------------------------------------
export default function Prevencion() {
  const { title, detail } = prevencionPageData.data
   // Redux States
   const  isMovil = false;
  return (
    <>
      <TextBlogContainer isMovil={isMovil} title={prevencionPageData.title}>
        <TextBlogContent detail={detail} title={title} />
      </TextBlogContainer>
    </>
  );
}