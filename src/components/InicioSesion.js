import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import Boton from '../elements/Boton'
import { ContenedorBoton, Formulario, Input } from '../elements/ElementosFormulario'
import { ContenedorHeader, Header, Titulo } from '../elements/Header'
import { ReactComponent as SvgLogin } from '../imagenes/login.svg';
import styled from 'styled-components';
import { useHistory } from 'react-router'
import { auth } from '../firebase'
import Alerta from '../elements/Alerta'

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 12.5rem; /* 200px */
    margin-bottom: 1.25rem; /* 20px */
`;

const InicioSesion = () => {
    const [correo, establecerCorreo] = useState('');
    const [password, establecerPassword] = useState('');
	const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
	const [alerta, cambiarAlerta] = useState({});

	const history = useHistory();

    const handleChange = (e) => {
        if(e.target.name === 'email') {
            establecerCorreo(e.target.value);
        } else if(e.target.name === 'password') {
            establecerPassword(e.target.value);
        }
    }

    const handleSubmit = async (e) => {
		e.preventDefault();
        
		cambiarEstadoAlerta(false);
		cambiarAlerta({});

		// Comprobamos del lado del cliente que el correo sea valido.
		const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
		if( !expresionRegular.test(correo) ){
			cambiarEstadoAlerta(true);
			cambiarAlerta({
				tipo: 'error',
				mensaje: 'Por ingresa un correo electrónico valido'
			});
			return;
		}

		if(correo === '' || password === ''){
			cambiarEstadoAlerta(true);
			cambiarAlerta({
				tipo: 'error',
				mensaje: 'Por favor rellena todos los datos'
			});
			return;
		}

		try {
			await auth.signInWithEmailAndPassword(correo, password);
			history.push('/');
		} catch(error) {
			cambiarEstadoAlerta(true);

			let mensaje;
			switch(error.code){
				case 'auth/wrong-password':
					mensaje = 'La contraseña no es correcta.'
					break;
				case 'auth/user-not-found':
					mensaje = 'No se encontro ninguna cuenta con este correo electrónico.'
					break;
				default:
					mensaje = 'Hubo un error al intentar iniciar sesion.'
				break;
			}

			cambiarAlerta({tipo: 'error', mensaje: mensaje});
		}

	}

    return (
        <>
            <Helmet>
                <title>Iniciar Sesion</title>
            </Helmet>
            <Header>
                <ContenedorHeader>
                    <Titulo>Iniciar Sesion</Titulo>
                    <div>
                        <Boton to="/registro">Registrarse</Boton>
                    </div>
                </ContenedorHeader>
            </Header>
            <Formulario onSubmit={handleSubmit}>
                <Svg />
                <Input
                    type="email"
                    name="email"
                    placeholder="Correo Electronico"
                    value={correo}
                    onChange={handleChange} />
                <Input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={handleChange} />
                <ContenedorBoton>
                    <Boton as="button" primario type="submit">Iniciar Sesion</Boton>
                </ContenedorBoton>
            </Formulario>

            <Alerta 
				tipo={alerta.tipo}
				mensaje={alerta.mensaje}
				estadoAlerta={estadoAlerta}
				cambiarEstadoAlerta={cambiarEstadoAlerta}
			/>
        </>
    )
}

export default InicioSesion
