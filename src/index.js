import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './elements/Contenedor';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import InicioSesion from './components/InicioSesion';
import RegistroUsuarios from './components/RegistroUsuarios';
import GastosCategoria from './components/GastosCategoria';
import ListaGastos from './components/ListaGastos';
import EditarGasto from './components/EditarGasto';
import { Helmet } from 'react-helmet';
import favicon from './imagenes/logo.png';
import Fondo from './elements/Fondo';
import { AuthProvider } from './contexts/AuthContext';
import { TotalGastadoProvider } from './contexts/TotalGastadoEnElMesContext';
import RutaProtegida from './components/RutaPrivada';


WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
})

ReactDOM.render(
  <React.StrictMode>
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        
      </Helmet>

      <AuthProvider>
        <TotalGastadoProvider>
          <Router>
            <Contenedor>
              <Switch>
                <Route path="/iniciar-sesion" component={InicioSesion} />
                <Route path="/registro" component={RegistroUsuarios} />

                <RutaProtegida path="/categorias">
                  <GastosCategoria />
                </RutaProtegida>
                <RutaProtegida path="/lista">
                  <ListaGastos />
                </RutaProtegida>
                <RutaProtegida path="/editar/:id">
                  <EditarGasto />
                </RutaProtegida>
                <RutaProtegida path="/">
                  <App />
                </RutaProtegida>

              </Switch>
            </Contenedor>
          </Router>
        </TotalGastadoProvider>
      </AuthProvider>

      <Fondo />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

