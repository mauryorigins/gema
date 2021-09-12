// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import HomeCont from '../Conteiners/Litigio';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function LitigioPage () {
  return (
    <>
      <Helmet>
        <title>GEMAAYECAC | LITIGIO</title>
      </Helmet>
      <HomeCont />
    </>
  );
}