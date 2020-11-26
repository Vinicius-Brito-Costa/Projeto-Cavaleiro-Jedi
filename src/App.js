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
/*function App() {
	const [ contador, subirContador ] = useState(0);
	function setContador(){
		subirContador(contador + 1);
		document.querySelector("span#contador").innerText = contador;
	}
  	return (
		<div className="App">
			<span className="font-weight-bolder" id="contador">{ contador }</span>
			<button type="button" className="btn btn-success" onClick={setContador}>CLique em mim</button>
		</div>
  	);
}*/

export default App;
