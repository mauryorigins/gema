import 'antd/dist/antd.css';
import './Css/index.css';
//----Dependancys
import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
//----Pages
import HomePage from './JavaScript/Pages/HomePage';
import ServicesPage from './JavaScript/Pages/ServicesPage';
import Error404Page from './JavaScript/Pages/Error404Page';
import MediacionPage from './JavaScript/Pages/MediacionPage';
import PrevencionPage from './JavaScript/Pages/PrevencionPage';
import LitigioPage from './JavaScript/Pages/Litigiopage';
//----Components
import NavbarCont from './JavaScript/Conteiners/NavbarCont';

export default function Gema() {
  return (
    <BrowserRouter>
      <NavbarCont />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Servicios" component={ServicesPage} />
        <Route exact path="/Mediacion" component={MediacionPage} />
        <Route exact path="/Prevencion" component={PrevencionPage} />
        <Route exact path="/Litigio" component={LitigioPage} />
        <Route exact path="*" component={Error404Page} />
      </Switch>
    </BrowserRouter>
  );
}
