import React from 'react';
import ReactDOM from 'react-dom';
import Header from './componentes/barraNavegacao';
import Footer from './componentes/rodape'
import './css/configuracao_basica.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

