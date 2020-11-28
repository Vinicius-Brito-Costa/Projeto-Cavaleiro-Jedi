import '../../../css/index.css';
import '../../../javascript/pagina-produto';
import * as script from '../../../javascript/products-main'
import React from 'react';
import Produto from '../../box_produto';
export default class Produtos extends React.Component{
    constructor(props){
        super();
        this.state = {
            BD: []
        }
    }
    async componentDidMount(){
        let resposta = await fetch("https://fullstackbd.000webhostapp.com/contentJson.php?table=produtos&query=destaque")
        let dados = await resposta.json();
        this.setState({BD: dados});
        script.ChecarVazio()
    }
    render(){
        return(
            <main className="container-fluid mx-0 px-0 conteudo-site pb-4">
                <div className="bg-dark">
                    <img className="cover1" src={require('../../../imagens/index/aryan-dhiman-iGLLtLINSkw-unsplash.jpg').default} alt="" title="Photo by Aryan Dhiman on Unsplash" />
                    <div className="comentario">
                        <div className="texto">
                            <h1>Seja bem vindo a Full Stack</h1>
                            <p>Com preços imbatíveis e mais de 10 produtos em seu catálogo, o Full Stack! está sempre à frente e traz em primeira mão os melhores lançamentos do mercado mundial de computadores.</p>
                            <p>O e-commerce é um dos sites mais acessados do país trazendo produtos e atendimento de alta qualidade.</p>
                        </div>
                    </div>
                    <h1 className="text-white text-center">Produtos em destaque</h1>
                    <div className="container-fluid w-100 mx-0 pb-2">
                        <div className="container-fluid mx-0 produtos row-cols-2 row-cols-lg-4 px-0 row">
                        {this.state.BD && this.state.BD.map((item, index) => 
                            <Produto
                                key = {index}
                                nome = {item['nome']}
                                id_produto = {item['id_produto']}
                                preco = {item['preco_atual']}
                                preco_antigo = {(item['preco_antigo'] == null ?'espaco': ("R$ " + item['preco_antigo']))}
                                promo = {item['promocao'] == null ? null: (item['promocao'] + "%")}
                                classe = {item['id_sub_categoria']}
                                id = {item['id_categoria']}
                                imagem = {item['nome_imagem']}
                                retorno = {item}

                            />

                        )}
                        </div>
                    </div>
                </div>
            </main>
        );
    }
    
}