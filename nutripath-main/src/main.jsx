import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Home.jsx';
import Reg from './Reg.jsx';
import Login from './Login.jsx';
import Dashboard from './Dashboard.jsx';
import Chatbot from './Chatbot.jsx';
import Diet from './Diet.jsx';
import Personalized from './Personalized.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Reg" element={<Reg/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Diet/:id" element={<Diet />} />
        <Route path ="/Chatbot" element={<Chatbot/>}/>
        <Route path ="/Personalized" element={<Personalized/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
