import './global.css'

import HomePage from "./Pages/Home";
import NotFoundPage from "./Pages/NotFound";
import {  Route, Routes } from "react-router-dom";
import DefaultLayoutComponent from './Components/DefaultLayout';

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayoutComponent/>}>
        <Route path="/" element={<HomePage/>} />
      </Route> 
      <Route path="*" element={<NotFoundPage/>} />     
    </Routes>
  );
}

export default App;
