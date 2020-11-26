import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import Rotas  from './rotas';

export default class Rodape extends React.Component{
    render(){
        return(
            <div className="container-fluid text-secondary footer-bg bg-dark sticky-bottom">
                <p>Formas de pagamento</p>
                <img src={require("../imagens/icones/bandeiras_cartoes.png").default} className="img-fluid"/>
                <a href="https://github.com/Vinicius-Brito-Costa" className="footer-link text-secondary" target="_blank" title="Perfil do Github">
                    <p>Desenvolvido por Vinicius Brito Costa</p>
                </a>
            </div>

        );
    }
    
}