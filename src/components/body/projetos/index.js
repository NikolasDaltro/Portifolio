import React from 'react';
import './projeto.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import Proje2 from '../../../assets/projetos/projeto2.gif';
import Proje3 from '../../../assets/projetos/projeto3.gif';
import Proje4 from '../../../assets/projetos/projeto4.gif';
import Proje6 from '../../../assets/projetos/projeto6.gif';
import Header from '../../header/index';
import Footer from '../../footer/index';



function Projetos() {
  return (
    <div className='princi'>
      <Header /> <br />
      <br />

      <div className='trabalhos'>
        <Carousel  variant='dark' >
          <Carousel.Item interval={500000} >
            <img
              className='d-block w-100'
              src={Proje2}
              alt='projeto2'/>
          </Carousel.Item>

          <Carousel.Item interval={500000}>
            <img
              className='d-block w-100'
              src={Proje3}
              alt='projeto3'/>
          </Carousel.Item>

          <Carousel.Item interval={500000}>
            <img
              className='d-block w-100'
              src={Proje4}
              alt='projeto4'/>
          </Carousel.Item>
          <Carousel.Item interval={500000}>
            <img
              className='d-block w-100'
              src={Proje6}
              alt='projeto6'/>
          </Carousel.Item>
         
        </Carousel>
      </div>



     
      <Footer />
    </div>
  )


}
export default Projetos
