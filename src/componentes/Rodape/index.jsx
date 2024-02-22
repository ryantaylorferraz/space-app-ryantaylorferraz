import React from "react";
import styled from "styled-components";
import facebook from "../../../public/imagens/sociais/facebook.svg"
import twitter from "../../../public/imagens/sociais/twitter.svg"
import instagram from "../../../public/imagens/sociais/instagram.svg"



const FooterEstilizado = styled.footer`
max-width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding-inline: 2rem;
background-color: #04244f;
height: 4rem;

h4 {
    font-size: 1rem;
    color: #fff;
    font-weight: 400;

}
`;

const DivEstilizada = styled.div`
display: flex;
gap: 1.5rem;
span {
    cursor: pointer;
}
`

export const Rodape = () => {
  return (
    <FooterEstilizado>
      <DivEstilizada>
        <span><img src={facebook} alt="iconFb" /></span>
        <span><img src={twitter} alt="iconTt" /></span>
        <span><img src={instagram} alt="iconInsta" /></span>
      </DivEstilizada>
      <h4>Desenvolvido por Alura.</h4>
    </FooterEstilizado>
  );
};
