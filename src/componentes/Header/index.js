import './style.css';
import Logo from '../Logo/index.js';
import OpcoesHeader from '../OpcoesHeader/index.js';
import OpcoesIcones from '../OpcoesIcones/index.js';

function Header() {
    return (
        <header className="App-header">
            <Logo/> {/* componente Logo */}
            <OpcoesHeader/> {/* componente OpcoesHeader */}
            <OpcoesIcones/> {/* componente OpcoesIcones */}
        </header>
    )
}

export default Header;