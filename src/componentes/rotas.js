import {
    Switch,
    Route
  } from "react-router-dom";
import Produtos from './paginas/Produtos/index';
import Index from './paginas/Index/index';
import Contato from './paginas/Contato/index';
import Sobre from './paginas/Sobre/index';
import Produto from './paginas/Produto/index';
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