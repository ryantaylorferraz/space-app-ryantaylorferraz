import { Titulo } from "../../Titulo"
import popular1 from "../../../populares.json"
import { useState } from "react"
import styled from "styled-components"

const ContainerPopular = styled.section`
display: flex;
flex-direction: column;
gap: .3rem;

@media(max-width: 800px){
  display: none;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  img {
    border-radius: 20px;
    height: 9.5rem;
    max-width: 13rem;
    cursor: pointer;
    transition: transform ease-out .3s;
    &:hover {
      transform: scale(1.05);
    }
  }
}
`

const Botao = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;


export const Populares = () => {

  const [fotosPopulares, setFotosPopulares] = useState(popular1)
  return (<ContainerPopular>
    <Titulo  $alinhamento="center">Populares</Titulo>
    <ul>
      {fotosPopulares.map(foto => <li key={foto.fotoPopular}><img src={foto.fotoPopular} alt="" /></li>) }
    </ul>
    <Botao>Ver mais</Botao>
  </ContainerPopular>
  )
}
