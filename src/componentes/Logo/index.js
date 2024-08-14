import logo from '../../imgs/logo.svg';
import './style.css'

function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="Logo da alurabooks" className="logo-img"></img>
            <p><strong>Alura</strong>Books</p>
        </div>
    )
}

export default Logo;