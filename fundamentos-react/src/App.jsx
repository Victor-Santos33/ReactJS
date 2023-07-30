import "./App.css"
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#06 - Repetição" color='#808'>
        <ListaAlunos/>
      </Card>
      <Card titulo="#05 - Componente com Filhos" color='#088'>
        <Familia sobrenome="Lima">
            <FamiliaMembro nome="Victor" />
            <FamiliaMembro nome="Rodolfo" />    
            <FamiliaMembro nome="Elizabeth" />    
            <FamiliaMembro nome="Orlando" />   
        </Familia>
      </Card>
      <Card titulo="#04 - Desafio Aleatório" color='#008'>
        <Aleatorio min={1} max={100} />
      </Card>
      <Card titulo="#03 - Fragmento" color='#080'>
        <Fragmento />
      </Card>
      <Card titulo="#02 - Com Parâmetro" color='#800'>
        <ComParametro titulo="Situação do Aluno" aluno="Victor Lima" nota={7.8} />
      </Card>
      <Card titulo="#01 - Primeiro Componente" color='#888'>
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
