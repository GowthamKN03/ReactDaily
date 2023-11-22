import logo from './logo.svg';
import './App.css';
import './Day4/Deno.css'
import FunctionalEx1 from './Components/FunctionalComponents';
import NestedComponent from './Components/NestedComponent';
import Arrow from './Components/Arrow';
import Defaultpropsfun from './Day3/Defaultpropsfun';
import Parent from './Day3/ParentChild';
import PropsFun from './Day3/PropsFunctioncomponent';
import Stat from './Day3/Stateclasss';
import Too from './Day3/Twoway';
import Key from './Day4/Keyvalue';
import Props from './Day4/Proplist';
import Style from './Day4/Style';
import List from './Day4/List';
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
   {/*<h1 style={hstyle}>Inline Style in JSX Example</h1>
      <p style={pstyle}>This is a paragraph with inline styles applied</p>
      <Defaultpropsfun name="Gowtham" college="Skcet"/>
      <PropsFun name="Gowtham" age="13"/>
      <Parent />
      <Stat />
      <Too />
      <Key />
      <Props />
     <Style/>
     <List/>*/}
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
