import React from 'react'
import styled from 'styled-components'
import { ItemNavegacao } from './ItemNavegacao'

const ListaEstilizada = styled.ul`
    width: 212px;
    height: fit-content;

`

const AsideEstilizado = styled.aside`
    height: fit-content;
    @media(max-width: 890px){
        display: none;
    }

`

export const BarraLateral = () => {
  return (
    <AsideEstilizado>
        <nav>
            <ListaEstilizada>
                <ItemNavegacao iconeAtivo="/icones/home-ativo.png" iconeInativo="/icones/home-inativo.png" ativo={true}>
                    Inicio
                </ItemNavegacao>
                <ItemNavegacao iconeAtivo="/icones/mais-vistas-ativo.png" iconeInativo="/icones/mais-vistas-inativo.png">
                    Mais vistas
                </ItemNavegacao>
                <ItemNavegacao iconeAtivo="/icones/mais-curtidas.png" iconeInativo="/icones/mais-curtidas-inativo.png">
                    Inicio
                </ItemNavegacao>
                <ItemNavegacao iconeAtivo="/icones/novas-ativo.png" iconeInativo="/icones/novas-inativo.png">
                    Novas
                </ItemNavegacao>
                <ItemNavegacao iconeAtivo="/icones/supreenda-me-ativo.png" iconeInativo="/icones/surpreenda-me-inativo.png">
                    Supreenda-me
                </ItemNavegacao>

            </ListaEstilizada>
        </nav>
    </AsideEstilizado>
  )
}
