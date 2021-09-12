// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import HomeCont from '../Conteiners/Prevencion';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function PrevencionPage () {
  return (
    <>
      <Helmet>
        <title>GEMAAYECAC | PREVENCIÖN</title>
      </Helmet>
      <HomeCont />
    </>
  );
}