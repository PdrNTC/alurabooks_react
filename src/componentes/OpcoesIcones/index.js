import './style.css';
import perfil from '../../imgs/perfil.svg';
import sacola from '../../imgs/sacola.svg';

//Lista de imgs
const icones = [perfil, sacola]

function OpcoesIcones() {
    return (
        <ul className="icones">
            { icones.map( (icone) => (
                <li><img src={icone} alt="icones da pag"></img></li>
            ))}
        </ul>
    )
}

export default OpcoesIcones;