// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import HomeCont from '../Conteiners/Mediacion';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function MediacionPage () {
  return (
    <>
      <Helmet>
        <title>GEMAAYECAC | Mediación</title>
      </Helmet>
      <HomeCont />
    </>
  );
}

