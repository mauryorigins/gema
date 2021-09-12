// ---Dependencys
import React from 'react';
import { Row } from 'antd';
// ---Redux
//import { useSelector } from 'react-redux';
// ---Types
//import { ReduxState } from 'Reducers';
// ---Components
import ServicesCard from '../Components/Services/ServicesCard'
// ---Other
import { servicesPageData } from '../Others/Global-Data'

// ------------------------------------------ COMPONENT-----------------------------------------
function Services() {
  // Redux States
  const isMovil = false ;
  return (
    <Row className={isMovil? 'sm-top-margin' : 'md-top-margin'}>
      {
        servicesPageData.services.map((element, index)=><ServicesCard path={element.path} title={element.title} data={element.data} key={index} index={index}  />)
      }
    </Row>
  );
}

export default Services;