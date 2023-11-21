import logo from './logo.svg';
import './App.css';
import Errorboundary from './Dayy5/Errorboundary';
import Na from './Dayy5/Na';
import Com from './Dayy5/Component';

import NameTry from './Dayy5/TryCat';
import Ref from './Day6/Ref';
import ClickCounter from './Day6/ClickCounter';

import HigherComp from './Day6/HigherComp';

import UseEff from './Day6/UseState';
import Home from './Day7/Home';
import About from './Day7/About';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Axios from './Day8/Axios';
import AxiosPost from './Day8/PostAxios';
import PropVal from './Day6/Protype';
import Spread from './Day6/Spread';
import AxiosDel from './Day8/AxiousPut';

function App() {
  return (
   <div>
   {/*<Errorboundary>
  <Na studname="gowtham" /></Errorboundary></div>*/}
  {/* <NameTry name="ajay" /> 
  <Com />
  <ClickCounter/>
  <HigherComp/>
  <UseEff/>
  <BrowserRouter>
  <ul>
  <li>
  <Link to="/home">Home</Link>
  </li></ul>
  <ul>
  <li>
  <Link to="/about">About</Link>
  </li></ul>
  <Routes>
  <Route path="/home" element={<Home/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  </Routes>
  </BrowserRouter>
  <Axios />
  <AxiosPost/>
  <PropVal name="Gowtham"/>
  <Spread title1="cds"/>*/}
  <AxiosDel/>
  </div>
  );
}

export default App;
