// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import HomeCont from '../Conteiners/HomeCont';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function HomePage (){
  return (
    <>
      <Helmet>
        <title>GEMAAYECAC | Inicio</title>
      </Helmet>
      <HomeCont />
    </>
  );
}