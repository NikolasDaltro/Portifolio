import React from 'react';
import './tecnologias.css';
import Header from '../../header';
import Footer from '../../footer/index';
import HTML from './imagem/html.png';
import CSS from './imagem/css.png';
import Js from './imagem/javascript.png';
import ReactJs from './imagem/react.png';
import Vue from './imagem/vue.png';
import Node from './imagem/node.png';
import Mongo from './imagem/mongo.png';
import Msql from './imagem/myql.png';


function Tecnologias() {
  return (
    <div className='princi'><Header />
      <div className='tecs'>
        <img src={HTML} alt='html' className='html' />
        <img src={CSS} alt='css' className='css' />
        <img src={Js} alt='Js' className='Js' />
        <img src={ReactJs} alt='React' className='reactjs' />
        <img src={Vue} alt='Vue' className='Vue' />
        <img src={Node} alt='Node' className='Node' />
        <img src={Mongo} alt='Mongo' className='Mongo' />
        <img src={Msql} alt='Msql' className='Msql' />
      </div>







      <Footer />
    </div>




  )

}

export default Tecnologias;
