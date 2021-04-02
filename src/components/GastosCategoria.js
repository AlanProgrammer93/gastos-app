import React from 'react'
import { Helmet } from 'react-helmet'
import BtnRegresar from '../elements/BtnRegresar'
import { Categoria, ElementoListaCategorias, ListaDeCategorias, Valor } from '../elements/ElementosDeLista'
import { Header, Titulo } from '../elements/Header'
import IconoCategoria from '../elements/IconoCategoria'
import useObtenerGastosDelMesPorCategoria from '../hooks/useObtenerGastosDelMesPorCategoria'
import BarraTotalGastado from './BarraTotalGastado'
import convertirAMoneda from '../funciones/convertirAMoneda'

const GastosCategoria = () => {
   const gastosPorCategoria = useObtenerGastosDelMesPorCategoria();

    return (
        <>
            <Helmet>
                <title>Gastos por Categoria</title>
            </Helmet>

            <Header>
                <BtnRegresar />
                <Titulo>Gastos por Categoria</Titulo>
            </Header>

            <ListaDeCategorias>
                {gastosPorCategoria.map((elemento, index) => {
                    return (
                        <ElementoListaCategorias key={index}>
                            <Categoria>
                                <IconoCategoria id={elemento.categoria} />
                                {elemento.categoria}
                            </Categoria>
                            <Valor>
                                {convertirAMoneda(elemento.cantidad)}
                            </Valor>
                        </ElementoListaCategorias>
                    )
                })}
            </ListaDeCategorias>

            <BarraTotalGastado />
        </>
    )
}

export default GastosCategoria
