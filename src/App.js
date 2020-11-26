import { useState } from 'react';
import React  from 'react';
class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			nome: "Vinicius",
			idade: 23,
			genero: "M"
		}
		this.alterarIdade = this.alterarIdade.bind(this);
	}

	alterarIdade(){
		let novaIdade = this.state['idade'] + 1;
		this.setState({idade: novaIdade});
	}

	render(){
		return (
			<div>
				<h1>Nome: {this.state['nome']}</h1>
				<h2>Idade: {this.state['idade']}</h2>
				<button className="btn btn-primary" onClick={this.alterarIdade}>Idade+</button>
			</div>
		);
	}
}

export default App;
