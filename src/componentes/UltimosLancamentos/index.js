import { livros } from "./dadosUltimosLancamentos";
import { Titulo } from "../Titulo";
import styled from "styled-components";
import CardRecomenda from "../CardRecomenda";
import imgLivro from '../../imgs/livro2.png';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
            cor="#EB9B00" 
            tamanhoFonte="36px"
            >ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <img src={livro.src} alt="foto do livro" />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda 
            titulo="Talvez você se interesse por"
            subtitulo="React com node"
            descricao="Construindo uma aplicação React"
            img={imgLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;