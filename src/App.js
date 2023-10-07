import React from 'react';
import TextBody from './Componets/TextBody';
import Navbar from './Componets/Navbar';
import About from './Componets/About';
import Contact from './Componets/Contact';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Main>
     <Navbar/>

     <Routes>
     
     <Route exact path='/' element={<TextBody/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
  
      </Routes>

      </Main>
      </>

  );
}



export default App;
