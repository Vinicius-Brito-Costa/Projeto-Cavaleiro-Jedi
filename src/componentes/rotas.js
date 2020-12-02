import {
    Switch,
    Route
  } from "react-router-dom";
import Produtos from './paginas/produtos';
import Index from './paginas/index';
import Contato from './paginas/contato';
import Sobre from './paginas/sobre';
import Produto from './paginas/produto';
export default function Rotas(){
      return(
            <Switch>
                <Route exact path="/" component={Index}>

                </Route>
                <Route exact path="/produtos" component={Produtos}>

                </Route>
                <Route exact path="/contato" component={Contato}>

                </Route>
                <Route exact path="/sobre" component={Sobre}>

                </Route>
                <Route exact path="/produto" component={Produto}>

                </Route>
            </Switch>
      );
  }