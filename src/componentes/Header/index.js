import Logo from '../Logo/index.js';
import OpcoesHeader from '../OpcoesHeader/index.js';
import OpcoesIcones from '../OpcoesIcones/index.js';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`


function Header() {
    return (
        <HeaderContainer>
            <Logo/> {/* componente Logo */}
            <OpcoesHeader/> {/* componente OpcoesHeader */}
            <OpcoesIcones/> {/* componente OpcoesIcones */}
        </HeaderContainer>
    )
}

export default Header;