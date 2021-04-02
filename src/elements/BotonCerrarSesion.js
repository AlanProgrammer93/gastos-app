import React from 'react';
import {ReactComponent as IconoCerrarSesion} from './../imagenes/log-out.svg';
import Boton from './Boton';
import {useHistory} from 'react-router-dom';
import { auth } from '../firebase';

const BotonCerrarSesion = () => {
	const history = useHistory();

	const cerrarSesion = async () => {
		try {
			await auth.signOut();
			history.push('/iniciar-sesion');
		} catch(error) {
			console.log(error);
		}
	}

	return (
		<Boton iconoGrande as="button" onClick={cerrarSesion}>
			<IconoCerrarSesion />
		</Boton>
	);
}
 
export default BotonCerrarSesion;