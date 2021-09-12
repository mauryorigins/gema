// ---Dependencys
import React from 'react';
// ---Others
import logo from '../../../Images/logo-full.png';
import { ownerData } from '../../Others/store-config';
// ------------------------------------------ COMPONENT-----------------------------------------
export default function ClientLogo () {
  return (
    <div className="to-home">
      <img src={logo} alt="Shelly" width="100%" />
      <section>
        {ownerData.title.main}
        <span>{ownerData.title.sub}</span>
      </section>
      {ownerData.title.shortStoreName}
    </div>
  );
}

