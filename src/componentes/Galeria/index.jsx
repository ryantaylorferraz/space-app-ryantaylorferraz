import React, { useState } from "react";
import { Titulo } from "../Titulo";
import { Tags } from "./Tags";

import { Populares } from "./Populares";
import styled from "styled-components";
import { Imagem } from "../EstilosGlobais/Imagem";

// import fotos from "../../fotos.json"


const GaleriaContainer = styled.div`
display: flex;
gap: 1.5rem;
`

const SecaoFluida = styled.section`
flex-grow: 1;
margin-bottom: 1rem;

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
}

`

export const Galeria = ({fotosDaGaleria, setFotosDaGaleria, setTag, aoFotoSelecionada, aoAternarFavorito}) => {

  return (
    <>
      <Tags setTag={setTag}/>
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ul>
            {fotosDaGaleria?.map(foto => <Imagem aoZoomSolicitado={aoFotoSelecionada}
            aoAternarFavorito={aoAternarFavorito}
             foto={foto} key={foto.id}/>)}

          </ul>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </> 
  );
};
