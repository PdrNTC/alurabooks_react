import perfil from '../../imgs/perfil.svg';
import sacola from '../../imgs/sacola.svg';
import styled from 'styled-components';

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const Icone = styled.li`
    width: 25px;
    margin-right: 40px;
`

//Lista de imgs
const icones = [perfil, sacola]

function OpcoesIcones() {
    return (
        <Icones>
            { icones.map( (icone) => (
                <Icone>
                    <img src={icone} alt="icones da pag"></img>
                </Icone>
            ))}
        </Icones>
    )
}

export default OpcoesIcones;