import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './components/navbar';
import { LandingPage } from './pages/landingpage';
import { ScrollToTop } from './components/scrolltotop';
import { useState } from 'react';
import { About } from './pages/about';
import { Events} from './pages/events';
import { Potraits } from './pages/potraits';
import { Contact } from './pages/contact';
import { AddPicture } from './pages/addPictures';
import {Admin} from './pages/Admin';
import { Documentary } from './pages/documentry';

export const Theme = React.createContext();
export const Settheme = React.createContext();

function App() {

  const [theme, settheme] = useState("Dark");

  return (
    <div className={theme === "Dark" ? "App h-[100vh] bg-[#C2CEDA] text-white bodyfont" : theme === "Light" ? "App bg-white text-[#323b0a] bodyfont" : ""}>
      <Theme.Provider value={theme}>
        <Settheme.Provider value={settheme}>
    <Router>
     <ScrollToTop>
     <Navbar/>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/About" element={<About />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/Potraits" element={<Potraits />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/AddPicture" element={<AddPicture />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/Documentary" element={<Documentary />} />
      </Routes>
     </ScrollToTop>
    </Router>
    </Settheme.Provider>
    </Theme.Provider>
    </div>
  )
}

export default App
