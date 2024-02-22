import styled from "styled-components";
import { EstilosGlobais } from "./componentes/EstilosGlobais";
import { Cabecalho } from "./componentes/Cabecalho";
import { BarraLateral } from "./componentes/BarraLateral";
import { Banner } from "./componentes/Banner";
import { Galeria } from "./componentes/Galeria";

import tags from "./componentes/Galeria/Tags/tags.json"

import fotos from "./fotos.json"

import { useEffect, useState } from "react";
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
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)

  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  useEffect(() => {
      const nomesJson = tags
      const fotosComNome = fotos.map(foto => {
        const nomeCorrespondente = nomesJson.find(item => item.id === foto.tagId)?.titulo;
        return {
          ...foto,
          nome: nomeCorrespondente || ''
        }
      });
      setFotosDaGaleria(fotosComNome)
  }, [])
  


  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().startsWith(filtro.toLowerCase())
      console.log(filtroPorTitulo)
      return filtroPorTag && filtroPorTitulo
    })
    setFotosDaGaleria(fotosFiltradas)
  }, [filtro, tag])

  const aoAternarFavorito = (foto) => {

    if(foto.id === fotoSelecionada?.id){
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }

    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
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
         <h1>{fotosDaGaleria.forEach(item => <p key={item.id}>{item}</p>)}</h1>
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
          <Banner texto={"A galeria mais completa de fotos do espaço!"} />
          <Galeria aoFotoSelecionada={setFotoSelecionada}
          aoAternarFavorito={aoAternarFavorito}
           fotosDaGaleria={fotosDaGaleria} setTag={setTag} />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <Rodape />
      <ModalZoom foto={fotoSelecionada} aoFechar={() => setFotoSelecionada(null)} aoAternarFavorito={aoAternarFavorito} />
    </FundoGradiente>
  );
}

export default App;
