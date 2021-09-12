// ---Dependencys
import { withRouter } from 'react-router-dom';
// ---Components
import ClientMenu from '../Components/Navbar/ClientMenu';
import GlobalComponents from '../Components/Navbar/GlobalComponents';
// ---Others
//import isMovilDetector from '../Others/isMovilDetector.jsx';

// ------------------------------------------ COMPONENT-----------------------------------------
const NavbarCont = withRouter(props => {
  const currentPath = props.location.pathname;
  // Redux States
  const  isMovil  = false
  // Redux Actions
  
  return (
    <>
      <ClientMenu currentPath={currentPath} isMovil={isMovil} />
      <GlobalComponents />
    </>
  );
});

export default NavbarCont;