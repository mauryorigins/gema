// ---Dependencys
import React from 'react';
// ---CommonComps
import TextBlogContainer from '../commonComps/TextBlogContainer';
import TextBlogContent from '../commonComps/TextBlogContent'
// ---Other
import { litigioPageData } from '../Others/Global-Data'

// ------------------------------------------ COMPONENT-----------------------------------------
export default function Litigio() {
  const { title, detail } = litigioPageData.data
   // Redux States
   const  isMovil = false;
  return (
    <>
      <TextBlogContainer isMovil={isMovil} title={litigioPageData.title}>
        <TextBlogContent detail={detail} title={title} />
      </TextBlogContainer>
    </>
  );
}