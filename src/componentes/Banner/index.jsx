import React from 'react'
import styled from 'styled-components'

const FigureEstilizada = styled.figure`
background-image: url(../../assets/banner.png);
background-repeat: no-repeat;
background-size: cover;
min-height: 328px;
max-width: 100%;
display: flex;
align-items: center;

border-radius: 1.5rem;
flex-grow: 1;

`

const TituloEstilizado = styled.h1 `
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 3rem;
    width: 22.8rem;
    color: #fff;
    font-family: GandhiSansRegular;
    padding-left: 4rem;
`

export const Banner = ({texto}) => {
  return (
    <FigureEstilizada>
        <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizada>
  )
}
