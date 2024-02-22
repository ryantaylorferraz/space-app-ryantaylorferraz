import React, { useState } from 'react'
import favorito from "../../../../public/icones/favorito.png"
import expandida from "../../BotaoIcone"
import styled from 'styled-components'
import BotaoIcone from '../../BotaoIcone'



const Figure = styled.figure`
width: ${ (props) => (props.$expandida ? '90%' : '450px')};
max-width: 100%;
margin: 0;
display: flex;
flex-direction: column;
position: relative;
& > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
}
figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: #fff;
    padding: 12px;
}

h3 {
    font-family: 'GandhiSansBold';
}
h4 {
    flex-grow: 1;
}
h3, h4{
    margin: 0;
    font-size: 16px;
}
`

const BotaoEstilizado = styled.button`
    width: fit-content;
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: rgba(255, 255, 255, 0.4);
    padding: .5rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    `

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;


`

export const Imagem = ({foto, expandida = false, aoZoomSolicitado, aoAternarFavorito}) => {

    const iconeFavorita = foto.favorita ? '/icones/favorito-ativo.png' : '/icones/favorito.png'

  return (
    <Figure $expandida={expandida} id={`foto-${foto.id}`}>
        <img src={foto.path} alt={foto.alt} />
        {!expandida &&<BotaoEstilizado>{foto.nome}</BotaoEstilizado>}
        <figcaption>
            <h3>{foto.titulo}</h3>
            <Rodape>
                <h4>{foto.fonte}</h4>
                <BotaoIcone onClick={() => aoAternarFavorito(foto)}>
                    <img src={iconeFavorita}  alt="" />
                </BotaoIcone>
                {!expandida && <BotaoIcone aria-hidden={expandida}>
                    <img src="/icones/expandir.png" onClick={() => aoZoomSolicitado(foto)} alt="" /></BotaoIcone>}      
            </Rodape>
        </figcaption>
    </Figure>
  )
}
