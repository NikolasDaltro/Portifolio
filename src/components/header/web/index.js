import React from 'react'
import "./web.css"

function Web() {
    return(
        <div className='web'>
        <div className='web-option'>
            <a href='/home'><i class="fi-rr-home option-icon"></i>Inicio</a>
        </div>
        <div className='web-option'>
            <a href='/projetos'><i class="fi-rr-edit-alt option-icon"></i>Projetos</a>
        </div>

        <div className='web-option'>
            <a href='/tecnologias'><i class="fi-rr-laptop option-icon"></i>Tecnologias</a>
        </div>

        <div className='web-option'>
            <a href='/trabalhos'><i class="fi-rr-briefcase option-icon"></i></a>
        </div>

        <div className='web-option'>
            <a href='/contatos'><i class="fi-rr-user option-icon"></i>Contatos</a>
        </div>

    </div>

    );
   

}

export default Web
