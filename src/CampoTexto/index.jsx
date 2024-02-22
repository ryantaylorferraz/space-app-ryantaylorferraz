
import styled from 'styled-components'
import { IoSearchOutline } from "react-icons/io5";


const ContainerEstilizado = styled.div`
position: relative;
display: inline-block;

`

const CampoTextoEstilizado = styled.input`
background-color: transparent;
padding: 12px 16px;
height: 2.5rem;
border: 2px solid #C98CF1;
width: 566px;
color: #D9D9D9;
font-weight: 400;
font-size: 1.3rem;
line-height: 20px;
border-radius: 10px;
outline: none;
`

const IconeLupa = styled.span`
position: absolute;
right: 20px;
top: 18px;
color: #C98CF1;
`

export const InputHeader = ({setFiltro}) => {
  return (
    <ContainerEstilizado>
            <CampoTextoEstilizado placeholder='O que você procura?' type='text' onChange={(e) => setFiltro(e.target.value)}/>
            <IconeLupa>
            <IoSearchOutline size={32} />
            </IconeLupa>
    </ContainerEstilizado>
  )
}
