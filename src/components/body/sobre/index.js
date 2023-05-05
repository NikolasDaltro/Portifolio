import React from 'react';
import aceno from '../../../assets/aceno.gif';
import imagem3 from '../../../assets/imagem3.gif';
import './sobre.css';
import { SiGmail } from "react-icons/si";
import {GrDocumentPdf} from "react-icons/gr";


function Sobre() {
  return (
    <div className='about'>
      <div className='about-top'>
        <div className='about-info'><br/>
         <br/> Olá<img src={aceno} alt='aceno' className="aceno" /> Sou Nikolas!<br/>
          <br /><span className='about-name'><h7>Aqui está um pouco mais sobre meus projetos e experiências
          </h7></span><br/>

          <br /><h3> Desenvolvedor Full-Stack em JavaScript </h3> <br/>
          <h6> <SiGmail className='gmail' />nikolasdsantos@gmail.com</h6>
          <h6><GrDocumentPdf/>curriculo</h6> 

         
        </div> 
        
       

        <div className="about-photo">
          <img src={imagem3} alt='imagem3' className="picture" />
        </div>




      </div>
    

    </div>
  )
}

export default Sobre;
