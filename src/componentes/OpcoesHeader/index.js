import './style.css';

//Lista com os textos
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader() {
    return (
        <ul className="opcoes">
            {/* ao inves de usar 3 li's tradicional vamos usar LOOP */}
            { textoOpcoes.map( (texto) => (
                <li className="opcao"><p>{texto}</p></li>
            ))}
        </ul>
    )
}

export default OpcoesHeader;