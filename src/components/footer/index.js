import React from 'react';
import './footer.css';
import { FiLinkedin } from "react-icons/fi";
import { FaWhatsapp, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div>
    <div className='rede'>
    
        <a target = '_blank' href='https://www.linkedin.com/in/nikolas-daltro-897795244/'> <FiLinkedin className='linkedin'/></a>
        <a target = '_blank' href='https://github.com/NikolasDaltro'><FaGithub className='git'  /></a>
        <a target = '_blank' href='https://wa.me/5563992984509'><FaWhatsapp className='whats'  /></a>
      </div>   
      <div className='footer'>
        Nikolas Daltro-2022/2023 
       

      </div>
      </div>
      
      
  )
  
 
}

export default Footer
