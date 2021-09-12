// ---Dependencys
import React from 'react';
// ---CommonComps
import TextBlogContainer from '../commonComps/TextBlogContainer';
import TextBlogContent from '../commonComps/TextBlogContent'
// ---Other
import { mediacionPageData } from '../Others/Global-Data'

// ------------------------------------------ COMPONENT-----------------------------------------
export default function Mediacion() {
  const { title, detail } = mediacionPageData.data
   // Redux States
   const  isMovil = false;
  return (
    <>
      <TextBlogContainer isMovil={isMovil} title={mediacionPageData.title}>
        <TextBlogContent detail={detail} title={title} />
      </TextBlogContainer>
    </>
  );
}