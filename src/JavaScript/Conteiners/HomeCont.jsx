// ---Components
import HomeDetails from '../Components/Home/HomeDetails';
import HomeTitle from '../Components/Home/HomeTitle';
// ---Dependecys
import { Row, Col } from 'antd';

export default function HomeCont() {
    // Redux States
    const  isMovil  = false;
    return (
      <Row>
        <Col className={isMovil?'md-top-margin': 'lg-top-margin'} xs={24} sm={24} md={10} lg={12} xl={12} xxl={12}>
        <HomeTitle />
        </Col>
        <Col className={isMovil?'sm-top-margin': 'md-top-margin'} xs={24} sm={24} md={14} lg={12} xl={12} xxl={12}>
        <HomeDetails />
         </Col>
      </Row>
    );
  }