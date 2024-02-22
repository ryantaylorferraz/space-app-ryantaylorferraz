import styled from "styled-components"
import { InputHeader } from "../../CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        max-width: 212px;
    }

`


export const Cabecalho = ({filtro, setFiltro}) => {
    return (
        <HeaderEstilizado>
            <img src="/imagens/logo.png" alt="" />
            <InputHeader filtro={filtro} setFiltro={setFiltro}/>
        </HeaderEstilizado>
    )
}