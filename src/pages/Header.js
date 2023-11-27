import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
import Layout from "./Layout";


export default function header() {
    return (
      <BrowserRouter>
        <Routes>
          
            <Route index element={<Layout />} />
            <Route path="Blog" element={<Blog />} />  
            <Route path="About" element={<About />} />       
           
        
        </Routes>
      </BrowserRouter>
    );
  }