import React from 'react';
import * as script from '../javascript/products-main';
import {
    Link
  } from "react-router-dom";
export default class Produto extends React.Component{
    
    render(){
        return(
            <div className={'box-produtos sc'+ this.props.classe +' col'} id={'c'+ this.props.id +''}>
                <Link style={{textDecoration: 'none'}}to={{pathname: '/produto', state: { item: this.props.retorno }}}>
                <form onClick={this.submitForm} role="button" method="post" action="/produto">
                    <img className="cover" src={require('../imagens/produtos/' + this.props.imagem).default} alt="Imagem do produto" />
                    <div className="box-descricao text-light px-2">
                        <span className="preco-antigo text-danger d-block"><p>{this.props.preco_antigo}</p></span>
                        <span className="nome-produto d-block text-nowrap overflow-hidden">{this.props.nome}</span>
                        <ul className="list-unstyled d-flex mx-0 px-0 container-fluid text-center">
                            <li className="preco-atual text-light mx-0 pl-1 pr-0 px-0 py-0 container-fluid"><p>{"R$ " + this.props.preco}</p></li>
                            <li className="promo bg-danger mx-0 px-0 mx-0-sm px-0-sm mx-1 px-1 "><p>{this.props.promo }</p></li>
                        </ul>
                        <input type="hidden" name="id_produto" style={{display: "none"}} ></input>
                    </div>
                </form>
                </Link>
            </div>
        );
    }
}