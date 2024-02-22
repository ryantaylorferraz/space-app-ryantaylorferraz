import styled from "styled-components";
import { EstilosGlobais } from "./componentes/EstilosGlobais";
import { Cabecalho } from "./componentes/Cabecalho";
import { BarraLateral } from "./componentes/BarraLateral";
import { Banner } from "./componentes/Banner";
import { Galeria } from "./componentes/Galeria";

import tags from "./componentes/Galeria/Tags/tags.json"

import fotos from "./fotos.json"

import { useState } from "react";
import { ModalZoom } from "./componentes/ModalZoom";
import { Rodape } from "./componentes/Rodape";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1300px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 1.5rem;
`;

const ConteudoGaleria = styled.section`
display: flex;
flex-direction: column;
flex-grow: 1;

`

const App = () => {
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)
  
  const [fotoSelecionada, setFotoSelecionada] = useState(null) 

  const [listFotos, setListFotos] = useState(fotos)

  let fotosComNome = listFotos.map(foto => {
    const nomeCorrespondente = tags.find(item => item.id === foto.tagId)?.titulo;
    return {
      ...foto,
      nome: nomeCorrespondente || ''
    }
  });  
  

      const fotosFiltradas = fotosComNome.filter(foto => {
        const filtroPorTag = !tag || foto.tagId === tag;
        const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
        return filtroPorTag && filtroPorTitulo
      })

      const aoAternarFavorito = (foto) => {
    
        if(foto.id === fotoSelecionada?.id){
          setFotoSelecionada({
            ...fotoSelecionada,
            favorita: !fotoSelecionada.favorita
          })
        } 
           setListFotos(fotosComNome.map(fotoDaGaleria => {
          return {
            ...fotoDaGaleria,
            favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
          }
        }))
    
      }

  return (
    <FundoGradiente>
      
      <EstilosGlobais />
      <AppContainer> 
        <Cabecalho  filtro={filtro} setFiltro={setFiltro}
         />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
          <Banner texto={"A galeria mais completa de fotos do espaço!"} />
          <Galeria aoFotoSelecionada={setFotoSelecionada}
          aoAternarFavorito={aoAternarFavorito}
           fotosComNome={fotosComNome} tag={tag}
          setTag={setTag} filtro={filtro} fotosFiltradas={fotosFiltradas} />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <Rodape />
      <ModalZoom foto={fotoSelecionada} aoFechar={() => setFotoSelecionada(null)} aoAternarFavorito={aoAternarFavorito} />
    </FundoGradiente>
  );
}

export default App;
