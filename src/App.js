import React from 'react';
import { Helmet } from 'react-helmet';
import BarraTotalGastado from './components/BarraTotalGastado';
import FomularioGasto from './components/FormularioGasto';
import Boton from './elements/Boton';
import BotonCerrarSesion from './elements/BotonCerrarSesion';
import { ContenedorBotones, ContenedorHeader, Header, Titulo } from './elements/Header';

function App() {
  return (
    <>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>AGREGAR GASTO</Titulo>
          <ContenedorBotones>
            <Boton to="/categorias">Categorias</Boton>
            <Boton to="/lista">Lista de Gastos</Boton>
            <BotonCerrarSesion />
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>

      <FomularioGasto />

      <BarraTotalGastado />
    </>
  );
}

export default App;
